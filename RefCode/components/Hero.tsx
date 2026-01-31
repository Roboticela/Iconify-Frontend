'use client';

import { motion } from 'framer-motion';
import { FaUtensils, FaDownload, FaGithub } from 'react-icons/fa';
import { FaRocket, FaLock, FaShieldAlt, FaMobileAlt, FaCode, FaHeart } from 'react-icons/fa';
import { containerAnimation, itemAnimation, iconAnimation } from './animations';

const benefits = [
  { icon: FaRocket, text: 'Fast & Lightweight' },
  { icon: FaLock, text: 'Privacy-Focused' },
  { icon: FaShieldAlt, text: 'Secure & Reliable' },
  { icon: FaMobileAlt, text: 'Cross-Platform' },
  { icon: FaCode, text: 'Open Source' },
  { icon: FaHeart, text: 'Free Forever' }
];

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={iconAnimation.initial}
            animate={iconAnimation.animate}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full p-6 w-fit mx-auto mb-6"
          >
            <FaUtensils className="w-16 h-16 md:w-20 md:h-20 text-teal-500 dark:text-teal-400" />
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text 
              bg-linear-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 py-2 mb-4 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Restaurant Management System
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A modern, powerful, and open-source desktop application for managing restaurant operations
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#downloads"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-xl font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2"
            >
              <FaDownload className="text-lg sm:text-xl" />
              Download Now
            </motion.a>
            <motion.a
              href="https://github.com/Roboticela/Restaurant-Management-System"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/70 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-sm rounded-xl font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 text-slate-900 dark:text-white"
            >
              <FaGithub className="text-lg sm:text-xl" />
              View on GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center transition-colors"
            >
              <benefit.icon className="w-8 h-8 mx-auto mb-2 text-teal-600 dark:text-teal-400" />
              <p className="text-sm text-slate-700 dark:text-gray-300 font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

