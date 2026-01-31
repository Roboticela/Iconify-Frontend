'use client';

import { motion } from 'framer-motion';
import { containerAnimation, itemAnimation } from './animations';

const technologies = [
  { name: 'Tauri', desc: 'Desktop Framework' },
  { name: 'React', desc: 'UI Library' },
  { name: 'TypeScript', desc: 'Type Safety' },
  { name: 'Rust', desc: 'Backend' },
  { name: 'SQLite', desc: 'Database' },
  { name: 'Tailwind CSS', desc: 'Styling' }
];

export default function TechnologyStack() {
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
            Built with Modern Technology
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powered by industry-leading tools and frameworks
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transition-colors"
            >
              <p className="text-teal-600 dark:text-teal-400 font-semibold text-lg mb-1">{tech.name}</p>
              <p className="text-slate-600 dark:text-gray-400 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

