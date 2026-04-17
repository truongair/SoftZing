import { Home, Settings } from 'lucide-react'
import type { ComponentType } from 'react'

export interface NavRoute {
  path: string
  labelKey: string
  icon: ComponentType<{ size?: number; className?: string }>
}

export const NAV_ROUTES: NavRoute[] = [
  { path: '/',         labelKey: 'nav.home',     icon: Home     },
  { path: '/settings', labelKey: 'nav.settings', icon: Settings },
]
