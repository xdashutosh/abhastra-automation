import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleWords = () => {
  const canvasRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['AI', 'AUTOMATION', 'INNOVATION', 'FUTURE', 'ABHASTRA'];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
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
        this.originalX = targetX;
        this.originalY = targetY;
        this.vx = 0;
        this.vy = 0;
        this.color = color;
        this.size = 2;
        this.ease = 0.08;
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
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      scatter() {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        this.targetX = this.x + Math.cos(angle) * distance;
        this.targetY = this.y + Math.sin(angle) * distance;
      }

      setTarget(x, y) {
        this.targetX = x;
        this.targetY = y;
        this.originalX = x;
        this.originalY = y;
      }
    }

    const getTextCoordinates = (text) => {
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      
      // Responsive font size
      const fontSize = Math.min(canvas.width / 8, 120);
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      
      tempCtx.font = `bold ${fontSize}px Arial`;
      tempCtx.fillStyle = 'white';
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);
      
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const coordinates = [];
      
      // Sample pixels with spacing for performance
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
      '#2563eb', // blue
      '#9333ea', // purple
      '#ec4899', // pink
      '#ef4444', // red
      '#f97316', // orange
      '#eab308', // yellow
    ];

    const createParticlesForWord = (word) => {
      const coords = getTextCoordinates(word);
      const newParticles = [];
      
      coords.forEach((coord, i) => {
        const colorIndex = Math.floor((i / coords.length) * gradientColors.length);
        const color = gradientColors[colorIndex];
        
        if (particles[i]) {
          particles[i].setTarget(coord.x, coord.y);
          particles[i].color = color;
          newParticles.push(particles[i]);
        } else {
          // Random starting position for new particles
          const startX = Math.random() * canvas.width;
          const startY = Math.random() * canvas.height;
          newParticles.push(new Particle(startX, startY, coord.x, coord.y, color));
        }
      });
      
      return newParticles;
    };

    const transitionToNextWord = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      
      // Scatter current particles
      particles.forEach(p => p.scatter());
      
      // Wait for scatter, then form new word
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        isTransitioning = false;
      }, 800);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize with first word
    particles = createParticlesForWord(words[currentWordIndex]);
    animate();

    // Transition every 3 seconds
    const intervalId = setInterval(transitionToNextWord, 3000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, [currentWordIndex]);

  return (
    <section className="relative py-32  overflow-hidden">
      {/* Background decoration */}
      <div className="absolute " />
      
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Content overlay */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
         
          
       
          
         
        </motion.div>
      </div>
    </section>
  );
};

export default ParticleWords;