import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Coffee, Users } from 'lucide-react';

const jobs = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    description: "We are looking for an experienced AI Engineer to lead our LLM fine-tuning initiatives."
  },
  {
    title: "Full Stack Developer",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Join our product team to build scalable web applications using Next.js and Node.js."
  },
  {
    title: "IoT Solutions Architect",
    department: "Hardware",
    location: "Bangalore, India (On-site)",
    type: "Full-time",
    description: "Design and implement complex IoT solutions using ESP32 and custom microcontrollers."
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote",
    type: "Contract",
    description: "Create beautiful and intuitive user interfaces for our enterprise AI platforms."
  }
];

const perks = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs."
  },
  {
    icon: Zap,
    title: "Latest Tech",
    description: "MacBook Pros and top-tier equipment for everyone."
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description: "Remote-first culture with flexible working hours."
  },
  {
    icon: Users,
    title: "Team Retreats",
    description: "Annual offsites to exotic locations for bonding."
  }
];

const Career = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mission</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Build the future of automation with us. We're looking for passionate individuals who want to make a real impact.
          </p>
        </motion.div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-slate-600 text-sm">{perk.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Job Listings */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
