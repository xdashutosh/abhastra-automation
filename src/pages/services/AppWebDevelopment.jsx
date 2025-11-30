import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Smartphone, Globe, Code, Layers, CheckCircle, 
  Cpu, Rocket, Search, PenTool, Server, ShieldCheck, 
  ArrowRight, ArrowDown, Layout, Monitor, Zap, Settings 
} from 'lucide-react';

// --- Feature Data ---

const webFeatures = [
  {
    title: "Custom Web Solutions",
    description: "Tailored corporate and portfolio websites designed to be your perfect digital storefront.",
    icon: Monitor
  },
  {
    title: "E-Commerce & Portals",
    description: "Robust online stores with secure payment gateways and intuitive CMS integration.",
    icon: Globe
  },
  {
    title: "SEO & Performance",
    description: "Built with Next.js & React for lightning-fast load times and top search engine rankings.",
    icon: Search
  },
  {
    title: "Progressive Web Apps",
    description: "Offline capabilities and app-like experiences accessible directly through the browser.",
    icon: Layout
  }
];

const appFeatures = [
  {
    title: "Native Development",
    description: "High-performance native iOS (Swift) and Android (Kotlin) apps utilizing full device capabilities.",
    icon: Smartphone
  },
  {
    title: "Cross-Platform Power",
    description: "Flutter & React Native solutions to deploy stunning apps to both stores from a single codebase.",
    icon: Layers
  },
  {
    title: "AI-Integrated Apps",
    description: "Smart applications embedded with AI features for automation and predictive analytics.",
    icon: Cpu
  },
  {
    title: "Enterprise Mobility",
    description: "Secure, scalable mobile solutions to streamline internal workforce processes.",
    icon: Server
  }
];

// --- Flow Chart Components ---

const FlowNode = ({ label, type = "process", color = "blue", icon: Icon, delay = 0 }) => {
  const isDiamond = type === "decision";
  
  // Color Variants
  const colors = {
    purple: "from-indigo-600 to-violet-600 border-indigo-400/30 shadow-indigo-500/20",
    pink: "from-fuchsia-600 to-pink-600 border-pink-400/30 shadow-pink-500/20",
    red: "from-rose-600 to-red-600 border-red-400/30 shadow-red-500/20",
    orange: "from-orange-500 to-amber-600 border-orange-400/30 shadow-orange-500/20",
    yellow: "from-yellow-400 to-yellow-600 border-yellow-400/30 shadow-yellow-500/20",
  };

  const bgClass = colors[color] || colors.purple;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`relative flex items-center justify-center z-10 text-center
        ${isDiamond ? "w-32 h-32" : "w-40 h-16 md:w-48 md:h-20 rounded-xl"} 
      `}
    >
      {/* Connector Lines (Visual Only - handled by Grid Layout usually, but adding glow here) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} opacity-20 blur-xl rounded-full`} />

      <div 
        className={`
          relative flex items-center justify-center w-full h-full p-2
          bg-gradient-to-br ${bgClass} backdrop-blur-md border border-t-white/20
          ${isDiamond ? "transform rotate-45 rounded-xl" : "rounded-xl shadow-lg"}
        `}
      >
        <div className={isDiamond ? "transform -rotate-45 flex flex-col items-center" : "flex items-center gap-2"}>
          {Icon && !isDiamond && <Icon className="w-4 h-4 text-white/90" />}
          <span className="text-white font-bold text-sm md:text-sm leading-tight drop-shadow-md">
            {label}
          </span>
          {isDiamond && <span className="text-[10px] text-white/70 mt-1">(Pass/Fail)</span>}
        </div>
      </div>
    </motion.div>
  );
};

const Arrow = ({ direction = "right", length = "short" }) => {
  const rotation = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90"
  };
  
  return (
    <div className={`flex items-center justify-center ${length === "long" ? "flex-1" : "w-12"}`}>
      <motion.div 
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`text-slate-600 transform ${rotation[direction]}`}
      >
        <ArrowRight className="w-6 h-6" />
      </motion.div>
    </div>
  );
};

const DevelopmentFlowChart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 relative">
      {/* Mobile View: Vertical List */}
      <div className="lg:hidden flex flex-col items-center space-y-8">
         <FlowNode label="Idea Stage" icon={Zap} color="purple" />
         <ArrowDown className="text-slate-600" />
         <FlowNode label="Market Analysis" type="decision" color="purple" />
         <ArrowDown className="text-slate-600" />
         <FlowNode label="Planning" icon={Settings} color="pink" />
         <ArrowDown className="text-slate-600" />
         <FlowNode label="Development" icon={Code} color="red" />
         <ArrowDown className="text-slate-600" />
         <FlowNode label="Testing" icon={ShieldCheck} color="orange" />
         <ArrowDown className="text-slate-600" />
         <FlowNode label="Launch" icon={Rocket} color="yellow" />
      </div>

      {/* Desktop View: Snake Grid Layout */}
      <div className="hidden lg:flex flex-col gap-12 relative">
        {/* Row 1: Ideation (Left to Right) */}
        <div className="flex items-center gap-4">
          <FlowNode label="Idea Stage" icon={Zap} color="purple" delay={0.1} />
          <Arrow />
          <FlowNode label="Research" icon={Search} color="purple" delay={0.2} />
          <Arrow />
          <FlowNode label="Market Analysis" type="decision" color="purple" delay={0.3} />
          <Arrow />
          <FlowNode label="Requirement Gathering" icon={Layout} color="purple" delay={0.4} />
        </div>

        {/* Connector Row 1-2 */}
        <div className="absolute right-24 top-20 h-24 border-r-2 border-dashed border-slate-700 w-1 z-0" />

        {/* Row 2: Design (Right to Left) */}
        <div className="flex items-center justify-end gap-4 ml-auto">
          <FlowNode label="Tech Stack" type="decision" color="pink" delay={0.8} />
          <Arrow direction="left" />
          <FlowNode label="Workflow Design" icon={Layers} color="pink" delay={0.7} />
          <Arrow direction="left" />
          <FlowNode label="Wireframing" icon={PenTool} color="pink" delay={0.6} />
          <Arrow direction="left" />
          <FlowNode label="Planning" icon={Settings} color="pink" delay={0.5} />
        </div>

        {/* Connector Row 2-3 */}
        <div className="absolute left-32 top-48 h-32 border-l-2 border-dashed border-slate-700 w-1 z-0" />

        {/* Row 3: Development (Left to Right) */}
        <div className="flex items-center gap-4">
           <FlowNode label="UI/UX Design" icon={Layout} color="red" delay={0.9} />
           <Arrow />
           <FlowNode label="Frontend Dev" icon={Code} color="red" delay={1.0} />
           <Arrow />
           <FlowNode label="Backend Dev" icon={Server} color="red" delay={1.1} />
           <Arrow />
           <FlowNode label="API Integration" icon={Globe} color="red" delay={1.2} />
           <Arrow />
           <FlowNode label="Security" icon={ShieldCheck} color="red" delay={1.3} />
        </div>

        {/* Connector Row 3-4 */}
        <div className="absolute right-10 top-80 h-24 border-r-2 border-dashed border-slate-700 w-1 z-0" />

        {/* Row 4: QA & Deployment (Right to Left) */}
        <div className="flex items-center justify-end gap-4 ml-auto">
           <FlowNode label="Launch" icon={Rocket} color="yellow" delay={1.8} />
           <Arrow direction="left" />
           <FlowNode label="App Store Submission" type="decision" color="yellow" delay={1.7} />
           <Arrow direction="left" />
           <FlowNode label="Deployment" icon={Globe} color="orange" delay={1.6} />
           <Arrow direction="left" />
           <FlowNode label="Manual Testing" icon={CheckCircle} color="orange" delay={1.5} />
           <Arrow direction="left" />
           <FlowNode label="Testing" type="decision" color="orange" delay={1.4} />
        </div>
      </div>
      
      {/* Background Decor for Chart Area */}
      <div className="absolute inset-0 bg-slate-900/50 rounded-3xl -z-10 border border-slate-800/50 hidden lg:block" />
    </div>
  );
};


const AppWebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('web');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App & Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Abhastra Automation Pvt Ltd",
      "url": "https://abhastra.com"
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Web & Mobile App Development - Abhastra Automation</title>
        <meta name="description" content="Expert web and mobile app development services using Flutter, React Native, and Node.js." />
        <link rel="canonical" href="https://abhastra.com/services/app-web-development" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 via-pink-500/10 to-orange-500/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-blue-400 font-medium mb-6 shadow-lg shadow-blue-500/10">
            <Code className="w-4 h-4" />
            <span>Digital Transformation Experts</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400">Masterpieces</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From concept to code, we deliver high-performance websites and mobile applications that scale with your business.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-900 p-1.5 rounded-full border border-slate-800 flex items-center gap-1 shadow-lg">
            <button 
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'web' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              <Globe className="w-4 h-4" /> Website Design
            </button>
            <button 
              onClick={() => setActiveTab('app')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'app' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              <Smartphone className="w-4 h-4" /> Mobile Apps
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              {activeTab === 'web' ? 'Websites That Work For You' : 'Apps That Users Love'}
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              {activeTab === 'web' 
                ? "In a fast-paced digital world, a powerful website is essential. We don't just design sites; we build scalable digital platforms using Next.js and Node.js."
                : "From startups to enterprises, we build custom mobile apps using Flutter and React Native to ensure seamless performance on iOS and Android."}
            </p>
            <button className="px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          
          <motion.div
            key={`${activeTab}-img`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src={activeTab === 'web' 
                ? "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                : "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} 
              alt="Development" 
              className="rounded-2xl shadow-2xl border border-slate-800"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'web' ? webFeatures : appFeatures).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Visual Node Flow Chart */}
        <div className="py-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Development <span className="text-purple-500">Roadmap</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive view of how we turn ideas into reality.
            </p>
          </div>
          
          <DevelopmentFlowChart />
          
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span> <span className="text-slate-400 text-sm">Ideation</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="w-3 h-3 rounded-full bg-pink-500"></span> <span className="text-slate-400 text-sm">Planning</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="w-3 h-3 rounded-full bg-red-500"></span> <span className="text-slate-400 text-sm">Dev</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span> <span className="text-slate-400 text-sm">QA</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span> <span className="text-slate-400 text-sm">Launch</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppWebDevelopment;