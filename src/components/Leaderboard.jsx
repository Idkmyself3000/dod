import React from 'react';
import LivesMeter from './LivesMeter';

export default function Leaderboard({ teams, currentTeamId, myTokens, onAttack, flashedTarget }) {
  const sortedTeams = teams
    .filter(t => t.id !== 'spectator_leaderboard')
    .sort((a, b) => {
      if (a.status === 'ELIMINATED' && b.status !== 'ELIMINATED') return 1;
      if (b.status === 'ELIMINATED' && a.status !== 'ELIMINATED') return -1;
      return b.tokens - a.tokens;
    });

  return (
    <div className="leaderboard" style={{ border: 'none' }}>
      {sortedTeams.map((team, index) => {
        const isMe = team.id === currentTeamId;
        const isEliminated = team.status === 'ELIMINATED';
        const isFlashed = flashedTarget === team.id;
        const canAttack = myTokens >= 5;

        return (
          <div
            key={team.id}
            className={`lb-row ${isMe ? 'own-team' : ''} ${isEliminated ? 'eliminated animate-eliminate' : 'animate-enter'}`}
            style={{ 
              animationDelay: `${index * 0.05}s`,
              backgroundColor: isFlashed ? 'rgba(232, 71, 71, 0.4)' : (isMe ? 'rgba(232, 197, 71, 0.05)' : 'transparent'),
              transition: 'background-color 0.3s ease'
            }}
          >
            {/* Rank */}
            <div className="lb-rank" style={{ 
              color: index === 0 && !isEliminated ? 'var(--blood-active)' : 'var(--steel-mid)',
              fontWeight: index === 0 ? 'bold' : 'normal'
            }}>
              #{index + 1}
            </div>

            {/* Team Info */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="lb-team-name" style={{ 
                color: isMe ? 'var(--blood-active)' : 'var(--steel-white)',
                fontSize: '0.8rem'
              }}>
                {team.name} {isMe && '(YOU)'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                <span className="mono" style={{ color: 'var(--blood-active)', fontSize: '0.7rem' }}>{team.tokens}⬡</span>
                <LivesMeter lives={team.lives} />
              </div>
            </div>

            {/* Attack Action */}
            <div style={{ marginLeft: 'auto' }}>
              {!isMe ? (
                <button
                  onClick={() => onAttack(team.id)}
                  disabled={isEliminated || !canAttack}
                  className={`btn-ghost ${isEliminated || !canAttack ? 'btn-disabled' : ''}`}
                  style={{ 
                    padding: '4px 10px', 
                    fontSize: '0.65rem',
                    borderColor: canAttack ? 'var(--blood-active)' : 'var(--steel-dark)',
                    color: canAttack ? 'var(--blood-bright)' : 'var(--steel-mid)'
                  }}
                >
                  STRIKE
                </button>
              ) : (
                <div className="text-label" style={{ fontSize: '0.6rem', color: 'var(--blood-active)' }}>ONLINE</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

