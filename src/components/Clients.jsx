import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'TechVision',
    logo: '/Users/mac/.gemini/antigravity/brain/5d03a262-69b6-4b6d-9150-0b81bbb9ba88/tech_company_logo_1_1764317565276.png',
    industry: 'AI & Analytics',
  },
  {
    name: 'FinanceFlow',
    logo: '/Users/mac/.gemini/antigravity/brain/5d03a262-69b6-4b6d-9150-0b81bbb9ba88/tech_company_logo_2_1764317577585.png',
    industry: 'FinTech',
  },
  {
    name: 'HealthSync',
    logo: '/Users/mac/.gemini/antigravity/brain/5d03a262-69b6-4b6d-9150-0b81bbb9ba88/tech_company_logo_3_1764317593020.png',
    industry: 'Healthcare Tech',
  },
  {
    name: 'RetailPro',
    text: 'RP',
    industry: 'E-commerce',
    color: 'from-blue-600 to-purple-600',
  },
  {
    name: 'AutoMate Industries',
    text: 'AMI',
    industry: 'Manufacturing',
    color: 'from-purple-600 to-pink-600',
  },
  {
    name: 'EduTech Global',
    text: 'ETG',
    industry: 'Education',
    color: 'from-pink-600 to-red-600',
  },
  {
    name: 'CloudScale',
    text: 'CS',
    industry: 'Cloud Services',
    color: 'from-red-600 to-orange-600',
  },
  {
    name: 'DataDrive',
    text: 'DD',
    industry: 'Data Analytics',
    color: 'from-orange-600 to-yellow-600',
  },
];

const Clients = () => {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 via-purple-50/30 via-pink-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-600">Valuable Clients</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across the globe. We're proud to partner with innovative companies 
            that are shaping the future of their industries.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">50+</div>
            <div className="text-sm text-slate-600">Happy Clients</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
            <div className="text-sm text-slate-600">Industries Served</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-sm text-slate-600">Retention Rate</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-sm text-slate-600">Support</div>
          </div>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling content */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1920], // Adjust based on content width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-40 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center p-6 group hover:border-purple-500/50 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-16 w-auto object-contain mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-bold text-white">{client.text}</span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-slate-900 text-center mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all">
                      {client.name}
                    </h3>
                    <p className="text-xs text-slate-500 text-center">{client.industry}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonial highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            
            <div className="relative z-10 flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12" fill="url(#quoteGradient)" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.2 }} />
                      <stop offset="50%" style={{ stopColor: '#9333ea', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.2 }} />
                    </linearGradient>
                  </defs>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic">
                  "Abhastra Automation transformed our entire operations with their AI-based ERP solution. 
                  The ROI was visible within 3 months, and their support team is exceptional. 
                  Highly recommended for any business looking to scale with automation."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 via-pink-600 to-orange-600 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">John Doe</div>
                    <div className="text-sm text-slate-500">CEO, TechVision Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;