import { create } from 'zustand';

export const useWindowStore = create((set, get) => ({
  windows: [], // Array of { id, title, isMinimized, isMaximized, zIndex }
  activeWindowId: null,
  highestZIndex: 10,

  openWindow: (id, title) => {
    const { windows, highestZIndex } = get();
    const existingWindow = windows.find((w) => w.id === id);
    const nextZIndex = highestZIndex + 1;

    if (existingWindow) {
      // If already open, focus it, and un-minimize if it was minimized
      set({
        windows: windows.map((w) =>
          w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w
        ),
        activeWindowId: id,
        highestZIndex: nextZIndex,
      });
    } else {
      // Open new window
      set({
        windows: [
          ...windows,
          { id, title, isMinimized: false, isMaximized: true, zIndex: nextZIndex },
        ],
        activeWindowId: id,
        highestZIndex: nextZIndex,
      });
    }
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  maximizeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    }));
  },

  focusWindow: (id) => {
    const { windows, activeWindowId, highestZIndex } = get();
    if (activeWindowId === id) return; // Already focused
    
    const nextZIndex = highestZIndex + 1;
    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      ),
      activeWindowId: id,
      highestZIndex: nextZIndex,
    });
  },
}));
