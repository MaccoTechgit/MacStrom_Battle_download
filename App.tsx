import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import VisualShowcase from './components/VisualShowcase';
import InstallGuide from './components/InstallGuide';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

// Legal Pages Imports (Correct File Names)
import PrivacyPolicy from './components/Privacypolicy';
import TermsConditions from './components/Terms & Conditions';
import RefundPolicy from './components/Refund&CancellationPolicy';
import FairPlayPolicy from './components/FairPlayPolicy';

import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Security & Anti-Theft Implementation
  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F12') { 
        e.preventDefault(); 
        return false; 
      }
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) { 
        e.preventDefault(); 
        return false; 
      }
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) { 
        e.preventDefault(); 
        return false; 
      }
      if (e.ctrlKey && (e.key === 's' || e.key === 'S')) { 
        e.preventDefault(); 
        return false; 
      }
      if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) { 
        e.preventDefault(); 
        return false; 
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Clean Routing Logic using Switch Case
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Stats />
            <Features />
            <VisualShowcase />
            <InstallGuide />
            <Testimonials />
            <FAQ />
          </>
        );
      case 'privacy':
        return <PrivacyPolicy onNavigate={navigateTo} />;
      case 'terms':
        return <TermsConditions onNavigate={navigateTo} />;
      case 'refund':
        return <RefundPolicy onNavigate={navigateTo} />;
      case 'fairplay':
        return <FairPlayPolicy onNavigate={navigateTo} />;
      default:
        return <Hero />;
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#0f1014] text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans select-none">
        
        {/* Header with Navigation */}
        <Header onNavigate={navigateTo} />
        
        {/* Dynamic Content Area */}
        <main className="relative z-10">
          {renderContent()}
        </main>

        {/* Footer with Navigation */}
        <Footer onNavigate={navigateTo} />
        
        {/* Sticky CTA (Only visible on Home) */}
        {currentPage === 'home' && <StickyCTA />}
        
      </div>
    </HelmetProvider>
  );
};

export default App;