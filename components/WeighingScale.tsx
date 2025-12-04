import React from 'react';
import { Fruit } from '../types';
import { WeightIcon } from './Icons';

interface WeighingScaleProps {
  fruitsOnScale: Fruit[];
  currentWeight: number;
  targetWeight: number;
  isBalanced: boolean;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onRemoveFruit: (index: number) => void;
}

export const WeighingScale: React.FC<WeighingScaleProps> = ({
  fruitsOnScale,
  currentWeight,
  targetWeight,
  isBalanced,
  onDrop,
  onDragOver,
  onRemoveFruit,
}) => {
  const rotation = Math.max(-15, Math.min(15, (targetWeight - currentWeight) * 8));

  return (
    <div className="relative w-full max-w-2xl h-96 flex flex-col items-center justify-end select-none">
      {/* Scale Beam */}
      <div
        className="w-full h-4 bg-gray-600 rounded-full absolute top-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out z-10"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Balanced glow effect */}
        {isBalanced && <div className="absolute -inset-1 rounded-full bg-yellow-400 blur-md animate-pulse"></div>}
         <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-700 rounded-full shadow-inner"></div>
      </div>

      {/* Left Pan */}
      <div
        className="absolute top-1/2 left-0 w-1/2 flex items-center justify-start transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${-Math.sin(rotation * (Math.PI / 180)) * 50}%)` }}
      >
        <div className="absolute top-0 -left-4 w-4 h-1/2 bg-gray-500 -translate-y-full"></div>
        <div className="w-32 h-16 md:w-40 md:h-20 bg-blue-400 border-4 border-blue-600 rounded-b-3xl flex items-center justify-center pt-2 shadow-lg">
           <div className="flex flex-col items-center">
             <WeightIcon className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
             <span className="font-bold text-lg text-white -mt-2">{targetWeight}kg</span>
           </div>
        </div>
      </div>
      
      {/* Right Pan */}
      <div
        className="absolute top-1/2 right-0 w-1/2 flex items-center justify-end transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(${-Math.sin(-rotation * (Math.PI / 180)) * 50}%)` }}
      >
         <div className="absolute top-0 -right-4 w-4 h-1/2 bg-gray-500 -translate-y-full"></div>
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          className="w-32 h-20 md:w-48 md:h-24 bg-green-400 border-4 border-green-600 rounded-b-3xl flex flex-wrap items-center justify-center p-2 gap-2 shadow-lg"
        >
          {fruitsOnScale.map((fruit, index) => (
            <div key={index} className="relative group cursor-pointer" onClick={() => onRemoveFruit(index)}>
                <fruit.Icon className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-red-500 bg-opacity-70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-2xl">&times;</span>
                </div>
            </div>
          ))}
        </div>
      </div>
      
       {/* Weight Display for Right Pan */}
        <div className={`absolute top-full mt-24 text-center transition-all duration-300 ${isBalanced ? 'scale-125' : ''}`}>
             <p className={`font-bold text-3xl ${isBalanced ? 'text-green-600' : 'text-gray-700'}`}>
                {currentWeight.toFixed(2)} kg
             </p>
         </div>


      {/* Scale Stand */}
      <div className="w-8 h-1/2 bg-gradient-to-b from-gray-500 to-gray-700 absolute bottom-1/4 left-1/2 -translate-x-1/2 z-0 shadow-lg"></div>
      <div className="w-40 h-8 bg-gray-700 rounded-t-lg absolute bottom-1/4 left-1/2 -translate-x-1/2 shadow-xl"></div>
      <div className="w-1/3 max-w-xs h-6 bg-gray-800 rounded-lg absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-6 shadow-2xl"></div>

    </div>
  );
};
