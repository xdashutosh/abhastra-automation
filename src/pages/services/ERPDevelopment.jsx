import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Database, Layout, Shield, RefreshCw, CheckCircle, 
  BarChart3, Users, Truck, ShoppingBag, PieChart, 
  Settings, Search, Bell, ArrowRight, Lock
} from 'lucide-react';

// --- Data Content ---

const modules = [
  {
    title: "HR & Payroll",
    description: "Automate attendance, payroll processing, and employee lifecycle management with self-service portals.",
    icon: Users,
    color: "pink"
  },
  {
    title: "Finance & Accounts",
    description: "Real-time ledger tracking, automated invoicing, GST compliance, and comprehensive financial forecasting.",
    icon: PieChart,
    color: "rose"
  },
  {
    title: "Supply Chain",
    description: "End-to-end inventory tracking, vendor management, and automated procurement workflows.",
    icon: Truck,
    color: "orange"
  },
  {
    title: "CRM & Sales",
    description: "Track leads, manage customer interactions, and analyze sales performance in a unified dashboard.",
    icon: ShoppingBag,
    color: "red"
  }
];

const benefits = [
  "Centralized Data Architecture",
  "Role-Based Access Control",
  "Automated Regulatory Compliance",
  "Real-time BI & Analytics",
  "Seamless API Integrations",
  "Scalable Cloud Infrastructure"
];

// --- ERP Dashboard Mockup Component ---
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

const ERPDevelopment = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom ERP Development",
    "description": "Enterprise Resource Planning systems tailored to your industry needs. Streamline business with robust, scalable, and secure ERP solutions by Abhastra.",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com"
    },
    "serviceType": "ERP Development, Enterprise Software, HRMS, CRM"
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Custom ERP Development - Enterprise Solutions | Abhastra</title>
        <meta name="description" content="Streamline your business with custom ERP solutions. AI-enhanced systems that bring finance, HR, inventory, and sales into a single intuitive platform." />
        <link rel="canonical" href="https://abhastra.com/services/erp-development" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-slate-900 to-rose-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-pink-500 font-medium mb-6 shadow-lg shadow-pink-500/10">
            <Database className="w-4 h-4" />
            <span>Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">Business Intelligence</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stop struggling with disconnected spreadsheets and siloed software. Our custom ERP solutions bring Finance, HR, Inventory, and Sales into a single, unshakeable source of truth.
          </p>
        </motion.div>

        {/* --- Main Content & Mockup --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Built for <span className="text-pink-500">Your</span> Workflow</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Off-the-shelf software forces you to change your business to fit their system. <span className="text-white font-semibold">We do the opposite.</span> We architect ERPs that mirror your unique operational flow, ensuring 100% adoption and zero friction.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          
          {/* Visual Side: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Modules</h2>
            <p className="text-slate-400">Comprehensive tools to manage every aspect of your organization.</p>
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
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-${mod.color}-500/50 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${mod.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {mod.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- Architecture & Security Section --- */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
             <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-4">Bank-Grade Security</h3>
                <p className="text-slate-400 mb-6">
                  Your data is your most valuable asset. We employ multi-layered security protocols to ensure it never falls into the wrong hands.
                </p>
                <div className="flex items-center gap-2 text-pink-400 font-bold">
                  <Shield className="w-5 h-5" />
                  <span>ISO 27001 Compliant</span>
                </div>
             </div>
             
             <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">End-to-End Encryption</h4>
                    <p className="text-xs text-slate-500 mt-1">AES-256 bit encryption for data at rest and in transit.</p>
                  </div>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Automated Backups</h4>
                    <p className="text-xs text-slate-500 mt-1">Daily incremental backups with point-in-time recovery.</p>
                  </div>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Role-Based Access</h4>
                    <p className="text-xs text-slate-500 mt-1">Granular permission controls for every module.</p>
                  </div>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                  <Layout className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm">Audit Trails</h4>
                    <p className="text-xs text-slate-500 mt-1">Complete logs of every user action for accountability.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ERPDevelopment;