/**
 * App Registry — defines all available apps in the OS.
 * Each app is registered here. Phase 4 will wire these to the launcher.
 */

export const APP_IDS = {
  FINDER: 'finder',
  TERMINAL: 'terminal',
  BROWSER: 'browser',
  MUSIC: 'music',
  VSCODE: 'vscode',
  SETTINGS: 'settings',
}

export const appRegistry = [
  {
    id: APP_IDS.FINDER,
    name: 'Finder',
    icon: '🗂️',
    description: 'Portfolio & About Me',
  },
  {
    id: APP_IDS.TERMINAL,
    name: 'Terminal',
    icon: '⬛',
    description: 'Developer CLI',
  },
  {
    id: APP_IDS.BROWSER,
    name: 'Safari',
    icon: '🧭',
    description: 'Project Showcase',
  },
  {
    id: APP_IDS.MUSIC,
    name: 'Music',
    icon: '🎵',
    description: 'Music Player',
  },
  {
    id: APP_IDS.VSCODE,
    name: 'VS Code',
    icon: '💻',
    description: 'Code Editor',
  },
  {
    id: APP_IDS.SETTINGS,
    name: 'Settings',
    icon: '⚙️',
    description: 'System Preferences',
  },
]
