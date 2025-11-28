import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code, Layers, CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Cross-Platform Apps",
    description: "Build once, deploy everywhere. High-performance mobile apps for iOS and Android using React Native and Flutter.",
    icon: Smartphone
  },
  {
    title: "Modern Web Apps",
    description: "Fast, SEO-friendly, and responsive web applications built with Next.js, React, and modern CSS frameworks.",
    icon: Globe
  },
  {
    title: "Clean Code Architecture",
    description: "Maintainable, scalable, and well-documented codebases that are easy to extend and debug.",
    icon: Code
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that ensures high engagement, intuitive navigation, and beautiful aesthetics.",
    icon: Layers
  }
];

const benefits = [
  "Native Performance",
  "Responsive Design",
  "SEO Optimization",
  "Cloud Integration",
  "PWA Support",
  "Secure Authentication"
];

const AppWebDevelopment = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App & Web Development",
    "description": "Craft stunning digital experiences with our full-stack development services. From complex enterprise web applications to engaging mobile apps, we deliver software that users love.",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com"
    },
    "areaServed": "IN",
    "serviceType": "Web Development, Mobile App Development, Full-Stack Development"
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>App & Web Development - Full-Stack Mobile & Web Solutions | Abhastra</title>
        <meta name="description" content="Create stunning digital experiences with our full-stack development services. Enterprise web applications, mobile apps, and custom software that combines aesthetic design with powerful engineering." />
        <meta name="keywords" content="web development, mobile app development, full-stack development, custom software, React development, Node.js, responsive design, progressive web apps, PWA" />
        <link rel="canonical" href="https://abhastra.com/services/app-web-development" />
        
        <meta property="og:title" content="App & Web Development - Full-Stack Mobile & Web Solutions" />
        <meta property="og:description" content="Create stunning digital experiences with our full-stack development services. Enterprise web applications and mobile apps that users love." />
        <meta property="og:url" content="https://abhastra.com/services/app-web-development" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="App & Web Development - Full-Stack Mobile & Web Solutions" />
        <meta name="twitter:description" content="Create stunning digital experiences with our full-stack development services." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 font-medium mb-4">
            <Globe className="w-4 h-4" />
            <span>Digital Experiences</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">App & Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Development</span></h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We craft stunning digital experiences. From complex enterprise web applications to engaging mobile apps, we deliver software that users love.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Mobile and Web Development" 
              className="rounded-2xl shadow-2xl border border-slate-200"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Full-Stack Excellence</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              In a mobile-first world, your digital presence is your storefront. We combine aesthetic design with powerful engineering to create apps that are not just functional, but delightful. Whether it's a B2B platform or a consumer-facing app, we ensure speed, security, and scalability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppWebDevelopment;
