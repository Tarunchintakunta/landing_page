// src/components/QuerySection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button3D from './Button3D'; // Import the Button3D component

const QuerySection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'compare valuation multiples of MSFT';
  const [isTyping, setIsTyping] = useState(true);
  const [activeSource, setActiveSource] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  // Handle ask button click
  const handleAsk = () => {
    // Here you would implement the actual query functionality
    alert(`Asking: "${displayText}" using ${activeSource} sources`);
  };

  // Handle source selection
  const handleSourceSelect = (source) => {
    setActiveSource(source);
    setDropdownOpen(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-primary mb-4">Intelligent Query System</h2>
          <p className="text-lg text-tertiary max-w-2xl mx-auto">
            Ask anything about company financials, market data, or business metrics
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Query Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col space-y-6">
              {/* Query Input */}
              <div className="p-6 bg-gray-50 rounded-xl min-h-[80px] flex items-center relative">
                <span className="text-lg text-gray-900 font-medium">{displayText}</span>
                {isTyping && (
                  <span className="typing-cursor ml-1 w-0.5 h-6 bg-primary animate-pulse"></span>
                )}
              </div>
              
              {/* Action Buttons - Updated with 3D style */}
              <div className="flex justify-between items-center">
                <div className="relative">
                  <Button3D 
                    variant="secondary" 
                    className="flex items-center space-x-3 px-5 py-3"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    active={dropdownOpen}
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                    </svg>
                    <span className="font-medium">{activeSource === 'all' ? 'All sources' : activeSource}</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </Button3D>
                  
                  {/* Dropdown menu */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-10 border border-gray-100 overflow-hidden">
                      <ul className="py-1">
                        <li onClick={() => handleSourceSelect('all')} className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 font-medium flex items-center space-x-2">
                          <span>All sources</span>
                        </li>
                        <li onClick={() => handleSourceSelect('SEC Filings')} className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 font-medium flex items-center space-x-2">
                          <span>SEC Filings</span>
                        </li>
                        <li onClick={() => handleSourceSelect('Transcripts')} className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 font-medium flex items-center space-x-2">
                          <span>Transcripts</span>
                        </li>
                        <li onClick={() => handleSourceSelect('Web')} className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 font-medium flex items-center space-x-2">
                          <span>Real-time Web</span>
                        </li>
                        <li onClick={() => handleSourceSelect('Internal')} className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 font-medium flex items-center space-x-2">
                          <span>Internal Files</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <Button3D 
                  variant="accent" 
                  className="flex items-center space-x-2 text-white btn-green px-6 py-3"
                  onClick={handleAsk}
                >
                  <span className="font-medium">Ask</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Button3D>
              </div>
            </div>
          </div>
          
          {/* Source Buttons - Updated with 3D style */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* Source buttons */}
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              active={activeSource === 'SEC Filings'}
              onClick={() => handleSourceSelect('SEC Filings')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="font-medium">SEC Filings</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              active={activeSource === 'Transcripts'}
              onClick={() => handleSourceSelect('Transcripts')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
              </svg>
              <span className="font-medium">Transcripts</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              active={activeSource === 'Web'}
              onClick={() => handleSourceSelect('Web')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <span className="font-medium">Real-time Web</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              active={activeSource === 'Internal'}
              onClick={() => handleSourceSelect('Internal')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
              <span className="font-medium">Internal Files</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              active={activeSource === 'Market'}
              onClick={() => handleSourceSelect('Market')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
              <span className="font-medium">Market Data</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              active={activeSource === 'Presentations'}
              onClick={() => handleSourceSelect('Presentations')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </svg>
              <span className="font-medium">Presentations</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              active={activeSource === 'News'}
              onClick={() => handleSourceSelect('News')}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
              <span className="font-medium">News & media</span>
            </Button3D>
            
            <Button3D 
              variant="secondary" 
              size="sm" 
              className="flex items-center space-x-2 px-4 py-2.5 bg-white"
              onClick={() => alert('More sources coming soon!')}
            >
              <span className="font-medium">... more</span>
            </Button3D>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuerySection;