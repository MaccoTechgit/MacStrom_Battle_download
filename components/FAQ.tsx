import React, { useState, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// --- Static Data (Self-contained for speed) ---
const FAQS_DATA = [
  {
    id: 1,
    question: "Is it safe to add money to Macstrom Battle?",
    answer: "Yes, absolutely. We use 100% secure payment gateways (Razorpay, Paytm, UPI) ensuring your financial data is encrypted and completely safe."
  },
  {
    id: 2,
    question: "How do I withdraw my winnings?",
    answer: "You can withdraw your winnings instantly to your UPI ID (Google Pay, PhonePe, Paytm) or directly to your Bank Account. The minimum withdrawal amount is just ₹50."
  },
  {
    id: 3,
    question: "Is playing esports for money legal in India?",
    answer: "Yes, Macstrom Battle offers 'Games of Skill' which are protected under Indian laws. However, residents of Assam, Odisha, Telangana, Nagaland, Sikkim, and Andhra Pradesh cannot participate in paid leagues due to state regulations."
  },
  {
    id: 4,
    question: "What happens if a tournament gets cancelled?",
    answer: "If a match or tournament is cancelled by us for any reason, your full entry fee is instantly refunded to your Macstrom Battle wallet."
  },
  {
    id: 5,
    question: "How can I contact customer support?",
    answer: "We offer 24/7 support! You can reach out to us via the in-app 'Help & Support' section, chat with us on WhatsApp, or email us at help@macstrombattle.com."
  }
];

// --- SEO: FAQPage Schema for Google Rich Results ---
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS_DATA.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQ: React.FC = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        {/* Inject Schema for Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section id="faq" className="py-24 bg-[#111116] relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-4 border border-white/10">
                <HelpCircle className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              Everything you need to know about playing and winning.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={faq.id} 
                  className={`border transition-all duration-300 rounded-xl overflow-hidden ${
                    isOpen ? 'border-blue-500/50 bg-[#1a1b21]' : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                      {faq.question}
                    </span>
                    <div className={`ml-4 p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-500 rotate-180' : 'bg-white/10'}`}>
                        {isOpen ? (
                        <Minus className="w-5 h-5 text-white" aria-hidden="true" />
                        ) : (
                        <Plus className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        )}
                    </div>
                  </button>
                  
                  <div 
                    id={`faq-answer-${faq.id}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default FAQ;