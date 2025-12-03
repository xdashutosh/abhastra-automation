import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Globe, Code, Layers, CheckCircle, 
  Cpu, Rocket, Search, PenTool, Server, ShieldCheck, 
  ArrowRight, ArrowDown, Layout, Monitor, Zap, Settings, 
  Database, Cloud, ChevronDown, Lock
} from 'lucide-react';

// --- Feature Data ---

const webFeatures = [
  {
    title: "Custom Web Solutions",
    description: "Tailored corporate and portfolio websites designed to be your perfect digital storefront.",
    icon: Monitor,
    color: "blue"
  },
  {
    title: "E-Commerce & Portals",
    description: "Robust online stores with secure payment gateways and intuitive CMS integration (Shopify/WooCommerce).",
    icon: Globe,
    color: "indigo"
  },
  {
    title: "SEO & Performance",
    description: "Built with Next.js & React for Core Web Vitals compliance, ensuring lightning-fast load times.",
    icon: Search,
    color: "cyan"
  },
  {
    title: "Progressive Web Apps (PWA)",
    description: "Offline capabilities and app-like experiences accessible directly through the browser.",
    icon: Layout,
    color: "sky"
  }
];

const appFeatures = [
  {
    title: "Native Development",
    description: "High-performance native iOS (Swift) and Android (Kotlin) apps utilizing full device capabilities.",
    icon: Smartphone,
    color: "pink"
  },
  {
    title: "Cross-Platform Power",
    description: "Flutter & React Native solutions to deploy stunning apps to both stores from a single codebase.",
    icon: Layers,
    color: "purple"
  },
  {
    title: "AI-Integrated Apps",
    description: "Smart applications embedded with on-device AI features for automation and predictive analytics.",
    icon: Cpu,
    color: "fuchsia"
  },
  {
    title: "Enterprise Mobility",
    description: "Secure, MDM-compatible mobile solutions to streamline internal workforce processes.",
    icon: Server,
    color: "rose"
  }
];

const techStack = {
  web: [
    { name: "React.js", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Tailwind", icon: Layout },
  ],
  app: [
    { name: "Flutter", icon: Layers },
    { name: "React Native", icon: Code },
    { name: "Swift", icon: Smartphone },
    { name: "Kotlin", icon: Smartphone },
    { name: "Firebase", icon: Database },
    { name: "GraphQL", icon: Globe },
  ]
};

const faqs = [
  {
    question: "Should I build a Native App or a Cross-Platform (Flutter/React Native) App?",
    answer: "For 90% of businesses, Cross-Platform (Flutter/React Native) is the best choice. It reduces development cost and time by ~40% since we write one codebase for both iOS and Android. Native development is reserved for apps requiring heavy hardware access (like AR/VR or complex bluetooth communication)."
  },
  {
    question: "How do you handle website SEO?",
    answer: "We build with an 'SEO-First' architecture. We use Server-Side Rendering (SSR) via Next.js to ensure Google crawlers can read your content instantly. We also optimize Core Web Vitals (speed, stability) and implement proper Schema Markup out of the box."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes. We offer flexible maintenance packages that include server monitoring, security patching, OS updates (for apps), and content updates to keep your digital product running smoothly."
  },
  {
    question: "How long does a typical project take?",
    answer: "A custom corporate website typically takes 4-6 weeks. A fully functional mobile app (MVP) takes 8-12 weeks depending on feature complexity and API integrations."
  }
];

// --- Flow Chart Components ---

const FlowNode = ({ label, type = "process", color = "blue", icon: Icon, delay = 0 }) => {
  const isDiamond = type === "decision";
  
  // Color Variants
  const colors = {
    blue: "from-blue-600 to-cyan-600 border-blue-400/30 shadow-blue-500/20",
    purple: "from-indigo-600 to-purple-600 border-purple-400/30 shadow-purple-500/20",
    pink: "from-pink-600 to-rose-600 border-pink-400/30 shadow-pink-500/20",
    orange: "from-orange-500 to-amber-600 border-orange-400/30 shadow-orange-500/20",
    green: "from-emerald-500 to-green-600 border-green-400/30 shadow-green-500/20",
  };

  const bgClass = colors[color] || colors.blue;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`relative flex items-center justify-center z-10 text-center
        ${isDiamond ? "w-28 h-28 md:w-32 md:h-32" : "w-36 h-14 md:w-44 md:h-16 rounded-xl"} 
      `}
    >
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
          <span className="text-white font-bold text-xs md:text-sm leading-tight drop-shadow-md">
            {label}
          </span>
          {isDiamond && <span className="text-[9px] text-white/70 mt-1">(Approval)</span>}
        </div>
      </div>
    </motion.div>
  );
};

const Arrow = ({ direction = "right" }) => {
  const rotation = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90"
  };
  return (
    <div className={`flex items-center justify-center w-8 md:w-12 text-slate-600 transform ${rotation[direction]}`}>
      <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
    </div>
  );
};

