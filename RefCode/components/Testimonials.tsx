'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Restaurant Owner',
    business: 'Bella Vista Restaurant',
    content: 'This system has completely transformed how we manage our restaurant. The analytics dashboard gives us insights we never had before.',
    rating: 5,
    image: '👩‍🍳'
  },
  {
    name: 'Michael Chen',
    role: 'Café Manager',
    business: 'Morning Brew Café',
    content: 'Easy to use, fast, and completely offline. Perfect for our busy café. The point-of-sale system is intuitive and our staff learned it quickly.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Pizzeria Owner',
    business: 'Tony\'s Pizzeria',
    content: 'The product management features are excellent. We can track inventory in real-time and the transaction history helps us understand our sales patterns.',
    rating: 5,
    image: '👩‍🍕'
  },
  {
    name: 'David Thompson',
    role: 'Restaurant Manager',
    business: 'The Grand Dining',
    content: 'Privacy-focused and secure. All our data stays local, which is exactly what we needed. The offline capability is a game-changer.',
    rating: 5,
    image: '👨‍🍽️'
  }
];

export default function Testimonials() {
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
            What Our Users Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real feedback from restaurant owners who trust our system
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ y: -5 }}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 dark:text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

