import React, { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Trophy, Sparkles, Flame, Target } from 'lucide-react';

const APP_NAME = "Esports Arena";
const DEFAULT_TITLE = "Download Best Esports App: Play BGMI, Free Fire & COD Tournaments";
const DEFAULT_DESC = "Join 1 Lakh+ gamers daily. Download India's #1 Esports App for BGMI, Free Fire & COD Mobile tournaments. Instant withdrawal & 100% Secure.";
const ANDROID_DOWNLOAD_LINK = "https://play.google.com/store/apps";
const IOS_DOWNLOAD_LINK = "";
const APP_SIZE = "45 MB";

// --- Memoized Logos for Performance ---
const AndroidLogo = memo(() => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" fill="currentColor" aria-hidden="true">
    <path d="M17.523 15.3414C17.523 15.3414 17.5058 15.3414 17.4866 15.3414C17.2454 15.3414 17.0393 15.1738 16.9766 14.9414C16.9022 14.6624 17.1128 14.3834 17.3917 14.309C18.4346 14.0291 19.2505 13.2115 19.5286 12.1683C19.603 11.8893 19.8819 11.6786 20.1836 11.753C20.4626 11.8274 20.6483 12.1305 20.5739 12.4336C20.215 13.779 19.172 14.822 17.8265 15.1809C17.7321 15.2872 17.6278 15.3414 17.523 15.3414ZM6.47703 15.3414C6.37222 15.3414 6.26789 15.2872 6.17357 15.1809C4.82805 14.822 3.78499 13.779 3.42614 12.4336C3.35176 12.1546 3.53742 11.8515 3.81639 11.7771C4.09536 11.7027 4.39848 11.8884 4.47287 12.1924C4.75094 13.2356 5.56685 14.0532 6.60977 14.3331C6.88874 14.4075 7.09935 14.6865 7.02497 14.9655C6.96068 15.1979 6.75457 15.3655 6.51336 15.3655H6.47703V15.3414ZM12.0002 18.2538C8.32803 18.2538 5.24004 15.8108 4.29752 12.4166C4.24601 12.2311 4.05245 12.1251 3.86683 12.1767L1.42422 12.8546C1.2386 12.9062 1.13274 13.0998 1.18424 13.2854C1.23575 13.471 1.42931 13.5769 1.61493 13.5254L4.05754 12.8475C4.10745 12.8337 4.15203 12.8045 4.18464 12.7634C5.19883 16.3866 8.4568 19.0063 12.2835 18.9309H12.0002C15.6723 18.9309 18.7603 16.4879 19.7028 13.0937C19.7544 12.9081 19.9479 12.8022 20.1335 12.8537L22.5762 13.5316C22.7618 13.5832 22.8676 13.7767 22.8161 13.9624C22.7646 14.148 22.5711 14.2539 22.3854 14.2024L19.9428 13.5245C19.8929 13.5106 19.8483 13.4815 19.8157 13.4404C18.8015 17.0636 15.5436 19.6833 11.7169 19.6079L12.0002 18.2538Z"/>
    <path d="M16.4764 8.03864C16.2722 8.03864 16.1024 7.87565 16.0938 7.67146L15.6923 2.55155C15.6768 2.35424 15.8244 2.18266 16.0217 2.16722C16.219 2.15178 16.3905 2.29935 16.406 2.49666L16.8075 7.61657C16.8229 7.81387 16.6753 7.98546 16.478 8.00089C16.478 8.00089 16.478 8.00089 16.4764 8.03864ZM7.52403 8.03864C7.32672 8.03864 7.15513 7.87565 7.13969 7.67146L6.73816 2.55155C6.72272 2.35424 6.87028 2.18266 7.0676 2.16722C7.26491 2.15178 7.43649 2.29935 7.45193 2.49666L7.85346 7.61657C7.8689 7.81387 7.72133 7.98546 7.52403 8.00089C7.52403 8.00089 7.52403 8.00089 7.52403 8.03864Z"/>
    <path d="M8.23529 10.3529C8.23529 10.8217 7.85412 11.2029 7.38529 11.2029C6.91647 11.2029 6.53529 10.8217 6.53529 10.3529C6.53529 9.88412 6.91647 9.50294 7.38529 9.50294C7.85412 9.50294 8.23529 9.88412 8.23529 10.3529Z"/>
    <path d="M17.4647 10.3529C17.4647 10.8217 17.0835 11.2029 16.6147 11.2029C16.1459 11.2029 15.7647 10.8217 15.7647 10.3529C15.7647 9.88412 16.1459 9.50294 16.6147 9.50294C17.0835 9.50294 17.4647 9.88412 17.4647 10.3529Z"/>
  </svg>
));

