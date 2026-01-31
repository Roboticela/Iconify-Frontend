'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { itemAnimation } from './animations';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ y: -5 }}
      className={`flex flex-col p-6 bg-linear-to-br ${color} text-white rounded-2xl transition-all duration-300 h-full`}
    >
      <Icon className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </motion.div>
  );
}

