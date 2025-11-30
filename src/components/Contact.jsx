import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ExternalLink, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-slate-950 relative overflow-hidden pt-24 pb-20">
      
      {/* SEO */}
      <Helmet>
        <title>Contact Us - Abhastra Automation | Gurugram</title>
        <meta name="description" content="Get in touch with Abhastra Automation. Visit our office in Sector 44, Gurugram, or contact us for AI and ERP solutions." />
        <link rel="canonical" href="https://abhastra.com/contact" />
      </Helmet>

      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-6 shadow-lg shadow-green-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">We are Online</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Conversation</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you have a question about our AI features, trials, pricing, or just want to say hello, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* --- LEFT SIDE: INFO & FORM --- */}
          <div className="space-y-10">
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: "Call Us", value: "+91-6350669414", href: "tel:+916350669414", color: "text-blue-400" },
                { icon: Mail, label: "Email Us", value: "contact@abhastra.com", href: "mailto:contact@abhastra.com", color: "text-purple-400" },
                { icon: MapPin, label: "Visit Us", value: "Sector 44, Gurugram", href: "https://maps.google.com/?q=Abhastra+Automation+Pvt.+Limited", color: "text-pink-400" },
                { icon: Globe, label: "Website", value: "abhastra.com", href: "https://abhastra.com", color: "text-cyan-400" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="font-semibold text-slate-200 text-sm group-hover:text-white truncate">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400 ml-1">Name</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400 ml-1">Email</label>
                    <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs text-slate-400 ml-1">Subject</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:border-blue-500 outline-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Careers</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-400 ml-1">Message</label>
                  <textarea className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all h-32 resize-none" placeholder="How can we help you?" />
                </div>

                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 group">
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>

          {/* --- RIGHT SIDE: VISUALS & MAP --- */}
          <div className="space-y-6">
            
            {/* Company Photo Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group h-[300px]"
            >
              <img 
                src="https://abhastra.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-19-at-13.01.55-scaled.jpeg" 
                alt="Abhastra Automation Office" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-bold mb-2">HEADQUARTERS</div>
                <h3 className="text-2xl font-bold text-white">Gurugram Office</h3>
                <p className="text-slate-400 text-sm">Plot-93, Sector 44, Gurugram, Haryana</p>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-slate-800 h-[400px] shadow-2xl relative group"
            >
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.616641777264!2d77.06941501507873!3d28.45210438248937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19842110f839%3A0x2ff5786e86f7c9b2!2sAbhastra+Automation+Pvt.+Limited!5e0!3m2!1sen!2sin!4v1560250097"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-500 group-hover:filter-none"
              ></iframe>
              
              {/* Map Overlay Button */}
              <a 
                href="https://maps.google.com/?q=Abhastra+Automation+Pvt.+Limited" 
                target="_blank" 
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-white text-slate-950 px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-slate-100 transition-colors"
              >
                Open in Maps <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;