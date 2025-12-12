import { Item } from './types';
import { 
  AppleIcon, 
  BananaIcon, 
  OrangeIcon, 
  WatermelonIcon, 
  PineappleIcon, 
  MangoIcon,
  Weight50gIcon,
  Weight100gIcon,
  Weight200gIcon,
  Weight500gIcon,
  Weight1kgIcon,
  Weight2kgIcon
} from './components/Icons';

export const TARGET_WEIGHT = 0; // Not used in dynamic mode

export const FRUITS: Item[] = [
  { id: 'apple', name: 'Apple', weight: 0.1, type: 'fruit', Icon: AppleIcon },       // 100g
  { id: 'banana', name: 'Banana', weight: 0.1, type: 'fruit', Icon: BananaIcon },    // 100g
  { id: 'orange', name: 'Orange', weight: 0.2, type: 'fruit', Icon: OrangeIcon },    // 200g
  { id: 'mango', name: 'Mango', weight: 0.3, type: 'fruit', Icon: MangoIcon },       // 300g
  { id: 'pineapple', name: 'Pineapple', weight: 0.5, type: 'fruit', Icon: PineappleIcon }, // 500g
  { id: 'watermelon', name: 'Watermelon', weight: 1.0, type: 'fruit', Icon: WatermelonIcon }, // 1kg
];

export const WEIGHTS: Item[] = [
  { id: 'w50g', name: '50g', weight: 0.05, type: 'weight', Icon: Weight50gIcon },
  { id: 'w100g', name: '100g', weight: 0.1, type: 'weight', Icon: Weight100gIcon },
  { id: 'w200g', name: '200g', weight: 0.2, type: 'weight', Icon: Weight200gIcon },
  { id: 'w500g', name: '500g', weight: 0.5, type: 'weight', Icon: Weight500gIcon },
  { id: 'w1kg', name: '1kg', weight: 1.0, type: 'weight', Icon: Weight1kgIcon },
  { id: 'w2kg', name: '2kg', weight: 2.0, type: 'weight', Icon: Weight2kgIcon },
];
