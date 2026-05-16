import React from 'react';
import CipherPanel from './CipherPanel';
import AnswerInput from './AnswerInput';
import useCountdown from '../hooks/useCountdown';

export default function DefenseOverlay({ attackDetails, onRepel }) {
  const { timeLeft, formatTime } = useCountdown(attackDetails.timeLeft || 60);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(10, 0, 0, 0.96)',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-base)'
    }}>
      <div className="hazard-stripes" style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none',
        opacity: 0.1,
        animation: 'pulseHazard 2s infinite'
      }} />

      <div style={{
        position: 'absolute',
        top: '16px', left: '16px', right: '16px', bottom: '16px',
        border: '1px solid var(--color-danger)',
        pointerEvents: 'none',
        boxShadow: 'inset 0 0 40px rgba(192, 57, 43, 0.2)'
      }} />

      <h2 className="text-display animate-pulse" style={{ fontSize: '2rem', marginBottom: '32px', color: 'var(--blood-bright)' }}>
        ⚠ INCOMING BREACH: ORIGIN {attackDetails.from}
      </h2>

      <div style={{ textAlign: 'center', marginBottom: '32px', width: '100%', maxWidth: '600px' }}>
        <div className="text-stat" style={{ fontSize: '5rem', lineHeight: 1, marginBottom: '8px', color: 'var(--blood-bright)' }}>
          {formatTime(timeLeft)}
        </div>
        <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--steel-dark)' }}>
          <div style={{ 
            width: `${(timeLeft / (attackDetails.timeLeft || 60)) * 100}%`, 
            height: '100%', 
            backgroundColor: 'var(--blood-bright)',
            boxShadow: '0 0 20px var(--blood-bright)',
            transition: 'width 1s linear'
          }} />
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '800px' }}>
        <CipherPanel 
          type={attackDetails.puzzle?.type?.toUpperCase() || 'CAESAR'} 
          text={attackDetails.puzzle?.cipherText || 'DEFEND THE SYSTEM'} 
        />
        <AnswerInput 
          onSubmit={(ans) => onRepel(ans)} 
          variant="danger" 
          isError={false}
          options={attackDetails.puzzle?.options || []}
        />
      </div>

      <style>{`
        @keyframes pulseHazard {
          0% { opacity: 0.05; }
          50% { opacity: 0.15; }
          100% { opacity: 0.05; }
        }
      `}</style>
    </div>
  );
}
