import React from 'react';

const TriangleIcon: React.FC = () => {
  return (
    <svg 
      width="120" 
      height="120" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="triangle-icon"
    >
      <defs>
        <linearGradient id="triangleGradient" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--accent-fast)" />
          <stop offset="50%" stopColor="var(--accent-good)" />
          <stop offset="100%" stopColor="var(--accent-cheap)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path 
        d="M50 15 L85 80 L15 80 Z" 
        stroke="url(#triangleGradient)" 
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default TriangleIcon;

