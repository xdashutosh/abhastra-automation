import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Layout, Shield, RefreshCw, CheckCircle, 
  BarChart3, Users, Truck, ShoppingBag, PieChart, 
  Settings, Search, Bell, ArrowRight, Lock, Server, 
  Globe, Smartphone, Layers, Code, ChevronDown
} from 'lucide-react';

// --- Data Content ---

const modules = [
  {
    title: "HR & Human Capital",
    description: "Modernize workforce management. Automate payroll, track attendance via biometrics, and offer self-service portals for leave and tax declarations.",
    icon: Users,
    color: "pink"
  },
  {
    title: "Finance & Accounting",
    description: "GAAP/IFRS compliant financial suites. Real-time ledger tracking, automated GST/VAT invoicing, expense management, and cash flow forecasting.",
    icon: PieChart,
    color: "rose"
  },
  {
    title: "Supply Chain & Inventory",
    description: "End-to-end visibility. From vendor procurement to warehouse management (WMS) and logistics tracking, minimize stockouts and overstocking.",
    icon: Truck,
    color: "orange"
  },
  {
    title: "CRM & Sales Intelligence",
    description: "Convert leads faster. Unified customer data platforms that track interactions, manage pipelines, and automate follow-up emails.",
    icon: ShoppingBag,
    color: "red"
  }
];

const techStack = [
  { name: "PostgreSQL", icon: Database },
  { name: "Node.js", icon: Server },
  { name: "React / Next.js", icon: Globe },
  { name: "Docker", icon: Layers },
  { name: "AWS / Azure", icon: CheckCircle },
  { name: "Flutter (Mobile)", icon: Smartphone },
];

const faqs = [
  {
    question: "Why choose custom ERP over off-the-shelf solutions (SAP/Oracle)?",
    answer: "Off-the-shelf software often requires you to change your business processes to fit their mold, along with expensive licensing fees. Our custom ERP solutions are architected around your specific workflows, offer better long-term scalability, and eliminate 'feature bloat'—you only pay for what you actually use."
  },
  {
    question: "Can you migrate data from our legacy systems?",
    answer: "Yes. Data migration is a critical phase of our development lifecycle. We utilize ETL (Extract, Transform, Load) tools to securely migrate data from legacy SQL databases, Excel sheets, or older software into the new cloud infrastructure with zero data loss."
  },
  {
    question: "Is the ERP system cloud-based or on-premise?",
    answer: "We offer hybrid deployment models. Most clients prefer Cloud (AWS/Azure) for remote accessibility and automated backups, but we can also deploy on secure, air-gapped on-premise servers for highly regulated industries like Defense or Banking."
  },
  {
    question: "How long does it take to build a custom ERP?",
    answer: "Timelines depend on module complexity. A basic MVP (Minimum Viable Product) with core Finance and HR modules can be deployed in 3-4 months. A full-scale enterprise system with Supply Chain and CRM integration typically takes 6-9 months."
  }
];

// --- Sub-Components ---

