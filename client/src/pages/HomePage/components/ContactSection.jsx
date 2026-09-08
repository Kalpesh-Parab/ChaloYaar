import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function ContactSection({ whatsappNumber = '919999999999' }) {
  const [name, setName] = useState('');
  const [trip, setTrip] = useState('Chakrata Weekend Camping');

  const handleWhatsAppDirect = (e) => {
    e.preventDefault();
    const text = `Hey Chalo Yaar team! Mera naam ${name || 'Traveler'} hai aur mujhe ${trip} ki seat lock karni hai.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
    );
  };

  return (
    <section
      id='contact'
      className='py-24 bg-brand-yellow relative overflow-hidden'
    >
      <div className='site-container'>
        {/* Elevated Pitch-Black Action Card on the Yellow Canvas */}
        <div className='max-w-4xl mx-auto rounded-surface bg-coal-950 text-white border border-coal-800 p-8 sm:p-14 relative shadow-2xl'>
          <div className='text-center max-w-xl mx-auto space-y-3 mb-8'>
            <span className='font-calligraphy text-brand-yellow text-3xl'>
              Direct Connection, Zero Form Boring
            </span>
            <h2 className='font-sans text-3xl sm:text-5xl font-extrabold text-white'>
              Plan Banayein? 
            </h2>
            <p className='font-sans text-white/80 text-sm sm:text-base'>
              Koi 10-page ka inquiry form nahi bharna. Drop your name and
              connect directly with the Trip Captain on WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleWhatsAppDirect}
            className='max-w-md mx-auto space-y-4'
          >
            <div>
              <label className='block text-xs font-sans font-semibold text-white/70 mb-1.5 uppercase tracking-wider'>
                Aapka Naam
              </label>
              <input
                type='text'
                required
                placeholder='e.g. Rahul Sharma'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full px-5 py-3.5 rounded-pill bg-coal-900 border border-coal-700 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-coal-600'
              />
            </div>

            <div>
              <label className='block text-xs font-sans font-semibold text-white/70 mb-1.5 uppercase tracking-wider'>
                Konsi Trip Dekh Rahe Ho?
              </label>
              <select
                value={trip}
                onChange={(e) => setTrip(e.target.value)}
                className='w-full px-5 py-3.5 rounded-pill bg-coal-900 border border-coal-700 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow transition-colors cursor-pointer'
              >
                <option value='Chakrata Weekend Camping'>
                  Chakrata Weekend Camping & Night Walk
                </option>
                <option value='Spiti Road Expedition'>
                  Spiti Valley Road Expedition
                </option>
                <option value='Custom Group Trip'>
                  Custom Group Trip (Humara apna gang hai)
                </option>
              </select>
            </div>

            <button
              type='submit'
              className='w-full py-4 mt-2 rounded-pill bg-brand-yellow hover:bg-brand-yellow-deep text-coal-950 font-sans font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer'
            >
              <MessageCircle className='w-5 h-5 fill-coal-950' />
              Captain Se WhatsApp Par Baat Karo
              <ArrowRight className='w-4 h-4 text-coal-950' />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
