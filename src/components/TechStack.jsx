import React, { useState, useEffect, useRef } from 'react';

const technologies = [
  { name: 'React', category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
  { name: 'Next.js', category: 'Frontend', color: 'from-slate-600 to-slate-400' },
  { name: 'Node.js', category: 'Backend', color: 'from-green-600 to-green-400' },
  { name: 'Python', category: 'AI & Backend', color: 'from-blue-500 to-yellow-400' },
  { name: 'TensorFlow', category: 'AI & ML', color: 'from-orange-500 to-orange-400' },
  { name: 'PyTorch', category: 'AI & ML', color: 'from-red-500 to-orange-500' },
  { name: 'React Native', category: 'Mobile', color: 'from-cyan-400 to-blue-400' },
  { name: 'Flutter', category: 'Mobile', color: 'from-blue-400 to-cyan-300' },
  { name: 'Swift', category: 'iOS', color: 'from-orange-500 to-red-500' },
  { name: 'Kotlin', category: 'Android', color: 'from-purple-500 to-pink-500' },
  { name: '.NET', category: 'Windows', color: 'from-purple-600 to-blue-600' },
  { name: 'C#', category: 'Windows', color: 'from-purple-700 to-purple-500' },
  { name: 'WPF', category: 'Windows', color: 'from-indigo-600 to-purple-600' },
  { name: 'Java', category: 'Enterprise', color: 'from-red-600 to-orange-600' },
  { name: 'C++', category: 'Legacy', color: 'from-blue-600 to-blue-800' },
  { name: 'ESP32', category: 'Hardware', color: 'from-red-500 to-pink-500' },
  { name: 'Arduino', category: 'Hardware', color: 'from-teal-500 to-cyan-500' },
  { name: 'Docker', category: 'DevOps', color: 'from-blue-500 to-blue-400' },
  { name: 'Kubernetes', category: 'DevOps', color: 'from-blue-600 to-indigo-500' },
  { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-yellow-400' },
  { name: 'Azure', category: 'Cloud', color: 'from-blue-500 to-cyan-400' },
];

const categories = [
  'All', 'Frontend', 'Backend', 'Mobile', 'AI & ML', 
  'Windows', 'Hardware', 'DevOps', 'Cloud', 'Enterprise', 
  'iOS', 'Android', 'Legacy'
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

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sectionRef, isSectionVisible] = useOnScreen({ threshold: 0.1 });
  
  const filteredTechnologies = activeFilter === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden min-h-screen flex flex-col justify-center" ref={sectionRef}>
      
      {/* --- BACKGROUND (Consistent with previous components) --- */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      
      {/* Very faint grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Atmospheric Blobs (Darker/Desaturated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-800/10 rounded-full blur-[100px] animate-blob will-change-transform"></div>
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000 will-change-transform"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-blue-300 backdrop-blur-md">
              Our Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100 tracking-tight">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Modern Tech</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We leverage cutting-edge tools and frameworks to build scalable, robust solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeFilter === category
                  ? 'bg-white/10 text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                  : 'bg-[#0B0F19] text-slate-500 border-white/5 hover:text-slate-300 hover:border-white/10'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto min-h-[300px] content-start">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${activeFilter}`} 
              className="group relative animate-pop-in opacity-0 fill-mode-forwards"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {/* --- MATTE CARD STYLE --- */}
              <div 
                className={`
                  relative px-6 py-4 rounded-xl 
                  bg-[#0B0F19] /* Dark Matte Background */
                  border border-white/[0.08] 
                  text-slate-300 font-semibold 
                  transition-all duration-300 cursor-default overflow-hidden 
                  hover:border-white/[0.15] hover:text-white hover:-translate-y-1 hover:shadow-xl
                `}
              >
                {/* 1. Top Spotlight Line (Consistent with other components) */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
                
                {/* 2. Hover Glow Blob */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                <div className="flex items-center gap-3 relative z-10">
                  {/* Dot indicator */}
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                  <span className="tracking-wide text-sm md:text-base">{tech.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className={`mt-24 text-center transition-all duration-1000 delay-300 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-[#0B0F19] rounded-[24px] border border-white/[0.08] relative overflow-hidden group">
             {/* Footer Spotlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="flex -space-x-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${technologies[i].color} border-4 border-[#0B0F19] flex items-center justify-center`}
                >
                    <div className="w-full h-full bg-black/20" />
                </div>
              ))}
            </div>
            <div className="text-left pl-2">
              <span className="block text-white font-bold leading-tight text-lg">
                {technologies.length}+ Tools
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                Mastered & Deployed
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default TechStack;