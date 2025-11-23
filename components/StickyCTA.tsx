import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Download } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position using both window and documentElement for cross-browser compatibility
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Show immediately after scrolling 50px (just past the very top)
      // This ensures it appears almost instantly when interacting with the page
      if (scrollTop > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check visibility immediately on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // Scroll back to top to show the main platform choices (Android/iOS)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div 
      className={`
        fixed bottom-6 left-4 right-4 md:hidden transition-all duration-500 ease-out transform z-[2147483647]
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0 pointer-events-none'}
      `}
    >
      {/* Glassmorphism Container with Gradient Border */}
      <div className="bg-[#111116]/90 backdrop-blur-xl p-2 pl-5 pr-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-gaming-primary/50 flex items-center justify-between gap-3 relative overflow-hidden">
        
        {/* Subtle Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-primary/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="flex flex-col relative z-10">
            <span className="text-white font-bold font-display text-sm leading-tight tracking-wide drop-shadow-sm">DOWNLOAD APP</span>
            <span className="text-[10px] text-gray-400 flex items-center font-medium mt-0.5">
                <span className="w-1.5 h-1.5 bg-gaming-success rounded-full mr-1.5 animate-pulse"></span>
                iOS & Android
            </span>
        </div>
        
        <Button 
            onClick={handleDownload}
            className="rounded-full py-2.5 px-5 text-xs font-bold whitespace-nowrap relative z-10 bg-gradient-to-r from-gaming-primary to-gaming-accent hover:from-gaming-accent hover:to-gaming-primary text-white border-none shadow-lg active:scale-95 transition-all"
            variant="primary"
        >
            <Download className="w-4 h-4 mr-1.5 animate-bounce" />
            GET NOW
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;