import { useOSStore } from '@store/useOSStore'


export function useOS() {
  const store = useOSStore()
  return store
}
