"use client";

import { ArrowLeftIcon, CloudArrowUpIcon, CloudArrowDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BackupSettingsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">데이터 백업</h1>
        </div>

        <div className="space-y-6">
          {/* 자동 백업 설정 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">자동 백업 설정</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">자동 백업</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">매일 자동으로 데이터를 백업합니다</p>
                </div>
                <button
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500"
                >
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
              <div>
                <label htmlFor="backup-frequency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  백업 주기
                </label>
                <select id="backup-frequency" className="input">
                  <option value="daily">매일</option>
                  <option value="weekly">매주</option>
                  <option value="monthly">매월</option>
                </select>
              </div>
            </div>
          </section>

          {/* 수동 백업 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">수동 백업</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-3">
                  <CloudArrowUpIcon className="w-6 h-6 text-gray-900 dark:text-white" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">백업하기</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">현재 데이터를 클라우드에 백업</p>
                  </div>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-3">
                  <CloudArrowDownIcon className="w-6 h-6 text-gray-900 dark:text-white" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">복원하기</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">클라우드에서 데이터 복원</p>
                  </div>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-3">
                  <DocumentArrowDownIcon className="w-6 h-6 text-gray-900 dark:text-white" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">내보내기</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">데이터를 파일로 내보내기</p>
                  </div>
                </div>
              </button>
            </div>
          </section>

          {/* 백업 내역 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">백업 내역</h2>
            <div className="space-y-3">
              {[
                { date: '2024.03.21 13:45', size: '2.3MB', type: '자동' },
                { date: '2024.03.20 13:45', size: '2.2MB', type: '자동' },
                { date: '2024.03.19 18:22', size: '2.2MB', type: '수동' },
              ].map((backup, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{backup.date}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{backup.size} • {backup.type}</p>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                    복원
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 