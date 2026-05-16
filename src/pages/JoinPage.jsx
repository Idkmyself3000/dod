import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameState } from '../hooks/useGameState';

export default function JoinPage() {
  const [roomCode, setRoomCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [waiting, setWaiting] = useState(false);
  const { joinRoom, organizerJoin } = useGameState();
  const navigate = useNavigate();

  const handleJoin = async (e) => {
    e.preventDefault();
    const inputCode = roomCode.trim().toUpperCase();
    
    setWaiting(true);

    if (inputCode === 'SAGAV') {
      // Admin Access
      organizerJoin("DOMAIN", "prometheus-admin-2024");
      navigate('/organizer');
      return;
    }
    
    if (inputCode === 'VIBE') {
      // Player Access
      const teamId = "t_" + teamName.toLowerCase().replace(/[^a-z0-9]/g, "");
      joinRoom(teamId, "DOMAIN", teamName);
      
      setTimeout(() => {
        navigate('/play');
      }, 500);
      return;
    }

    alert(`INVALID ACCESS CODE: "${inputCode}". ACCESS DENIED.`);
    setWaiting(false);
  };

  return (
    <div className="surface-void" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      padding: '24px' 
    }}>
      <div className="animate-enter" style={{ 
        width: '100%', 
        maxWidth: '520px', 
        padding: '64px',
        border: '3px solid var(--steel-white)',
        background: 'var(--void-black)',
        position: 'relative',
      }}>
        {/* Corner war markers */}
        <div style={{ position: 'absolute', top: -2, left: -2, width: 20, height: 20, borderTop: '4px solid var(--blood-active)', borderLeft: '4px solid var(--blood-active)' }} />
        <div style={{ position: 'absolute', top: -2, right: -2, width: 20, height: 20, borderTop: '4px solid var(--blood-active)', borderRight: '4px solid var(--blood-active)' }} />
        <div style={{ position: 'absolute', bottom: -2, left: -2, width: 20, height: 20, borderBottom: '4px solid var(--blood-active)', borderLeft: '4px solid var(--blood-active)' }} />
        <div style={{ position: 'absolute', bottom: -2, right: -2, width: 20, height: 20, borderBottom: '4px solid var(--blood-active)', borderRight: '4px solid var(--blood-active)' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '2rem', color: 'var(--blood-active)', marginBottom: '12px', letterSpacing: '0.5em' }}>⚔</div>
          <h1 className="text-display" style={{ fontSize: '3.5rem', marginBottom: '12px', borderLeft: 'none', textAlign: 'center', paddingLeft: 0 }}>
            ROYAL RUMBLE
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
            <div style={{ flex: 1, height: '2px', background: 'var(--steel-mid)' }} />
            <span className="text-label" style={{ color: 'var(--blood-active)', letterSpacing: '0.5em', fontSize: '0.65rem' }}>ARENA DIGITALIS</span>
            <div style={{ flex: 1, height: '2px', background: 'var(--steel-mid)' }} />
          </div>
        </div>

        {waiting ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div className="text-stat" style={{ fontSize: '1.5rem', color: 'var(--blood-active)', marginBottom: '16px' }}>
              GLADIATOR IDENTIFIED
            </div>
            <p className="text-label animate-pulse" style={{ color: 'var(--steel-white)', fontSize: '0.8rem' }}>
              ENTERING THE ARENA...
            </p>
          </div>
        ) : (
          <form onSubmit={handleJoin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div className="text-label" style={{ marginBottom: '8px', color: 'var(--steel-light)', fontSize: '0.7rem' }}>ACCESS CODE</div>
              <div style={{ border: '2px solid var(--steel-mid)', background: 'var(--void-black)' }}>
                <input
                  type="text"
                  placeholder="ENTER CODE"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  required
                  className="mono uppercase"
                  style={{
                    width: '100%', padding: '18px 20px', backgroundColor: 'transparent',
                    border: 'none', color: 'var(--steel-white)', fontSize: '1.125rem',
                    outline: 'none', letterSpacing: '0.25em'
                  }}
                />
              </div>
            </div>
            
            <div>
              <div className="text-label" style={{ marginBottom: '8px', color: 'var(--steel-light)', fontSize: '0.7rem' }}>GLADIATOR NAME</div>
              <div style={{ border: '2px solid var(--steel-mid)', background: 'var(--void-black)' }}>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  className="mono uppercase"
                  style={{
                    width: '100%', padding: '18px 20px', backgroundColor: 'transparent',
                    border: 'none', color: 'var(--steel-white)', fontSize: '1.125rem',
                    outline: 'none', letterSpacing: '0.25em'
                  }}
                />
              </div>
            </div>
            
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.125rem', padding: '18px' }}>
                ⚔ ENTER THE ARENA
              </button>
              
              <button 
                type="button" 
                className="btn-ghost" 
                onClick={() => navigate('/leaderboard')}
                style={{ width: '100%', fontSize: '0.8rem', padding: '14px' }}
              >
                SPECTATE THE ARENA
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
              <span className="text-label" style={{ fontSize: '0.65rem', color: 'var(--steel-mid)' }}>COLOSSEUM // SEC_V5 // ENCRYPTED</span>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .animate-pulse {
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .2; }
        }
        input::placeholder {
          color: var(--steel-dark) !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
