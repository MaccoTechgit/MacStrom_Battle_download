import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Settings, Smartphone, CheckCircle } from 'lucide-react';

// --- Static Data (Moved outside component to prevent recreation on re-render) ---
const STEPS = [
  {
    icon: Download,
    title: "Download App",
    desc: "Tap the 'Download for Android' or 'App Store' button above to get the official APK.",
    action: "Download"
  },
  {
    icon: Settings,
    title: "Install & Trust",
    desc: "Android: Allow 'Install from Unknown Source'. iOS: Follow prompts to trust the developer profile.",
    action: "Install"
  },
  {
    icon: Smartphone,
    title: "Open & Login",
    desc: "Launch the app, enter your mobile number, and verify OTP to create your gamer profile.",
    action: "Register"
  },
  {
    icon: CheckCircle,
    title: "Play & Win",
    desc: "Select BGMI or Free Fire, join a tournament, kill enemies, and withdraw real cash!",
    action: "Win"
  }
];

// --- SEO Schema for "HowTo" (Google Rich Results) ---
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Install Esports Arena App",
  "description": "Follow these simple steps to download and install the best Esports Tournament App on Android and iOS.",
  "totalTime": "PT2M",
  "step": STEPS.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.title,
    "text": step.desc,
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=200" // Placeholder for step image
  }))
};

const InstallGuide: React.FC = memo(() => {
  return (
    <>
      <Helmet>
        {/* Keywords specific to Installation guide ranking */}
        <meta name="keywords" content="how to install esports app, download bgmi tournament app apk, ios esports app install, install guide esports arena" />
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      <section className="py-24 bg-[#0f1014] border-t border-white/5 relative overflow-hidden">
        {/* Background Glow for Visual Depth (Optimized) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
              EASY <span className="text-blue-500">START</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start playing in less than 2 minutes. Follow this guide to install on any device.
            </p>
          </header>

          {/* Using Semantic <ol> for SEO structure */}
          <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Connecting Line (Visible only on Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-gray-800 via-blue-500/50 to-gray-800 -z-0"></div>

            {STEPS.map((step, index) => (
              <li key={index} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Step Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-[#0f1014] border-4 border-[#1a1b20] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-blue-500 transition-colors duration-300 relative transform-gpu group-hover:scale-105">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-[#0f1014] shadow-lg">
                    {index + 1}
                  </span>
                  <step.icon className="w-10 h-10 text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                </div>
                
                {/* Text Card */}
                <article className="bg-white/5 p-6 rounded-2xl border border-white/5 w-full h-full hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
});

export default InstallGuide;