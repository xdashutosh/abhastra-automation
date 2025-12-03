import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, ShoppingCart, Truck, Stethoscope, 
  Newspaper, Building, Landmark, Utensils, 
  ArrowRight, CheckCircle, BarChart3, Globe, 
  ShieldCheck, Zap, Users, Search, ChevronDown,
  Activity, Server
} from 'lucide-react';

// --- Data Content ---

const industries = [
  {
    id: "education",
    name: "Education & EdTech",
    tagline: "Empowering Institutions",
    description: "Comprehensive ERPs for schools and universities. From biometric attendance and LMS integration to AI-proctored online exams.",
    icon: GraduationCap,
    color: "blue",
    features: ["Student Info System (SIS)", "Learning Management (LMS)", "Fee & Payroll Automation"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Labs",
    tagline: "Saving Lives with Data",
    description: "HIPAA-compliant Hospital Management Systems (HMS). AI-assisted diagnostics, patient portal apps, and inventory tracking for pharmacies.",
    icon: Stethoscope,
    color: "emerald",
    features: ["Electronic Health Records", "Telemedicine Platforms", "Lab Information Systems"]
  },
  {
    id: "finance",
    name: "Finance & Banking",
    tagline: "Secure FinTech Core",
    description: "Algorithmic trading dashboards, fraud detection systems using ML, and secure banking ERPs for micro-finance institutions.",
    icon: Landmark,
    color: "yellow",
    features: ["Automated KYC/AML", "Loan Management", "Risk Analysis Engine"]
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "Optimizing Movement",
    description: "IoT-enabled fleet tracking and warehouse management systems (WMS). Predict delivery times and optimize routes in real-time.",
    icon: Truck,
    color: "orange",
    features: ["Real-time Fleet Tracking", "Inventory Forecasting", "Last-Mile Optimization"]
  },
  {
    id: "ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Digital Marketplaces",
    description: "Scalable multi-vendor marketplaces with AI recommendation engines, dynamic pricing models, and omnichannel inventory sync.",
    icon: ShoppingCart,
    color: "pink",
    features: ["Multi-Vendor Support", "AI Product Recommendations", "POS Integration"]
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    tagline: "Smart Property Mgmt",
    description: "CRM for agents and property management suites. Virtual tours, tenant portals, and automated lease management workflows.",
    icon: Building,
    color: "cyan",
    features: ["Lead & Pipeline CRM", "Tenant Portals", "Automated Invoicing"]
  },
  {
    id: "media",
    name: "News & Media",
    tagline: "Content at Scale",
    description: "High-traffic news portals and OTT apps. CMS for rapid publishing, ad-server integration, and AI-driven content personalization.",
    icon: Newspaper,
    color: "purple",
    features: ["High-Load CMS", "Video Streaming (OTT)", "Ad-Tech Integration"]
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    tagline: "Guest Experience",
    description: "Booking engines and hotel management software. Contactless check-ins, housekeeping automation, and dynamic room pricing.",
    icon: Utensils,
    color: "rose",
    features: ["Booking Engine", "Housekeeping App", "Guest Loyalty Programs"]
  }
];

const faqs = [
  {
    question: "Do you offer industry-specific compliance (e.g., HIPAA, GDPR)?",
    answer: "Yes. Our architecture is designed with regulatory compliance as a baseline. For Healthcare, we ensure HIPAA compliance for patient data. For Finance, we adhere to RBI/Global banking security standards (PCI-DSS, SOC2) to ensure data integrity and sovereignty."
  },
  {
    question: "Can your solutions integrate with our existing legacy hardware?",
    answer: "Absolutely. In sectors like Manufacturing and Healthcare, we often encounter legacy machinery. We use IoT bridges and custom middleware APIs to extract data from older systems and feed it into our modern cloud dashboards."
  },
  {
    question: "How scalable are your Education and Media solutions?",
    answer: "Our systems are built on cloud-native microservices (AWS/Azure). This allows our Education ERPs to handle result-day traffic spikes and our Media portals to stream content to millions of concurrent users without downtime."
  },
  {
    question: "Do you provide white-label solutions for agencies?",
    answer: "Yes, we offer white-label licensing for many of our modules, including our Multi-Vendor E-Commerce engine and School ERP systems, allowing you to rebrand and resell to your clients."
  }
];

// --- Sub-Components ---

const SectorPerformanceMockup = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-20 animate-pulse" />
      
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[380px]">
        
        {/* Header */}
        <div className="h-12 border-b border-slate-800 bg-slate-950/50 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-slate-300">Global Sector Intelligence</span>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 grid grid-cols-2 gap-4 h-full">
          
          {/* Main Map/Chart Area */}
          <div className="col-span-2 bg-slate-950 rounded-lg border border-slate-800 p-4 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Top Performing Sector</div>
                <div className="text-xl font-bold text-white flex items-center gap-2">
                  Healthcare <span className="text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+24%</span>
                </div>
              </div>
              <Activity className="w-5 h-5 text-emerald-500" />
            </div>
            
            {/* Abstract Map Nodes */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
               <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping delay-300" />
               <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-700" />
               <svg className="absolute inset-0 w-full h-full stroke-slate-600" fill="none">
                 <path d="M100,150 Q250,50 400,150 T700,100" strokeWidth="1" strokeDasharray="4 4" />
               </svg>
            </div>

            {/* Bar Chart overlay */}
            <div className="flex items-end gap-2 h-24 mt-4 ml-2">
              {[40, 70, 50, 90, 60, 80, 55].map((h, i) => (
                <div key={i} className="w-full bg-slate-800 rounded-t-sm relative overflow-hidden">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-900 to-emerald-500 opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Small Stats Cards */}
          <div className="bg-slate-950 rounded-lg border border-slate-800 p-3 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] text-slate-400">Education Users</span>
            </div>
            <div className="text-lg font-bold text-white">2.4M+</div>
            <div className="w-full h-1 bg-slate-800 mt-2 rounded-full">
              <div className="w-3/4 h-full bg-blue-500 rounded-full" />
            </div>
          </div>

          <div className="bg-slate-950 rounded-lg border border-slate-800 p-3 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingCart className="w-4 h-4 text-pink-400" />
              <span className="text-[10px] text-slate-400">Transactions</span>
            </div>
            <div className="text-lg font-bold text-white">$850k</div>
            <div className="w-full h-1 bg-slate-800 mt-2 rounded-full">
              <div className="w-1/2 h-full bg-pink-500 rounded-full" />
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

// --- Main Component ---

const Industries = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Industry Specific Software Solutions",
        "description": "Tailored IT and Automation solutions for Education, Healthcare, Finance, Logistics, and Retail sectors.",
        "provider": {
          "@type": "Organization",
          "name": "Abhastra Automation Pvt Ltd",
          "url": "https://abhastra.com",
          "logo": "https://abhastra.com/logo.png"
        },
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
        <title>Industries We Serve | Education, Healthcare, Finance & More | Abhastra</title>
        <meta name="description" content="Discover how Abhastra Automation transforms diverse sectors. Specialized ERP, CRM, and AI solutions for Education, Healthcare, Logistics, Finance, and Retail." />
        <meta name="keywords" content="Education ERP, Hospital Management System, Logistics Automation, FinTech Solutions, E-Commerce Development, Real Estate CRM, News Portal Development" />
        <link rel="canonical" href="https://abhastra.com/industries" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Industries We Serve | Abhastra Automation" />
        <meta property="og:description" content="From smart schools to automated supply chains. Tailored tech for every sector." />
        <meta property="og:image" content="https://abhastra.com/images/industries-og.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-950 to-emerald-900/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-blue-400 font-medium mb-6 shadow-lg shadow-blue-500/10 cursor-default">
            <Globe className="w-4 h-4" />
            <span>Sector-Specific Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">Industries</span> <br className="hidden md:block" />
            with Intelligent Code
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            One size never fits all. We engineer domain-specific solutions that understand the unique vocabulary, regulations, and workflows of your industry.
          </p>
        </motion.div>

        {/* --- Main Visual & Value Prop --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <SectorPerformanceMockup />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vertical Expertise</h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              We don't just write code; we study your business model. Whether it's the high-frequency transactions of <span className="text-blue-400 font-semibold">FinTech</span> or the critical patient data in <span className="text-emerald-400 font-semibold">Healthcare</span>, our architectures are purpose-built for stability and compliance.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">Regulatory Compliance</h4>
                  <p className="text-slate-500 text-sm">HIPAA, GDPR, and PCI-DSS ready architectures.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">Legacy Integration</h4>
                  <p className="text-slate-500 text-sm">Seamlessly connect modern AI with older industrial machinery.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">Scalable Infrastructure</h4>
                  <p className="text-slate-500 text-sm">Auto-scaling cloud backends for high-traffic sectors like Media & EdTech.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* --- Industries Grid --- */}
        <div className="mb-32">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sectors We Serve</h2>
            <p className="text-slate-400">Click to explore our specialized capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  {/* Hover Color Gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${ind.color}-500/10 rounded-full blur-2xl -mr-8 -mt-8 transition-opacity opacity-50 group-hover:opacity-100`} />
                  
                  <div className={`w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-${ind.color}-500/50 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${ind.color}-400`} />
                  </div>
                  
                  <div className={`text-xs font-bold text-${ind.color}-400 mb-1 uppercase tracking-wide`}>{ind.tagline}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{ind.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {ind.description}
                  </p>
                  
                  <ul className="space-y-1 border-t border-slate-800 pt-3">
                    {ind.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className={`w-1 h-1 rounded-full bg-${ind.color}-500`} /> {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-slate-400">Specifics regarding compliance and integration.</p>
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't see your industry?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Innovation knows no boundaries. We frequently build custom solutions for niche markets, from Agriculture to Aerospace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                Discuss Your Requirements
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-600 text-slate-300 font-bold rounded-lg hover:bg-slate-800 transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Industries;