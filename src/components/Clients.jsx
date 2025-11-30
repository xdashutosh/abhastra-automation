import React, { useRef, useState, useEffect } from 'react';

const clients = [
  { name: 'TechVision', logo: null, text: 'TV', industry: 'AI & Analytics', color: 'from-blue-600 to-indigo-600' },
  { name: 'FinanceFlow', logo: null, text: 'FF', industry: 'FinTech', color: 'from-emerald-600 to-teal-600' },
  { name: 'HealthSync', logo: null, text: 'HS', industry: 'Healthcare Tech', color: 'from-cyan-600 to-blue-600' },
  { name: 'RetailPro', text: 'RP', industry: 'E-commerce', color: 'from-blue-600 to-purple-600' },
  { name: 'AutoMate', text: 'AM', industry: 'Manufacturing', color: 'from-purple-600 to-pink-600' },
  { name: 'EduTech', text: 'ET', industry: 'Education', color: 'from-pink-600 to-rose-600' },
  { name: 'CloudScale', text: 'CS', industry: 'Cloud Services', color: 'from-rose-600 to-orange-600' },
  { name: 'DataDrive', text: 'DD', industry: 'Analytics', color: 'from-orange-600 to-amber-600' },
];

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

const Clients = () => {
  // Create 3 copies for seamless infinite scroll on wide screens
  const infiniteClients = [...clients, ...clients, ...clients];
  
  const [headerRef, isHeaderVisible] = useOnScreen({ threshold: 0.1 });
  const [statsRef, isStatsVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden min-h-[800px] flex flex-col justify-center">
      
      {/* --- BACKGROUND (Darkened & Desaturated) --- */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      
      {/* Subtle Moving Blobs - Opacity reduced to 5% to avoid "Blue" look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-slate-800/5 rounded-full blur-[100px] animate-drift-slow will-change-transform" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] bg-purple-900/5 rounded-full blur-[100px] animate-drift-slow animation-delay-2000 will-change-transform" />
      </div>

      {/* Tiny Stars (White/Gray only) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-twinkle" />
        <div className="absolute top-40 right-1/4 w-1 h-1 bg-slate-400 rounded-full animate-twinkle animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-twinkle animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block mb-4">
             {/* Tag style matching previous dark theme */}
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
               Global Partnerships
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-100">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Valuable Clients</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across the globe to deliver mission-critical solutions.
          </p>
        </div>

        {/* Stats Grid - Matte Dark Style */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 max-w-5xl mx-auto transition-all duration-1000 delay-200 ease-out ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[
            { label: 'Happy Clients', value: '50+', gradient: 'from-blue-400 to-indigo-400' },
            { label: 'Industries', value: '15+', gradient: 'from-purple-400 to-pink-400' },
            { label: 'Retention', value: '98%', gradient: 'from-pink-400 to-orange-400' },
            { label: 'Support', value: '24/7', gradient: 'from-orange-400 to-yellow-400' }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-[20px] bg-[#0B0F19] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 text-center relative overflow-hidden"
            >
              {/* Top Highlight Line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
              
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative mb-8">
          {/* Gradient Edges - Fading to Slate-950 */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden py-4 flex">
            <div className="flex gap-6 md:gap-8 animate-infinite-scroll w-max hover:paused">
              {infiniteClients.map((client, index) => (
                <div
                  key={`${index}-${client.name}`}
                  className="
                    flex-shrink-0 w-64 h-48 relative group
                    bg-[#0B0F19] /* Dark Matte Background */
                    border border-white/[0.08] rounded-[24px]
                    hover:border-white/[0.15] hover:-translate-y-1
                    transition-all duration-300
                    flex flex-col items-center justify-center p-6
                    overflow-hidden
                  "
                >
                  {/* Aurora Glow (Hidden by default, visible on hover) */}
                  <div 
                     className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 blur-[40px] transition-opacity duration-500`} 
                  />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-14 w-auto object-contain mb-4 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    ) : (
                      <div className="mb-4 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <span className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">{client.text}</span>
                      </div>
                    )}
                    
                    <h3 className="text-lg font-bold text-slate-200 text-center mb-1 group-hover:text-white transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-semibold group-hover:text-slate-400 transition-colors">
                      {client.industry}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drift-slow {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-drift-slow {
          animation: drift-slow 20s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 5s ease-in-out infinite;
        }
        .animate-infinite-scroll {
          animation: scroll 60s linear infinite;
        }
        .hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;