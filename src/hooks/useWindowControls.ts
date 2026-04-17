const isTauri = () => typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window

export function useWindowControls() {
  const minimize = async () => {
    if (!isTauri()) return
    const { getCurrentWindow } = await import('@tauri-apps/api/window')
    getCurrentWindow().minimize()
  }
  const maximize = async () => {
    if (!isTauri()) return
    const { getCurrentWindow } = await import('@tauri-apps/api/window')
    getCurrentWindow().toggleMaximize()
  }
  const close = async () => {
    if (!isTauri()) return
    const { getCurrentWindow } = await import('@tauri-apps/api/window')
    getCurrentWindow().close()
  }
  return { minimize, maximize, close }
}
