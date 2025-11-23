import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Users, Crosshair, Wallet, User, Bell } from 'lucide-react';

const VisualShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const screenshots = [
    { title: "Tournament Lobby", type: "lobby" },
    { title: "Live Leaderboard", type: "leaderboard" },
    { title: "User Profile", type: "profile" },
    { title: "Wallet & Withdraw", type: "wallet" },
  ];

  const renderScreenContent = (type: string) => {
    switch (type) {
      case 'lobby':
        return (
          <div className="w-full h-full bg-[#0a0a0f] p-4 flex flex-col font-sans">
            {/* Mock Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-white font-bold text-lg">Matches</div>
              <div className="bg-gray-800 p-2 rounded-full"><Bell size={14} className="text-white" /></div>
            </div>
            {/* Game Filter */}
            <div className="flex gap-3 overflow-x-auto mb-6 pb-2 scrollbar-hide">
              <div className="bg-gaming-primary px-4 py-1 rounded-full text-xs text-white whitespace-nowrap">BGMI</div>
              <div className="bg-gray-800 px-4 py-1 rounded-full text-xs text-gray-400 whitespace-nowrap">Free Fire</div>
            </div>
            {/* Match Cards */}
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="bg-[#1a1a24] rounded-xl p-3 border border-white/5">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Map: Erangel</span>
                    <span>Squad</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-white font-bold text-sm">₹100 Prize Pool</div>
                    <div className="text-gaming-success text-xs">Entry: ₹10</div>
                  </div>
                  <div className="w-full bg-gaming-secondary py-1.5 rounded text-center text-white text-xs font-bold">JOIN MATCH</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'leaderboard':
        return (
           <div className="w-full h-full bg-[#0a0a0f] p-4 flex flex-col font-sans">
             <div className="text-center mb-6">
                <div className="text-gaming-accent font-bold text-xs uppercase tracking-widest mb-1">Weekly Top</div>
                <div className="text-white font-display font-bold text-xl">LEADERBOARD</div>
             </div>
             {/* Top 3 Podium */}
             <div className="flex justify-center items-end gap-2 mb-6">
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-500 mb-1 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" className="w-full h-full" /></div>
                    <div className="h-12 w-8 bg-gray-800 rounded-t-lg flex items-center justify-center text-xs font-bold text-white">2</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-gaming-primary border-2 border-yellow-400 mb-1 overflow-hidden relative shadow-[0_0_10px_rgba(250,204,21,0.5)]"><img src="https://i.pravatar.cc/100?img=3" className="w-full h-full" /></div>
                    <div className="h-16 w-10 bg-gray-800 rounded-t-lg flex items-center justify-center text-lg font-bold text-yellow-400">1</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-orange-700 mb-1 overflow-hidden"><img src="https://i.pravatar.cc/100?img=4" className="w-full h-full" /></div>
                    <div className="h-10 w-8 bg-gray-800 rounded-t-lg flex items-center justify-center text-xs font-bold text-white">3</div>
                </div>
             </div>
             {/* List */}
             <div className="space-y-2">
                 {[4,5,6].map(rank => (
                    <div key={rank} className="bg-[#16161d] p-2 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500 text-xs font-bold">#{rank}</span>
                            <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                            <span className="text-gray-300 text-xs">Player{rank}</span>
                        </div>
                        <span className="text-gaming-success text-xs font-bold">₹500</span>
                    </div>
                 ))}
             </div>
           </div>
        );
      case 'profile':
        return (
            <div className="w-full h-full bg-[#0a0a0f] flex flex-col font-sans relative">
                {/* Cover */}
                <div className="h-24 bg-gradient-to-r from-gaming-primary to-gaming-accent"></div>
                <div className="px-4 -mt-8 mb-4">
                     <div className="w-20 h-20 rounded-full border-4 border-[#0a0a0f] bg-gray-800 overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=11" className="w-full h-full" />
                     </div>
                     <div className="mt-2">
                         <h3 className="text-white font-bold text-lg">SniperKing</h3>
                         <p className="text-gray-400 text-xs">UID: 8374920</p>
                     </div>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 px-4">
                    <div className="bg-[#16161d] p-3 rounded-xl">
                        <p className="text-gray-500 text-[10px] uppercase">Matches</p>
                        <p className="text-white font-bold text-lg">142</p>
                    </div>
                    <div className="bg-[#16161d] p-3 rounded-xl">
                        <p className="text-gray-500 text-[10px] uppercase">Won</p>
                        <p className="text-green-500 font-bold text-lg">₹12.5k</p>
                    </div>
                </div>
            </div>
        );
      default: // Wallet
        return (
            <div className="w-full h-full bg-[#0a0a0f] p-4 flex flex-col font-sans">
                <div className="text-white font-bold text-lg mb-6">My Wallet</div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-white/10 mb-6 shadow-lg relative overflow-hidden">
                     <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-gaming-success/10 rounded-full blur-xl"></div>
                     <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Total Balance</p>
                     <p className="text-white font-display font-bold text-3xl">₹ 2,450.00</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gaming-success/10 border border-gaming-success/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                         <div className="bg-gaming-success/20 p-2 rounded-full"><Wallet size={16} className="text-gaming-success"/></div>
                         <span className="text-white text-xs font-bold">Withdraw</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                         <div className="bg-white/10 p-2 rounded-full"><Crosshair size={16} className="text-white"/></div>
                         <span className="text-white text-xs font-bold">History</span>
                    </div>
                </div>
            </div>
        );
    }
  }

  return (
    <section id="tournaments" className="py-24 bg-black relative border-y border-white/5 overflow-hidden">
        {/* Simple Gradient background instead of heavy noise overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-bg to-black pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gaming-primary to-transparent"></div>

      {/* Max Width Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                STUNNING <span className="text-gaming-secondary">INTERFACE</span>
            </h2>
            <p className="text-gray-400">Designed for speed, ease, and victory.</p>
          </div>
          <div className="flex space-x-4">
            <button 
                onClick={() => scroll('left')}
                className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-gaming-secondary hover:text-gaming-secondary transition-all"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={() => scroll('right')}
                className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-gaming-secondary hover:text-gaming-secondary transition-all"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide px-4 pt-4"
        >
            {screenshots.map((screen, index) => (
                <div key={index} className="flex-none w-[280px] snap-center group perspective-1000">
                    <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-[#1a1a20] bg-[#0a0a0f] shadow-[0_10px_40px_rgba(0,0,0,0.5)] aspect-[9/19] transform transition-all duration-500 group-hover:-translate-y-4">
                        {/* Phone Notch & Details */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a20] z-30 flex justify-center rounded-b-xl mx-16"></div>
                        
                        {/* Actual Screen Content */}
                        <div className="w-full h-full overflow-hidden">
                            {renderScreenContent(screen.type)}
                        </div>

                        {/* Glass Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
                    </div>
                    <p className="text-center mt-6 text-gray-500 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">{screen.title}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;