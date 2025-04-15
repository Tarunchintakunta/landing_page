import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      <section className="pt-20 pb-16 bg-gray-50 overflow-hidden">
        <div className="section-container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4 text-primary font-rooftop text-4xl md:text-5xl lg:text-6xl leading-tight">
                Supercharge your investment
                <br /> research with AI
              </h1>
              <p className="text-tertiary mb-6 max-w-lg font-rooftop text-lg md:text-xl">
              Financial research made simpler, better, and faster for the modern investor
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative max-w-lg w-full">
                  <button className="btn-gradient">Start Playground</button>
                </div>
              </div>
            </motion.div>

            {/* Video - Right Side */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[400px] w-full">
                <div className="w-full h-full transform scale-110 hover:scale-115 transition-transform duration-500">
                  <video 
                    src="/FAsSZz-hQz7z9QpE.mp4"
                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const placeholder = document.createElement('img');
                      placeholder.src = '/api/placeholder/500/400';
                      placeholder.className = 'w-full h-full object-contain rounded-lg shadow-2xl';
                      e.target.parentNode.appendChild(placeholder);
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full opacity-15 filter blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;