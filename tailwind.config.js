/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'toss-blue': {
          50: '#EBF3FF',
          100: '#E7F4FF',
          500: '#0064FF',
          600: '#0052D9',
          800: '#0040A0',
        },
        'toss-gray': {
          50: '#F9FAFB',
          100: '#F2F4F6',
          200: '#E5E8EB',
          500: '#8B95A1',
          900: '#191F28',
        },
      },
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'],
      },
      boxShadow: {
        'toss': '0 1px 2px 0 rgb(0 0 0 / 0.1)',
        'toss-lg': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'toss-bold': '0 8px 16px -3px rgb(0 0 0 / 0.15)',
      },
    },
  },
  plugins: [],
} 