import React from 'react';

export type ItemType = 'fruit' | 'weight';

export interface Item {
  id: string;
  name: string;
  weight: number; // in kg
  type: ItemType;
  // Use a more generic prop type that includes className, compatible with both SVG and HTML elements
  Icon: React.FC<{ className?: string } & React.SVGProps<SVGSVGElement>>;
}
