import React, { useState, useEffect, memo } from 'react';
import { Menu, X, Gamepad2, Download } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = memo(({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Performance: Optimized Scroll Handler ---
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- UX: Lock Body Scroll when Menu is Open ---
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // --- Logic: Smooth Scroll with Offset ---
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    
    // Logic to handle page switching if you add routing later
    onNavigate('home');
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Tournaments', href: '#tournaments' },
    { label: 'Winners', href: '#winners' },
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b will-change-transform ${
          isScrolled 
            ? 'bg-[#0f1014]/90 backdrop-blur-lg border-white/10 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo - SEO Optimized */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group cursor-pointer relative z-[70]"
            aria-label="Macstrom Battle Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform duration-300">
               <Gamepad2 className="text-white w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-wider leading-none">
                MACSTROM<span className="text-blue-500">BATTLE</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] font-bold">ESPORTS PLATFORM</span>
            </div>
          </a>

          {/* Desktop Nav - Semantic HTML */}
          <nav className="hidden md:block" aria-label="Main Navigation">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wide relative group py-2 block"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <li>
                <button 
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors relative z-[70] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Dropdown Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050507]/98 backdrop-blur-xl z-[50] transition-all duration-300 md:hidden flex flex-col justify-center items-center space-y-8 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Decorative BG glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <nav>
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-3xl font-sans font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all transform hover:scale-105 block relative z-[60]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-8 relative z-[60]">
          <button 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="w-64 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Download className="w-5 h-5" />
            Download App
          </button>
        </div>
        
        <div className="absolute bottom-10 text-gray-500 text-xs font-medium tracking-widest">
            © 2025 Macstrom Battle
        </div>
      </div>
    </>
  );
});

export default Header;