// --- Web Process Flow ---
const WebFlowChart = () => (
  <div className="relative">
    {/* Mobile Vertical View */}
    <div className="lg:hidden flex flex-col items-center space-y-4">
       <FlowNode label="Discovery" icon={Search} color="blue" />
       <ArrowDown />
       <FlowNode label="UI/UX Design" icon={PenTool} color="blue" />
       <ArrowDown />
       <FlowNode label="Development" icon={Code} color="purple" />
       <ArrowDown />
       <FlowNode label="SEO Optimization" icon={Globe} color="purple" />
       <ArrowDown />
       <FlowNode label="Launch" icon={Rocket} color="green" />
    </div>

    {/* Desktop Snake View */}
    <div className="hidden lg:flex flex-col gap-8">
      {/* Row 1: Left to Right */}
      <div className="flex items-center gap-2">
        <FlowNode label="Discovery" icon={Search} color="blue" delay={0.1} />
        <Arrow />
        <FlowNode label="Wireframing" icon={Layout} color="blue" delay={0.2} />
        <Arrow />
        <FlowNode label="UI Design" icon={PenTool} color="blue" delay={0.3} />
        <Arrow />
        <FlowNode label="Frontend Dev" icon={Code} color="blue" delay={0.4} />
      </div>
      
      {/* Connector Down Right */}
      <div className="absolute right-20 top-16 h-20 border-r-2 border-dashed border-slate-700 w-1" />

      {/* Row 2: Right to Left */}
      <div className="flex items-center justify-end gap-2 ml-auto mt-12">
        <FlowNode label="Launch" icon={Rocket} color="green" delay={0.8} />
        <Arrow direction="left" />
        <FlowNode label="SEO & Speed" icon={Zap} color="purple" delay={0.7} />
        <Arrow direction="left" />
        <FlowNode label="CMS Integration" icon={Database} color="purple" delay={0.6} />
        <Arrow direction="left" />
        <FlowNode label="Backend API" icon={Server} color="purple" delay={0.5} />
      </div>
    </div>
  </div>
);

