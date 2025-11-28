import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Suman Shekhar",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in AI and Automation. Passionate about transforming businesses through technology.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Priya Patel",
    role: "CTO",
    bio: "Expert in Large Language Models and Distributed Systems. Leads our technical strategy and innovation.",
    image: "https://images.unsplash.com/photo-1573496359-136d475523c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rahul Singh",
    role: "Head of AI Research",
    bio: "PhD in Machine Learning. specialized in Computer Vision and NLP. Drives our core AI capabilities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sneha Gupta",
    role: "Lead Product Designer",
    bio: "Creative mind behind our intuitive user interfaces. Believes in design-driven development.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vikram Malhotra",
    role: "Head of Operations",
    bio: "Ensures smooth delivery and client satisfaction. Master of agile methodologies and project management.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Ananya Roy",
    role: "Marketing Director",
    bio: "Storyteller and brand strategist. Connecting our innovations with the right audience.",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const CoreTeam = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Our Team - Meet the Experts at Abhastra Automation</title>
        <meta name="description" content="Meet the talented team behind Abhastra Automation. Expert engineers, AI specialists, and innovators driving digital transformation and intelligent automation solutions." />
        <meta name="keywords" content="Abhastra team, AI experts, software engineers, automation specialists, tech team, leadership" />
        <link rel="canonical" href="https://abhastra.com/about/core-team" />
        
        <meta property="og:title" content="Our Team - Meet the Experts at Abhastra Automation" />
        <meta property="og:description" content="Meet the talented team behind Abhastra Automation. Expert engineers and AI specialists driving digital transformation." />
        <meta property="og:url" content="https://abhastra.com/about/core-team" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Our Team - Meet the Experts at Abhastra Automation" />
        <meta name="twitter:description" content="Meet the talented team behind Abhastra Automation." />
      </Helmet>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 via-pink-500/5 to-orange-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-orange-600">Core Team</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The brilliant minds behind Abhastra's innovations. We are a diverse team of engineers, researchers, and designers united by a passion for AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
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
