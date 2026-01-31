'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: 'Privacy First',
    description: 'All processing happens locally in your browser or desktop app. Your images never leave your device, ensuring complete privacy and security.',
    delay: 0
  },
  {
    title: 'Time Saver',
    description: 'Generate hundreds of icons in seconds instead of hours. No more manual resizing, renaming, or organizing icon files.',
    delay: 0
  },
  {
    title: 'Always Accurate',
    description: 'Automatically generates icons with exact dimensions required by each platform. No guesswork, no mistakes.',
    delay: 0.1
  },
  {
    title: 'Free Forever',
    description: 'Completely free and open source under AGPL-3.0. No subscriptions, no hidden costs, no feature limitations.',
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Iconify?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            The smart choice for developers and designers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card/40 backdrop-blur-md rounded-xl p-8 border border-border/40"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Check className="text-primary w-6 h-6" />
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
