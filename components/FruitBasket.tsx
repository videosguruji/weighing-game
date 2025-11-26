
import React from 'react';
import { Fruit } from '../types';

interface FruitBasketProps {
  fruits: Fruit[];
}

export const FruitBasket: React.FC<FruitBasketProps> = ({ fruits }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, fruitId: string) => {
    event.dataTransfer.setData('fruitId', fruitId);
  };

  return (
    <div className="mt-40 md:mt-32 p-4">
      <h2 className="text-2xl font-bold text-amber-800 mb-4">Drag Fruits to the Green Pan!</h2>
      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-6 bg-amber-200 p-4 rounded-2xl shadow-inner border-4 border-amber-400">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            draggable
            onDragStart={(e) => handleDragStart(e, fruit.id)}
            className="flex flex-col items-center justify-center p-2 rounded-lg cursor-grab active:cursor-grabbing transition-transform transform hover:scale-110 bg-white/50 shadow-md"
            title={`${fruit.name} (${fruit.weight}kg)`}
          >
            <fruit.Icon className="w-16 h-16 md:w-20 md:h-20" />
            <span className="font-semibold text-amber-900 mt-1">{fruit.weight}kg</span>
          </div>
        ))}
      </div>
    </div>
  );
};

