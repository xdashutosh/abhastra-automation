import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Starfield */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse animation-delay-4000" />
      </div>

      {/* Moving Nebulas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: INFO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-green-400 uppercase tracking-widest">Accepting New Projects</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Future Together</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-lg">
              Ready to automate your business? Reach out to us for a consultation on AI, ERP, or custom development. We typically respond within 2 hours.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call Us", value: "+91-6350669414", color: "text-blue-400", border: "group-hover:border-blue-500/50" },
                { icon: Mail, label: "Email Us", value: "contact@abhastra.com", color: "text-purple-400", border: "group-hover:border-purple-500/50" },
                { icon: MapPin, label: "Visit Us", value: "Gurugram, Haryana, India", color: "text-pink-400", border: "group-hover:border-pink-500/50" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-6 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 transition-all duration-300 group cursor-pointer ${item.border}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-semibold text-slate-200 group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: GLASS FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <form className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden group">
              
              {/* Internal Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-colors duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase ml-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 focus:outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase ml-1">Subject</label>
                  <div className="relative">
                    <select className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-slate-300 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition-all appearance-none cursor-pointer hover:bg-slate-900">
                      <option>General Inquiry</option>
                      <option>AI Solutions</option>
                      <option>Web/App Development</option>
                      <option>IoT & Hardware</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase ml-1">Message</label>
                  <textarea 
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 focus:outline-none transition-all h-32 resize-none" 
                    placeholder="Tell us about your project..." 
                  />
                </div>

                <button className="group w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;