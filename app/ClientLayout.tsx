"use client";

import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { isDarkMode, colorTheme } = useTheme();

  return (
    <div className={`min-h-screen bg-toss-gray-50 dark:bg-gray-900 ${isDarkMode ? 'dark' : ''}`} data-theme={colorTheme}>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
} 