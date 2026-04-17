export default {
  nav: {
    home: 'Trang chủ',
    settings: 'Cài đặt',
  },
  titlebar: {
    minimize: 'Thu nhỏ',
    maximize: 'Phóng to',
    close: 'Đóng',
  },
  sidebar: {
    expand: 'Mở rộng thanh bên',
    collapse: 'Thu gọn thanh bên',
  },
  home: {
    title: 'Chào mừng đến với SoftZing',
    subtitle: 'Template ứng dụng của bạn đã sẵn sàng',
    gettingStarted: 'Bắt đầu',
    gettingStartedDesc: 'Chỉnh sửa các trang trong src/components/pages/ để xây dựng ứng dụng của bạn.',
    featuresIncluded: 'Tính năng có sẵn',
    features: {
      titlebar: 'Thanh tiêu đề tùy chỉnh với vùng kéo & điều khiển cửa sổ',
      sidebar: 'Thanh điều hướng bên có thể thu gọn',
      theme: 'Chuyển đổi giao diện tối/sáng với lưu trữ tùy chọn',
      settings: 'Trang cài đặt với các phần riêng biệt',
    },
  },
  settings: {
    title: 'Cài đặt',
    general: 'Chung',
    theme: 'Giao diện',
    themeMode: 'Chế độ {{mode}}',
    language: 'Ngôn ngữ',
    languageDesc: 'Chọn ngôn ngữ hiển thị',
    about: 'Thông tin',
    application: 'Ứng dụng',
    version: 'Phiên bản',
    builtWith: 'Xây dựng bằng',
  },
  theme: {
    light: 'Sáng',
    dark: 'Tối',
    switchToLight: 'Chuyển sang giao diện sáng',
    switchToDark: 'Chuyển sang giao diện tối',
  },
  notFound: {
    message: 'Không tìm thấy trang',
    goHome: 'Về trang chủ',
  },
} as const
