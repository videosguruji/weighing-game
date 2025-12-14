
// Base64 encoded audio files
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
