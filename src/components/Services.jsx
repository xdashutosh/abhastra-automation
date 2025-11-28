import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Smartphone, Globe, Cpu, Database, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & LLMs',
    description: 'Custom Large Language Models and AI agents that automate complex business workflows.',
    color: 'text-primary'
  },
  {
    icon: Cpu,
    title: 'Microcontrollers & IoT',
    description: 'Smart hardware solutions integrating ESP32, Arduino, and custom PCBs for automation.',
    color: 'text-secondary'
  },
  {
    icon: Database,
    title: 'AI-Based ERP',
    description: 'Next-gen Enterprise Resource Planning systems powered by artificial intelligence.',
    color: 'text-pink-500'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'text-green-400'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications using React, Next.js, and modern frameworks.',
    color: 'text-blue-400'
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business revenue models.',
    color: 'text-yellow-400'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span></h2>
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
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
