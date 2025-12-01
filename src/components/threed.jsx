import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Html, useProgress } from '@react-three/drei';

/**
 * Internal component to load the GLB file.
 * We extract this to use the useGLTF hook properly.
 */
function Model({ url, scale }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} position={[0, -1, 0]} />;
}

/**
 * Simple Loading Indicator
 */
function Loader() {
  const { progress } = useProgress();
  return <Html center><span className="text-white">{progress.toFixed(1)} % loaded</span></Html>;
}

/**
 * Main Reusable Component
 * @param {string} modelPath - Path to your glb file (e.g., "/laptop.glb")
 * @param {string} className - Tailwind classes for the container size
 * @param {number} scale - Scale of the model (default: 1)
 */
export default function ModelViewer({ 
  modelPath = "/Myface.glb", 
  className = "h-[500px] w-full",
  scale = 1.5 
}) {
  return (
    // Container with Tailwind classes
    <div className={`relative ${className} bg-gray-900 rounded-xl overflow-hidden`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        dpr={[1, 2]} // Optimizes pixel ratio for mobile/desktop
      >
        {/* Lights & Environment */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" /> 

        {/* Load Model with Fallback Loading state */}
        <Suspense fallback={<Loader />}>
          <Model url={modelPath} scale={scale} />
          {/* Shadow at the bottom */}
          <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        </Suspense>

        {/* Controls: Allows you to rotate (click+drag), zoom (scroll), pan (right-click) */}
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true}
          autoRotate={false} // Set true if you want it to spin automatically
        />
      </Canvas>
    </div>
  );
}

// Preload the default model path to prevent lag on first render
// If you have a different default path, change it here too
useGLTF.preload("/Myface.glb");