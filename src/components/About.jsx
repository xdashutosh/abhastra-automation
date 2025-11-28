import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    "End-to-End Automation",
    "Custom AI Model Training",
    "Hardware-Software Integration",
    "Scalable Cloud Architecture"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-multiply" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-lg" />
              <div className="relative bg-white border border-slate-100 rounded-2xl p-8 overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Why Choose Abhastra?</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  At Abhastra Automation Pvt Ltd, we don't just build software; we engineer the future. 
                  Our unique approach combines deep expertise in <span className="font-semibold text-primary">AI</span>, <span className="font-semibold text-primary">embedded systems</span>, and <span className="font-semibold text-primary">modern web technologies</span> 
                  to create holistic solutions that automate and optimize every aspect of your business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Bridging the Gap Between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Hardware & AI</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We stand at the intersection of physical and digital worlds. From microcontrollers that sense the environment 
              to Large Language Models that understand it, we build the complete ecosystem for intelligent automation.
            </p>
            <div className="flex gap-8">
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-2">50+</h4>
                <p className="text-sm text-slate-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-2">100%</h4>
                <p className="text-sm text-slate-500 font-medium">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-2">24/7</h4>
                <p className="text-sm text-slate-500 font-medium">Support System</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
