import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// -----------------------------------------------------------------------------
// 1. REUSABLE HOOK (Lightweight Intersection Observer)
// -----------------------------------------------------------------------------
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Trigger only once for performance
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isVisible];
};

// -----------------------------------------------------------------------------
// 2. MAIN COMPONENT
// -----------------------------------------------------------------------------
const CTA = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative py-32 bg-slate-950 overflow-hidden flex items-center justify-center"
    >
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base & Vignette */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] z-10 pointer-events-none" />

      {/* 2. Perspective Grid (The "Floor") */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                           linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)',
          maskImage: 'linear-gradient(to bottom, transparent, black 40%, transparent)',
        }}
      />

      {/* 3. The "Aurora" Glow (GPU Accelerated) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent blur-[80px] rounded-full mix-blend-screen animate-float will-change-transform" />
      </div>

      {/* 4. CSS Particles (Stars) - No JS Calculations */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-0 animate-particle"
            style={{
              // Inline styles for initial random positions & delays only
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-200 font-medium tracking-wide">Future-Ready Technology</span>
        </div>

        {/* Heading */}
        <h2 className={`text-5xl md:text-7xl font-normal text-white mb-6 tracking-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Automate</span> Everything?
        </h2>
        
        {/* Subtext */}
        <p className={`text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Join the future of business with our AI-driven solutions. <br className="hidden md:block"/>
          Let's build something extraordinary together.
        </p>
        
        {/* Button */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <button className="group relative px-10 py-5 bg-white rounded-full font-bold text-lg overflow-hidden shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.5)] transition-shadow duration-300 hover:scale-105 transform active:scale-95">
            {/* Button Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-100 to-white" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10" />

            {/* Button Content */}
            <Link to={'/contactus'}>
            <span className="relative z-20 text-slate-900 flex items-center gap-3">
              Start Your Journey
              <div className="p-1 rounded-full bg-slate-900 text-white group-hover:bg-blue-600 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </span>
            </Link>
          </button>
        </div>

        {/* Footer Text */}
        <p className={`mt-8 text-sm text-slate-500 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          No credit card required for demo booking
        </p>

      </div>

      {/* --- OPTIMIZED CSS ANIMATIONS --- */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes particleFade {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.6; transform: scale(1.5); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-particle {
          animation: particleFade linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CTA;