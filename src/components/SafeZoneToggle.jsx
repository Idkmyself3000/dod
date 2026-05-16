import React from 'react';

export default function SafeZoneToggle({ isActive, onToggle }) {
  return (
    <div className="surface-iron organizer-control-panel" style={{ marginBottom: '32px' }}>
      <div className="text-h2" style={{ marginBottom: '16px' }}>
        Global Directives
      </div>
      
      <button 
        className={`btn-ghost organizer-action-btn ${isActive ? 'animate-safezone' : ''}`}
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: isActive ? 'var(--blood-active)' : 'var(--steel-dark)',
          color: isActive ? 'var(--blood-active)' : 'var(--steel-light)'
        }}
      >
        <span style={{ marginRight: '8px' }}>
          {isActive ? '◎' : '○'}
        </span>
        {isActive ? 'SAFE ZONE ACTIVE' : 'ENABLE SAFE ZONE'}
      </button>
    </div>
  );
}
