import React from 'react';
import { Flame, MessageCircle, ArrowUpRight, Mountain } from 'lucide-react';
import heroVideo from '../../../assets/hero-camp.mp4';

export default function HeroSection({ heroData }) {
  const {
    badge = 'CHAKRATA WEEKEND BATCH LIVE',
    videoUrl = heroVideo,
    mainHeadingPrefix = 'WhatsApp pe plans banana band karo,',
    mainHeadingAccent = 'chalo yaar!',
    calligraphySub = 'Where strangers turn into bonfire buddies & weekend stories.',
    subHeading = 'High-altitude camping at 7,000 ft, unfiltered campfires, secret night walks, and zero awkward corporate vibes. Solo ho ya group ke saath — sab sorted hai.',
    stats = [
      { label: '70% Solo Travelers', desc: 'No awkward scenes' },
      { label: 'Ghar Jaisa Pahadi Khana', desc: 'Garhwali meals included' },
      { label: 'Night Walk & Campfire', desc: 'Guided by captains' },
      { label: 'Zero Hidden Costs', desc: 'Jo bola, wahi milega' },
    ],
    whatsappNumber = '919999999999',
  } = heroData || {};

  return (
    <section className='relative min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center overflow-hidden bg-coal-950'>
      {/* Background Cinematic Video Loop */}
      <div className='absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover scale-105 opacity-40 filter contrast-125'
        >
          <source src={videoUrl} type='video/mp4' />
        </video>
        {/* Yellow-to-Coal Gradient Vignette */}
        <div className='absolute inset-0 bg-gradient-to-b from-coal-950/80 via-coal-950/60 to-brand-yellow' />
      </div>

      <div className='site-container relative z-10 flex flex-col items-center'>
        {/* Batch Badge */}
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-coal-950/90 border border-brand-yellow/40 text-brand-yellow mb-6 backdrop-blur-md'>
          <span className='w-2 h-2 rounded-full bg-brand-yellow animate-ping' />
          <span className='text-xs font-bold uppercase tracking-wider font-sans'>
            {badge}
          </span>
        </div>

        {/* Delicate Calligraphy Lead */}
        <p className='font-calligraphy text-3xl sm:text-5xl text-brand-yellow font-normal tracking-wide drop-shadow-md mb-2'>
          {calligraphySub}
        </p>

        {/* Main Headline */}
        <h1 className='font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight'>
          {mainHeadingPrefix} <br />
          <span className='font-logo lowercase text-5xl sm:text-7xl md:text-8xl text-brand-yellow tracking-normal inline-block mt-2 -rotate-2'>
            {mainHeadingAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className='text-white/90 font-sans text-base sm:text-lg max-w-2xl mx-auto pt-6 leading-relaxed drop-shadow'>
          {subHeading}
        </p>

        {/* CTAs */}
        <div className='mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto'>
          <a
            href='#packages'
            className='w-full sm:w-auto px-8 py-4 rounded-pill bg-brand-yellow hover:bg-brand-yellow-deep text-coal-950 font-sans font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2'
          >
            <Flame className='w-5 h-5 fill-coal-950' />
            Weekend Packages Dekho
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hey!%20Mujhe%20Chakrata%20aur%20upcoming%20trips%20ke%20dates%20janna%20hai.`}
            target='_blank'
            rel='noreferrer'
            className='w-full sm:w-auto px-7 py-4 rounded-pill bg-coal-950/80 hover:bg-coal-950 text-white font-sans font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95 backdrop-blur-md'
          >
            <MessageCircle className='w-5 h-5 text-brand-yellow' />
            Captain Se Baat Karo
            <ArrowUpRight className='w-4 h-4 text-white/70' />
          </a>
        </div>

        {/* Trust Badges Bar (Over Yellow Translucent Ground) */}
        <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1400px]'>
          {stats.map((item, idx) => (
            <div
              key={idx}
              className='p-5 rounded-card bg-coal-950/90 border border-brand-yellow/30 backdrop-blur-lg text-left shadow-lg hover:border-brand-yellow transition-all'
            >
              <p className='font-sans font-bold text-base sm:text-lg text-brand-yellow'>
                {item.label}
              </p>
              <p className='font-sans text-xs text-white/80 mt-1'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
