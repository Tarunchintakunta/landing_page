// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button3D from './Button3D'; // Import the button component

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <motion.nav 
        className={`oval-navbar flex items-center justify-between ${
          scrolled ? 'bg-white bg-opacity-90' : 'bg-white bg-opacity-70'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="flex items-center">
          <img 
            src="/src/assets/images/logo.svg" 
            alt="Firmi Logo" 
            className="h-8 w-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/40x40?text=Firmi';
            }}
          />
          <span className="ml-2 text-primary font-rooftop text-xl">Firmi</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 mx-8">
          <a href="#about" className="text-tertiary hover:text-primary transition-colors">About</a>
          <a href="#resources" className="text-tertiary hover:text-primary transition-colors">Resources</a>
          <a href="#pricing" className="text-tertiary hover:text-primary transition-colors">Pricing</a>
          <a href="#careers" className="text-tertiary hover:text-primary transition-colors">Careers</a>
        </div>
        
        {/* Custom gradient button with 3D effect */}
        <button 
          className="relative overflow-hidden px-6 py-2 rounded-full font-medium text-white shadow-md hover:shadow-lg transform transition-all duration-200 active:shadow-inner active:translate-y-0.5"
          style={{
            background: 'linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)',
          }}
        >
          <span className="relative z-10">Get Started</span>
          <div 
            className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-200"
            style={{ 
              mixBlendMode: 'overlay'
            }}
          ></div>
        </button>
      </motion.nav>
    </header>
  );
};

export default Navbar;