import { SAFELIST } from './src/utils/safelist'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: SAFELIST.py,
  theme: {
    extend: {
      spacing: SAFELIST.spacing
    },
  },
  plugins: [],
}

