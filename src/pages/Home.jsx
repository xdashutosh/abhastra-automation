import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import TechStack from '../components/TechStack';
import Clients from '../components/Clients';
import CTA from '../components/CTA';
import About from '../components/About';
import Contact from '../components/Contact';
import ParticleWords from '../components/Particle';

const Home = () => {
  return (
    <>
      <Hero />
      <ParticleWords/>
      <Services />
      <WhyChoose />
      <TechStack />
      <Clients />
      <CTA />
      <About />
      <Contact />
    </>
  );
};

export default Home;
