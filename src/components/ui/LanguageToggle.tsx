import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'vi', label: 'VI' },
]

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const handleChange = (code: string) => {
    i18n.changeLanguage(code)
    localStorage.setItem('language', code)
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border p-1 bg-surface-primary">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={[
            'px-3 py-1 rounded-md text-xs font-semibold transition-colors duration-150',
            i18n.language === code
              ? 'bg-accent text-white'
              : 'text-content-secondary hover:text-content-primary',
          ].join(' ')}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
