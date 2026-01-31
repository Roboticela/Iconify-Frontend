'use client';

import { motion } from 'framer-motion';
import { Upload, Sliders, Eye, Download, Check } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Image',
    description: 'Drag and drop or click to select your logo or icon image. Supports PNG, JPG, SVG, and more.',
    color: 'text-blue-500'
  },
  {
    icon: Sliders,
    title: 'Customize Settings',
    description: 'Adjust scale, position, background color, and border roundness. Choose your target platform.',
    color: 'text-purple-500'
  },
  {
    icon: Eye,
    title: 'Preview Icons',
    description: 'See real-time previews of all icon sizes across different device types before downloading.',
    color: 'text-orange-500'
  },
  {
    icon: Download,
    title: 'Download & Use',
    description: 'Download all icons as a ZIP file with proper naming and folder structure. Ready to use!',
    color: 'text-green-500'
  }
];

export default function HowItWorks() {
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
            How It Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Generate perfect app icons in just 4 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-background rounded-full flex items-center justify-center font-bold text-xl z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-card/40 backdrop-blur-md rounded-xl p-6 pt-8 border border-border/40 h-full">
                <step.icon className={`w-12 h-12 ${step.color} mb-4`} />
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>

              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg className="w-8 h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
