import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Suman Shekhar",
    role: "Founder & CEO",
    bio: "B.Tech graduate from Rajasthan Technical University with 7+ years of global experience in project management and design architecture. Driving innovation and excellence at Abhastra Automation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ashok Kumar",
    role: "Founding Engineer",
    bio: "B.Tech graduate with 7+ years of expertise in technology strategy and system architecture. Leads innovation and drives technical excellence across our core platforms.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vishal Vaghela",
    role: "Project Head",
    bio: "B.Tech graduate with 6+ years of experience in project execution and team management. Ensures seamless delivery and operational excellence for client success.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Shakti Dhar Suman",
    role: "Strategic Leader",
    bio: "Distinguished alumnus of IIT BHU and IIFT Delhi with 26 years of professional expertise. A successful entrepreneur managing multi-million-dollar businesses with invaluable strategic insights.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Purnendra Kishore",
    role: "Strategic Advisor",
    bio: "B.Tech from IIT BHU and PGDM Gold Medalist from IIM Kolkata. Brings 26 years of experience as a strategic leader, successfully managing and scaling multi-million-dollar enterprises.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ram Kumawat",
    role: "Senior Advisor",
    bio: "Seasoned leader with 30 years of global industry experience, specifically in the logistics sector. His visionary guidance plays a pivotal role in shaping our strategic direction.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const CoreTeam = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Core Team - Abhastra Automation | Meet the Experts</title>
        <meta name="description" content="Meet the visionary leadership behind Abhastra Automation. A diverse team of IIT & IIM alumni, engineers, and strategists driving digital transformation." />
        <meta name="keywords" content="Abhastra team, Suman Shekhar, Ashok Kumar, automation experts, tech leadership, IIT alumni, digital transformation" />
        <link rel="canonical" href="https://abhastra.com/core-team/" />
      </Helmet>
      
      {/* Background decoration - Adjusted for Dark Mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 via-pink-500/10 to-orange-500/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400">Core Team</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            The brilliant minds behind Abhastra's innovations. From tech enthusiasts and creative strategists to problem solvers and meticulous planners, we are united by a shared vision to revolutionize industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 border border-slate-800 hover:border-slate-700"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="#" className="p-2 bg-slate-800/80 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors border border-slate-700 hover:border-blue-500" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-slate-800/80 backdrop-blur-md rounded-full text-white hover:bg-blue-400 transition-colors border border-slate-700 hover:border-blue-400" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-slate-800/80 backdrop-blur-md rounded-full text-white hover:bg-red-500 transition-colors border border-slate-700 hover:border-red-500" aria-label="Email">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 group-hover:text-slate-300 transition-colors">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;