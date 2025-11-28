import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Smartphone, Globe, Cpu, Database, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & LLMs',
    description: 'Custom Large Language Models and AI agents that automate complex business workflows.',
    color: 'text-blue-600',
    bgGradient: 'from-blue-500/10 to-purple-500/10'
  },
  {
    icon: Cpu,
    title: 'Microcontrollers & IoT',
    description: 'Smart hardware solutions integrating ESP32, Arduino, and custom PCBs for automation.',
    color: 'text-purple-600',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: Database,
    title: 'AI-Based ERP',
    description: 'Next-gen Enterprise Resource Planning systems powered by artificial intelligence.',
    color: 'text-pink-600',
    bgGradient: 'from-pink-500/10 to-red-500/10'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'text-red-600',
    bgGradient: 'from-red-500/10 to-orange-500/10'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications using React, Next.js, and modern frameworks.',
    color: 'text-orange-600',
    bgGradient: 'from-orange-500/10 to-yellow-500/10'
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business revenue models.',
    color: 'text-yellow-600',
    bgGradient: 'from-yellow-500/10 to-blue-500/10'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative bg-gradient-to-br from-blue-50/50 via-purple-50/50 via-pink-50/50 to-orange-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-600">Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We combine cutting-edge technology with industry expertise to deliver comprehensive solutions that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
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