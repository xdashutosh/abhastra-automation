import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import vid from '../assets/videohero.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const playVideo = async () => {
      if (!videoRef.current || !isMounted) return;

      try {
        // Ensure video is muted (iOS requirement for autoplay)
        videoRef.current.muted = true;
        videoRef.current.defaultMuted = true;
        
        // Wait a brief moment
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          if (isMounted) {
            console.log('Hero video playing successfully');
            setVideoReady(true);
          }
        }
      } catch (error) {
        console.error('Hero video playback failed:', error);
        if (isMounted) {
          setVideoReady(true); // Still show content
        }
      }
    };

    const handleCanPlay = () => {
      console.log('Hero video can play');
      playVideo();
    };

    const handleLoadedMetadata = () => {
      console.log('Hero video metadata loaded');
      playVideo();
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        defaultMuted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedData={() => {
          console.log('Hero video data loaded');
          setVideoReady(true);
        }}
        onError={(e) => {
          console.error('Hero video error:', e);
          setVideoReady(true);
        }}
        style={{ WebkitTransform: 'translateZ(0)' }}
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-slate-600 font-medium">Revolutionizing Industries with AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Automating Everything <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">With Intelligence</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed"
          >
            We build advanced <span className="font-semibold text-white">AI-based ERPs</span>, <span className="font-semibold text-white">LLMs</span>, <span className="font-semibold text-white">Autonomous Agents</span>, and <span className="font-semibold text-white">Microcontroller solutions</span>. 
            Transforming businesses through cutting-edge automation, app development, and IT consulting.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/25">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all font-semibold shadow-sm hover:shadow-md">
              View Case Studies
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;