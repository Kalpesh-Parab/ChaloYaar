import React from 'react';
import { Compass, Flame, Heart, Coffee } from 'lucide-react';

export default function FoundersManifesto() {
  return (
    <section className="py-20 bg-brand-yellow text-coal-950 relative">
      <div className="site-container">
        
        {/* Story Intro */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-coal-950 text-brand-yellow text-xs font-sans font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Asli Kahaani
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-coal-950 leading-tight">
            "Bhai agle mahine chalte hain" se pak gaye the hum.
          </h1>

          <p className="font-calligraphy text-3xl sm:text-4xl text-coal-950">
            Toh humne socha, plan cancel nahi hoga — direct gaadi niklegi! 
          </p>

          <div className="pt-4 space-y-5 text-coal-900 font-sans text-base sm:text-lg leading-relaxed border-t border-coal-950/15">
            <p>
              On <strong>31st August</strong>, Chalo Yaar started with one clear agenda: eliminate the painful drama of travel planning. Mass-market tour agencies treat people like cargo—packing 50 tourists into a bus, rushing 15-minute photo stops, and serving stale buffet food.
            </p>
            <p>
              We wanted raw campfires under unpolluted night skies. We wanted spontaneous acoustic guitar jams in Chakrata, steaming bowls of Maggi at mountain dhabas you cannot find on Google Maps, and a tight group of 14–16 travelers who arrive as strangers and leave as family.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
            <div className="p-5 rounded-2xl bg-white border border-coal-950/10 shadow-sm">
              <span className="font-sans text-3xl font-black text-coal-950 block">31 Aug</span>
              <span className="text-xs text-coal-700 font-sans font-medium">The Day the Jam Started</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-coal-950/10 shadow-sm">
              <span className="font-sans text-3xl font-black text-coal-950 block">16 Max</span>
              <span className="text-xs text-coal-700 font-sans font-medium">Batch Limit (No tourist buses)</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-coal-950/10 shadow-sm col-span-2 sm:col-span-1">
              <span className="font-sans text-3xl font-black text-coal-950 block">70%+</span>
              <span className="text-xs text-coal-700 font-sans font-medium">Solo Travelers in Every Batch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}