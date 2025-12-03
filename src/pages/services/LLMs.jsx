import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Sparkles, Lock, Database, CheckCircle, 
  Layers, Cpu, GitBranch, Terminal, ArrowRight, 
  Server, Shield, Workflow, MessageSquare, ChevronDown,
  FileText, Search
} from 'lucide-react';

// --- Data Content ---

const features = [
  {
    title: "Custom Fine-Tuning",
    description: "We train open-source models (Llama 3, Mistral) on your proprietary data to achieve domain mastery and superior accuracy.",
    icon: Brain,
    color: "violet"
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
    icon: Workflow,
    color: "fuchsia"
  },
  {
    title: "Sovereign AI",
    description: "Run models entirely on your private cloud or on-premise GPU clusters. Your data never leaves your infrastructure.",
    icon: Lock,
    color: "rose"
  }
];

const techStack = [
  { name: "Llama 3 / Mistral", icon: Brain, type: "Models" },
  { name: "LangChain", icon: GitBranch, type: "Orchestration" },
  { name: "Pinecone / Milvus", icon: Database, type: "Vector DB" },
  { name: "NVIDIA CUDA", icon: Cpu, type: "Compute" },
  { name: "Hugging Face", icon: Sparkles, type: "Hub" },
  { name: "AWS Bedrock", icon: Server, type: "Infra" },
];

const faqs = [
  {
    question: "What is the difference between Fine-Tuning and RAG?",
    answer: "Fine-Tuning teaches a model a new 'skill' or specific terminology by training it on your data (like training a doctor). RAG (Retrieval-Augmented Generation) gives the model access to a textbook (your documents) to look up facts in real-time. We often combine both for optimal results."
  },
  {
    question: "Is our data safe? Does it go to OpenAI/Google?",
    answer: "We specialize in 'Sovereign AI'. We deploy open-source models (like Llama 3) within your own private cloud (AWS VPC, Azure) or on-premise servers. Your data never leaves your environment and is never used to train public models."
  },
  {
    question: "How do you prevent the AI from 'hallucinating' (lying)?",
    answer: "We implement strict RAG guardrails. The system is instructed to only answer based on the retrieved context chunks from your knowledge base. If the answer isn't in your documents, the bot is programmed to say 'I don't know' rather than guessing."
  },
  {
    question: "Can these models execute tasks, or just chat?",
    answer: "Beyond chat, we build 'Agentic' workflows. Using frameworks like LangGraph, our agents can call APIs, query SQL databases, write code, and trigger workflows in your ERP/CRM systems autonomously."
  }
];

// --- Sub-Components ---

