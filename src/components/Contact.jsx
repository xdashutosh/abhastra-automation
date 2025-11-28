import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span></h2>
            <p className="text-slate-600 mb-10 text-lg">
              Ready to automate your business? Reach out to us for a consultation on AI, ERP, or custom development.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Call Us</div>
                  <div className="font-medium text-slate-900">+91-6350669414</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email Us</div>
                  <div className="font-medium text-slate-900">contact@abhastra.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Visit Us</div>
                  <div className="font-medium text-slate-900">Jaipur, Rajasthan, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-white border border-slate-100 p-8 rounded-2xl space-y-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-600 font-medium">Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors text-slate-900" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-600 font-medium">Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors text-slate-900" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-600 font-medium">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors text-slate-700">
                  <option>General Inquiry</option>
                  <option>AI Solutions</option>
                  <option>Web/App Development</option>
                  <option>IoT & Hardware</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-600 font-medium">Message</label>
                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors h-32 resize-none text-slate-900" placeholder="Tell us about your project..." />
              </div>

              <button className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
