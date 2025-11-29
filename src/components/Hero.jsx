import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointMaterial, Stars, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Move } from 'lucide-react';

// -----------------------------------------------------------------------------
// 1. PARTICLE FACE COMPONENT
// -----------------------------------------------------------------------------
const ParticleHead = (props) => {
  const meshRef = useRef();
  // Using the GLTF hook. 
  // TIP: Ensure your .glb file is compressed (use gltf-pipeline or draco)
   const { nodes } = useGLTF('/LeePerrySmith.glb', true);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;

    // 1. Calculate Mouse Position (throttling isn't strictly necessary here via r3f, 
    // but calculating against viewport is efficient)
    const mouseX = (state.pointer.x * viewport.width) / 2;
    const mouseY = (state.pointer.y * viewport.height) / 2;

    const headPositionX = 2;
    const headPositionY = -0.5;
    
    const diffX = mouseX - headPositionX;
    const diffY = mouseY - headPositionY;
    const distanceToScreen = 4; 

    // Smooth rotation
    const targetRotationY = Math.atan2(diffX, distanceToScreen);
    const targetRotationX = Math.atan2(diffY, distanceToScreen);

    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetRotationX, 0.1);
  });

  return (
    <group {...props}>
      {/* 
        OPTIMIZATION: We only render the points, not the mesh surface.
        Using a fixed key helps React verify identity.
      */}
      <points ref={meshRef} position={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
        {/* Pass the geometry directly from the loaded GLTF nodes */}
        <primitive object={nodes.LeePerrySmith.geometry} attach="geometry" />
        <PointMaterial
          transparent
          vertexColors={false}
          color="#8b5cf6" 
          size={0.015}     
          sizeAttenuation={true}
          depthWrite={false} // Important for performance with transparency
          opacity={0.8}
        />
      </points>
    </group>
  );
};

// Preload the model so it doesn't stutter on first interaction
useGLTF.preload('/LeePerrySmith.glb');

// -----------------------------------------------------------------------------
// 2. BACKGROUND STAR FIELD
// -----------------------------------------------------------------------------
const SpaceBackground = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      // Reduced rotation speed slightly to save calculations if not needed
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <group ref={ref}>
        {/* OPTIMIZATION: Reduced count from 6000 to 4000 (visual difference is low) */}
        <Stars 
          radius={50}
          depth={50} 
          count={1500} 
          factor={4}
          saturation={0} 
          fade 
          speed={1.5} 
        />
      </group>
    </group>
  );
};

// -----------------------------------------------------------------------------
// 3. MAIN HERO UI
// -----------------------------------------------------------------------------
const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-slate-950 overflow-hidden text-slate-100">
      
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          // OPTIMIZATION 1: Cap the Pixel Ratio. 
          // [1, 1.5] prevents 4k rendering on mobile/retina screens which kills FPS.
          dpr={[1, 1.5]} 
          
          // OPTIMIZATION 2: Render settings
          gl={{ 
            antialias: false, // Particles usually don't need expensive antialias
            powerPreference: "high-performance",
            preserveDrawingBuffer: false
          }}
          camera={{ position: [0, 0, 5], fov: 60 }}
        >
          <ambientLight intensity={0.5} />
          
          {/* Suspense allows the UI to load while 3D is preparing */}
          <Suspense fallback={null}>
            <SpaceBackground />
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2} position={[2, -0.5, 0]}>
              <ParticleHead />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start pointer-events-none">
        
        <div className="max-w-3xl pointer-events-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-purple-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium tracking-wide text-purple-100">AI-Powered Neural Systems</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Automating Everything <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              With Intelligence
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl leading-relaxed"
          >
            We architect advanced AI-driven ERPs, LLMs, and Autonomous Agents. 
            Merging the digital cosmos with tangible business solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:scale-105">
              <Brain className="w-5 h-5" />
              Initialize System
            </button>
            <button className="px-8 py-4 rounded-full bg-slate-900/50 border border-slate-700 hover:bg-slate-800 text-white font-semibold backdrop-blur-sm transition-all flex items-center gap-2 hover:border-purple-500/50">
              <Move className="w-5 h-5" />
              View Architecture
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default Hero;