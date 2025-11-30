import React, { useRef, useEffect, useState } from 'react';
import { Brain, Smartphone, Globe, Cpu, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import Threads from './Threads';

const services = [
  {
    icon: Brain,
    title: 'AI & LLMs',
    description: 'Custom Large Language Models and AI agents that automate complex business workflows.',
    glowColor: 'bg-blue-500',
    delay: 0
  },
  {
    icon: Cpu,
    title: 'Microcontrollers',
    description: 'Smart hardware solutions integrating ESP32, Arduino, and custom PCBs.',
    glowColor: 'bg-purple-500',
    delay: 100
  },
  {
    icon: Database,
    title: 'AI-Based ERP',
    description: 'Next-gen Enterprise Resource Planning systems powered by artificial intelligence.',
    glowColor: 'bg-pink-500',
    delay: 200
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    glowColor: 'bg-red-500',
    delay: 300
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications using React, Next.js, and modern frameworks.',
    glowColor: 'bg-orange-500',
    delay: 400
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business revenue models.',
    glowColor: 'bg-yellow-500',
    delay: 500
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 bg-slate-950 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      
      {/* 1. Threads Animation Layer */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Threads 
          amplitude={1} 
          distance={5} 
          speed={0.2} 
          lineCount={40} 
          color="#94a3b8" 
          frequency={0.5}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER (Specific Request) --- */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-100">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 via-red-500 to-orange-500">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We combine cutting-edge technology with industry expertise to deliver comprehensive solutions that drive growth.
          </p>
        </div>

        {/* --- CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative h-full min-h-[320px] rounded-[32px] 
                bg-[#0B0F19] /* Dark Matte Background */
                border border-white/[0.08]
                overflow-hidden transition-all duration-500
                hover:border-white/[0.15] hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              
              {/* Card Lighting Effects */}
              {/* 1. Top Spotlight Line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
              
              {/* 2. Soft Colored Glow (Aurora Effect) */}
              <div 
                className={`
                  absolute -top-20 -right-20 w-80 h-80 rounded-full 
                  ${service.glowColor} 
                  opacity-[0.15] blur-[80px] group-hover:opacity-25 transition-opacity duration-700
                `} 
              />
              
              {/* Card Content */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                
                {/* Icon & Title Group */}
                <div>
                  <div className="mb-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-colors">
                    <service.icon className="w-6 h-6 text-slate-200" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-100 tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-6 flex items-center gap-2 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;