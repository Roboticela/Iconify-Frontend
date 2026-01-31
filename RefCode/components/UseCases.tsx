'use client';

import { motion } from 'framer-motion';
import { FaUtensils, FaCoffee, FaPizzaSlice, FaIceCream, FaBreadSlice, FaWineGlass } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const useCases = [
  {
    icon: FaUtensils,
    title: 'Restaurants',
    description: 'Full-service restaurants managing diverse menus and high-volume orders.',
    color: 'from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600'
  },
  {
    icon: FaCoffee,
    title: 'Cafés',
    description: 'Perfect for coffee shops and bakeries with quick transactions.',
    color: 'from-amber-400 to-amber-500 dark:from-amber-500 dark:to-amber-600'
  },
  {
    icon: FaPizzaSlice,
    title: 'Pizzerias',
    description: 'Ideal for pizza places with customizable orders and toppings.',
    color: 'from-red-400 to-red-500 dark:from-red-500 dark:to-red-600'
  },
  {
    icon: FaIceCream,
    title: 'Dessert Shops',
    description: 'Great for ice cream parlors and dessert-focused establishments.',
    color: 'from-pink-400 to-pink-500 dark:from-pink-500 dark:to-pink-600'
  },
  {
    icon: FaBreadSlice,
    title: 'Bakery',
    description: 'Manage fresh daily inventory and customer orders efficiently.',
    color: 'from-yellow-400 to-yellow-500 dark:from-yellow-500 dark:to-yellow-600'
  },
  {
    icon: FaWineGlass,
    title: 'Bars & Lounges',
    description: 'Track beverages, happy hour specials, and bar inventory.',
    color: 'from-purple-400 to-purple-500 dark:from-purple-500 dark:to-purple-600'
  }
];

export default function UseCases() {
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
            Perfect for Every Business Type
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you run a small café or a large restaurant, our system adapts to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ y: -5 }}
              className={`bg-linear-to-br ${useCase.color} text-white rounded-2xl p-6 transition-all duration-300 h-full`}
            >
              <useCase.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-white/90">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

