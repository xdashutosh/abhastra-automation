import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  Facebook,
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  ChevronRight,
  Star
} from 'lucide-react';

// Assets (Keep your existing asset paths)
import logo from '../assets/logo.png';
import brandname from '../assets/brandnamewhite.png';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // --- SEO SCHEMA (JSON-LD) ---
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Abhastra Automation Pvt Ltd",
    "url": "https://abhastra.com",
    "logo": "https://abhastra.com/assets/logo.png",
    "sameAs": [
      "https://www.facebook.com/Abhastra/",
      "https://www.linkedin.com/company/abhastra",
      "https://twitter.com/abhastra",
      "https://www.instagram.com/abhastra"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gurugram",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-85071-41727",
      "contactType": "technical support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "120"
    }
  };

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
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms&condition' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Abhastra/', color: 'hover:text-blue-600', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/abhastra', color: 'hover:text-blue-500', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/abhastra', color: 'hover:text-sky-400', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/abhastra/', color: 'hover:text-pink-500', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCcT0uSc3FbHfEOhr0jFyNaA/community', color: 'hover:text-red-500', label: 'YouTube' },
  ];

  // Helper component for Star Rating
  const FiveStars = () => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* --- SEO: JSON-LD Injection --- */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* --- BACKGROUND FX --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* --- COLUMN 1: BRAND & CONTACT (Span 4) --- */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src={logo} alt="Abhastra Logo" width="32" height="32" loading="lazy" className="w-8 h-8 object-contain" />
                </div>
              </div>
              <img src={brandname} alt="Abhastra Brand Name" loading="lazy" className="h-8 object-contain" />
            </a>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Pioneering the future of automation. We bridge the gap between physical hardware and advanced AI.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place//data=!4m7!3m6!1s0x390d19842110f839:0x2ff5786e86f7c9b2!8m2!3d28.4521044!4d77.0716037!9m1!1b1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Gurugram, Haryana, India
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500">Tech Support</span>
                    <a href="tel:+918507141727" className="hover:text-white transition-colors font-medium">+91 85071 41727</a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="mailto:contact@abhastra.com" className="hover:text-white transition-colors">contact@abhastra.com</a>
              </div>
            </div>

            {/* Review Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Trustpilot */}
                <a 
                  href="https://www.trustpilot.com/review/abhastra.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 border border-white/5 rounded-lg p-3 flex items-center gap-3 hover:bg-slate-900 hover:border-green-500/30 transition-all group/tp"
                >
                   <div className="w-8 h-8 rounded bg-[#00b67a] flex items-center justify-center">
                     <Star className="w-5 h-5 text-white fill-white" />
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold group-hover/tp:text-white">Trustpilot</p>
                     <FiveStars />
                   </div>
                </a>

                {/* Google Reviews */}
                <a 
                  href="https://www.google.com/maps/place//data=!4m7!3m6!1s0x390d19842110f839:0x2ff5786e86f7c9b2!8m2!3d28.4521044!4d77.0716037!9m1!1b1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 border border-white/5 rounded-lg p-3 flex items-center gap-3 hover:bg-slate-900 hover:border-blue-500/30 transition-all group/goog"
                >
                   <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                      {/* Simple G logo representation */}
                      <span className="text-lg font-bold text-slate-900">G</span>
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold group-hover/goog:text-white">Google</p>
                     <FiveStars />
                   </div>
                </a>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <h4 className="font-bold text-white mb-2 relative z-10">Subscribe to our Newsletter</h4>
              <p className="text-sm text-slate-400 mb-6 relative z-10">
                Get the latest updates on AI breakthroughs and Abhastra news delivered to your inbox.
              </p>
              
              <form className="space-y-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 rounded-lg text-sm transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center gap-2 transform active:scale-[0.98]">
                  Subscribe Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
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
              <Link 
                key={i} 
                to={link.href} 
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;