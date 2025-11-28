import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vid from '../assets/videohero.mp4';
import brandname from '../assets/brandname.png';
const AnimatedIntro = ({ onComplete }) => {
  const [stage, setStage] = useState('fullscreen');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const playVideo = async () => {
      if (!videoRef.current || !isMounted) return;

      try {
        // Ensure video is muted before attempting to play (iOS requirement)
        videoRef.current.muted = true;
        videoRef.current.defaultMuted = true;
        
        // Wait a brief moment for the video to be ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          if (isMounted) {
            console.log('Video playing successfully');
            setVideoLoaded(true);
          }
        }
      } catch (error) {
        console.error('Video playback failed:', error);
        if (isMounted) {
          setVideoError(true);
          setVideoLoaded(true);
        }
      }
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      playVideo();
    };

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded');
      playVideo();
    };

    // Wait for video to be ready before trying to play
    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      // Fallback: try to play after a short delay
      const fallbackTimer = setTimeout(() => {
        if (isMounted) {
          playVideo();
        }
      }, 500);
      
      return () => {
        isMounted = false;
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (!videoLoaded) return;

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
  }, [onComplete, videoLoaded]);

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
      {/* Dark background with brand gradient - shows while video loads or if it fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 via-pink-900 via-red-900 to-orange-900" />

      {/* Video Background - only show if no error */}
      {!videoError && (
        <motion.video
          ref={videoRef}
          muted
          defaultMuted
          loop
          playsInline
          autoPlay
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          onLoadedData={() => {
            console.log('Video data loaded');
            if (!videoLoaded) setVideoLoaded(true);
          }}
          onError={(e) => {
            console.error('Video error:', e);
            setVideoError(true);
            setVideoLoaded(true);
          }}
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
          style={{ WebkitTransform: 'translateZ(0)' }}
        >
          <source src={vid} type="video/mp4" />
        </motion.video>
      )}

      {/* Dark overlay for better text visibility */}
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
            <div className="text-center px-4">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(37, 99, 235, 0.6)',
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                    '0 0 40px rgba(236, 72, 153, 0.6)',
                    '0 0 40px rgba(239, 68, 68, 0.6)',
                    '0 0 40px rgba(249, 115, 22, 0.6)',
                    '0 0 20px rgba(37, 99, 235, 0.6)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                  <img 
                                src={brandname} 
                                alt="Abhastra" 
                                className="h-20 object-contain"
                              />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl text-white"
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