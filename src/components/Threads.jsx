import React, { useEffect, useRef } from 'react';

const Threads = ({
  amplitude = 1,
  distance = 5,
  color = '#ffffff',
  speed = 0.5,
  lineCount = 60, 
  frequency = 1,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let time = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 255, g: 255, b: 255 };
    };
    
    const rgb = hexToRgb(color);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter'; 
      
      const spacing = height / (lineCount * 1.5); 
      const spread = height / 2; 

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        
        const distFromCenter = Math.abs(i - lineCount / 2) / (lineCount / 2);
        const opacity = Math.max(0.1, 1 - distFromCenter); 
        
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.4})`;
        ctx.lineWidth = 1.5;

        const yBase = (height / 2) - (spread / 2) + (i * spacing) * 1.5;
        
        for (let x = 0; x <= width; x += distance) {
          const t = time * speed;
          const wave1 = Math.sin(x * 0.003 * frequency + t + i * 0.05) * (amplitude * 40);
          const wave2 = Math.cos(x * 0.01 + t * 0.5) * 10;
          
          const y = yBase + wave1 + wave2;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.05;
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

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