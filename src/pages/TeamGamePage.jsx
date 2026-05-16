import React, { useState, useEffect } from 'react';
import { useGameState } from '../hooks/useGameState';
import CipherPanel from '../components/CipherPanel';
import AnswerInput from '../components/AnswerInput';
import TokenBar from '../components/TokenBar';
import Leaderboard from '../components/Leaderboard';
import SignalLog from '../components/SignalLog';
import DefenseOverlay from '../components/DefenseOverlay';

export default function TeamGamePage() {
  const { gameState, submitAnswer, launchAttack, repelAttack, requestHint } = useGameState();
  const [flashedTarget, setFlashedTarget] = useState(null);
  const [isAnswerError, setIsAnswerError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [attackSent, setAttackSent] = useState(false);
  const [currentHint, setCurrentHint] = useState(null);
  const [hintPuzzleId, setHintPuzzleId] = useState(null);

  const myTeam = gameState.teams.find(t => t.id === gameState.myTeamId) || gameState.teams[0] || { name: '...', tokens: 0, lives: 0, status: 'ACTIVE' };

  const handleAnswerSubmit = async (answer) => {
    const correct = await submitAnswer(answer);
    if (correct) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 800);
    } else {
      setIsAnswerError(true);
      setTimeout(() => setIsAnswerError(false), 300);
    }
    return correct;
  };

  const handleAttack = (targetIdToAttack) => {
    launchAttack(targetIdToAttack);
    setFlashedTarget(targetIdToAttack);
    setAttackSent(true);
    setTimeout(() => {
      setFlashedTarget(null);
      setAttackSent(false);
    }, 400);
  };

  const handleRepel = (ans) => {
    repelAttack(ans);
  };

  const handleRequestHint = async () => {
    const result = await requestHint();
    if (result.success) {
      setCurrentHint(result.hint);
      setHintPuzzleId(gameState.currentPuzzle.id);
    }
  };

  // Clear hint when puzzle changes
  const puzzleId = gameState.currentPuzzle?.id;
  useEffect(() => {
    if (hintPuzzleId && puzzleId !== hintPuzzleId) {
      setCurrentHint(null);
      setHintPuzzleId(null);
    }
  }, [puzzleId, hintPuzzleId]);

  if (myTeam.status === 'ELIMINATED') {
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        border: '6px solid #FFF',
        overflow: 'hidden',
      }}>
        {/* Scanline overlay */}
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)',
          pointerEvents: 'none', zIndex: 1 
        }} />
        
        {/* Crossed swords */}
        <div className="elim-icon" style={{ fontSize: '4rem', color: '#FF0000', marginBottom: '32px', zIndex: 2 }}>☠</div>
        
        {/* ELIMINATED */}
        <h1 className="elim-title" style={{ 
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(3rem, 10vw, 8rem)', 
          fontWeight: 900,
          color: '#FF0000',
          letterSpacing: '0.15em', 
          textAlign: 'center', 
          zIndex: 2, 
          margin: 0,
          textTransform: 'uppercase',
          lineHeight: 1,
        }}>
          ELIMINATED
        </h1>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', margin: '40px 0', zIndex: 2, width: '60%', maxWidth: '700px' }}>
          <div style={{ flex: 1, height: '3px', background: '#FFF' }} />
          <span style={{ fontSize: '1.5rem', color: '#FFF' }}>⚔</span>
          <div style={{ flex: 1, height: '3px', background: '#FFF' }} />
        </div>
        
        {/* Main taunt */}
        <p className="elim-taunt" style={{ 
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', 
          fontWeight: 700,
          color: '#FFF',
          letterSpacing: '0.12em', 
          textAlign: 'center', 
          zIndex: 2, 
          textTransform: 'uppercase',
          lineHeight: 1.2,
          maxWidth: '80%',
        }}>
          VICTORY WAS NEVER<br />MEANT FOR YOU
        </p>
        
        {/* Footer */}
        <p className="mono" style={{ 
          fontSize: '0.8rem', 
          letterSpacing: '0.4em', 
          color: '#444',
          marginTop: '64px', 
          zIndex: 2,
          textTransform: 'uppercase',
        }}>
          LIVES: 0 // TERMINATED // ARENA LOCKED
        </p>

        <style>{`
          .elim-icon {
            animation: skullPulse 2s ease-in-out infinite;
          }
          @keyframes skullPulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.15); opacity: 1; }
          }
          .elim-title {
            animation: elimFadeIn 1.5s ease-out both;
          }
          .elim-taunt {
            animation: elimFadeIn 2s ease-out 0.5s both;
          }
          @keyframes elimFadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="surface-void" style={{ display: 'flex', minHeight: '100vh', padding: '24px', gap: '24px' }}>
      {gameState.incomingAttack && (
        <DefenseOverlay attackDetails={gameState.incomingAttack} onRepel={handleRepel} />
      )}

      {/* Left Column — ARENA */}
      <div style={{ width: '68%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Status Bar */}
        <div style={{ 
          padding: '20px 28px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          border: '3px solid #FFF',
          background: '#000',
        }}>
          <div>
            <div className="text-label" style={{ marginBottom: '4px', fontSize: '0.6rem' }}>GLADIATOR</div>
            <h1 style={{ 
              margin: 0, 
              fontFamily: "'Cinzel', serif", 
              fontSize: '1.5rem', 
              fontWeight: 900, 
              color: '#FFF',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {myTeam.name}
            </h1>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div className="text-label" style={{ marginBottom: '4px', fontSize: '0.6rem' }}>STATUS</div>
            {gameState.gameStarted ? (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                padding: '4px 12px',
                border: '2px solid #FF0000',
                background: 'rgba(255,0,0,0.1)',
              }}>
                <div className="status-pulse" style={{ width: 8, height: 8, background: '#FF0000' }} />
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', fontWeight: 700, color: '#FF0000', letterSpacing: '0.2em' }}>ACTIVE</span>
              </div>
            ) : (
              <span className="text-muted" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', letterSpacing: '0.2em' }}>STANDBY</span>
            )}
          </div>

          <div>
            <div className="text-label" style={{ marginBottom: '6px', fontSize: '0.6rem', textAlign: 'right' }}>VITALITY</div>
            <div className="lives-meter">
              {[...Array(3)].map((_, i) => {
                let className = 'pixel-heart';
                if (i >= myTeam.lives) className += ' empty';
                else if (myTeam.lives === 1) className += ' critical';
                return <div key={i} className={className} />;
              })}
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="text-label" style={{ marginBottom: '4px', fontSize: '0.6rem' }}>TOKENS</div>
            <div className="token-counter" style={{ 
              fontFamily: "'Cinzel', serif", 
              fontSize: '2rem', 
              fontWeight: 900, 
              color: '#FFF',
              lineHeight: 1,
            }}>
              {myTeam.tokens}
            </div>
          </div>
        </div>

        {/* Main Puzzle Area */}
        <div style={{ 
          flex: 1, 
          padding: '32px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px',
          border: '3px solid #FFF',
          background: '#000',
          position: 'relative',
        }}>
          {/* Section Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            paddingBottom: '16px', 
            borderBottom: '2px solid #444' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.25rem' }}>⚔</span>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', color: '#FFF' }}>
                CHALLENGE {gameState.currentPuzzle.progress + 1}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="mono" style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.2em' }}>
                SOLVED: {gameState.currentPuzzle.progress}/{gameState.currentPuzzle.total}
              </div>
            </div>
          </div>

          {/* Puzzle Display */}
          <CipherPanel 
            type={gameState.currentPuzzle.type} 
            text={gameState.currentPuzzle.text} 
            isSuccess={isSuccess}
            hint={currentHint}
            onRequestHint={handleRequestHint}
            tokens={myTeam.tokens}
          />
          
          {/* Savage Taunt Display */}
          {myTeam.lastTaunt && (
            <div className="taunt-container" style={{
              padding: '12px',
              border: '2px solid #FF0000',
              background: 'rgba(255,0,0,0.1)',
              color: '#FF0000',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1rem',
              fontWeight: 900,
              textAlign: 'center',
              letterSpacing: '0.1em',
              animation: 'glitch 0.3s infinite',
              marginBottom: '16px'
            }}>
              {myTeam.lastTaunt}
            </div>
          )}

          {/* Answer Input */}
          <div style={{ marginTop: 'auto' }}>
            <AnswerInput 
              onSubmit={handleAnswerSubmit} 
              isError={isAnswerError}
              options={gameState.currentPuzzle.options}
            />
            
            {/* Progress Track */}
            <div style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {[...Array(gameState.currentPuzzle.total)].map((_, i) => {
                  const isCompleted = i < gameState.currentPuzzle.progress;
                  const isCurrent = i === gameState.currentPuzzle.progress;
                  return (
                    <div key={i} style={{
                      flex: 1,
                      height: '8px',
                      background: isCompleted ? '#FFF' : '#222',
                      border: isCurrent ? '2px solid #FFF' : 'none',
                      transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {isCurrent && (
                        <div className="progress-pulse" style={{
                          position: 'absolute',
                          top: 0, left: 0, right: 0, bottom: 0,
                          background: '#FFF',
                          opacity: 0.3,
                        }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column — INTEL */}
      <div style={{ width: '32%', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
        
        {/* Attack Overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(4px)',
          display: attackSent ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          zIndex: 100, pointerEvents: 'none',
          animation: attackSent ? 'flashInOut 0.4s ease-out' : 'none',
          border: '3px solid #FFF'
        }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 900, color: '#FFF', letterSpacing: '0.2em' }}>
            ⚔ STRIKE LAUNCHED
          </h2>
        </div>

        {/* Token Display */}
        <div style={{ 
          padding: '20px', 
          border: '3px solid #FFF',
          background: '#000',
        }}>
          <div className="text-label" style={{ marginBottom: '12px', fontSize: '0.6rem' }}>RESOURCES</div>
          <TokenBar tokens={myTeam.tokens} />
        </div>
        
        {/* Leaderboard */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          overflow: 'hidden',
          border: '3px solid #FFF',
          background: '#000',
        }}>
          <div className="leaderboard-header">
            <span style={{ fontSize: '1rem' }}>⚔</span>
            <div className="leaderboard-title">ARENA RANKINGS</div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Leaderboard 
              teams={gameState.teams} 
              currentTeamId={gameState.myTeamId} 
              myTokens={myTeam.tokens}
              onAttack={handleAttack}
              flashedTarget={flashedTarget}
            />
          </div>
        </div>
        
        {/* Signal Log */}
        <div style={{ 
          height: '28%', 
          padding: '16px',
          border: '3px solid #FFF',
          background: '#000',
        }}>
          <div className="text-label" style={{ marginBottom: '10px', fontSize: '0.6rem' }}>EVENT LOG</div>
          <SignalLog events={gameState.recentEvents} />
        </div>
      </div>
      
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes flashInOut {
          0% { opacity: 0; transform: scale(0.95); }
          20% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 0; transform: scale(1); }
        }
        .status-pulse {
          animation: statusPulse 1.5s ease-in-out infinite;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        .progress-pulse {
          animation: progressPulse 1.2s ease-in-out infinite;
        }
        @keyframes progressPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.5; }
        }
        .token-counter {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}
