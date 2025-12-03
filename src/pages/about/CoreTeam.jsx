import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Github, Globe, Code2, Cpu, Shield, Palette, Terminal, Database, LineChart, Server } from 'lucide-react';

// --- Data Configuration ---

const leadership = [
  {
    name: "Suman Shekhar",
    role: "Founder & CEO",
    bio: "B.Tech graduate from Rajasthan Technical University with 7+ years of global experience. The visionary force driving innovation and excellence at Abhastra Automation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8-jesDuWUfW4YYjLVKkmY8QPZG9Hj_MmeA&s",
    social: { linkedin: "#", twitter: "#", email: "#" }
  }
];

const guidingMinds = [
  {
    name: "Ram Kumawat",
    role: "Senior Advisor",
    bio: "Seasoned leader with 30 years of global industry experience in logistics. His visionary guidance shapes our strategic direction.",
    image: "https://abhastra.com/wp-content/uploads/2024/12/ramkumawat.jpeg"
  },
  {
    name: "Shakti Dhar Suman",
    role: "Strategic Leader",
    bio: "IIT BHU & IIFT Delhi alumnus with 26 years of expertise. A successful entrepreneur providing invaluable strategic insights.",
    image: "https://abhastra.com/wp-content/uploads/2024/12/shaktidhar-suman.webp"
  },
  {
    name: "Purnendra Kishore",
    role: "Strategic Advisor",
    bio: "IIT BHU & IIM Kolkata Gold Medalist. Brings 26 years of experience in scaling multi-million-dollar enterprises.",
    image: "https://abhastra.com/wp-content/uploads/2024/12/punendra_kishore-removebg-preview.webp"
  }
];

const techLead = [
  {
    name: "Ashutosh Chaudhary",
    role: "Tech Team Lead",
    bio: "Leading the technological vision with a focus on scalable architecture and next-gen solutions. Orchestrating the development of robust automation systems.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGPcoyHdmAslA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674529384256?e=2147483647&v=beta&t=S0VzSDJVXh8UjChZbPf4o4K5jnjlx-zfXGHR6UlBjFo",
    icon: <Code2 className="w-6 h-6 text-blue-400" />
  }
];

const techTeam = [
  {
    name: "Ashok Kumar",
    role: "Founding Engineer",
    bio: "B.Tech graduate with 7+ years of expertise. The technical backbone driving core platform innovation.",
    image: "https://abhastra.com/wp-content/uploads/2024/12/ashok.jpeg",
    icon: <Cpu className="w-5 h-5 text-purple-400" />
  },
  {
    name: "Arjit Malik",
    role: "Senior Software Developer",
    bio: "Expert in complex system architecture and high-performance code execution.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH2eWkHLL5SAw/profile-displayphoto-scale_400_400/B56Zq9ljnGHQAg-/0/1764117331589?e=1766620800&v=beta&t=iTjLPxi5W98GvyFB-4cnYZBc8VBCWP5qKXY3eLnuK2s",
    icon: <Terminal className="w-5 h-5 text-green-400" />
  },
  {
    name: "Sashikant Joshi",
    role: "Cyber Security Expert",
    bio: "Safeguarding digital assets with advanced threat detection and secure infrastructure protocols.",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEfiRlDSiLdEg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1625497322340?e=1766620800&v=beta&t=-UdJ0RlTKlMkLaDtNQkhCFrOiOu_BsTrZ9KyAVwdOS4",
    icon: <Shield className="w-5 h-5 text-red-400" />
  },
  {
    name: "Ayushi Choudhary",
    role: "UI/UX Developer",
    bio: "Crafting intuitive and immersive user experiences that bridge the gap between human and machine.",
    image: "",
    icon: <Palette className="w-5 h-5 text-pink-400" />
  },
  {
    name: "Ritik Latiyan",
    role: "Full Stack Developer",
    bio: "Master of both worlds, ensuring seamless integration between client-side magic and server-side logic.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE0epUdy8Y_8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722691844280?e=2147483647&v=beta&t=0TfE-7e-Um_48d8QVK3Zcg15szqc4lc4lu1nQPBj8Ok",
    icon: <Globe className="w-5 h-5 text-indigo-400" />
  },
  {
    name: "Abhinav Sehrawat",
    role: "Flutter Developer",
    bio: "Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEyyK0LyiteKg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698397750759?e=2147483647&v=beta&t=iYK_cYogMLy9b2vr8SEMdsU9YWf1FIYyRIsNJhOkKYY",
    icon: <Code2 className="w-5 h-5 text-cyan-400" />
  },
  {
    name: "Vedant Joshi",
    role: "AI/ML Engineer",
    bio: "Developing intelligent algorithms that power automation and predictive analytics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Cpu className="w-5 h-5 text-yellow-400" />
  },
  {
    name: "Vishnu Shukla",
    role: "Frontend Developer",
    bio: "Translating design concepts into responsive, interactive, and visually stunning web interfaces.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEyfXNy-7AwKw/profile-displayphoto-shrink_200_200/B56ZW64wbtHQAY-/0/1742597196566?e=2147483647&v=beta&t=qMh1N9nI98J2gorZf0Zx3ShAqUU2CILhG41TW9UWXrg",
    icon: <Code2 className="w-5 h-5 text-blue-400" />
  },
  {
    name: "Akash Yadav",
    role: "Backend Developer",
    bio: "Architecting the server-side logic and databases that power our high-scale applications.",
    image: "", // Empty image
    icon: <Database className="w-5 h-5 text-slate-400" />
  },
  {
    name: "Akshit Choudhary",
    role: "DevOps Engineer",
    bio: "Streamlining development lifecycles and ensuring 99.9% system uptime through automated pipelines.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFds8UGNYze4A/profile-displayphoto-shrink_400_400/B56ZZjupYKHUAk-/0/1745429899128?e=1766620800&v=beta&t=2M_HH1-DdNmN6Ea7BgyOKsQZ-KlZCI168qavMhvvxlY",
    icon: <Server className="w-5 h-5 text-emerald-400" />
  },
  {
    name: "Divyansh Saharan",
    role: "Digital Marketing & SEO",
    bio: "Amplifying our digital presence and ensuring our innovative solutions reach the right audience.",
    image: "", // Empty image
    icon: <LineChart className="w-5 h-5 text-orange-400" />
  }
];

