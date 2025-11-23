import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Handle smooth scroll with offset for fixed header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    
    // Always navigate to home view first
    onNavigate('home');
    setMobileMenuOpen(false);

    // If it's a section link, wait for Home render then scroll
    if (href.startsWith('#')) {
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
          const headerOffset = 100; // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Just scroll to top if it is Home button
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
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-gaming-bg/80 backdrop-blur-lg border-white/10 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        {/* Fixed Container Width and Padding */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group cursor-pointer relative z-[70]"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gaming-primary to-gaming-accent rounded-lg flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform duration-300">
               <Gamepad2 className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl text-white tracking-wider leading-none">
                MACSTROM<span className="text-gaming-secondary">BATTLE</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] font-bold">ESPORTS PLATFORM</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wide hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gaming-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button 
              size="sm" 
              variant="primary" 
              className="ml-4 shadow-none" 
              onClick={(e) => handleNavClick(e as any, '#home')}
            >
              Download App
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors relative z-[70] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
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
      >
        {/* Decorative BG glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gaming-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-3xl font-display font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gaming-secondary hover:to-gaming-accent transition-all transform hover:scale-105 relative z-[60]"
          >
            {item.label}
          </a>
        ))}
        <div className="pt-8 relative z-[60]">
          <Button 
            size="lg" 
            onClick={(e) => handleNavClick(e as any, '#home')} 
            showIcon 
            className="w-64 shadow-xl"
          >
            Download App
          </Button>
        </div>
        
        <div className="absolute bottom-10 text-gray-500 text-xs font-medium tracking-widest">
            © 2025 Macstrom Battle
        </div>
      </div>
    </>
  );
};

export default Header;