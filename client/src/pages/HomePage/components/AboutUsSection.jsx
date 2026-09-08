import React from 'react';
import { Compass, Flame, Users, ShieldCheck } from 'lucide-react';

export default function AboutUsSection({ aboutData }) {
  const {
    tag = 'SCENE KYA HAI?',
    calligraphyAccent = 'Kyunki zindagi screens ke piche nahi bitti...',
    title = 'WhatsApp groups mein trips plan karna band karo.',
    story = "We got tired of planned trips dying in group chats with 'bhai agle mahine pakka'. So Chalo Yaar was born on 31st August — an unpretentious circle of backpackers, bonfire lovers, and weekend wanderers who actually show up.",
    pillars = [
      {
        icon: Users,
        title: 'No Awkward Strangers',
        desc: 'By day two, random strangers become the people sharing your Maggi and campfire playlist.',
      },
      {
        icon: Flame,
        title: 'Asli Offbeat, No Tourist Traps',
        desc: 'Hidden waterfalls, secret trails, and star-loaded ridges that commercial tour buses skip.',
      },
      {
        icon: ShieldCheck,
        title: 'Safe & Verified Leads',
        desc: 'Experienced trek captains and verified stays so solo female travelers travel 100% stress-free.',
      },
    ],
  } = aboutData || {};

  return (
    <section
      id='about'
      className='py-24 bg-brand-yellow text-coal-950 relative overflow-hidden'
    >
      <div className='site-container'>
        <div className='flex flex-col lg:flex-row gap-14 items-start justify-between'>
          {/* Left Column: The Manifesto */}
          <div className='lg:w-1/2 space-y-4'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-coal-950 text-brand-yellow text-xs font-sans font-bold uppercase tracking-wider'>
              <Compass className='w-4 h-4' />
              {tag}
            </div>

            <p className='font-calligraphy text-3xl sm:text-4xl text-coal-950 font-normal'>
              {calligraphyAccent}
            </p>

            <h2 className='font-sans text-3xl sm:text-5xl font-extrabold text-coal-950 leading-tight'>
              {title}
            </h2>

            <p className='font-sans text-coal-900 text-base sm:text-lg leading-relaxed pt-2'>
              {story}
            </p>

            <div className='pt-4 flex items-center gap-4'>
              <div className='p-4 rounded-2xl bg-white border border-coal-950/10 shadow-sm'>
                <span className='font-sans text-2xl font-black text-coal-950 block'>
                  31st Aug
                </span>
                <span className='text-xs text-coal-700 font-sans font-medium'>
                  The Day the Jam Started
                </span>
              </div>
              <div className='p-4 rounded-2xl bg-white border border-coal-950/10 shadow-sm'>
                <span className='font-sans text-2xl font-black text-coal-950 block'>
                  100%
                </span>
                <span className='text-xs text-coal-700 font-sans font-medium'>
                  Pahadi & Raw Vibe
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Pillars */}
          <div className='lg:w-1/2 flex flex-col gap-4 w-full'>
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className='p-6 rounded-card yellow-card hover:translate-x-1 transition-all group'
                >
                  <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-xl bg-coal-950 text-brand-yellow transition-colors'>
                      <Icon className='w-6 h-6' />
                    </div>
                    <div className='space-y-1'>
                      <h3 className='font-sans font-bold text-lg text-coal-950'>
                        {item.title}
                      </h3>
                      <p className='font-sans text-sm text-coal-700 leading-relaxed'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
