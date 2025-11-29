import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import brandname from '../assets/brandname.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '#',
      dropdown: [
        { name: 'Core Team', path: '/about/core-team', icon: <Sparkles className="w-4 h-4" /> },
        { name: 'Our Story', path: '/about/our-story', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    { 
      name: 'Services', 
      path: '#',
      dropdown: [
        { name: 'AI Automation', path: '/services/ai-automation' },
        { name: 'ERP Systems', path: '/services/erp-development' },
        { name: 'App/Web Dev', path: '/services/app-web-development' },
        { name: 'LLM Engineering', path: '/services/llms' }
      ]
    },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="fixed w-full z-50 top-0 left-0 flex justify-center pt-4 sm:pt-6 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`
          relative w-full max-w-6xl rounded-2xl transition-all duration-300
          ${scrolled || isOpen 
            /* CHANGED: Made the background darker/solid when open or scrolled */
            ? 'bg-slate-950 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border border-transparent'}
        `}
      >
        {/* Glow Effect behind nav */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <div className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="relative z-10 w-full h-full bg-black/90 rounded-lg border border-white/10 flex items-center justify-center p-1.5 overflow-hidden">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <img src={brandname} alt="Brand" className="h-8 object-contain md:block hidden invert opacity-90" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => {
                  if (link.dropdown) setActiveDropdown(link.name);
                  setHoveredNav(link.name);
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredNav(null);
                }}
              >
                <div className="relative px-5 py-2 rounded-full cursor-pointer transition-colors z-10">
                  {hoveredNav === link.name && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {link.dropdown ? (
                    <button className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white relative z-20">
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link 
                      to={link.path} 
                      className={`text-sm font-medium relative z-20 transition-colors ${location.pathname === link.path ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>

                <AnimatePresence>
                  {activeDropdown === link.name && link.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-2 bg-slate-950 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className="relative flex flex-col gap-1">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/5"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:scale-110 transition-all duration-200">
                              {subLink.icon || <div className="w-2 h-2 rounded-full bg-current" />}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-slate-300 group-hover:text-white">{subLink.name}</span>
                              <span className="text-[10px] text-slate-500 group-hover:text-slate-400">View details</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="hidden md:flex relative group overflow-hidden px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-black/10 to-transparent z-0" />
            </Link>

            <button 
              className="md:hidden relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Sci-Fi Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
              exit={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.3, ease: "circOut" }}
              /* CHANGED: Replaced bg-black/50 with bg-slate-950 and added backdrop-blur-xl */
              className="md:hidden overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl rounded-b-2xl"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.dropdown ? (
                      <div className="space-y-2 mb-2">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 pt-2">{link.name}</div>
                        <div className="grid grid-cols-1 gap-1 pl-2">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-transparent active:border-purple-500/50 text-slate-300 active:text-white active:scale-95 transition-all"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block p-4 text-lg font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  Launch Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;