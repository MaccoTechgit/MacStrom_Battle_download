import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ShieldAlert, Users, Gavel, AlertTriangle, CheckCircle } from 'lucide-react';

// --- SEO Schema for Terms Page ---
const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms & Conditions - Macstrom Battle",
  "description": "Read the Terms and Conditions for using Macstrom Battle platform, eligibility criteria, and user responsibilities.",
  "url": "https://macstrombattle.com/terms-and-conditions",
  "datePublished": "2024-01-01",
  "dateModified": "2025-02-01",
  "publisher": {
    "@type": "Organization",
    "name": "Macstrom Battle"
  }
};

const TermsConditions: React.FC = memo(() => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Macstrom Battle | Usage Rules</title>
        <meta name="description" content="Review the Terms & Conditions for Macstrom Battle. Understand eligibility, prohibited conduct, and platform rules before playing." />
        <meta name="keywords" content="macstrom battle terms, esports app rules, fantasy gaming laws india, user agreement" />
        <link rel="canonical" href="https://macstrombattle.com/terms-and-conditions" />
        
        <meta property="og:title" content="Terms & Conditions - Macstrom Battle" />
        <meta property="og:description" content="Official Terms regarding usage, payments, and fair play on Macstrom Battle." />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify(termsSchema)}
        </script>
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-[#0f1014] relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1a1b21] to-[#111] border border-white/10 mb-8 shadow-2xl ring-1 ring-white/5">
              <FileText className="w-10 h-10 text-purple-500" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
              Terms & Conditions
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
              <span>Last Updated:</span>
              <time dateTime="2025-02-01" className="text-purple-400">February 2025</time>
            </div>
          </header>

          {/* Content Article */}
          <article className="bg-[#15161c] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert max-w-none 
              prose-headings:font-sans prose-headings:font-bold prose-headings:text-white prose-headings:mt-12 prose-headings:mb-4 prose-headings:flex prose-headings:items-center prose-headings:gap-3
              prose-p:text-gray-400 prose-p:leading-7 prose-p:mb-6
              prose-ul:my-6 prose-li:text-gray-400 prose-li:mb-2 prose-li:marker:text-purple-500
              prose-strong:text-gray-200 prose-strong:font-semibold">
              
              <h3 id="acceptance">
                <CheckCircle className="w-6 h-6 text-purple-500" /> 
                1. Acceptance of Terms
              </h3>
              <p>
                By downloading, accessing, or using Macstrom Battle ("the Platform"), you explicitly agree to be bound by these Terms and Conditions. 
                If you do not agree to any part of these terms, you must not use our services. These terms constitute a legally binding agreement between you and Macstrom Battle.
              </p>
              
              <h3 id="eligibility">
                <Users className="w-6 h-6 text-purple-500" /> 
                2. Eligibility & Restrictions
              </h3>
              <p>To participate in paid contests and tournaments on Macstrom Battle, you must strictly adhere to the following:</p>
              <ul className="list-disc pl-5">
                <li><strong>Age Requirement:</strong> You must be at least 18 years of age.</li>
                <li><strong>Geographical Restrictions:</strong> Users residing in states where online fantasy gaming/esports with real money is prohibited (Assam, Odisha, Telangana, Nagaland, Sikkim, and Andhra Pradesh) are strictly barred from participating in paid leagues.</li>
                <li><strong>Account Verification:</strong> We reserve the right to request KYC documents (Aadhaar, PAN) to verify eligibility before processing withdrawals.</li>
              </ul>
              
              <h3 id="account">
                <ShieldAlert className="w-6 h-6 text-purple-500" /> 
                3. User Account Security
              </h3>
              <p>
                You are solely responsible for maintaining the confidentiality of your login credentials (password, OTPs). 
                Macstrom Battle will not be liable for any loss arising from unauthorized access to your account due to your failure to secure your device or credentials.
                You agree to notify us immediately of any suspicious activity.
              </p>
              
              <h3 id="prohibited">
                <AlertTriangle className="w-6 h-6 text-purple-500" /> 
                4. Prohibited Conduct
              </h3>
              <p>The following actions will result in an immediate and permanent ban from the platform, along with forfeiture of all wallet funds:</p>
              <ul className="list-disc pl-5">
                <li>Using third-party software, hacks, mods, aimbots, or scripts to gain an unfair advantage.</li>
                <li>"Teaming" or colluding with other players in solo/squad matches.</li>
                <li>Abusing, harassing, or threatening other players or support staff.</li>
                <li>Creating multiple accounts to bypass restrictions or exploit referral systems.</li>
              </ul>

              <h3 id="liability">
                <Gavel className="w-6 h-6 text-purple-500" /> 
                5. Limitation of Liability
              </h3>
              <p>
                Macstrom Battle is provided on an "as is" basis. We are not liable for any indirect, incidental, or consequential damages arising from:
              </p>
              <ul className="list-disc pl-5">
                <li>Server downtime, game glitches, or network connectivity issues.</li>
                <li>Loss of data or funds due to user error (e.g., entering wrong UPI ID).</li>
                <li>Actions taken by third-party game developers (e.g., BGMI/Krafton bans).</li>
              </ul>

              <p className="mt-8 text-sm text-gray-500 border-t border-white/10 pt-6">
                We reserve the right to modify these terms at any time. Continued use of the app signifies your acceptance of updated terms.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
});

export default TermsConditions;