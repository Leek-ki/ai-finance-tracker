"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PasswordSettingsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">비밀번호 변경</h1>
        </div>

        {/* 안내 메시지 */}
        <div className="bg-toss-blue-50 text-toss-blue-600 p-4 rounded-xl text-sm mt-4">
          💡 안전한 비밀번호를 위해 영문, 숫자, 특수문자를 조합해 주세요.
        </div>

        <div className="space-y-6">
          {/* 비밀번호 변경 폼 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">비밀번호 변경</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="input"
                  placeholder="현재 비밀번호를 입력하세요"
                />
              </div>
              <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  새 비밀번호
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="input"
                  placeholder="새 비밀번호를 입력하세요"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  비밀번호는 8자 이상이어야 하며, 영문, 숫자, 특수문자를 포함해야 합니다.
                </p>
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  새 비밀번호 확인
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="input"
                  placeholder="새 비밀번호를 다시 입력하세요"
                />
              </div>
            </div>
          </section>

          {/* 보안 설정 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">보안 설정</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">2단계 인증</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">로그인 시 추가 인증을 요구합니다</p>
                </div>
                <button
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">생체 인증</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">지문이나 Face ID로 로그인합니다</p>
                </div>
                <button
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
                >
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* 저장 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-2xl mx-auto">
            <button className="btn btn-primary w-full">
              비밀번호 변경
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 