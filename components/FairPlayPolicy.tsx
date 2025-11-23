import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Gavel, ShieldAlert, Users, Bug, Ban, AlertTriangle, MessageSquare } from 'lucide-react';

// --- SEO Schema for Fair Play ---
const fairPlaySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Fair Play Policy - Macstrom Battle",
  "description": "Macstrom Battle's Zero Tolerance Policy against hacking, teaming, cheating, and account sharing in esports tournaments.",
  "url": "https://macstrombattle.com/fair-play-policy",
  "datePublished": "2024-01-01",
  "dateModified": "2025-02-01",
  "publisher": {
    "@type": "Organization",
    "name": "Macstrom Battle"
  }
};

const FairPlayPolicy: React.FC = memo(() => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fair Play Policy - Macstrom Battle | Zero Tolerance to Hacking</title>
        <meta name="description" content="Read Macstrom Battle's Fair Play Policy. Strict rules against aimbots, wallhacks, teaming, and account sharing. Play fair or face a permanent ban." />
        <meta name="keywords" content="macstrom battle fair play, esports anti-cheat rules, bgmi hacking ban, teaming penalty, fair gaming policy" />
        <link rel="canonical" href="https://macstrombattle.com/fair-play-policy" />
        
        <meta property="og:title" content="Fair Play Policy - Macstrom Battle" />
        <meta property="og:description" content="Zero Tolerance for Cheaters. See our rules and ban policies." />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify(fairPlaySchema)}
        </script>
      </Helmet>

      <main className="pt-32 pb-24 min-h-screen bg-[#0f1014] relative">
        {/* Red Background for "Strict/Alert" Vibe */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1a1b21] to-[#111] border border-white/10 mb-8 shadow-2xl ring-1 ring-white/5">
              <Gavel className="w-10 h-10 text-red-500" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
              Fair Play Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
              <span>Last Updated:</span>
              <time dateTime="2025-02-01" className="text-red-400">February 2025</time>
            </div>
          </header>

          {/* Content Article */}
          <article className="bg-[#15161c] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="prose prose-invert max-w-none 
              prose-headings:font-sans prose-headings:font-bold prose-headings:text-white prose-headings:mt-12 prose-headings:mb-4 prose-headings:flex prose-headings:items-center prose-headings:gap-3
              prose-p:text-gray-400 prose-p:leading-7 prose-p:mb-6
              prose-ul:my-6 prose-li:text-gray-400 prose-li:mb-2 prose-li:marker:text-red-500
              prose-strong:text-gray-200 prose-strong:font-semibold">
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8 flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-red-400 font-bold m-0 mb-1">Zero Tolerance Warning</h4>
                  <p className="text-gray-400 text-sm m-0">
                    Any user found violating these policies will face an <strong>immediate and permanent account ban</strong> without prior warning. All wallet balances will be frozen.
                  </p>
                </div>
              </div>

              <h3 id="hacking">
                <ShieldAlert className="w-6 h-6 text-red-500" /> 
                1. Hacking & Third-Party Tools
              </h3>
              <p>
                The use of any unauthorized third-party software to modify the game client is strictly prohibited. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-5">
                <li><strong>Wallhacks & Aimbots:</strong> Tools that allow seeing through walls or auto-aiming.</li>
                <li><strong>Speed Hacks & No-Recoil:</strong> Scripts that alter player movement or weapon physics.</li>
                <li><strong>GFX Tools:</strong> Unauthorized tools that modify game textures (e.g., removing grass/trees) to gain a visual advantage.</li>
              </ul>
              
              <h3 id="teaming">
                <Users className="w-6 h-6 text-red-500" /> 
                2. Teaming & Collusion
              </h3>
              <p>
                "Teaming" occurs when players who are not in the same squad coordinate to fight together or avoid killing each other.
              </p>
              <ul className="list-disc pl-5">
                <li>Collaborating with enemies in Solo/Duo/Squad matches.</li>
                <li>Sharing loot or vehicle rides with opponents.</li>
                <li>Intentionally dying to a specific player ("feeding") to boost their stats.</li>
              </ul>
              
              <h3 id="account-sharing">
                <Ban className="w-6 h-6 text-red-500" /> 
                3. Account Sharing & Smurfing
              </h3>
              <p>
                Your Macstrom Battle account is personal. Sharing credentials leads to security risks and unfair matchmaking.
              </p>
              <ul className="list-disc pl-5">
                <li><strong>Account Sharing:</strong> Letting others play on your account to rank up is prohibited.</li>
                <li><strong>Multiple Accounts:</strong> Creating multiple IDs to exploit referral bonuses or bypass bans is not allowed.</li>
              </ul>

              <h3 id="bugs">
                <Bug className="w-6 h-6 text-red-500" /> 
                4. Bug Exploitation
              </h3>
              <p>
                Intentionally triggering in-game glitches (e.g., hiding inside rocks, going under the map) to kill enemies or survive is a punishable offense. Users must report bugs instead of abusing them.
              </p>

              <h3 id="reporting">
                <MessageSquare className="w-6 h-6 text-red-500" /> 
                5. Reporting a Cheater
              </h3>
              <p>
                If you spectate a hacker in our tournament, please record the gameplay (Spectator View) and report it to us immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                 <div className="p-4 bg-[#1a1b21] border border-white/10 rounded-xl flex-1">
                    <span className="text-gray-400 text-sm font-medium block mb-1">Required Proof:</span>
                    <span className="text-white font-bold text-sm">Video Recording (Screen Record)</span>
                 </div>
                 <div className="p-4 bg-[#1a1b21] border border-white/10 rounded-xl flex-1">
                    <span className="text-gray-400 text-sm font-medium block mb-1">Send Report To:</span>
                    <a href="mailto:report@macstrombattle.com" className="text-red-400 font-bold text-sm hover:underline">report@macstrombattle.com</a>
                 </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
});

export default FairPlayPolicy;