'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Demo from './components/Demo';
import UseCases from './components/UseCases';
import Downloads from './components/Downloads';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import TechnologyStack from './components/TechnologyStack';
import Comparison from './components/Comparison';
import SystemRequirements from './components/SystemRequirements';
import FAQ from './components/FAQ';
import Roadmap from './components/Roadmap';
import Support from './components/Support';
import OnlineVersion from './components/OnlineVersion';
import About from './components/About';
import Footer from './components/Footer';
import ScrollPopup from './components/ScrollPopup';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-purple-100 to-slate-100 
      dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <Features />

      {/* Demo Section */}
      <Demo />

      {/* Use Cases Section */}
      <UseCases />

      {/* Downloads Section */}
      <Downloads />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Technology Stack */}
      <TechnologyStack />

      {/* Comparison Section */}
      <Comparison />

      {/* System Requirements */}
      <SystemRequirements />

      {/* FAQ Section */}
      <FAQ />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Support Section */}
      <Support />

      {/* Online Version Section */}
      <OnlineVersion />

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />

      {/* Scroll Popup */}
      <ScrollPopup />
    </div>
  );
}