const AppleLogo = memo(() => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5C17.88 20.74 17.03 21.93 15.66 21.97C14.32 22.01 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22.01C7.78 22.06 6.81 20.79 5.96 19.57C4.23 17.07 2.92 12.5 4.69 9.43C5.56 7.92 7.11 6.96 8.79 6.93C10.1 6.9 11.01 7.82 11.83 7.82C12.62 7.82 13.83 6.81 15.45 6.88C16.12 6.91 17.93 7.14 19.15 8.93C19.07 8.98 17.14 10.11 17.16 12.62C17.19 15.36 19.57 16.28 19.62 16.3C19.6 16.4 19.24 17.66 18.71 19.5ZM12.94 5.12C13.66 4.25 14.14 3.04 14 1.83C12.91 1.87 11.6 2.56 10.82 3.46C10.12 4.26 9.59 5.51 9.76 6.69C10.97 6.79 12.22 6.01 12.94 5.12Z"/>
  </svg>
));

const Hero: React.FC = () => {
  const [userCountry, setUserCountry] = useState<string>("India");

  useEffect(() => {
    const controller = new AbortController();
    const fetchCountry = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        const data = await res.json();
        if (data && data.country_name) {
          setUserCountry(data.country_name);
        }
      } catch (err) {
        // Silent fail
      }
    };
    fetchCountry();
    return () => controller.abort();
  }, []);

  const handleDownload = (link: string, platform: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      alert(`${platform} version coming soon!`);
    }
  };

  // --- Advanced SEO Schema for App Download ---
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": APP_NAME,
    "operatingSystem": "Android, iOS",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "18249",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "fileSize": APP_SIZE,
    "description": DEFAULT_DESC
  };

  return (
    <>
      {/* --- SEO Meta Data --- */}
      <Helmet>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESC} />
        <meta name="keywords" content="esports app download, earn money playing bgmi, free fire tournament app, play games earn cash india" />
        
        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Play Esports & Win Big - Download Now" />
        <meta property="og:description" content="Daily tournaments for BGMI, Free Fire & COD. 100% Secure & Instant Withdrawals." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200" />
        
        <link rel="canonical" href="https://macstrombattle.com/" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* FIXES: 
         1. Changed `pt-24 md:pt-32` to `pt-20 md:pt-32` (Less gap on mobile).
         2. Adjusted flex alignment to center content better on small screens.
      */}
      <section id="home" className="relative w-full min-h-screen pt-20 md:pt-32 pb-12 md:pb-20 flex items-center overflow-hidden bg-gaming-bg">
        
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 rounded-full blur-[120px] opacity-40 will-change-transform"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/15 rounded-full blur-[120px] opacity-40 will-change-transform"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 relative grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* Left Content */}
          <article className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(14,165,233,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 mr-2 animate-pulse" aria-hidden="true" />
              <span className="text-blue-400 font-sans font-bold tracking-widest text-xs uppercase">{userCountry}'s #1 Esports Arena</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
              PLAY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">COMPETE.</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
                WIN BIG.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join <strong className="text-white font-bold">100k+ gamers</strong> in daily leagues for BGMI, Free Fire & COD. Available on Android & iOS.
            </p>
            
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                {/* Android Button */}
                <div className="relative group flex-1 transform transition-transform hover:scale-105 active:scale-95">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-200"></div>
                  <button 
                    onClick={() => handleDownload(ANDROID_DOWNLOAD_LINK, 'Android')}
                    aria-label="Download Android App"
                    className="relative w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3.5 rounded-xl transition-all backdrop-blur-sm"
                  >
                    <div className="p-1.5 bg-green-500/20 rounded-full text-green-500 shadow-inner">
                      <AndroidLogo />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Download for</div>
                      <div className="font-bold text-lg leading-none">Android</div>
                    </div>
                  </button>
                </div>

                {/* iOS Button */}
                <div className="relative group flex-1 transform transition-transform hover:scale-105 active:scale-95">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
                  <button 
                    onClick={() => handleDownload(IOS_DOWNLOAD_LINK, 'iOS')}
                    aria-label="Download iOS App"
                    className="relative w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3.5 rounded-xl transition-all backdrop-blur-sm"
                  >
                    <div className="p-1.5 bg-gray-100/20 rounded-full text-gray-100 shadow-inner">
                      <AppleLogo />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Download on</div>
                      <div className="font-bold text-lg leading-none">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-gray-500 font-medium w-full">
                <div className="flex items-center bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Size: {APP_SIZE}
                </div>
                <div className="flex items-center bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                  <Shield className="w-3.5 h-3.5 mr-2 text-blue-400" aria-hidden="true" />
                  100% Secure
                </div>
              </div>
            </div>
          </article>

          {/* Right Side - Live Hub Image */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 py-6 lg:py-0">
            {/* Increased max-width for desktop (lg:max-w-md) to make image bigger */}
            <div className="relative w-full max-w-sm lg:max-w-md aspect-square flex flex-col items-center justify-center transform-gpu">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/10 rounded-[3rem] blur-3xl"></div>
              
              {/* Glass Card */}
              <div className="relative w-full bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group flex flex-col justify-between min-h-[380px] ring-1 ring-white/5">
                
                {/* FIX: Image Visibility - Increased opacity & removed grayscale */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=90&w=1200" 
                    alt="Live Esports Tournament Dashboard"
                    width="800"
                    height="800"
                    fetchPriority="high" 
                    // Increased opacity to 90% for better visibility
                    className="w-full h-full object-cover opacity-90 mix-blend-normal"
                  />
                  {/* Lighter overlay so image pops more */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/20 via-[#0a0a0f]/60 to-[#0a0a0f]"></div>
                </div>

                {/* Card Content (Live Hub Header) */}
                <div className="relative flex justify-between items-center z-10">
                  <div className="flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-red-400 text-[10px] font-bold tracking-widest uppercase text-shadow">Live Hub</span>
                  </div>
                  <Target className="text-white/50 w-5 h-5 drop-shadow-md" aria-hidden="true" />
                </div>

                {/* Stats Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center py-4">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center p-3 bg-yellow-400/20 rounded-2xl mb-3 border border-yellow-400/30 shadow-[0_0_20px_rgba(250,204,21,0.3)] backdrop-blur-sm">
                      <Trophy className="w-8 h-8 text-yellow-400 fill-yellow-400/20" aria-hidden="true" />
                    </div>
                    <p className="text-gray-300 text-[10px] uppercase tracking-[0.3em] font-bold mb-1 drop-shadow-md">Weekly Prize Pool</p>
                    <h2 className="text-5xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      ₹50k
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-3 w-full">
                    <div className="bg-[#1a1a20]/80 p-3 rounded-xl border border-white/10 text-center backdrop-blur-md hover:bg-[#1a1a20] transition-colors shadow-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Users className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                        <span className="text-white font-bold text-lg">1,240</span>
                      </div>
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Live Players</p>
                    </div>
                    <div className="bg-[#1a1a20]/80 p-3 rounded-xl border border-white/10 text-center backdrop-blur-md hover:bg-[#1a1a20] transition-colors shadow-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Flame className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                        <span className="text-white font-bold text-lg">24</span>
                      </div>
                      <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Leagues</p>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 mt-auto pt-4">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3"></div>
                  <div className="flex justify-between items-center text-[11px] text-gray-300 font-medium">
                    <span>Next Match:</span>
                    <span className="text-blue-400 font-bold drop-shadow-sm">Starts in 04:59</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Notification */}
              <div className="absolute bottom-6 -left-4 md:-left-12 w-auto px-5 py-3 bg-[#111]/90 rounded-xl border border-white/20 backdrop-blur-xl flex items-center gap-4 animate-float delay-300 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-20 ring-1 ring-white/5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-gray-400 uppercase leading-none font-bold mb-1 tracking-wider">Online Now</span>
                  <span className="text-lg font-bold text-white leading-none font-sans">18,249</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;