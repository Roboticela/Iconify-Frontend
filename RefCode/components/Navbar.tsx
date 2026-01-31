'use client';

import { useState } from 'react';
import { FaUtensils, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#downloads', label: 'Download' },
    { href: '#faq', label: 'FAQ' },
    { href: '#support', label: 'Support' },
    { href: '/contact', label: 'Contact' },
    { href: '#about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-white/10 backdrop-blur-sm border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 flex items-center justify-between gap-2 overflow-x-hidden">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 flex-1">
          <FaUtensils className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-teal-500 dark:text-teal-400 shrink-0" />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-slate-900 dark:text-white truncate">
            Restaurant Management System
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 md:gap-6 shrink-0">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer text-sm md:text-base"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://github.com/Roboticela/Restaurant-Management-System" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl transition-colors"
          >
            <FaGithub className="text-lg" />
            <span className="text-slate-900 dark:text-white font-semibold">GitHub</span>
          </a>
        </div>

        {/* Right side: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Toggle - Mobile/Tablet */}
          <div className="lg:hidden shrink-0">
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-slate-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>

          {/* Desktop Theme Toggle */}
          <div className="hidden lg:block shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 z-30 lg:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed top-[73px] left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-white/20 dark:border-white/10 z-40"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-slate-700 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all duration-200 cursor-pointer text-base"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://github.com/Roboticela/Restaurant-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span className="text-slate-900 dark:text-white font-semibold">GitHub</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

