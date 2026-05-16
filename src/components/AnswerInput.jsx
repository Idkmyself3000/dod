import React, { useState } from 'react';

export default function AnswerInput({ onSubmit, isError, variant = 'normal', options = [] }) {
  const [answer, setAnswer] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [feedbackState, setFeedbackState] = useState(null); // 'correct', 'wrong', or null

  // Reset state when options change (e.g. on new puzzle or punishment reset)
  React.useEffect(() => {
    setAnswer('');
    setSelectedIdx(null);
    setFeedbackState(null);
  }, [options]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const val = answer.trim();
    if (val) {
      onSubmit(val);
      setAnswer('');
    }
  };

  const handleOptionClick = async (opt, idx) => {
    if (feedbackState) return; // prevent double-click during animation
    setSelectedIdx(idx);
    
    // Submit and get result
    const result = await onSubmit(opt);
    
    if (result === true) {
      setFeedbackState('correct');
      setTimeout(() => {
        setFeedbackState(null);
        setSelectedIdx(null);
      }, 800);
    } else {
      setFeedbackState('wrong');
      setTimeout(() => {
        setFeedbackState(null);
        setSelectedIdx(null);
      }, 600);
    }
  };

  const optionLabels = ['I', 'II', 'III', 'IV'];

  if (options && options.length > 0) {
    return (
      <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '24px' }}>
          {options.map((opt, i) => {
            const isSelected = selectedIdx === i;
            const isCorrectFeedback = isSelected && feedbackState === 'correct';
            const isWrongFeedback = isSelected && feedbackState === 'wrong';
            const isDisabled = feedbackState !== null;
            
            let borderColor = '#FFF';
            let bgColor = 'transparent';
            let textColor = '#FFF';
            let labelColor = '#888';
            let transform = 'none';
            let boxShadow = 'none';

            if (isCorrectFeedback) {
              borderColor = '#FFF';
              bgColor = '#FFF';
              textColor = '#000';
              labelColor = '#000';
              transform = 'scale(1.03)';
              boxShadow = '0 0 30px rgba(255,255,255,0.3)';
            } else if (isWrongFeedback) {
              borderColor = '#FF0000';
              bgColor = 'rgba(255,0,0,0.15)';
              textColor = '#FF0000';
              labelColor = '#FF0000';
              transform = 'translateX(0)';
            } else if (isSelected) {
              borderColor = '#FFF';
              bgColor = 'rgba(255,255,255,0.1)';
            }
            
            return (
              <button
                key={i}
                onClick={() => handleOptionClick(opt, i)}
                disabled={isDisabled}
                className={`mcq-option ${isWrongFeedback ? 'shake-hard' : ''}`}
                style={{
                  padding: '20px 16px',
                  textAlign: 'left',
                  cursor: isDisabled ? 'default' : 'pointer',
                  color: textColor,
                  border: `3px solid ${borderColor}`,
                  background: bgColor,
                  transform,
                  boxShadow,
                  transition: 'all 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  animationDelay: `${i * 0.08}s`,
                  opacity: isDisabled && !isSelected ? 0.3 : 1,
                }}
              >
                {/* Option number badge */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    border: `2px solid ${labelColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.8rem',
                    fontWeight: 900,
                    color: labelColor,
                    flexShrink: 0,
                    transition: 'all 0.2s',
                    background: isCorrectFeedback ? '#000' : 'transparent',
                  }}>
                    {isCorrectFeedback ? '✓' : isWrongFeedback ? '✗' : optionLabels[i]}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    lineHeight: 1.3,
                  }}>
                    {opt}
                  </div>
                </div>

                {/* Selection indicator line */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '4px',
                  width: isSelected ? '100%' : '0%',
                  background: isCorrectFeedback ? '#FFF' : isWrongFeedback ? '#FF0000' : '#FFF',
                  transition: 'width 0.3s ease',
                }} />
              </button>
            );
          })}
        </div>

        <style>{`
          .mcq-option {
            animation: optionSlideIn 0.4s ease-out both;
          }
          .mcq-option:hover:not(:disabled) {
            background: rgba(255,255,255,0.08) !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 0 #FFF !important;
          }
          .mcq-option:active:not(:disabled) {
            transform: translateY(0) !important;
            box-shadow: none !important;
          }
          @keyframes optionSlideIn {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          .shake-hard {
            animation: shakeHard 0.4s ease-in-out !important;
          }
          @keyframes shakeHard {
            0%, 100% { transform: translateX(0); }
            15% { transform: translateX(-8px) rotate(-1deg); }
            30% { transform: translateX(8px) rotate(1deg); }
            45% { transform: translateX(-6px) rotate(-0.5deg); }
            60% { transform: translateX(6px) rotate(0.5deg); }
            75% { transform: translateX(-3px); }
            90% { transform: translateX(3px); }
          }
        `}</style>
      </>
    );
  }

  // Text input fallback
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
      <div style={{ border: '3px solid #FFF', background: '#000' }}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="ENTER RESPONSE..."
          className={`mono uppercase ${isError ? 'shake-hard' : ''}`}
          style={{
            width: '100%',
            padding: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#FFF',
            fontSize: '1.125rem',
            outline: 'none',
            letterSpacing: '0.2em'
          }}
        />
      </div>
      <button
        type="submit"
        className="btn-primary"
        style={{ marginTop: '16px', width: '100%', padding: '18px' }}
      >
        {variant === 'danger' ? '⚔ EXECUTE COUNTER-MEASURE' : '⚔ TRANSMIT ANSWER'}
      </button>

      <style>{`
        .shake-hard {
          animation: shakeHard 0.4s ease-in-out;
        }
        @keyframes shakeHard {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-8px); }
          30% { transform: translateX(8px); }
          45% { transform: translateX(-6px); }
          60% { transform: translateX(6px); }
          75% { transform: translateX(-3px); }
        }
      `}</style>
    </form>
  );
}
