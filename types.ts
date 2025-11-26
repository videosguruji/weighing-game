
import React from 'react';

export interface Fruit {
  id: string;
  name: string;
  weight: number;
  Icon: React.FC<{ className?: string }>;
}
