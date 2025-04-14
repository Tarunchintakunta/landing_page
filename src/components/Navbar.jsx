// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 pt-4">
        <motion.nav 
          className={`oval-navbar max-w-3xl mx-auto flex items-center justify-between ${
            scrolled ? 'bg-opacity-95' : 'bg-opacity-90'
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.3
          }}
        >
          <div className="flex items-center gap-2">
            <img 
              src="/src/assets/images/logo.svg" 
              alt="Firmi Logo" 
              className="h-6 w-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/32?text=F';
              }}
            />
            <span className="ml-2 logo-text">Firmi</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center gap-6">
              <a href="#about" className="nav-link">About</a>
              <a href="#resources" className="nav-link">Resources</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#careers" className="nav-link">Careers</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="btn-3d-gradient">Get Started</button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;