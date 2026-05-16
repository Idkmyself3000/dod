import React from 'react';
import LivesMeter from './LivesMeter';

export default function PublicLeaderboard({ teams, roomCode }) {
  // Sort teams by tokens, then puzzles solved, filtering out spectators
  const sortedTeams = teams
    .filter(t => t.id !== 'spectator_leaderboard')
    .sort((a, b) => {
      if (a.status === 'ELIMINATED' && b.status !== 'ELIMINATED') return 1;
      if (b.status === 'ELIMINATED' && a.status !== 'ELIMINATED') return -1;
      if (b.tokens !== a.tokens) return b.tokens - a.tokens;
      return b.puzzlesSolved - a.puzzlesSolved;
    });

  return (
    <div className="surface-iron" style={{ 
      width: '100%', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      border: '4px solid var(--steel-white)',
      boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 0 100px rgba(232, 197, 71, 0.05)'
    }}>
      {/* Header */}
      <div className="round-bar" style={{ position: 'relative', borderBottom: '4px solid var(--steel-white)' }}>
        <div className="round-bar-wordmark" style={{ fontSize: '1.5rem' }}>LEADERBOARD // ROOM: {roomCode}</div>
        <div className="round-bar-phase phase-badge-active" style={{ marginLeft: 'auto' }}>LIVE FEED</div>
      </div>

      {/* Table Header */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '80px 1fr 200px 150px 150px 150px',
        padding: '20px 40px',
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid var(--steel-dark)',
      }}>
        <div className="text-label">RANK</div>
        <div className="text-label">TEAM IDENTIFIER</div>
        <div className="text-label">OPERATIONAL STATUS</div>
        <div className="text-label" style={{ textAlign: 'right' }}>SOLVED</div>
        <div className="text-label" style={{ textAlign: 'right' }}>UPLINK TIME</div>
        <div className="text-label" style={{ textAlign: 'right' }}>TOKENS</div>
      </div>

      {/* Table Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }}>
        {sortedTeams.length === 0 ? (
          <div style={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            opacity: 0.3,
            padding: '100px 0'
          }}>
            <div className="text-stat" style={{ fontSize: '3rem', marginBottom: '20px' }}>SIGNAL VOID</div>
            <div className="text-label" style={{ letterSpacing: '0.5em' }}>NO OPERATIVES DETECTED IN THIS SECTOR</div>
          </div>
        ) : (
          sortedTeams.map((team, idx) => {
            const isEliminated = team.status === 'ELIMINATED';
            const isTop3 = idx < 3;

            return (
              <div 
                key={team.id} 
                className={`lb-row ${isEliminated ? 'eliminated animate-eliminate' : 'animate-enter'}`}
                style={{ 
                  gridTemplateColumns: '80px 1fr 200px 150px 150px 150px',
                  padding: '24px 40px',
                  borderBottom: '1px solid var(--steel-abyss)',
                  animationDelay: `${idx * 0.1}s`,
                  background: isTop3 && !isEliminated ? 'rgba(232, 197, 71, 0.03)' : 'transparent'
                }}
              >
                <div className="text-stat" style={{ 
                  fontSize: isTop3 ? '2rem' : '1.5rem',
                  color: idx === 0 ? 'var(--blood-active)' : (idx === 1 ? 'var(--steel-white)' : (idx === 2 ? 'var(--steel-mid)' : 'var(--steel-dark)')),
                  textShadow: isTop3 ? '0 0 15px currentColor' : 'none'
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="text-h2" style={{ 
                  fontSize: isTop3 ? '1.5rem' : '1.125rem',
                  color: isEliminated ? 'var(--steel-mid)' : 'var(--steel-white)'
                }}>
                  {team.name}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <LivesMeter lives={team.lives} />
                  <span className={`text-label ${isEliminated ? 'text-danger' : 'text-success'}`} style={{ fontSize: '0.6rem' }}>
                    {team.status}
                  </span>
                </div>

                <div className="text-stat" style={{ textAlign: 'right', fontSize: '1.5rem', color: 'var(--blood-active)' }}>
                  {team.puzzlesSolved}
                </div>

                <div className="text-stat" style={{ textAlign: 'right', fontSize: '1.125rem', color: 'var(--steel-mid)', fontFamily: 'var(--font-mono)' }}>
                  {team.timeInGame?.toFixed(4)}s
                </div>

                <div className="text-stat" style={{ textAlign: 'right', fontSize: '1.8rem' }}>
                  {team.tokens}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer Decoration */}
      <div style={{ padding: '12px 40px', borderTop: '1px solid var(--steel-dark)', display: 'flex', justifyContent: 'space-between', opacity: 0.5 }}>
        <div className="text-label" style={{ fontSize: '0.6rem' }}>DATA SECURE // END-TO-END ENCRYPTION ACTIVE</div>
        <div className="text-label" style={{ fontSize: '0.6rem' }}>© 2026 ROYAL RUMBLE</div>
      </div>
    </div>
  );
}
