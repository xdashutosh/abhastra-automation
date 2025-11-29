import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Bot, Zap, TrendingUp, Shield, CheckCircle, BarChart, Cpu } from 'lucide-react';

const features = [
  {
    title: "Intelligent Process Automation",
    description: "Automate repetitive tasks with cognitive bots that learn and adapt. Reduce manual effort by up to 80%.",
    icon: Bot
  },
  {
    title: "Predictive Analytics",
    description: "Leverage historical data to forecast trends, demand, and potential issues before they occur.",
    icon: BarChart
  },
  {
    title: "Computer Vision Solutions",
    description: "Implement visual quality control, facial recognition, and object detection systems for manufacturing and security.",
    icon: Cpu
  },
  {
    title: "Real-time Decision Making",
    description: "AI systems that process streams of data to make split-second decisions for optimization and safety.",
    icon: Zap
  }
];

const benefits = [
  "24/7 Operational Efficiency",
  "Significant Cost Reduction",
  "Elimination of Human Error",
  "Scalable Operations",
  "Data-Driven Insights",
  "Enhanced Customer Experience"
];

const AIAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation Solutions",
    "description": "Transform your business operations with cutting-edge AI automation solutions. We build intelligent systems that automate tasks, learn, and improve over time using Machine Learning and RPA.",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com"
    },
    "areaServed": "IN",
    "serviceType": "AI Automation, Intelligent Automation, RPA, Machine Learning"
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>AI Automation Solutions - Intelligent Business Process Automation | Abhastra</title>
        <meta name="description" content="Transform your business with AI automation. Combine Machine Learning with RPA for intelligent automation that handles unstructured data, makes decisions, and adapts without human intervention." />
        <meta name="keywords" content="AI automation, intelligent automation, RPA, robotic process automation, machine learning, business process automation, workflow automation, AI solutions" />
        <link rel="canonical" href="https://abhastra.com/services/ai-automation" />
        
        <meta property="og:title" content="AI Automation Solutions - Intelligent Business Process Automation" />
        <meta property="og:description" content="Transform your business with AI automation. Combine Machine Learning with RPA for intelligent automation that adapts and improves over time." />
        <meta property="og:url" content="https://abhastra.com/services/ai-automation" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="AI Automation Solutions - Intelligent Business Process Automation" />
        <meta name="twitter:description" content="Transform your business with AI automation. Combine Machine Learning with RPA for intelligent automation." />
        
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 font-medium mb-4">
            <Bot className="w-4 h-4" />
            <span>Core Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Automation</span></h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with our cutting-edge AI automation solutions. We build intelligent systems that not only automate tasks but also learn and improve over time.
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
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="AI Automation" 
              className="rounded-2xl shadow-2xl border border-slate-200"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Automate with AI?</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Traditional automation follows strict rules. Our AI automation adapts. By combining Machine Learning with Robotic Process Automation (RPA), we create "Intelligent Automation" that handles unstructured data, makes decisions, and handles exceptions without human intervention.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
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

export default AIAutomation;
