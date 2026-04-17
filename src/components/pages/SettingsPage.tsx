import { useTranslation } from 'react-i18next'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LanguageToggle } from '../ui/LanguageToggle'
import { SectionHeader } from '../ui/SectionHeader'
import { useThemeContext } from '../../context/ThemeContext'

export function SettingsPage() {
  const { theme } = useThemeContext()
  const { t } = useTranslation()

  return (
    <div className="max-w-lg">
      <h1 className="text-xl font-bold text-content-primary mb-6">{t('settings.title')}</h1>

      <SectionHeader title={t('settings.general')} />
      <div className="rounded-xl border border-border bg-surface-secondary overflow-hidden divide-y divide-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-medium text-content-primary">{t('settings.theme')}</p>
            <p className="text-xs text-content-secondary">
              {t('settings.themeMode', { mode: t(`theme.${theme}`) })}
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-medium text-content-primary">{t('settings.language')}</p>
            <p className="text-xs text-content-secondary">{t('settings.languageDesc')}</p>
          </div>
          <LanguageToggle />
        </div>
      </div>

      <SectionHeader title={t('settings.about')} />
      <div className="rounded-xl border border-border bg-surface-secondary overflow-hidden divide-y divide-border">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-content-secondary">{t('settings.application')}</span>
          <span className="text-sm font-medium text-content-primary">SoftZing</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-content-secondary">{t('settings.version')}</span>
          <span className="text-sm font-mono text-content-primary">1.0.0</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-content-secondary">{t('settings.builtWith')}</span>
          <span className="text-sm text-content-primary">Tauri + React + TypeScript</span>
        </div>
      </div>
    </div>
  )
}
