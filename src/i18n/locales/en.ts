export default {
  nav: {
    home: 'Home',
    settings: 'Settings',
  },
  titlebar: {
    minimize: 'Minimize',
    maximize: 'Maximize',
    close: 'Close',
  },
  sidebar: {
    expand: 'Expand sidebar',
    collapse: 'Collapse sidebar',
  },
  home: {
    title: 'Welcome to SoftZing',
    subtitle: 'Your app template is ready',
    gettingStarted: 'Getting Started',
    gettingStartedDesc: 'Edit the pages in src/components/pages/ to build your app.',
    featuresIncluded: 'Features Included',
    features: {
      titlebar: 'Custom titlebar with drag region & window controls',
      sidebar: 'Collapsible sidebar navigation',
      theme: 'Dark / light theme toggle with persistence',
      settings: 'Settings page with sections',
    },
  },
  settings: {
    title: 'Settings',
    general: 'General',
    theme: 'Theme',
    themeMode: '{{mode}} mode',
    language: 'Language',
    languageDesc: 'Choose display language',
    about: 'About',
    application: 'Application',
    version: 'Version',
    builtWith: 'Built with',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },
  notFound: {
    message: 'Page not found',
    goHome: 'Go home',
  },
} as const
