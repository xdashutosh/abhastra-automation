import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedIntro from './components/AnimatedIntro';


// Pages
import Home from './pages/Home';
import CoreTeam from './pages/about/CoreTeam';
import OurStory from './pages/about/OurStory';
import AIAutomation from './pages/services/AIAutomation';
import ERPDevelopment from './pages/services/ERPDevelopment';
import AppWebDevelopment from './pages/services/AppWebDevelopment';
import LLMs from './pages/services/LLMs';
import Career from './pages/Career';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
  };

  return (
    <Router>
      {showIntro && <AnimatedIntro onComplete={handleIntroComplete} />}
      
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary selection:text-white">
        <Navbar/>
        <main className="overflow-hidden relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/core-team" element={<CoreTeam />} />
            <Route path="/about/our-story" element={<OurStory />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/erp-development" element={<ERPDevelopment />} />
            <Route path="/services/app-web-development" element={<AppWebDevelopment />} />
            <Route path="/services/llms" element={<LLMs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
