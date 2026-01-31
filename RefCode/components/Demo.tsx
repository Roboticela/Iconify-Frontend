'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const demoImages = [
  {
    src: '/Demo/Home.png',
    alt: 'Home Dashboard',
    title: 'Home Dashboard'
  },
  {
    src: '/Demo/Sale.png',
    alt: 'Point of Sale',
    title: 'Point of Sale'
  },
  {
    src: '/Demo/ProductManager.png',
    alt: 'Product Management',
    title: 'Product Management'
  },
  {
    src: '/Demo/Analytics.png',
    alt: 'Analytics Dashboard',
    title: 'Analytics Dashboard'
  },
  {
    src: '/Demo/TransactionHistory.png',
    alt: 'Transaction History',
    title: 'Transaction History'
  }
];

export default function Demo() {
  const [selectedImage, setSelectedImage] = useState<typeof demoImages[0] | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleImageClick = (image: typeof demoImages[0]) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="demo" className="py-16 md:py-24 px-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore the interface and features of our restaurant management system
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {demoImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center">
                  {image.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/70 dark:bg-black/80 z-50 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 relative">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-10"
                  aria-label="Close"
                >
                  <FaTimes className="w-6 h-6" />
                </button>

                {/* Image Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-4 pr-12">
                  {selectedImage.title}
                </h3>

                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

