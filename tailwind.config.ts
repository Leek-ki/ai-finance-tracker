import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'toss': {
          blue: {
            50: '#E8F3FF',
            100: '#C9E2FF',
            200: '#90C2FF',
            300: '#64A8FF',
            400: '#4593FC',
            500: '#3182F6',  // 메인 컬러
            600: '#2272EB',
            700: '#1B64DA',
            800: '#1957C2',
            900: '#194AA6',
          },
          gray: {
            50: '#F9FAFB',
            100: '#F2F4F6',
            200: '#E5E8EB',
            300: '#D1D6DB',
            400: '#B0B8C1',
            500: '#8B95A1',  // 기본 텍스트
            600: '#6B7684',
            700: '#4E5968',
            800: '#333D4B',
            900: '#191F28',
          },
          green: {
            50: '#E8FAF1',
            100: '#C3F4DC',
            200: '#8EEDC7',
            300: '#4CD9AC',
            400: '#15C791',  // 성공/긍정
            500: '#0AB27B',
            600: '#099267',
          },
          red: {
            50: '#FFF0F0',
            100: '#FFD9D9',
            200: '#FFB3B3',
            300: '#FF8080',
            400: '#FF4D4D',  // 실패/부정
            500: '#FF3333',
            600: '#FF1A1A',
          }
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'sans-serif'],
      },
      boxShadow: {
        'toss': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'toss-bold': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config 