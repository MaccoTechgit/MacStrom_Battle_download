import React from 'react';
import { PageType } from '../types';
import { Shield, FileText, RefreshCcw, Gavel } from 'lucide-react';

interface LegalPagesProps {
  page: PageType;
}

const LegalPages: React.FC<LegalPagesProps> = ({ page }) => {
  const getContent = () => {
    switch (page) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: Shield,
          date: 'Last Updated: February 2025',
          content: (
            <>
              <h3>1. Introduction</h3>
              <p>
                At Macstrom Battle ("we," "our," or "us"), we prioritize the privacy and security of our users ("you" or "your"). 
                This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you access our platform, 
                including our mobile application and website. By using our services, you consent to the practices described in this policy.
              </p>
              
              <h3>2. Information We Collect</h3>
              <p>We collect specific information to provide a seamless and secure gaming experience:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Personal Information:</strong> When you register, we collect details such as your name, email address, mobile number, and profile picture.</li>
                <li><strong>Financial Data:</strong> To process withdrawals and winnings, we may collect UPI IDs or Bank Account details. We do not store Credit/Debit card numbers; transactions are processed through secure payment gateways.</li>
                <li><strong>Device & Usage Data:</strong> To prevent fraud and ensure fair play, we automatically collect device identifiers (Device ID, IP Address), operating system type, and gameplay activity logs.</li>
              </ul>
              
              <h3>3. How We Use Your Information</h3>
              <p>Your data is essential for the following purposes:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
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
                <a href="mailto:privacy@macstrombattle.com" className="text-gaming-primary hover:underline ml-1 font-bold">privacy@macstrombattle.com</a>
              </p>
            </>
          )
        };
      case 'terms':
        return {
          title: 'Terms & Conditions',
          icon: FileText,
          date: 'Last Updated: February 2025',
          content: (
            <>
              <h3>1. Acceptance of Terms</h3>
              <p>By downloading, accessing, or using Macstrom Battle, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
              
              <h3>2. Eligibility</h3>
              <p>You must be at least 18 years of age to participate in paid contests. Users from states where fantasy gaming/esports for money is prohibited (e.g., Assam, Odisha, Telangana, Nagaland, Sikkim, Andhra Pradesh) must not participate in paid leagues.</p>
              
              <h3>3. User Accounts</h3>
              <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. Macstrom Battle reserves the right to suspend accounts involved in suspicious activity.</p>
              
              <h3>4. Prohibited Conduct</h3>
              <p>Users are prohibited from:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Using unauthorized third-party software (hacks, mods, cheats).</li>
                  <li>Harassing, abusing, or threatening other players or support staff.</li>
                  <li>Creating multiple accounts to manipulate the platform.</li>
              </ul>

              <h3>5. Limitation of Liability</h3>
              <p>Macstrom Battle is not liable for any indirect, incidental, or consequential damages arising from your use of the service, including loss of data or funds due to user error or network issues.</p>
            </>
          )
        };
      case 'refund':
        return {
          title: 'Refund & Cancellation Policy',
          icon: RefreshCcw,
          date: 'Last Updated: February 2025',
          content: (
            <>
              <h3>1. Tournament Cancellations</h3>
              <p>If a tournament is cancelled by the organizers for any reason (e.g., server issues, insufficient participants), the complete entry fee will be refunded to the user's wallet immediately.</p>
              
              <h3>2. User Cancellations</h3>
              <p>Users can leave a match/tournament before the registration window closes. In such cases, the entry fee is automatically refunded to the wallet. No refunds are processed after the match registration closes.</p>
              
              <h3>3. Failed Transactions</h3>
              <p>If a deposit transaction fails where money is deducted from your bank account but not credited to your Macstrom Battle wallet, the amount is usually auto-refunded by the payment gateway within 5-7 working days.</p>
              
              <h3>4. Withdrawals</h3>
              <p>Once a withdrawal request is processed, it cannot be cancelled. We are not responsible for funds transferred to incorrect bank accounts/UPI IDs provided by the user.</p>
            </>
          )
        };
      case 'fairplay':
        return {
          title: 'Fair Play Policy',
          icon: Gavel,
          date: 'Last Updated: February 2025',
          content: (
            <>
              <h3>1. Zero Tolerance for Cheating</h3>
              <p>Macstrom Battle maintains a strict zero-tolerance policy towards cheating. Using aimbots, wallhacks, speed hacks, or any other modification to the game client is strictly prohibited. Violators will face a permanent ban and forfeiture of all wallet funds.</p>
              
              <h3>2. Teaming</h3>
              <p>Collaborating with players not in your squad ("Teaming") in solo or squad matches to gain an unfair advantage is a violation of fair play. We use manual review and automated detection to identify such behavior.</p>
              
              <h3>3. Account Sharing</h3>
              <p>Sharing your account with others or playing on someone else's account to boost their rank or winnings is prohibited.</p>
              
              <h3>4. Bug Exploitation</h3>
              <p>Intentionally exploiting in-game bugs or platform glitches for financial gain is an offense. Users are expected to report bugs to support immediately.</p>
            </>
          )
        };
      default:
        return null;
    }
  };

  const data = getContent();
  if (!data) return null;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gaming-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gaming-card border border-white/10 mb-6 shadow-lg">
                <data.icon className="w-8 h-8 text-gaming-secondary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{data.title}</h1>
            <p className="text-gray-500 text-sm font-medium">{data.date}</p>
        </div>

        {/* Content Card */}
        <div className="bg-[#111116] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-400 prose-p:leading-relaxed prose-li:text-gray-400 prose-a:text-gaming-primary hover:prose-a:text-gaming-accent transition-colors">
                {data.content}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;