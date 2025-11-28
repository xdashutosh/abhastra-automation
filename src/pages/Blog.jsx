import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "The Future of Autonomous Agents in Enterprise",
    excerpt: "How AI agents are moving beyond simple chatbots to executing complex, multi-step workflows in business environments.",
    date: "Oct 15, 2023",
    author: "Aditya Sharma",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Why Custom ERPs Beat Off-the-Shelf Solutions",
    excerpt: "A deep dive into the ROI of building tailored enterprise software versus adapting your business to rigid SaaS platforms.",
    date: "Sep 28, 2023",
    author: "Vikram Malhotra",
    category: "Enterprise Tech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Fine-Tuning Llama 3 for Medical Diagnosis",
    excerpt: "Our technical case study on adapting open-source LLMs for high-precision medical data analysis while ensuring privacy.",
    date: "Sep 10, 2023",
    author: "Priya Patel",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "IoT and AI: The Perfect Match",
    description: "Exploring how edge computing and microcontrollers are enabling real-time AI processing on devices.",
    excerpt: "Exploring how edge computing and microcontrollers are enabling real-time AI processing on devices.",
    date: "Aug 22, 2023",
    author: "Rahul Singh",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Navigating the AI Ethics Landscape",
    excerpt: "Responsible AI development is no longer optional. Here is our framework for building ethical and unbiased AI systems.",
    date: "Aug 05, 2023",
    author: "Sneha Gupta",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "React Native vs Flutter in 2024",
    excerpt: "A comprehensive comparison for CTOs and Engineering Managers deciding on their next mobile app stack.",
    date: "Jul 18, 2023",
    author: "Aditya Sharma",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Blog - AI Automation Insights & Tech Articles | Abhastra</title>
        <meta name="description" content="Read the latest insights on AI automation, ERP development, and software engineering from Abhastra. Tutorials, case studies, and industry trends in automation and technology." />
        <meta name="keywords" content="AI blog, automation blog, tech articles, software development blog, AI tutorials, ERP insights, technology trends" />
        <link rel="canonical" href="https://abhastra.com/blog" />
        
        <meta property="og:title" content="Blog - AI Automation Insights & Tech Articles" />
        <meta property="og:description" content="Read the latest insights on AI automation, ERP development, and software engineering from Abhastra." />
        <meta property="og:url" content="https://abhastra.com/blog" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Blog - AI Automation Insights & Tech Articles" />
        <meta name="twitter:description" content="Read the latest insights on AI automation and software engineering." />
      </Helmet>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 via-pink-500/5 to-orange-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Insights</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and case studies from the Abhastra team. Stay updated with the latest in AI and automation.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all mt-auto group-hover:text-purple-600">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
