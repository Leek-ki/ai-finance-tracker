"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTheme } from '@/app/contexts/ThemeContext'

export default function ThemeSettingsPage() {
  const {
    isDarkMode,
    toggleDarkMode,
    darkModeSchedule,
    setDarkModeSchedule,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
  } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">화면 설정</h1>
        </div>

        {/* 다크 모드 설정 */}
        <section className="card overflow-hidden">
          <h2 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
            다크 모드
          </h2>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">다크 모드</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">어두운 테마로 전환</p>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-900 dark:text-white">다크 모드 전환</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="darkMode"
                    value="system"
                    checked={darkModeSchedule === 'system'}
                    onChange={(e) => setDarkModeSchedule(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-900 dark:text-white">시스템 설정에 따라</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="darkMode"
                    value="sunset"
                    checked={darkModeSchedule === 'sunset'}
                    onChange={(e) => setDarkModeSchedule(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-900 dark:text-white">일몰/일출에 따라</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="darkMode"
                    value="manual"
                    checked={darkModeSchedule === 'manual'}
                    onChange={(e) => setDarkModeSchedule(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-gray-900 dark:text-white">수동으로</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* 글꼴 설정 */}
        <section className="card overflow-hidden mt-6">
          <h2 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
            글꼴 설정
          </h2>
          <div className="p-4 space-y-4">
            <div>
              <label htmlFor="font-family" className="text-gray-900 dark:text-white">글꼴</label>
              <select
                id="font-family"
                className="mt-2 input w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <option value="noto-sans">Noto Sans KR</option>
                <option value="pretendard">Pretendard</option>
                <option value="spoqa">Spoqa Han Sans Neo</option>
              </select>
            </div>
            <div>
              <label htmlFor="font-size" className="text-gray-900 dark:text-white">글자 크기</label>
              <select
                id="font-size"
                className="mt-2 input w-full dark:bg-gray-700 dark:text-white dark:border-gray-600"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              >
                <option value="sm">작게</option>
                <option value="md">보통</option>
                <option value="lg">크게</option>
                <option value="xl">매우 크게</option>
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 