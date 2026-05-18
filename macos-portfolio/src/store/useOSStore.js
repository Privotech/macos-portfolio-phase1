import { create } from 'zustand'


export const useOSStore = create((set) => ({
  
  wallpaper: 1,           
  accentColor: '#0a84ff',
  animationsEnabled: true,

  setWallpaper: (n) => set({ wallpaper: n }),
  setAccentColor: (c) => set({ accentColor: c }),
  toggleAnimations: () => set((s) => ({ animationsEnabled: !s.animationsEnabled })),

  
  windows: [],

  
  openApps: [],
  activeApp: null,
}))
