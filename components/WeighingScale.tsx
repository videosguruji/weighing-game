import React from 'react';
import { Item } from '../types';

interface WeighingScaleProps {
  leftPanItems: Item[]; // Fruits usually
  rightPanItems: Item[]; // Weights usually
  leftWeight: number;
  rightWeight: number;
  isBalanced: boolean;
  onDrop: (event: React.DragEvent<HTMLDivElement>, targetPan: 'left' | 'right') => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onRemoveItem: (index: number, pan: 'left' | 'right') => void;
}

export const WeighingScale: React.FC<WeighingScaleProps> = ({
  leftPanItems,
  rightPanItems,
  leftWeight,
  rightWeight,
  isBalanced,
  onDrop,
  onDragOver,
  onRemoveItem,
}) => {
  // Logic: 
  // If Left is heavier, rotation is NEGATIVE (Counter-clockwise) -> Left goes down.
  // If Right is heavier, rotation is POSITIVE (Clockwise) -> Right goes down.
  const diff = rightWeight - leftWeight;
  const rotation = Math.max(-20, Math.min(20, diff * 15)); // Multiplier to make it sensitive

  return (
    <div className="relative w-full max-w-[600px] h-[380px] md:h-[420px] flex flex-col items-center justify-end select-none mt-4 md:mt-12 scale-95 md:scale-100 pb-10">
      
      {/* --- CENTRAL STAND (Solid Connection) --- */}
      {/* This creates the solid pole from the pivot point down into the base */}
      <div className="absolute top-[28%] bottom-20 left-1/2 -translate-x-1/2 w-8 md:w-10 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 border-x-2 border-slate-900 z-10 shadow-inner"></div>

      {/* --- The Beam Mechanism --- */}
      <div className="absolute top-[28%] w-[90%] h-4 z-20 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
           style={{ transform: `rotate(${rotation}deg)` }}>
           
           {/* Main Beam Bar (Brass/Gold color) */}
           <div className="w-full h-full bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-700 rounded-full shadow-lg border-b border-yellow-900 flex items-center justify-between px-2">
               <div className="w-2 h-2 rounded-full bg-black opacity-30"></div>
               <div className="w-2 h-2 rounded-full bg-black opacity-30"></div>
           </div>

           {/* Central Pivot Area */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14">
               {/* The pointer needle */}
               <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-1.5 h-16 bg-red-700 origin-bottom"
                    style={{ transform: `rotate(${-rotation}deg)` }}>
                    <div className="w-3 h-3 bg-red-800 rounded-full absolute -bottom-1.5 -left-[3px]"></div>
               </div>
               {/* Pivot cap */}
               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-4 border-gray-600 shadow-xl z-30"></div>
           </div>

           {/* --- LEFT SIDE: The BOWL (For Fruits) --- */}
           <div className="absolute left-0 top-1/2 w-1 h-20 bg-gray-500 origin-top"
                style={{ transform: `rotate(${-rotation}deg)` }}>
                {/* Chain/Hanger */}
                <div className="absolute bottom-0 -left-[4.5rem] w-36 h-24">
                     {/* The Silver Bowl */}
                     <div 
                        onDrop={(e) => onDrop(e, 'left')}
                        onDragOver={onDragOver}
                        className="relative w-full h-full bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 rounded-b-full border-t-4 border-gray-300 shadow-2xl flex items-end justify-center z-10 overflow-visible"
                     >
                         <div className="absolute -top-16 w-1 h-16 bg-gray-400 left-0 origin-bottom rotate-[25deg]"></div>
                         <div className="absolute -top-16 w-1 h-16 bg-gray-400 right-0 origin-bottom -rotate-[25deg]"></div>

                         {/* Items in Bowl */}
                         <div className="absolute bottom-2 w-[80%] flex flex-wrap-reverse justify-center items-end content-end -space-x-3 px-2 pointer-events-none">
                            {leftPanItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="pointer-events-auto cursor-pointer transition-transform hover:scale-110 active:scale-95 animate-bounce-short drop-shadow-lg -mb-2"
                                    onClick={() => onRemoveItem(index, 'left')}
                                    style={{ zIndex: index }}
                                >
                                    <item.Icon className="w-10 h-10 md:w-14 md:h-14" />
                                </div>
                            ))}
                            {leftPanItems.length === 0 && (
                                <span className="absolute bottom-8 text-gray-500 text-sm font-bold opacity-40">FRUITS HERE</span>
                            )}
                         </div>
                     </div>
                </div>
           </div>

           {/* --- RIGHT SIDE: The PLATE (For Weights) --- */}
           <div className="absolute right-0 top-1/2 w-1 h-20 bg-gray-500 origin-top"
                style={{ transform: `rotate(${-rotation}deg)` }}>
                <div className="absolute bottom-0 -right-[5rem] w-40 h-8 flex flex-col items-center">
                     {/* Hanger Triangle */}
                     <div className="absolute -top-16 w-full h-16 border-l-2 border-r-2 border-gray-500 border-b-0 skew-x-12 opacity-50"></div>
                     
                     {/* The Black Iron Plate */}
                     <div 
                        onDrop={(e) => onDrop(e, 'right')}
                        onDragOver={onDragOver}
                        className="relative w-32 md:w-40 h-4 bg-gray-800 rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-b-4 border-gray-900 flex justify-center items-end z-10"
                     >
                        {/* Items on Plate */}
                        <div className="absolute bottom-full mb-0 w-full flex flex-wrap-reverse justify-center items-end -space-x-3">
                             {rightPanItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="cursor-pointer transition-transform hover:scale-110 active:scale-95 drop-shadow-2xl z-10 -mb-1"
                                    onClick={() => onRemoveItem(index, 'right')}
                                >
                                    <item.Icon className="w-12 h-12 md:w-16 md:h-16" />
                                </div>
                            ))}
                             {rightPanItems.length === 0 && (
                                <span className="absolute bottom-2 text-gray-400 text-xs font-bold opacity-50 w-full text-center">WEIGHTS HERE</span>
                            )}
                        </div>
                     </div>
                </div>
           </div>
      </div>

      {/* --- The Red Base --- */}
      {/* Added mb-6 to lift base up, making room for text below */}
      <div className="relative z-20 w-48 md:w-72 mb-2">
          {/* Main Body */}
          <div className="w-full h-24 md:h-32 bg-gradient-to-r from-red-900 via-red-700 to-red-900 rounded-t-3xl rounded-b-lg shadow-2xl relative border-t-2 border-red-500 flex items-center justify-center">
               
               {/* Decorative Feet */}
               <div className="absolute -bottom-2 left-4 w-8 h-4 bg-black rounded-b-lg"></div>
               <div className="absolute -bottom-2 right-4 w-8 h-4 bg-black rounded-b-lg"></div>
               
               {/* Brand Label */}
               <div className="bg-black/80 px-4 py-1 border border-yellow-500 rounded shadow-md z-30">
                   <span className="text-yellow-500 font-serif font-bold text-xs md:text-sm tracking-[0.2em]">BHARAT SCALE</span>
               </div>
          </div>
      </div>
      
      {/* Readings - Positioned at the bottom corners, completely separate from the base */}
      <div className="absolute bottom-0 w-full flex justify-between px-0 md:px-0">
         <div className="bg-white/80 px-3 py-1 rounded-r-lg backdrop-blur-sm shadow-md border-y border-r border-white/50 text-lg md:text-2xl font-bold font-mono text-slate-900 tracking-tight z-30">
            Fruits: {(leftWeight * 1000).toFixed(0)}g
         </div>

         <div className="bg-white/80 px-3 py-1 rounded-l-lg backdrop-blur-sm shadow-md border-y border-l border-white/50 text-lg md:text-2xl font-bold font-mono text-slate-900 tracking-tight z-30">
            Weights: {(rightWeight * 1000).toFixed(0)}g
         </div>
      </div>

    </div>
  );
};
