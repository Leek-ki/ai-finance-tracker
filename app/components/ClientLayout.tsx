"use client";

import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import BottomNav from './BottomNav';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { isDarkMode, colorTheme } = useTheme();

  return (
    <html lang="ko" className={isDarkMode ? 'dark' : ''} data-theme={colorTheme}>
      <body className="min-h-screen bg-toss-gray-50 dark:bg-gray-900 text-toss-gray-900 dark:text-gray-100">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 min-h-screen relative pb-16">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
} 