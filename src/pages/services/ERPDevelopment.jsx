import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Database, Layout, Shield, RefreshCw, CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Custom Modules",
    description: "Tailor-made modules for HR, Finance, Supply Chain, and CRM that fit your exact business processes.",
    icon: Layout
  },
  {
    title: "Centralized Data",
    description: "Unified database architecture ensuring data consistency and real-time access across all departments.",
    icon: Database
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security protocols, role-based access control, and regular audits to protect your sensitive data.",
    icon: Shield
  },
  {
    title: "Seamless Integration",
    description: "Connects effortlessly with your existing tools, third-party APIs, and legacy systems.",
    icon: RefreshCw
  }
];

const benefits = [
  "Streamlined Workflows",
  "Real-time Reporting",
  "Improved Collaboration",
  "Regulatory Compliance",
  "Scalable Architecture",
  "Mobile Accessibility"
];

const ERPDevelopment = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ERP Development",
    "description": "Custom enterprise resource planning systems tailored to your industry needs. Streamline your entire business with robust, scalable, and secure ERP solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com"
    },
    "areaServed": "IN",
    "serviceType": "ERP Development, Enterprise Software, Business Management Systems"
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Custom ERP Development - Enterprise Resource Planning Solutions | Abhastra</title>
        <meta name="description" content="Streamline your business with custom ERP solutions. AI-enhanced enterprise resource planning systems that bring finance, HR, inventory, and sales into a single intuitive platform." />
        <meta name="keywords" content="ERP development, enterprise resource planning, custom ERP, business management software, enterprise software, ERP systems, AI-enhanced ERP" />
        <link rel="canonical" href="https://abhastra.com/services/erp-development" />
        
        <meta property="og:title" content="Custom ERP Development - Enterprise Resource Planning Solutions" />
        <meta property="og:description" content="Streamline your business with custom ERP solutions. AI-enhanced enterprise resource planning systems for unified business management." />
        <meta property="og:url" content="https://abhastra.com/services/erp-development" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Custom ERP Development - Enterprise Resource Planning Solutions" />
        <meta name="twitter:description" content="Streamline your business with custom ERP solutions. AI-enhanced enterprise resource planning systems." />
        
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 font-medium mb-4">
            <Database className="w-4 h-4" />
            <span>Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">ERP <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">Development</span></h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Streamline your entire business with our custom ERP solutions. We build robust, scalable, and secure enterprise resource planning systems tailored to your industry needs.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="ERP Dashboard" 
              className="rounded-2xl shadow-2xl border border-slate-200"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Unified Business Management</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Stop struggling with disconnected spreadsheets and siloed software. Our AI-enhanced ERP systems bring all your business functions—finance, HR, inventory, sales—into a single, intuitive platform. Gain 360-degree visibility and control over your operations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
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
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">{feature.title}</h3>
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

export default ERPDevelopment;
