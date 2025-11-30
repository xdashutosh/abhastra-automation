import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Award, Rocket, Globe, Users, Coffee, Leaf, Zap } from 'lucide-react';

const milestones = [
  {
    year: "2016",
    title: "The Inception",
    description: "Our journey began in the vibrant city of Jaipur, within the walls of a college campus. A group of passionate students started developing software prototypes from hostel rooms, fueled by big ideas and endless cups of chai.",
    icon: Coffee
  },
  {
    year: "2018",
    title: "The Breakthrough",
    description: "We launched our first major product—an ERP solution tailored for schools and colleges. What started as a simple project quickly gained momentum, earning the trust of educational institutions across the region.",
    icon: Rocket
  },
  {
    year: "2020",
    title: "From Students to Pros",
    description: "Abhastra evolved from a student team into a full-fledged IT solutions provider. We expanded our expertise beyond education technology to serve diverse industries with custom software and web solutions.",
    icon: Users
  },
  {
    year: "2022",
    title: "Going Global",
    description: "With over 7 years of combined experience, we expanded our footprint globally. We began delivering cutting-edge technology solutions to a diverse clientele across India, the USA, Australia, and Europe.",
    icon: Globe
  },
  {
    year: "2024",
    title: "CSR & Community",
    description: "Beyond tech, we committed to our planet. We organized the 'World Environment Day 2025 – Bird House Distribution & Plantation Drive', proving that innovation and sustainability go hand in hand.",
    icon: Leaf
  },
  {
    year: "Future",
    title: "Unbound Innovation",
    description: "Our mission remains steadfast: to unlock the full potential of businesses through innovation. The story of Abhastra is still being written, and we invite you to be a part of it.",
    icon: Zap
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Team Collaboration",
    caption: "Where ideas take flight"
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    alt: "Strategic Meeting",
    caption: "Planning the next big innovation"
  },
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    alt: "Environment Drive",
    caption: "CSR: Plantation Drive 2025"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c54be3855033?auto=format&fit=crop&w=800&q=80",
    alt: "The Early Days",
    caption: "From hostel rooms to global offices"
  },
  {
    src: "https://images.unsplash.com/photo-1553877615-2f3315790720?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Office",
    caption: "Our headquarters in Gurgaon"
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    alt: "Client Success",
    caption: "Delivering excellence globally"
  }
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Our Story - The Journey of Abhastra Automation</title>
        <meta name="description" content="From hostel room prototypes in Jaipur to a global IT powerhouse. Discover the inspiring journey of Abhastra Automation and our mission to democratize technology." />
        <meta name="keywords" content="Abhastra story, company history, Jaipur startup, IT solutions journey, Abhastra Automation timeline" />
        <link rel="canonical" href="https://abhastra.com/about/our-story" />
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 via-pink-500/10 to-orange-500/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400">Story</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Abhastra Automation was born out of a shared dream to make technology accessible and impactful. From humble beginnings in a college campus to a global presence, here is the timeline of our journey.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto mb-32">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 opacity-20 hidden md:block" />

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
                    <div className={`bg-slate-900 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 font-bold text-sm mb-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                        {milestone.description}
                      </p>
                      
                      {/* Arrow for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 border-t border-r border-slate-800 transform rotate-45 ${index % 2 === 0 ? '-left-2 border-l border-b border-t-0 border-r-0' : '-right-2'}`} />
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 border-4 border-slate-950">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Life at <span className="text-blue-500">Abhastra</span></h2>
            <p className="text-slate-400">Capturing moments of innovation, celebration, and teamwork.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-12 w-full h-64 overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-lg drop-shadow-md">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;