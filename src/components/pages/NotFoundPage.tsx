import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function NotFoundPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
      <p className="text-6xl font-bold text-border">404</p>
      <p className="text-content-secondary">{t('notFound.message')}</p>
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
      >
        {t('notFound.goHome')}
      </button>
    </div>
  )
}
