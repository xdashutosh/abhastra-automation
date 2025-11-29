import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import brandname from '../assets/brandname.png';

// -----------------------------------------------------------------------------
// 1. WARP SPEED STAR FIELD COMPONENT
// -----------------------------------------------------------------------------
const WarpStars = ({ speedRef }) => {
  const count = 6000;
  const mesh = useRef();

  // 1. Generate the Texture (Glowing Circle) to fix the "Square" look
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    // Draw a radial gradient (white center -> transparent edge)
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);
  
  // 2. Generate Positions
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Wide spread X/Y
      pos[i * 3] = (Math.random() - 0.5) * 600; 
      pos[i * 3 + 1] = (Math.random() - 0.5) * 600; 
      // Deep depth Z
      pos[i * 3 + 2] = (Math.random() - 0.5) * 600; 

      // Coloring
      if (Math.random() > 0.8) {
         color.setHSL(Math.random(), 0.8, 0.8); // Occasional vivid colors
      } else {
         color.setHSL(0.6, 0.2, 0.9); // Mostly white/blueish
      }
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame(() => {
    if (!mesh.current) return;
    
    const positionsAttribute = mesh.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      // Move Z towards camera
      positionsAttribute.array[i * 3 + 2] += speedRef.current;
      
      // Reset if behind camera
      if (positionsAttribute.array[i * 3 + 2] > 200) {
        positionsAttribute.array[i * 3 + 2] = -400;
        
        // Randomize X/Y again for fresh stars
        positionsAttribute.array[i * 3] = (Math.random() - 0.5) * 600; 
        positionsAttribute.array[i * 3 + 1] = (Math.random() - 0.5) * 600; 
      }
    }
    positionsAttribute.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      {/* 
        Changes to fix square shape:
        1. Added 'map={starTexture}' to use the generated circle
        2. Added 'alphaMap={starTexture}' for transparency
        3. Increased 'size' slightly to 2.5
        4. Added 'depthWrite={false}' to prevent occlusion boxes
      */}
      <pointsMaterial
        size={2.5}
        map={starTexture}
        alphaMap={starTexture}
        transparent={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
};

// -----------------------------------------------------------------------------
// 2. MAIN INTRO COMPONENT
// -----------------------------------------------------------------------------
const AnimatedIntro = ({ onComplete }) => {
  const [stage, setStage] = useState('flying'); 
  const speedRef = useRef(2); 

  useEffect(() => {
    // 1. Accelerate
    const accelerationInterval = setInterval(() => {
      if (speedRef.current < 80) { // Increased max speed for more intensity
        speedRef.current += 0.8; 
      }
    }, 50);

    // 2. Big Bang Trigger
    const bangTimer = setTimeout(() => {
      speedRef.current = 150; // Maximum warp right before bang
      setStage('bang');
    }, 3500);

    // 3. Complete
    const endTimer = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 4500);

    return () => {
      clearInterval(accelerationInterval);
      clearTimeout(bangTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
          <fog attach="fog" args={['#000000', 50, 400]} />
          <WarpStars speedRef={speedRef} />
        </Canvas>
      </div>

      <AnimatePresence>
        {stage !== 'bang' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 3, filter: 'blur(20px)' }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            <div className="text-center px-4 flex flex-col items-center">
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: 'spring' }}
                className="mb-6 relative"
              >
                <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full" />
                <img 
                  src={brandname} 
                  alt="Abhastra" 
                  className="h-20 md:h-24 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl text-white font-light tracking-widest uppercase"
              >
                Automating Everything <span className="text-purple-400 font-semibold">With AI</span>
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 bg-white pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={stage === 'bang' ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      />
    </motion.div>
  );
};

export default AnimatedIntro;