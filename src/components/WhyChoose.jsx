import React, { useRef, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Users, TrendingUp, Award, Sparkles, Cpu, Brain, Network, Database } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

// -----------------------------------------------------------------------------
// 1. REALISTIC EARTH COMPONENT (Responsive)
// -----------------------------------------------------------------------------
const EarthContent = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const [scale, setScale] = useState(2.5);

  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Blank_Map_of_The_World_Equirectangular_Projection.png',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Blank_Map_of_The_World_Equirectangular_Projection.png',
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setScale(1.8);
      else setScale(2.5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = elapsedTime / 15;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsedTime / 12;
  });

  return (
    <group>
      <ambientLight intensity={0.2} color="#4c1d95" />
      <directionalLight position={[5, 3, 5]} intensity={3} color="#c4b5fd" />
      <pointLight position={[-5, -2, -5]} intensity={0.5} color="#2563eb" />
      <mesh ref={earthRef} scale={[scale, scale, scale]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial 
          map={colorMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(10, 10)}
          specularMap={specularMap}
          specular={new THREE.Color('#333')}
          shininess={15}
          color="#64748b"
        />
      </mesh>
      <mesh ref={cloudsRef} scale={[scale + 0.04, scale + 0.04, scale + 0.04]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const EarthFallback = () => (
  <mesh scale={[1.8, 1.8, 1.8]}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color="#334155" wireframe />
  </mesh>
);

// -----------------------------------------------------------------------------
// 2. SLIDING PUZZLE ANIMATION COMPONENT (No Borders)
// -----------------------------------------------------------------------------

const INITIAL_TILES = [
  { id: 1, content: 'I', type: 'text', color: 'from-blue-600 to-indigo-600' },
  { id: 2, content: 'N', type: 'text', color: 'from-blue-500 to-indigo-500' },
  { id: 3, content: 'T', type: 'text', color: 'from-blue-500 to-violet-500' },
  { id: 4, content: 'E', type: 'text', color: 'from-indigo-500 to-purple-500' },
  { id: 5, content: 'L', type: 'text', color: 'from-indigo-500 to-purple-500' },
  { id: 6, content: 'L', type: 'text', color: 'from-purple-500 to-fuchsia-500' },
  { id: 7, content: 'I', type: 'text', color: 'from-purple-500 to-fuchsia-500' },
  { id: 8, content: 'G', type: 'text', color: 'from-fuchsia-500 to-pink-500' },
  { id: 9, content: 'E', type: 'text', color: 'from-fuchsia-500 to-pink-500' },
  { id: 10, content: 'N', type: 'text', color: 'from-pink-500 to-rose-500' },
  { id: 11, content: 'C', type: 'text', color: 'from-pink-500 to-rose-500' },
  { id: 12, content: 'E', type: 'text', color: 'from-rose-500 to-red-500' },
  { id: 13, content: Brain, type: 'icon', color: 'from-slate-700 to-slate-600' },
  { id: 14, content: Network, type: 'icon', color: 'from-slate-700 to-slate-600' },
  { id: 15, content: Database, type: 'icon', color: 'from-slate-700 to-slate-600' },
  { id: 16, content: null, type: 'empty', color: '' },
];

const SlidingPuzzle = () => {
  const [grid, setGrid] = useState(INITIAL_TILES);
  const [status, setStatus] = useState('solved');
  const moveHistory = useRef([]);

  const getEmptyIndex = (currentGrid) => currentGrid.findIndex(t => t.type === 'empty');

  const getValidMoves = (emptyIdx) => {
    const moves = [];
    const size = 4;
    const row = Math.floor(emptyIdx / size);
    const col = emptyIdx % size;

    if (row > 0) moves.push(emptyIdx - size);
    if (row < size - 1) moves.push(emptyIdx + size);
    if (col > 0) moves.push(emptyIdx - 1);
    if (col < size - 1) moves.push(emptyIdx + 1);
    
    return moves;
  };

  const swap = (currentGrid, idx1, idx2) => {
    const newGrid = [...currentGrid];
    [newGrid[idx1], newGrid[idx2]] = [newGrid[idx2], newGrid[idx1]];
    return newGrid;
  };

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const startCycle = async () => {
      setStatus('solved');
      await new Promise(r => setTimeout(r, 2000));

      setStatus('scrambling');
      let currentGrid = [...INITIAL_TILES];
      moveHistory.current = [];
      let previousEmptyIdx = -1;

      for (let i = 0; i < 25; i++) {
        const emptyIdx = getEmptyIndex(currentGrid);
        const validMoves = getValidMoves(emptyIdx);
        const candidates = validMoves.filter(idx => idx !== previousEmptyIdx);
        const nextMoveIdx = candidates[Math.floor(Math.random() * candidates.length)] || validMoves[0];

        moveHistory.current.push(nextMoveIdx); 
        
        previousEmptyIdx = emptyIdx;
        currentGrid = swap(currentGrid, emptyIdx, nextMoveIdx);
        
        setGrid(currentGrid);
        await new Promise(r => setTimeout(r, 80)); 
      }

      await new Promise(r => setTimeout(r, 500));

      setStatus('solving');
      const movesToSolve = moveHistory.current.reverse();
      
      for (let tileIdx of movesToSolve) {
        setGrid(prevGrid => {
          const emptyIdx = getEmptyIndex(prevGrid);
          return swap(prevGrid, emptyIdx, tileIdx); 
        });
        await new Promise(r => setTimeout(r, 300));
      }

      startCycle();
    };

    startCycle();

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    // REMOVED: border border-white/10
    <div className="w-full h-[400px]  rounded-2xl relative overflow-hidden flex flex-col items-center justify-center p-6 ">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
     

    

      {/* The 4x4 Grid */}
      <div className="relative z-10 grid grid-cols-4 gap-2 w-full max-w-[320px] md:max-w-[360px]">
        <AnimatePresence>
          {grid.map((tile) => (
            <motion.div
              layout
              key={tile.id}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 150,
              }}
              className={`
                aspect-square rounded-lg md:rounded-xl relative
                flex items-center justify-center
                ${tile.type === 'empty' ? 'invisible' : 'visible'}
              `}
            >
              {tile.type !== 'empty' && (
                <>
                  {/* Tile Background - REMOVED: border border-white/10 */}
                  <div className={`
                    absolute inset-0 rounded-lg md:rounded-xl 
                    bg-gradient-to-br ${tile.color}
                    shadow-lg backdrop-blur-sm
                    opacity-90
                  `} />
                  
                  {/* Tile Content */}
                  <div className="relative z-10 text-white">
                    {tile.type === 'text' ? (
                      <span className="text-2xl md:text-3xl font-bold drop-shadow-md">{tile.content}</span>
                    ) : (
                      <tile.content className="w-6 h-6 md:w-8 md:h-8 opacity-80" />
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Footer Text */}
      <div className="mt-8 text-center">
         <p className="text-slate-500 text-xs font-mono tracking-wider">
            AI PATTERN RECOGNITION ALGORITHM
         </p>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -----------------------------------------------------------------------------

const reasons = [
  { icon: Zap, title: 'Lightning-Fast Implementation', description: 'Our AI-driven development process cuts implementation time by 60%, getting your solutions to market faster.', color: 'from-blue-500 to-purple-500' },
  { icon: Shield, title: 'Enterprise-Grade Security', description: 'Built with security-first architecture, our solutions comply with international standards and protect your data.', color: 'from-purple-500 to-pink-500' },
  { icon: Users, title: 'Dedicated Expert Team', description: 'Work with seasoned AI engineers, full-stack developers, and IoT specialists with years of experience.', color: 'from-pink-500 to-red-500' },
  { icon: TrendingUp, title: 'Proven ROI', description: 'Our clients see an average 300% ROI within the first year through automation and efficiency gains.', color: 'from-red-500 to-orange-500' },
  { icon: Award, title: 'Award-Winning Innovation', description: 'Recognized for excellence in AI, we stay ahead of the curve with cutting-edge research.', color: 'from-orange-500 to-yellow-500' },
  { icon: Sparkles, title: 'Future-Proof Technology', description: 'We build scalable, modular solutions that grow with your business and adapt to emerging tech.', color: 'from-yellow-500 to-blue-500' },
];

const WhyChoose = () => {
  return (
    <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-100">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 via-red-500 to-orange-500">Abhastra Automation?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver projects—we build partnerships that transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                  <reason.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all">{reason.title}</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 1: TRUSTED BY INDUSTRY LEADERS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[500px] w-full cursor-move order-1"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] md:blur-[100px] rounded-full" />
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 45 }} className="touch-none">
              <Suspense fallback={<EarthFallback />}>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.8} rotateSpeed={0.4} />
                <EarthContent />
              </Suspense>
            </Canvas>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-slate-100">Trusted by Industry Leaders</h3>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              From startups to Fortune 500 companies, businesses worldwide trust Abhastra Automation to deliver mission-critical AI solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 md:p-6 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-xs md:text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="p-4 md:p-6 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-xs md:text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 2: INNOVATION (With No-Border Sliding Puzzle) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-slate-100">
              Innovation at Every Step
            </h3>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              We combine the latest in AI research, hardware innovation, and software engineering 
              to create solutions that are not just functional, but transformative.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200">Continuous Innovation</div>
                  <div className="text-sm md:text-base text-slate-400">We invest 20% of our resources in R&D to stay ahead</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200">Agile Methodology</div>
                  <div className="text-sm md:text-base text-slate-400">Rapid iterations and continuous feedback loops</div>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
             <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
             <SlidingPuzzle />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;