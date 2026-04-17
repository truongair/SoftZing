import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NavItem } from '../ui/NavItem'
import { NAV_ROUTES } from '../../router/routes'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const { t } = useTranslation()

  return (
    <aside
      className={[
        'flex flex-col h-full bg-surface-sidebar border-r border-border transition-all duration-200 ease-in-out shrink-0',
        collapsed ? 'w-14' : 'w-56',
      ].join(' ')}
    >
      <nav className="flex-1 p-2 flex flex-col gap-1 overflow-hidden">
        {NAV_ROUTES.map(route => (
          <NavItem key={route.path} {...route} collapsed={collapsed} />
        ))}
      </nav>

      <div className="p-2 border-t border-border">
        <button
          onClick={onToggle}
          title={collapsed ? t('sidebar.expand') : t('sidebar.collapse')}
          className="w-full flex items-center justify-center p-2 rounded-lg text-content-secondary hover:bg-surface-secondary hover:text-content-primary transition-colors duration-150"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </aside>
  )
}
