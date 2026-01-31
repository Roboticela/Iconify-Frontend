'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const requirements = [
  {
    platform: 'Windows',
    os: 'Windows 10 or later',
    ram: '4 GB RAM minimum (8 GB recommended)',
    storage: '200 MB free disk space',
    processor: '64-bit processor',
    notes: 'Compatible with Windows 10, 11, and Server editions'
  },
  {
    platform: 'Linux',
    os: 'Ubuntu 20.04+ or equivalent',
    ram: '4 GB RAM minimum (8 GB recommended)',
    storage: '200 MB free disk space',
    processor: '64-bit processor',
    notes: 'Works on most modern Linux distributions with GTK 3.0+'
  },
  {
    platform: 'macOS',
    os: 'macOS 10.15 (Catalina) or later',
    ram: '4 GB RAM minimum (8 GB recommended)',
    storage: '200 MB free disk space',
    processor: 'Intel or Apple Silicon (M1/M2)',
    notes: 'Native support for both Intel and Apple Silicon Macs'
  },
  {
    platform: 'iOS',
    os: 'iOS 14.0 or later',
    ram: '2 GB RAM minimum (varies by device)',
    storage: '150 MB free space',
    processor: 'iPhone 6s or later, iPad Air 2 or later',
    notes: 'Compatible with iPhone and iPad. Available on App Store.'
  },
  {
    platform: 'Android',
    os: 'Android 7.0 (Nougat) or later',
    ram: '2 GB RAM minimum (3 GB recommended)',
    storage: '150 MB free space',
    processor: 'ARM64 or x86_64',
    notes: 'Compatible with phones and tablets. Available on Play Store.'
  }
];

export default function SystemRequirements() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white/30 dark:bg-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            System Requirements
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Minimal requirements for optimal performance
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ y: -5 }}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-teal-600 dark:text-teal-400" />
                {req.platform}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-400 mb-1">Operating System</p>
                  <p className="text-slate-900 dark:text-white">{req.os}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-400 mb-1">RAM</p>
                  <p className="text-slate-900 dark:text-white">{req.ram}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-400 mb-1">Storage</p>
                  <p className="text-slate-900 dark:text-white">{req.storage}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-400 mb-1">Processor</p>
                  <p className="text-slate-900 dark:text-white">{req.processor}</p>
                </div>
                <div className="pt-4 border-t border-white/20 dark:border-white/10">
                  <p className="text-sm text-slate-600 dark:text-gray-400 italic">{req.notes}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

