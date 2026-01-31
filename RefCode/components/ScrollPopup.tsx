'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTimes, FaCloud, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before in this session
    const shownBefore = sessionStorage.getItem('rms-popup-shown');
    if (shownBefore) {
      setHasShown(true);
      return;
    }

    const handleScroll = () => {
      // Show popup when user scrolls 60% of the page
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 60 && !hasShown && !shownBefore) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('rms-popup-shown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleRedirect = () => {
    window.open('https://rms.roboticela.com', '_blank', 'noopener,noreferrer');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 backdrop-blur-sm"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] sm:w-full max-w-lg"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-linear-to-br from-teal-500 to-purple-600 rounded-full p-4">
                  <FaCloud className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Try Our Online Version!
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-4">
                  Access Restaurant Management System from anywhere, anytime. No installation required.
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6 text-left">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                    <FaCheckCircle className="text-teal-600 dark:text-teal-400 shrink-0" />
                    <span className="text-sm sm:text-base">Access from any device with a web browser</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                    <FaCheckCircle className="text-teal-600 dark:text-teal-400 shrink-0" />
                    <span className="text-sm sm:text-base">No installation or download required</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                    <FaCheckCircle className="text-teal-600 dark:text-teal-400 shrink-0" />
                    <span className="text-sm sm:text-base">All features available in the cloud</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                    <FaCheckCircle className="text-teal-600 dark:text-teal-400 shrink-0" />
                    <span className="text-sm sm:text-base">Automatic backups and sync</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleRedirect}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-linear-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaRocket className="text-lg" />
                  Try Online Version
                </motion.button>
                <motion.button
                  onClick={handleClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-slate-900 dark:text-white rounded-xl font-semibold transition-colors"
                >
                  Maybe Later
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

