'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const features = [
  { name: 'Free & Open Source', us: true, competitors: false },
  { name: 'Offline-First', us: true, competitors: false },
  { name: 'Privacy-Focused (No Cloud)', us: true, competitors: false },
  { name: 'Cross-Platform', us: true, competitors: 'Partial' },
  { name: 'Lightweight & Fast', us: true, competitors: false },
  { name: 'No Subscription Fees', us: true, competitors: false },
  { name: 'Local Data Storage', us: true, competitors: false },
  { name: 'Customizable', us: true, competitors: 'Limited' },
  { name: 'Receipt Generation', us: true, competitors: true },
  { name: 'Analytics Dashboard', us: true, competitors: true }
];

export default function Comparison() {
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
            Why Choose Us Over Competitors?
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we compare to traditional POS systems
          </p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20 dark:border-white/10">
                  <th className="px-6 py-4 text-left text-slate-900 dark:text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-teal-600 dark:text-teal-400 font-semibold">Our System</th>
                  <th className="px-6 py-4 text-center text-slate-600 dark:text-gray-400 font-semibold">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    variants={itemAnimation}
                    className="border-b border-white/10 dark:border-white/5 hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.us ? (
                        <FaCheck className="text-green-600 dark:text-green-400 mx-auto text-xl" />
                      ) : (
                        <FaTimes className="text-red-600 dark:text-red-400 mx-auto text-xl" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.competitors === true ? (
                        <FaCheck className="text-green-600 dark:text-green-400 mx-auto text-xl" />
                      ) : feature.competitors === false ? (
                        <FaTimes className="text-red-600 dark:text-red-400 mx-auto text-xl" />
                      ) : (
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium">{feature.competitors}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

