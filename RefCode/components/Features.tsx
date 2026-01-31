'use client';

import { motion } from 'framer-motion';
import { FaClipboardList, FaChartBar, FaHistory, FaCog, FaDatabase } from 'react-icons/fa';
import { MdPointOfSale } from 'react-icons/md';
import { containerAnimation } from './animations';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: FaClipboardList,
    title: 'Product Management',
    description: 'Add, edit, and delete products with ease. Set prices and units with real-time inventory tracking.',
    color: 'from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600'
  },
  {
    icon: MdPointOfSale,
    title: 'Point of Sale',
    description: 'Intuitive shopping cart interface with quick product selection and instant transaction processing.',
    color: 'from-green-400 to-green-500 dark:from-green-500 dark:to-green-600'
  },
  {
    icon: FaChartBar,
    title: 'Analytics Dashboard',
    description: 'Visual insights with interactive charts, revenue trends, and top-selling products analysis.',
    color: 'from-purple-400 to-purple-500 dark:from-purple-500 dark:to-purple-600'
  },
  {
    icon: FaHistory,
    title: 'Transaction History',
    description: 'Complete transaction log with advanced filtering, product statistics, and export capabilities.',
    color: 'from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600'
  },
  {
    icon: FaCog,
    title: 'Settings & Configuration',
    description: 'Customize restaurant information, logo, currency, business hours, tax rates, and more.',
    color: 'from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600'
  },
  {
    icon: FaDatabase,
    title: 'Offline-First',
    description: 'All data stored locally with SQLite. Works completely offline with no cloud dependency.',
    color: 'from-teal-400 to-teal-500 dark:from-teal-500 dark:to-teal-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage your restaurant operations efficiently
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

