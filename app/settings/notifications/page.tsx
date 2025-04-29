"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NotificationsSettingsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">알림 설정</h1>
        </div>

        {/* 알림 설정 */}
        <section className="card overflow-hidden">
          <h2 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
            알림 활성화
          </h2>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">푸시 알림</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">앱 알림을 받습니다</p>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">이메일 알림</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">이메일로 알림을 받습니다</p>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">SMS 알림</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">문자 메시지로 알림을 받습니다</p>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* 알림 유형 */}
        <section className="card overflow-hidden mt-6">
          <h2 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
            알림 유형
          </h2>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">입출금 알림</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">입출금 발생 시 알림을 받습니다</p>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">예산 알림</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">예산 초과 시 알림을 받습니다</p>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">저축 목표 알림</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">저축 목표 달성 시 알림을 받습니다</p>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">주간 리포트</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">주간 지출 리포트를 받습니다</p>
              </div>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
          </div>
        </section>

        {/* 알림 시간 설정 */}
        <section className="card overflow-hidden">
          <h2 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
            알림 시간 설정
          </h2>
          <div className="p-4 space-y-4">
            <div>
              <label htmlFor="quiet-start" className="label">방해 금지 시작</label>
              <input
                type="time"
                id="quiet-start"
                className="input"
                defaultValue="22:00"
              />
            </div>
            <div>
              <label htmlFor="quiet-end" className="label">방해 금지 종료</label>
              <input
                type="time"
                id="quiet-end"
                className="input"
                defaultValue="07:00"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ⏰ 설정한 시간 동안에는 긴급 알림을 제외한 모든 알림이 무음 처리됩니다.
            </p>
          </div>
        </section>

        {/* 저장 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
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