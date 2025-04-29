export default function Home() {
  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-white dark:bg-gray-900">
      <div className="md:grid md:grid-cols-2 md:gap-6 p-6">
        {/* 자산 요약 카드 */}
        <section className="bg-blue-500 p-6 text-white rounded-2xl md:col-span-2">
          <h2 className="text-lg font-medium mb-2">총 자산</h2>
          <p className="text-3xl font-bold">₩12,345,678</p>
          <div className="mt-4 flex gap-4">
            <div>
              <p className="text-sm text-white/80">이번 달 수입</p>
              <p className="text-lg font-medium">₩3,500,000</p>
            </div>
            <div>
              <p className="text-sm text-white/80">이번 달 지출</p>
              <p className="text-lg font-medium">₩2,100,000</p>
            </div>
          </div>
        </section>

        {/* AI 인사이트 */}
        <section className="mt-6 md:mt-0">
          <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">AI 인사이트</h2>
          <div className="card card-hover">
            <p className="p-4 text-gray-700 dark:text-gray-300">
              이번 달 카페 지출이 지난 달 대비 30% 증가했습니다. 
              커피 한 잔의 가격이 평균 1,000원 상승했네요.
            </p>
          </div>
        </section>

        {/* 최근 거래 내역 */}
        <section className="mt-6 md:mt-0">
          <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">최근 거래</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card card-hover"
              >
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">스타벅스</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      카페/간식
                    </p>
                  </div>
                  <p className="font-medium text-red-500">-₩6,500</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
