import React, { memo } from 'react';
import { Zap, Shield, Trophy, Headphones, Target, Users, Globe, Smartphone } from 'lucide-react';

// --- Static Data (Moved inside to make file self-contained & faster) ---
const FEATURES_DATA = [
  {
    id: 1,
    icon: Zap,
    title: "Instant Withdrawals",
    description: "Get your winnings transferred to your UPI or Bank Account instantly within seconds. No waiting periods."
  },
  {
    id: 2,
    icon: Shield,
    title: "Anti-Cheat System",
    description: "Our AI-powered detection algorithms ensure a 100% fair play environment. Hackers are banned instantly."
  },
  {
    id: 3,
    icon: Trophy,
    title: "Daily Tournaments",
    description: "Participate in 50+ matches daily for BGMI, Free Fire, and COD. Big prize pools guaranteed."
  },
  {
    id: 4,
    icon: Headphones,
    title: "24/7 Support",
    description: "Facing an issue? Our dedicated support team is available round the clock via WhatsApp and Email."
  },
  {
    id: 5,
    icon: Target,
    title: "Kill-Based Scoring",
    description: "Earn money for every kill you make. Even if you don't win the match, your skills still pay off."
  },
  {
    id: 6,
    icon: Users,
    title: "Refer & Earn",
    description: "Invite your squad and earn lifetime commissions on their gameplay. Build your own passive income."
  },
  {
    id: 7,
    icon: Globe,
    title: "Community Events",
    description: "Join exclusive weekend community cups and scrims hosted by top Indian streamers."
  },
  {
    id: 8,
    icon: Smartphone,
    title: "Lite App",
    description: "Our app is under 45MB, optimized for low-end devices, ensuring zero lag while you play."
  }
];

const Features: React.FC = memo(() => {
  return (
    <section id="features" className="py-24 bg-[#0f1014] relative overflow-hidden">
        
        {/* Decorative Background - Static & Optimized */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-purple-600/10 rounded-full blur-3xl opacity-50"></div>
        </div>

      {/* Standardized Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-white tracking-tight">
            WHY PLAY ON <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">MACSTROM?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the next level of competitive gaming with features designed for pros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES_DATA.map((feature) => (
            <article 
              key={feature.id} 
              className="bg-[#15161c] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 hover:bg-[#1a1b21] transition-all duration-300 group relative overflow-hidden transform-gpu"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#0f1014] rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 relative z-10">
                <feature.icon 
                    className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" 
                    aria-hidden="true" // Semantic: Icons are decorative here
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-sans font-bold text-white mb-3 relative z-10 group-hover:text-blue-400 transition-colors">
                  {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;