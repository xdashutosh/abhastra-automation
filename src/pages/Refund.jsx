import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  RefreshCcw, 
  AlertTriangle, 
  FileX, 
  CheckCircle, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowLeft,
  CreditCard,
  Ban
} from 'lucide-react';

const RefundPolicy = () => {
  const lastUpdated = "December 03, 2025";

  // Navigation / Scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'overview', icon: AlertTriangle, title: 'General Policy' },
    { id: 'digital', icon: FileX, title: 'Digital Products' },
    { id: 'services', icon: CheckCircle, title: 'Service Projects' },
    { id: 'cancellation', icon: Ban, title: 'Cancellations' },
    { id: 'disputes', icon: CreditCard, title: 'Chargebacks' },
    { id: 'contact', icon: HelpCircle, title: 'Contact Support' },
  ];

  return (
    <>
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>Refund & Cancellation Policy | Abhastra Automation Pvt Ltd</title>
        <meta name="description" content="Read the Refund and Cancellation Policy of Abhastra Automation. We operate a strict no-refund policy for digital services and software development." />
        <link rel="canonical" href="https://abhastra.com/refund-policy/" />
        
        {/* Schema for Legal Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Refund Policy",
            "url": "https://abhastra.com/refund-policy/",
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

      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-red-500/30">
        
        {/* --- HEADER --- */}
        <header className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-20 w-72 h-72 bg-orange-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-500/20 text-red-400 text-xs font-medium mb-6">
                    <RefreshCcw className="w-3 h-3" />
                    <span>Policy Documentation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Refund & Cancellation Policy
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Please read this policy carefully before purchasing our products or services. Due to the nature of digital goods, we maintain a strict policy.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                    Last Updated: <span className="text-slate-300">{lastUpdated}</span>
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
                            <ArrowLeft className="w-4 h-4 text-red-500" />
                            Contents
                        </h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left group"
                                >
                                    <section.icon className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                        
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-xs text-slate-500 mb-2">Billing Issues?</p>
                            <a href="mailto:support@abhastratechnology.com" className="text-sm text-red-400 hover:text-red-300 font-medium">
                                Contact Billing Support
                            </a>
                        </div>
                    </div>
                </aside>

                {/* RIGHT: Content */}
                <div className="lg:w-3/4 space-y-16">
                    
                    {/* 1. Overview */}
                    <section id="overview" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">1. General Overview</h2>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-900/10 to-slate-900 border border-red-500/20 rounded-xl p-6">
                            <p className="text-lg text-slate-200 font-medium mb-4">
                                All Sales Are Final.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                At <strong>Abhastra Automation Pvt. Ltd.</strong>, we specialize in providing digital services, software licenses, 
                                and custom automation solutions. Unlike physical goods, digital assets cannot be "returned" once accessed or deployed. 
                            </p>
                            <p className="text-slate-400 mt-4">
                                Therefore, we generally <strong>do not offer refunds</strong> once a transaction is completed and the product/service has been delivered, 
                                initiated, or accessed. By making a purchase, you acknowledge and agree to this policy.
                            </p>
                        </div>
                    </section>

                    {/* 2. Digital Products */}
                    <section id="digital" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <FileX className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">2. Digital Products & Software</h2>
                        </div>
                        <p className="text-slate-400 mb-4">
                            This category includes Downloadable Software, API Access Keys, Cloud Subscriptions, and Pre-built Code Modules.
                        </p>
                        <div className="bg-slate-900/50 border border-white/5 p-5 rounded-lg">
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                    <span><strong>Instant Access:</strong> Once a download link is sent or an API key is generated, the product is considered "consumed."</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                    <span><strong>Non-Revocable:</strong> We cannot verify if you have deleted a downloaded file, making returns impossible.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                    <span><strong>Exception:</strong> If a technical error on <em>our</em> end prevents you from accessing the file/service entirely, and our support team cannot fix it within 7 business days, a refund may be considered.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. Service Projects */}
                    <section id="services" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">3. Custom Development & Consulting</h2>
                        </div>
                        <p className="text-slate-400 mb-4">
                            For projects involving custom ERP development, IIoT integration, or AI consulting:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                <h4 className="text-white font-medium mb-2">Milestone Payments</h4>
                                <p className="text-xs text-slate-400">
                                    Payments made for completed milestones (e.g., "Design Phase Approved") are non-refundable. Work has already been performed and resources allocated.
                                </p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                <h4 className="text-white font-medium mb-2">Retainers</h4>
                                <p className="text-xs text-slate-400">
                                    Monthly retainer fees for ongoing support or consultancy are non-refundable once the month has commenced.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Cancellations */}
                    <section id="cancellation" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                                <Ban className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">4. Cancellation Policy</h2>
                        </div>
                        <div className="space-y-4 text-slate-400">
                            <p>
                                You may cancel a subscription or recurring service at any time.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Effect:</strong> Cancellation stops future billing. You will not be charged for the next cycle.</li>
                                <li><strong>Access:</strong> You will retain access to the service until the end of your current paid billing period.</li>
                                <li><strong>No Prorating:</strong> We do not offer prorated refunds for unused days in a partial billing cycle.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Disputes */}
                    <section id="disputes" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">5. Chargebacks & Disputes</h2>
                        </div>
                        <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                            <p className="text-slate-400 mb-4">
                                If you believe a charge was made in error, please contact our support team immediately at <a href="mailto:support@abhastratechnology.com" className="text-blue-400 hover:underline">support@abhastratechnology.com</a>.
                            </p>
                            <p className="text-sm text-slate-500 italic">
                                <strong>Warning:</strong> Initiating a chargeback without contacting us first constitutes a breach of terms. It will result in the immediate and permanent suspension of your account, revocation of all licenses, and may lead to legal action to recover lost funds and fees.
                            </p>
                        </div>
                    </section>

                    {/* CONTACT */}
                    <section id="contact" className="border-t border-white/10 pt-12 mt-12">
                        <h2 className="text-xl font-bold text-white mb-6">Contact Us Regarding Refunds</h2>
                        <p className="text-slate-400 mb-8">
                            If you have specific questions about a transaction or believe you qualify for an exception due to technical failure:
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                             <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-purple-500 mt-1" />
                                <div>
                                    <h5 className="text-white font-medium">Email Support</h5>
                                    <a href="mailto:support@abhastratechnology.com" className="text-sm text-slate-400 hover:text-white mt-1 block">
                                        support@abhastratechnology.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-green-500 mt-1" />
                                <div>
                                    <h5 className="text-white font-medium">Call Us</h5>
                                    <a href="tel:+918507141727" className="text-sm text-slate-400 hover:text-white mt-1 block">
                                        +91 85071 41727
                                    </a>
                                    <span className="text-xs text-slate-600">Mon-Fri, 9am - 6pm IST</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                                <div>
                                    <h5 className="text-white font-medium">Office</h5>
                                    <address className="text-sm text-slate-400 not-italic mt-1">
                                        Gurugram, Haryana<br/>
                                        India - 122001
                                    </address>
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

export default RefundPolicy;