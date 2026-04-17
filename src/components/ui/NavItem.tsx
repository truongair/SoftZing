import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { NavRoute } from '../../router/routes'

interface NavItemProps extends NavRoute {
  collapsed: boolean
}

export function NavItem({ path, labelKey, icon: Icon, collapsed }: NavItemProps) {
  const { t } = useTranslation()
  const label = t(labelKey)

  return (
    <NavLink
      to={path}
      end={path === '/'}
      className={({ isActive }) =>
        [
          'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
          'border-l-2',
          isActive
            ? 'border-accent bg-accent/10 text-accent'
            : 'border-transparent text-content-secondary hover:bg-surface-secondary hover:text-content-primary',
        ].join(' ')
      }
      title={collapsed ? label : undefined}
    >
      <Icon size={18} className="shrink-0" />
      <span
        className={[
          'transition-all duration-200 overflow-hidden whitespace-nowrap',
          collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100',
        ].join(' ')}
      >
        {label}
      </span>
    </NavLink>
  )
}
