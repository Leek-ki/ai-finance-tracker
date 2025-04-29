"use client";

import { useState } from 'react';
import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import AddTransactionModal from '../components/AddTransactionModal';
import TransactionDetailModal from '../components/TransactionDetailModal';

export default function LedgerPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [transactions, setTransactions] = useState([
    { title: '스타벅스', date: '2024/02/21', amount: -6500, category: '카페/간식' },
    { title: '3월 월급', date: '2024/02/20', amount: 3000000, category: '급여' },
    { title: '교통비', date: '2024/02/19', amount: -1500, category: '교통' },
  ]);

  const handleAddTransaction = (newTransaction: {
    type: 'income' | 'expense';
    title: string;
    amount: number;
    category: string;
    date: string;
  }) => {
    setTransactions([
      {
        title: newTransaction.title,
        date: newTransaction.date,
        amount: newTransaction.type === 'income' ? newTransaction.amount : -newTransaction.amount,
        category: newTransaction.category,
      },
      ...transactions,
    ]);
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0 bg-white dark:bg-gray-900">
      <div className="p-6 space-y-6">
        {/* 월별 요약 */}
        <section className="card overflow-hidden">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium">2024년 4월</h2>
              <button className="px-4 py-1 text-sm bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                월 선택
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-1 mb-1 text-white/80">
                  <ArrowUpIcon className="w-4 h-4" />
                  <span>수입</span>
                </div>
                <p className="text-2xl font-bold">₩3,500,000</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1 text-white/80">
                  <ArrowDownIcon className="w-4 h-4" />
                  <span>지출</span>
                </div>
                <p className="text-2xl font-bold">₩2,100,000</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
            💡 이번 달은 저축 목표를 달성했어요!
          </div>
        </section>

        {/* 최근 거래 */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">최근 거래</h2>
            <button 
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              onClick={() => setIsAddModalOpen(true)}
            >
              <PlusIcon className="w-4 h-4 mr-1" />
              추가
            </button>
          </div>
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <div 
                key={index} 
                className="card card-hover cursor-pointer"
                onClick={() => setSelectedTransaction(transaction)}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{transaction.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{transaction.category}</span>
                      </div>
                    </div>
                    <p className={`text-lg font-medium ${
                      transaction.amount < 0 ? 'text-red-500' : 'text-green-500'
                    }`}>
                      {transaction.amount < 0 ? '-' : '+'}₩{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AddTransactionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTransaction}
      />

      <TransactionDetailModal
        isOpen={selectedTransaction !== null}
        onClose={() => setSelectedTransaction(null)}
        transaction={selectedTransaction}
      />
    </div>
  )
} 