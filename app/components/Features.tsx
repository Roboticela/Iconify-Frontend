'use client';

import { motion } from 'framer-motion';
import { Image, Sliders, Download, Eye, Smartphone, Monitor, Palette, Grid3x3, FileCheck } from 'lucide-react';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const features = [
  {
    icon: Image,
    title: 'Easy Image Upload',
    description: 'Drag and drop or select your image. Support for PNG, JPG, SVG, and other common formats.',
    color: 'text-blue-500'
  },
  {
    icon: Grid3x3,
    title: '25+ Platform Support',
    description: 'Generate icons for iOS, Android, Web, PWA, Electron, React Native, Flutter, and many more platforms.',
    color: 'text-green-500'
  },
  {
    icon: FileCheck,
    title: 'Platform-Specific Naming',
    description: 'Automatically generates files with exact names and folder structure required by each platform. No manual renaming needed!',
    color: 'text-cyan-500'
  },
  {
    icon: Sliders,
    title: 'Precise Customization',
    description: 'Fine-tune scale, position, background color, and border roundness with intuitive controls.',
    color: 'text-purple-500'
  },
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See all icon sizes in real-time across multiple device types before downloading.',
    color: 'text-orange-500'
  },
  {
    icon: Palette,
    title: 'Multiple Themes',
    description: 'Choose from 8 beautiful themes including Light, Dark, Navy, Sunset, Ocean, Forest, Purple, and Midnight.',
    color: 'text-pink-500'
  },
  {
    icon: Download,
    title: 'Instant Download',
    description: 'Download all icons as a ZIP file with proper naming and folder structure ready for your project.',
    color: 'text-teal-500'
  }
];

function FeatureCard({ icon: Icon, title, description, color }: any) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ scale: 1.02 }}
      className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300"
    >
      <div className={`${color} mb-4`}>
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
}

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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to create perfect app icons for any platform
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
