import React from 'react';
import {
  X,
  Check,
  Clock,
  Calendar,
  MapPin,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export default function PackageDetailDrawer({
  pkg,
  onClose,
  whatsappNumber = '9437777695',
}) {
  if (!pkg) return null;

  return (
    <div className='fixed inset-0 z-50 flex justify-end bg-coal-950/60 backdrop-blur-sm animate-fade-in'>
      <div className='w-full max-w-xl bg-coal-950 text-white h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-coal-800'>
        {/* Header */}
        <div>
          <div className='flex items-center justify-between pb-4 border-b border-coal-800'>
            <span className='font-calligraphy text-brand-yellow text-2xl'>
              Trip Scene & Plan
            </span>
            <button
              onClick={onClose}
              className='p-2 rounded-full bg-coal-900 text-sand-400 hover:text-white cursor-pointer'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          {/* Banner */}
          <div className='mt-6 rounded-2xl overflow-hidden h-52 relative'>
            <img
              src={pkg.image}
              alt={pkg.title}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-coal-950 via-transparent to-transparent' />
            <span className='absolute bottom-3 left-3 px-3 py-1 rounded-pill bg-brand-yellow text-coal-950 font-sans font-bold text-xs'>
              {pkg.duration}
            </span>
          </div>

          {/* Title & Tagline */}
          <h2 className='font-sans font-extrabold text-2xl sm:text-3xl text-white mt-4'>
            {pkg.title}
          </h2>
          <p className='font-sans text-sand-400 text-sm mt-2 leading-relaxed'>
            {pkg.tagline}
          </p>

          {/* Day Wise Highlights */}
          <div className='mt-6 space-y-3'>
            <h3 className='font-sans font-bold text-base text-brand-yellow uppercase tracking-wider text-xs'>
              Brief Itinerary Timeline
            </h3>
            {pkg.itinerary?.map((day, i) => (
              <div
                key={i}
                className='p-3.5 rounded-xl bg-coal-900 border border-coal-800 flex gap-3'
              >
                <span className='font-sans font-bold text-brand-yellow text-xs whitespace-nowrap'>
                  {day.day}
                </span>
                <p className='font-sans text-xs text-sand-100 leading-relaxed'>
                  {day.title}
                </p>
              </div>
            ))}
          </div>

          {/* Inclusions */}
          <div className='mt-6'>
            <h3 className='font-sans font-bold text-base text-brand-yellow uppercase tracking-wider text-xs mb-3'>
              Included in this Package
            </h3>
            <div className='grid grid-cols-2 gap-2'>
              {pkg.inclusions.map((inc, i) => (
                <div
                  key={i}
                  className='flex items-center gap-2 text-xs text-sand-100'
                >
                  <Check className='w-3.5 h-3.5 text-brand-yellow' />
                  {inc}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Drawer Footer */}
        <div className='pt-6 mt-8 border-t border-coal-800 flex items-center justify-between gap-4'>
          <div>
            <span className='text-[11px] text-sand-400 block font-sans'>
              Total Investment
            </span>
            <span className='font-sans font-extrabold text-2xl text-brand-yellow'>
              {pkg.price}
            </span>
            <span className='text-xs text-sand-400 font-sans'> / seat</span>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hey!%20Mujhe%20${encodeURIComponent(pkg.title)}%20ki%20seat%20book%20karni%20hai.`}
            target='_blank'
            rel='noreferrer'
            className='px-6 py-3.5 rounded-pill bg-brand-yellow text-coal-950 font-sans font-bold text-xs uppercase tracking-wider hover:bg-brand-yellow-hover flex items-center gap-2 shadow-yellow-glow'
          >
            <MessageCircle className='w-4 h-4 fill-coal-950' />
            Lock Seat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
