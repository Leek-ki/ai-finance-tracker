"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">개인정보처리방침</h1>
        </div>

        <div className="space-y-6">
          {/* 개인정보처리방침 내용 */}
          <section className="card p-4">
            <div className="prose dark:prose-invert max-w-none">
              <h2>1. 개인정보의 처리 목적</h2>
              <p>
                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ol>
                <li>회원 가입 및 관리</li>
                <li>서비스 제공</li>
                <li>마케팅 및 광고 활용</li>
              </ol>

              <h2>2. 개인정보의 처리 및 보유기간</h2>
              <p>
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>

              <h2>3. 개인정보의 제3자 제공</h2>
              <p>
                회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </p>

              <h2>4. 정보주체의 권리·의무 및 행사방법</h2>
              <p>
                정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
              </p>
              <ol>
                <li>개인정보 열람요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제요구</li>
                <li>처리정지 요구</li>
              </ol>

              <h2>5. 처리하는 개인정보 항목</h2>
              <p>
                회사는 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
              <ol>
                <li>필수항목: 이메일, 비밀번호, 이름</li>
                <li>선택항목: 전화번호, 프로필 이미지</li>
                <li>자동수집항목: 접속 IP, 쿠키, 서비스 이용기록</li>
              </ol>

              <h2>6. 개인정보의 파기</h2>
              <p>
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              </p>
            </div>
          </section>

          {/* 개인정보처리방침 정보 */}
          <section className="card p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>개인정보처리방침 버전: v1.0.0</p>
              <p>시행일자: 2024년 3월 1일</p>
              <p>최종 수정일: 2024년 3월 15일</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 