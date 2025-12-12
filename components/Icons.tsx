import React from 'react';

// Using React.SVGProps<SVGSVGElement> to correctly type SVG props like className
export const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <filter id="apple-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
    </filter>
    <g filter="url(#apple-shadow)">
      <path d="M16 9.5C16 8.5 16.5 7.5 17 7C16.5 6.5 15.5 6 15 6C13.5 6 13 8 12 8C11 8 10.5 6 9 6C7.5 6 6.5 7.5 6.5 9.5C6.5 12 9 14.5 12 14.5C15 14.5 17.5 12 17.5 9.5" fill="#F44336"/>
      <path d="M12 2C10.8954 2 10 2.89543 10 4V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V4C14 2.89543 13.1046 2 12 2Z" fill="#4CAF50"/>
      <path d="M12 14.5C9 14.5 6.5 12 6.5 9.5C6.5 7.5 7.5 6 9 6C10.5 6 11 8 12 8C13 8 13.5 6 15 6C15.5 6 16.5 6.5 17 7C16.5 7.5 16 8.5 16 9.5C16 10.5843 15.4854 11.8021 14.5 12.875C13.4839 13.9774 12.3333 14.5 12 14.5Z" fill="#D32F2F"/>
      <path d="M12 14.5C15 14.5 17.5 12 17.5 9.5C17.5 11.5 16 15.5 12 15.5C8 15.5 6.5 11.5 6.5 9.5C6.5 12 9 14.5 12 14.5Z" fill="#F44336"/>
      <path d="M14 8.5C14.5 8.5 15 9 15 9.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const OrangeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <filter id="orange-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
    </filter>
    <g filter="url(#orange-shadow)">
      <circle cx="12" cy="12" r="8" fill="#FF9800"/>
      <path d="M13.5 3C13.09 4.3 12.5 5 12 5C11.5 5 10.91 4.3 10.5 3H13.5Z" fill="#4CAF50"/>
      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#FFA726"/>
      {/* Texture dots */}
      <circle cx="10" cy="9" r="0.5" fill="#F57C00" opacity="0.6"/>
      <circle cx="14" cy="10" r="0.5" fill="#F57C00" opacity="0.6"/>
      <circle cx="12" cy="14" r="0.5" fill="#F57C00" opacity="0.6"/>
      <circle cx="9" cy="13" r="0.5" fill="#F57C00" opacity="0.6"/>
    </g>
  </svg>
);

export const BananaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <filter id="banana-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
    </filter>
    <g filter="url(#banana-shadow)">
      <path d="M7 11C7 11 10 5 15 6C20 7 18 15 14 16C10 17 7 11 7 11Z" fill="#FFEB3B"/>
      <path d="M15 6C14 4 12 3 11 4C10 5 10.5 7 11 8C11.5 9 13 8 15 6Z" fill="#6D4C41"/>
      <path d="M7.05078 10.9492C7.54288 11.8654 8.78345 14.394 11.0256 15.5147C13.2678 16.6354 15.2014 16.201 16.5 15.5" stroke="#FBC02D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 16C13.5 16.2 13 16.4 12.5 16.5" stroke="#6D4C41" strokeWidth="1" strokeLinecap="round"/>
    </g>
  </svg>
);

export const MangoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <filter id="mango-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
    </filter>
    <g filter="url(#mango-shadow)">
      <path d="M12 2C13 2 14 3 14 4C14 4.5 13.5 5 13 5H12C11.5 5 11 4.5 11 4C11 3 12 2 12 2Z" fill="#4CAF50"/>
      <path d="M13.5 5.5C17.5 6 19 9 19 13C19 17.5 15.5 20 12 20C9.5 20 6.5 19 5.5 15C4.5 11 7 6 11 5L13.5 5.5Z" fill="#FFC107"/>
      <path d="M13 6C16 7 17.5 9 17.5 12C17.5 13 17 14 16.5 15" stroke="#FFCA28" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 12C7 12 8 8 12 6" stroke="#FFA000" strokeWidth="0" fill="none"/>
      <circle cx="15" cy="11" r="1.5" fill="#FFEB3B" opacity="0.5"/>
    </g>
  </svg>
);

export const PineappleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
     <filter id="pine-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
    </filter>
    <g filter="url(#pine-shadow)">
      <path d="M12 2L13 5L15 3L15 6L18 5L16 8L19 9L16 10L14 9L12 11L10 9L8 10L5 9L8 8L6 5L9 6L9 3L11 5L12 2Z" fill="#4CAF50"/>
      <path d="M7 9C7 9 5 11 5 15C5 19 8 21 12 21C16 21 19 19 19 15C19 11 17 9 17 9H7Z" fill="#FDD835"/>
      <path d="M7 11L17 19" stroke="#FBC02D" strokeWidth="0.5"/>
      <path d="M17 11L7 19" stroke="#FBC02D" strokeWidth="0.5"/>
      <path d="M12 9V21" stroke="#FBC02D" strokeWidth="0.5"/>
      <path d="M5 15H19" stroke="#FBC02D" strokeWidth="0.5"/>
    </g>
  </svg>
);

export const WatermelonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <filter id="melon-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
    </filter>
    <g filter="url(#melon-shadow)">
      <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H4Z" fill="#4CAF50"/>
      <path d="M5 12C5 16 8 18.5 12 18.5C16 18.5 19 16 19 12H5Z" fill="#F44336"/>
      <circle cx="9" cy="14" r="0.5" fill="black"/>
      <circle cx="12" cy="15" r="0.5" fill="black"/>
      <circle cx="15" cy="14" r="0.5" fill="black"/>
      <path d="M4 12C4 11 5.5 10 12 10C18.5 10 20 11 20 12H4Z" fill="#8BC34A"/>
    </g>
  </svg>
);

const HexagonBase: React.FC<{ size: number, color?: string, label: string, subLabel: string }> = ({ size, color="#4a4a4a", label, subLabel }) => (
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L93.3 30 L93.3 80 L50 105 L6.7 80 L6.7 30 Z" fill={color} stroke="#2a2a2a" strokeWidth="2"/>
        <path d="M50 15 L83 34 L83 76 L50 95 L17 76 L17 34 Z" fill="#3a3a3a" stroke="#222" strokeWidth="1"/>
        <text x="50" y="55" textAnchor="middle" fill="#aaa" fontSize={size > 80 ? "24" : "20"} fontFamily="serif" fontWeight="bold">{label}</text>
        <text x="50" y="75" textAnchor="middle" fill="#aaa" fontSize={size > 80 ? "14" : "12"} fontFamily="serif">{subLabel}</text>
        <path d="M20 35 L45 20 L55 20 L20 40 Z" fill="white" opacity="0.1"/>
    </svg>
);

export const Weight50gIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className={`w-10 h-10 ${props.className}`}><HexagonBase size={40} label="50" subLabel="g" /></div>
);
export const Weight100gIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className={`w-12 h-12 ${props.className}`}><HexagonBase size={50} label="100" subLabel="g" /></div>
);
export const Weight200gIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className={`w-14 h-14 ${props.className}`}><HexagonBase size={60} label="200" subLabel="g" /></div>
);
export const Weight500gIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className={`w-16 h-16 ${props.className}`}><HexagonBase size={70} label="500" subLabel="g" /></div>
);
export const Weight1kgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className={`w-20 h-20 ${props.className}`}><HexagonBase size={80} label="1" subLabel="kg" /></div>
);
export const Weight2kgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <div className={`w-24 h-24 ${props.className}`}><HexagonBase size={90} label="2" subLabel="kg" /></div>
);
