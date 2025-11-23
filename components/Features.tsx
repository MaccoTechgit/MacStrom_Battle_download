import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gaming-bg relative overflow-hidden">
        {/* Decorative - Optimized: Static blurs instead of moving animations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-gaming-primary/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-gaming-secondary/10 rounded-full blur-3xl opacity-50"></div>
        </div>

      {/* Standardized Container with Max Width */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            WHY PLAY ON <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-secondary to-gaming-accent">MACSTROM?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gaming-primary to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the next level of competitive gaming with features designed for pros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gaming-card border border-white/5 p-8 rounded-2xl hover:border-gaming-primary/50 hover:bg-gaming-cardhover transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 bg-gaming-bg rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-gaming-primary/50 group-hover:shadow-[0_0_20px_rgba(109,40,217,0.3)] transition-all duration-300 relative z-10">
                <feature.icon className="w-8 h-8 text-gaming-secondary group-hover:text-gaming-primary transition-colors group-hover:animate-bounce" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;