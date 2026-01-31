'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaCheckCircle, FaRocket, FaGlobe, FaSync, FaShieldAlt } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const features = [
  {
    icon: FaGlobe,
    title: 'Access Anywhere',
    description: 'Use from any device with a web browser - no installation needed'
  },
  {
    icon: FaSync,
    title: 'Auto Sync',
    description: 'Automatic backups and real-time synchronization across devices'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure Cloud',
    description: 'Enterprise-grade security with encrypted data storage'
  }
];

export default function OnlineVersion() {
  const handleRedirect = () => {
    window.open('https://rms.roboticela.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-linear-to-br from-teal-500 via-purple-600 to-teal-600 dark:from-teal-600 dark:via-purple-700 dark:to-teal-700 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-white/20 rounded-full p-6 w-fit mx-auto mb-6"
          >
            <FaCloud className="w-16 h-16 md:w-20 md:h-20 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Try Our Online Version
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Access Restaurant Management System from anywhere, anytime. No installation required. 
            All the power of the desktop app, available in your browser.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits List */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose the Online Version?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-white shrink-0 mt-1" />
                <span className="text-white/90">Access from any device - desktop, tablet, or mobile</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-white shrink-0 mt-1" />
                <span className="text-white/90">No installation or updates required</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-white shrink-0 mt-1" />
                <span className="text-white/90">Automatic cloud backups and sync</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-white shrink-0 mt-1" />
                <span className="text-white/90">Multi-user collaboration support</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-white shrink-0 mt-1" />
                <span className="text-white/90">Always up-to-date with latest features</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-white shrink-0 mt-1" />
                <span className="text-white/90">Enterprise-grade security and reliability</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={handleRedirect}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-teal-600 hover:bg-white/90 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
          >
            <FaRocket className="text-xl" />
            Try Online Version Now
          </motion.button>
          <p className="text-white/80 mt-4 text-sm">
            Free to try • No credit card required • Instant access
          </p>
        </motion.div>
      </div>
    </section>
  );
}

