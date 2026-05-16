import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import useSocket, { socket } from './useSocket';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [localMeta, setLocalMeta] = useState({ myTeamId: null, isOrganizer: false, incomingAttack: null });
  const [rawState, setRawState] = useState(null);
  const [gameState, setGameState] = useState(null);

  const handleStateUpdate = useCallback((serverState) => {
    setRawState(serverState);
  }, []);

  const handleAttackIncoming = useCallback((attackData) => {
    setLocalMeta(prev => ({
      ...prev,
      incomingAttack: {
        id: attackData.attackId,
        from: attackData.fromTeam,
        timeLeft: Math.max(0, Math.floor((attackData.deadline - Date.now()) / 1000)),
        puzzle: attackData.puzzle
      }
    }));
  }, []);

  const handleAttackResolved = useCallback(() => {
    setLocalMeta(prev => ({ ...prev, incomingAttack: null }));
  }, []);

  const handleRoomError = useCallback((err) => {
    console.error("Room Error:", err);
    if (err.code === "GAME_RESET") {
      setRawState(null);
      setGameState(null);
      window.location.href = "/"; // Force a full clean redirect
      return;
    }
    alert(`Error: ${err.message}`);
  }, []);

  useSocket(handleStateUpdate, handleAttackIncoming, handleAttackResolved, handleRoomError);

  // Transform raw server state into the UI-expected shape
  useEffect(() => {
    if (!rawState) return;

    const teamsArray = Object.values(rawState.teams || {});
    const myTeam = rawState.teams[localMeta.myTeamId];

    const transformed = {
      roomCode: rawState.roomCode,
      phase: rawState.phase.toUpperCase(),
      round: rawState.round,
      totalRounds: 7,
      safeZoneActive: rawState.safeZoneActive,
      timeRemaining: rawState.timeRemaining,
      gameStarted: rawState.gameStarted,
      myTeamId: localMeta.myTeamId,
      teams: teamsArray.map(t => ({
        id: t.id,
        name: t.displayName,
        tokens: t.tokens,
        lives: t.lives,
        status: t.status.toUpperCase(),
        lastTaunt: t.lastTaunt,
        puzzlesSolved: t.solvedPuzzleIds ? t.solvedPuzzleIds.length : 0,
        timeInGame: (Date.now() - (t.joinTime || Date.now())) / 1000
      })).sort((a,b) => b.tokens - a.tokens),
      recentEvents: (rawState.eventLog || []).map(e => ({
        id: e.id,
        text: e.message,
        type: e.type
      })),
      currentPuzzle: myTeam?.currentPuzzle ? {
        id: myTeam.currentPuzzle.id,
        type: myTeam.currentPuzzle.type.toUpperCase(),
        text: myTeam.currentPuzzle.cipherText,
        options: myTeam.currentPuzzle.options || [],
        progress: myTeam.currentPuzzleIndex,
        total: 7
      } : { type: 'STANDBY', text: 'AWAITING PHASE', progress: 0, total: 7 },
      incomingAttack: localMeta.incomingAttack 
        ? {
            ...localMeta.incomingAttack,
            // Re-calc time left roughly so it updates or rely on internal interval inside component
            timeLeft: Math.max(0, localMeta.incomingAttack.timeLeft)
          } 
        : null
    };

    setGameState(transformed);
  }, [rawState, localMeta]);

  // Client Actions
  const joinRoom = (teamId, roomCode, displayName) => {
    setLocalMeta(prev => ({ ...prev, myTeamId: teamId }));
    socket.emit("join_room", { teamId, roomCode, displayName });
  };

  const submitAnswer = (answer) => {
    return new Promise((resolve) => {
      if (gameState?.incomingAttack) {
        // We shouldn't hit this since submitting defense goes through repelAttack in UI
        resolve(false);
        return;
      }

      socket.emit("submit_answer", {
        teamId: localMeta.myTeamId,
        roomCode: rawState?.roomCode,
        puzzleId: rawState?.teams[localMeta.myTeamId]?.currentPuzzle?.id,
        answer
      });

      socket.once("answer_result", (res) => {
        resolve(res.correct);
      });
    });
  };

  const launchAttack = (targetTeamId) => {
    socket.emit("launch_attack", {
      fromTeamId: localMeta.myTeamId,
      targetTeamId,
      roomCode: rawState?.roomCode
    });
  };

  const repelAttack = (answer) => {
    if (localMeta.incomingAttack) {
      socket.emit("submit_defense", {
        teamId: localMeta.myTeamId,
        roomCode: rawState?.roomCode,
        attackId: localMeta.incomingAttack.id,
        answer
      });
    }
  };

  const requestHint = () => {
    return new Promise((resolve) => {
      let resolved = false;

      const onResult = (res) => {
        if (resolved) return;
        resolved = true;
        clearTimeout(timer);
        if (res.success && res.hint) {
          resolve({ success: true, hint: res.hint });
        } else {
          resolve({ success: false, hint: null });
        }
      };

      socket.once("hint_result", onResult);

      socket.emit("request_hint", {
        teamId: localMeta.myTeamId,
        roomCode: rawState?.roomCode
      });

      // Timeout fallback — also cleans up the listener
      const timer = setTimeout(() => {
        if (resolved) return;
        resolved = true;
        socket.off("hint_result", onResult);
        resolve({ success: false, hint: null });
      }, 5000);
    });
  };


  // Organizer controls
  const organizerJoin = (roomCode, authKey) => {
    setLocalMeta(prev => ({ ...prev, isOrganizer: true }));
    socket.emit("organizer_join", { roomCode, authKey });
  };

  const organizerSend = (command, payload = {}) => {
    const authKey = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_ORGANIZER_KEY : null;
    socket.emit("organizer_cmd", {
      roomCode: rawState?.roomCode,
      authKey: authKey || 'prometheus-admin-2024',
      command,
      payload
    });
  };

  const organizer = {
    setPhase: (phaseOverride) => organizerSend('advance_phase', { phaseOverride }),
    startGame: (duration) => organizerSend('start_game', { duration }),
    resetGame: () => organizerSend('reset_game'),
    updateTeamLives: (teamId, lives) => organizerSend('adjust_lives', { teamId, lives }),
    updateTeamTokens: (teamId, delta) => organizerSend('grant_tokens', { teamId, amount: delta }),
    eliminateTeam: (teamId) => organizerSend('eliminate_team', { teamId })
  };

  // Give consumers a stub gameState while connecting
  const currentGameState = gameState || {
    roomCode: '...', phase: 'LOBBY', round: 1, totalRounds: 7, 
    safeZoneActive: false, teams: [], recentEvents: [], 
    currentPuzzle: { type: '...', text: '...', progress: 0, total: 7 }
  };

  return (
    <GameContext.Provider value={{ 
      gameState: currentGameState,
      rawState,
      socket,
      joinRoom,
      submitAnswer, 
      launchAttack, 
      repelAttack,
      requestHint,
      organizerJoin,
      organizer
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameState() {
  return useContext(GameContext);
}
