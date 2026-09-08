import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import TestimonialsSection from '../HomePage/components/TestimonialsSection';
import { Users, Calendar, MapPin, Sparkles, MessageCircle, Music, Tent, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CustomTripPage() {
  const whatsappNumber = '8446257619';

  // Interactive Custom Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    groupSize: '8-12 Folks',
    vibe: 'Raw Camping & Bonfire',
    departure: 'Delhi NCR',
    targetMonth: 'Coming Month',
    notes: '',
  });

  const vibes = [
    { id: 'camping', label: 'Raw Ridge Camping & Bonfires' },
    { id: 'roadtrip', label: 'Spiti / Ladakh 4x4 Roadtrip' },
    { id: 'chill', label: 'Riverside Cafes & Village Homestays' },
    { id: 'offsite', label: 'Startup / Team Chill Offsite' },
  ];

  const groupSizes = ['4-6 Folks', '8-12 Folks', '15-20 Folks', '25+ Big Gang'];
  const departures = ['Delhi NCR', 'Dehradun / Rishikesh', 'Chandigarh', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hey Chalo Yaar Captain! 👋
Mera naam *${formData.name || 'Traveler'}* hai.
Hume ek *Custom Private Trip* plan karni hai:

👥 *Group Size:* ${formData.groupSize}
🏕️ *Trip Vibe:* ${formData.vibe}
📍 *Starting From:* ${formData.departure}
📅 *When:* ${formData.targetMonth}
📝 *Special Wish:* ${formData.notes || 'Custom dates & private tempo traveler'}

Let's discuss budget and itinerary!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const perks = [
    {
      icon: Users,
      title: 'No Unknown Strangers',
      desc: 'Entire tempo traveler and alpine campsite exclusively reserved for your circle only.',
    },
    {
      icon: Calendar,
      title: 'Aapki Apni Dates',
      desc: 'No waiting for weekend public batches. Pick whichever weekdays or long weekends suit your gang.',
    },
    {
      icon: Music,
      title: 'Custom Campfire Vibe',
      desc: 'Aapka speaker, aapki playlist, midnight acoustic jams, and customized local pahadi barbecue menus.',
    },
    {
      icon: ShieldCheck,
      title: 'Dedicated Trip Captain',
      desc: 'Our certified mountain lead travels along to manage stays, permits, and hidden trails so you just chill.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-yellow text-coal-950 font-sans selection:bg-coal-950 selection:text-brand-yellow">
      <Navbar activeBatch="Chakrata Batch: Coming Weekend 🔥" whatsappNumber={whatsappNumber} />

      <main className="pt-36 pb-20">
        <div className="site-container">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="font-calligraphy text-coal-950 text-3xl">Apna Gang, Apne Rules</span>
            <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-coal-950 leading-tight">
              Plan a Private Group Trip 
            </h1>
            <p className="font-sans text-coal-800 text-sm sm:text-base max-w-xl mx-auto">
              College reunions, office offsites, ya doston ka secret trip. No tour-guide lecture—just private luxury travel with raw mountain vibes.
            </p>
          </div>

          {/* Form & Perks Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            
            {/* Left Column: Interactive Trip Builder Form */}
            <div className="lg:col-span-7 rounded-surface yellow-card border border-coal-950/15 p-6 sm:p-10 shadow-xl bg-white">
              <div className="mb-8">
                <span className="font-calligraphy text-2xl text-coal-950">Quick Details Drop Karo</span>
                <h3 className="font-sans font-bold text-2xl text-coal-950">Customize Your Scene</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-bold text-coal-800 uppercase tracking-wider mb-2">
                      Aapka Naam
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kalpesh Parab"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-pill bg-coal-50 border border-coal-200 text-coal-950 font-sans text-sm focus:outline-none focus:border-coal-950 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-bold text-coal-800 uppercase tracking-wider mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-pill bg-coal-50 border border-coal-200 text-coal-950 font-sans text-sm focus:outline-none focus:border-coal-950 transition-colors"
                    />
                  </div>
                </div>

                {/* Group Size Pills */}
                <div>
                  <label className="block text-xs font-sans font-bold text-coal-800 uppercase tracking-wider mb-2">
                    Kitne Log Hain Gang Mein?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {groupSizes.map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setFormData({ ...formData, groupSize: size })}
                        className={`py-2.5 px-3 rounded-pill text-xs font-sans font-bold transition-all cursor-pointer ${
                          formData.groupSize === size
                            ? 'bg-coal-950 text-brand-yellow shadow-md'
                            : 'bg-coal-50 border border-coal-200 text-coal-700 hover:bg-coal-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vibe Selection */}
                <div>
                  <label className="block text-xs font-sans font-bold text-coal-800 uppercase tracking-wider mb-2">
                    Kaisa Trip Experience Chahiye?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vibes.map((v) => (
                      <button
                        type="button"
                        key={v.id}
                        onClick={() => setFormData({ ...formData, vibe: v.label })}
                        className={`p-3 rounded-2xl text-left text-xs font-sans font-bold border transition-all cursor-pointer flex items-center justify-between ${
                          formData.vibe === v.label
                            ? 'bg-coal-950 text-brand-yellow border-coal-950 shadow-md'
                            : 'bg-coal-50 border-coal-200 text-coal-800 hover:bg-coal-100'
                        }`}
                      >
                        <span>{v.label}</span>
                        {formData.vibe === v.label && <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Starting Hub & Target Month */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-bold text-coal-800 uppercase tracking-wider mb-2">
                      Departure City
                    </label>
                    <select
                      value={formData.departure}
                      onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                      className="w-full px-4 py-3 rounded-pill bg-coal-50 border border-coal-200 text-coal-950 font-sans text-sm focus:outline-none focus:border-coal-950 cursor-pointer"
                    >
                      {departures.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-coal-800 uppercase tracking-wider mb-2">
                      Kab Plan Kar Rahe Ho?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next Month 15-18th"
                      value={formData.targetMonth}
                      onChange={(e) => setFormData({ ...formData, targetMonth: e.target.value })}
                      className="w-full px-4 py-3 rounded-pill bg-coal-50 border border-coal-200 text-coal-950 font-sans text-sm focus:outline-none focus:border-coal-950 transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Requests */}
                <div>
                  <label className="block text-xs font-sans font-bold text-coal-800 uppercase tracking-wider mb-2">
                    Koi Khaas Wish? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need acoustic guitar captain, barbecue night, or pet-friendly camp"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-coal-50 border border-coal-200 text-coal-950 font-sans text-sm focus:outline-none focus:border-coal-950 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-pill bg-coal-950 text-brand-yellow font-sans font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-coal-900 shadow-xl transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-brand-yellow" />
                  Captain Se Direct Estimate Lo
                  <ArrowRight className="w-4 h-4 text-brand-yellow" />
                </button>
              </form>
            </div>

            {/* Right Column: Gang Benefits */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-coal-950 text-white border border-coal-800 shadow-xl">
                <span className="font-calligraphy text-brand-yellow text-2xl">Private Trip Ka Maza</span>
                <h3 className="font-sans font-extrabold text-2xl text-white mt-1 mb-6">
                  Why Book a Private Batch? 
                </h3>

                <div className="space-y-6">
                  {perks.map((perk, idx) => {
                    const Icon = perk.icon;
                    return (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-coal-900 border border-brand-yellow/30 flex items-center justify-center shrink-0 text-brand-yellow">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-white text-base">
                            {perk.title}
                          </h4>
                          <p className="font-sans text-xs sm:text-sm text-sand-400 mt-1 leading-relaxed">
                            {perk.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Social Proof */}
          <TestimonialsSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}