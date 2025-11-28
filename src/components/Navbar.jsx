import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import brandname from '../assets/brandname.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '#',
      dropdown: [
        { name: 'Core Team', path: '/about/core-team' },
        { name: 'Our Story', path: '/about/our-story' }
      ]
    },
    { 
      name: 'Services', 
      path: '#',
      dropdown: [
        { name: 'AI Automation', path: '/services/ai-automation' },
        { name: 'ERP Development', path: '/services/erp-development' },
        { name: 'App/Web Development', path: '/services/app-web-development' },
        { name: 'Large Language Models', path: '/services/llms' }
      ]
    },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
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
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.dropdown && handleDropdownEnter(link.name)}
              onMouseLeave={handleDropdownLeave}
            >
              {link.dropdown ? (
                <button 
                  className={`flex items-center gap-1 transition-colors text-sm font-medium tracking-wide group ${scrolled ? 'text-slate-600' : 'text-slate-700'} hover:text-primary`}
                >
                  {link.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  to={link.path} 
                  className={`transition-colors text-sm font-medium tracking-wide relative group ${scrolled ? 'text-slate-600' : 'text-slate-700'} ${location.pathname === link.path ? 'text-primary' : ''}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === link.name && link.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
                  >
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-500 text-white hover:from-blue-700 hover:via-purple-700 hover:via-pink-700 hover:via-red-700 hover:to-orange-600 transition-all duration-300 font-medium text-sm shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30">
            Get Started
          </Link>
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
            <div className="flex flex-col p-6 gap-4 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <div className="text-lg font-medium text-slate-800">{link.name}</div>
                      <div className="pl-4 border-l-2 border-slate-100 space-y-2">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-slate-600 hover:text-primary transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-slate-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-500 text-white font-bold mt-4 shadow-lg shadow-pink-500/20 hover:from-blue-700 hover:via-purple-700 hover:via-pink-700 hover:via-red-700 hover:to-orange-600 transition-all text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;