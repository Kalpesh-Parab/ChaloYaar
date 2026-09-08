import React from 'react';
import { Sparkles, Ban, Heart, Zap } from 'lucide-react';

export default function CommunityRules() {
  const rules = [
    {
      title: "No Clashing Egos",
      desc: "Leave corporate titles and LinkedIn bios in the city. In the mountains, we are all just equal folks around a fire."
    },
    {
      title: "Zero-Tolerance Safety",
      desc: "Creepy behavior, harassment, or non-consensual drama equals an immediate offboarding with zero refund. We keep it strictly safe."
    },
    {
      title: "Respect the Hills",
      desc: "No littering, no plastic trash on trails. Jo laye ho, wapas leke aao. Pahad saaf rakho."
    },
    {
      title: "Embrace the Unfiltered",
      desc: "Network cut off ho jaye toh tension nahi lena. Unfiltered conversations beat scrolling reels any day."
    }
  ];

  return (
    <section className="py-20 bg-brand-yellow text-coal-950">
      <div className="site-container">
        
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <p className="font-calligraphy text-coal-950 text-3xl">The Vibe Code</p>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-coal-950">
            Rules of the Campfire 
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {rules.map((rule, idx) => (
            <div key={idx} className="p-6 rounded-card yellow-card space-y-2">
              <span className="font-sans font-bold text-xs uppercase tracking-wider text-coal-600 block">
                Rule #0{idx + 1}
              </span>
              <h3 className="font-sans font-extrabold text-lg text-coal-950">
                {rule.title}
              </h3>
              <p className="font-sans text-sm text-coal-700 leading-relaxed">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}