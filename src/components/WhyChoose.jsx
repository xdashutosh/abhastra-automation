import React, { useRef, useState, useEffect } from 'react';
import { Zap, Shield, Users, TrendingUp, Award, Sparkles, ArrowRight, Plus } from 'lucide-react';

// -----------------------------------------------------------------------------
// 1. UTILS
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

// -----------------------------------------------------------------------------
// 2. DATA CYCLE GRAPHIC (Center Visual)
// -----------------------------------------------------------------------------
const DataCycleGraphic = () => {
  return (
    <div className="relative w-full max-w-[320px] md:max-w-[500px] aspect-square flex items-center justify-center mx-auto">
      <div className="relative w-full h-full p-4 md:p-8">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Ring */}
          <circle cx="200" cy="200" r="190" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />

          {/* Rotating Orbits */}
          <g className="animate-spin-very-slow origin-center">
            {[0, 60, 120].map((angle, i) => (
              <ellipse 
                key={i}
                cx="200" cy="200" rx="80" ry="150" 
                fill="none" 
                stroke="url(#orbit-gradient)" 
                strokeWidth="2"
                transform={`rotate(${angle} 200 200)`}
                className="opacity-80"
              />
            ))}
          </g>

          {/* Moving Particle */}
          <path 
            id="motionPath" 
            d="M200,50 A80,150 0 1,0 200,350 A80,150 0 1,0 200,50" 
            fill="none" 
            stroke="none" 
            transform="rotate(60 200 200)"
          />
          <circle r="6" fill="#fff" className="filter drop-shadow-[0_0_8px_rgba(139,92,246,1)]">
            <animateMotion dur="6s" repeatCount="indefinite">
              <mpath href="#motionPath" />
            </animateMotion>
          </circle>

          {/* Center Glow */}
          <circle cx="200" cy="200" r="60" fill="url(#center-glow)" className="animate-pulse-slow" />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
              AI<br/>CORE
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 md:-translate-y-2 flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-mono text-slate-500 mb-1">01</span>
          <span className="text-xs md:text-sm font-medium text-slate-300 bg-[#020617] px-2 py-1 rounded border border-white/10">Input</span>
        </div>
        <div className="absolute top-1/2 right-0 translate-x-3 md:translate-x-4 -translate-y-1/2 flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-mono text-slate-500 mb-1">02</span>
          <span className="text-xs md:text-sm font-medium text-slate-300 bg-[#020617] px-2 py-1 rounded border border-white/10">Process</span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 md:translate-y-2 flex flex-col items-center">
          <span className="text-xs md:text-sm font-medium text-slate-300 bg-[#020617] px-2 py-1 rounded border border-white/10">Secure</span>
          <span className="text-[10px] md:text-xs font-mono text-slate-500 mt-1">03</span>
        </div>
        <div className="absolute top-1/2 left-0 -translate-x-3 md:-translate-x-4 -translate-y-1/2 flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-mono text-slate-500 mb-1">04</span>
          <span className="text-xs md:text-sm font-medium text-slate-300 bg-[#020617] px-2 py-1 rounded border border-white/10">Output</span>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// 3. UI COMPONENTS (NETWORK DESIGN)
// -----------------------------------------------------------------------------

/**
 * FeatureNode
 * Glows exactly when the electric bolt arrives (at 40% of the animation cycle).
 */
const FeatureNode = ({ item, align = 'left', delay }) => {
  return (
    <div 
      className="group relative flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-white/10 bg-[#0B0F19] hover:bg-[#131b2e] hover:border-blue-500/50 transition-all duration-300 w-full md:max-w-sm z-20 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] animate-node-pulse"
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: '4000ms' // Must match the line animation duration
      }}
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.glowColor} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-200 z-10" />
      </div>

      <div className="flex-grow min-w-0">
        <h4 className="text-slate-100 font-semibold text-base md:text-lg tracking-wide truncate group-hover:text-blue-400 transition-colors">
          {item.title}
        </h4>
        <p className="text-slate-500 text-[10px] md:text-xs mt-1 truncate group-hover:text-slate-300 group-hover:whitespace-normal transition-all duration-300 h-4 group-hover:h-auto overflow-hidden">
          {item.description}
        </p>
      </div>

      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded bg-[#1e293b] flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Plus className="w-3 h-3 md:w-4 md:h-4" />
      </div>

      {/* Connection Point */}
      <div 
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-blue-400 group-hover:bg-blue-900 transition-colors z-30
        ${align === 'left' ? '-right-[7px]' : '-left-[7px]'}
        `}
      />
    </div>
  );
};

/**
 * ConnectionLine
 * The bolt travels from 0% to 40% of the cycle, matching the card's trigger time.
 */
const ConnectionLine = ({ startX, startY, endX, endY, delay }) => {
  const midX = (startX + endX) / 2;
  const path = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

  return (
    <>
      {/* Base Path (dimmed) */}
      <path d={path} fill="none" stroke="#1e293b" strokeWidth="2" />
      
      {/* Electric Bolt */}
      <path 
        d={path} 
        fill="none" 
        stroke="url(#electric-gradient)" 
        strokeWidth="3" 
        strokeLinecap="round"
        // Dasharray: 50px bolt, 1000px gap.
        strokeDasharray="50 1000" 
        strokeDashoffset="50"
        className="animate-electric-flow"
        style={{ 
          animationDelay: `${delay}ms`,
          animationDuration: '4000ms' // Slowed down duration
        }}
      />
    </>
  );
};

const IntegrationMap = ({ items }) => {
  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);

  // Stagger delays (ms). 
  // We use the same delay for Line and Node so they are phase-locked.
  const leftDelays = [0, 1400, 2800];
  const rightDelays = [850, 2150, 3450];

  return (
    <div className="relative w-full max-w-6xl mx-auto h-auto min-h-[auto] md:min-h-[600px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 my-5 md:my-10">
      
      {/* SVG Background */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <defs>
            {/* The bolt color */}
            <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Lines to Left Nodes */}
          {leftDelays.map((delay, i) => (
             <ConnectionLine key={`l-${i}`} startX={500} startY={300} endX={280} endY={100 + (i * 200)} delay={delay} />
          ))}

          {/* Lines to Right Nodes */}
          {rightDelays.map((delay, i) => (
             <ConnectionLine key={`r-${i}`} startX={500} startY={300} endX={720} endY={100 + (i * 200)} delay={delay} />
          ))}

        </svg>
      </div>

      {/* Left Column */}
      <div className="flex flex-col gap-4 md:gap-24 w-full md:w-1/3 items-center md:items-end md:pr-12 relative z-10">
        {leftItems.map((item, idx) => (
          <FeatureNode key={idx} item={item} align="left" delay={leftDelays[idx]} />
        ))}
      </div>

      {/* Central Hub */}
      <div className="relative z-20 flex-shrink-0 my-4 md:my-0">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-50" />
            <div className="relative z-10 text-center">
                <span className="block text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white pb-1">a</span>
            </div>
            <div className="absolute inset-0 rounded-full border-t border-l border-blue-500/50 animate-spin-slow" />
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-slate-400 text-xs md:text-sm font-medium tracking-widest uppercase">
            Unified Core
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 md:gap-24 w-full md:w-1/3 items-center md:items-start md:pl-12 relative z-10">
        {rightItems.map((item, idx) => (
          <FeatureNode key={idx} item={item} align="right" delay={rightDelays[idx]} />
        ))}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// 4. MAIN PAGE
// -----------------------------------------------------------------------------

const reasons = [
  { icon: Zap, title: 'Lightning-Fast', description: 'Cuts implementation time by 60%, getting your solutions to market faster.', glowColor: 'from-blue-500 to-cyan-500' },
  { icon: Shield, title: 'Enterprise Security', description: 'SOC2 compliant architecture protecting your data.', glowColor: 'from-purple-500 to-indigo-500' },
  { icon: Users, title: 'Expert Team', description: 'Direct access to seasoned AI engineers.', glowColor: 'from-pink-500 to-rose-500' },
  { icon: TrendingUp, title: 'Proven ROI', description: 'Clients see an average 300% ROI within the first year.', glowColor: 'from-orange-500 to-red-500' },
  { icon: Award, title: 'Award-Winning', description: 'Recognized for excellence in AI research.', glowColor: 'from-emerald-500 to-teal-500' },
  { icon: Sparkles, title: 'Future-Proof', description: 'Scalable solutions that adapt.', glowColor: 'from-cyan-500 to-blue-500' },
];

const WhyChoose = () => {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.1 });
  const [bottomRef, bottomVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="relative py-6 md:py-12 bg-[#020617] overflow-hidden">
      
      <style jsx global>{`
        /* 
         * 1. ELECTRIC FLOW 
         * Moves a dash (bolt) from start to end during 0% -> 40% of the timeline.
         * The -600 stroke-dashoffset ensures it travels fully across typical path lengths.
         */
        @keyframes electric-flow {
          0% {
            stroke-dashoffset: 50; /* Start hidden before path */
            opacity: 0;
          }
          1% {
            opacity: 1; /* Appear immediately */
          }
          40% {
            stroke-dashoffset: -600; /* Reach the end */
            opacity: 1;
          }
          41% {
            opacity: 0; /* Hide immediately after reaching end */
          }
          100% {
            stroke-dashoffset: -600;
            opacity: 0; /* Stay hidden for the rest of the loop */
          }
        }
        
        .animate-electric-flow {
          animation-name: electric-flow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* 
         * 2. NODE IMPACT
         * The card stays dim until 40% (exactly when the bolt arrives).
         * Then it flashes and fades out.
         */
        @keyframes node-pulse {
          0%, 39% {
            box-shadow: none;
            border-color: rgba(255, 255, 255, 0.1);
            background-color: #0B0F19;
            transform: scale(1);
          }
          40% {
            /* IMPACT HIT */
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.1);
            border-color: rgba(96, 165, 250, 0.8);
            background-color: #172033;
            transform: scale(1.02);
          }
          60% {
            /* FADE OUT */
            box-shadow: none;
            border-color: rgba(255, 255, 255, 0.1);
            background-color: #0B0F19;
            transform: scale(1);
          }
          100% {
            box-shadow: none;
          }
        }
        
        .animate-node-pulse {
          animation-name: node-pulse;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-spin-very-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div 
          ref={headerRef}
          className={`text-center mb-4 transition-all duration-1000 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            Ecosystem
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-100">
            One Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">AI Space</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Abhastra connects powerful automated agents into a single, cohesive workflow.
          </p>
        </div>

        {/* --- CENTRAL NETWORK UI --- */}
        <div className={`transition-opacity duration-1000 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
          <IntegrationMap items={reasons} />
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div ref={bottomRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-10 md:mt-12 pt-6 md:pt-10">
          
          {/* Left: Text Content */}
          <div className={`space-y-6 md:space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-200 ${bottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            
            <div className="absolute -left-20 top-0 w-40 h-40 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:8px_8px] opacity-20 pointer-events-none hidden lg:block" />

            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 md:mb-6">
                Trusted by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Industry Leaders</span>
              </h3>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed border-l-2 border-white/10 pl-4 md:pl-6">
                 From startups to Fortune 500 companies, businesses worldwide trust Abhastra Automation to deliver mission-critical AI solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
               <div className="p-5 md:p-6 rounded-[24px] bg-[#0B0F19] border border-white/[0.08] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">50+</div>
                 <div className="text-xs md:text-sm font-medium text-slate-400">Enterprise Projects</div>
               </div>
               
               <div className="p-5 md:p-6 rounded-[24px] bg-[#0B0F19] border border-white/[0.08] relative overflow-hidden group hover:border-pink-500/30 transition-colors">
                 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 md:mb-2">100%</div>
                 <div className="text-xs md:text-sm font-medium text-slate-400">Client Satisfaction</div>
               </div>
            </div>

            <div className="flex items-center gap-2 text-blue-400 font-medium cursor-pointer hover:text-blue-300 transition-colors group">
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>

          </div>

          {/* Right: Graphic */}
          <div className={`order-1 lg:order-2 flex justify-center w-full transition-all duration-1000 delay-300 ${bottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
             <DataCycleGraphic />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;