// src/components/HowItWorks.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './common/Button';

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
          <Button
            variant="3d"
            size="lg"
            className="btn-gradient mx-auto text-white"
          >
            Start Playground
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;