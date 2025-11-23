import React, { useState, useEffect, memo } from 'react';
import { Download } from 'lucide-react';

const StickyCTA: React.FC = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Performance Optimization: 
      // requestAnimationFrame ensures logic runs only once per frame (60fps)
      // instead of firing hundreds of times per second.
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show button after scrolling 100px down
          setIsVisible(scrollTop > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    // Scroll smoothly to the top where main download buttons are located
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`
        fixed bottom-6 left-4 right-4 md:hidden transition-all duration-500 ease-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0 pointer-events-none'}
      `}
      style={{ zIndex: 9999 }} // Ensures it stays above everything
    >
      {/* Glassmorphism Container */}
      <div className="bg-[#111116]/90 backdrop-blur-xl p-2 pl-5 pr-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-blue-500/30 flex items-center justify-between gap-3 relative overflow-hidden ring-1 ring-white/5">
        
        {/* Subtle Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="flex flex-col relative z-10">
            <span className="text-white font-bold font-sans text-sm leading-tight tracking-wide drop-shadow-sm">
              DOWNLOAD APP
            </span>
            <span className="text-[10px] text-gray-400 flex items-center font-medium mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                iOS & Android
            </span>
        </div>
        
        <button 
            onClick={handleScrollToTop}
            className="rounded-full py-2.5 px-5 text-xs font-bold whitespace-nowrap relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-none shadow-lg active:scale-95 transition-all flex items-center"
            aria-label="Get App Now"
        >
            <Download className="w-4 h-4 mr-1.5 animate-bounce" />
            GET NOW
        </button>
      </div>
    </div>
  );
});

export default StickyCTA;