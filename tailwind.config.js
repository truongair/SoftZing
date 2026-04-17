/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          primary:   "rgb(var(--color-bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
          sidebar:   "rgb(var(--color-bg-sidebar) / <alpha-value>)",
          titlebar:  "rgb(var(--color-titlebar) / <alpha-value>)",
        },
        content: {
          primary:   "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        },
        border:  "rgb(var(--color-border) / <alpha-value>)",
        accent:  "rgb(var(--color-accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}

