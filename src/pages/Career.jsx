import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Clock, ArrowRight, Heart, 
  Zap, Coffee, Users, X, Upload, Send 
} from 'lucide-react';

// --- Job Data ---
const jobs = [
  {
    id: "ai-eng-01",
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    salary: "₹18L - ₹35L / year",
    description: "Lead our LLM fine-tuning initiatives and build next-gen RAG pipelines."
  },
  {
    id: "full-stack-02",
    title: "Full Stack Developer",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    salary: "₹12L - ₹24L / year",
    description: "Build scalable web applications using Next.js 14, Node.js, and PostgreSQL."
  },
  {
    id: "iot-arch-03",
    title: "IoT Solutions Architect",
    department: "Hardware",
    location: "Bangalore, India (On-site)",
    type: "Full-time",
    salary: "₹20L - ₹40L / year",
    description: "Design complex IoT solutions using ESP32, MQTT, and custom microcontrollers."
  },
  {
    id: "ui-ux-04",
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote",
    type: "Contract",
    salary: "Competitive Hourly Rate",
    description: "Create beautiful, intuitive user interfaces for enterprise AI platforms."
  }
];

const perks = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Premium health insurance for you and your family."
  },
  {
    icon: Zap,
    title: "Latest Tech",
    description: "MacBook Pros M3 and 4K monitors for everyone."
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours."
  },
  {
    icon: Users,
    title: "Annual Retreats",
    description: "All-expenses-paid trips to exotic locations."
  }
];

// --- Application Modal Component ---
const ApplicationModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    resume: null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 w-full max-w-lg rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full animate-ping absolute" />
              <div className="w-8 h-8 bg-green-500 rounded-full relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
            <p className="text-slate-400 mb-6">We have received your application for <span className="text-blue-400">{job.title}</span>. Our HR team will review it and get back to you shortly.</p>
            <button onClick={onClose} className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700">Close</button>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-slate-800 bg-slate-950/50">
              <h2 className="text-xl font-bold text-white">Apply for {job.title}</h2>
              <p className="text-slate-400 text-sm mt-1">{job.location} • {job.type}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Portfolio / LinkedIn URL</label>
                <input 
                  type="url" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="https://linkedin.com/in/johndoe"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Resume (PDF)</label>
                <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer bg-slate-800/50">
                  <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                  <p className="text-sm text-slate-400">Click to upload or drag and drop</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Why do you want to join us?</label>
                <textarea 
                  rows="3"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell us about yourself..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>Submit Application <Send className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  // SEO Schema for Job Postings
  const jobPostingsSchema = jobs.map(job => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Abhastra Automation",
      "value": job.id
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "sameAs": "https://abhastra.com",
      "logo": "https://abhastra.com/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location.includes("Remote") ? "Remote" : "Bangalore",
        "addressCountry": "IN"
      }
    },
    "employmentType": job.type === "Full-time" ? "FULL_TIME" : "CONTRACTOR",
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "unitText": "YEAR",
        "value": job.salary
      }
    }
  }));

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Careers at Abhastra - Join the AI Revolution</title>
        <meta name="description" content="Build the future of AI and Automation with Abhastra. We are hiring Engineers, Designers, and Architects. View open positions and apply today." />
        <meta name="keywords" content="Abhastra careers, AI jobs India, remote developer jobs, software engineer hiring, tech jobs bangalore" />
        <link rel="canonical" href="https://abhastra.com/career" />
        <meta property="og:title" content="Careers at Abhastra - Join the AI Revolution" />
        <meta property="og:description" content="We are hiring! Join our team of innovators building the next generation of AI solutions." />
        <script type="application/ld+json">
          {JSON.stringify(jobPostingsSchema)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-950 to-purple-600/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-blue-400 font-medium mb-6 shadow-lg shadow-blue-500/10">
            <Briefcase className="w-4 h-4" />
            <span>We are Hiring</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Mission</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Build the future of automation with us. We're looking for passionate individuals who want to make a real impact on how the world works.
          </p>
        </motion.div>

        {/* --- Perks Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 mx-auto bg-slate-950 rounded-xl flex items-center justify-center mb-5 border border-slate-800 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
                  <Icon className="w-7 h-7 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{perk.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* --- Job Listings --- */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Open Positions</h2>
            <div className="text-sm text-slate-400">{jobs.length} Roles Available</div>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/30 transition-all group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedJob(job)}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                      {job.location.includes("Remote") && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">REMOTE</span>
                      )}
                    </div>
                    <p className="text-slate-400 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-3 min-w-[140px]">
                    <span className="text-slate-300 font-mono text-sm">{job.salary}</span>
                    <button className="px-6 py-2.5 rounded-lg bg-white text-slate-950 font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Application Form Modal --- */}
      <AnimatePresence>
        {selectedJob && (
          <ApplicationModal 
            job={selectedJob} 
            onClose={() => setSelectedJob(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Career;