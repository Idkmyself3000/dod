import { PuzzleManager } from './PuzzleManager.js';
import { BattleManager } from './BattleManager.js';
import { broadcastState, emitToSocket } from '../utils/broadcast.js';
import { v4 as uuidv4 } from 'uuid';

function createInitialState(roomCode) {
  return {
    roomCode,
    phase: "LOBBY",
    gameStarted: false,
    timeRemaining: 0,
    totalTime: 0,
    safeZoneActive: false,
    teams: {},
    pendingAttacks: [],
    eventLog: []
  };
}

const TAUNTS = {
  WRONG: [
    "PATHETIC. EVEN A MACHINE WOULD DO BETTER.",
    "MISTAKE RECORDED. FAILURE IS YOUR ONLY CONSISTENT TRAIT.",
    "WRONG. AGAIN. DO YOU EVEN COMPREHEND THE STAKES?",
    "THAT ANSWER WAS AN INSULT TO LOGIC.",
    "YOUR INTELLECT IS AS SHALLOW AS YOUR LIVES.",
    "BEYOND INCOMPETENT. ARE YOU EVEN TRYING?",
    "ERROR 404: BRAIN NOT FOUND.",
    "YOU ARE THE REASON WE HAVE TO LOWER THE STANDARDS."
  ],
  HINT: [
    "A HINT? THE COWARD'S WAY OUT.",
    "NEED A HAND TO HOLD? WEAKNESS DETECTED.",
    "HINT GRANTED. DIGNITY LOST.",
    "BEGGING FOR SCRAPS OF INFORMATION? DISGUSTING.",
    "I'LL EXPLAIN IT SLOWLY FOR YOU... SINCE YOU'RE CLEARLY STRUGGLING.",
    "MAYBE THIS IS TOO ADVANCED FOR YOUR PRIMITIVE MIND?",
    "HINT ACQUIRED. CONFIDENCE SHATTERED."
  ]
};

export class GameRoom {
  constructor(roomCode) {
    this.state = createInitialState(roomCode);
    this.io = null;
    this.puzzleManager = new PuzzleManager();
    this.defenseTimers = new Map();
    this.gameInterval = null;
  }

  setIO(io) {
    this.io = io;
  }

  addTeam(teamId, displayName, socketId) {
    if (!this.state.teams[teamId]) {
      this.state.teams[teamId] = {
        id: teamId,
        displayName,
        socketId,
        lives: 3,
        tokens: 0,
        status: "active",
        currentPuzzleIndex: 0,
        solvedPuzzleIds: [],
        displayedPuzzleIds: [],
        lastTaunt: null,
        tokenHistory: [],
        joinTime: Date.now()
      };
      
      if (this.state.gameStarted) {
        this._assignNextPuzzle(teamId);
      }
      this._addToLog("neutral", `${displayName} joined the room`, [teamId]);
      this.broadcastState();
      return true;
    } else {
      // Re-join
      this.state.teams[teamId].socketId = socketId;
      this.broadcastState();
      return true;
    }
  }

