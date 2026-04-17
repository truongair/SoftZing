import { Minus, Square, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useWindowControls } from '../../hooks/useWindowControls'

export function Titlebar() {
  const { minimize, maximize, close } = useWindowControls()
  const { t } = useTranslation()

  return (
    <div
      data-tauri-drag-region
      className="flex items-center justify-between h-9 px-3 bg-surface-titlebar border-b border-border shrink-0 select-none"
      style={{ height: 'var(--titlebar-height)' }}
    >
      <div className="flex items-center gap-2 pointer-events-none">
        <div className="w-4 h-4 rounded bg-accent flex items-center justify-center">
          <span className="text-white text-xs font-bold leading-none">S</span>
        </div>
        <span className="text-sm font-semibold text-content-primary">SoftZing</span>
      </div>

      <div className="flex items-center">
        <button
          onClick={minimize}
          title={t('titlebar.minimize')}
          className="w-8 h-8 flex items-center justify-center text-content-secondary hover:bg-surface-secondary hover:text-content-primary rounded transition-colors duration-150"
        >
          <Minus size={14} />
        </button>
        <button
          onClick={maximize}
          title={t('titlebar.maximize')}
          className="w-8 h-8 flex items-center justify-center text-content-secondary hover:bg-surface-secondary hover:text-content-primary rounded transition-colors duration-150"
        >
          <Square size={12} />
        </button>
        <button
          onClick={close}
          title={t('titlebar.close')}
          className="w-8 h-8 flex items-center justify-center text-content-secondary hover:bg-red-500 hover:text-white rounded transition-colors duration-150"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
