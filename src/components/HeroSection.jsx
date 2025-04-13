// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-light overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl text-primary mb-6">
              Document processing
              <br /> reimagined with LLMs
            </h1>
            <p className="body-text text-tertiary mb-8 max-w-xl">
              Turn your documents into high quality data, achieve unmatched
              accuracy, and ship custom document automation in days, not
              months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative max-w-lg w-full">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                />
                <button className="mt-3 sm:mt-0 sm:absolute sm:right-1 sm:top-1 sm:bottom-1 bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              <motion.img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo2DzhehcQoV78r_XgJ2nGaw4x3xJ9JCboQ&s"
                alt="Document Processing Layers"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/api/placeholder/500/400';
                }}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary rounded-full opacity-10 filter blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;