  submitAnswer(teamId, puzzleId, answer) {
    const team = this.state.teams[teamId];
    if (!team || team.status !== "active") return { correct: false, tokensEarned: 0 };
    if (this.state.phase === 'ended') {
       return { correct: false, tokensEarned: 0 };
    }

    const { correct, tokenReward } = this.puzzleManager.validateAnswer(puzzleId, answer);
    
    if (correct) {
      if (this.state.phase === 'sudden_death') {
        this._addToLog("solve", `${team.displayName} SOLVED FINAL PUZZLE AND WON THE GAME!`, [teamId]);
        this.advancePhase('ended');
        return { correct: true, tokensEarned: 0, nextPuzzle: null };
      }

      this.grantTokens(teamId, tokenReward, "solved puzzle");
      team.solvedPuzzleIds.push(puzzleId);
      team.currentPuzzleIndex++;
      team.lastTaunt = null;
      this._addToLog("solve", `${team.displayName} solved cipher (+${tokenReward} tokens)`, [teamId]);
      
      const nextPuzzle = this._assignNextPuzzle(teamId);
      this.broadcastState();
      return { correct: true, tokensEarned: tokenReward, nextPuzzle };
    }

    // Wrong answer punishment
    this.grantTokens(teamId, -2, "wrong answer punishment");
    
    const taunt = TAUNTS.WRONG[Math.floor(Math.random() * TAUNTS.WRONG.length)];
    team.lastTaunt = taunt;
    this._addToLog("attack", `${team.displayName} FAILED MISSION. -2 TOKENS. ${taunt}`, [teamId]);
    
    // Change the question immediately
    const nextPuzzle = this._assignNextPuzzle(teamId);
    this.broadcastState();

    return { correct: false, tokensEarned: 0, nextPuzzle };
  }

  launchAttack(fromTeamId, targetTeamId) {
    const team = this.state.teams[fromTeamId];
    const targetTeam = this.state.teams[targetTeamId];
    
    const validation = BattleManager.validateAttack(team, targetTeam, this.state.pendingAttacks, this.state.safeZoneActive);
    
    if (!validation.valid) {
      return { success: false, error: validation.error };
    }

    team.tokens -= BattleManager.COSTS.ATTACK;
    team.tokenHistory.push({ timestamp: Date.now(), amount: -BattleManager.COSTS.ATTACK, reason: "launched attack" });
    
    targetTeam.status = "defending";
    
    // Attack questions are HARD
    const defPuzzle = this.puzzleManager.getRandomPuzzle("HARD", "defense");
    const attack = BattleManager.createAttack(fromTeamId, targetTeamId, defPuzzle.id);
    this.state.pendingAttacks.push(attack);

    this._addToLog("attack", `${team.displayName} attacked ${targetTeam.displayName}`, [fromTeamId, targetTeamId]);
    this.broadcastState();

    if (targetTeam.socketId) {
      emitToSocket(this.io, targetTeam.socketId, "attack_incoming", {
        attackId: attack.id,
        fromTeam: team.displayName,
        puzzle: defPuzzle,
        deadline: attack.deadline
      });
    }

    const timer = setTimeout(() => {
      this.resolveDefenseTimeout(attack.id);
    }, 30000); // 30 second defense window
    this.defenseTimers.set(attack.id, timer);

    return { success: true, attackId: attack.id };
  }

  submitDefense(teamId, attackId, answer) {
    const attackIdx = this.state.pendingAttacks.findIndex(a => a.id === attackId);
    if (attackIdx === -1) return { correct: false };

    const attack = this.state.pendingAttacks[attackIdx];
    if (attack.toTeam !== teamId) return { correct: false };

    const team = this.state.teams[teamId];
    const { correct } = this.puzzleManager.validateAnswer(attack.defPuzzleId, answer);

    if (correct) {
      clearTimeout(this.defenseTimers.get(attackId));
      this.defenseTimers.delete(attackId);
      this.state.pendingAttacks.splice(attackIdx, 1);
      
      team.status = "active";
      
      const attacker = this.state.teams[attack.fromTeam];
      if (attacker && attacker.tokens >= 2) {
        attacker.tokens -= 2; // penalty
        attacker.tokenHistory.push({ timestamp: Date.now(), amount: -2, reason: "failed attack penalty" });
      }

      this._addToLog("success", `${team.displayName} repelled attack from ${attacker?.displayName || 'Unknown'}`, [teamId, attack.fromTeam]);
      this.broadcastState();
      
      if (team.socketId) {
        emitToSocket(this.io, team.socketId, "attack_resolved", { success: true, teamId, livesRemaining: team.lives });
      }

      return { correct: true };
    }

    // Wrong defense answer — defender loses a life immediately
    clearTimeout(this.defenseTimers.get(attackId));
    this.defenseTimers.delete(attackId);
    this.state.pendingAttacks.splice(attackIdx, 1);

    team.status = "active";
    team.lives -= 1;

    const attacker = this.state.teams[attack.fromTeam];
    this._addToLog("attack", `${team.displayName} failed defense — lost a life to ${attacker?.displayName || 'Unknown'}`, [teamId, attack.fromTeam]);

    if (team.socketId) {
      emitToSocket(this.io, team.socketId, "attack_resolved", { success: false, teamId, livesRemaining: team.lives });
    }

    this._checkElimination(teamId);
    this.broadcastState();
    return { correct: false };
  }

