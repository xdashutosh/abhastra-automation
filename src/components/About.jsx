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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 via-pink-500/5 to-orange-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 rounded-2xl opacity-20 blur-lg" />
              <div className="relative bg-white border border-slate-100 rounded-2xl p-8 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-[80px]" />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Why Choose Abhastra?</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  At Abhastra Automation Pvt Ltd, we don't just build software; we engineer the future. 
                  Our unique approach combines deep expertise in <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI</span>, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">embedded systems</span>, and <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mr-1">modern web technologies</span> 
                   to create holistic solutions that automate and optimize every aspect of your business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" style={{ fill: 'url(#checkGradient)' }} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                      </svg>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-600">Hardware & AI</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We stand at the intersection of physical and digital worlds. From microcontrollers that sense the environment 
              to Large Language Models that understand it, we build the complete ecosystem for intelligent automation.
            </p>
            <div className="flex gap-8">
              <div className="group">
                <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50+</h4>
                <p className="text-sm text-slate-500 font-medium">Projects Delivered</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</h4>
                <p className="text-sm text-slate-500 font-medium">Client Satisfaction</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</h4>
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