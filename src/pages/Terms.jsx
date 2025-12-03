import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Scale, 
  FileText, 
  CreditCard, 
  ShieldAlert, 
  Copyright, 
  UserCheck, 
  Ban, 
  Gavel, 
  Mail, 
  Phone, 
  MapPin,
  ArrowLeft,
  Briefcase,
  AlertTriangle
} from 'lucide-react';

const TermsAndConditions = () => {
  const effectiveDate = "November 19, 2024";

  // Navigation / Scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'definitions', icon: FileText, title: 'Definitions' },
    { id: 'usage', icon: UserCheck, title: 'Acceptance & Usage' },
    { id: 'services', icon: Briefcase, title: 'Scope of Services' },
    { id: 'payments', icon: CreditCard, title: 'Payments & Refunds' },
    { id: 'ip', icon: Copyright, title: 'Intellectual Property' },
    { id: 'liability', icon: ShieldAlert, title: 'Limitation of Liability' },
    { id: 'termination', icon: Ban, title: 'Termination' },
  ];

  return (
    <>
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>Terms and Conditions | Abhastra Automation Pvt Ltd</title>
        <meta name="description" content="Read the Terms and Conditions of Abhastra Automation. Understand your rights, obligations, and the rules regarding the use of our software and services." />
        <link rel="canonical" href="https://abhastra.com/terms-and-conditions/" />
        
        {/* Schema for Legal Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "url": "https://abhastra.com/terms-and-conditions/",
            "datePublished": "2024-11-19",
            "dateModified": "2025-12-03",
            "publisher": {
              "@type": "Organization",
              "name": "Abhastra Automation Pvt Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://abhastra.com/assets/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-purple-500/30">
        
        {/* --- HEADER --- */}
        <header className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6">
                    <Scale className="w-3 h-3" />
                    <span>Legal Agreement</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Terms and Conditions
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    These Terms constitute a legally binding agreement between you and Abhastra Automation regarding your use of our products and services.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                    Effective Date: <span className="text-slate-300">{effectiveDate}</span>
                </p>
            </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="container mx-auto px-6 pb-24">
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* LEFT: Table of Contents (Sticky) */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-24 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4 text-purple-500" />
                            Contents
                        </h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left group"
                                >
                                    <section.icon className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                        
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-xs text-slate-500 mb-2">Have questions?</p>
                            <a href="mailto:support@abhastratechnology.com" className="text-sm text-purple-400 hover:text-purple-300 font-medium">
                                support@abhastratechnology.com
                            </a>
                        </div>
                    </div>
                </aside>

                {/* RIGHT: Content */}
                <div className="lg:w-3/4 space-y-16">
                    
                    {/* Introduction */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Welcome to <strong>Abhastra Automation Pvt. Ltd.</strong> (“Company”, “we”, “our”, or “us”). 
                            By accessing or using our website, software, ERP systems, or any other services (collectively, the "Services"), 
                            you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, 
                            please refrain from using our Services.
                        </p>
                    </div>

                    {/* 1. Definitions */}
                    <section id="definitions" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">1. Definitions</h2>
                        </div>
                        
                        <div className="bg-slate-900/30 border border-white/5 rounded-xl p-6 grid gap-4">
                            <div>
                                <h4 className="text-white font-medium">Company</h4>
                                <p className="text-slate-400 text-sm">Refers to Abhastra Automation Pvt. Ltd. and its affiliates.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium">User</h4>
                                <p className="text-slate-400 text-sm">Any individual or entity accessing or using our Services.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium">Services</h4>
                                <p className="text-slate-400 text-sm">Includes all software, applications, websites, ERP solutions, and consultancy provided by the Company.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Acceptance & Usage */}
                    <section id="usage" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                                <UserCheck className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">2. Acceptance of Terms</h2>
                        </div>
                        <ul className="list-disc list-inside space-y-3 text-slate-400">
                            <li>By accessing our services, you confirm that you have read, understood, and agreed to these Terms.</li>
                            <li>You must be at least <strong>18 years old</strong> and capable of entering into a legally binding agreement.</li>
                            <li>You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
                        </ul>
                    </section>

                    {/* 3. Scope of Services */}
                    <section id="services" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">3. Scope of Services</h2>
                        </div>
                        <p className="text-slate-400 mb-4">
                            The Company specializes in providing advanced software solutions, including but not limited to:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            {['Intelligent ERP Systems', 'Industrial IoT (IIoT)', 'Custom Software Development', 'IT Consultancy'].map((item, i) => (
                                <div key={i} className="bg-white/5 px-4 py-3 rounded-lg border border-white/5 text-sm text-slate-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 italic">
                            Services will be delivered strictly as per the specific agreement/contract signed between the User and the Company.
                        </p>
                    </section>

                    {/* 4. Payments & Refunds */}
                    <section id="payments" className="scroll-mt-24">
                         <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-white/10 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <CreditCard className="w-6 h-6 text-yellow-400" />
                                <h2 className="text-2xl font-bold text-white">4. Payment and Fees</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-medium mb-2">Payment Terms</h4>
                                    <p className="text-sm text-slate-400">
                                        All payments must be made in accordance with the agreed terms in your service contract. 
                                        Delayed payments may result in immediate suspension of services. 
                                        All applicable taxes (GST, etc.) will be borne by the User.
                                    </p>
                                </div>
                                
                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg flex gap-4">
                                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-red-400 font-bold text-sm uppercase mb-1">Strict Refund Policy</h4>
                                        <p className="text-xs text-red-200/80 leading-relaxed">
                                            Due to the nature of digital services and software development, 
                                            <strong> all sales are final</strong>. We do not provide refunds under any circumstances once a service 
                                            is initiated or a product is delivered. Please review all details thoroughly before purchase.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Intellectual Property */}
                    <section id="ip" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                                <Copyright className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
                        </div>
                        <p className="text-slate-400 mb-4">
                            All intellectual property rights related to our services, including but not limited to source code, algorithms, designs, 
                            trademarks, logos, and documentation, are the exclusive property of <strong>Abhastra Automation Pvt. Ltd.</strong>
                        </p>
                        <div className="bg-slate-900 border border-white/5 p-5 rounded-lg">
                            <h5 className="text-white text-sm font-semibold mb-3">Restrictions:</h5>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="flex items-center gap-2">
                                    <Ban className="w-4 h-4 text-red-500" /> Users may not copy, distribute, or modify any part of our services.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Ban className="w-4 h-4 text-red-500" /> Reverse engineering of provided software is strictly prohibited.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Ban className="w-4 h-4 text-red-500" /> Unauthorized use of our brand assets is a violation of copyright laws.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 6. Limitation of Liability */}
                    <section id="liability" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">6. Limitation of Liability</h2>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            To the fullest extent permitted by law, Abhastra Automation Pvt. Ltd. shall not be liable for any indirect, incidental, 
                            special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                            or other intangible losses, resulting from:
                        </p>
                        <ul className="list-disc list-inside text-sm text-slate-500 space-y-1 pl-4">
                            <li>Your access to or use of or inability to access or use the services.</li>
                            <li>Any conduct or content of any third party on the services.</li>
                            <li>Any unauthorized access, use, or alteration of your transmissions or content.</li>
                        </ul>
                        <p className="mt-4 text-sm text-slate-300 font-medium">
                            Services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
                        </p>
                    </section>

                    {/* 7. Termination */}
                    <section id="termination" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                                <Ban className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">7. Termination</h2>
                        </div>
                        <p className="text-slate-400 text-sm">
                            We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, 
                            for any reason whatsoever, including without limitation if you breach the Terms. 
                            Upon termination, your right to use the Service will immediately cease.
                        </p>
                    </section>

                    {/* GOVERNING LAW & CONTACT */}
                    <section className="border-t border-white/10 pt-12 mt-12">
                        <div className="flex items-center gap-2 mb-6 text-white font-bold text-xl">
                            <Gavel className="w-5 h-5 text-blue-500" />
                            <h2>Governing Law & Contact</h2>
                        </div>
                        <p className="text-slate-400 mb-8">
                            These Terms shall be governed and construed in accordance with the laws of <strong>India</strong>, 
                            without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive 
                            jurisdiction of the courts in <strong>Gurugram, Haryana</strong>.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                                <div>
                                    <h5 className="text-white font-medium">Head Office</h5>
                                    <address className="text-sm text-slate-400 not-italic mt-1">
                                        Abhastra Automation Pvt. Ltd.<br/>
                                        Gurugram, Haryana<br/>
                                        India - 122001
                                    </address>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-purple-500 mt-1" />
                                <div>
                                    <h5 className="text-white font-medium">Support Email</h5>
                                    <a href="mailto:support@abhastratechnology.com" className="text-sm text-slate-400 hover:text-white mt-1 block">
                                        support@abhastratechnology.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-green-500 mt-1" />
                                <div>
                                    <h5 className="text-white font-medium">Support Phone</h5>
                                    <a href="tel:+918507141727" className="text-sm text-slate-400 hover:text-white mt-1 block">
                                        +91 85071 41727
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
      </div>
    </>
  );
};

export default TermsAndConditions;