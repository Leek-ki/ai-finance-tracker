"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="p-4">
        <div className="flex items-center mb-4">
          <Link href="/settings" className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          </Link>
          <h1 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">이용약관</h1>
        </div>

        <div className="space-y-6">
          {/* 약관 내용 */}
          <section className="card p-4">
            <div className="prose dark:prose-invert max-w-none">
              <h2>제 1 장 총칙</h2>
              <h3>제 1 조 (목적)</h3>
              <p>
                이 약관은 AI 가계부 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>

              <h3>제 2 조 (용어의 정의)</h3>
              <p>
                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              </p>
              <ol>
                <li>회원: 서비스에 가입하여 이용하는 개인 또는 법인</li>
                <li>아이디(ID): 회원 식별과 서비스 이용을 위한 문자와 숫자의 조합</li>
                <li>비밀번호: 회원이 설정한 아이디와 일치된 회원임을 확인하고 회원의 개인정보를 보호하기 위한 문자와 숫자의 조합</li>
              </ol>

              <h2>제 2 장 서비스 이용</h2>
              <h3>제 3 조 (서비스의 제공)</h3>
              <p>
                회사는 다음과 같은 서비스를 제공합니다.
              </p>
              <ol>
                <li>가계부 작성 및 관리 서비스</li>
                <li>지출/수입 분석 서비스</li>
                <li>예산 설정 및 관리 서비스</li>
                <li>금융 데이터 연동 서비스</li>
                <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
              </ol>

              <h3>제 4 조 (서비스의 중단)</h3>
              <p>
                회사는 다음과 같은 경우에 서비스 제공을 중단할 수 있습니다.
              </p>
              <ol>
                <li>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
                <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
                <li>기타 불가항력적 사유가 있는 경우</li>
              </ol>

              <h2>제 3 장 의무 및 책임</h2>
              <h3>제 5 조 (회사의 의무)</h3>
              <p>
                회사는 서비스 제공과 관련하여 알고 있는 회원의 개인정보를 본인의 승낙 없이 제3자에게 제공하지 않습니다.
              </p>

              <h3>제 6 조 (회원의 의무)</h3>
              <p>
                회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.
              </p>
              <ol>
                <li>다른 회원의 아이디를 부정 사용하는 행위</li>
                <li>서비스에서 얻은 정보를 회사의 사전승낙 없이 복제하거나 출판 및 방송 등에 사용하거나 제3자에게 제공하는 행위</li>
                <li>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
                <li>공공질서 및 미풍양속에 위반되는 내용을 유포하는 행위</li>
                <li>범죄와 결부된다고 객관적으로 판단되는 행위</li>
                <li>기타 관계법령에 위반되는 행위</li>
              </ol>
            </div>
          </section>

          {/* 약관 동의 일자 */}
          <section className="card p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>약관 버전: v1.0.0</p>
              <p>시행일자: 2024년 3월 1일</p>
              <p>동의일자: 2024년 3월 15일</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 