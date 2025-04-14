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
          className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Video Thumbnail with Play Button */}
          {!isVideoPlaying ? (
            <div className="relative w-full h-full bg-black">
              {/* Placeholder Image */}
              <img 
                src="/api/placeholder/800/450"
                alt="How Firmi Works"
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Play Button - Update with 3D styling */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button3D
                  variant="primary"
                  size="icon"
                  className="w-20 h-20 rounded-full"
                  onClick={() => setIsVideoPlaying(true)}
                  icon={
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  }
                />
              </div>
            </div>
          ) : (
            // Actual Video Player (replace with your actual video URL)
            <div className="w-full h-full">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Firmi Demo Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </motion.div>

        <div className="mt-8 text-center">
          {/* Update Call-to-Action button with 3D styling */}
          <Button3D
            variant="accent"
            size="lg"
            className="mx-auto"
            onClick={() => setIsVideoPlaying(true)}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            }
          >
            Start Playground
          </Button3D>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;