import { create } from 'zustand';

export const useSettingsStore = create((set) => ({
  wallpaper: 'wallpaper-1', 
  theme: 'dark', 
  accentColor: 'blue',
  animationsEnabled: true,
  
  setWallpaper: (wallpaper) => set({ wallpaper }),
  setTheme: (theme) => set({ theme }),
  setAccentColor: (accentColor) => set({ accentColor }),
  setAnimationsEnabled: (animationsEnabled) => set({ animationsEnabled }),
}));
