'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft, FaFileContract } from 'react-icons/fa';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function TermsPage() {
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
            <FaFileContract className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500 dark:text-teal-400 shrink-0" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Terms of Use
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
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              By accessing and using Restaurant Management System ("the Software"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">2. License Agreement</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
              Restaurant Management System is licensed under the <strong className="text-slate-900 dark:text-white">GNU Affero General Public License v3.0 (AGPL-3.0)</strong>. This means:
            </p>
            <div className="bg-white/50 dark:bg-white/5 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">✅ You CAN:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
                  <li>Use the software for any purpose, including commercial use</li>
                  <li>Study how the software works and modify it</li>
                  <li>Distribute copies of the software</li>
                  <li>Distribute modified versions of the software</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">⚠️ You MUST:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
                  <li>Disclose your source code when distributing</li>
                  <li>Include the original license and copyright notice</li>
                  <li>State any changes made to the original code</li>
                  <li>Make your modified source code available under AGPL-3.0</li>
                  <li>If you run a modified version on a server/network, provide source access to users</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">❌ You CANNOT:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
                  <li>Hold the authors liable for damages</li>
                  <li>Use the authors' names for promotion without permission</li>
                  <li>Remove or alter the license terms</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">3. No Warranty</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data and Privacy</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
              Restaurant Management System is designed to operate entirely offline. All data is stored locally on your device using SQLite database. We do not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4">
              <li>Collect any personal information</li>
              <li>Transmit data to external servers</li>
              <li>Track user behavior or usage statistics</li>
              <li>Share data with third parties</li>
            </ul>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mt-4">
              You are solely responsible for backing up and securing your data. The software provides database import/export functionality for this purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Modifications and Derivative Works</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              If you modify the Software, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4 mt-4">
              <li>Clearly mark your changes in the modified files</li>
              <li>Include a notice stating that you changed the Software and the date of any change</li>
              <li>License your modifications under AGPL-3.0</li>
              <li>Make the complete source code of your modified version available to all users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Network Server Use</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              If you run a modified version of the Software on a server that is accessible over a network, you must provide all users with access to the complete source code of your modified version. This includes making the source code available through a web interface or other means that allows users to download it.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Copyright</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              Copyright © {new Date().getFullYear()} Roboticela. All rights reserved. The Software is free software released under the AGPL-3.0 license. You may copy, distribute, and modify it as permitted by the license terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Contact Information</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              For questions about these Terms of Use or the Software license, please contact us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-gray-300 ml-4 mt-4">
              <li>GitHub: <a href="https://github.com/Roboticela/Restaurant-Management-System" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-700! dark:hover:text-teal-300! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer">Restaurant Management System</a></li>
              <li>Email: contact@roboticela.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Full License Text</h2>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              The complete text of the GNU Affero General Public License v3.0 can be found at:
            </p>
            <a 
              href="https://www.gnu.org/licenses/agpl-3.0.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700! dark:hover:text-teal-300! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer block mt-2"
            >
              https://www.gnu.org/licenses/agpl-3.0.html
            </a>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mt-4">
              A copy of the license is also included in the Software repository at:
            </p>
            <a 
              href="https://github.com/Roboticela/Restaurant-Management-System/blob/main/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700! dark:hover:text-teal-300! hover:underline underline-offset-4 transition-all duration-200 cursor-pointer block mt-2"
            >
              https://github.com/Roboticela/Restaurant-Management-System/blob/main/LICENSE
            </a>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

