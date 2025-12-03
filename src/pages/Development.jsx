import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardList, PenTool, Code2, TestTube, Rocket, 
  RefreshCcw, CheckCircle, Clock, Users, Zap, 
  Layout, GitPullRequest, Terminal, AlertCircle, ChevronDown,
  Kanban, ArrowRight
} from 'lucide-react';

// --- Data Content ---

const steps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    subtitle: "Understanding the 'Why'",
    description: "We don't just write code; we solve business problems. We start by analyzing your requirements, defining user personas, and creating a technical feasibility roadmap.",
    icon: ClipboardList,
    color: "blue",
    deliverables: ["SRS Document", "Tech Stack Finalization", "Project Roadmap"]
  },
  {
    id: 2,
    title: "UI/UX Design",
    subtitle: "Blueprinting the Experience",
    description: "Our designers create wireframes and high-fidelity prototypes. We focus on user journey mapping to ensure the final product is intuitive and engaging.",
    icon: PenTool,
    color: "purple",
    deliverables: ["Figma Prototypes", "Design System", "User Flow Charts"]
  },
  {
    id: 3,
    title: "Agile Development",
    subtitle: "The Coding Phase",
    description: "We break the project into 2-week sprints. Developers write clean, documented code while you get regular updates and demoable builds at the end of every sprint.",
    icon: Code2,
    color: "cyan",
    deliverables: ["Source Code", "API Documentation", "Bi-weekly Demos"]
  },
  {
    id: 4,
    title: "QA & Testing",
    subtitle: "Bulletproofing",
    description: "Our QA engineers perform rigorous testing—Unit, Integration, and User Acceptance Testing (UAT)—to squash bugs before they reach production.",
    icon: TestTube,
    color: "red",
    deliverables: ["Test Cases", "Bug Reports", "Performance Audit"]
  },
  {
    id: 5,
    title: "Deployment (DevOps)",
    subtitle: "Going Live",
    description: "We set up CI/CD pipelines for automated deployment. We configure cloud infrastructure (AWS/Azure) to ensure your app scales securely.",
    icon: Rocket,
    color: "green",
    deliverables: ["Live Production URL", "Cloud Architecture", "SSL Setup"]
  },
  {
    id: 6,
    title: "Maintenance & Evolution",
    subtitle: "Long-term Growth",
    description: "Software is living entity. We monitor uptime, apply security patches, and iteratively add new features based on real user feedback.",
    icon: RefreshCcw,
    color: "orange",
    deliverables: ["SLA Support", "Security Patches", "Feature Updates"]
  }
];

const faqs = [
  {
    question: "What methodology do you follow: Agile or Waterfall?",
    answer: "We primarily follow the Agile Scrum methodology. This allows us to be flexible to changes, deliver MVPs (Minimum Viable Products) faster, and ensure the client is involved at every stage of the development cycle."
  },
  {
    question: "How do I track the progress of my project?",
    answer: "Complete transparency. You get access to our Project Management tools (Jira/Trello) to see real-time task movement. We also hold weekly stand-up meetings to discuss progress and blockers."
  },
  {
    question: "Do I own the source code after development?",
    answer: "Yes, absolutely. Once the project is paid for in full, you own 100% of the Intellectual Property (IP), source code, and design assets. We offer a formal IP transfer agreement."
  },
  {
    question: "What happens if there are bugs after launch?",
    answer: "We provide a complimentary 30-day support period (Hypercare) after launch to fix any critical bugs immediately. After that, we offer flexible Annual Maintenance Contracts (AMC) to keep your system running smoothly."
  }
];

