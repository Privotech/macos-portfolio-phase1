import { create } from 'zustand'

/**
 * Global OS store — will grow with each phase.
 * Phase 1: just wallpaper + theme settings as foundation.
 */
export const useOSStore = create((set) => ({
  // ── Theme ──────────────────────────────────────────────
  wallpaper: 1,           // 1 | 2 | 3
  accentColor: '#0a84ff',
  animationsEnabled: true,

  setWallpaper: (n) => set({ wallpaper: n }),
  setAccentColor: (c) => set({ accentColor: c }),
  toggleAnimations: () => set((s) => ({ animationsEnabled: !s.animationsEnabled })),

  // ── Windows (Phase 3) ──────────────────────────────────
  windows: [],

  // ── Apps (Phase 4) ────────────────────────────────────
  openApps: [],
  activeApp: null,
}))
