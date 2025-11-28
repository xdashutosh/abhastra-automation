import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Sparkles, Lock, CheckCircle, DatabaseBackupIcon } from 'lucide-react';

const features = [
  {
    title: "Custom Fine-Tuning",
    description: "Train open-source models (Llama 3, Mistral) on your proprietary data for domain-specific accuracy.",
    icon: Brain
  },
  {
    title: "RAG Pipelines",
    description: "Implement Retrieval-Augmented Generation to ground AI responses in your company's knowledge base.",
    icon: DatabaseBackupIcon
  },
  {
    title: "AI Agents",
    description: "Deploy autonomous agents that can plan, reason, and execute complex multi-step workflows.",
    icon: Sparkles
  },
  {
    title: "Private Deployment",
    description: "Run LLMs entirely on your own infrastructure or private cloud, ensuring 100% data privacy.",
    icon: Lock
  }
];

const benefits = [
  "Domain Expertise",
  "Data Privacy",
  "Reduced Latency",
  "Cost Optimization",
  "Context Awareness",
  "Multimodal Capabilities"
];

// Helper component for icon since Database is not imported
const Database = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const LLMs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Large Language Models (LLM) Development",
    "description": "Unlock the power of Generative AI with custom Large Language Models. We build, fine-tune, and deploy state-of-the-art LLMs that understand your business context and generate value.",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com"
    },
    "areaServed": "IN",
    "serviceType": "LLM Development, Generative AI, AI Model Fine-tuning, RAG Implementation"
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Large Language Models (LLM) Development - Custom AI Solutions | Abhastra</title>
        <meta name="description" content="Build custom Large Language Models with Abhastra. Fine-tune LLMs on your data, implement RAG, and create AI assistants that understand your business. Secure, specific, and powerful." />
        <meta name="keywords" content="large language models, LLM, generative AI, custom AI models, AI fine-tuning, RAG, retrieval augmented generation, GPT, ChatGPT, AI assistants, NLP" />
        <link rel="canonical" href="https://abhastra.com/services/llms" />
        
        <meta property="og:title" content="Large Language Models (LLM) Development - Custom AI Solutions" />
        <meta property="og:description" content="Build custom Large Language Models with Abhastra. Fine-tune LLMs on your data and create AI assistants that understand your business." />
        <meta property="og:url" content="https://abhastra.com/services/llms" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content="Large Language Models (LLM) Development - Custom AI Solutions" />
        <meta name="twitter:description" content="Build custom Large Language Models with Abhastra. Fine-tune LLMs on your data." />
        
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 font-medium mb-4">
            <Brain className="w-4 h-4" />
            <span>Generative AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Large Language <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Models</span></h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of Generative AI. We build, fine-tune, and deploy state-of-the-art Large Language Models that understand your business context and generate value.
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
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Neural Networks" 
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Beyond Basic Chatbots</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Standard AI models are generic. We make them specific. By fine-tuning models on your data and implementing RAG (Retrieval-Augmented Generation), we create AI assistants that know your products, policies, and history inside out—all while keeping your data secure.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
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
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
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

export default LLMs;
