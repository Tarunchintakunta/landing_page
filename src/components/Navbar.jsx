// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          scrolled ? 'bg-opacity-95' : 'bg-opacity-80'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: 'spring', 
          stiffness: 120, 
          damping: 20,
          opacity: { duration: 0.3 }
        }}
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
          <span className="ml-2 logo-text">Firmi</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#careers" className="nav-link">Careers</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="btn-primary">Get Started</button>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;