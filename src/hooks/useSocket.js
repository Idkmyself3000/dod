import { useEffect } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:3001";
export const socket = io(SOCKET_URL, { autoConnect: false });

export default function useSocket(onStateUpdate, onAttackIncoming, onAttackResolved, onRoomError) {
  useEffect(() => {
    socket.connect();

    if (onStateUpdate) socket.on("state_update", onStateUpdate);
    if (onAttackIncoming) socket.on("attack_incoming", onAttackIncoming);
    if (onAttackResolved) socket.on("attack_resolved", onAttackResolved);
    if (onRoomError) socket.on("room_error", onRoomError);

    return () => {
      socket.off("state_update");
      socket.off("attack_incoming");
      socket.off("attack_resolved");
      socket.off("room_error");
    };
  }, [onStateUpdate, onAttackIncoming, onAttackResolved, onRoomError]);

  return socket;
}
