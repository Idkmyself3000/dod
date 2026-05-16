import React, { useState, useEffect } from 'react';

export default function CipherPanel({ type, text, isSuccess, hint, onRequestHint, tokens }) {
  const [wipe, setWipe] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  // Typing effect on new puzzle
  useEffect(() => {
    setDisplayedText("");
    if (!text) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 15);
    
    return () => clearInterval(interval);
  }, [text]);

  // Success green scan wipe
  useEffect(() => {
    if (isSuccess) {
      setWipe(true);
      const t = setTimeout(() => setWipe(false), 600);
      return () => clearTimeout(t);
    }
  }, [isSuccess]);

  // Random hex numbers for visual flavor
  const [hexSide, setHexSide] = useState(() => Array.from({length: 12}, () => Math.random().toString(16).substr(2, 6).toUpperCase()));
  
  useEffect(() => {
    const int = setInterval(() => {
      setHexSide(Array.from({length: 12}, () => Math.random().toString(16).substr(2, 6).toUpperCase()));
    }, 2000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="panel-surface" style={{
      position: 'relative',
      border: `1px solid ${isSuccess ? 'var(--color-success)' : 'var(--color-border)'}`,
      minHeight: '350px',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
      padding: '24px'
    }}>
      <div className="mono text-muted uppercase" style={{
        position: 'absolute', top: '12px', left: '12px', fontSize: '10px', letterSpacing: '0.1em'
      }}>
        [INTERCEPT] TYPE: {type} // SOURCE: UNKNOWN
      </div>
      
      {/* Decorative side hex data */}
      <div className="mono text-muted" style={{
        position: 'absolute', left: '12px', top: '40px', fontSize: '10px', display: 'flex', flexDirection: 'column', opacity: 0.5
      }}>
        {hexSide.map((h, i) => <span key={i}>0X{h}</span>)}
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div className="mono" style={{
          fontSize: '22px',
          letterSpacing: '0.2em',
          color: 'var(--color-text)',
          textAlign: 'left',
          maxWidth: '85%',
          lineHeight: 1.4,
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
          textShadow: '0 0 10px rgba(232, 228, 220, 0.2)'
        }}>
          {displayedText}
          <span style={{ 
            display: 'inline-block', 
            width: '18px', 
            height: '32px', 
            backgroundColor: 'var(--color-primary)', 
            verticalAlign: 'bottom',
            marginLeft: '8px',
            animation: 'cursorBlink 1s step-end infinite' 
          }} />
        </div>
      </div>

      {/* Hint Button / Hint Display */}
      {hint ? (
        <div className="mono" style={{
          position: 'absolute', bottom: '16px', left: '16px', right: '16px',
          fontSize: '12px', letterSpacing: '0.1em',
          color: 'var(--blood-active)',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '12px',
          border: '1px solid var(--blood-active)',
          display: 'flex', alignItems: 'center', gap: '12px',
          animation: 'hintReveal 0.4s ease-out'
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px', height: '8px',
            backgroundColor: 'var(--blood-active)',
            animation: 'hintPulse 1s infinite',
            flexShrink: 0
          }} />
          <span style={{ fontWeight: 'bold', flexShrink: 0 }}>HINT_REVEALED:</span>
          <span>{hint}</span>
        </div>
      ) : onRequestHint ? (
        <button
          onClick={onRequestHint}
          disabled={tokens < 1}
          className="btn-ghost"
          style={{
            position: 'absolute', bottom: '16px', right: '16px',
            fontSize: '11px',
            padding: '8px 16px',
            display: 'flex', alignItems: 'center', gap: '8px',
            borderColor: tokens >= 1 ? 'var(--steel-white)' : 'var(--steel-dark)',
            color: tokens >= 1 ? 'var(--steel-white)' : 'var(--steel-mid)',
          }}
        >
          <span style={{ fontSize: '14px' }}>[!]</span>
          <span>REQUEST_INTEL</span>
          <span style={{ opacity: 0.5 }}>(-1_TOKEN)</span>
        </button>
      ) : null}

      {wipe && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '100%',
          background: 'var(--color-success)',
          opacity: 0.2,
          animation: 'scanwipe 0.6s linear forwards'
        }} />
      )}
      <style>{`
        @keyframes scanwipe {
          0% { transform: translateY(-100%); opacity: 0.4; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes cursorBlink { 50% { opacity: 0; } }
        @keyframes hintReveal {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hintPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
