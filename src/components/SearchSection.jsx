// src/components/SearchSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SearchSection = () => {
  return (
    <section className="py-20 bg-light">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg text-primary mb-4">All your data in one place</h2>
          <p className="body-text text-tertiary">
            Access all your critical business information instantly with our powerful search and organization tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Document Display */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-rooftop text-tertiary">Models & spreadsheets</h3>
              <button className="text-primary hover:text-opacity-80 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </button>
            </div>

            <div className="flex items-center p-4 bg-light rounded-lg mb-4 hover:bg-primary hover:bg-opacity-5 cursor-pointer transition-all">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium">Data rooms, meeting notes</h4>
                <p className="text-sm text-gray-500">#Internal</p>
              </div>
              <div className="ml-auto">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-rooftop text-tertiary mt-8 mb-4">Filings and earnings</h3>

            <p className="text-tertiary mb-4">
              Firmi searches, analyzes, and cites across millions of
              documents — including your proprietary internal content and
              our extensive library — saving you hours of manual digging.
            </p>
          </motion.div>

          {/* Right Side - Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-10">
              <div className="bg-black text-white rounded-lg p-4 flex items-center justify-center aspect-square shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center aspect-square shadow-md">
                <svg className="w-8 h-8 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center aspect-square shadow-md">
                <svg className="w-8 h-8 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center aspect-square shadow-md">
                <svg className="w-8 h-8 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center aspect-square shadow-md">
                <svg className="w-8 h-8 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-rooftop text-primary mb-4">Focus on the important work</h3>
              <p className="text-tertiary mb-6">
                Use a suite of productivity tools to supercharge your work. Spend
                less time on manual tasks, let your junior team members focus on
                higher-value work, and empower executives to answer their own
                questions.
              </p>
              <button className="btn-primary">Get Started</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;