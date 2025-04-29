"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, ChartBarIcon, WalletIcon, CogIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, ChartBarIcon as ChartBarIconSolid, WalletIcon as WalletIconSolid, CogIcon as CogIconSolid } from '@heroicons/react/24/solid';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      label: '홈',
      icon: HomeIcon,
      activeIcon: HomeIconSolid,
      isActive: pathname === '/'
    },
    {
      href: '/ledger',
      label: '가계부',
      icon: ChartBarIcon,
      activeIcon: ChartBarIconSolid,
      isActive: pathname === '/ledger'
    },
    {
      href: '/assets',
      label: '자산',
      icon: WalletIcon,
      activeIcon: WalletIconSolid,
      isActive: pathname === '/assets'
    },
    {
      href: '/settings',
      label: '설정',
      icon: CogIcon,
      activeIcon: CogIconSolid,
      isActive: pathname === '/settings'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-toss-gray-100 dark:border-gray-700 z-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.isActive ? item.activeIcon : item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  item.isActive
                    ? 'text-[var(--theme-500)]'
                    : 'text-toss-gray-500 dark:text-gray-400 hover:text-[var(--theme-500)] dark:hover:text-[var(--theme-500)]'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="mt-1 text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 