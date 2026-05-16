import React from 'react';

const PHASES = ['LOBBY', 'EARLY', 'MID', 'FINAL', 'SUDDEN DEATH', 'ENDED'];

export default function PhaseController({ currentPhase, onAdvance }) {
  const currentIndex = PHASES.indexOf(currentPhase);

  const getPhaseClass = (phase, i) => {
    let base = 'round-bar-phase ';
    
    if (i === currentIndex) {
      if (phase === 'SUDDEN DEATH') return base + 'phase-badge-sudden';
      if (phase === 'ENDED') return base + 'text-muted';
      return base + 'phase-badge-active';
    }
    
    if (i < currentIndex) {
      return base + 'text-muted';
    }
    
    return base; // default upcoming
  };

  return (
    <div className="surface-iron organizer-control-panel" style={{ marginBottom: '32px' }}>
      <div className="text-h2" style={{ marginBottom: '16px' }}>
        Phase Controller
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {PHASES.map((phase, i) => (
          <React.Fragment key={phase}>
            <div className={getPhaseClass(phase, i)} style={i > currentIndex ? { borderColor: 'var(--steel-dark)', color: 'var(--steel-light)' } : {}}>
              {phase}
            </div>
            {i < PHASES.length - 1 && (
              <div style={{ color: 'var(--steel-dark)', fontSize: '12px' }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <button 
        onClick={() => {
          if (currentIndex < PHASES.length - 1) onAdvance(PHASES[currentIndex + 1]);
        }}
        disabled={currentIndex >= PHASES.length - 1}
        className={currentIndex >= PHASES.length - 1 ? 'btn-primary btn-disabled' : 'btn-primary'}
        style={{ width: '100%' }}
      >
        Advance Phase
      </button>
    </div>
  );
}