// --- Components ---

const SectionHeader = ({ title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      {title}
    </h2>
    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

const ProfileCard = ({ member, isLarge = false }) => {
  // Logic to handle missing images:
  // If image is present and not empty, use it.
  // Otherwise, generate a placeholder avatar using ui-avatars.com with site theme colors.
  const imageSrc = member.image && member.image.trim() !== "" 
    ? member.image 
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e293b&color=60a5fa&size=400&bold=true`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 ${isLarge ? 'md:max-w-2xl mx-auto' : ''}`}
    >
      <div className={`relative ${isLarge ? 'md:flex' : ''}`}>
        <div className={`${isLarge ? 'md:w-2/5 h-80 md:h-auto' : 'h-64'} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
          <img 
            src={imageSrc}
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            // Add a fallback on error just in case a specific URL breaks
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1e293b&color=60a5fa&size=400&bold=true`;
            }}
          />
        </div>
        <div className={`p-6 ${isLarge ? 'md:w-3/5 md:flex md:flex-col md:justify-center' : ''} relative z-20`}>
          <div className="flex items-center gap-2 mb-2">
            {member.icon && <span className="p-1.5 bg-slate-800 rounded-lg">{member.icon}</span>}
            <h3 className={`${isLarge ? 'text-3xl' : 'text-xl'} font-bold text-white group-hover:text-blue-400 transition-colors`}>
              {member.name}
            </h3>
          </div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium mb-4 uppercase tracking-wide text-sm">
            {member.role}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {member.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={18} /></a>
            {member.role.includes("Developer") && <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></a>}
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoreTeam = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden font-sans">
      <Helmet>
        <title>Our Team - Abhastra Automation | Leadership & Experts</title>
        <meta name="description" content="Meet the visionary leadership and expert technical team behind Abhastra Automation." />
      </Helmet>

      {/* Abstract Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. Leadership Section */}
        <div className="mb-24">
          <SectionHeader title="Leadership" subtitle="The visionary steering Abhastra towards global excellence." />
          {leadership.map((leader, idx) => (
            <ProfileCard key={idx} member={leader} isLarge={true} />
          ))}
        </div>

        {/* 2. Guiding Minds Section */}
        <div className="mb-24">
          <SectionHeader 
            title="Guiding Minds" 
            subtitle="Industry veterans providing strategic wisdom and direction." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guidingMinds.map((guide, idx) => (
              <ProfileCard key={idx} member={guide} />
            ))}
          </div>
        </div>

        {/* 3. Tech Team Lead */}
        <div className="mb-24">
          <SectionHeader title="Technical Leadership" subtitle="Orchestrating innovation and system architecture." />
          {techLead.map((lead, idx) => (
            <ProfileCard key={idx} member={lead} isLarge={true} />
          ))}
        </div>

        {/* 4. The Tech Team */}
        <div>
          <SectionHeader 
            title="The Tech Team" 
            subtitle="The brilliant engineers, developers, and creatives building the future." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techTeam.map((techie, idx) => (
              <ProfileCard key={idx} member={techie} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoreTeam;