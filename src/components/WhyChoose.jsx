import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Zap, Shield, Users, TrendingUp, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

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
// 2. EARTH COMPONENT (Unchanged - Optimized)
// -----------------------------------------------------------------------------
const EarthContent = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const [colorMap, cloudsMap] = useTexture([
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Blank_Map_of_The_World_Equirectangular_Projection.png',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Blank_Map_of_The_World_Equirectangular_Projection.png',
  ]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = time / 15;
    if (cloudsRef.current) cloudsRef.current.rotation.y = time / 12;
  });

  return (
    <group scale={[2.5, 2.5, 2.5]}> 
      <ambientLight intensity={0.2} color="#4c1d95" />
      <directionalLight position={[5, 3, 5]} intensity={3} color="#c4b5fd" />
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} /> 
        <meshPhongMaterial map={colorMap} specular={new THREE.Color('#333')} shininess={15} color="#64748b" />
      </mesh>
      <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={cloudsMap} transparent={true} opacity={0.4} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
    </group>
  );
};

// -----------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -----------------------------------------------------------------------------

const reasons = [
  { 
    icon: Zap, 
    title: 'Lightning-Fast', 
    description: 'Cuts implementation time by 60%, getting your solutions to market faster with pre-built agents.', 
    glowColor: 'bg-blue-500', 
    span: 'md:col-span-2', // Wide card
    delay: 0 
  },
  { 
    icon: Shield, 
    title: 'Enterprise Security', 
    description: 'SOC2 compliant architecture protecting your data.', 
    glowColor: 'bg-purple-500', 
    span: 'md:col-span-1', // Standard card
    delay: 100 
  },
  { 
    icon: Users, 
    title: 'Expert Team', 
    description: 'Direct access to seasoned AI engineers.', 
    glowColor: 'bg-pink-500', 
    span: 'md:col-span-1', // Standard card
    delay: 200 
  },
  { 
    icon: TrendingUp, 
    title: 'Proven ROI', 
    description: 'Clients see an average 300% ROI within the first year of automation implementation.', 
    glowColor: 'bg-red-500', 
    span: 'md:col-span-2', // Wide card
    delay: 300 
  },
  { 
    icon: Award, 
    title: 'Award-Winning', 
    description: 'Recognized for excellence in AI research.', 
    glowColor: 'bg-orange-500', 
    span: 'md:col-span-2', // Wide card
    delay: 400 
  },
  { 
    icon: Sparkles, 
    title: 'Future-Proof', 
    description: 'Scalable solutions that adapt.', 
    glowColor: 'bg-emerald-500', 
    span: 'md:col-span-1', // Standard card
    delay: 500 
  },
];

const WhyChoose = () => {
  const [headerRef, headerVisible] = useOnScreen({ threshold: 0.1 });
  const [gridRef, gridVisible] = useOnScreen({ threshold: 0.1 });
  const [bottomRef, bottomVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Abhastra?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We don't just deliver projects—we build partnerships that transform your business through intelligent automation.
          </p>
        </div>

        {/* --- COLLAGE / BENTO GRID --- */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
        >
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.span} 
                group relative min-h-[280px] rounded-[32px] 
                bg-[#0B0F19] /* Dark Matte Background */
                border border-white/[0.08]
                overflow-hidden transition-all duration-500
                hover:border-white/[0.15] hover:-translate-y-1
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              
              {/* 1. Top Spotlight Line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
              
              {/* 2. Aurora Glow Effect */}
              <div 
                className={`
                  absolute -top-20 -right-20 w-80 h-80 rounded-full 
                  ${item.glowColor} 
                  opacity-[0.15] blur-[80px] group-hover:opacity-25 transition-opacity duration-700
                `} 
              />

              {/* 3. Card Content */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <div>
                  {/* Icon Circle */}
                  <div className="mb-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-colors">
                    <item.icon className="w-6 h-6 text-slate-200" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-100 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Link (Optional decorative element for consistency) */}
                <div className="pt-6 flex justify-end">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- EARTH & TRUST SECTION --- */}
        <div ref={bottomRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: 3D Earth */}
          <div className={`relative h-[300px] md:h-[500px] w-full transition-all duration-1000 delay-200 ${bottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
            
            <Canvas dpr={1} camera={{ position: [0, 0, 7], fov: 45 }} className="touch-none">
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} rotateSpeed={0.4} />
                <EarthContent />
              </Suspense>
            </Canvas>
          </div>

          {/* Right: Text Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${bottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
                Trusted by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Industry Leaders</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                From startups to Fortune 500 companies, businesses worldwide trust Abhastra Automation to deliver mission-critical AI solutions.
              </p>
            </div>

            {/* Stats Boxes (Matching the Card UI style) */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
               <div className="p-6 rounded-[24px] bg-[#0B0F19] border border-white/[0.08] relative overflow-hidden group">
                 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                 <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</div>
                 <div className="text-sm font-medium text-slate-400">Enterprise Projects</div>
               </div>
               
               <div className="p-6 rounded-[24px] bg-[#0B0F19] border border-white/[0.08] relative overflow-hidden group">
                 <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
                 <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">100%</div>
                 <div className="text-sm font-medium text-slate-400">Client Satisfaction</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Preload texture
useTexture.preload('https://upload.wikimedia.org/wikipedia/commons/6/6b/Blank_Map_of_The_World_Equirectangular_Projection.png');

export default WhyChoose;