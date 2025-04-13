// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        
        <button className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
          Get Started
        </button>
      </motion.nav>
    </header>
  );
};

export default Navbar;