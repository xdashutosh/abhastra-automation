import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// -----------------------------------------------------------------------------
// 1. BACKGROUND MOVING STARS COMPONENT
// -----------------------------------------------------------------------------
const MovingStars = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the stars slowly to create the "drifting in space" feeling
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <group ref={ref}>
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
      </group>
    </group>
  );
};

// -----------------------------------------------------------------------------
// 2. MAIN PARTICLE WORDS COMPONENT
// -----------------------------------------------------------------------------
const ParticleWords = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const wordIndexRef = useRef(0);
  
  const words = ['AI', 'AUTOMATION', 'INNOVATION', 'FUTURE', 'ABHASTRA'];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isTransitioning = false;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, targetX, targetY, color) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.vx = 0;
        this.vy = 0;
        this.color = color;
        this.size = 2; 
        this.ease = 0.1; 
      }

      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        
        this.vx += dx * this.ease;
        this.vy += dy * this.ease;
        
        this.vx *= 0.85;
        this.vy *= 0.85;
        
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.fillStyle = this.color;
        // Glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }

      scatter() {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 300 + 100; 
        this.targetX = this.x + Math.cos(angle) * distance;
        this.targetY = this.y + Math.sin(angle) * distance;
      }

      setTarget(x, y) {
        this.targetX = x;
        this.targetY = y;
      }
    }

    const getTextCoordinates = (text) => {
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      
      const fontSize = Math.min(canvas.width / 6, 140);
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      
      tempCtx.font = `900 ${fontSize}px Inter, system-ui, sans-serif`;
      tempCtx.fillStyle = 'white';
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);
      
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const coordinates = [];
      
      const spacing = 4;
      for (let y = 0; y < tempCanvas.height; y += spacing) {
        for (let x = 0; x < tempCanvas.width; x += spacing) {
          const index = (y * tempCanvas.width + x) * 4;
          if (imageData.data[index + 3] > 128) {
            coordinates.push({ x, y });
          }
        }
      }
      return coordinates;
    };

    const gradientColors = [
      '#60a5fa', // blue-400
      '#c084fc', // purple-400
      '#f472b6', // pink-400
      '#f87171', // red-400
      '#fb923c', // orange-400
      '#facc15', // yellow-400
    ];

    const updateParticlesForWord = (word) => {
      const coords = getTextCoordinates(word);
      const currentParticles = particlesRef.current;
      const newParticles = [];
      
      for (let i = 0; i < coords.length; i++) {
        const coord = coords[i];
        const colorIndex = Math.floor((i / coords.length) * gradientColors.length);
        const color = gradientColors[colorIndex];

        if (currentParticles[i]) {
          currentParticles[i].setTarget(coord.x, coord.y);
          currentParticles[i].color = color;
          newParticles.push(currentParticles[i]);
        } else {
          const startX = canvas.width / 2 + (Math.random() - 0.5) * 200;
          const startY = canvas.height / 2 + (Math.random() - 0.5) * 200;
          newParticles.push(new Particle(startX, startY, coord.x, coord.y, color));
        }
      }
      particlesRef.current = newParticles;
    };

    const transitionToNextWord = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      
      particlesRef.current.forEach(p => p.scatter());
      
      setTimeout(() => {
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        updateParticlesForWord(words[wordIndexRef.current]);
        isTransitioning = false;
      }, 600);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    updateParticlesForWord(words[0]);
    animate();

    const intervalId = setInterval(transitionToNextWord, 3500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative py-32 h-[60vh] overflow-hidden bg-slate-950 flex items-center justify-center">
      
      {/* 1. 3D Background Layer (Moving Space) */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <MovingStars />
        </Canvas>
      </div>

      {/* 2. Gradient Overlay to blend stars nicely with dark theme */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 opacity-80" />
      
      {/* 3. 2D Canvas Layer (Particle Text) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
      />
      
      <div className="container mx-auto px-6 relative z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        />
      </div>
    </section>
  );
};

export default ParticleWords;