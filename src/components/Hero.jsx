import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 8,
        },
        repulse: {
          distance: 150,
          duration: 0.3,
        },
        attract: {
          distance: 250,
          duration: 0.3,
          factor: 8,
        },
      },
    },
    particles: {
      color: {
        value: ["#0F2FA8", "#6B21A8", "#BE185D", "#DC2626", "#EA580C", "#F59E0B", "#FBBF24"],
      },
      links: {
        color: "#BE185D",
        distance: 180,
        enable: true,
        opacity: 0.4,
        width: 2.5,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2.5,
        straight: false,
        attract: {
          enable: true,
          rotateX: 800,
          rotateY: 1600,
        },
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 90,
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.2,
          sync: false,
        },
      },
      shape: {
        type: ["circle", "triangle", "edge", "polygon", "star"],
        polygon: {
          nb_sides: 6,
        },
      },
      size: {
        value: { min: 2, max: 6 },
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background - matching abhastra logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 via-red-50 via-orange-50 to-yellow-50" />
      
      {/* Particles Background */}
      <div 
        className="absolute inset-0 transition-transform duration-300"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-purple-300 mb-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-sm text-slate-700 font-medium">Revolutionizing Industries with AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900"
          >
            Automating Everything <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 via-orange-600 to-yellow-500">
              With Intelligence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl leading-relaxed"
          >
            We build advanced <span className="font-semibold text-slate-800">AI-based ERPs</span>, <span className="font-semibold text-slate-800">LLMs</span>, <span className="font-semibold text-slate-800">Autonomous Agents</span>, and <span className="font-semibold text-slate-800">Microcontroller solutions</span>. 
            Transforming businesses through cutting-edge automation, app development, and IT consulting.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-500 text-white font-bold hover:from-blue-700 hover:via-purple-700 hover:via-pink-700 hover:via-red-700 hover:to-orange-600 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white backdrop-blur-sm border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all font-semibold shadow-lg hover:shadow-xl">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;