'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

interface SupportMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<SupportMessage>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-purple-100 to-slate-100 
      dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-teal-600! dark:hover:text-teal-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer mb-6"
          >
            <MdArrowBack className="text-lg" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full p-6 w-fit mx-auto mb-6"
          >
            <FaEnvelope className="w-16 h-16 md:w-20 md:h-20 text-teal-500 dark:text-teal-400" />
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text 
              bg-linear-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Support & Contact
          </motion.h1>
          <p className="text-slate-600 dark:text-gray-300 mt-4 text-lg transition-colors duration-300">
            Need help? Have questions? We're here for you!
          </p>
        </motion.div>

        {/* Support Form */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/5 border 
                      text-slate-900 dark:text-white focus:outline-none transition-colors ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-slate-300 dark:border-gray-600 focus:border-teal-400'
                      }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/5 border 
                      text-slate-900 dark:text-white focus:outline-none transition-colors ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-slate-300 dark:border-gray-600 focus:border-teal-400'
                      }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/5 border 
                    text-slate-900 dark:text-white focus:outline-none transition-colors ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-slate-300 dark:border-gray-600 focus:border-teal-400'
                    }`}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className={`w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/5 border 
                    text-slate-900 dark:text-white focus:outline-none transition-colors resize-none 
                    placeholder:text-slate-400 dark:placeholder:text-gray-400 ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-slate-300 dark:border-gray-600 focus:border-teal-400'
                    }`}
                  disabled={isSubmitting}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-teal-400 to-purple-400 text-white rounded-xl 
                  font-semibold transition-all duration-200 flex items-center justify-center gap-2
                  disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-xl" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Alternative Support Options */}
          <div className="mt-8 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Other Ways to Get Help</h2>
            <div className="space-y-4 text-slate-600 dark:text-gray-300">
              <p>
                <strong className="text-slate-900 dark:text-white">GitHub Issues:</strong> Report bugs or request features on our{' '}
                <a 
                  href="https://github.com/Roboticela/Restaurant-Management-System/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:text-purple-600! dark:hover:text-purple-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer font-semibold"
                >
                  GitHub Issues page
                </a>
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">App Website:</strong> Visit our official website at{' '}
                <a 
                  href="https://restaurant-management-system.roboticela.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:text-purple-600! dark:hover:text-purple-400! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer font-semibold"
                >
                  Restaurant Management System
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 bg-teal-500 text-white px-4 sm:px-6 py-3 
            rounded-xl flex items-center gap-2 z-50 max-w-md sm:mx-auto"
        >
          <FaCheck className="text-xl shrink-0" />
          <span className="text-sm sm:text-base">Message sent successfully! We'll get back to you soon.</span>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 bg-red-500 text-white px-4 sm:px-6 py-3 
            rounded-xl flex items-center gap-2 max-w-md sm:mx-auto z-50"
        >
          <FaExclamationTriangle className="text-xl shrink-0" />
          <span className="text-sm sm:text-base break-words">{errorMessage}</span>
        </motion.div>
      )}
    </div>
  );
}

