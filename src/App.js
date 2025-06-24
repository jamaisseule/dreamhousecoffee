import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import EventsSection from './components/EventsSection';
import MenuSection from './components/MenuSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navbar scrollY={scrollY} />
      <HeroSection scrollY={scrollY} />
      <EventsSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
