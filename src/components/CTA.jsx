import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
      
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
          className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-slate-100 transition-all shadow-xl flex items-center gap-2 mx-auto"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
