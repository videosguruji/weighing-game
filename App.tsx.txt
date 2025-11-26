
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { WeighingScale } from './components/WeighingScale';
import { FruitBasket } from './components/FruitBasket';
import { Fruit } from './types';
import { FRUITS, TARGET_WEIGHT, dropAudio, successAudio, resetAudio } from './constants';
import { Confetti } from './components/Icons.tsx';

const App: React.FC = () => {
  const [fruitsOnScale, setFruitsOnScale] = useState<Fruit[]>([]);
  const [isBalanced, setIsBalanced] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const currentWeight = useMemo(() => {
    return fruitsOnScale.reduce((sum, fruit) => sum + fruit.weight, 0);
  }, [fruitsOnScale]);

  useEffect(() => {
    if (currentWeight === TARGET_WEIGHT) {
      setIsBalanced(true);
      setShowConfetti(true);
      successAudio.play();
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setIsBalanced(false);
    }
  }, [currentWeight]);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (currentWeight >= TARGET_WEIGHT + 1) return; 
    
    const fruitId = event.dataTransfer.getData('fruitId');
    const fruitToAdd = FRUITS.find(f => f.id === fruitId);

    if (fruitToAdd) {
      setFruitsOnScale(prevFruits => [...prevFruits, fruitToAdd]);
      dropAudio.play();
    }
  }, [currentWeight]);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleReset = useCallback(() => {
    setFruitsOnScale([]);
    setIsBalanced(false);
    setShowConfetti(false);
    resetAudio.play();
  }, []);
  
  const handleRemoveFruit = useCallback((indexToRemove: number) => {
    setFruitsOnScale(prevFruits => prevFruits.filter((_, index) => index !== indexToRemove));
     dropAudio.play();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-center font-sans relative overflow-hidden">
      {showConfetti && <Confetti />}
      <header className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-sky-700 tracking-tight">
          Weighing Fun for Kids!
        </h1>
        <p className="text-lg md:text-xl text-sky-600 mt-2">
          Can you make the scale balance at {TARGET_WEIGHT}kg?
        </p>
      </header>

      <main className="w-full flex flex-col items-center">
        <WeighingScale
          fruitsOnScale={fruitsOnScale}
          currentWeight={currentWeight}
          targetWeight={TARGET_WEIGHT}
          isBalanced={isBalanced}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onRemoveFruit={handleRemoveFruit}
        />
        <FruitBasket fruits={FRUITS} />
        <button
          onClick={handleReset}
          className="mt-8 px-8 py-4 bg-red-500 text-white font-bold text-2xl rounded-full shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition-transform transform hover:scale-105"
        >
          Reset
        </button>
      </main>
    </div>
  );
};

export default App;

