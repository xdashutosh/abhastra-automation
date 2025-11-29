import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'TechVision',
    logo: null, 
    text: 'TV',
    industry: 'AI & Analytics',
    color: 'from-blue-600 to-indigo-600' 
  },
  {
    name: 'FinanceFlow',
    logo: null,
    text: 'FF',
    industry: 'FinTech',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'HealthSync',
    logo: null,
    text: 'HS',
    industry: 'Healthcare Tech',
    color: 'from-cyan-500 to-blue-500'
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
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* --- NEW BACKGROUND START --- */}
      {/* 1. Deep Space Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* 2. Moving Nebulas (Aurora Effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Blue Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-drift-slow" />
        
        {/* Bottom Right Purple Glow */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-drift-slow animation-delay-2000" />
        
        {/* Center Pink Pulse */}
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-pink-900/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow" />
      </div>

      {/* 3. Tiny Stars (CSS Particles) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-twinkle" />
        <div className="absolute top-40 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-twinkle animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-twinkle animation-delay-4000" />
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-400 rounded-full animate-twinkle" />
      </div>
      {/* --- NEW BACKGROUND END --- */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
             <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/20">
               Global Partnerships
             </span>
           </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Valuable Clients</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 max-w-5xl mx-auto"
        >
          {[
            { label: 'Happy Clients', value: '50+', color: 'from-cyan-400 to-blue-400' },
            { label: 'Industries Served', value: '15+', color: 'from-blue-400 to-indigo-400' },
            { label: 'Retention Rate', value: '98%', color: 'from-indigo-400 to-purple-400' },
            { label: 'Support', value: '24/7', color: 'from-purple-400 to-pink-400' }
          ].map((stat, i) => (
            <div key={i} className="text-center group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative mb-24">
          {/* Gradient Edges (Fade to Dark) */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling content */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-44 bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/30 shadow-lg flex flex-col items-center justify-center p-6 group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                >
                  {/* Subtle Glow inside card */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-16 w-auto object-contain mb-4 brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    ) : (
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-white/30`}>
                        <span className="text-2xl font-bold text-white">{client.text}</span>
                      </div>
                    )}
                    
                    <h3 className="text-lg font-bold text-slate-300 text-center mb-1 group-hover:text-white transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs text-slate-600 text-center uppercase tracking-wider group-hover:text-slate-400 transition-colors">
                      {client.industry}
                    </p>
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
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
            
            {/* Spotlight effect behind testimonial */}
            <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center shadow-inner">
                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 font-light italic">
                  "Abhastra Automation transformed our entire operations with their AI-based ERP solution. 
                  The <span className="text-cyan-400 font-semibold">ROI was visible within 3 months</span>, and their support team is exceptional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-slate-900/50">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">John Doe</div>
                    <div className="text-sm text-cyan-400/80 font-mono">CEO, TechVision Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes drift-slow {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        .animate-drift-slow {
          animation: drift-slow 15s ease-in-out infinite alternate;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
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

export default Clients;