const RAGInterfaceMockup = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-25 animate-pulse" />
      
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[400px]">
        
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
          <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-400 font-mono">
            Model: Llama-3-70B-Instruct
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-4 space-y-4 overflow-hidden relative font-sans">
          
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-slate-800 text-slate-200 text-sm px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%]">
              Analyze the Q3 production logs. Why did output drop in Sector 4?
            </div>
          </div>

          {/* System Thought Process (The "RAG" part) */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-2 ml-2 border-l-2 border-slate-800 pl-4 py-1"
          >
            <div className="flex items-center gap-2 text-[10px] text-cyan-400 font-mono uppercase tracking-wider">
              <Search className="w-3 h-3" /> Searching Vector DB
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded text-[10px] text-slate-400 whitespace-nowrap">
                <FileText className="w-3 h-3 text-violet-400" /> production_logs_q3.pdf (pg 42)
              </div>
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-2 py-1 rounded text-[10px] text-slate-400 whitespace-nowrap">
                <Database className="w-3 h-3 text-violet-400" /> sql_maintenance_table
              </div>
            </div>
          </motion.div>

          {/* AI Response */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-start"
          >
            <div className="bg-gradient-to-br from-violet-900/20 to-slate-900 border border-violet-500/20 text-slate-200 text-sm px-4 py-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-lg">
              <p className="mb-2">Based on the retrieval, output in Sector 4 dropped by <strong>12.5%</strong> due to two factors:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-300 mb-2">
                <li><strong>Hydraulic Failure:</strong> Logs indicate persistent pressure drops in Unit 4-B (Error: E-404).</li>
                <li><strong>Supply Delay:</strong> Raw material delivery #892 was delayed by 48 hours.</li>
              </ul>
              <p className="text-xs text-slate-500 mt-2 border-t border-slate-800 pt-2">
                Sources: q3_report.pdf • maintenance_logs.sql
              </p>
            </div>
          </motion.div>

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-slate-950 border-t border-slate-800">
          <div className="bg-slate-900 border border-slate-700 rounded-lg h-10 flex items-center px-3 justify-between">
            <span className="text-slate-500 text-sm">Suggested: Schedule maintenance?</span>
            <div className="w-6 h-6 bg-violet-600 rounded flex items-center justify-center">
               <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-200">{question}</span>
        <ChevronDown className={`w-5 h-5 text-violet-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---

const LLMs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Generative AI & LLM Development",
        "description": "Enterprise-grade Large Language Model development. We specialize in fine-tuning open-source models (Llama, Mistral) and implementing secure RAG pipelines.",
        "provider": {
          "@type": "Organization",
          "name": "Abhastra Automation Pvt Ltd",
          "url": "https://abhastra.com",
          "logo": "https://abhastra.com/logo.png"
        },
        "serviceType": "Artificial Intelligence",
        "areaServed": "Global",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden font-sans">
      <Helmet>
        <title>LLM Development Services | Custom Generative AI & RAG | Abhastra</title>
        <meta name="description" content="Unlock the power of Sovereign AI. We build and fine-tune custom Large Language Models, implement RAG architectures, and deploy secure AI agents for enterprise data." />
        <meta name="keywords" content="LLM Development, Generative AI, RAG Architecture, Llama 3 Fine-tuning, AI Agents, Sovereign AI, NLP, Vector Databases, LangChain" />
        <link rel="canonical" href="https://abhastra.com/services/llms" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LLM Development & RAG Solutions | Abhastra" />
        <meta property="og:description" content="Build your own cognitive engine. Secure, private, and trained on your data." />
        <meta property="og:image" content="https://abhastra.com/images/llm-og.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-slate-950 to-cyan-900/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-violet-400 font-medium mb-6 shadow-lg shadow-violet-500/10 cursor-default">
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen Generative AI</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Build Your Own <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">Cognitive Engine</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Stop relying on generic public models. We build, fine-tune, and deploy custom Large Language Models that understand your specific business context, terminology, and data privacy needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20">
              Deploy Your Model <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold rounded-lg hover:bg-slate-800 transition-all">
              Explore Use Cases
            </button>
          </div>
        </motion.div>

        {/* --- Main Content & Mockup --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Beyond Basic Chatbots</h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              We engineer intelligent systems that "think" before they speak. By implementing <span className="text-cyan-400 font-bold">RAG (Retrieval-Augmented Generation)</span>, we connect powerful LLMs to your private data—manuals, databases, emails—allowing the AI to cite sources and provide factual answers.
            </p>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Unlike generic wrappers like ChatGPT, our solutions are <strong>Sovereign</strong>. The models run on your infrastructure, ensuring your trade secrets never leak to third-party API providers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {[
                "Context-Aware Chatbots",
                "Automated Document Analysis",
                "Code Generation Agents",
                "Semantic Search Engines",
                "Multi-Modal Processing",
                "Real-time Summarization"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  <span className="text-slate-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- Features Grid --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The technology stack powering our sovereign AI solutions.
            </p>
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
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${feature.color}-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100`} />

                  <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-${feature.color}-500/50 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- Architecture Deep Dive --- */}
        <div className="mb-32 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">The Technical Stack</h3>
              <div className="h-1 w-20 bg-violet-500 mb-6 rounded-full" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We leverage state-of-the-art open source libraries to build systems that are not only powerful but also cost-effective and vendor-agnostic.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, i) => (
                   <div key={i} className="flex items-center gap-2 text-slate-300 bg-slate-950 p-2 rounded border border-slate-800">
                     <tech.icon className="w-4 h-4 text-cyan-400" />
                     <span className="text-xs font-mono">{tech.name}</span>
                   </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-violet-400" /> 1. Data Ingestion & Vectorization
                </h4>
                <p className="text-slate-400 text-sm">
                  We ingest your unstructured data (PDFs, Docx, HTML) and structured data (SQL). This data is split into chunks and converted into vector embeddings using models like <span className="text-cyan-400 font-mono">nomic-embed-text</span>, then stored in a Vector DB (Pinecone/Milvus).
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-violet-400" /> 2. Semantic Retrieval
                </h4>
                <p className="text-slate-400 text-sm">
                  When a user asks a question, we don't just keyword match. We perform semantic search to find the *meaning* behind the query, retrieving the most relevant context chunks from your knowledge base.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-violet-400" /> 3. Augmented Generation
                </h4>
                <p className="text-slate-400 text-sm">
                  The retrieved context + user query is sent to the LLM (Llama 3 70B). The model acts as a reasoning engine, synthesizing the answer strictly from the provided context, ensuring high accuracy and zero fabrication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Understanding the nuances of Enterprise AI implementation.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* --- CTA Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-violet-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to train your model?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Book a consultation with our AI Architects. We will assess your data readiness and propose a custom fine-tuning or RAG roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/20">
                Book AI Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 text-slate-300 font-bold rounded-lg hover:bg-slate-800 transition-colors">
                View Architecture Docs
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default LLMs;