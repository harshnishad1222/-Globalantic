
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Articles />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
