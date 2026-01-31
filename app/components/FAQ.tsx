'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What platforms does Iconify support?',
    answer: 'Iconify supports 25+ platforms including iOS, Android, Web/PWA, React Native, Flutter, Electron, Tauri, Next.js, React, Angular, Vue, Unity, Godot, and many more. Each platform has its own specific icon requirements that Iconify handles automatically.'
  },
  {
    question: 'Is my image data secure?',
    answer: 'Yes! All image processing happens locally in your browser or desktop app. Your images never leave your device, ensuring complete privacy and security.'
  },
  {
    question: 'What image formats are supported?',
    answer: 'Iconify supports PNG, JPG, JPEG, SVG, WebP, and GIF formats. For best results, we recommend using PNG or SVG files with transparent backgrounds.'
  },
  {
    question: 'Can I customize the generated icons?',
    answer: 'Absolutely! You can adjust the scale, position (X and Y), background color, and border roundness. All changes are previewed in real-time across all device types.'
  },
  {
    question: 'Is Iconify free to use?',
    answer: 'Yes, Iconify is completely free and open source under the AGPL-3.0 license. You can use it for personal and commercial projects without any restrictions.'
  },
  {
    question: 'Do I need to install anything?',
    answer: 'No! You can use the web version directly in your browser. However, we also offer desktop apps for Windows, macOS, and Linux if you prefer a native experience.'
  },
  {
    question: 'How do I use the generated icons?',
    answer: 'After generating your icons, download the ZIP file which contains all icon sizes organized by platform. Simply extract and copy the icons to your project according to your platform\'s requirements.'
  },
  {
    question: 'Can I contribute to the project?',
    answer: 'Yes! Iconify is open source and we welcome contributions. Visit our GitHub repository to report issues, suggest features, or submit pull requests.'
  }
];

function FAQItem({ question, answer, index }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/40 backdrop-blur-md rounded-xl border border-border/40 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-foreground/70 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-foreground/70">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to know about Iconify
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
