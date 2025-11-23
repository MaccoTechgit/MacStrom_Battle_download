import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Mail, ArrowLeft } from 'lucide-react';

// --- SEO Schema for Privacy Policy ---
const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy - Macstrom Battle",
  "description": "Learn how Macstrom Battle collects, secures, and uses your personal data for a safe esports experience.",
  "url": "https://macstrombattle.com/privacy-policy",
  "datePublished": "2024-01-01",
  "dateModified": "2025-02-01",
  "publisher": {
    "@type": "Organization",
    "name": "Macstrom Battle",
    "logo": {
      "@type": "ImageObject",
      "url": "https://macstrombattle.com/logo.png"
    }
  }
};

const PrivacyPolicy: React.FC = memo(() => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Macstrom Battle | Safe & Secure Esports</title>
        <meta name="description" content="Read our Privacy Policy to understand how Macstrom Battle collects, uses, and protects your personal & financial data securely." />
        <meta name="keywords" content="macstrom battle privacy policy, esports app data security, user privacy, data protection" />
        <link rel="canonical" href="https://macstrombattle.com/privacy-policy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - Macstrom Battle" />
        <meta property="og:description" content="Your privacy is our priority. Read how we secure your data." />
        <meta property="og:type" content="article" />
        
        {/* Schema Injection */}
        <script type="application/ld+json">
          {JSON.stringify(privacySchema)}
        </script>
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-[#0f1014] relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1a1b21] to-[#111] border border-white/10 mb-8 shadow-2xl">
              <Shield className="w-10 h-10 text-blue-500" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
              <span>Last Updated:</span>
              <time dateTime="2025-02-01" className="text-blue-400">February 2025</time>
            </div>
          </header>

          {/* Content Content */}
          <article className="bg-[#15161c] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert max-w-none 
              prose-headings:font-sans prose-headings:font-bold prose-headings:text-white prose-headings:mt-10 prose-headings:mb-4 
              prose-p:text-gray-400 prose-p:leading-7 prose-p:mb-6
              prose-ul:my-6 prose-li:text-gray-400 prose-li:mb-2
              prose-strong:text-gray-200 prose-strong:font-semibold
              prose-a:text-blue-500 hover:prose-a:text-blue-400 prose-a:no-underline prose-a:transition-colors">
              
              <h3>1. Introduction</h3>
              <p>
                At Macstrom Battle ("we," "our," or "us"), we prioritize the privacy and security of our users ("you" or "your"). 
                This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you access our platform, 
                including our mobile application and website. By using our services, you consent to the practices described in this policy.
              </p>
              
              <h3>2. Information We Collect</h3>
              <p>We collect specific information to provide a seamless and secure gaming experience:</p>
              <ul className="list-disc pl-5">
                <li><strong>Personal Information:</strong> When you register, we collect details such as your name, email address, mobile number, and profile picture.</li>
                <li><strong>Financial Data:</strong> To process withdrawals and winnings, we may collect UPI IDs or Bank Account details. We do not store Credit/Debit card numbers; transactions are processed through secure payment gateways.</li>
                <li><strong>Device & Usage Data:</strong> To prevent fraud and ensure fair play, we automatically collect device identifiers (Device ID, IP Address), operating system type, and gameplay activity logs.</li>
              </ul>
              
              <h3>3. How We Use Your Information</h3>
              <p>Your data is essential for the following purposes:</p>
              <ul className="list-disc pl-5">
                <li>To create and manage your account and facilitate participation in esports tournaments.</li>
                <li>To verify your identity and process financial transactions (deposits and withdrawals).</li>
                <li>To enforce our Fair Play Policy and detect/prevent cheating, hacking, or unauthorized account access.</li>
                <li>To communicate with you regarding service updates, security alerts, and customer support inquiries.</li>
              </ul>
              
              <h3>4. Data Security</h3>
              <p>
                We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or destruction. 
                All data transmission is encrypted using Secure Socket Layer (SSL) technology. Access to sensitive data is restricted to authorized personnel only.
              </p>

              <h3>5. Disclosure of Information</h3>
              <p>
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information 
                not linked to any personal identification information regarding visitors and users with our business partners and advertisers.
                We may disclose personal information if required by law or in the good-faith belief that such action is necessary to comply with legal requirements.
              </p>

              <h3>6. Your Rights</h3>
              <p>
                You have the right to access the personal data we hold about you, request corrections, or request the deletion of your account. 
                Please note that deletion of account data is permanent and may result in the forfeiture of wallet balances if not withdrawn prior.
              </p>

              <h3>7. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us via email at: 
              </p>
              <div className="flex items-center gap-3 mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl w-fit">
                 <Mail className="w-5 h-5 text-blue-500" />
                 <a href="mailto:privacy@macstrombattle.com" className="font-bold text-blue-400">privacy@macstrombattle.com</a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
});

export default PrivacyPolicy;