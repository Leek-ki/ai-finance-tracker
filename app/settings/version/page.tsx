"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function VersionPage() {
  const updates = [
    {
      version: 'v1.0.0',
      date: '2024년 3월 1일',
      type: '주요 업데이트',
      changes: [
        '앱 최초 출시',
        '기본 가계부 기능 구현',
        '예산 설정 기능 추가',
        '자산 관리 기능 추가',
        '다크 모드 지원',
      ]
    },
    {
      version: 'v0.9.0',
      date: '2024년 2월 15일',
      type: '베타 버전',
      changes: [
        '베타 테스트 시작',
        '주요 버그 수정',
        'UI/UX 개선',
      ]
    },
    {
      version: 'v0.8.0',
      date: '2024년 1월 30일',
      type: '알파 버전',
      changes: [
        '알파 테스트 시작',
        '핵심 기능 구현',
        '초기 버그 수정',
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">버전 정보</h1>
        </div>

        <div className="space-y-6">
          {/* 현재 버전 */}
          <section className="card p-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI 가계부</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">현재 버전: v1.0.0</p>
              <div className="mt-4">
                <span className="badge badge-primary">최신 버전</span>
              </div>
            </div>
          </section>

          {/* 업데이트 내역 */}
          <section className="card p-4">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">업데이트 내역</h2>
            <div className="space-y-6">
              {updates.map((update, index) => (
                <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{update.version}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{update.date}</p>
                    </div>
                    <span className="text-sm text-blue-500 dark:text-blue-400">{update.type}</span>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {update.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start">
                        <span className="text-gray-400 dark:text-gray-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 추가 정보 */}
          <section className="card p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>개발사: AI 가계부</p>
              <p>© 2024 AI 가계부. All rights reserved.</p>
              <p className="text-blue-500 dark:text-blue-400">오픈소스 라이선스 보기</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 