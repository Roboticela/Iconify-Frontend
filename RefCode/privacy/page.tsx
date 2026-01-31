'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-purple-100 to-slate-100 
      dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer mb-6"
          >
            <FaArrowLeft className="text-lg" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-3 mb-6">
            <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500 dark:text-teal-400 shrink-0" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-slate-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Overview</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              Restaurant Management System is committed to protecting your privacy. This Privacy Policy explains how we handle your data when you use our software. Since this is an open-source, offline-first application, we have designed it to respect your privacy by default.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Data Collection</h2>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-4">
              <p className="text-green-800 dark:text-green-200 font-semibold mb-2">✅ We DO NOT collect any data:</p>
              <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 ml-4">
                <li>No personal information is collected</li>
                <li>No usage statistics or analytics</li>
                <li>No device information or identifiers</li>
                <li>No network requests to external servers</li>
                <li>No tracking or monitoring of any kind</li>
              </ul>
            </div>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              Restaurant Management System operates completely offline. All data is stored locally on your device using SQLite database. The application does not connect to the internet for data transmission purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Local Data Storage</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
              All your data is stored locally on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
              <li><strong className="text-slate-900 dark:text-white">Product Information:</strong> Product names, prices, units, and inventory data</li>
              <li><strong className="text-slate-900 dark:text-white">Transaction Records:</strong> Sales history, transaction details, and timestamps</li>
              <li><strong className="text-slate-900 dark:text-white">Settings:</strong> Restaurant information, logo, currency preferences, and configuration</li>
              <li><strong className="text-slate-900 dark:text-white">Analytics Data:</strong> Revenue calculations and business metrics derived from your transactions</li>
            </ul>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mt-4">
              This data never leaves your device unless you explicitly export it using the built-in database export feature.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
              Since all data is stored locally:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
              <li>Your data is protected by your device's security measures</li>
              <li>No data is transmitted over networks</li>
              <li>No cloud storage is used</li>
              <li>You have full control over your data</li>
            </ul>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mt-4">
              We recommend that you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
              <li>Regularly backup your database using the export feature</li>
              <li>Keep your device secure with appropriate passwords and encryption</li>
              <li>Store backups in secure locations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Third-Party Services</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              Restaurant Management System does not integrate with any third-party services that would collect or share your data. The application is completely self-contained and operates independently.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Open Source Transparency</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
              Since Restaurant Management System is open-source software licensed under AGPL-3.0, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
              <li>Review the complete source code to verify our privacy claims</li>
              <li>Modify the software to suit your privacy requirements</li>
              <li>Audit the code for any potential privacy concerns</li>
              <li>Build your own version with additional privacy features</li>
            </ul>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mt-4">
              The source code is available at:{' '}
              <a 
                href="https://github.com/Roboticela/Restaurant-Management-System" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:text-teal-700! dark:hover:text-teal-300! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer"
              >
                https://github.com/Roboticela/Restaurant-Management-System
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Modified Versions</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              If you use a modified version of Restaurant Management System, the privacy practices of that modified version may differ. Please review the privacy policy and source code of any modified version you use. We are not responsible for the privacy practices of modified versions of the software.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Changes to This Policy</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Since the software is distributed, we recommend checking the latest version on our GitHub repository. The "Last updated" date at the top of this page indicates when the policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Your Rights</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
              Since all data is stored locally, you have complete control over:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
              <li>Accessing your data at any time</li>
              <li>Exporting your data using the built-in export feature</li>
              <li>Deleting your data by uninstalling the application or deleting the database</li>
              <li>Modifying your data directly through the application interface</li>
              <li>Backing up your data regularly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Contact Us</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4 mt-4">
              <li>GitHub Issues: <a href="https://github.com/Roboticela/Restaurant-Management-System/issues" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-700! dark:hover:text-teal-300! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer">Open an issue</a></li>
              <li>Email: contact@roboticela.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Summary</h2>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6">
              <p className="text-teal-800 dark:text-teal-200 font-semibold mb-2">Privacy-First Design:</p>
              <p className="text-teal-700 dark:text-teal-300 leading-relaxed">
                Restaurant Management System is designed with privacy as a core principle. We don't collect, transmit, or share your data. Everything stays on your device, under your control. This is not just a feature—it's a fundamental design decision that reflects our commitment to your privacy.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

