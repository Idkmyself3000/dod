import React from 'react';

export default function LivesMeter({ lives, max = 3 }) {
  const isCritical = lives === 1;

  return (
    <div className="lives-meter">
      {[...Array(max)].map((_, i) => {
        const isFilled = i < lives;
        
        let className = 'pixel-heart';
        if (!isFilled) className += ' empty';
        else if (isCritical) className += ' critical';

        return <div key={i} className={className} />;
      })}
    </div>
  );
}
