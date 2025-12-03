import React, { useRef, useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Real Client Data mapped from provided URLs
const clients = [
  { 
    name: 'Coolbellup Dental', 
    logo: 'https://coolbellupdental.com.au/wp-content/uploads/2021/08/thumbnail_LogoClearBkgd-1.png', 
    industry: 'Healthcare', 
    color: 'from-cyan-500 to-blue-500',
    website: 'https://coolbellupdental.com.au'
  },
  { 
    name: 'News18 India', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e4/News18_India.svg', 
    industry: 'Media & Broadcasting', 
    color: 'from-red-500 to-orange-500',
    website: 'https://www.news18.com'
  },
  { 
    name: 'Envision Exim', 
    logo: 'https://envisionexim.com/wp-content/uploads/2025/01/ImageToStl.com_envisionexim12-removebg-preview__1_-removebg-preview.png', 
    industry: 'Import & Export', 
    color: 'from-emerald-500 to-teal-500',
    website: 'https://envisionexim.com'
  },
  { 
    name: 'DPGITM', 
    logo: 'https://dpgitm.ac.in/wp-content/uploads/2022/03/dpgitm.png', 
    industry: 'Education & Tech', 
    color: 'from-blue-600 to-indigo-600',
    website: 'https://dpgitm.ac.in'
  },
  { 
    name: 'ONFY', 
    logo: 'https://onfy.in/src/img/ONFY-Logo%20(1).png', 
    industry: 'E-Commerce', 
    color: 'from-purple-500 to-pink-500',
    website: 'https://onfy.in'
  },
  { 
    name: 'Shiksha Kranti', 
    logo: 'https://shikshakranti.com/wp-content/uploads/2023/02/Shiksha-Kranti-LOGO-5-min-1.png', 
    industry: 'Non-Profit / Edu', 
    color: 'from-orange-400 to-yellow-500',
    website: 'https://shikshakranti.com'
  },
  { 
    name: 'Assam Legislative Assembly', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Assam_Legislative_Assembly_logo.png/250px-Assam_Legislative_Assembly_logo.png', 
    industry: 'Government', 
    color: 'from-green-600 to-emerald-700',
    website: 'https://assamassembly.gov.in'
  },
];

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isVisible];
};

const Clients = () => {
  // Create copies for seamless infinite scroll (4 sets for wide screens)
  const infiniteClients = [...clients, ...clients, ...clients, ...clients];
  
  const [headerRef, isHeaderVisible] = useOnScreen({ threshold: 0.1 });
  const [statsRef, isStatsVisible] = useOnScreen({ threshold: 0.1 });

  // 1. Generate SEO Strings dynamically
  const clientNames = clients.map(c => c.name).join(', ');
  const pageTitle = "Trusted Partners & Clients | Global Industry Leaders";
  const pageDescription = `Trusted by ${clients.length}+ industry leaders including ${clientNames}. We deliver excellence across Healthcare, Government, Media, and Education sectors.`;

  // 2. Prepare Structured Data (JSON-LD)
  // This helps Google understand that this page lists organizations you work with.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": clients.map((client, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Organization",
          "name": client.name,
          "url": client.website,
          "logo": client.logo
        }
      }))
    }
  };

  return (
    <HelmetProvider>
      <section className="py-24 bg-slate-950 relative overflow-hidden min-h-[800px] flex flex-col justify-center" aria-label="Our Clients and Partners">
        
        {/* --- SEO HEAD INJECTION --- */}
        <Helmet>
          {/* Standard Meta Tags */}
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="keywords" content={`clients, partners, portfolio, ${clientNames}, government projects, media clients`} />
          <link rel="canonical" href={window.location.href} />

          {/* Open Graph (Facebook/LinkedIn) */}
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={clients[1].logo} /* Using a prominent logo like News18 as preview if no specific banner exists */ />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>

        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-slate-800/5 rounded-full blur-[100px] animate-drift-slow will-change-transform" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] bg-purple-900/5 rounded-full blur-[100px] animate-drift-slow animation-delay-2000 will-change-transform" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
                Global Partnerships
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-normal mb-6 text-slate-100">
              Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">By Leaders</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence to government bodies, educational institutions, and industry giants alike.
            </p>
          </div>

          {/* Stats Grid */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 max-w-5xl mx-auto transition-all duration-1000 delay-200 ease-out ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {[
              { label: 'Happy Clients', value: '50+', gradient: 'from-blue-400 to-indigo-400' },
              { label: 'Industries', value: '15+', gradient: 'from-purple-400 to-pink-400' },
              { label: 'Retention', value: '98%', gradient: 'from-pink-400 to-orange-400' },
              { label: 'Support', value: '24/7', gradient: 'from-orange-400 to-yellow-400' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group p-6 rounded-[20px] bg-[#0B0F19] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden py-4 flex">
              <div className="flex gap-6 md:gap-8 animate-infinite-scroll w-max hover:paused">
                {infiniteClients.map((client, index) => (
                  <div
                    key={`${index}-${client.name}`}
                    className="
                      flex-shrink-0 w-64 h-48 relative group
                      bg-[#0B0F19] border border-white/[0.08] rounded-[24px]
                      hover:border-white/[0.15] hover:-translate-y-1
                      transition-all duration-300
                      flex flex-col items-center justify-center p-6
                      overflow-hidden
                    "
                  >
                    <div 
                      className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 blur-[40px] transition-opacity duration-500`} 
                    />
                    
                    <div className="relative z-10 flex flex-col items-center w-full">
                      {/* SEO Friendly Image with alt, title, and loading attributes */}
                      <div className="h-16 w-full flex items-center justify-center mb-4">
                        <img
                          src={client.logo}
                          alt={`${client.name} - ${client.industry} Client`}
                          title={`We work with ${client.name}`}
                          loading="lazy"
                          width="150" 
                          height="60"
                          className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter"
                        />
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-200 text-center mb-1 group-hover:text-white transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest font-semibold group-hover:text-slate-400 transition-colors">
                        {client.industry}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes drift-slow {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, -20px) scale(1.05); }
            100% { transform: translate(0, 0) scale(1); }
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .animate-drift-slow {
            animation: drift-slow 20s ease-in-out infinite;
          }
          .animate-infinite-scroll {
            animation: scroll 40s linear infinite;
          }
          .hover\\:paused:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </HelmetProvider>
  );
};

export default Clients;