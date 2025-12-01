import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointMaterial, Stars, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Brain, Sparkles, Move } from 'lucide-react';

// -----------------------------------------------------------------------------
// 1. PARTICLE FACE COMPONENT
// -----------------------------------------------------------------------------
const ParticleHead = (props) => {
  const meshRef = useRef();
  const { nodes } = useGLTF('/LeePerrySmith.glb');
  const { viewport } = useThree();

  // Create a reusable vector to avoid garbage collection every frame
  const targetRotation = useMemo(() => new THREE.Vector2(), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Calculate mouse position relative to viewport
    const mouseX = (state.pointer.x * viewport.width) / 2;
    const mouseY = (state.pointer.y * viewport.height) / 2;

    const headX = 2; // Approximate world X position
    const headY = -0.5; // Approximate world Y position
    
    // Simple look-at math
    const diffX = mouseX - headX;
    const diffY = mouseY - headY;
    
    // Update target rotation
    targetRotation.x = Math.atan2(diffY, 4); // X-axis rot (up/down)
    targetRotation.y = Math.atan2(diffX, 4); // Y-axis rot (left/right)

    // Smooth interpolation (dampening)
    // using 0.05 is smoother/slower, less jittery than 0.1
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetRotation.x, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.y, 0.05);
  });

  return (
    <group {...props}>
      <points ref={meshRef} position={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
        <primitive object={nodes.LeePerrySmith.geometry} attach="geometry" />
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </points>
    </group>
  );
};

// -----------------------------------------------------------------------------
// 2. BACKGROUND STAR FIELD (Static or Low Cost)
// -----------------------------------------------------------------------------
const SpaceBackground = () => {
  const ref = useRef();
  
  // Very slow rotation - minimal performance impact
  useFrame((state, delta) => {
    if(ref.current) {
      ref.current.rotation.y -= delta / 50; 
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Stars 
        radius={50} 
        depth={50} 
        count={1000} // Reduced from 1500 -> 1000 for mobile perf
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
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
          // CRITICAL OPTIMIZATION: Force Pixel Ratio to 1. 
          // Prevents 4k rendering on Retina displays which destroys FPS.
          dpr={1} 
          gl={{ 
            antialias: false, // Particles don't need AA
            powerPreference: "high-performance",
            alpha: false, // We have a background color, no need for alpha buffer
          }}
          camera={{ position: [0, 0, 5], fov: 60 }}
        >
          <color attach="background" args={['#020617']} /> {/* slate-950 hex */}
          <ambientLight intensity={0.5} />
          
          <Suspense fallback={null}>
            <SpaceBackground />
            {/* Removed <Float> to save CPU cycles */}
            <ParticleHead position={[2, -0.5, 0]} /> 
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start pointer-events-none">
        
        <div className="max-w-3xl pointer-events-auto">
          
         

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Automating Everything <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              With Intelligence
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            We architect advanced AI-driven ERPs, LLMs, and Autonomous Agents. 
            Merging the digital cosmos with tangible business solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition-transform hover:scale-105 flex items-center gap-2 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <Brain className="w-5 h-5" />
              Our projects
            </button>
            <button className="px-8 py-4 rounded-full bg-slate-900/50 border border-slate-700 hover:bg-slate-800 text-white font-semibold backdrop-blur-sm transition-colors flex items-center gap-2 hover:border-purple-500/50">
              <Move className="w-5 h-5" />
              Our span
            </button>
          </div>

        </div>
      </div>
      
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-0 pointer-events-none" />

      {/* 
         Simple CSS Animation definitions 
         (You can move this to your global CSS file) 
      */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// Preload
useGLTF.preload('/LeePerrySmith.glb');

export default Hero;