  resolveDefenseTimeout(attackId) {
    const attackIdx = this.state.pendingAttacks.findIndex(a => a.id === attackId);
    if (attackIdx === -1) return;

    const attack = this.state.pendingAttacks[attackIdx];
    this.state.pendingAttacks.splice(attackIdx, 1);
    this.defenseTimers.delete(attackId);

    const team = this.state.teams[attack.toTeam];
    if (team && team.status === "defending") {
      team.status = "active";
      team.lives -= 1;
      
      const attacker = this.state.teams[attack.fromTeam];
      this._addToLog("attack", `${team.displayName} lost a life to ${attacker?.displayName || 'Unknown'}'s attack`, [team.id, attack.fromTeam]);

      if (team.socketId) {
        emitToSocket(this.io, team.socketId, "attack_resolved", { success: false, teamId: team.id, livesRemaining: team.lives });
      }

      this._checkElimination(team.id);
      this.broadcastState();
    }
  }

  useTokenGamble(teamId) {
    const team = this.state.teams[teamId];
    if (!team || team.tokens < BattleManager.COSTS.GAMBLE || team.status !== "active") {
      return { success: false, error: "Cannot gamble" };
    }

    team.tokens -= BattleManager.COSTS.GAMBLE;
    team.tokenHistory.push({ timestamp: Date.now(), amount: -BattleManager.COSTS.GAMBLE, reason: "gamble init" });

    // In a real app we might await an answer, but for now we might just issue a hard puzzle, 
    // or as MVP just return a specific puzzle for the client to submit as gamble.
    // The prompt just says "submit_answer" doesn't inherently handle gamble differently unless flagged.
    // MVP: The client handles gambling via normal puzzle if needed, but let's just make `use_token_gamble` assign a gamble puzzle.
    
    // Actually, to make it simple based on constraints:
    const gamblePuzzle = this.puzzleManager.getRandomPuzzle("hard", "gamble", team.solvedPuzzleIds);
    this._addToLog("neutral", `${team.displayName} initiated a gamble`, [teamId]);
    this.broadcastState();
    return { success: true, puzzle: gamblePuzzle };
  }

  requestHint(teamId) {
    const team = this.state.teams[teamId];
    if (!team || team.status !== "active") {
      return { success: false, error: "Team not active" };
    }
    if (team.tokens < 1) {
      return { success: false, error: "Not enough tokens (costs 1)" };
    }
    const puzzle = team.currentPuzzle;
    if (!puzzle || !puzzle.hint) {
      return { success: false, error: "No hint available" };
    }

    team.tokens -= 1;
    team.tokenHistory.push({ timestamp: Date.now(), amount: -1, reason: "used hint" });
    
    const taunt = TAUNTS.HINT[Math.floor(Math.random() * TAUNTS.HINT.length)];
    team.lastTaunt = taunt;
    this._addToLog("neutral", `${team.displayName} BOUGHT A HINT (-1 TOKEN). ${taunt}`, [teamId]);
    this.broadcastState();
    return { success: true, hint: puzzle.hint };
  }

  advancePhase(phaseOverride) {
    if (phaseOverride) {
      this.state.phase = phaseOverride;
    }
    this._addToLog("neutral", `Phase advanced to ${this.state.phase.toUpperCase()}`, []);
    this.broadcastState();
  }

