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
        primary: '#4E1C90',
        secondary: '#4D54FF',
        hr: '#9747FF',
        linkHover: '#BEFDFE',
      },
      boxShadow: {
        custom: '0px 6px 4px -4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
