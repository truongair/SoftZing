import { Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
          <Zap size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-content-primary">{t('home.title')}</h1>
          <p className="text-sm text-content-secondary">{t('home.subtitle')}</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="p-4 rounded-xl border border-border bg-surface-secondary">
          <h2 className="font-semibold text-content-primary mb-1">{t('home.gettingStarted')}</h2>
          <p className="text-sm text-content-secondary">
            {t('home.gettingStartedDesc').split('src/components/pages/')[0]}
            <code className="font-mono text-accent bg-accent/10 px-1 rounded">
              src/components/pages/
            </code>
            {t('home.gettingStartedDesc').split('src/components/pages/')[1]}
          </p>
        </div>

        <div className="p-4 rounded-xl border border-border bg-surface-secondary">
          <h2 className="font-semibold text-content-primary mb-1">{t('home.featuresIncluded')}</h2>
          <ul className="text-sm text-content-secondary space-y-1 mt-2">
            {(['titlebar', 'sidebar', 'theme', 'settings'] as const).map(key => (
              <li key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {t(`home.features.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
