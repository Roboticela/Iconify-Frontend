'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaRocket } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const roadmapItems = [
  {
    status: 'completed',
    quarter: 'Q1 2024',
    title: 'Desktop Release',
    features: ['Windows, Linux, macOS support', 'Core POS functionality', 'Product management', 'Basic analytics']
  },
  {
    status: 'completed',
    quarter: 'Q2 2024',
    title: 'Enhanced Features',
    features: ['Advanced analytics', 'Receipt customization', 'Multi-currency support']
  },
  {
    status: 'completed',
    quarter: 'Q3 2024',
    title: 'iOS Release',
    features: ['iOS application', 'Full feature parity', 'App Store ready']
  },
  {
    status: 'completed',
    quarter: 'Q3 2024',
    title: 'Android Release',
    features: ['Android application', 'Full feature parity', 'Play Store ready']
  },
  {
    status: 'in-progress',
    quarter: 'Q3 2024',
    title: 'Cloud Sync',
    features: ['Optional cloud sync', 'Cross-device data sync', 'Backup service']
  },
  {
    status: 'planned',
    quarter: 'Q4 2024',
    title: 'Advanced Features',
    features: ['Multi-location support', 'Staff management', 'Advanced reporting']
  },
  {
    status: 'planned',
    quarter: 'Q1 2025',
    title: 'Integration Hub',
    features: ['Payment gateway integration', 'Accounting software sync', 'API for third-party tools']
  }
];

export default function Roadmap() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-green-500 dark:text-green-400" />;
      case 'in-progress':
        return <FaClock className="text-yellow-500 dark:text-yellow-400" />;
      case 'planned':
        return <FaRocket className="text-blue-500 dark:text-blue-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-400 to-green-500 dark:from-green-500 dark:to-green-600';
      case 'in-progress':
        return 'from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-yellow-600';
      case 'planned':
        return 'from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600';
      default:
        return '';
    }
  };

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
            Product Roadmap
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what's coming next and what we're working on
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 dark:from-green-600 dark:via-yellow-600 dark:to-blue-600 transform -translate-x-1/2"></div>

          <motion.div
            className="space-y-8"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-linear-to-br ${getStatusColor(item.status)} rounded-full flex items-center justify-center text-white text-xl md:text-2xl`}>
                  {getStatusIcon(item.status)}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-slate-600 dark:text-gray-400">{item.quarter}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : item.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {item.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-slate-600 dark:text-gray-300">
                        <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

