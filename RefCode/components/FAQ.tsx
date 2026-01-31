'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Is the application completely free?',
    answer: 'Yes, Restaurant Management System is completely free and open-source. Licensed under AGPL-3.0, you can use, modify, and distribute it without any cost or subscription fees.'
  },
  {
    question: 'Does it work offline?',
    answer: 'Absolutely! The application is designed to work completely offline. All data is stored locally on your device using SQLite, so you don\'t need an internet connection to use it.'
  },
  {
    question: 'What platforms are supported?',
    answer: 'The application is cross-platform and works on Windows, Linux, and macOS. Download the appropriate version for your operating system from the Downloads section.'
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Yes, your data is completely private and secure. All information is stored locally on your device and never leaves your computer. There\'s no cloud storage, no data collection, and no tracking.'
  },
  {
    question: 'Can I customize the system?',
    answer: 'Yes! Since it\'s open-source, you can customize it to fit your needs. You can also configure restaurant information, logo, currency, business hours, tax rates, and receipt settings in the Settings page.'
  },
  {
    question: 'What features are included?',
    answer: 'The system includes product management, point of sale, analytics dashboard, transaction history, settings configuration, receipt generation, and more. Check the Features section for complete details.'
  },
  {
    question: 'How do I get support?',
    answer: 'You can get support through our GitHub repository by opening an issue, or use the built-in Support page in the application to contact us directly. The community is also active and helpful.'
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, you can export your database for backup purposes through the Settings page. This allows you to create backups and restore your data if needed.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Restaurant Management System
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/80 dark:hover:bg-white/20 transition-colors"
              >
                <span className="font-semibold text-slate-900 dark:text-white text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-teal-600 dark:text-teal-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

