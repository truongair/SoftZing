import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Titlebar } from './Titlebar'
import { Sidebar } from './Sidebar'

function getInitialCollapsed(): boolean {
  return localStorage.getItem('sidebar-collapsed') === 'true'
}

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(getInitialCollapsed)

  const handleToggle = () => {
    setCollapsed(prev => {
      const next = !prev
      localStorage.setItem('sidebar-collapsed', String(next))
      return next
    })
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-surface-primary text-content-primary">
      <Titlebar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={collapsed} onToggle={handleToggle} />
        <main className="flex-1 overflow-auto p-6 bg-surface-primary">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
