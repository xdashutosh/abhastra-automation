import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Brain, Sparkles, Lock, Database, CheckCircle, 
  Layers, Cpu, GitBranch, Terminal, ArrowRight
} from 'lucide-react';

// --- Data Content ---

const features = [
  {
    title: "Custom Fine-Tuning",
    description: "We train open-source models (Llama 3, Mistral) on your proprietary data to achieve domain mastery and superior accuracy.",
    icon: Brain,
    color: "purple"
  },
  {
    title: "RAG Architecture",
    description: "Connect LLMs to your live company knowledge base. Ground answers in reality to eliminate hallucinations.",
    icon: Database,
    color: "cyan"
  },
  {
    title: "Agentic Workflows",
    description: "Deploy autonomous AI agents capable of planning, reasoning, and executing complex multi-step tasks independently.",
    icon: Sparkles,
    color: "yellow"
  },
  {
    title: "Sovereign AI",
    description: "Run models entirely on your private cloud or on-premise GPU clusters. Your data never leaves your infrastructure.",
    icon: Lock,
    color: "red"
  }
];

const capabilities = [
  "Context-Aware Chatbots",
  "Automated Document Analysis",
  "Code Generation Agents",
  "Semantic Search Engines",
  "Multi-Modal Processing",
  "Real-time Summarization"
];

// --- RAG Interface Mockup Component ---
const RAGInterfaceMockup = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-25 animate-pulse" />
      
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[380px]">
        
        {/* Chat Header */}
        <div className="h-14 border-b border-slate-800 bg-slate-950/50 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-500 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Abhastra Core AI</div>
              <div className="text-[10px] text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online • RAG Active
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-400">Llama-3-70B</div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
          
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-slate-800 text-slate-200 text-sm px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%]">
              Analyze the Q3 production logs and suggest optimization strategies for the assembly line.
            </div>
          </div>

          {/* Processing Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 text-xs text-cyan-400 font-mono mb-2"
          >
            <Database className="w-3 h-3 animate-pulse" />
            <span>Retrieving context from internalDB... (3 chunks found)</span>
          </motion.div>

          {/* AI Response */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex justify-start"
          >
            <div className="bg-gradient-to-br from-violet-900/40 to-slate-900 border border-violet-500/30 text-slate-200 text-sm px-4 py-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-lg shadow-violet-900/10">
              <p className="mb-2">Based on <span className="text-cyan-400">production_logs_q3.csv</span>, efficiency dropped by 12% in Sector 4.</p>
              <p className="mb-3"><strong>Recommended Actions:</strong></p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                <li>Re-calibrate robotic arms (Error Code: E-404 freq high).</li>
                <li>Optimize inventory buffer for Unit B.</li>
              </ul>
            </div>
          </motion.div>

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-slate-950 border-t border-slate-800">
          <div className="bg-slate-900 border border-slate-700 rounded-lg h-10 flex items-center px-3 text-slate-500 text-sm">
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const LLMs = () => {
  // Comprehensive Schema.org Structure for Rich Snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Large Language Model Development Services",
    "alternateName": ["LLM Development", "Custom Generative AI", "AI Model Fine-tuning"],
    "description": "Enterprise-grade Large Language Model development services. We specialize in fine-tuning open-source models (Llama, Mistral), implementing RAG pipelines, and deploying secure, on-premise AI agents.",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com",
      "logo": "https://abhastra.com/wp-content/uploads/2023/05/logo.png", // Replace with actual logo URL
      "sameAs": [
        "https://www.linkedin.com/company/abhastra-automation",
        "https://twitter.com/abhastra"
      ]
    },
    "serviceType": "Artificial Intelligence Development",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Generative AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RAG Implementation",
            "description": "Retrieval-Augmented Generation for enterprise knowledge bases."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Model Fine-Tuning",
            "description": "Custom training of Llama 3 and Mistral models on proprietary data."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Agent Development",
            "description": "Autonomous agents for complex workflow automation."
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>LLM Development Services - Custom Generative AI & RAG | Abhastra</title>
        <meta name="title" content="LLM Development Services - Custom Generative AI & RAG | Abhastra" />
        <meta name="description" content="Unlock the power of Generative AI with Abhastra. We build and fine-tune custom Large Language Models (LLMs), implement RAG pipelines, and deploy secure AI agents for enterprises." />
        <meta name="keywords" content="LLM development, custom large language models, RAG architecture, generative AI services, AI model fine-tuning, Llama 3 fine-tuning, enterprise AI agents, sovereign AI, NLP solutions" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://abhastra.com/services/llms" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abhastra.com/services/llms" />
        <meta property="og:title" content="LLM Development Services - Custom Generative AI & RAG | Abhastra" />
        <meta property="og:description" content="Unlock the power of Generative AI. We build and fine-tune custom Large Language Models (LLMs), implement RAG pipelines, and deploy secure AI agents." />
        <meta property="og:image" content="https://abhastra.com/wp-content/uploads/2023/05/generative-ai-banner.jpg" /> {/* Replace with actual banner image */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abhastra.com/services/llms" />
        <meta property="twitter:title" content="LLM Development Services - Custom Generative AI & RAG | Abhastra" />
        <meta property="twitter:description" content="Unlock the power of Generative AI. We build and fine-tune custom Large Language Models (LLMs) and implement RAG pipelines." />
        <meta property="twitter:image" content="https://abhastra.com/wp-content/uploads/2023/05/generative-ai-banner.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-slate-950 to-cyan-900/10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-violet-400 font-medium mb-6 shadow-lg shadow-violet-500/10">
            <Sparkles className="w-4 h-4" />
            <span>Generative AI Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Build Your Own <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">Cognitive Engine</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stop relying on generic public models. We build, fine-tune, and deploy custom Large Language Models that understand your specific business context, terminology, and data privacy needs.
          </p>
        </motion.div>

        {/* --- Main Content & Mockup --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Visual Side: RAG Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <RAGInterfaceMockup />
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Beyond Basic Chatbots</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              We engineer intelligent systems that "think" before they speak. By implementing <span className="text-cyan-400 font-bold">RAG (Retrieval-Augmented Generation)</span>, we connect powerful LLMs to your private data—manuals, databases, emails—allowing the AI to cite sources and provide accurate, factual answers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-violet-50 transition-colors flex items-center gap-2 group">
              Start Your AI Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* --- Features Grid --- */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400">The technology stack behind our sovereign AI solutions.</p>
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
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${feature.color}-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100`} />

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

        {/* --- Tech Stack Section --- */}
        <div className="border-t border-slate-800 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-lg font-semibold text-slate-300">Powering Next-Gen Intelligence With</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-xl font-bold text-white"><Cpu className="text-green-500"/> NVIDIA</div>
            <div className="flex items-center gap-2 text-xl font-bold text-white"><Terminal className="text-orange-500"/> PyTorch</div>
            <div className="flex items-center gap-2 text-xl font-bold text-white"><GitBranch className="text-blue-500"/> LangChain</div>
            <div className="flex items-center gap-2 text-xl font-bold text-white"><Layers className="text-purple-500"/> HuggingFace</div>
            <div className="flex items-center gap-2 text-xl font-bold text-white"><Database className="text-cyan-500"/> Pinecone</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LLMs;