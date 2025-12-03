import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Cookie, 
  Server, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "December 14, 2025";

  // Navigation / Scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'collection', icon: FileText, title: 'Information We Collect' },
    { id: 'usage', icon: Eye, title: 'How We Use Your Data' },
    { id: 'cookies', icon: Cookie, title: 'Cookies & Tracking' },
    { id: 'sharing', icon: Users, title: 'Sharing & Third Parties' },
    { id: 'security', icon: Lock, title: 'Data Security' },
    { id: 'rights', icon: Shield, title: 'Your Rights' },
  ];

  return (
    <>
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>Privacy Policy | Abhastra Automation Pvt Ltd</title>
        <meta name="description" content="Read the Privacy Policy of Abhastra Automation. Learn how we collect, use, and protect your personal data in accordance with global standards." />
        <link rel="canonical" href="https://abhastra.com/privacy-policy/" />
        
        {/* Schema for Legal Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://abhastra.com/privacy-policy/",
            "datePublished": "2025-09-11",
            "dateModified": "2025-12-14",
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

      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
        
        {/* --- HEADER --- */}
        <header className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                    <Shield className="w-3 h-3" />
                    <span>Legal Documentation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Privacy Policy
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    At Abhastra Automation, we value your trust. This document outlines how we collect, safeguard, and use your personal information.
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
                            <ArrowLeft className="w-4 h-4 text-blue-500" />
                            Contents
                        </h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left group"
                                >
                                    <section.icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                        
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-xs text-slate-500 mb-2">Need help?</p>
                            <a href="mailto:contact@abhastra.com" className="text-sm text-blue-400 hover:text-blue-300 font-medium">
                                contact@abhastra.com
                            </a>
                        </div>
                    </div>
                </aside>

                {/* RIGHT: Policy Content */}
                <div className="lg:w-3/4 space-y-16">
                    
                    {/* Introduction */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Welcome to <strong>Abhastra Automation Pvt. Ltd.</strong> (“we”, “our”, or “us”). 
                            We are committed to protecting your personal information and your right to privacy. 
                            When you visit our website <strong>https://abhastra.com</strong> or use our services, 
                            you trust us with your personal information. We take that trust seriously.
                        </p>
                        <p className="text-slate-400">
                            This privacy policy describes how we collect, use, and share your personal information when you visit or make a purchase from the Site. 
                            By using our services, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </div>

                    {/* 1. Information We Collect */}
                    <section id="collection" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
                        </div>
                        
                        <div className="bg-slate-900/30 border border-white/5 rounded-xl p-6 space-y-6">
                            <div>
                                <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" /> Personal Information
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed ml-6">
                                    We collect personal information that you voluntarily provide to us when you register on the website, 
                                    express an interest in obtaining information about us or our products, or otherwise when you contact us. 
                                    This may include:
                                </p>
                                <ul className="list-disc list-inside ml-6 mt-2 text-sm text-slate-400 space-y-1">
                                    <li>Name and Contact Data (Email address, phone number).</li>
                                    <li>Credentials (Passwords, hints, and security info).</li>
                                    <li>Payment Data (Processed securely via third-party gateways like Razorpay/PayU).</li>
                                </ul>
                            </div>

                            <div className="border-t border-white/5 pt-6">
                                <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <Server className="w-4 h-4 text-purple-500" /> Automatically Collected Info
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed ml-6">
                                    We automatically collect certain information when you visit, use, or navigate the Website. 
                                    This information does not reveal your specific identity (like your name or contact information) 
                                    but may include device and usage information, such as your IP address, browser and device characteristics, 
                                    operating system, language preferences, referring URLs, device name, country, location, and other technical information.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. How We Use Information */}
                    <section id="usage" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Eye className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
                        </div>
                        <p className="text-slate-400 mb-4">We use personal information collected via our website for a variety of business purposes described below:</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "To facilitate account creation and logon process.",
                                "To send you marketing and promotional communications (Opt-in only).",
                                "To fulfill and manage your orders and payments.",
                                "To request feedback and contact you about your use of our Site.",
                                "To protect our Services (Fraud prevention).",
                                "To respond to legal requests and prevent harm."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    <span className="text-sm text-slate-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. Cookies */}
                    <section id="cookies" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">3. Cookies and Tracking Technologies</h2>
                        </div>
                        <div className="text-slate-400 space-y-4">
                            <p>
                                We use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. 
                                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                            </p>
                            <div className="bg-yellow-500/5 border border-yellow-500/10 p-4 rounded-lg flex gap-4">
                                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <p className="text-sm text-yellow-200/80">
                                    <strong>Note:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Sharing */}
                    <section id="sharing" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                                <Users className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">4. Sharing Your Information</h2>
                        </div>
                        <p className="text-slate-400 mb-4">We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                        
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 font-bold text-slate-500">1</div>
                                <div>
                                    <h4 className="text-white font-medium">Business Transfers</h4>
                                    <p className="text-sm text-slate-400 mt-1">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 font-bold text-slate-500">2</div>
                                <div>
                                    <h4 className="text-white font-medium">Third-Party Service Providers</h4>
                                    <p className="text-sm text-slate-400 mt-1">We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work (e.g., Payment Processing via Razorpay, Data Analytics via Google Analytics).</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* 5. Security */}
                    <section id="security" className="scroll-mt-24">
                         <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <Lock className="w-6 h-6 text-blue-400" />
                                <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
                            </div>
                            <p className="text-slate-300 relative z-10 mb-4">
                                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
                            </p>
                            <p className="text-sm text-slate-400 relative z-10">
                                However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the services within a secure environment.
                            </p>
                        </div>
                    </section>

                    {/* 6. Rights */}
                    <section id="rights" className="scroll-mt-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                                <Shield className="w-5 h-5" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">6. Your Privacy Rights</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="text-white font-medium mb-2">Access & Correction</h4>
                                <p className="text-xs text-slate-400">You have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances.</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="text-white font-medium mb-2">Account Termination</h4>
                                <p className="text-xs text-slate-400">You may at any time review or change the information in your account or terminate your account by logging into your account settings or contacting us.</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <h4 className="text-white font-medium mb-2">Marketing Opt-Out</h4>
                                <p className="text-xs text-slate-400">You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send.</p>
                            </div>
                        </div>
                    </section>

                    {/* CONTACT */}
                    <section className="border-t border-white/10 pt-12 mt-12">
                        <h2 className="text-xl font-bold text-white mb-6">Contact Us</h2>
                        <p className="text-slate-400 mb-8">
                            If you have questions or comments about this policy, you may email us or contact us by post at:
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
                                    <h5 className="text-white font-medium">Email Us</h5>
                                    <a href="mailto:contact@abhastra.com" className="text-sm text-slate-400 hover:text-white mt-1 block">
                                        contact@abhastra.com
                                    </a>
                                    <a href="mailto:support@abhastratechnology.com" className="text-sm text-slate-400 hover:text-white block">
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
                        </div>
                    </section>

                </div>
            </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;