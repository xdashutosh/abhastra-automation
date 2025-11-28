import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedIntro = ({ onComplete }) => {
  const [stage, setStage] = useState('fullscreen');
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Fullscreen for 3 seconds
    const timer1 = setTimeout(() => {
      setStage('transitioning');
    }, 3000);

    // Complete transition after 1.5 seconds
    const timer2 = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (stage === 'complete') return null;

  return (
    <motion.div
      initial={{ 
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
      }}
      className="overflow-hidden"
      style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
    >
      {/* Dark background that shows while video loads */}
      <div className="absolute inset-0 bg-slate-900" />

      {/* Video Background */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={
          videoLoaded 
            ? stage === 'transitioning' 
              ? { opacity: 0 } 
              : { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: videoLoaded ? 1.5 : 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <source src="https://www.pexels.com/download/video/8764795/" type="video/mp4" />
      </motion.video>

      {/* Dark overlay for better text visibility - only show when video is loaded */}
      {videoLoaded && (
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={stage === 'transitioning' ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
      )}

      {/* Center content - only show in fullscreen */}
      <AnimatePresence>
        {stage === 'fullscreen' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="text-center">
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-white mb-4"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0, 188, 212, 0.5)',
                    '0 0 40px rgba(98, 0, 234, 0.5)',
                    '0 0 20px rgba(0, 188, 212, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Abhastra<span className="text-primary">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl text-white"
              >
                Automating Everything with AI
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedIntro;