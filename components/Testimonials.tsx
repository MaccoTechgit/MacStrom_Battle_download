import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Override constants with better images for display
  const enhancedTestimonials = [
    {
      ...TESTIMONIALS[0],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", // Rahul
    },
    {
      ...TESTIMONIALS[1],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", // Priya
    },
    {
      ...TESTIMONIALS[2],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", // Vikram
    }
  ];

  return (
    <section id="winners" className="py-24 bg-gaming-bg relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gaming-secondary/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-white/5 pb-8">
            <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                    TOP <span className="text-gaming-accent">PLAYERS</span>
                </h2>
                <p className="text-gray-400 text-lg">See who is dominating the leaderboards today.</p>
            </div>
            <div className="text-left md:text-right bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                <p className="text-gaming-success font-bold text-2xl font-display">₹10,00,000+</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Total Winnings Distributed</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {enhancedTestimonials.map((item, idx) => (
            <div 
                key={item.id} 
                className="bg-[#0f0f13] p-8 rounded-3xl border border-white/5 relative group hover:border-gaming-accent/30 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              {/* Quote Icon BG */}
              <div className="absolute -top-4 -right-4 bg-gaming-card p-3 rounded-full border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                 <Quote className="text-gaming-accent w-6 h-6 fill-current" />
              </div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="relative mr-4">
                    <div className="absolute inset-0 bg-gaming-accent rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-full border-2 border-white/20 object-cover relative z-10"
                    />
                </div>
                <div>
                    <h4 className="text-white font-bold font-display text-xl">{item.name}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{item.location}</p>
                </div>
              </div>

              <div className="flex mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed relative z-10 mb-6 min-h-[80px]">"{item.quote}"</p>

              <div className="pt-4 border-t border-dashed border-white/10 flex justify-between items-center">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Won</span>
                <span className="text-gaming-success font-display font-bold text-xl drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">{item.winnings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;