import React from 'react';

const MacFolderIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="backFlap" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#82C8F7" />
        <stop offset="100%" stopColor="#4A90E2" />
      </linearGradient>
      <linearGradient id="frontFlap" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5CA6F8" />
        <stop offset="100%" stopColor="#2D72D9" />
      </linearGradient>
    </defs>
    <path d="M5,20 L35,20 L45,30 L95,30 C97.76,30 100,32.24 100,35 L100,85 C100,87.76 97.76,90 95,90 L5,90 C2.24,90 0,87.76 0,85 L0,25 C0,22.24 2.24,20 5,20 Z" fill="url(#backFlap)" />
    <path d="M0,40 C0,37.24 2.24,35 5,35 L95,35 C97.76,35 100,37.24 100,40 L95,90 C95,92.76 92.76,95 90,95 L10,95 C7.24,95 5,92.76 5,90 L0,40 Z" fill="url(#frontFlap)" />
  </svg>
);

export default MacFolderIcon;
