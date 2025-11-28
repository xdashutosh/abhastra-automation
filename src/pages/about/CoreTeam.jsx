import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Aditya Sharma",
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
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Core Team</span></h1>
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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
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
