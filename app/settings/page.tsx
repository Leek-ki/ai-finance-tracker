import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-white dark:bg-gray-900">
      <div className="p-6 space-y-6">
        {/* 프로필 섹션 */}
        <Link href="/settings/profile" className="block">
          <section className="card card-hover p-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-medium">
                  홍
                </div>
                <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  ✏️
                </button>
              </div>
              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-white">홍길동</h2>
                <p className="text-gray-600 dark:text-gray-300">hong@example.com</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge badge-primary">프리미엄</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2024.12.31까지
                  </span>
                </div>
              </div>
            </div>
          </section>
        </Link>

        {/* 설정 메뉴 */}
        <div className="grid gap-6">
          {/* 계정 설정 */}
          <section className="card overflow-hidden">
            <h3 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
              계정 설정
            </h3>
            {[
              { title: '프로필 수정', icon: '👤', desc: '이름, 이메일 등 기본 정보 변경', href: '/settings/profile' },
              { title: '비밀번호 변경', icon: '🔒', desc: '비밀번호 및 보안 설정', href: '/settings/password' },
              { title: '알림 설정', icon: '🔔', desc: '알림 및 메시지 수신 설정', href: '/settings/notifications' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </Link>
            ))}
          </section>

          {/* 앱 설정 */}
          <section className="card overflow-hidden">
            <h3 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
              앱 설정
            </h3>
            {[
              { title: '화면 설정', icon: '🎨', desc: '다크 모드 및 글꼴 설정', href: '/settings/theme' },
              { title: '언어 설정', icon: '🌐', desc: '앱 표시 언어 변경', href: '/settings/language' },
              { title: '데이터 백업', icon: '💾', desc: '데이터 백업 및 복원', href: '/settings/backup' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </Link>
            ))}
          </section>

          {/* 기타 */}
          <section className="card overflow-hidden">
            <h3 className="p-4 font-medium text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">
              기타
            </h3>
            {[
              { title: '이용약관', icon: '📜', desc: '서비스 이용약관', href: '/settings/terms' },
              { title: '개인정보처리방침', icon: '🔒', desc: '개인정보 보호정책', href: '/settings/privacy' },
              { title: '버전 정보', icon: 'ℹ️', desc: 'v1.0.0', badge: '최신 버전', href: '/settings/version' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                      {item.badge && (
                        <span className="badge badge-primary text-xs">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
} 