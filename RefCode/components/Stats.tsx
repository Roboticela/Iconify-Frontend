'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaDownload as FaDownloadIcon, FaStar, FaCodeBranch } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const stats = [
  {
    icon: FaDownloadIcon,
    value: '10K+',
    label: 'Downloads',
    color: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
  },
  {
    icon: FaUsers,
    value: '5K+',
    label: 'Active Users',
    color: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700'
  },
  {
    icon: FaStar,
    value: '4.8',
    label: 'Rating',
    color: 'from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700'
  },
  {
    icon: FaCodeBranch,
    value: '500+',
    label: 'Contributors',
    color: 'from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700'
  }
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white/30 dark:bg-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join the growing community of restaurant owners using our system
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className={`bg-linear-to-br ${stat.color} text-white rounded-2xl p-8 text-center transition-all duration-300`}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <p className="text-white/90 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

