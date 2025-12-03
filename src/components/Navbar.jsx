import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import brandname from '../assets/brandnamewhite.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); 
  const location = useLocation();

  // Optimized Scroll Handler
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- HELPER FUNCTIONS FOR ACTIVE STATES ---
  const isActivePath = (path) => location.pathname === path;

  const isParentActive = (dropdownItems) => {
    return dropdownItems?.some((item) => item.path === location.pathname);
  };

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
    { name: 'Industries', path: '/industries' },
    { name: 'Development Cycle', path: '/software-development-cycle' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contactus' },
  ];

  return (
    <div className="fixed w-full z-50 top-0 left-0 flex justify-center pt-4 sm:pt-6 px-2">
      <nav
        className={`
          relative w-full max-w-7xl rounded-2xl transition-all duration-300
          ${scrolled || isOpen 
            ? 'bg-slate-950 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border border-transparent'}
        `}
      >
        {/* Glow Effect behind navbar */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <img 
              src={brandname} 
              alt="Brand" 
              className="h-14 w-auto object-contain md:block hidden  opacity-90 transition-opacity hover:opacity-100" 
            />
             {/* Mobile Logo Fallback */}
             <img 
              src={brandname} 
              alt="Brand" 
              className="md:hidden h-10 w-auto object-contain  opacity-90 transition-opacity hover:opacity-100" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = link.dropdown 
                ? isParentActive(link.dropdown) 
                : isActivePath(link.path);

              return (
                <div key={link.name} className="relative group">
                  <div 
                    className={`
                      relative px-5 py-2 rounded-full cursor-pointer transition-all duration-300 z-10 
                      ${isActive ? 'bg-white/10' : 'hover:bg-white/10'}
                    `}
                  >
                    {link.dropdown ? (
                      <button 
                        className={`
                          flex items-center gap-1.5 text-sm font-medium transition-colors relative z-20
                          ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}
                        `}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    ) : (
                      <Link 
                        to={link.path} 
                        className={`
                          text-sm font-medium relative z-20 transition-colors
                          ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}
                        `}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>

                  {/* Desktop Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-2 bg-slate-950 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out origin-top">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                      
                      <div className="relative flex flex-col gap-1">
                        {link.dropdown.map((subLink) => {
                          const isSubLinkActive = isActivePath(subLink.path);
                          return (
                            <Link
                              key={subLink.name}
                              to={subLink.path}
                              className={`
                                group/item flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border 
                                ${isSubLinkActive 
                                  ? 'bg-white/10 border-white/10' 
                                  : 'border-transparent hover:bg-white/5 hover:border-white/5'}
                              `}
                            >
                              <div className={`
                                w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                                ${isSubLinkActive 
                                  ? 'bg-indigo-500/40 text-white' 
                                  : 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 group-hover/item:text-white group-hover/item:scale-110'}
                              `}>
                                {subLink.icon || <div className={`w-2 h-2 rounded-full ${isSubLinkActive ? 'bg-white' : 'bg-current'}`} />}
                              </div>
                              <div className="flex flex-col">
                                <span className={`text-sm font-medium ${isSubLinkActive ? 'text-white' : 'text-slate-300 group-hover/item:text-white'}`}>
                                  {subLink.name}
                                </span>
                                {!isSubLinkActive && (
                                  <span className="text-[10px] text-slate-500 group-hover/item:text-slate-400">View details</span>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            
            {/* UPDATED: Gradient Get Started Button */}
            <Link 
              to="/contactus" 
              className="hidden md:flex relative group overflow-hidden px-6 py-2.5 rounded-full text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:brightness-110" />
              
              {/* Text */}
              <span className="relative z-10">Get Started</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors active:scale-90"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            bg-slate-950 backdrop-blur-xl border-t border-white/10 rounded-b-2xl
            ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="p-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = link.dropdown ? isParentActive(link.dropdown) : isActivePath(link.path);
              
              return (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-2 mb-2">
                       <button 
                         onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                         className={`
                           w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest px-4 pt-2 transition-colors
                           ${isActive ? 'text-white' : 'text-slate-500 hover:text-white'}
                         `}
                       >
                         {link.name}
                         <ChevronDown className={`w-3 h-3 transition-transform ${mobileDropdown === link.name ? 'rotate-180' : ''}`} />
                       </button>
                       
                       <div className={`grid gap-1 pl-2 transition-all duration-300 overflow-hidden ${mobileDropdown === link.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          {link.dropdown.map((subLink) => {
                            const isSubActive = isActivePath(subLink.path);
                            return (
                              <Link
                                key={subLink.name}
                                to={subLink.path}
                                onClick={() => setIsOpen(false)}
                                className={`
                                  flex items-center gap-3 p-3 rounded-xl border border-transparent transition-all
                                  ${isSubActive 
                                    ? 'bg-white/10 text-white border-white/5' 
                                    : 'bg-white/5 text-slate-300 active:text-white active:scale-95'}
                                `}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full ${isSubActive ? 'bg-white' : 'bg-purple-500'}`} />
                                {subLink.name}
                              </Link>
                            );
                          })}
                       </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block p-4 text-lg font-medium rounded-xl transition-all active:scale-95
                        ${isActive 
                          ? 'bg-white/10 text-white' 
                          : 'text-slate-200 hover:text-white hover:bg-white/5'}
                      `}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
            
            {/* Mobile Bottom Button - Also updated with Gradient */}
            <Link 
              to="/contactus"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              Launch Project
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;