const ERPDashboardMockup = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-20 animate-pulse" />
      
      {/* Main Container */}
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex h-[320px]">
        
        {/* Sidebar */}
        <div className="w-16 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-4 gap-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 mb-2" />
          <Layout className="w-5 h-5 text-pink-400" />
          <Users className="w-5 h-5 text-slate-500 hover:text-white transition-colors" />
          <PieChart className="w-5 h-5 text-slate-500 hover:text-white transition-colors" />
          <Truck className="w-5 h-5 text-slate-500 hover:text-white transition-colors" />
          <div className="mt-auto">
            <Settings className="w-5 h-5 text-slate-600" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          
          {/* Top Bar */}
          <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50">
            <div className="flex items-center gap-2 text-slate-400 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
              <Search className="w-3 h-3" />
              <span className="text-xs">Search modules...</span>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-slate-400" />
              <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-600" />
            </div>
          </div>

          {/* Dashboard Widgets */}
          <div className="p-6 grid grid-cols-2 gap-4 overflow-hidden">
            
            {/* Widget 1: Revenue Graph */}
            <div className="col-span-2 bg-slate-950/50 border border-slate-800 rounded-lg p-4">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">Monthly Revenue</div>
                  <div className="text-xl font-bold text-white">$482,500 <span className="text-xs text-green-400 font-normal">+12%</span></div>
                </div>
                <BarChart3 className="w-4 h-4 text-rose-500" />
              </div>
              <div className="flex items-end justify-between h-16 gap-2">
                 {[30, 45, 35, 60, 50, 75, 65, 90, 80].map((h, i) => (
                   <div key={i} className="w-full bg-slate-800 rounded-t-sm relative group overflow-hidden">
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: `${h}%` }}
                       transition={{ duration: 1, delay: i * 0.05 }}
                       className="absolute bottom-0 w-full bg-gradient-to-t from-rose-900 to-pink-500 opacity-80"
                     />
                   </div>
                 ))}
              </div>
            </div>

            {/* Widget 2: Stats */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-3 h-3 text-pink-400" />
                <span className="text-[10px] text-slate-400">Total Employees</span>
              </div>
              <div className="text-lg font-bold text-white">1,240</div>
              <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-pink-500" />
              </div>
            </div>

            {/* Widget 3: Stats */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-3 h-3 text-orange-400" />
                <span className="text-[10px] text-slate-400">Pending Orders</span>
              </div>
              <div className="text-lg font-bold text-white">86</div>
              <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                <div className="w-[40%] h-full bg-orange-500" />
              </div>
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
        <ChevronDown className={`w-5 h-5 text-pink-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

const ERPDevelopment = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Custom ERP Development",
        "description": "Enterprise Resource Planning systems tailored to your industry needs. Streamline business with robust, scalable, and secure ERP solutions.",
        "provider": {
          "@type": "Organization",
          "name": "Abhastra Automation Pvt Ltd",
          "url": "https://abhastra.com",
          "logo": "https://abhastra.com/logo.png"
        },
        "serviceType": "Enterprise Software Development",
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
        <title>Custom ERP Software Development Company | Abhastra</title>
        <meta name="description" content="Streamline your business with custom ERP solutions. We build secure, cloud-based ERP systems integrating Finance, HR, Supply Chain, and CRM into one unified dashboard." />
        <meta name="keywords" content="Custom ERP Development, Enterprise Resource Planning, HRMS, CRM Software, Supply Chain Management, Business Intelligence, Cloud ERP" />
        <link rel="canonical" href="https://abhastra.com/services/erp-development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abhastra.com/services/erp-development" />
        <meta property="og:title" content="Custom ERP Development | Abhastra" />
        <meta property="og:description" content="Unified business intelligence. Stop struggling with spreadsheets and switch to a custom ERP built for your workflow." />
        <meta property="og:image" content="https://abhastra.com/images/erp-dev-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abhastra.com/services/erp-development" />
        <meta property="twitter:title" content="Custom ERP Development | Abhastra" />
        <meta property="twitter:description" content="Unified business intelligence. Stop struggling with spreadsheets and switch to a custom ERP built for your workflow." />
        <meta property="twitter:image" content="https://abhastra.com/images/erp-dev-og.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-slate-900 to-rose-500/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-pink-500 font-medium mb-6 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all cursor-default">
            <Database className="w-4 h-4" />
            <span>Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">Business Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Stop struggling with disconnected spreadsheets and siloed software. Our custom ERP solutions bring Finance, HR, Inventory, and Sales into a single, unshakeable source of truth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-pink-50 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/10">
              Calculate ROI <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 text-white font-bold rounded-lg hover:bg-slate-800 transition-all">
              View Feature List
            </button>
          </div>
        </motion.div>

        {/* --- Main Content & Mockup --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for <span className="text-pink-500">Your</span> Workflow</h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              Off-the-shelf software forces you to change your business to fit their system. <span className="text-white font-semibold">We do the opposite.</span> We architect ERPs that mirror your unique operational flow, ensuring 100% adoption and zero friction.
            </p>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              From automated GST compliance to predictive inventory stocking, our systems are designed to automate the mundane so your leadership can focus on strategy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Centralized Data Architecture",
                "Role-Based Access Control",
                "Automated Regulatory Compliance",
                "Real-time BI & Analytics",
                "Seamless API Integrations",
                "Scalable Cloud Infrastructure"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span className="text-slate-300 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Side: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <ERPDashboardMockup />
          </motion.div>
        </div>

        {/* --- Modules Grid --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Modules</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Modular architecture means you can start with what you need and expand later.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800/50 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-${mod.color}-500/50 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${mod.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                    {mod.description}
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
              <h3 className="text-2xl font-bold text-white mb-4">Modern Tech Stack</h3>
              <div className="h-1 w-20 bg-pink-500 mb-6 rounded-full" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We build on future-proof technologies, not legacy code. This ensures your ERP remains fast, secure, and easily maintainable for decades.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, i) => (
                   <div key={i} className="flex items-center gap-2 text-slate-300 bg-slate-950 p-2 rounded border border-slate-800">
                     <tech.icon className="w-4 h-4 text-rose-400" />
                     <span className="text-xs font-mono">{tech.name}</span>
                   </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-pink-400" /> Bank-Grade Security
                </h4>
                <p className="text-slate-400 text-sm">
                  Your data is your most valuable asset. We employ AES-256 bit encryption for data at rest and in transit. Our systems are ISO 27001 compliant, featuring granular Role-Based Access Control (RBAC) to ensure employees only see what they need to see.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-pink-400" /> Automated Scalability
                </h4>
                <p className="text-slate-400 text-sm">
                  Built on microservices architecture (using Docker & Kubernetes), our ERPs auto-scale during peak loads—like end-of-month reporting or holiday sales spikes—ensuring 99.99% uptime without manual intervention.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-pink-400" /> Audit Trails & Compliance
                </h4>
                <p className="text-slate-400 text-sm">
                  Every action is logged. From invoice creation to payroll modification, our immutable audit logs provide complete accountability, making external audits seamless and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Common queries regarding custom ERP implementation.</p>
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
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-pink-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to unify your operations?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Schedule a demo with our solutions architect. We'll analyze your current workflow and propose a tailored digitalization roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-500 transition-colors shadow-lg shadow-pink-500/20">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-500 text-slate-300 font-bold rounded-lg hover:bg-slate-800 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ERPDevelopment;