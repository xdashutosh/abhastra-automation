import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Abhastra Automation Pvt Ltd",
    "url": "https://abhastra.com",
    "logo": "https://abhastra.com/logo.png",
    "description": "Leading AI automation and ERP development company specializing in custom software solutions, intelligent automation, and business process optimization.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6350669414",
      "contactType": "Customer Service",
      "email": "contact@abhastra.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/abhastra",
      "https://twitter.com/abhastra"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation Solutions",
            "description": "Intelligent automation combining AI and RPA for business process optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP Development",
            "description": "Custom enterprise resource planning systems for unified business management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App & Web Development",
            "description": "Full-stack mobile and web application development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Large Language Models",
            "description": "Custom LLM development, fine-tuning, and deployment services"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Abhastra Automation - AI Automation & ERP Development Company</title>
        <meta name="title" content="Abhastra Automation - AI Automation & ERP Development Company" />
        <meta 
          name="description" 
          content="Transform your business with Abhastra's AI automation, custom ERP development, and intelligent software solutions. Expert team delivering cutting-edge automation and digital transformation." 
        />
        <meta 
          name="keywords" 
          content="AI automation, ERP development, custom software development, business automation, intelligent automation, RPA, machine learning, LLM, large language models, app development, web development, digital transformation, enterprise software, Gurugram, India" 
        />
        <meta name="author" content="Abhastra Automation Pvt Ltd" />
        <link rel="canonical" href="https://abhastra.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abhastra.com/" />
        <meta property="og:title" content="Abhastra Automation - AI Automation & ERP Development Company" />
        <meta 
          property="og:description" 
          content="Transform your business with Abhastra's AI automation, custom ERP development, and intelligent software solutions. Expert team delivering cutting-edge automation and digital transformation." 
        />
        <meta property="og:image" content="https://abhastra.com/og-image.jpg" />
        <meta property="og:site_name" content="Abhastra Automation" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abhastra.com/" />
        <meta property="twitter:title" content="Abhastra Automation - AI Automation & ERP Development Company" />
        <meta 
          property="twitter:description" 
          content="Transform your business with Abhastra's AI automation, custom ERP development, and intelligent software solutions." 
        />
        <meta property="twitter:image" content="https://abhastra.com/twitter-image.jpg" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Hero />
      {/* <ParticleWords/> */}
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
