"use client";

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface AssetDetailModalProps {
  isOpen: boolean
  onClose: () => void
  asset: {
    id: string
    type: string
    name: string
    amount: number
    institution: string
    interestRate?: number
    monthlyPayment?: number
  }
}

export default function AssetDetailModal({ isOpen, onClose, asset }: AssetDetailModalProps) {
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
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    자산 상세 정보
                  </Dialog.Title>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">자산명</h4>
                    <p className="mt-1 text-base text-gray-900 dark:text-white">{asset.name}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">금융기관</h4>
                    <p className="mt-1 text-base text-gray-900 dark:text-white">{asset.institution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">자산 유형</h4>
                    <div className="mt-1">
                      <span className="badge badge-primary">{asset.type}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">금액</h4>
                    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                      ₩{asset.amount.toLocaleString()}
                    </p>
                  </div>

                  {asset.interestRate !== undefined && asset.interestRate > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">금리</h4>
                      <p className="mt-1 text-base text-gray-900 dark:text-white">
                        {asset.interestRate}%
                      </p>
                    </div>
                  )}

                  {asset.monthlyPayment && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">월 납입금</h4>
                      <p className="mt-1 text-base text-gray-900 dark:text-white">
                        ₩{asset.monthlyPayment.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="btn btn-primary w-full"
                    onClick={onClose}
                  >
                    닫기
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 