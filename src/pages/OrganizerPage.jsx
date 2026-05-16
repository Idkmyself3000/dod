import React, { useState, useRef } from 'react';
import { useGameState } from '../hooks/useGameState';
import PhaseController from '../components/PhaseController';
import SafeZoneToggle from '../components/SafeZoneToggle';
import LeaderboardPanel from '../components/LeaderboardPanel';
import SignalLog from '../components/SignalLog';

export default function OrganizerPage() {
  const { gameState, organizer } = useGameState();
  const [showSuddenDeathModal, setShowSuddenDeathModal] = useState(false);
  const [holdingTeamId, setHoldingTeamId] = useState(null);
  const eliminateTimeoutRef = useRef(null);

  const handleEliminateHoldStart = (teamId) => {
    setHoldingTeamId(teamId);
    eliminateTimeoutRef.current = setTimeout(() => {
      organizer.eliminateTeam(teamId);
      setHoldingTeamId(null);
    }, 2000); // 2 second hold
  };

  const handleEliminateHoldEnd = () => {
    setHoldingTeamId(null);
    if (eliminateTimeoutRef.current) {
      clearTimeout(eliminateTimeoutRef.current);
    }
  };

  const getPhaseClass = (phase) => {
    if (phase === 'SUDDEN DEATH') return 'phase-badge-sudden';
    if (phase === 'SAFE ZONE') return 'phase-badge-safezone';
    if (phase === 'LOBBY' || phase === 'ENDED') return 'text-muted';
    return 'phase-badge-active';
  };

  const [activeTab, setActiveTab] = useState('control'); // 'control' or 'leaderboard'

  return (
    <div className="surface-void organizer-layout" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      
      {/* ── Header ── */}
      <div className="round-bar" style={{ flexShrink: 0 }}>
        <div className="round-bar-wordmark">TACTICAL COMMAND</div>
        <div className="round-bar-divider" />
        <div className="round-bar-round">
          <div className="round-bar-label">ROOM</div>
          <div className="round-bar-number">{gameState.roomCode}</div>
        </div>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <button 
            onClick={() => setActiveTab('control')}
            className={`text-label ${activeTab === 'control' ? 'text-danger' : 'text-muted'}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', position: 'relative' }}
          >
            CONTROL PANEL
            {activeTab === 'control' && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'var(--blood-active)' }} />}
          </button>
          <button 
            onClick={() => setActiveTab('leaderboard')}
            className={`text-label ${activeTab === 'leaderboard' ? 'text-danger' : 'text-muted'}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', position: 'relative' }}
          >
            LIVE LEADERBOARD
            {activeTab === 'leaderboard' && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'var(--blood-active)' }} />}
          </button>
        </div>

        <div className={`round-bar-phase ${gameState.gameStarted ? 'phase-badge-active' : 'text-muted'}`}>
          {gameState.gameStarted ? 'MISSION ACTIVE' : 'STANDBY'}
        </div>
      </div>

      {/* ── Content Area ── */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex' }}>
        {activeTab === 'control' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', width: '100%', height: '100%' }}>
            {/* ... Team Command logic ... */}
            <div style={{ padding: '32px', overflowY: 'auto' }}>
              <div className="text-h2 sep-steel" style={{ marginBottom: '24px' }}>OPERATIVE STATUS</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                {gameState.teams.map(team => (
                  <div key={team.id} className="surface-iron animate-enter" style={{ 
                    padding: '24px',
                    opacity: team.status === 'ELIMINATED' ? 0.4 : 1,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div className="text-h2" style={{ color: 'var(--steel-white)' }}>{team.name}</div>
                      <div className="text-label" style={{ fontSize: '0.7rem' }}>ID: {team.id}</div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '32px', marginBottom: '24px' }}>
                      <div style={{ flex: 1 }}>
                        <div className="text-label" style={{ marginBottom: '12px' }}>VITALITY</div>
                        <div className="lives-meter">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`pixel-heart ${i < team.lives ? (team.lives === 1 ? 'critical' : '') : 'empty'}`} 
                              onClick={() => organizer.updateTeamLives(team.id, i < team.lives ? team.lives - 1 : team.lives + 1)}
                              style={{ cursor: 'pointer' }}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-label" style={{ marginBottom: '12px' }}>CREDITS</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <button className="btn-ghost" onClick={() => organizer.updateTeamTokens(team.id, -1)}>-</button>
                          <span className="text-stat">{team.tokens}</span>
                          <button className="btn-ghost" onClick={() => organizer.updateTeamTokens(team.id, 1)}>+</button>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button 
                        onMouseDown={() => handleEliminateHoldStart(team.id)}
                        onMouseUp={handleEliminateHoldEnd}
                        onMouseLeave={handleEliminateHoldEnd}
                        disabled={team.status === 'ELIMINATED'}
                        className={`btn-danger ${holdingTeamId === team.id ? 'holding' : ''}`}
                        style={{ flex: 1 }}
                      >
                        {holdingTeamId === team.id ? 'TERMINATING...' : 'ELIMINATE'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Controls */}
            <div style={{ borderLeft: '1px solid var(--steel-dark)', padding: '32px', backgroundColor: 'rgba(10,10,20,0.4)', overflowY: 'auto' }}>
              <div className="text-label" style={{ marginBottom: '16px' }}>MISSION CONTROL</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {!gameState.gameStarted ? (
                  <>
                    <button 
                      onClick={() => organizer.startGame()}
                      className="btn-primary"
                      style={{ width: '100%', padding: '20px' }}
                    >
                      START MISSION
                    </button>
                    <button 
                      onClick={() => {
                        if (window.confirm("CRITICAL: THIS WILL DELETE ALL PLAYER DATA AND RESET THE LEADERBOARD. PROCEED?")) {
                          organizer.resetGame();
                        }
                      }}
                      className="btn-ghost"
                      style={{ width: '100%', padding: '12px', marginTop: '8px', color: 'var(--blood-active)', borderColor: 'var(--blood-deep)' }}
                    >
                      RESET LEADERBOARD
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => {
                      if (window.confirm("STOP MISSION AND RESET TERMINAL?")) {
                        organizer.resetGame();
                      }
                    }}
                    className="btn-danger"
                    style={{ width: '100%', padding: '20px' }}
                  >
                    RESET TERMINAL
                  </button>
                )}
              </div>

              <div className="sep-steel" style={{ margin: '32px 0' }} />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <button 
                   onClick={() => setShowSuddenDeathModal(true)}
                   className="btn-danger"
                   style={{ width: '100%', padding: '16px', background: 'var(--blood-deep)', color: 'var(--blood-bright)', fontSize: '0.8rem' }}
                >
                  ⚠ FORCE SUDDEN DEATH
                </button>
              </div>

              <div className="sep-steel" style={{ margin: '32px 0' }} />
              <SignalLog events={gameState.recentEvents} />
            </div>
          </div>
        ) : (
          <div style={{ width: '100%', height: '100%', padding: '40px', overflowY: 'auto' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="text-display" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px', color: 'var(--steel-white)' }}>
                GLOBAL STANDINGS
              </div>
              <LeaderboardPanel teams={gameState.teams} />
            </div>
          </div>
        )}
      </div>

      {/* Sudden Death Modal */}
      {showSuddenDeathModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(8,8,16,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="surface-threat" style={{ padding: '40px', width: '480px', textAlign: 'center' }}>
            <h2 className="text-display" style={{ fontSize: '2rem', color: 'var(--blood-active)', marginBottom: '32px' }}>
              CONFIRM SUDDEN DEATH
            </h2>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={() => setShowSuddenDeathModal(false)} className="btn-ghost" style={{ flex: 1 }}>
                CANCEL
              </button>
              <button 
                onClick={() => {
                  organizer.setPhase('SUDDEN DEATH');
                  setShowSuddenDeathModal(false);
                }} 
                className="btn-danger" style={{ flex: 1 }}>
                YES, ACTIVATE
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
