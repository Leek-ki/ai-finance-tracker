"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  darkModeSchedule: string;
  setDarkModeSchedule: (schedule: string) => void;
  fontFamily: string;
  setFontFamily: (family: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [darkModeSchedule, setDarkModeSchedule] = useState('system');
  const [fontFamily, setFontFamily] = useState('noto-sans');
  const [fontSize, setFontSize] = useState('md');

  // 다크모드 토글
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // 다크모드 적용
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // 시스템 다크모드 감지
  useEffect(() => {
    if (darkModeSchedule === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [darkModeSchedule]);

  // 일몰/일출 기반 다크모드
  useEffect(() => {
    if (darkModeSchedule === 'sunset') {
      const checkTime = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsDarkMode(hours >= 18 || hours < 6);
      };

      checkTime();
      const interval = setInterval(checkTime, 1000 * 60); // 1분마다 체크
      return () => clearInterval(interval);
    }
  }, [darkModeSchedule]);

  // 글꼴 적용
  useEffect(() => {
    document.documentElement.style.setProperty('--font-family', getFontFamily(fontFamily));
  }, [fontFamily]);

  // 글자 크기 적용
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      darkModeSchedule,
      setDarkModeSchedule,
      fontFamily,
      setFontFamily,
      fontSize,
      setFontSize,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

function getFontFamily(font: string) {
  switch (font) {
    case 'pretendard':
      return 'Pretendard, sans-serif';
    case 'spoqa':
      return 'Spoqa Han Sans Neo, sans-serif';
    default:
      return 'Noto Sans KR, sans-serif';
  }
} 