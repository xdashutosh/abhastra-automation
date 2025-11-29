import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Smartphone, Globe, Cpu, Database, ShieldCheck } from 'lucide-react';
import Threads from './Threads';

const services = [
  {
    icon: Brain,
    title: 'AI & LLMs',
    description: 'Custom Large Language Models and AI agents that automate complex business workflows.',
    color: 'text-blue-400', 
    glow: 'group-hover:shadow-blue-500/50',
    iconBg: 'bg-blue-500/20'
  },
  {
    icon: Cpu,
    title: 'Microcontrollers & IoT',
    description: 'Smart hardware solutions integrating ESP32, Arduino, and custom PCBs for automation.',
    color: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/50',
    iconBg: 'bg-purple-500/20'
  },
  {
    icon: Database,
    title: 'AI-Based ERP',
    description: 'Next-gen Enterprise Resource Planning systems powered by artificial intelligence.',
    color: 'text-pink-400',
    glow: 'group-hover:shadow-pink-500/50',
    iconBg: 'bg-pink-500/20'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'text-red-400',
    glow: 'group-hover:shadow-red-500/50',
    iconBg: 'bg-red-500/20'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications using React, Next.js, and modern frameworks.',
    color: 'text-orange-400',
    glow: 'group-hover:shadow-orange-500/50',
    iconBg: 'bg-orange-500/20'
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business revenue models.',
    color: 'text-yellow-400',
    glow: 'group-hover:shadow-yellow-500/50',
    iconBg: 'bg-yellow-500/20'
  }
];

const Services = () => {
  return (
    // CHANGED: bg-black -> bg-slate-950
    <section id="services" className="relative py-20 bg-slate-950 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* 1. Threads Animation Layer */}
      <div className="absolute inset-0 z-0">
        <Threads 
          amplitude={2.5} 
          distance={2} 
          speed={0.4} 
          lineCount={70} 
          color="#ffffff" // White threads contrast nicely with Slate-950
          frequency={0.8}
        />
      </div>

      {/* Optional: Radial gradient to ensure text readability if threads are too bright */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)] pointer-events-none" />

      {/* 2. Content Layer */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-slate-100"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 via-red-500 to-orange-500">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            We combine cutting-edge technology with industry expertise to deliver comprehensive solutions that drive growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Background: Changed from neutral-900 to slate-900 to match theme */}
              <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors shadow-lg" />
              
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.color.replace('text-', 'from-')} to-transparent`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/5`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                {/* Changed text-white to text-slate-100 for consistency */}
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;