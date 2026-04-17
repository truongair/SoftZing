# SoftZing Desktop Template

Base template cho tất cả ứng dụng desktop của SoftZing. Khi tạo app mới, copy toàn bộ repo này làm điểm khởi đầu.

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Desktop runtime | Tauri 2.x (Rust) |
| Frontend | React 18 + TypeScript |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 |
| Icons | lucide-react |
| i18n | i18next + react-i18next |

## Tính năng

- **Custom Titlebar** — Thay thế titlebar OS, hỗ trợ kéo cửa sổ và nút min/max/close
- **Sidebar collapsible** — Thu gọn/mở rộng, trạng thái được lưu qua các lần khởi động
- **Dark / Light mode** — Chuyển đổi giao diện, không bị flash khi reload
- **Đa ngôn ngữ** — Tiếng Anh và Tiếng Việt, dễ thêm ngôn ngữ mới
- **Settings page** — Trang cài đặt với các section General và About

## Yêu cầu

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri prerequisites](https://tauri.app/start/prerequisites/)

## Cài đặt

```bash
git clone https://github.com/truongair/SoftZing.git
cd SoftZing
npm install
```

## Lệnh

```bash
npx tauri dev       # Chạy app ở dev mode
npx tauri build     # Build installer
npm run build       # Build frontend only
npx tsc --noEmit    # Kiểm tra TypeScript
```

## Thêm trang mới

**1.** Tạo file trang:
```
src/components/pages/MyPage.tsx
```

**2.** Thêm vào `src/router/routes.tsx`:
```typescript
{ path: '/my-page', labelKey: 'nav.myPage', icon: SomeIcon }
```

**3.** Thêm translation key vào `src/i18n/locales/en.ts` và `vi.ts`:
```typescript
nav: { myPage: 'My Page' }
```

**4.** Thêm `<Route>` vào `src/App.tsx`:
```tsx
<Route path="my-page" element={<MyPage />} />
```

Sidebar tự động hiển thị entry mới.

## Cấu trúc thư mục

```
src/
├── components/
│   ├── layout/        # AppLayout, Titlebar, Sidebar
│   ├── ui/            # NavItem, ThemeToggle, LanguageToggle, SectionHeader
│   └── pages/         # HomePage, SettingsPage, NotFoundPage
├── context/           # ThemeContext
├── hooks/             # useTheme, useWindowControls
├── i18n/
│   └── locales/       # en.ts, vi.ts
├── router/            # routes.tsx — nguồn duy nhất cho sidebar + router
└── styles/            # globals.css — CSS variables + Tailwind
src-tauri/
├── capabilities/      # Window permissions (Tauri 2 bắt buộc)
└── tauri.conf.json    # decorations: false, 1100×700
```

## Khi tạo app mới từ template

1. Đổi `identifier` trong `src-tauri/tauri.conf.json` (tránh conflict registry Windows)
2. Đổi `productName` trong `tauri.conf.json` và `name` trong `package.json`
3. Đổi `title` trong `index.html`
4. Xóa các trang placeholder và thêm trang của app mới

## License

MIT
