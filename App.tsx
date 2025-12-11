import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { WeighingScale } from './components/WeighingScale';
import { FruitBasket } from './components/FruitBasket'; // This handles both now
import { Item } from './types';
import { FRUITS, WEIGHTS, dropAudio, successAudio, resetAudio, clickAudio } from './constants';
import { Confetti } from './components/Icons';

const App: React.FC = () => {
  const [leftPanItems, setLeftPanItems] = useState<Item[]>([]); // Fruits
  const [rightPanItems, setRightPanItems] = useState<Item[]>([]); // Weights
  const [isBalanced, setIsBalanced] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const leftWeight = useMemo(() => leftPanItems.reduce((sum, item) => sum + item.weight, 0), [leftPanItems]);
  const rightWeight = useMemo(() => rightPanItems.reduce((sum, item) => sum + item.weight, 0), [rightPanItems]);

  useEffect(() => {
    // Only celebrate if there is weight on both sides and they match
    if (leftWeight > 0 && rightWeight > 0 && Math.abs(leftWeight - rightWeight) < 0.01) {
      setIsBalanced(true);
      if (!showConfetti) {
        setShowConfetti(true);
        successAudio.currentTime = 0;
        successAudio.play().catch(() => {});
        const timer = setTimeout(() => setShowConfetti(false), 4000);
        return () => clearTimeout(timer);
      }
    } else {
      setIsBalanced(false);
    }
  }, [leftWeight, rightWeight, showConfetti]);

  const playSound = (audio: HTMLAudioElement) => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const addItemToPan = useCallback((item: Item, pan: 'left' | 'right') => {
    playSound(clickAudio);
    if (pan === 'left') {
        setLeftPanItems(prev => [...prev, item]);
    } else {
        setRightPanItems(prev => [...prev, item]);
    }
    // Small delay for drop sound to differentiate from click
    setTimeout(() => playSound(dropAudio), 100);
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>, targetPan: 'left' | 'right') => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('itemId');
    const itemType = event.dataTransfer.getData('itemType'); // 'fruit' or 'weight'
    
    // Logic: Fruits prefer Left (Bowl), Weights prefer Right (Plate)
    // But we strictly enforce it based on the UI design (Bowl is for goods, Plate for weights)
    // If user drops fruit on right, we can either allow it or bounce it back.
    // For simplicity and realism: Fruits -> Left, Weights -> Right.
    
    let itemToAdd: Item | undefined;
    if (itemType === 'fruit') {
        itemToAdd = FRUITS.find(f => f.id === itemId);
        if (itemToAdd) addItemToPan(itemToAdd, 'left');
    } else {
        itemToAdd = WEIGHTS.find(w => w.id === itemId);
        if (itemToAdd) addItemToPan(itemToAdd, 'right');
    }

  }, [addItemToPan]);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleRemoveItem = useCallback((indexToRemove: number, pan: 'left' | 'right') => {
    playSound(clickAudio);
    if (pan === 'left') {
        setLeftPanItems(prev => prev.filter((_, index) => index !== indexToRemove));
    } else {
        setRightPanItems(prev => prev.filter((_, index) => index !== indexToRemove));
    }
  }, []);

  const handleReset = useCallback(() => {
    setLeftPanItems([]);
    setRightPanItems([]);
    setIsBalanced(false);
    setShowConfetti(false);
    playSound(resetAudio);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-4 pb-8 px-2 text-center font-sans relative overflow-x-hidden bg-orange-50/50">
      {showConfetti && <Confetti />}
      <header className="mb-2 md:mb-6 z-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-red-900 tracking-tight drop-shadow-sm font-serif">
          Weighing Simulation
        </h1>
        <p className="text-sm md:text-lg text-amber-800 mt-2 font-medium">
          Put <span className="font-bold text-green-700">Fruits</span> in the Bowl & <span className="font-bold text-gray-700">Iron Weights</span> on the Plate!
        </p>
      </header>

      <main className="w-full max-w-5xl flex flex-col items-center flex-grow">
        <WeighingScale
          leftPanItems={leftPanItems}
          rightPanItems={rightPanItems}
          leftWeight={leftWeight}
          rightWeight={rightWeight}
          isBalanced={isBalanced}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onRemoveItem={handleRemoveItem}
        />
        
        <FruitBasket 
            fruits={FRUITS} 
            weights={WEIGHTS}
            onAddFruit={(item) => addItemToPan(item, 'left')}
            onAddWeight={(item) => addItemToPan(item, 'right')}
        />

        <button
          onClick={handleReset}
          className="mt-8 px-10 py-3 bg-red-600 text-white font-bold text-xl rounded-full shadow-xl hover:bg-red-700 active:scale-95 transition-all z-20 border-4 border-red-800"
        >
          Reset
        </button>
      </main>
    </div>
  );
};

export default App;