// --- Kanban Board Mockup (The "DND" Diagram Visual) ---
const KanbanMockup = () => {
  // Animation state for the moving card
  const [column, setColumn] = useState(0); // 0: Todo, 1: In Progress, 2: Done

  useEffect(() => {
    const interval = setInterval(() => {
      setColumn((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 animate-pulse" />
      
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[340px]">
        {/* Header */}
        <div className="h-10 border-b border-slate-800 bg-slate-950/50 flex items-center px-4 justify-between">
          <div className="flex items-center gap-2">
            <Kanban className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-slate-300">Sprint Board - Week 04</span>
          </div>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900" />
            <div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900" />
            <div className="w-6 h-6 rounded-full bg-blue-600 text-[8px] flex items-center justify-center text-white border border-slate-900">+3</div>
          </div>
        </div>

        {/* Board Content */}
        <div className="p-4 grid grid-cols-3 gap-3 h-full font-sans">
          
          {/* Column 1: To Do */}
          <div className="bg-slate-950/50 rounded-lg p-2 border border-slate-800 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">To Do</span>
              <span className="bg-slate-800 text-slate-400 text-[8px] px-1.5 rounded">4</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <div className="w-12 h-1 bg-purple-500/50 rounded mb-1" />
              <div className="w-full h-2 bg-slate-700 rounded mb-1 opacity-50" />
              <div className="w-2/3 h-2 bg-slate-700 rounded opacity-50" />
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 opacity-60">
               <div className="w-full h-2 bg-slate-700 rounded" />
            </div>
            {/* The Moving Card (When in col 0) */}
            {column === 0 && (
              <motion.div layoutId="active-card" className="bg-blue-900/20 border border-blue-500/50 p-2 rounded shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <div className="flex justify-between items-start mb-1">
                   <div className="w-16 h-1.5 bg-blue-500 rounded" />
                   <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center"><Zap className="w-2 h-2 text-blue-400"/></div>
                </div>
                <div className="text-[10px] text-blue-100 font-medium">Integrate Payment Gateway</div>
              </motion.div>
            )}
          </div>

          {/* Column 2: In Progress */}
          <div className="bg-slate-950/50 rounded-lg p-2 border border-slate-800 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">In Progress</span>
              <span className="bg-blue-500/20 text-blue-400 text-[8px] px-1.5 rounded">2</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <div className="w-8 h-1 bg-green-500/50 rounded mb-1" />
              <div className="w-full h-2 bg-slate-700 rounded opacity-50" />
            </div>
             {/* The Moving Card (When in col 1) */}
             {column === 1 && (
              <motion.div layoutId="active-card" className="bg-blue-900/20 border border-blue-500/50 p-2 rounded shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <div className="flex justify-between items-start mb-1">
                   <div className="w-16 h-1.5 bg-blue-500 rounded" />
                   <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center"><Zap className="w-2 h-2 text-blue-400"/></div>
                </div>
                <div className="text-[10px] text-blue-100 font-medium">Integrate Payment Gateway</div>
                <div className="mt-2 flex -space-x-1">
                   <div className="w-4 h-4 rounded-full bg-slate-600 border border-slate-800" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Column 3: Done */}
          <div className="bg-slate-950/50 rounded-lg p-2 border border-slate-800 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Done</span>
              <span className="bg-green-500/20 text-green-400 text-[8px] px-1.5 rounded">12</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 opacity-50 grayscale">
              <div className="w-full h-2 bg-slate-700 rounded mb-1" />
              <div className="w-1/2 h-2 bg-slate-700 rounded" />
            </div>
            {/* The Moving Card (When in col 2) */}
            {column === 2 && (
              <motion.div layoutId="active-card" className="bg-green-900/20 border border-green-500/50 p-2 rounded">
                <div className="flex justify-between items-start mb-1">
                   <div className="w-16 h-1.5 bg-green-500 rounded" />
                   <CheckCircle className="w-3 h-3 text-green-500" />
                </div>
                <div className="text-[10px] text-green-100 font-medium line-through decoration-green-500/50">Integrate Payment Gateway</div>
              </motion.div>
            )}
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

const SoftwareDevelopmentCycle = () => {
  // Schema for "HowTo" (Process)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Software Development Life Cycle (SDLC)",
    "description": "The agile process Abhastra follows to deliver high-quality custom software.",
    "step": steps.map(step => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.description,
      "url": "https://abhastra.com/software-development-cycle/"
    })),
    "totalTime": "P3M" // Approx 3 months placeholder
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 relative overflow-hidden font-sans">
      <Helmet>
        <title>Software Development Life Cycle (SDLC) Process | Abhastra</title>
        <meta name="description" content="Transparent, Agile, and Efficient. Explore our 6-step Software Development Cycle, from Discovery and UI/UX Design to Deployment and Maintenance." />
        <meta name="keywords" content="SDLC, Software Development Process, Agile Methodology, DevOps, QA Testing, UI/UX Design Process, Custom Software Lifecycle" />
        <link rel="canonical" href="https://abhastra.com/software-development-cycle" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Software Development Process | Abhastra" />
        <meta property="og:description" content="From idea to launch. See how we build scalable software." />
        <meta property="og:image" content="https://abhastra.com/images/sdlc-og.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-950 to-purple-900/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center my-10"
        >
         
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            From Abstract <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Idea</span> <br className="hidden md:block" />
            to Concrete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Product</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Great software isn't an accident. It's the result of a rigorous, repeatable process. We combine Agile flexibility with DevOps precision.
          </p>
        </motion.div>

        {/* --- Visual Mockup Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <KanbanMockup />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transparency First</h2>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              We don't believe in "black box" development. You are part of the team. Our process revolves around the <strong>Kanban</strong> board—a visual representation of work in progress.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Layout className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">Real-Time Tracking</h4>
                  <p className="text-slate-500 text-sm">See exactly what tasks are being worked on, blocked, or completed at any moment.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">Bi-Weekly Sprints</h4>
                  <p className="text-slate-500 text-sm">We deliver working features every two weeks, allowing for rapid feedback and pivots.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <GitPullRequest className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm">Continuous Integration</h4>
                  <p className="text-slate-500 text-sm">Automated testing runs on every code commit to ensure stability.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* --- The Cycle (Vertical Timeline) --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">The Development Lifecycle</h2>
            <p className="text-slate-400">Our 6-step roadmap to success.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 md:-translate-x-1/2" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-16 md:mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Icon Node (Center) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-900 border-4 border-slate-950 rounded-full flex items-center justify-center z-10 shadow-xl shadow-blue-900/20">
                    <div className={`w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700`}>
                       <Icon className={`w-6 h-6 text-${step.color}-400`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className={`text-${step.color}-400 font-bold text-xs uppercase tracking-wider mb-2`}>
                      Step 0{step.id}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 font-medium italic">{step.subtitle}</p>
                    <p className="text-slate-400 leading-relaxed text-sm mb-4">
                      {step.description}
                    </p>
                    
                    {/* Deliverables List */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {step.deliverables.map((item, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Process FAQs</h2>
            <p className="text-slate-400">Common questions about how we work.</p>
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
          className="rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start Step 1?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              The Discovery phase is completely free. Let's map out your idea and see if we are a good fit.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2 mx-auto">
              Start Discovery Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SoftwareDevelopmentCycle;