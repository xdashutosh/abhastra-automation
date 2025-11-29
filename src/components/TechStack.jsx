import React, { useState } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', category: 'Frontend', color: 'from-slate-800 to-slate-600' },
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob will-change-transform"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 will-change-transform"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 will-change-transform"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
              Our Technology Arsenal
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Powered by Modern Tech
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge tools and frameworks to build scalable, robust solutions across all platforms.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
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
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={item}
              layout
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>
              <div className="relative px-6 py-3 rounded-2xl bg-white border-2 border-slate-200 hover:border-transparent text-slate-700 font-semibold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl">
                <span className="relative z-10">{tech.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full border border-slate-200">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${technologies[i].color} border-2 border-white`}
                ></div>
              ))}
            </div>
            <span className="text-slate-700 font-semibold">
              {technologies.length}+ Technologies
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-600">Endless Possibilities</span>
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
          animation: blob 7s infinite;
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