'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaStar } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About the Project
          </h2>
        </motion.div>

        <motion.div
          className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            Restaurant Management System is a comprehensive, cross-platform desktop application designed to 
            streamline restaurant operations. Built with modern technologies like Tauri, React, and Rust, 
            it provides restaurant owners and managers with powerful tools for managing products, processing 
            sales, analyzing business metrics, and maintaining transaction records—all in a beautiful, 
            intuitive interface.
          </p>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            Whether you're running a small café or a large restaurant, this application is built to scale 
            with your needs while maintaining excellent performance and security. All data is stored locally 
            on your device, ensuring complete privacy and offline functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a
              href="https://github.com/Roboticela/Restaurant-Management-System"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                text-slate-900 dark:text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <FaGithub className="text-xl" />
              View on GitHub
            </motion.a>
            <motion.a
              href="https://github.com/Roboticela/Restaurant-Management-System/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-500 
                text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <FaStar className="text-xl" />
              Star on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

