import React from 'react';
import { Users, Trophy, Flag, Star } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Active Gamers", value: "100k+", icon: Users, color: "from-blue-400 to-blue-600" },
    { label: "Total Winnings", value: "₹10L+", icon: Trophy, color: "from-yellow-400 to-orange-500" },
    { label: "Pro Leagues", value: "50+", icon: Flag, color: "from-red-400 to-rose-600" },
    { label: "App Rating", value: "4.8/5", icon: Star, color: "from-green-400 to-emerald-600" },
  ];

  return (
    <section className="py-10 relative z-20 -mt-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-gaming-card/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 group"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</h3>
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;