import React from 'react';
import { Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If navigating to home sections
    if (href.startsWith('#')) {
      onNavigate('home');
      
      // Small timeout to allow Home component to mount before scrolling
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
    }
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/10 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-gaming-accent rounded mr-2 flex items-center justify-center">M</span>
              MACSTROM BATTLE
            </h2>
            <p className="text-gray-400 mb-6 max-w-sm">
              India's most trusted esports platform. Compete in your favorite games and win real cash rewards daily.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gaming-accent/20 hover:text-gaming-accent transition-colors text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gaming-accent/20 hover:text-gaming-accent transition-colors text-gray-400">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gaming-accent/20 hover:text-gaming-accent transition-colors text-gray-400">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-gaming-secondary transition-colors">Home</a></li>
              <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-gaming-secondary transition-colors">Features</a></li>
              <li><a href="#tournaments" onClick={(e) => handleNavClick(e, '#tournaments')} className="hover:text-gaming-secondary transition-colors">Tournaments</a></li>
              <li><a href="#winners" onClick={(e) => handleNavClick(e, '#winners')} className="hover:text-gaming-secondary transition-colors">Winners</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-gaming-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="grid grid-cols-1 gap-8">
            <div>
               <h3 className="text-white font-bold mb-6">LEGAL & SUPPORT</h3>
               <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <button onClick={() => onNavigate('privacy')} className="hover:text-gaming-secondary transition-colors text-left">Privacy Policy</button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('terms')} className="hover:text-gaming-secondary transition-colors text-left">Terms & Conditions</button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('refund')} className="hover:text-gaming-secondary transition-colors text-left">Refund Policy</button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate('fairplay')} className="hover:text-gaming-secondary transition-colors text-left">Fair Play Policy</button>
                  </li>
               </ul>
            </div>
             <div className="mt-2">
                <ul className="space-y-4 text-sm text-gray-400">
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-gaming-accent" />
                    help@macstrombattle.com
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-3 text-green-500" />
                    +91 98765 43210 (WhatsApp)
                  </li>
                </ul>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Macstrom Battle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;