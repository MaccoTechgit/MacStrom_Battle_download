import React, { memo, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageType } from '../types';
import { FileText, RefreshCcw, Gavel, ArrowRight, Shield } from 'lucide-react';

interface LegalPagesProps {
  page: PageType;
  onNavigate: (page: PageType) => void;
}

const LegalPages: React.FC<LegalPagesProps> = memo(({ page, onNavigate }) => {
  
  // Static data with placeholders (Content removed as requested)
  const legalData = useMemo(() => ({
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      date: 'Last Updated: February 2025',
      description: 'Terms and Conditions for Macstrom Battle.',
      content: (
        <p className="text-gray-400">Terms & Conditions content goes here...</p>
      )
    },
    refund: {
      title: 'Refund Policy',
      icon: RefreshCcw,
      date: 'Last Updated: February 2025',
      description: 'Refund and Cancellation Policy.',
      content: (
        <p className="text-gray-400">Refund Policy content goes here...</p>
      )
    },
    fairplay: {
      title: 'Fair Play Policy',
      icon: Gavel,
      date: 'Last Updated: February 2025',
      description: 'Zero Tolerance Policy against cheating.',
      content: (
        <p className="text-gray-400">Fair Play Policy content goes here...</p>
      )
    }
  }), []);

  // @ts-ignore
  const data = legalData[page];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (!data) return null;

  return (
    <>
      <Helmet>
        <title>{data.title} - Macstrom Battle</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <section className="pt-32 pb-20 min-h-screen bg-[#0f1014]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <header className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a1b21] border border-white/10 mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                  <data.icon className="w-8 h-8 text-blue-500" aria-hidden="true" />
              </div>
              <h1 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
                {data.title}
              </h1>
              <time className="text-gray-500 text-sm font-medium block">{data.date}</time>
          </header>

          {/* Content Card */}
          <article className="bg-[#15161c] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl mb-12">
              <div className="prose prose-invert max-w-none">
                  {data.content}
              </div>
          </article>
          
          {/* Navigation Links - Fixed Logic */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-gray-500 text-sm mb-6 font-medium">Read other policies:</p>
            <div className="flex flex-wrap justify-center gap-4">
                
                {/* Privacy Policy Link (Always Visible) */}
                <button 
                    onClick={() => onNavigate('privacy')}
                    className="px-5 py-2.5 bg-[#1a1b21] hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all flex items-center border border-white/5"
                >
                    <Shield className="w-4 h-4 mr-2 text-blue-500"/> Privacy Policy
                </button>

                {/* Terms Link (Hide if current page is Terms) */}
                {page !== 'terms' && (
                    <button 
                        onClick={() => onNavigate('terms')}
                        className="px-5 py-2.5 bg-[#1a1b21] hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all flex items-center border border-white/5"
                    >
                        <FileText className="w-4 h-4 mr-2 text-purple-500"/> Terms
                    </button>
                )}

                {/* Refund Link (Hide if current page is Refund) */}
                {page !== 'refund' && (
                    <button 
                        onClick={() => onNavigate('refund')}
                        className="px-5 py-2.5 bg-[#1a1b21] hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all flex items-center border border-white/5"
                    >
                        <RefreshCcw className="w-4 h-4 mr-2 text-green-500"/> Refund Policy
                    </button>
                )}

                {/* Fair Play Link (Hide if current page is Fair Play) */}
                {page !== 'fairplay' && (
                    <button 
                        onClick={() => onNavigate('fairplay')}
                        className="px-5 py-2.5 bg-[#1a1b21] hover:bg-white/10 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all flex items-center border border-white/5"
                    >
                        <Gavel className="w-4 h-4 mr-2 text-red-500"/> Fair Play
                    </button>
                )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
});

export default LegalPages;