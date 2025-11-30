import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Bot, Zap, TrendingUp, Shield, CheckCircle, BarChart, Cpu, 
  Brain, Network, FileSearch, Database, ArrowRight, Activity, 
  Lock, Factory, Stethoscope, Landmark, ShoppingCart
} from 'lucide-react';

// --- Data Content ---

const features = [
  {
    title: "Cognitive RPA",
    description: "Beyond simple scripts. Our bots handle unstructured data, understand sentiment, and make decision-based actions in real-time.",
    icon: Bot,
    color: "cyan"
  },
  {
    title: "Predictive Analytics",
    description: "Stop reacting, start preventing. Our ML models analyze historical patterns to forecast demand, equipment failures, and market trends.",
    icon: TrendingUp,
    color: "purple"
  },
  {
    title: "Computer Vision",
    description: "Automate visual inspections. From quality control in manufacturing to facial recognition for security, we give machines the power to see.",
    icon: Activity,
    color: "emerald"
  },
  {
    title: "NLP & Chatbots",
    description: "24/7 intelligent customer support. Advanced Natural Language Processing that understands context, intent, and complex queries.",
    icon: FileSearch,
    color: "pink"
  }
];

const industries = [
  { name: "Manufacturing", icon: Factory, desc: "Predictive maintenance & defect detection." },
  { name: "Healthcare", icon: Stethoscope, desc: "Patient data analysis & diagnostic aid." },
  { name: "Finance", icon: Landmark, desc: "Fraud detection & algorithmic trading." },
  { name: "Retail", icon: ShoppingCart, desc: "Demand forecasting & personalized UX." }
];

const processSteps = [
  { id: 1, title: "Data Audit", desc: "We analyze your data infrastructure." },
  { id: 2, title: "Model Training", desc: "Developing custom ML algorithms." },
  { id: 3, title: "Integration", desc: "Seamless embedding into workflows." },
  { id: 4, title: "Optimization", desc: "Continuous learning & improvement." }
];

// --- Custom AI Dashboard Mockup Component ---
const AIDashboardMockup = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
      
      {/* Dashboard Frame */}
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs text-slate-400 font-mono">abhastra_core_v4.1.exe</div>
        </div>

        {/* Content Area */}
        <div className="p-6 grid grid-cols-3 gap-4">
          
          {/* Main Graph Area */}
          <div className="col-span-2 bg-slate-950/50 rounded-lg p-4 border border-slate-800 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">System Efficiency</span>
              <span className="text-xs text-green-400 font-mono">98.4% ▲</span>
            </div>
            {/* CSS Bar Chart */}
            <div className="flex items-end justify-between h-32 gap-2 mt-2">
              {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="w-full bg-gradient-to-t from-cyan-900 to-cyan-500 rounded-t-sm opacity-80"
                />
              ))}
            </div>
            {/* Scanning Line Animation */}
            <motion.div 
              animate={{ left: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[2px] bg-white/30 shadow-[0_0_10px_white]"
            />
          </div>

          {/* Side Metrics */}
          <div className="col-span-1 space-y-4">
            <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
              <div className="text-[10px] text-slate-400 mb-1">Active Bots</div>
              <div className="text-2xl font-bold text-white">1,024</div>
              <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 w-[80%] h-full" />
              </div>
            </div>
            <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
              <div className="text-[10px] text-slate-400 mb-1">Tasks Saved</div>
              <div className="text-xl font-bold text-white">45.2k</div>
              <div className="text-[10px] text-purple-400">Total hrs: 890</div>
            </div>
          </div>

          {/* Bottom Console */}
          <div className="col-span-3 bg-slate-950 rounded-lg p-3 border border-slate-800 font-mono text-[10px]">
            <div className="text-green-400">$ init_sequence_start</div>
            <div className="text-slate-400">$ loading_modules... [OK]</div>
            <div className="text-slate-400">$ connecting_neural_net... [OK]</div>
            <div className="text-cyan-400 blink">$ waiting_for_input_</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AIAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation Solutions",
    "description": "Transform your business operations with cutting-edge AI automation solutions by Abhastra Automation.",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com"
    },
    "serviceType": "AI Automation, Intelligent Automation, RPA, Machine Learning"
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>AI Automation Solutions - Intelligent Business Process Automation | Abhastra</title>
        <meta name="description" content="Transform your business with AI automation. Combine Machine Learning with RPA for intelligent automation that handles unstructured data, makes decisions, and adapts." />
        <link rel="canonical" href="https://abhastra.com/services/ai-automation" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-900/10 to-purple-500/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-medium mb-6 shadow-lg shadow-cyan-500/10">
            <Brain className="w-4 h-4" />
            <span>Intelligent Core</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Automate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Intelligence</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Abhastra transforms static workflows into dynamic, self-learning systems. We combine Robotic Process Automation (RPA) with advanced Machine Learning to drive efficiency at scale.
          </p>
        </motion.div>

        {/* --- Main Value Prop & Visual --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Visual Side: AI Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <AIDashboardMockup />
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Beyond Simple Automation</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Traditional automation follows rules. <span className="text-cyan-400 font-semibold">Our AI adapts.</span> We build systems that don't just execute tasks but understand the data they process. From reading handwritten invoices to predicting machine failure, our solutions act as a force multiplier for your workforce.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                "80% Reduced Manual Effort",
                "99.9% Processing Accuracy",
                "Scalable Cloud Architecture",
                "Real-time Decision Making"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-2">
              Deploy AI Solutions <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* --- Feature Grid --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400">The technology stack powering our intelligent systems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${feature.color}-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-${feature.color}-500/50 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- Industry & Process Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Industries Column */}
          <div className="lg:col-span-1 bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Factory className="w-5 h-5 text-purple-400" /> Industries We Serve
            </h3>
            <div className="space-y-6">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-start gap-4 group cursor-default">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <ind.icon className="w-5 h-5 text-slate-300 group-hover:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{ind.name}</h4>
                    <p className="text-xs text-slate-500">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Roadmap Column */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
             
             <h3 className="text-xl font-bold text-white mb-8">Implementation Roadmap</h3>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
               {processSteps.map((step) => (
                 <div key={step.id} className="relative pl-8 border-l border-slate-600">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                   <span className="text-xs text-cyan-400 font-mono mb-1 block">Step 0{step.id}</span>
                   <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                   <p className="text-sm text-slate-400">{step.desc}</p>
                 </div>
               ))}
             </div>

             <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
               <p className="text-sm text-slate-300 italic">"We handle the complexity, so you can focus on growth."</p>
               <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs text-slate-400">System Online</span>
               </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AIAutomation;