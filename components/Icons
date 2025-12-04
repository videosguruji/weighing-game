
import React from 'react';

// Using React.SVGProps<SVGSVGElement> to correctly type SVG props like className
export const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 9.5C16 8.5 16.5 7.5 17 7C16.5 6.5 15.5 6 15 6C13.5 6 13 8 12 8C11 8 10.5 6 9 6C7.5 6 6.5 7.5 6.5 9.5C6.5 12 9 14.5 12 14.5C15 14.5 17.5 12 17.5 9.5" fill="#F44336"/>
    <path d="M12 2C10.8954 2 10 2.89543 10 4V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V4C14 2.89543 13.1046 2 12 2Z" fill="#4CAF50"/>
    <path d="M12 14.5C9 14.5 6.5 12 6.5 9.5C6.5 7.5 7.5 6 9 6C10.5 6 11 8 12 8C13 8 13.5 6 15 6C15.5 6 16.5 6.5 17 7C16.5 7.5 16 8.5 16 9.5C16 10.5843 15.4854 11.8021 14.5 12.875C13.4839 13.9774 12.3333 14.5 12 14.5Z" fill="#DD2C00"/>
    <path d="M12 14.5C15 14.5 17.5 12 17.5 9.5C17.5 11.5 16 15.5 12 15.5C8 15.5 6.5 11.5 6.5 9.5C6.5 12 9 14.5 12 14.5Z" fill="#F44336"/>
  </svg>
);

export const OrangeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="8" fill="#FF9800"/>
    <path d="M13.5 3C13.09 4.3 12.5 5 12 5C11.5 5 10.91 4.3 10.5 3H13.5Z" fill="#4CAF50"/>
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#FFB74D"/>
  </svg>
);

export const BananaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 11C7 11 10 5 15 6C20 7 18 15 14 16C10 17 7 11 7 11Z" fill="#FFEB3B"/>
    <path d="M15 6C14 4 12 3 11 4C10 5 10.5 7 11 8C11.5 9 13 8 15 6Z" fill="#6D4C41"/>
    <path d="M7.05078 10.9492C7.54288 11.8654 8.78345 14.394 11.0256 15.5147C13.2678 16.6354 15.2014 16.201 16.5 15.5" stroke="#FBC02D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GrapesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C10.8954 2 10 2.89543 10 4V6H14V4C14 2.89543 13.1046 2 12 2Z" fill="#4CAF50"/>
    <circle cx="12" cy="9" r="2.5" fill="#7E57C2"/>
    <circle cx="8.5" cy="12" r="2.5" fill="#673AB7"/>
    <circle cx="15.5" cy="12" r="2.5" fill="#673AB7"/>
    <circle cx="12" cy="15" r="2.5" fill="#5E35B1"/>
    <circle cx="8.5" cy="18" r="2.5" fill="#512DA8"/>
    <circle cx="15.5" cy="18" r="2.5" fill="#512DA8"/>
  </svg>
);

export const WatermelonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H4Z" fill="#4CAF50"/>
    <path d="M5 12C5 16 8 18.5 12 18.5C16 18.5 19 16 19 12H5Z" fill="#F44336"/>
    <circle cx="9" cy="14" r="0.5" fill="black"/>
    <circle cx="12" cy="15" r="0.5" fill="black"/>
    <circle cx="15" cy="14" r="0.5" fill="black"/>
    <path d="M4 12C4 11 5.5 10 12 10C18.5 10 20 11 20 12H4Z" fill="#8BC34A"/>
  </svg>
);

export const WeightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#555"/>
    </svg>
);


const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

const ConfettiPiece: React.FC<{ initialX: number, initialY: number, color: string }> = ({ initialX, initialY, color }) => {
    const style: React.CSSProperties & { [key: string]: string | number } = {
        '--initial-x': `${initialX}vw`,
        '--initial-y': `${initialY}vh`,
        '--angle': `${randomInRange(0, 360)}deg`,
        '--duration': `${randomInRange(2, 4)}s`,
        '--final-x': `${randomInRange(-200, 200)}px`,
        '--final-y': `${randomInRange(50, 100)}px`,
        '--rotation-x': `${Math.random() > 0.5 ? 1 : -1}`,
        '--rotation-y': `${Math.random() > 0.5 ? 1 : -1}`,
        '--rotation-z': `${Math.random() > 0.5 ? 1 : -1}`,
        animation: `fall var(--duration) linear forwards`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '10px',
        height: '20px',
        backgroundColor: color,
        transform: `translate(var(--initial-x), var(--initial-y))`,
        opacity: 1,
    };
    return <div style={style} />;
};

export const Confetti: React.FC = () => {
    const colors = ['#f44336', '#ff9800', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];
    const pieces = Array.from({ length: 100 }).map((_, index) => {
        const color = colors[index % colors.length];
        return <ConfettiPiece key={index} initialX={randomInRange(20, 80)} initialY={randomInRange(-20, -10)} color={color} />;
    });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
            <style>
                {`
                @keyframes fall {
                    to {
                        transform: translate(calc(var(--initial-x) + var(--final-x)), calc(var(--initial-y) + 120vh)) rotateX(calc(var(--rotation-x) * 540deg)) rotateY(calc(var(--rotation-y) * 540deg)) rotateZ(calc(var(--rotation-z) * 540deg));
                        opacity: 0;
                    }
                }
                `}
            </style>
            {pieces}
        </div>
    );
};
