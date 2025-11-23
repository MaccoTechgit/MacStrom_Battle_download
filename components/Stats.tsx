import React, { memo } from 'react';
import { Users, Trophy, Flag, Star } from 'lucide-react';

// --- Static Data (Moved outside for memory optimization) ---
const STATS_DATA = [
  { 
    id: 1,
    label: "Active Gamers", 
    value: "100k+", 
    icon: Users, 
    color: "from-blue-400 to-blue-600",
    ariaLabel: "Over 100,000 Active Gamers"
  },
  { 
    id: 2,
    label: "Total Winnings", 
    value: "₹10L+", 
    icon: Trophy, 
    color: "from-yellow-400 to-orange-500",
    ariaLabel: "Over 10 Lakh Rupees in Total Winnings"
  },
  { 
    id: 3,
    label: "Pro Leagues", 
    value: "50+", 
    icon: Flag, 
    color: "from-red-400 to-rose-600",
    ariaLabel: "Over 50 Professional Leagues"
  },
  { 
    id: 4,
    label: "App Rating", 
    value: "4.8/5", 
    icon: Star, 
    color: "from-green-400 to-emerald-600",
    ariaLabel: "4.8 out of 5 Stars App Rating"
  },
];

const Stats: React.FC = memo(() => {
  return (
    <section 
      className="py-10 relative z-20 -mt-10 max-w-7xl mx-auto px-6 lg:px-8"
      aria-label="App Statistics"
    >
      {/* Semantic HTML: Using Description List (dl) for Key-Value pairs helps Google understand relationship */}
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {STATS_DATA.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-[#1a1b20]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300 group transform-gpu"
          >
            {/* Icon Container */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>

            {/* Value (dd = Description Details) */}
            <dd 
              className="text-2xl md:text-3xl font-display font-bold text-white mb-1"
              aria-label={stat.ariaLabel}
            >
              {stat.value}
            </dd>

            {/* Label (dt = Description Term) */}
            <dt className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-semibold">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
});

export default Stats;