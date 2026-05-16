import { useOSStore } from '@store/useOSStore'

/**
 * Convenience hook for OS-wide state.
 * Expand as new phases add features.
 */
export function useOS() {
  const store = useOSStore()
  return store
}
