import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import brandname from '../assets/brandname.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 via-pink-600 to-orange-500 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(219,39,119,0.5)] transition-all overflow-hidden p-1.5">
            <img 
              src={logo} 
              alt="Abhastra Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <img 
            src={brandname} 
            alt="Abhastra" 
            className="h-10 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`transition-colors text-sm font-medium tracking-wide relative group ${scrolled ? 'text-slate-600' : 'text-slate-700'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-500 text-white hover:from-blue-700 hover:via-purple-700 hover:via-pink-700 hover:via-red-700 hover:to-orange-600 transition-all duration-300 font-medium text-sm shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-slate-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-500 text-white font-bold mt-4 shadow-lg shadow-pink-500/20 hover:from-blue-700 hover:via-purple-700 hover:via-pink-700 hover:via-red-700 hover:to-orange-600 transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;