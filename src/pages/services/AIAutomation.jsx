import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, TrendingUp, CheckCircle, Brain, FileSearch, ArrowRight, Activity, 
  Factory, Stethoscope, Landmark, ShoppingCart, ChevronDown, 
  Code, Cloud, Lock, Server, Layers, Cpu
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
  { name: "Manufacturing", icon: Factory, desc: "Predictive maintenance, defect detection, and supply chain optimization." },
  { name: "Healthcare", icon: Stethoscope, desc: "Patient data analysis, diagnostic aids, and administrative automation." },
  { name: "Finance", icon: Landmark, desc: "Fraud detection, algorithmic trading, and automated compliance reporting." },
  { name: "Retail", icon: ShoppingCart, desc: "Demand forecasting, inventory management, and personalized user experiences." }
];

const processSteps = [
  { id: 1, title: "Data Audit & Strategy", desc: "We analyze your data infrastructure and identify high-impact automation opportunities." },
  { id: 2, title: "Model Training", desc: "Developing custom Machine Learning algorithms tailored to your specific business logic." },
  { id: 3, title: "Seamless Integration", desc: "Embedding AI solutions into your existing ERP, CRM, or cloud workflows without disruption." },
  { id: 4, title: "Optimization Loop", desc: "Continuous monitoring and retraining ensures the AI adapts to new data patterns over time." }
];

const techStack = [
  { name: "Python", icon: Code },
  { name: "TensorFlow", icon: Brain },
  { name: "AWS Cloud", icon: Cloud },
  { name: "Kubernetes", icon: Layers },
  { name: "PyTorch", icon: Activity },
  { name: "Docker", icon: Server },
];

const faqs = [
  {
    question: "How does AI Automation differ from traditional RPA?",
    answer: "Traditional RPA (Robotic Process Automation) follows strict, rule-based instructions to perform repetitive tasks. AI Automation (or Intelligent Automation) adds a cognitive layer using Machine Learning. This allows the system to handle unstructured data (like emails or images), make decisions based on probabilities, and improve over time without constant reprogramming."
  },
  {
    question: "Is my data secure during the automation process?",
    answer: "Absolutely. Security is our primary architecture constraint. We utilize end-to-end encryption, adhere to GDPR and HIPAA compliance standards where applicable, and deploy solutions within your private cloud or on-premise infrastructure to ensure sensitive data never leaves your control."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Timelines vary by complexity. A proof-of-concept (POC) typically takes 2-4 weeks. Full-scale deployment for a complex predictive analytics engine or enterprise-wide cognitive RPA system usually ranges from 3 to 6 months, including testing and integration."
  },
  {
    question: "What is the expected ROI for intelligent automation?",
    answer: "Most clients see a return on investment within the first 12 months. Savings come from a 40-70% reduction in manual processing costs, elimination of human error, 24/7 operational capability, and the ability to scale operations instantly without hiring delays."
  }
];

// --- Sub-Components ---

