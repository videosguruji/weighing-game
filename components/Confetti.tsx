import React from 'react';

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
