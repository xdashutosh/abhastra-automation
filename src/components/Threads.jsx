import React, { useEffect, useRef } from 'react';

const Threads = ({
  amplitude = 1,
  distance = 10, // OPTIMIZATION: Increased default distance (was 5). 2 is too heavy.
  color = '#ffffff',
  speed = 0.5,
  lineCount = 60, 
  frequency = 1,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // optimize context
    
    let width, height;
    let time = 0;
    let animationId;

    // Helper to convert hex to rgb once
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 255, g: 255, b: 255 };
    };
    
    const rgb = hexToRgb(color);

    const handleResize = () => {
      // OPTIMIZATION: Cap DPR at 1. High DPI renders kill FPS on full-screen canvas
      const dpr = 1; 
      
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        ctx.scale(dpr, dpr);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // 'lighter' is expensive, 'source-over' is standard and faster
      // keeping 'lighter' for the glow effect, but ensure low line count
      ctx.globalCompositeOperation = 'lighter'; 
      
      const spacing = height / (lineCount * 1.5); 
      const spread = height / 2; 

      for (let i = 0; i < lineCount; i++) {
        // Optimization: Don't draw lines that are barely visible
        const distFromCenter = Math.abs(i - lineCount / 2) / (lineCount / 2);
        const opacity = Math.max(0.1, 1 - distFromCenter);
        if (opacity < 0.05) continue;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.4})`;
        ctx.lineWidth = 1.5;

        const yBase = (height / 2) - (spread / 2) + (i * spacing) * 1.5;
        
        // OPTIMIZATION: Loop step is "distance". 
        // Small distance = Lag. Large distance = Jagged lines.
        // 10px is a sweet spot for smooth curves vs performance.
        for (let x = 0; x <= width + distance; x += distance) {
          const t = time * speed;
          // Simplified Math
          const wave1 = Math.sin(x * 0.003 * frequency + t + i * 0.05) * (amplitude * 40);
          const wave2 = Math.cos(x * 0.01 + t * 0.5) * 10;
          
          const y = yBase + wave1 + wave2;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.05;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [amplitude, distance, color, speed, lineCount, frequency]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default Threads;