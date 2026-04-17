# SoftZing — Template Desktop App

Đây là **base template** cho tất cả ứng dụng desktop của SoftZing. Khi tạo app mới, copy toàn bộ folder này làm điểm khởi đầu.

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Desktop runtime | Tauri 2.x (Rust) |
| Frontend | React 18 + TypeScript |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 (`MemoryRouter`) |
| Icons | lucide-react |
| i18n | i18next + react-i18next |

## Lệnh

```bash
npx tauri dev      # dev mode (khởi động cả Vite + Tauri)
npm run build      # build frontend only
npx tauri build    # build installer
npx tsc --noEmit   # type check
```

## Cấu trúc thư mục

```
src/
├── App.tsx                        # Router root (MemoryRouter)
├── main.tsx                       # Entry: ThemeProvider + i18n import
├── styles/globals.css             # Tailwind directives + CSS variables
├── i18n/
│   ├── index.ts                   # i18next init, đọc từ localStorage key 'language'
│   └── locales/
│       ├── en.ts                  # Tiếng Anh
│       └── vi.ts                  # Tiếng Việt
├── context/
│   └── ThemeContext.tsx           # ThemeProvider, useThemeContext()
├── hooks/
│   ├── useTheme.ts                # theme state, localStorage key 'theme'
│   └── useWindowControls.ts      # Tauri window min/max/close (lazy import)
├── router/
│   └── routes.tsx                 # NAV_ROUTES[] — nguồn duy nhất cho sidebar + router
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx          # Shell: Titlebar + Sidebar + <Outlet />
│   │   ├── Titlebar.tsx           # Custom titlebar, data-tauri-drag-region
│   │   └── Sidebar.tsx            # Collapsible, state ở AppLayout
│   ├── ui/
│   │   ├── NavItem.tsx            # NavLink với active state
│   │   ├── ThemeToggle.tsx        # Sun/Moon button
│   │   ├── LanguageToggle.tsx     # EN/VI pill buttons
│   │   └── SectionHeader.tsx     # Label cho settings section
│   └── pages/
│       ├── HomePage.tsx
│       ├── SettingsPage.tsx
│       └── NotFoundPage.tsx
src-tauri/
├── tauri.conf.json                # decorations: false, 1100×700, id: com.softzingapp.desktop
├── capabilities/default.json     # Window permissions (Tauri 2 bắt buộc)
└── src/
    ├── main.rs
    └── lib.rs
```

## Thêm trang mới

**Chỉ cần 2 bước:**

1. Tạo file trang trong `src/components/pages/NewPage.tsx`
2. Thêm route vào `src/router/routes.tsx`:

```typescript
// routes.tsx
{ path: '/new-page', labelKey: 'nav.newPage', icon: SomeIcon }
```

3. Thêm translation key vào `src/i18n/locales/en.ts` và `vi.ts`:
```typescript
nav: { newPage: 'New Page' }
```

4. Thêm `<Route>` vào `src/App.tsx`:
```tsx
<Route path="new-page" element={<NewPage />} />
```

Sidebar tự động hiển thị entry mới — không cần sửa Sidebar.

## Theme System

**CSS variables** định nghĩa trong `src/styles/globals.css`:
- `:root` = light mode
- `.dark` = dark mode (toggle bằng class trên `<html>`)

**Tailwind tokens** tương ứng (dùng trong className):
```
bg-surface-primary     bg-surface-secondary
bg-surface-sidebar     bg-surface-titlebar
text-content-primary   text-content-secondary
border                 bg-accent / text-accent
bg-accent/10           (opacity variant)
```

**Persist:** `localStorage.getItem('theme')` → `'light' | 'dark'`

**Anti-flash:** Inline `<script>` trong `index.html` chạy trước React để tránh flash khi reload.

## i18n

**Thêm ngôn ngữ mới:**
1. Tạo `src/i18n/locales/[code].ts` (copy structure từ `en.ts`)
2. Import và đăng ký trong `src/i18n/index.ts`
3. Thêm button vào `LanguageToggle.tsx`

**Dùng trong component:**
```typescript
import { useTranslation } from 'react-i18next'
const { t } = useTranslation()
// t('settings.title'), t('home.features.titlebar'), ...
```

**Persist:** `localStorage.getItem('language')` → `'en' | 'vi'`

## Tauri — Những điểm quan trọng

### Custom Titlebar
- `decorations: false` trong `tauri.conf.json` — bắt buộc
- `data-tauri-drag-region` trên div titlebar để kéo cửa sổ
- Buttons bên trong drag region vẫn hoạt động bình thường

### Window API
- Import **lazy** (dynamic import) để tránh crash khi mở bằng browser:
  ```typescript
  // useWindowControls.ts
  const isTauri = () => '__TAURI_INTERNALS__' in window
  if (!isTauri()) return
  const { getCurrentWindow } = await import('@tauri-apps/api/window')
  ```
- **Permissions** phải khai báo trong `src-tauri/capabilities/default.json` — không có thì API fail silently

### Router
- Dùng `MemoryRouter` (không phải `BrowserRouter`) vì Tauri serve từ protocol `tauri://`

### Vite Config
- `clearScreen: false` — không xóa output của Tauri CLI
- `strictPort: true` — Tauri hardcode port 5173
- **Không** set `build.target` — conflict với Vite 8 + rolldown bundler

## Lưu ý khi phát triển

- **Mỗi app mới** đổi `identifier` trong `tauri.conf.json` (tránh conflict registry Windows)
- **Version** trong `tauri.conf.json` và `package.json` nên đồng bộ
- **Tailwind opacity modifier** (`bg-accent/10`) hoạt động vì CSS variables dùng raw RGB channels: `255 255 255` (không có `rgb()`)
- Sidebar collapse state persist qua `localStorage.getItem('sidebar-collapsed')`
