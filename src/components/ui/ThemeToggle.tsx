import { Sun, Moon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useThemeContext } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()
  const { t } = useTranslation()

  return (
    <button
      onClick={toggleTheme}
      title={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
      className="p-2 rounded-lg text-content-secondary hover:bg-surface-secondary hover:text-content-primary transition-colors duration-150"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