const AIDashboardMockup = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs text-slate-400 font-mono">abhastra_core_v4.1.exe</div>
        </div>
        <div className="p-6 grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-slate-950/50 rounded-lg p-4 border border-slate-800 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">System Efficiency</span>
              <span className="text-xs text-green-400 font-mono">98.4% ▲</span>
            </div>
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
            <motion.div 
              animate={{ left: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[2px] bg-white/30 shadow-[0_0_10px_white]"
            />
          </div>
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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-200">{question}</span>
        <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

// --- Main Page Component ---

const AIAutomation = () => {
  // SEO Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Automation Solutions",
        "description": "Enterprise-grade Intelligent Automation, combining RPA with Machine Learning and Predictive Analytics.",
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
        <title>AI Automation Services & Machine Learning Solutions | Abhastra</title>
        <meta name="description" content="Deploy intelligent automation tailored for enterprise needs. From Cognitive RPA to Predictive Analytics, we build self-learning systems that reduce costs and scale operations." />
        <meta name="keywords" content="AI Automation, Intelligent Automation, RPA, Machine Learning, Predictive Analytics, NLP, Computer Vision, Business Process Automation" />
        <link rel="canonical" href="https://abhastra.com/services/ai-automation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abhastra.com/services/ai-automation" />
        <meta property="og:title" content="AI Automation Services | Abhastra" />
        <meta property="og:description" content="Transform your business with self-learning AI. Explore our Cognitive RPA and Predictive Analytics solutions." />
        <meta property="og:image" content="https://abhastra.com/images/ai-automation-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abhastra.com/services/ai-automation" />
        <meta property="twitter:title" content="AI Automation Services | Abhastra" />
        <meta property="twitter:description" content="Transform your business with self-learning AI. Explore our Cognitive RPA and Predictive Analytics solutions." />
        <meta property="twitter:image" content="https://abhastra.com/images/ai-automation-og.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-900/10 to-purple-500/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-medium mb-6 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all cursor-default">
            <Brain className="w-4 h-4" />
            <span>Next-Gen Intelligent Core</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Automate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Abhastra transforms static workflows into dynamic, self-learning systems. We combine Robotic Process Automation (RPA) with advanced Machine Learning to drive efficiency at scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2">
              Start Your Transformation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-slate-800 text-slate-200 font-bold rounded-lg border border-slate-700 hover:bg-slate-700 transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>

        {/* --- Main Value Prop & Visual --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <AIDashboardMockup />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Beyond Simple Automation</h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              Traditional automation follows rules. <span className="text-cyan-400 font-semibold">Our AI adapts.</span> We build systems that don't just execute tasks but understand the data they process. 
            </p>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              By leveraging deep learning and neural networks, our solutions can read handwritten invoices, predict machine failures before they happen, and interact with customers using natural human language.
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
          </motion.div>
        </div>

        {/* --- Feature Grid --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our technology stack is designed for versatility. Whether you need backend data processing or frontend customer interaction, we have the module.
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
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${feature.color}-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500`} />
                  
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

        {/* --- SEO Content: Deep Dive Section --- */}
        <div className="mb-32 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">The Architecture of Intelligence</h3>
              <div className="h-1 w-20 bg-cyan-500 mb-6 rounded-full" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We don't just write code; we engineer ecosystems. Our approach to AI involves a rigorous data pipeline strategy that ensures your models are trained on clean, relevant data.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, i) => (
                   <div key={i} className="flex items-center gap-2 text-slate-300 bg-slate-950 p-2 rounded border border-slate-800">
                     <tech.icon className="w-4 h-4 text-purple-400" />
                     <span className="text-xs font-mono">{tech.name}</span>
                   </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" /> Enterprise-Grade Security
                </h4>
                <p className="text-slate-400 text-sm">
                  Deploying AI in sectors like Finance and Healthcare requires strict adherence to data governance. Our models can be deployed on-premise or in private clouds (AWS/Azure/GCP) to ensure data sovereignty. We implement differential privacy to train models without exposing sensitive user data.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" /> High-Performance Computing
                </h4>
                <p className="text-slate-400 text-sm">
                  Real-time processing requires optimized algorithms. We utilize GPU acceleration and edge computing to ensure that computer vision and NLP tasks happen in milliseconds, not seconds. This latency reduction is critical for manufacturing lines and high-frequency trading bots.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" /> Scalable Integration
                </h4>
                <p className="text-slate-400 text-sm">
                  Our solutions are API-first. This means our AI modules plug directly into your SAP, Salesforce, or Oracle systems. There is no need to rip and replace your existing infrastructure; we enhance it with an intelligence layer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Industry & Process Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
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
                    <p className="text-xs text-slate-500 mt-1">{ind.desc}</p>
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
               <div className="flex gap-2 items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">System Status: Online</span>
               </div>
             </div>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Common queries regarding our AI implementation process.</p>
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
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-slate-900 border border-slate-800"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your business logic?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Book a consultation with our AI architects. We will audit your current data workflow and provide a free automation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                Explore Documentation
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AIAutomation;