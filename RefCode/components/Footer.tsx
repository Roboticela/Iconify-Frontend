'use client';

import { FaUtensils } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-white/30 dark:bg-white/5 border-t border-white/20 dark:border-white/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <FaUtensils className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500 dark:text-teal-400 shrink-0" />
            <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white text-center md:text-left">Restaurant Management System</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="/privacy" 
              className="text-slate-600 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-slate-600 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer"
            >
              Terms of Use
            </a>
            <a 
              href="https://github.com/Roboticela/Restaurant-Management-System" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Roboticela. All rights reserved.</p>
          <p className="mt-2 text-sm">Licensed under AGPL-3.0</p>
        </div>
      </div>
    </footer>
  );
}

