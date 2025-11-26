
import { Fruit } from './types';
import { AppleIcon, BananaIcon, GrapesIcon, OrangeIcon, WatermelonIcon } from './components/Icons';

export const TARGET_WEIGHT = 2;

export const FRUITS: Fruit[] = [
  { id: 'apple', name: 'Apple', weight: 0.25, Icon: AppleIcon },
  { id: 'orange', name: 'Orange', weight: 0.25, Icon: OrangeIcon },
  { id: 'banana', name: 'Banana', weight: 0.5, Icon: BananaIcon },
  { id: 'grapes', name: 'Grapes', weight: 0.5, Icon: GrapesIcon },
  { id: 'watermelon', name: 'Watermelon', weight: 1.0, Icon: WatermelonIcon },
];

// Base64 encoded audio files
const DROP_SOUND_BASE64 = 'data:audio/wav;base64,UklGRmAEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YYAEAAAAAAAAAAAAAAAA//8CAP//gP//AP//AP//AP4A/gD9APwA/AD9AP0A+wD6APUA9ADzAPIA8QDwAO8A7gDrAOkA6ADnAOYA4wDiAOEA3wDeANwA2wDaANYA1QDTA NAAywDKAMgAxwDEAMMAwgC/AL0AvAC6ALgAtwC1ALQAsQCuAKoApwCnAKUAoQCeAJsAmQCOAIoAhwCEAH8AegB6AHkAawBqAGgAZQBjAGAAXwBdAFwAWgBZAFIATwBNAEsASQBHAEUAQwA/AD0AOwA5ADYAOQAtACsAJwAnACYAJQAkACIAIAAfAB4AHQAbABoAGgAXABYAFQAUABMAEgARABAA';
const SUCCESS_SOUND_BASE64 = 'data:audio/wav;base64,UklGRlIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YYgAAAD//wAA/v8A/P/9/+//BgABAAsADwASABcAHgAiACgALgA1ADwAQQBIAE4AVQBdAGUAbgB5AIQAjACcAKgAswC/AMgA1wDfAOkA8AD7AQMCCgQNBBIFFgYbBSIFKgUyBUMGUwZjB2wIeQmGCpUKzAvADCgNOA5EDooPpRDtEa4S6hPfFPoV/BgMGgwdnB/iIeImaiikKfgqLDEwMUwy/DQKNco3ADgAOXQ6eDxSPg4/F0EKQhZDH0UDRiBGXEhPSVdMc06BT8VSAFYCVxVdM2AnYStdMGY4aKppLGo1axNsHm8VdC56RXxGgV2DZIWbiqmOwpBok3STlpivnKihqqiztLW+wMLHyM/S1Nna3t/g5Ojp7vH0+f4=';
const RESET_SOUND_BASE64 = 'data:audio/wav;base64,UklGRpQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YZAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA==';

export const dropAudio = new Audio(DROP_SOUND_BASE64);
export const successAudio = new Audio(SUCCESS_SOUND_BASE64);
export const resetAudio = new Audio(RESET_SOUND_BASE64);