// --- App Process Flow ---
const AppFlowChart = () => (
  <div className="relative">
    {/* Mobile Vertical View */}
    <div className="lg:hidden flex flex-col items-center space-y-4">
       <FlowNode label="Concept" icon={Zap} color="pink" />
       <ArrowDown />
       <FlowNode label="Prototype" icon={Layout} color="pink" />
       <ArrowDown />
       <FlowNode label="Hybrid Dev" icon={Layers} color="orange" />
       <ArrowDown />
       <FlowNode label="Store Testing" icon={CheckCircle} color="orange" />
       <ArrowDown />
       <FlowNode label="App Store" icon={Smartphone} color="green" />
    </div>

    {/* Desktop Snake View */}
    <div className="hidden lg:flex flex-col gap-8">
      {/* Row 1: Left to Right */}
      <div className="flex items-center gap-2">
        <FlowNode label="Concept" icon={Zap} color="pink" delay={0.1} />
        <Arrow />
        <FlowNode label="Prototyping" icon={Layout} color="pink" delay={0.2} />
        <Arrow />
        <FlowNode label="Architecture" icon={Settings} color="pink" delay={0.3} />
        <Arrow />
        <FlowNode label="Hybrid Dev" icon={Layers} color="pink" delay={0.4} />
      </div>
      
      {/* Connector Down Right */}
      <div className="absolute right-20 top-16 h-20 border-r-2 border-dashed border-slate-700 w-1" />

      {/* Row 2: Right to Left */}
      <div className="flex items-center justify-end gap-2 ml-auto mt-12">
        <FlowNode label="Live on Store" icon={Smartphone} color="green" delay={0.8} />
        <Arrow direction="left" />
        <FlowNode label="Store Review" type="decision" color="orange" delay={0.7} />
        <Arrow direction="left" />
        <FlowNode label="Beta Testing" icon={CheckCircle} color="orange" delay={0.6} />
        <Arrow direction="left" />
        <FlowNode label="API Connect" icon={Cloud} color="orange" delay={0.5} />
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-200">{question}</span>
        <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

const AppWebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('web');

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "App & Web Development Services",
        "description": "Professional Web and Mobile App development using React, Next.js, Flutter, and Native technologies.",
        "provider": {
          "@type": "Organization",
          "name": "Abhastra Automation Pvt Ltd",
          "url": "https://abhastra.com",
          "logo": "https://abhastra.com/logo.png"
        },
        "serviceType": "Software Development",
        "areaServed": "Global"
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
        <title>Web & Mobile App Development Company | Custom Solutions | Abhastra</title>
        <meta name="description" content="Transform your business with high-performance websites and mobile apps. We specialize in Next.js, React Native, and Flutter development for scalable digital solutions." />
        <meta name="keywords" content="Web Development, Mobile App Development, Flutter, React Native, Next.js, SEO, PWA, iOS, Android, Custom Software" />
        <link rel="canonical" href="https://abhastra.com/services/app-web-development" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web & Mobile App Development | Abhastra" />
        <meta property="og:description" content="From concept to code. We build websites and apps that scale." />
        <meta property="og:image" content="https://abhastra.com/images/app-web-og.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-700 ${activeTab === 'web' ? 'from-blue-900/10 via-slate-900 to-cyan-500/10' : 'from-pink-900/10 via-slate-900 to-purple-500/10'} pointer-events-none`} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 font-medium mb-6 shadow-lg transition-colors duration-300 ${activeTab === 'web' ? 'text-blue-400 shadow-blue-500/10' : 'text-pink-400 shadow-pink-500/10'}`}>
            <Code className="w-4 h-4" />
            <span>Digital Transformation Experts</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Crafting Digital <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${activeTab === 'web' ? 'from-blue-400 via-cyan-400 to-teal-400' : 'from-pink-500 via-purple-500 to-indigo-500'}`}>Masterpieces</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            From concept to code, we deliver high-performance websites and mobile applications that scale with your business and delight your users.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-20">
          <div className="bg-slate-900 p-1.5 rounded-full border border-slate-800 flex items-center gap-1 shadow-lg relative">
            <button 
              onClick={() => setActiveTab('web')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'web' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Globe className="w-4 h-4" /> Web Development
            </button>
            <button 
              onClick={() => setActiveTab('app')}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'app' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Smartphone className="w-4 h-4" /> App Development
            </button>
            
            {/* Sliding Background */}
            <motion.div 
              layout
              className={`absolute top-1.5 bottom-1.5 rounded-full shadow-md bg-gradient-to-r ${activeTab === 'web' ? 'from-blue-600 to-cyan-600 left-1.5 w-[190px]' : 'from-pink-600 to-purple-600 left-[196px] w-[190px]'}`}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {activeTab === 'web' ? 'Websites That Work For You' : 'Apps That Users Love'}
            </h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              {activeTab === 'web' 
                ? "In a fast-paced digital world, a static site isn't enough. We build dynamic, reactive web platforms. Using Next.js and Node.js, we ensure your site is not just a brochure, but a high-performance conversion engine."
                : "Captivate your audience on the go. Whether you need a startup MVP or an enterprise-grade solution, our Flutter and React Native expertise ensures you launch on iOS and Android simultaneously, without compromising quality."}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {(activeTab === 'web' ? ["Next.js", "SEO Optimized", "CMS"] : ["iOS & Android", "Offline Mode", "Push Notifs"]).map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <button className={`px-8 py-4 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg ${activeTab === 'web' ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20' : 'bg-pink-600 hover:bg-pink-500 shadow-pink-500/20'}`}>
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
            <div className={`absolute -inset-4 bg-gradient-to-r ${activeTab === 'web' ? 'from-blue-500 to-cyan-500' : 'from-pink-500 to-purple-500'} rounded-2xl opacity-20 blur-2xl animate-pulse`} />
            <img 
              src={activeTab === 'web' 
                ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                : "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} 
              alt={activeTab === 'web' ? "Web Development Dashboard" : "Mobile App Interface"} 
              className="relative rounded-2xl shadow-2xl border border-slate-800 w-full object-cover h-[400px]"
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
                  className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-${feature.color}-500/50 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Visual Process Flow Chart (Dynamic) */}
        <div className="py-12 mb-32 bg-slate-900/30 rounded-3xl border border-slate-800/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className={activeTab === 'web' ? "text-blue-400" : "text-pink-400"}>Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto px-4">
              A transparent view of how we take your project from the whiteboard to the world.
            </p>
          </div>
          
          <div className="px-4 md:px-12 flex justify-center pb-8">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-6xl"
                >
                  {activeTab === 'web' ? <WebFlowChart /> : <AppFlowChart />}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Tech Stack & FAQ Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Tech Stack Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className={`w-5 h-5 ${activeTab === 'web' ? 'text-blue-400' : 'text-pink-400'}`} /> 
              Architecture & Tech Stack
            </h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              We choose the right tool for the job. Our stack prioritizes scalability, security, and developer experience to ensure your product is easy to maintain long after launch.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {(activeTab === 'web' ? techStack.web : techStack.app).map((tech, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-slate-600 transition-colors"
                >
                  <tech.icon className={`w-6 h-6 ${activeTab === 'web' ? 'text-blue-500' : 'text-pink-500'}`} />
                  <span className="text-slate-300 font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
               <div className="flex items-start gap-3">
                 <ShieldCheck className="w-6 h-6 text-green-400 mt-1" />
                 <div>
                   <h4 className="text-white font-bold text-sm">Secure by Design</h4>
                   <p className="text-slate-400 text-xs mt-1">
                     All applications undergo rigorous penetration testing, implement OWASP security standards, and use encrypted data storage.
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-2">
               {faqs.map((faq, index) => (
                 <FAQItem key={index} question={faq.question} answer={faq.answer} />
               ))}
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700`}
        >
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b ${activeTab === 'web' ? 'from-blue-500/10' : 'from-pink-500/10'} to-transparent blur-3xl pointer-events-none`} />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a project in mind?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's discuss how we can bring your vision to life with the perfect technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-4 text-white font-bold rounded-lg transition-colors shadow-lg ${activeTab === 'web' ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20' : 'bg-pink-600 hover:bg-pink-500 shadow-pink-500/20'}`}>
                Get Free Quote
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AppWebDevelopment;