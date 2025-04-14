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
        className={`oval-navbar flex items-center justify-between backdrop-blur-xl bg-[#c5c3c2]/40 px-12 py-3 w-[70%] max-w-6xl ${
          scrolled ? 'shadow-lg backdrop-saturate-[1.8] bg-[#c5c3c2]/60' : 'shadow-md backdrop-saturate-[1.2] bg-[#c5c3c2]/40'
        } border-y border-white/20`}
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
          <a href="#about" className="text-tertiary hover:text-primary transition-colors">Product</a>
          <a href="#resources" className="text-tertiary hover:text-primary transition-colors">Solutions</a>
          {/* <a href="#pricing" className="text-tertiary hover:text-primary transition-colors">Pricing</a> */}
          <a href="#careers" className="text-tertiary hover:text-primary transition-colors">Research</a>
        </div>
        
        <button className="relative px-5 py-2 text-[14px] font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-800 transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 shadow-[0_4px_0_rgb(30,64,175)] hover:shadow-[0_5px_0_rgb(30,64,175)] active:shadow-[0_2px_0_rgb(30,64,175)]">
          Get Started
        </button>
      </motion.nav>
    </header>
  );
};

export default Navbar;