"use client";

import { ArrowTrendingUpIcon, BanknotesIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import AssetDetailModal from '../components/AssetDetailModal';

export default function AssetsPage() {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAssetClick = (asset: any) => {
    setSelectedAsset({
      id: asset.name,
      type: asset.type,
      name: asset.name,
      amount: asset.amount,
      institution: asset.name.split(' ')[0],
      interestRate: parseFloat(asset.interest?.replace('%', '') || '0'),
      monthlyPayment: asset.monthly ? parseInt(asset.monthly.replace(',', '')) : undefined,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-white dark:bg-gray-900">
      <div className="p-6 space-y-6">
        {/* 총 자산 요약 */}
        <section className="card card-hover overflow-hidden">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium">총 자산</h2>
              <div className="flex items-center gap-2">
                <ArrowTrendingUpIcon className="w-4 h-4" />
                <span className="text-sm">+2.8%</span>
              </div>
            </div>
            <p className="text-3xl font-bold">₩45,678,900</p>
            <p className="text-sm opacity-80 mt-1">전월 대비 +₩1,234,567</p>
          </div>
          <div className="px-6 py-4 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
            💡 현재 자산 배분이 적절해 보입니다
          </div>
        </section>

        {/* 자산 구성 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <ChartBarIcon className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">자산 구성</h2>
          </div>
          <div className="space-y-4">
            {[
              { type: '예금/적금', amount: 25000000, percentage: 55, trend: '+1.2%' },
              { type: '투자', amount: 15000000, percentage: 33, trend: '+4.5%' },
              { type: '보험', amount: 5678900, percentage: 12, trend: '+0.3%' },
            ].map((item) => (
              <div
                key={item.type}
                className="card card-hover p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.type}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-2xl font-medium text-gray-900 dark:text-white">
                        ₩{item.amount.toLocaleString()}
                      </p>
                      <span className="text-sm text-green-500">{item.trend}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 자산 상세 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BanknotesIcon className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">자산 상세</h2>
          </div>
          <div className="space-y-4">
            {[
              { name: '신한은행 입출금', amount: 15000000, type: '예금', interest: '0.1%' },
              { name: '토스뱅크 적금', amount: 10000000, type: '적금', interest: '4.5%' },
              { name: '토스증권', amount: 15000000, type: '투자', return: '+12.3%' },
              { name: '삼성생명', amount: 5678900, type: '보험', monthly: '89,000' },
            ].map((item) => (
              <div
                key={item.name}
                className="card card-hover cursor-pointer"
                onClick={() => handleAssetClick(item)}
              >
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="badge badge-primary">{item.type}</span>
                      {item.interest && (
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          금리 {item.interest}
                        </span>
                      )}
                      {item.return && (
                        <span className="text-sm text-green-500">
                          수익률 {item.return}
                        </span>
                      )}
                      {item.monthly && (
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          월 보험료 {item.monthly}원
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    ₩{item.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedAsset && (
        <AssetDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          asset={selectedAsset}
        />
      )}
    </div>
  )
} 