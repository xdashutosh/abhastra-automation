import React, { useState } from 'react';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import WhyChoose from './components/WhyChoose';
import Clients from './components/Clients';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedIntro from './components/AnimatedIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
  };

  return (
    <>
      {showIntro && <AnimatedIntro onComplete={handleIntroComplete} />}
      
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary selection:text-white">
        <Navbar/>
        <main className="overflow-hidden relative">
          <Hero />
          <Services />
          <WhyChoose />
          <TechStack />
          <Clients />
          <CTA />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
