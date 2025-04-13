// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuerySection from './components/QuerySection';
import HowItWorks from './components/HowItWorks';
import ComparisonSection from './components/ComparisonSection';
import SearchSection from './components/SearchSection';
import TableSection from './components/TableSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <QuerySection />
        <HowItWorks />
        <ComparisonSection />
        <SearchSection />
        <TableSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;