import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = [
  { name: 'React', category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', category: 'Frontend', color: 'from-slate-600 to-slate-400' }, // Adjusted for dark theme visibility
  { name: 'Node.js', category: 'Backend', color: 'from-green-600 to-green-400' },
  { name: 'Python', category: 'AI & Backend', color: 'from-blue-500 to-yellow-400' },
  { name: 'TensorFlow', category: 'AI & ML', color: 'from-orange-500 to-orange-400' },
  { name: 'PyTorch', category: 'AI & ML', color: 'from-red-500 to-orange-500' },
  { name: 'React Native', category: 'Mobile', color: 'from-cyan-400 to-blue-400' },
  { name: 'Flutter', category: 'Mobile', color: 'from-blue-400 to-cyan-300' },
  { name: 'Swift', category: 'iOS', color: 'from-orange-500 to-red-500' },
  { name: 'Kotlin', category: 'Android', color: 'from-purple-500 to-pink-500' },
  { name: '.NET', category: 'Windows', color: 'from-purple-600 to-blue-600' },
  { name: 'C#', category: 'Windows', color: 'from-purple-700 to-purple-500' },
  { name: 'WPF', category: 'Windows', color: 'from-indigo-600 to-purple-600' },
  { name: 'Java', category: 'Enterprise', color: 'from-red-600 to-orange-600' },
  { name: 'C++', category: 'Legacy', color: 'from-blue-600 to-blue-800' },
  { name: 'ESP32', category: 'Hardware', color: 'from-red-500 to-pink-500' },
  { name: 'Arduino', category: 'Hardware', color: 'from-teal-500 to-cyan-500' },
  { name: 'Docker', category: 'DevOps', color: 'from-blue-500 to-blue-400' },
  { name: 'Kubernetes', category: 'DevOps', color: 'from-blue-600 to-indigo-500' },
  { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-yellow-400' },
  { name: 'Azure', category: 'Cloud', color: 'from-blue-500 to-cyan-400' },
];

const categories = [
  'All',
  'Frontend',
  'Backend',
  'Mobile',
  'AI & ML',
  'Windows',
  'Hardware',
  'DevOps',
  'Cloud',
  'Enterprise',
  'iOS',
  'Android',
  'Legacy'
];

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTechnologies = activeFilter === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* 1. Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Animated Glow Blobs (Optimized for Dark Mode) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-blue-300 backdrop-blur-md shadow-lg shadow-blue-500/10">
              Our Technology Arsenal
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Modern Tech</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We leverage cutting-edge tools and frameworks to build scalable, robust solutions across all platforms.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105'
                  : 'bg-slate-900/40 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
        >
          <AnimatePresence mode='popLayout'>
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                variants={item}
                initial="hidden" 
                animate="show"
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                {/* 1. Glow Effect Behind Card */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* 2. Glass Card */}
                <div className="relative px-6 py-3 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 text-slate-200 font-semibold transition-all duration-300 cursor-pointer overflow-hidden shadow-lg">
                  
                  <div className="flex items-center gap-2 relative z-10">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`} />
                    <span>{tech.name}</span>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </div>

                {/* 3. Category Label Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <span className="text-[10px] text-slate-400 tracking-wider uppercase bg-slate-900 border border-white/10 px-2 py-1 rounded-md shadow-xl whitespace-nowrap">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900/60 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
            <div className="flex -space-x-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${technologies[i].color} border-2 border-slate-900 ring-2 ring-slate-900/50`}
                ></div>
              ))}
            </div>
            <div className="text-left">
              <span className="block text-white font-bold leading-tight">
                {technologies.length}+ Technologies
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wide">
                Mastered & Deployed
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default TechStack;