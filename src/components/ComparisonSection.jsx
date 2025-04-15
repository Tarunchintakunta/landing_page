// src/components/ComparisonSection.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button3D from './Button3D'; // Import the new button component

const ComparisonSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsContainerRef = useRef(null);
  const isInView = useInView(cardsContainerRef, { once: false, amount: 0.3 });

  // Comparison card data
  const comparisonCards = [
    {
      title: 'Document Processing',
      withoutTitle: 'Without Firmi',
      withoutDescription: 'Lower quality results, significant implementation times, and continued R&D investment',
      withoutAccuracy: '~80%',
      withoutTimeframe: 'Months?',
      withTitle: 'With Firmi',
      withDescription: 'Rapidly achieve accuracy and free up your team to innovate, not maintain infra',
      withAccuracy: '> 95%',
      withTimeframe: 'Days',
    },
    {
      title: 'Data Extraction',
      withoutTitle: 'Without Firmi',
      withoutDescription: 'Complex rule-based systems that require constant maintenance',
      withoutAccuracy: '~75%',
      withoutTimeframe: 'Weeks',
      withTitle: 'With Firmi',
      withDescription: 'AI-powered extraction that learns and improves over time',
      withAccuracy: '> 92%',
      withTimeframe: 'Hours',
    },
    {
      title: 'Integration',
      withoutTitle: 'Without Firmi',
      withoutDescription: 'Custom APIs and complex architecture thats difficult to update',
      withoutAccuracy: '~70%',
      withoutTimeframe: 'Quarters',
      withTitle: 'With Firmi',
      withDescription: 'Simple API that works with your existing systems',
      withAccuracy: '> 98%',
      withTimeframe: 'Days',
    },
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % comparisonCards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + comparisonCards.length) % comparisonCards.length);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-primary mb-4">
            Firmi enables technical teams to handle complex documents
            <br />with state-of-the-art accuracy and reliability.
          </h2>
        </motion.div>

        <div className="relative" ref={cardsContainerRef}>
          {/* Navigation Buttons - Updated with 3D style */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <Button3D 
              variant="secondary" 
              size="icon" 
              onClick={handlePrevCard} 
              disabled={currentCardIndex === 0}
              icon={
                <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              }
            />
          </div>
          
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <Button3D 
              variant="secondary" 
              size="icon" 
              onClick={handleNextCard} 
              disabled={currentCardIndex === comparisonCards.length - 1}
              icon={
                <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              }
            />
          </div>

          {/* Cards Container */}
          <motion.div 
            className="flex gap-6 justify-center flex-wrap md:flex-nowrap"
            animate={{ 
              x: isInView ? 0 : '100%',
              opacity: isInView ? 1 : 0
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Without Card */}
            <motion.div 
              className="comparison-card light w-full md:w-1/2 max-w-md mx-auto"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-tertiary bg-opacity-10 rounded-full mr-3">
                  <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-rooftop">Without Firmi</h3>
              </div>
              
              <p className="text-tertiary mb-8">
                {comparisonCards[currentCardIndex].withoutDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div>
                  <h4 className="text-sm text-tertiary font-medium">Accuracy</h4>
                  <p className="text-4xl font-rooftop mt-1">{comparisonCards[currentCardIndex].withoutAccuracy}</p>
                </div>
                <div>
                  <h4 className="text-sm text-tertiary font-medium">Live in</h4>
                  <p className="text-4xl font-rooftop mt-1">{comparisonCards[currentCardIndex].withoutTimeframe}</p>
                </div>
              </div>
            </motion.div>
            
            {/* With Card */}
            <motion.div 
              className="comparison-card dark w-full md:w-1/2 max-w-md mx-auto"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white bg-opacity-10 rounded-full mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-rooftop text-white">With Firmi</h3>
              </div>
              
              <p className="text-white text-opacity-90 mb-8">
                {comparisonCards[currentCardIndex].withDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div>
                  <h4 className="text-sm text-white text-opacity-80 font-medium">Accuracy</h4>
                  <p className="text-4xl font-rooftop text-white mt-1">{comparisonCards[currentCardIndex].withAccuracy}</p>
                </div>
                <div>
                  <h4 className="text-sm text-white text-opacity-80 font-medium">Live in</h4>
                  <p className="text-4xl font-rooftop text-white mt-1">{comparisonCards[currentCardIndex].withTimeframe}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Pagination Dots - Updated with 3D style */}
          <div className="flex justify-center mt-8 space-x-2">
            {comparisonCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-10 h-10 flex items-center justify-center`}>
                  <Button3D 
                    variant="primary" 
                    size="icon" 
                    active={currentCardIndex === index}
                    className="w-8 h-8"
                  >
                    {index + 1}
                  </Button3D>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;