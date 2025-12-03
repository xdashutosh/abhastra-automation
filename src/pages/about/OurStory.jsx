import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Globe, Users, Coffee, Leaf, Zap, Target, Eye, Heart, ShieldCheck, Lightbulb } from 'lucide-react';

// Data scraped and adapted from Abhastra Automation's story
const milestones = [
  {
    year: "The Beginning",
    title: "A Dream in Jaipur",
    description: "Our journey began in the vibrant city of Jaipur, within the walls of a college campus. A group of passionate students envisioned a company that could bridge the gap between education and technology. Developing software prototypes from hostel rooms, fueled by late-night brainstorming and endless cups of chai, the foundation of Abhastra was laid.",
    icon: Coffee
  },
  {
    year: "The Breakthrough",
    title: "First Major Product",
    description: "We launched our first ERP solution tailored specifically for schools and colleges. What started as a simple project gained rapid momentum, earning the trust of educational institutions across the region and marking our transition from a student team to professional developers.",
    icon: Rocket
  },
  {
    year: "Evolution",
    title: "Full-Fledged IT Solutions",
    description: "Abhastra evolved into a comprehensive IT solutions provider. We expanded our expertise beyond education technology to serve diverse industries, specializing in custom software, website design, and mobile app creation to solve real-world business problems.",
    icon: Users
  },
  {
    year: "Expansion",
    title: "Global Footprint",
    description: "With over 7 years of combined experience, we expanded our reach globally. Today, we deliver cutting-edge technology solutions to a diverse clientele across India, the USA, Australia, and Europe, staying true to our roots of innovation and quality.",
    icon: Globe
  },
  {
    year: "2025",
    title: "Commitment to Sustainability",
    description: "Proving that innovation and sustainability go hand in hand, we launched significant CSR initiatives, including the 'World Environment Day 2025 – Bird House Distribution & Plantation Drive,' reinforcing our pledge to the planet.",
    icon: Leaf
  },
  {
    year: "Future",
    title: "Autonomous Solutions",
    description: "Our story continues as we aim to establish ourselves as a pioneering global leader in autonomous solutions and AI for the 21st century, empowering individuals and organizations to achieve transformative growth.",
    icon: Zap
  }
];

const values = [
  {
    title: "Innovation",
    description: "We pride ourselves on crafting innovative digital products that align perfectly with client needs.",
    icon: Lightbulb
  },
  {
    title: "Teamwork",
    description: "Our journey is built on the strength of collaboration, from hostel rooms to global offices.",
    icon: Users
  },
  {
    title: "Customer Connection",
    description: "We maintain a deep connection to our customers, ensuring solutions that make lives easier.",
    icon: Heart
  },
  {
    title: "Excellence",
    description: "Committed to precision and high-quality deliverables that drive business success.",
    icon: ShieldCheck
  }
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Our Story - Abhastra Automation | From Jaipur to the World</title>
        <meta name="description" content="Discover the journey of Abhastra Automation. From student prototypes in Jaipur to a global IT solutions provider. Read about our mission, vision, and 7+ years of innovation." />
        <meta name="keywords" content="Abhastra story, Abhastra Automation history, Jaipur IT startup, company timeline, mission and vision, software development journey" />
        <link rel="canonical" href="https://abhastra.com/our-story/" />
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-900 via-slate-900 to-purple-900/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-3 block">Since 2016</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            From a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dream</span> to Innovation
          </h1>
          <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Abhastra Automation Pvt. Ltd. was born out of a shared dream to make technology accessible and impactful. 
            From humble beginnings in a college campus to a global presence, we invite you to be part of our story.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto mb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm mb-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center shadow-lg group-hover:border-blue-500 transition-colors">
                      <Icon className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Target className="w-32 h-32 text-blue-400" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-400" /> Our Mission
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To unlock the full potential of businesses by driving growth, ensuring sustainability, and delivering innovative IT solutions. We are committed to minimizing inefficiencies, maximizing profitability, and empowering organizations to achieve their strategic goals through cutting-edge technology.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/20 to-slate-900 border border-purple-500/20 p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Eye className="w-32 h-32 text-purple-400" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-purple-400" /> Our Vision
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To establish ourselves as a pioneering global leader in autonomous solutions for the 21st century. We strive to empower individuals and organizations by developing advanced Artificial Intelligence programs that enable transformative growth and deliver unparalleled performance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Built on <span className="text-blue-500">Values</span></h2>
            <p className="text-slate-400">The core principles that drive our innovation and growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{val.title}</h3>
                  <p className="text-slate-400 text-sm">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default OurStory;