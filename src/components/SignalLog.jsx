import React from 'react';

export default function SignalLog({ events }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ 
        fontFamily: "'Cinzel', serif", 
        fontSize: '0.6rem', 
        letterSpacing: '0.2em', 
        color: '#888',
        marginBottom: '8px'
      }}>
        LIVE SIGNAL FEED
      </div>
      <div className="surface-iron" style={{
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '8px'
      }}>
        {events.map((ev, idx) => {
          const opacity = Math.max(0.4, 1 - (idx * 0.05));
          const match = typeof ev.text === 'string' ? ev.text.match(/^(\[\d{2}:\d{2}\])\s+(.*)$/) : null;
          let timestamp = '';
          let message = ev.text;
          
          if (match) {
            timestamp = match[1];
            message = match[2];
          }

          const isTaunt = ev.type === 'attack' || ev.type === 'neutral';
          const isSuccess = ev.type === 'success' || ev.type === 'solve';

          const formatMessage = (msg) => {
            if (typeof msg !== 'string') return msg;
            
            const words = msg.split(' ');
            return words.map((word, i) => {
              const isHighlight = word.includes('FAILED') || word.includes('WRONG') || word.includes('LIFE') || word.includes('ELIMINATED');
              const isPositive = word.includes('SOLVED') || word.includes('SUCCESS') || word.includes('REPELLED');
              
              return (
                <span key={i} style={{ 
                  color: isHighlight ? '#FF0000' : isPositive ? '#FFF' : 'inherit',
                  fontWeight: (isHighlight || isPositive) ? 900 : 'inherit'
                }}>
                  {word}{' '}
                </span>
              );
            });
          };

          return (
            <div key={ev.id || idx} style={{ 
              color: isTaunt ? '#FF0000' : isSuccess ? '#FFF' : '#CCC',
              opacity,
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.85rem',
              lineHeight: 1.2,
              letterSpacing: '0.02em',
              textTransform: 'uppercase'
            }}>
              {timestamp && (
                <span style={{ color: '#444', marginRight: '8px', fontSize: '0.7rem' }}>
                  {timestamp}
                </span>
              )}
              {formatMessage(message)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
