// src/components/QuerySection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuerySection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'compare valuation multiples of MSFT';
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 100);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), 3000);
      }
    } else {
      setDisplayText('');
    }
  }, [displayText, isTyping]);

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Query Box */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col space-y-4">
              {/* Query Input */}
              <div className="p-4 bg-light bg-opacity-50 rounded-lg min-h-[60px] flex items-center">
                <span className="text-tertiary">{displayText}</span>
                {isTyping && <span className="typing-cursor"></span>}
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-tertiary bg-light bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-all">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                    </svg>
                    <span>All sources</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
                
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all flex items-center space-x-2">
                  <span>Ask</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Source Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span>SEC Filings</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
              </svg>
              <span>Transcripts</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <span>Real-time Web</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
              <span>Internal Files</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
              <span>Market Data</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
              <span>Presentations</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              <span>News & media</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <span>... more</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuerySection;