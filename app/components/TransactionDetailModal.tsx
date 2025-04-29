"use client";

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

interface TransactionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: {
    title: string;
    date: string;
    amount: number;
    category: string;
  } | null;
}

export default function TransactionDetailModal({ isOpen, onClose, transaction }: TransactionDetailModalProps) {
  if (!transaction) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    거래 상세
                  </Dialog.Title>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <PencilIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <TrashIcon className="w-5 h-5 text-red-500" />
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={onClose}
                    >
                      <XMarkIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">거래명</h4>
                    <p className="mt-1 text-base text-gray-900 dark:text-white">{transaction.title}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">날짜</h4>
                    <p className="mt-1 text-base text-gray-900 dark:text-white">{transaction.date}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">금액</h4>
                    <p className={`mt-1 text-lg font-medium ${
                      transaction.amount < 0 ? 'text-red-500' : 'text-green-500'
                    }`}>
                      {transaction.amount < 0 ? '-' : '+'}
                      ₩{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">카테고리</h4>
                    <div className="mt-1">
                      <span className="badge badge-primary">{transaction.category}</span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 