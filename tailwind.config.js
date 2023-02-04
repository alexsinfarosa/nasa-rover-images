const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'rgba(151, 71, 255, 0.3)',
      },
      boxShadow: {
        custom: '0px 6px 4px -4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
