"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ProfileSettingsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">프로필 설정</h1>
        </div>

        <div className="space-y-6">
          {/* 프로필 이미지 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">프로필 이미지</h2>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <button className="btn btn-secondary">이미지 변경</button>
            </div>
          </section>

          {/* 기본 정보 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">기본 정보</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input"
                  placeholder="전화번호를 입력하세요"
                />
              </div>
            </div>
          </section>

          {/* 추가 정보 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">추가 정보</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  기본 통화
                </label>
                <select id="currency" className="input">
                  <option value="KRW">KRW (₩)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  언어
                </label>
                <select id="language" className="input">
                  <option value="ko">한국어</option>
                  <option value="en">English</option>
                  <option value="ja">日本語</option>
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