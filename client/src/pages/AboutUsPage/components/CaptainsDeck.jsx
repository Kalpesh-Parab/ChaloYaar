import React from 'react';
import { ShieldCheck, Music, MapPin } from 'lucide-react';

export default function CaptainsDeck() {
  const captains = [
    {
      name: "Captain Aryan",
      role: "High-Altitude Lead & Stargazer",
      vibe: "Can pitch an alpine tent in 3 minutes, certified in first-aid, makes killer campfire adrak chai.",
      tripsDone: "18+ Chakrata & Spiti Batches",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Captain Riya",
      role: "Solo-Travel Facilitator & Trail Guide",
      vibe: "Ensures every solo female backpacker feels 100% secure. Curates the legendary batch roadtrip playlist.",
      tripsDone: "14+ Himachal & Uttarakhand Trails",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-coal-950 text-white relative border-y border-coal-800">
      <div className="site-container">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="font-calligraphy text-brand-yellow text-3xl">Humare Captains</p>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-white">
            Not Tour Guides. Your Trip Buddies. 
          </h2>
          <p className="font-sans text-white/70 text-sm sm:text-base">
            Certified safety leads, storytellers, and facilitators who handle logistics so you just show up and soak in the mountains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {captains.map((cap, i) => (
            <div 
              key={i}
              className="p-6 rounded-card bg-coal-900 border border-coal-700/80 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:border-brand-yellow/50 transition-all"
            >
              <img
                src={cap.image}
                alt={cap.name}
                className="w-28 h-28 rounded-2xl object-cover border-2 border-brand-yellow shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <div>
                  <h3 className="font-sans font-bold text-xl text-white">{cap.name}</h3>
                  <span className="text-xs font-semibold text-brand-yellow block">{cap.role}</span>
                </div>
                <p className="font-sans text-white/80 text-xs sm:text-sm leading-relaxed">
                  {cap.vibe}
                </p>
                <div className="pt-2 flex items-center justify-center sm:justify-start gap-1 text-[11px] text-sand-400 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>{cap.tripsDone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}