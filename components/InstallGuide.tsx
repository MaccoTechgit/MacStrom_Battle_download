import React from 'react';
import { Download, AlertTriangle, Settings, CheckCircle, Smartphone } from 'lucide-react';

const InstallGuide: React.FC = () => {
  const steps = [
    {
      icon: Download,
      title: "Download App",
      desc: "Tap the download button for your device (Android or iOS)."
    },
    {
      icon: Settings,
      title: "Install / Trust",
      desc: "For Android: Allow Install. For iOS: Follow App Store prompts."
    },
    {
      icon: Smartphone,
      title: "Open & Login",
      desc: "Launch the app and create your gamer profile."
    },
    {
      icon: CheckCircle,
      title: "Play & Win",
      desc: "Join a tournament and start winning real cash!"
    }
  ];

  return (
    <section className="py-24 bg-gaming-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            EASY <span className="text-gaming-primary">START</span>
          </h2>
          <p className="text-gray-400">Start playing in less than 2 minutes on any device.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-gray-800 via-gaming-primary/50 to-gray-800 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-gaming-bg border-4 border-gaming-card flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-gaming-primary transition-colors duration-300 relative">
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-gaming-primary rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-gaming-card">
                    {index + 1}
                </span>
                <step.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 w-full hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallGuide;