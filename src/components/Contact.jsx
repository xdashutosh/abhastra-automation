import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 via-pink-500/5 to-orange-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-600">Future</span>
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              Ready to automate your business? Reach out to us for a consultation on AI, ERP, or custom development.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all">
                  <Phone className="w-5 h-5 text-transparent bg-clip-text" style={{ stroke: 'url(#phoneGradient)', strokeWidth: 2 }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Call Us</div>
                  <div className="font-medium text-slate-900">+91-6350669414</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all">
                  <Mail className="w-5 h-5 text-transparent bg-clip-text" style={{ stroke: 'url(#mailGradient)', strokeWidth: 2 }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="mailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email Us</div>
                  <div className="font-medium text-slate-900">contact@abhastra.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 flex items-center justify-center group-hover:from-pink-500/20 group-hover:to-orange-500/20 transition-all">
                  <MapPin className="w-5 h-5 text-transparent bg-clip-text" style={{ stroke: 'url(#mapGradient)', strokeWidth: 2 }} />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Visit Us</div>
                  <div className="font-medium text-slate-900">gurugram, Haryana, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-white border border-slate-100 p-8 rounded-2xl space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-600 font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all text-slate-900" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-600 font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all text-slate-900" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-slate-600 font-medium">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all text-slate-700">
                    <option>General Inquiry</option>
                    <option>AI Solutions</option>
                    <option>Web/App Development</option>
                    <option>IoT & Hardware</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-600 font-medium">Message</label>
                  <textarea 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-500/50 focus:outline-none transition-all h-32 resize-none text-slate-900" 
                    placeholder="Tell us about your project..." 
                  />
                </div>

                <button className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-orange-500 text-white font-bold hover:from-blue-700 hover:via-purple-700 hover:via-pink-700 hover:via-red-700 hover:to-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/35">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;