import { useEffect } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:3001";
export const socket = io(SOCKET_URL, { autoConnect: false });

export default function useSocket(onStateUpdate, onAttackIncoming, onAttackResolved, onRoomError) {
  useEffect(() => {
    console.log(`[SOCKET] Connecting to: ${SOCKET_URL}`);
    socket.connect();

    socket.on("connect", () => {
      console.log(`[SOCKET] Connected! ID: ${socket.id}`);
    });

    socket.on("connect_error", (err) => {
      console.error(`[SOCKET] Connection Error: ${err.message}`);
      console.log(`[SOCKET] Check if ${SOCKET_URL} is correct and the server is running.`);
    });

    if (onStateUpdate) socket.on("state_update", onStateUpdate);
    if (onAttackIncoming) socket.on("attack_incoming", onAttackIncoming);
    if (onAttackResolved) socket.on("attack_resolved", onAttackResolved);
    if (onRoomError) socket.on("room_error", onRoomError);

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("state_update");
      socket.off("attack_incoming");
      socket.off("attack_resolved");
      socket.off("room_error");
    };
  }, [onStateUpdate, onAttackIncoming, onAttackResolved, onRoomError]);

  return socket;
}
