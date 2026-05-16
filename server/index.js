import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { GameRoom } from './game/GameRoom.js';
import { emitToSocket } from './utils/broadcast.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);

const FRONTEND_URL = process.env.FRONTEND_URL || '*';

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

const io = new Server(httpServer, {
  cors: {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true
  }
});

const rooms = new Map();

// Initialize permanent room 'DOMAIN' for leaderboard display
const domainRoom = new GameRoom("DOMAIN");
// We need to set IO later once io is defined, or just do it here if io is already defined
// In the file, io is defined above rooms.
domainRoom.setIO(io);
rooms.set("DOMAIN", domainRoom);

// Helper to send error to a specific socket
function sendError(socket, code, message) {
  emitToSocket(io, socket.id, "room_error", { code, message });
}

io.on('connection', (socket) => {
  console.log(`[CONNECT] New socket connected: ${socket.id}`);
  
  socket.on('disconnect', (reason) => {
    console.log(`[DISCONNECT] Socket ${socket.id} disconnected: ${reason}`);
  });

  // CLIENT -> SERVER EVENTS
  
  socket.on("join_room", ({ teamId, roomCode, displayName }) => {
    console.log(`[JOIN] Team ${displayName} (${teamId}) joining room ${roomCode}`);
    try {
      const room = rooms.get(roomCode);
      if (!room) return sendError(socket, "ROOM_NOT_FOUND", "Room does not exist");
      
      socket.join(roomCode);
      room.addTeam(teamId, displayName, socket.id);
    } catch (err) {
      sendError(socket, "INTERNAL_ERROR", err.message);
    }
  });

  socket.on("submit_answer", ({ teamId, roomCode, puzzleId, answer }) => {
    try {
      const room = rooms.get(roomCode);
      if (!room) return sendError(socket, "ROOM_NOT_FOUND", "Room does not exist");
      
      const result = room.submitAnswer(teamId, puzzleId, answer);
      if (result.correct) {
        emitToSocket(io, socket.id, "answer_result", {
          correct: true,
          tokensEarned: result.tokensEarned,
          nextPuzzle: result.nextPuzzle
        });
      } else {
        emitToSocket(io, socket.id, "answer_result", { 
          correct: false, 
          tokensEarned: 0,
          nextPuzzle: result.nextPuzzle 
        });
      }
    } catch (err) {
      sendError(socket, "INTERNAL_ERROR", err.message);
    }
  });

  socket.on("launch_attack", ({ fromTeamId, targetTeamId, roomCode }) => {
    try {
      const room = rooms.get(roomCode);
      if (!room) return sendError(socket, "ROOM_NOT_FOUND", "Room does not exist");

      const result = room.launchAttack(fromTeamId, targetTeamId);
      if (!result.success) {
        sendError(socket, "ATTACK_FAILED", result.error);
      }
    } catch (err) {
      sendError(socket, "INTERNAL_ERROR", err.message);
    }
  });

  socket.on("submit_defense", ({ teamId, roomCode, attackId, answer }) => {
    try {
      const room = rooms.get(roomCode);
      if (!room) return sendError(socket, "ROOM_NOT_FOUND", "Room does not exist");

      const result = room.submitDefense(teamId, attackId, answer);
      if (!result.correct) {
        sendError(socket, "WRONG_ANSWER", "Incorrect defense code");
      }
    } catch (err) {
      sendError(socket, "INTERNAL_ERROR", err.message);
    }
  });

  socket.on("use_token_gamble", ({ teamId, roomCode }) => {
    try {
      const room = rooms.get(roomCode);
      if (!room) return sendError(socket, "ROOM_NOT_FOUND", "Room does not exist");

      const result = room.useTokenGamble(teamId);
      if (!result.success) {
        sendError(socket, "GAMBLE_FAILED", result.error || "Cannot gamble");
      } else {
        // Emit gamble puzzle
        emitToSocket(io, socket.id, "gamble_puzzle", result.puzzle);
      }
    } catch (err) {
      sendError(socket, "INTERNAL_ERROR", err.message);
    }
  });

  socket.on("request_hint", ({ teamId, roomCode }) => {
    try {
      const room = rooms.get(roomCode);
      if (!room) {
        emitToSocket(io, socket.id, "hint_result", { success: false, hint: null, error: "Room does not exist" });
        return;
      }

      const result = room.requestHint(teamId);
      emitToSocket(io, socket.id, "hint_result", { 
        success: result.success, 
        hint: result.hint || null,
        error: result.error || null
      });
    } catch (err) {
      emitToSocket(io, socket.id, "hint_result", { success: false, hint: null, error: err.message });
    }
  });

  // ORGANIZER
  socket.on("organizer_join", ({ roomCode, authKey }) => {
    console.log(`[ORGANIZER] Admin joining room ${roomCode}`);
    try {
      // Bypassed auth check for local MVP
      const room = rooms.get(roomCode);
      if (!room) return sendError(socket, "ROOM_NOT_FOUND", "Room does not exist");
      
      socket.join(roomCode);
      room.broadcastState(); // send state to organizer
    } catch (err) {
      sendError(socket, "INTERNAL_ERROR", err.message);
    }
  });

  socket.on("organizer_cmd", ({ roomCode, authKey, command, payload }) => {
    console.log(`[CMD] Organizer cmd in ${roomCode}: ${command}`);
    try {
      // Bypassed auth check for local MVP
      const room = rooms.get(roomCode);
      if (!room) return sendError(socket, "ROOM_NOT_FOUND", "Room does not exist");

      switch(command) {
        case 'advance_phase':
          room.advancePhase(payload.phaseOverride);
          break;
        case 'start_game':
          room.startGame(payload?.duration);
          break;
        case 'grant_tokens':
          room.grantTokens(payload.teamId, payload.amount, "organizer grant");
          room.broadcastState();
          break;
        case 'adjust_lives':
          if (room.state.teams[payload.teamId]) {
            room.state.teams[payload.teamId].lives = payload.lives;
            room.broadcastState();
          }
          break;
        case 'eliminate_team':
          room.eliminateTeam(payload.teamId);
          break;
        case 'reset_game':
          room.stopGame();
          const codes = room.state.roomCode;
          rooms.delete(codes);
          const newRoom = new GameRoom(codes);
          newRoom.setIO(io);
          rooms.set(codes, newRoom);
          io.to(codes).emit("room_error", { code: "GAME_RESET", message: "Game has been reset by organizer" });
          break;
        default:
          sendError(socket, "INVALID_COMMAND", "Unknown organizer command");
      }
    } catch (err) {
      sendError(socket, "INTERNAL_ERROR", err.message);
    }
  });
});

// REST Routes
app.get('/', (req, res) => {
  res.send('⬡ Operation Prometheus Server is running!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', activeRooms: rooms.size });
});

app.post('/api/rooms/create', (req, res) => {
  const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const newRoom = new GameRoom(roomCode);
  newRoom.setIO(io);
  rooms.set(roomCode, newRoom);
  console.log(`[ROOM] Created new room: ${roomCode}`);
  res.json({ roomCode });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`⬡ Operation Prometheus server running on port ${PORT}`);
});
