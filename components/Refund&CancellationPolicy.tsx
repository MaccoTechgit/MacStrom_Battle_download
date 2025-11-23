import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCcw, AlertCircle, CheckCircle, HelpCircle, ArrowRight, CreditCard, Banknote } from 'lucide-react';

// --- SEO Schema for Refund Page ---
const refundSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Refund & Cancellation Policy - Macstrom Battle",
  "description": "Understand Macstrom Battle's refund rules for tournament cancellations, failed transactions, and withdrawal policies.",
  "url": "https://macstrombattle.com/refund-policy",
  "datePublished": "2024-01-01",
  "dateModified": "2025-02-01",
  "publisher": {
    "@type": "Organization",
    "name": "Macstrom Battle"
  }
};

const RefundPolicy: React.FC = memo(() => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy - Macstrom Battle | Money Back Rules</title>
        <meta name="description" content="Check our transparent Refund Policy regarding failed deposits, tournament cancellations, and withdrawal issues on Macstrom Battle." />
        <meta name="keywords" content="macstrom battle refund, esports tournament cancellation, withdrawal issues, failed transaction refund, money back policy" />
        <link rel="canonical" href="https://macstrombattle.com/refund-policy" />
        
        <meta property="og:title" content="Refund & Cancellation Policy - Macstrom Battle" />
        <meta property="og:description" content="Clear rules on refunds for failed payments and cancelled matches." />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify(refundSchema)}
        </script>
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-[#0f1014] relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-green-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1a1b21] to-[#111] border border-white/10 mb-8 shadow-2xl ring-1 ring-white/5">
              <RefreshCcw className="w-10 h-10 text-green-500" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
              Refund & Cancellation
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
              <span>Last Updated:</span>
              <time dateTime="2025-02-01" className="text-green-400">February 2025</time>
            </div>
          </header>

          {/* Content Article */}
          <article className="bg-[#15161c] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert max-w-none 
              prose-headings:font-sans prose-headings:font-bold prose-headings:text-white prose-headings:mt-12 prose-headings:mb-4 prose-headings:flex prose-headings:items-center prose-headings:gap-3
              prose-p:text-gray-400 prose-p:leading-7 prose-p:mb-6
              prose-ul:my-6 prose-li:text-gray-400 prose-li:mb-2 prose-li:marker:text-green-500
              prose-strong:text-gray-200 prose-strong:font-semibold">
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-8 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-green-400 font-bold m-0 mb-1">Customer Assurance</h4>
                  <p className="text-gray-400 text-sm m-0">
                    Macstrom Battle is committed to 100% transparency. If a service is not delivered, your money is safe and will be refunded to your wallet or source account.
                  </p>
                </div>
              </div>

              <h3 id="cancellations">
                <AlertCircle className="w-6 h-6 text-green-500" /> 
                1. Tournament Cancellations
              </h3>
              <p>
                In the rare event that a tournament or match is cancelled by the organizers (due to server maintenance, insufficient participants, or technical glitches):
              </p>
              <ul className="list-disc pl-5">
                <li><strong>Instant Refund:</strong> 100% of the entry fee will be automatically refunded to your Macstrom Battle Wallet immediately.</li>
                <li><strong>Notification:</strong> Users will be notified via app notification or email regarding the cancellation.</li>
              </ul>
              
              <h3 id="user-withdrawals">
                <ArrowRight className="w-6 h-6 text-green-500" /> 
                2. User Cancellations & Match Exit
              </h3>
              <p>We understand plans change. Here is how you can cancel your participation:</p>
              <ul className="list-disc pl-5">
                <li><strong>Before Registration Closes:</strong> You can leave a match anytime before the registration window closes. The entry fee will be instantly credited back to your wallet.</li>
                <li><strong>After Registration Closes:</strong> Once the match slots are locked or the match has started, no refunds can be processed as the prize pool is already distributed.</li>
              </ul>
              
              <h3 id="failed-transactions">
                <CreditCard className="w-6 h-6 text-green-500" /> 
                3. Failed Deposit Transactions
              </h3>
              <p>
                Sometimes, money may be deducted from your bank account but not reflect in the app due to banking network issues. In such cases:
              </p>
              <ul className="list-disc pl-5">
                <li><strong>Auto-Reversal:</strong> The amount is usually auto-refunded by the payment gateway to your source bank account within <strong>5-7 working days</strong>.</li>
                <li><strong>Support:</strong> If the refund is delayed beyond 7 days, please contact support with your Transaction ID.</li>
              </ul>

              <h3 id="withdrawals">
                <Banknote className="w-6 h-6 text-green-500" /> 
                4. Withdrawal Policy
              </h3>
              <p>
                Withdrawal requests are processed instantly via UPI or IMPS. However:
              </p>
              <ul className="list-disc pl-5">
                <li>Once a withdrawal request is initiated and processed, it cannot be cancelled or reversed.</li>
                <li>Macstrom Battle is not responsible for funds transferred to an incorrect UPI ID or Bank Account number provided by the user. Please verify details before withdrawing.</li>
              </ul>

              <h3 id="support">
                <HelpCircle className="w-6 h-6 text-green-500" /> 
                5. Contact for Refunds
              </h3>
              <p>
                For any refund-related queries that are not resolved automatically, please reach out to us:
              </p>
              <div className="flex items-center gap-3 mt-6 p-4 bg-[#1a1b21] border border-white/10 rounded-xl w-fit">
                 <span className="text-gray-400 text-sm font-medium">Email Support:</span>
                 <a href="mailto:help@macstrombattle.com" className="font-bold text-green-400 hover:underline">help@macstrombattle.com</a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
});

export default RefundPolicy;