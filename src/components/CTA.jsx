import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Ready to Automate Everything?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
        >
          Join the future of business with our AI-driven solutions. Let's build something extraordinary together.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="px-8 py-4 rounded-full bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-bold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto group"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ stroke: 'url(#arrowGradient)', strokeWidth: 2.5 }} />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;