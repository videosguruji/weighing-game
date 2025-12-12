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

// Base64 encoded audio files - Whitespace manually removed
const DROP_SOUND_BASE64 = 'data:audio/wav;base64,UklGRmAEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YYAEAAAAAAAAAAAAAAAA//8CAP//gP//AP//AP//AP4A/gD9APwA/AD9AP0A+wD6APUA9ADzAPIA8QDwAO8A7gDrAOkA6ADnAOYA4wDiAOEA3wDeANwA2wDaANYA1QDTAAAywDKAMgAxwDEAMMAwgC/AL0AvAC6ALgAtwC1ALQAsQCuAKoApwCnAKUAoQCeAJsAmQCOAIoAhwCEAH8AegB6AHkAawBqAGgAZQBjAGAAXwBdAFwAWgBZAFIATwBNAEsASQBHAEUAQwA/AD0AOwA5ADYAOQAtACsAJwAnACYAJQAkACIAIAAfAB4AHQAbABoAGgAXABYAFQAUABMAEgARABAA';
const SUCCESS_SOUND_BASE64 = 'data:audio/wav;base64,UklGRlIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YYgAAAD//wAA/v8A/P/9/+//BgABAAsADwASABcAHgAiACgALgA1ADwAQQBIAE4AVQBdAGUAbgB5AIQAjACcAKgAswC/AMgA1wDfAOkA8AD7AQMCCgQNBBIFFgYbBSIFKgUyBUMGUwZjB2wIeQmGCpUKzAvADCgNOA5EDooPpRDtEa4S6hPfFPoV/BgMGgwdnB/iIeImaiikKfgqLDEwMUwy/DQKNco3ADgAOXQ6eDxSPg4/F0EKQhZDH0UDRiBGXEhPSVdMc06BT8VSAFYCVxVdM2AnYStdMGY4aKppLGo1axNsHm8VdC56RXxGgV2DZIWbiqmOwpBok3STlpivnKihqqiztLW+wMLHyM/S1Nna3t/g5Ojp7vH0+f4=';
const RESET_SOUND_BASE64 = 'data:audio/wav;base64,UklGRpQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YZAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA==';
const CLICK_SOUND_BASE64 = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAAA////AP8A';

// Helper to create audio safely
function createAudio(src: string, volume: number = 1.0) {
  if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
    try {
      const audio = new Audio(src);
      audio.volume = volume;
      return audio;
    } catch (e) {
      console.warn("Audio creation failed", e);
    }
  }
  // Mock for build/SSR
  return { 
    play: () => Promise.resolve(), 
    currentTime: 0, 
    volume,
    pause: () => {},
  } as unknown as HTMLAudioElement;
}

export const dropAudio = createAudio(DROP_SOUND_BASE64);
export const successAudio = createAudio(SUCCESS_SOUND_BASE64);
export const resetAudio = createAudio(RESET_SOUND_BASE64);
export const clickAudio = createAudio(CLICK_SOUND_BASE64, 0.5);