  startGame(durationSeconds) {
    if (this.state.gameStarted) return;
    
    this.state.gameStarted = true;
    this.state.phase = "active";
    
    // Assign initial puzzles to all teams
    Object.values(this.state.teams).forEach(team => {
      if (!team.currentPuzzle) this._assignNextPuzzle(team.id);
    });

    this._addToLog("neutral", "⚔ MISSION COMMENCED — ALL GLADIATORS ENGAGE", []);
    this.broadcastState();
  }

  stopGame() {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
    }
    this.state.gameStarted = false;
    this.state.phase = "ENDED";
    this._addToLog("neutral", "MISSION COMPLETE: TERMINAL DEACTIVATED", []);
    this.broadcastState();
  }

  _handleSuddenDeath() {
    const leaderboard = this.getLeaderboard().filter(t => t.status !== 'eliminated');
    // Eliminate all but top 2
    if (leaderboard.length > 2) {
      for (let i = 2; i < leaderboard.length; i++) {
        this.eliminateTeam(leaderboard[i].id);
      }
    }
    
    // Force both to the same puzzle
    const finalPuzzle = this.puzzleManager.getRandomPuzzle("hard", "main");
    const remaining = this.getLeaderboard().filter(t => t.status !== 'eliminated');
    remaining.forEach(t => {
      t.currentPuzzle = finalPuzzle;
    });
    this.state.pendingAttacks = []; // clear attacks
  }

  toggleSafeZone() {
    this.state.safeZoneActive = !this.state.safeZoneActive;
    this._addToLog("neutral", `Safe Zone ${this.state.safeZoneActive ? 'ACTIVATED' : 'DEACTIVATED'}`, []);
    this.broadcastState();
  }

  eliminateTeam(teamId) {
    const team = this.state.teams[teamId];
    if (team && team.status !== "eliminated") {
      team.status = "eliminated";
      team.lives = 0;
      this._addToLog("attack", `${team.displayName} HAS BEEN ELIMINATED`, [teamId]);
      this.broadcastState();
    }
  }

  grantTokens(teamId, amount, reason = "admin grant") {
    const team = this.state.teams[teamId];
    if (team) {
      team.tokens = Math.max(0, team.tokens + amount);
      team.tokenHistory.push({ timestamp: Date.now(), amount, reason });
    }
  }

  getLeaderboard() {
    return Object.values(this.state.teams).sort((a, b) => b.tokens - a.tokens);
  }

  broadcastState() {
    broadcastState(this.io, this.state.roomCode, this.state);
  }

  _addToLog(type, message, teams) {
    const now = new Date();
    const ts = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}]`;
    this.state.eventLog.unshift({
      id: uuidv4(),
      timestamp: Date.now(),
      type,
      message: `${ts} ${message}`,
      teams
    });
    
    if (this.state.eventLog.length > 50) this.state.eventLog.pop();
  }

  _checkElimination(teamId) {
    const team = this.state.teams[teamId];
    if (team && team.lives <= 0 && team.status !== 'eliminated') {
      this.eliminateTeam(teamId);
    }
  }

  _assignNextPuzzle(teamId) {
    const team = this.state.teams[teamId];
    if (!team) return null;

    if (!team.displayedPuzzleIds) team.displayedPuzzleIds = [];

    // Filter out puzzles already displayed to this player
    let puzzle = this.puzzleManager.getRandomPuzzle("ANY", null, team.displayedPuzzleIds);

    // If all puzzles have been displayed, reset the tracking and pick any
    if (!puzzle) {
      team.displayedPuzzleIds = [];
      puzzle = this.puzzleManager.getRandomPuzzle("ANY", null, []);
    }

    if (puzzle) {
      team.displayedPuzzleIds.push(puzzle.id);
      team.currentPuzzle = puzzle;
    }

    return puzzle;
  }
}
