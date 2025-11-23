import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Quote, Trophy } from 'lucide-react';

// --- Static Data (Moved outside to prevent re-creation) ---
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai, India",
    quote: "I never thought I could earn from gaming. This app changed my life. Instant withdrawals are the best part!",
    winnings: "₹1.5 Lakhs",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Delhi, India",
    quote: "The tournaments are very well organized. No lag, fair play, and great community support.",
    winnings: "₹85,000",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Bangalore, India",
    quote: "Best BGMI tournament app in India. I play daily scrims and earn decent pocket money.",
    winnings: "₹2.1 Lakhs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5
  }
];

// --- SEO: Review Schema for Google Rich Results ---
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Esports Arena App",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  },
  "review": TESTIMONIALS_DATA.map(item => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": item.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": item.name
    },
    "reviewBody": item.quote
  }))
};

const Testimonials: React.FC = memo(() => {
  return (
    <>
      <Helmet>
        {/* Inject JSON-LD Schema for Reviews */}
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      <section id="winners" className="py-24 bg-[#0f1014] relative overflow-hidden">
        {/* Optimized CSS Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-2 tracking-tight">
                TOP <span className="text-blue-500">PLAYERS</span>
              </h2>
              <p className="text-gray-400 text-lg">See who is dominating the leaderboards today.</p>
            </div>
            
            <div className="text-left md:text-right bg-white/5 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-sm">
              <p className="text-green-400 font-bold text-2xl font-sans flex items-center justify-end gap-2">
                <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" /> 
                ₹10,00,000+
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mt-1">Total Winnings Distributed</p>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((item) => (
              <article 
                key={item.id} 
                className="bg-[#15161c] p-8 rounded-3xl border border-white/5 relative group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col h-full"
              >
                {/* Quote Icon Badge */}
                <div className="absolute -top-4 -right-4 bg-[#1a1b21] p-3 rounded-full border border-white/10 shadow-lg group-hover:scale-110 transition-transform z-20">
                   <Quote className="text-blue-500 w-6 h-6 fill-current" aria-hidden="true" />
                </div>
                
                {/* User Profile */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="relative mr-4 shrink-0">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    {/* Image Optimization: Explicit width/height prevents Layout Shift */}
                    <img 
                      src={item.image} 
                      alt={`Profile picture of ${item.name}`} 
                      width="64"
                      height="64"
                      loading="lazy"
                      className="w-16 h-16 rounded-full border-2 border-white/10 object-cover relative z-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold font-sans text-xl leading-tight">{item.name}</h3>
                    <cite className="text-gray-500 text-xs uppercase tracking-wider font-semibold not-italic block mt-1">
                        {item.location}
                    </cite>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex mb-4 space-x-1" aria-label={`Rated ${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                  ))}
                </div>

                {/* Review Content */}
                <blockquote className="text-gray-300 leading-relaxed relative z-10 mb-6 min-h-[80px] grow">
                  "{item.quote}"
                </blockquote>

                {/* Winnings Footer */}
                <div className="pt-4 border-t border-dashed border-white/10 flex justify-between items-center mt-auto">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Won</span>
                  <span className="text-green-400 font-sans font-bold text-xl drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]">
                    {item.winnings}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default Testimonials;