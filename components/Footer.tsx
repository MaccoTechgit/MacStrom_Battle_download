import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Instagram, Youtube, MessageCircle, Mail, Gamepad2 } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

// --- SEO: Organization Schema ---
const footerSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Macstrom Battle",
  "url": "https://macstrombattle.com",
  "logo": "https://macstrombattle.com/logo.png",
  "description": "India's trusted esports platform for BGMI and Free Fire tournaments.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210",
    "contactType": "customer support",
    "email": "help@macstrombattle.com",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi"]
  },
  "sameAs": [
    "https://www.instagram.com/macstrombattle",
    "https://www.youtube.com/macstrombattle"
  ]
};

const Footer: React.FC<FooterProps> = memo(({ onNavigate }) => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      onNavigate('home');
      
      // Use requestAnimationFrame for smoother execution than setTimeout
      requestAnimationFrame(() => {
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
        }, 100);
      });
    }
  };

  return (
    <>
      {/* Inject Schema for Brand Authority */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(footerSchema)}
        </script>
      </Helmet>

      <footer className="bg-[#05070a] border-t border-white/10 pt-16 pb-24 md:pb-8" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-sans font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded mr-2 flex items-center justify-center shadow-lg">
                    <Gamepad2 className="w-5 h-5 text-white" />
                </span>
                MACSTROM BATTLE
              </h2>
              <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                India's most trusted esports platform. Compete in your favorite games and win real cash rewards daily.
              </p>
              
              {/* Social Links with Security Attributes */}
              <div className="flex space-x-4">
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="p-2 bg-white/5 rounded-full hover:bg-pink-600/20 hover:text-pink-500 transition-colors text-gray-400"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Subscribe to our YouTube Channel"
                    className="p-2 bg-white/5 rounded-full hover:bg-red-600/20 hover:text-red-500 transition-colors text-gray-400"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                    href="https://whatsapp.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="p-2 bg-white/5 rounded-full hover:bg-green-600/20 hover:text-green-500 transition-colors text-gray-400"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links - Semantic Nav */}
            <nav aria-label="Footer Navigation">
              <h3 className="text-white font-bold mb-6 tracking-wider">QUICK LINKS</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-blue-500 transition-colors block">Home</a></li>
                <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-blue-500 transition-colors block">Features</a></li>
                <li><a href="#tournaments" onClick={(e) => handleNavClick(e, '#tournaments')} className="hover:text-blue-500 transition-colors block">Tournaments</a></li>
                <li><a href="#winners" onClick={(e) => handleNavClick(e, '#winners')} className="hover:text-blue-500 transition-colors block">Winners</a></li>
                <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-blue-500 transition-colors block">FAQ</a></li>
              </ul>
            </nav>

            {/* Legal & Support */}
            <div className="grid grid-cols-1 gap-8">
              <nav aria-label="Legal Information">
                 <h3 className="text-white font-bold mb-6 tracking-wider">LEGAL & SUPPORT</h3>
                 <ul className="space-y-3 text-sm text-gray-400">
                    <li>
                      <button onClick={() => onNavigate('privacy')} className="hover:text-blue-500 transition-colors text-left w-full">Privacy Policy</button>
                    </li>
                    <li>
                      <button onClick={() => onNavigate('terms')} className="hover:text-blue-500 transition-colors text-left w-full">Terms & Conditions</button>
                    </li>
                    <li>
                      <button onClick={() => onNavigate('refund')} className="hover:text-blue-500 transition-colors text-left w-full">Refund Policy</button>
                    </li>
                    <li>
                      <button onClick={() => onNavigate('fairplay')} className="hover:text-blue-500 transition-colors text-left w-full">Fair Play Policy</button>
                    </li>
                 </ul>
              </nav>
              
               <div className="mt-2">
                  <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex items-center group">
                      <Mail className="w-4 h-4 mr-3 text-blue-500 group-hover:text-white transition-colors" />
                      <a href="mailto:help@macstrombattle.com" className="hover:text-white transition-colors">help@macstrombattle.com</a>
                    </li>
                    <li className="flex items-center group">
                      <MessageCircle className="w-4 h-4 mr-3 text-green-500 group-hover:text-white transition-colors" />
                      <a href="https://wa.me/919876543210" className="hover:text-white transition-colors">+91 98765 43210 (WhatsApp)</a>
                    </li>
                  </ul>
               </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Macstrom Battle. All rights reserved.</p>
            <p className="text-xs">Made for Gamers, by Gamers.</p>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Footer;