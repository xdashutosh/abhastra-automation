import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden flex items-center justify-center">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base & Vignette */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] z-10" />

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

      {/* 3. The "Aurora" Glow (Animated) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent blur-[80px] rounded-full mix-blend-screen animate-float" />
      </div>

      {/* 4. Floating Particles (Stars) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-40"
            initial={{ 
              x: Math.random() * 1000 - 500, 
              y: Math.random() * 600 - 300, 
              scale: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100], 
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 2 + 1, 0] 
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1 }}
          />
        ))}
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-200 font-medium tracking-wide">Future-Ready Technology</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Automate</span> Everything?
        </motion.h2>
        
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Join the future of business with our AI-driven solutions. <br className="hidden md:block"/>
          Let's build something extraordinary together.
        </motion.p>
        
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <button className="group relative px-10 py-5 bg-white rounded-full font-bold text-lg overflow-hidden shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.5)] transition-shadow duration-300">
            {/* Button Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-100 to-white" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10" />

            {/* Button Content */}
            <span className="relative z-20 text-slate-900 flex items-center gap-3">
              Start Your Journey
              <div className="p-1 rounded-full bg-slate-900 text-white group-hover:bg-blue-600 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </span>
          </button>
        </motion.div>

        {/* Footer Text */}
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8 }}
           className="mt-8 text-sm text-slate-500"
        >
          No credit card required for demo booking
        </motion.p>

      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTA;