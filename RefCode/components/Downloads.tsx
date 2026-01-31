'use client';

import { motion } from 'framer-motion';
import { FaWindows, FaLinux, FaApple, FaAndroid, FaMobile } from 'react-icons/fa';
import { containerAnimation } from './animations';
import DownloadCard from './DownloadCard';
import {
  APP_VERSION,
  type DownloadFileConfig
} from '../utils/downloads';

const downloadLinks = [
  {
    platform: 'Windows',
    platformKey: 'windows',
    icon: FaWindows,
    files: [
      { format: 'exe', arch: 'x64', label: 'Windows x64 (.exe)' },
      { format: 'msi', arch: 'x64', label: 'Windows x64 (.msi)', formatPrefix: 'msi' },
      { format: 'exe', arch: 'aarch64', label: 'Windows ARM64 (.exe)' },
      { format: 'exe', arch: 'i686', label: 'Windows 32-bit (.exe)' }
    ] as DownloadFileConfig[],
    color: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
  },
  {
    platform: 'Linux',
    platformKey: 'linux',
    icon: FaLinux,
    files: [
      { format: 'AppImage', arch: 'x64', label: 'Linux x64 (.AppImage)', formatPrefix: 'appimage' },
      { format: 'deb', arch: 'x64', label: 'Linux x64 (.deb)', formatPrefix: 'deb' },
      { format: 'rpm', arch: 'x64', label: 'Linux x64 (.rpm)', formatPrefix: 'rpm' }
    ] as DownloadFileConfig[],
    color: 'from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700'
  },
  {
    platform: 'macOS',
    platformKey: 'macos',
    icon: FaApple,
    files: [
      { format: 'dmg', arch: 'universal', label: 'macOS Universal (.dmg)' },
      { format: 'dmg', arch: 'arm64', label: 'macOS Apple Silicon (.dmg)' },
      { format: 'dmg', arch: 'x64', label: 'macOS Intel (.dmg)' },
      { format: 'gz', arch: 'arm64', label: 'macOS Apple Silicon App (.gz)', formatPrefix: 'app' },
      { format: 'gz', arch: 'x64', label: 'macOS Intel App (.gz)', formatPrefix: 'app' }
    ] as DownloadFileConfig[],
    color: 'from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800'
  },
  {
    platform: 'iOS',
    platformKey: 'ios',
    icon: FaMobile,
    files: [
      { format: 'zip', arch: 'aarch64', label: 'iOS Simulator ARM64 (.zip)', platformSuffix: 'simulator' },
      { format: 'zip', arch: 'x86_64', label: 'iOS Simulator x64 (.zip)', platformSuffix: 'simulator' },
      { store: 'App Store' }
    ] as (DownloadFileConfig & { store?: string })[],
    color: 'from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700'
  },
  {
    platform: 'Android',
    platformKey: 'android',
    icon: FaAndroid,
    files: [
      { format: 'apk', arch: 'aarch64', label: 'Android ARM64/AArch64 (.apk)' },
      { format: 'apk', arch: 'armv7', label: 'Android ARMv7/ARMv8 (.apk)' },
      { format: 'apk', arch: 'x86_64', label: 'Android x64/AMD64 (.apk)' },
      { format: 'apk', arch: 'i686', label: 'Android x86/i386 (.apk)' },
      { store: 'Play Store' }
    ] as (DownloadFileConfig & { store?: string })[],
    color: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700'
  }
];

export default function Downloads() {
  return (
    <section id="downloads" className="py-16 md:py-24 px-4 bg-white/30 dark:bg-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Download for Your Platform
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Available for Windows, Linux, macOS, iOS, and Android. Choose your platform and get started today.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {downloadLinks.map((platform, index) => (
            <DownloadCard
              key={index}
              platform={platform.platform}
              platformKey={platform.platformKey}
              icon={platform.icon}
              files={platform.files}
              color={platform.color}
              version={APP_VERSION}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-600 dark:text-gray-300 mb-4">
            Looking for the latest version? Check our{' '}
            <a 
              href="https://github.com/Roboticela/Restaurant-Management-System/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700! dark:hover:text-teal-300! hover:underline underline-offset-4 font-semibold transition-all duration-200 cursor-pointer"
            >
              GitHub Releases
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

