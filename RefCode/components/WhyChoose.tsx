'use client';

import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';

const benefits = [
  {
    title: 'Free & Open Source',
    description: 'Licensed under AGPL-3.0, completely free to use, modify, and distribute. No hidden costs, no subscription fees, no vendor lock-in.',
    delay: 0
  },
  {
    title: 'Privacy-Focused',
    description: 'All data stored locally on your device. Your business data never leaves your computer. No cloud, no tracking, no data collection.',
    delay: 0
  },
  {
    title: 'Fast & Lightweight',
    description: 'Built with Tauri and Rust for maximum performance. Small footprint, fast startup, and efficient resource usage.',
    delay: 0.1
  },
  {
    title: 'Cross-Platform',
    description: 'Works seamlessly on Windows, Linux, and macOS. One codebase, multiple platforms, consistent experience everywhere.',
    delay: 0.1
  }
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <MdCheckCircle className="text-teal-600 dark:text-teal-400" />
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

