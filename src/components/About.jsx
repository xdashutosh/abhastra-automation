import React, { useRef, useState, useEffect } from 'react';
import { CheckCircle, Cpu, Globe, Zap, Layers, ArrowRight } from 'lucide-react';

// -----------------------------------------------------------------------------
// REUSABLE HOOK
// -----------------------------------------------------------------------------
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isVisible];
};

const About = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  const features = [
    { text: "End-to-End Automation", icon: Zap },
    { text: "Custom AI Model Training", icon: Cpu },
    { text: "Hardware Integration", icon: Layers },
    { text: "Scalable Cloud Architecture", icon: Globe }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 bg-slate-950 relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      
      {/* --- BACKGROUND (Consistent Dark Theme) --- */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      
      {/* Faint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Atmospheric Blobs (Desaturated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-800/10 rounded-full blur-[100px] animate-pulse-slow will-change-transform" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000 will-change-transform" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: THE MAIN CARD (Matte Style) --- */}
          <div className={`lg:w-1/2 w-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              
              {/* Card Container */}
              <div 
                className="
                  relative overflow-hidden rounded-[32px] 
                  bg-[#0B0F19] /* Dark Matte */
                  border border-white/[0.08] 
                  p-8 md:p-10 
                  transition-all duration-300
                  hover:border-white/[0.15]
                "
              >
                {/* 1. Top Spotlight Line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
                
                {/* 2. Aurora Glow Blob (Blue/Cyan) */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-block mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                      <h3 className="text-2xl font-bold text-slate-100 tracking-wide">
                        Why Choose Abhastra?
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    At Abhastra Automation, we don't just build software; we <span className="text-slate-200 font-semibold">engineer the future</span>. 
                    Our unique approach combines deep expertise in:
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Artificial Intelligence', 'Embedded Systems', 'Modern Web'].map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Feature List */}
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300 group/item cursor-default"
                      >
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-colors">
                          <feature.icon className="w-5 h-5 text-slate-400 group-hover/item:text-blue-400" />
                        </div>
                        <span className="text-sm md:text-base font-medium text-slate-300 group-hover/item:text-slate-200 transition-colors">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT & STATS --- */}
          <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-100 leading-tight tracking-tight">
              Bridging the Gap <br /> Between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-text bg-[length:200%_auto]">
                Hardware & AI
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg border-l-2 border-slate-800 pl-6">
              We stand at the intersection of physical and digital worlds. From microcontrollers that sense the environment 
              to Large Language Models that understand it.
            </p>

            {/* Stats Grid - Matte Style */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { val: "50+", label: "Projects", gradient: "from-blue-400 to-cyan-400" },
                { val: "100%", label: "Satisfaction", gradient: "from-purple-400 to-pink-400" },
                { val: "24/7", label: "Support", gradient: "from-pink-400 to-orange-400" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="
                    relative group p-5 md:p-6 rounded-[24px] 
                    bg-[#0B0F19] border border-white/[0.08] 
                    hover:border-white/[0.15] transition-all text-center overflow-hidden
                    hover:-translate-y-1
                  "
                >
                  {/* Top Highlight */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <h4 className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                    {stat.val}
                  </h4>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Link Button */}
            <div className={`mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <button className="group text-sm font-semibold text-slate-300 flex items-center gap-2 hover:text-white transition-colors">
                Discover Our Process 
                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-gradient-text {
          animation: gradient-x 5s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;