import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Cpu, Globe, Zap, Layers } from 'lucide-react';

const About = () => {
  const features = [
    { text: "End-to-End Automation", icon: Zap },
    { text: "Custom AI Model Training", icon: Cpu },
    { text: "Hardware-Software Integration", icon: Layers },
    { text: "Scalable Cloud Architecture", icon: Globe }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: HOLOGRAPHIC CARD --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative group">
              {/* Back Glow Layer */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition duration-1000" />
              
              {/* The Card */}
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden shadow-2xl">
                
                {/* Decorative sheen */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                  Why Choose Abhastra?
                </h3>
                
                <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                  At Abhastra Automation, we don't just build software; we <span className="text-white font-semibold">engineer the future</span>. 
                  Our unique approach combines deep expertise in:
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Artificial Intelligence', 'Embedded Systems', 'Modern Web'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Feature List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300 group/item"
                    >
                      <div className="p-2 rounded-lg bg-slate-800 group-hover/item:bg-blue-500/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-blue-400 group-hover/item:text-blue-300" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-slate-300 group-hover/item:text-white transition-colors">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT & STATS --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Bridging the Gap <br /> Between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                Hardware & AI
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg border-l-2 border-blue-500/30 pl-6">
              We stand at the intersection of physical and digital worlds. From microcontrollers that sense the environment 
              to Large Language Models that understand it, we build the complete ecosystem for intelligent automation.
            </p>

            {/* Modular Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { val: "50+", label: "Projects", color: "from-cyan-400 to-blue-400" },
                { val: "100%", label: "Satisfaction", color: "from-blue-400 to-purple-400" },
                { val: "24/7", label: "Support", color: "from-purple-400 to-pink-400" }
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-sm group-hover:blur-md transition-all" />
                  <div className="relative p-4 md:p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-sm hover:bg-slate-800/40 transition-all text-center">
                    <h4 className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.val}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider group-hover:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional: "Learn More" Link */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <button className="text-sm font-semibold text-white flex items-center gap-2 hover:gap-4 transition-all">
                Discover Our Process <span className="text-blue-400">→</span>
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </section>
  );
};

export default About;