// src/components/HowItWorks.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button3D from './Button3D'; // Import the Button3D component

const HowItWorks = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-20 bg-light">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="heading-lg text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See how Firmi transforms document processing
          </motion.h2>
          <motion.p 
            className="body-text text-tertiary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Watch our short demo to understand how our AI-powered platform can revolutionize
            your document workflow.
          </motion.p>
        </div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              src="/public/Firmi floww.mp4"
              autoPlay
              loop
              muted
              playsInline
              defaultPlaybackRate={1.5}
              onLoadedMetadata={(e) => {
                e.target.playbackRate = 1.5;
              }}
              style={{ filter: 'brightness(1.05) contrast(1.05)' }}
            >
              <source src="/public/Firmi floww.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          {/* Update Call-to-Action button with 3D styling */}
          <Button3D
            variant="accent"
            size="lg"
            className="btn-gradient mx-auto"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            }
          >
            Watch Demo
          </Button3D>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;