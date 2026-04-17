import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './components/pages/HomePage'
import { SettingsPage } from './components/pages/SettingsPage'
import { NotFoundPage } from './components/pages/NotFoundPage'

export function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}
