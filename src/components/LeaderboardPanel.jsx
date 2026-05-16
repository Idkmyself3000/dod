import React from 'react';
import LivesMeter from './LivesMeter';

export default function LeaderboardPanel({ teams }) {
  const sortedTeams = [...teams].sort((a, b) => {
    if (a.status === 'ELIMINATED' && b.status !== 'ELIMINATED') return 1;
    if (b.status === 'ELIMINATED' && a.status !== 'ELIMINATED') return -1;
    if (b.tokens !== a.tokens) return b.tokens - a.tokens;
    return b.puzzlesSolved - a.puzzlesSolved;
  });

  return (
    <div className="surface-iron leaderboard" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="leaderboard-header">
        <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'var(--steel-white)' }}></span>
        <div className="leaderboard-title">LIVE LEADERBOARD</div>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {sortedTeams.map((team, idx) => {
          const isEliminated = team.status === 'ELIMINATED';
          // We can optionally highlight "own-team", but for organizer we might not. 
          // For now, no own-team class since it's the organizer view.

          return (
            <div 
              key={team.id} 
              className={`lb-row ${isEliminated ? 'eliminated animate-eliminate' : 'animate-enter'}`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="lb-rank">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="lb-team-name">
                {team.name}
              </div>
              
              <div className="lb-lives">
                <LivesMeter lives={team.lives} max={3} />
              </div>

              <div className="lb-time">
                {team.timeInGame?.toFixed(4)}s
              </div>
              
              <div className="lb-tokens">
                {team.tokens}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
