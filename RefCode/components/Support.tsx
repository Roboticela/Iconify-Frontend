'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaDiscord, FaEnvelope, FaBook, FaQuestionCircle, FaBug } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const supportChannels = [
  {
    icon: FaGithub,
    title: 'GitHub Issues',
    description: 'Report bugs, request features, or ask questions',
    link: 'https://github.com/Roboticela/Restaurant-Management-System/issues',
    color: 'from-gray-700 to-gray-800 dark:from-gray-700 dark:to-gray-800'
  },
  {
    icon: FaDiscord,
    title: 'Community Discord',
    description: 'Join our community for real-time discussions and support',
    link: '#',
    color: 'from-indigo-600 to-indigo-700 dark:from-indigo-600 dark:to-indigo-700'
  },
  {
    icon: FaEnvelope,
    title: 'Email Support',
    description: 'Get direct help from our support team',
    link: 'mailto:support@roboticela.com',
    color: 'from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700'
  },
  {
    icon: FaBook,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    link: 'https://github.com/Roboticela/Restaurant-Management-System/wiki',
    color: 'from-purple-600 to-purple-700 dark:from-purple-600 dark:to-purple-700'
  },
  {
    icon: FaQuestionCircle,
    title: 'FAQ',
    description: 'Find answers to common questions',
    link: '#faq',
    color: 'from-green-600 to-green-700 dark:from-green-600 dark:to-green-700'
  },
  {
    icon: FaBug,
    title: 'Bug Reports',
    description: 'Help us improve by reporting issues',
    link: 'https://github.com/Roboticela/Restaurant-Management-System/issues/new',
    color: 'from-red-600 to-red-700 dark:from-red-600 dark:to-red-700'
  }
];

export default function Support() {
  return (
    <section id="support" className="py-16 md:py-24 px-4 bg-white/30 dark:bg-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get Support & Join Our Community
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            We're here to help. Choose your preferred way to connect with us
          </p>
          <motion.a
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-xl font-semibold transition-colors"
          >
            Contact Us Directly
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {supportChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              target={channel.link.startsWith('http') || channel.link.startsWith('mailto') ? '_blank' : undefined}
              rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={itemAnimation}
              whileHover={{ y: -5 }}
              className={`bg-linear-to-br ${channel.color} rounded-2xl p-6 transition-all duration-300 block`}
            >
              <channel.icon className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">{channel.title}</h3>
              <p className="text-white/90">{channel.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

