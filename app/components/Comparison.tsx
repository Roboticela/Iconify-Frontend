'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    feature: 'Supported Platforms',
    iconify: '25+ platforms',
    others: '5-10 platforms',
    iconifyBetter: true
  },
  {
    feature: 'Privacy',
    iconify: 'All local processing',
    others: 'Upload to servers',
    iconifyBetter: true
  },
  {
    feature: 'Cost',
    iconify: 'Free forever',
    others: '$10-30/month',
    iconifyBetter: true
  },
  {
    feature: 'Customization',
    iconify: 'Full control',
    others: 'Limited options',
    iconifyBetter: true
  },
  {
    feature: 'Desktop App',
    iconify: 'Yes (Windows, Mac, Linux)',
    others: 'Web only',
    iconifyBetter: true
  },
  {
    feature: 'Open Source',
    iconify: 'Yes (AGPL-3.0)',
    others: 'Closed source',
    iconifyBetter: true
  }
];

export default function Comparison() {
  return (
    <section className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How We Compare
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See why developers choose Iconify over other icon generators
          </p>
        </motion.div>

        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-xl overflow-hidden border border-border/40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-4 sm:p-6 bg-accent/30 border-b border-border/40">
            <div className="font-bold text-foreground">Feature</div>
            <div className="font-bold text-primary text-center">Iconify</div>
            <div className="font-bold text-foreground/70 text-center">Others</div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 gap-4 p-4 sm:p-6 border-b border-border/20 last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-foreground font-medium">{item.feature}</div>
              <div className="text-center">
                <span className="text-primary font-semibold">{item.iconify}</span>
              </div>
              <div className="text-center">
                <span className="text-foreground/60">{item.others}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
