import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, TrendingUp, Award, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';
import gif2 from '../assets/leaders.gif';

// -----------------------------------------------------------------------------
// 1. REALISTIC EARTH COMPONENT
// -----------------------------------------------------------------------------
const EarthContent = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();

  const [colorMap, normalMap, specularMap, cloudsMap] = useTexture([
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Blank_Map_of_The_World_Equirectangular_Projection.png', // Day Map
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Blank_Map_of_The_World_Equirectangular_Projection.png', // Normal
  ]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 15;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 12;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.2} color="#4c1d95" />
      <directionalLight position={[5, 3, 5]} intensity={3} color="#c4b5fd" />
      <pointLight position={[-5, -2, -5]} intensity={0.5} color="#2563eb" />

      {/* Earth Sphere */}
      <mesh ref={earthRef} scale={[2.5, 2.5, 2.5]}>
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

      {/* Clouds Sphere */}
      <mesh ref={cloudsRef} scale={[2.54, 2.54, 2.54]}>
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

// Loading Fallback Component
const EarthFallback = () => {
  return (
    <mesh scale={[2.5, 2.5, 2.5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#334155" wireframe />
      <Html center>
        <div className="text-white text-xs font-mono">Loading Planet...</div>
      </Html>
    </mesh>
  );
};

// -----------------------------------------------------------------------------
// 2. MAIN COMPONENT
// -----------------------------------------------------------------------------

const reasons = [
  {
    icon: Zap,
    title: 'Lightning-Fast Implementation',
    description: 'Our AI-driven development process cuts implementation time by 60%, getting your solutions to market faster than traditional approaches.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Built with security-first architecture, our solutions comply with international standards and protect your critical business data.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Dedicated Expert Team',
    description: 'Work with seasoned AI engineers, full-stack developers, and IoT specialists who bring years of industry experience.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our clients see an average 300% ROI within the first year through automation, efficiency gains, and reduced operational costs.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Award-Winning Innovation',
    description: 'Recognized for excellence in AI and automation, we stay ahead of the curve with cutting-edge research and development.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Sparkles,
    title: 'Future-Proof Technology',
    description: 'We build scalable, modular solutions that grow with your business and adapt to emerging technologies seamlessly.',
    color: 'from-yellow-500 to-blue-500',
  },
];

const WhyChoose = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-100">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 via-red-500 to-orange-500">Abhastra Automation?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver projects—we build partnerships that transform your business. 
            Here's what sets us apart in the world of AI and automation.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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
              <div className="h-full p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {reason.description}
                </p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-all duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 1: TRUSTED BY INDUSTRY LEADERS (With Earth on Left) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: 3D EARTH */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full cursor-move"
          >
            {/* Glow behind the earth */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
            
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
              <Suspense fallback={<EarthFallback />}>
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false} 
                  autoRotate={true}
                  autoRotateSpeed={0.8}
                  rotateSpeed={0.4}
                />
                <EarthContent />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* RIGHT SIDE: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              From startups to Fortune 500 companies, businesses worldwide trust Abhastra Automation 
              to deliver mission-critical AI solutions that drive real results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
              <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 2: INNOVATION (With GIF on Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          
          {/* LEFT SIDE: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
              Innovation at Every Step
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
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
                  <div className="text-slate-400">We invest 20% of our resources in R&D to stay ahead</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200">Agile Methodology</div>
                  <div className="text-slate-400">Rapid iterations and continuous feedback loops</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-400 to-red-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-200">End-to-End Support</div>
                  <div className="text-slate-400">From concept to deployment and beyond</div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE: GIF IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
             <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
             <img 
               src={gif2}
               alt="AI Automation Technology"
               className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
             />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;