"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function LanguageSettingsPage() {
  const languages = [
    { code: 'ko', name: '한국어', native: '한국어' },
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ja', name: 'Japanese', native: '日本語' },
    { code: 'zh', name: 'Chinese', native: '中文' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">언어 설정</h1>
        </div>

        <div className="space-y-6">
          {/* 언어 선택 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">앱 표시 언어</h2>
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{
                      lang.code === 'ko' ? '🇰🇷' :
                      lang.code === 'en' ? '🇺🇸' :
                      lang.code === 'ja' ? '🇯🇵' :
                      '🇨🇳'
                    }</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{lang.native}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lang.name}</p>
                    </div>
                  </div>
                  {lang.code === 'ko' && (
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* 지역 설정 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">날짜 및 시간 형식</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="date-format" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  날짜 형식
                </label>
                <select id="date-format" className="input">
                  <option value="ko">YYYY년 MM월 DD일</option>
                  <option value="en">MM/DD/YYYY</option>
                  <option value="iso">YYYY-MM-DD</option>
                </select>
              </div>
              <div>
                <label htmlFor="time-format" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  시간 형식
                </label>
                <select id="time-format" className="input">
                  <option value="12">12시간 (오전/오후)</option>
                  <option value="24">24시간</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* 저장 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-2xl mx-auto">
            <button className="btn btn-primary w-full">
              설정 저장
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 