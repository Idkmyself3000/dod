import React, { useEffect } from 'react';
import { useGameState } from '../hooks/useGameState';
import PublicLeaderboard from '../components/PublicLeaderboard';

export default function PublicLeaderboardPage() {
  const { gameState, joinRoom } = useGameState();

  useEffect(() => {
    // Automatically join room DOMAIN as a spectator/leaderboard view
    // Using a special teamId 'spectator_leaderboard'
    if (gameState.roomCode !== 'DOMAIN') {
      joinRoom('spectator_leaderboard', 'DOMAIN', 'LEADERBOARD_VIEW');
    }
  }, [gameState.roomCode, joinRoom]);

  return (
    <div className="surface-void" style={{ 
      minHeight: '100vh', 
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at center, #12121f 0%, #080810 100%)'
    }}>
      {/* Dynamic Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
        opacity: 0.05,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ zIndex: 1, width: '100%' }}>
        <h1 className="text-display" style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: '3.5rem',
          letterSpacing: '0.2em'
        }}>
          GLOBAL STANDINGS
        </h1>
        
        <PublicLeaderboard 
          teams={gameState.teams} 
          roomCode={gameState.roomCode} 
        />
      </div>

      <style>{`
        body {
          overflow-y: auto !important;
        }
        .text-display {
          animation: title-glow 4s ease-in-out infinite;
        }
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(232, 197, 71, 0.4); }
          50% { text-shadow: 0 0 40px rgba(232, 197, 71, 0.8), 0 0 60px rgba(232, 197, 71, 0.4); }
        }
      `}</style>
    </div>
  );
}
