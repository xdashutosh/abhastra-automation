import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Rocket, Globe, Users } from 'lucide-react';

const milestones = [
  {
    year: "2018",
    title: "The Inception",
    description: "Abhastra was founded with a vision to democratize AI automation. Started as a small team of 3 in a garage.",
    icon: Rocket
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Secured our first enterprise client for a custom ERP solution, validating our unique approach to automation.",
    icon: Award
  },
  {
    year: "2020",
    title: "Expansion into IoT",
    description: "Launched our dedicated Microcontroller & IoT division, bridging the gap between software AI and hardware.",
    icon: Globe
  },
  {
    year: "2021",
    title: "Team Growth",
    description: "Grew to a team of 20+ experts. Opened our second office and started working on proprietary LLM models.",
    icon: Users
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Expanded operations to 3 continents. Served clients in Healthcare, Finance, and Manufacturing sectors.",
    icon: Globe
  },
  {
    year: "2023",
    title: "AI Agent Platform",
    description: "Launched our flagship Autonomous Agent platform, revolutionizing how businesses handle complex workflows.",
    icon: Rocket
  },
  {
    year: "2024",
    title: "Future Forward",
    description: "Continuing to push boundaries with Generative AI and Agentic Workflows. The journey has just begun.",
    icon: Calendar
  }
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Story</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From humble beginnings to a global AI powerhouse. Here is the timeline of our journey and the milestones that defined us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-20 hidden md:block" />

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
                    <div className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      {/* Arrow for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-slate-100 transform rotate-45 ${index % 2 === 0 ? '-left-2 border-l border-b border-t-0 border-r-0' : '-right-2'}`} />
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
