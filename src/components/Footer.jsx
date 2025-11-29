import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Heart,
  ChevronRight
} from 'lucide-react';

// Assumed imports based on your previous code
import logo from '../assets/logo.png';
import brandname from '../assets/brandname.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'Enterprise AI & LLMs', href: '#' },
      { name: 'Intelligent ERP Systems', href: '#' },
      { name: 'Industrial IoT (IIoT)', href: '#' },
      { name: 'Predictive Analytics', href: '#' },
      { name: 'Cloud Migration', href: '#' },
      { name: 'Cybersecurity', href: '#' },
    ],
    company: [
      { name: 'About Abhastra', href: '#' },
      { name: 'Our Leadership', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press & Media', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    resources: [
      { name: 'Blog & Insights', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Github, href: '#', color: 'hover:text-white' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* --- COLUMN 1: BRAND & INFO (Span 4) --- */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-0.5 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                </div>
              </div>
              <img 
                src={brandname} 
                alt="Abhastra" 
                className="h-8 object-contain brightness-0 invert" // Inverts black text to white for dark mode
              />
            </a>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Pioneering the future of automation. We bridge the gap between physical hardware and advanced AI to create intelligent ecosystems for modern enterprises.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Gurugram, Haryana, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:contact@abhastra.com" className="hover:text-white transition-colors">contact@abhastra.com</a>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-white/10 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* --- COLUMN 2: SOLUTIONS (Span 2) --- */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: COMPANY (Span 2) --- */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 4: NEWSLETTER (Span 4) --- */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
              {/* Glow effect inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all" />
              
              <h4 className="font-bold text-white mb-2">Subscribe to our Newsletter</h4>
              <p className="text-sm text-slate-400 mb-6">
                Get the latest updates on AI breakthroughs, industry trends, and Abhastra news delivered to your inbox.
              </p>
              
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 rounded-lg text-sm transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                  Subscribe Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-xs text-slate-600 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm text-center md:text-left">
            <p className="mb-2">© {currentYear} Abhastra Automation Pvt Ltd. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-start gap-1 text-xs">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> in India, for the World.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;