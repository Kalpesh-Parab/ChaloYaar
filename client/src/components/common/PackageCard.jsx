// src/components/common/PackageCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Check,
  ArrowRight,
  Flame,
} from 'lucide-react';

export default function PackageCard({ pkg }) {
  const cardImg = pkg.cardImage || pkg.image;
  const cardInclusions =
    pkg.quickInclusions || pkg.inclusions?.slice(0, 4) || [];

  return (
    <div className='rounded-surface yellow-card overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group bg-white'>
      {/* Image & Badges */}
      <div className='relative h-64 w-full overflow-hidden'>
        <img
          src={cardImg}
          alt={pkg.title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent' />

        {pkg.badge && (
          <span className='absolute top-4 left-4 px-3 py-1 rounded-pill bg-coal-950 text-brand-yellow font-sans font-bold text-xs flex items-center gap-1'>
            <Flame className='w-3.5 h-3.5' />
            {pkg.badge}
          </span>
        )}

        <span className='absolute bottom-4 left-4 px-3 py-1 rounded-pill bg-white/90 text-coal-950 font-sans font-semibold text-xs flex items-center gap-1.5 shadow-sm'>
          <MapPin className='w-3 h-3 text-coal-950' />
          {pkg.pickup}
        </span>
      </div>

      {/* Card Content */}
      <div className='p-6 flex flex-col flex-grow justify-between space-y-6'>
        <div>
          <div className='flex items-center gap-3 text-xs text-coal-600 font-sans font-medium mb-2'>
            <span className='flex items-center gap-1'>
              <Clock className='w-3.5 h-3.5' /> {pkg.duration}
            </span>
            <span>•</span>
            <span className='flex items-center gap-1'>
              <Calendar className='w-3.5 h-3.5' /> Batch: {pkg.nextBatch}
            </span>
          </div>

          <h3 className='font-sans font-bold text-xl sm:text-2xl text-coal-950 leading-snug'>
            {pkg.title}
          </h3>

          <p className='font-sans text-coal-700 text-sm mt-2 leading-relaxed'>
            {pkg.tagline}
          </p>
        </div>

        {/* 4 Quick Inclusions */}
        {cardInclusions.length > 0 && (
          <div className='grid grid-cols-2 gap-2 py-4 border-y border-coal-950/10'>
            {cardInclusions.map((inc, i) => (
              <div
                key={i}
                className='flex items-center gap-2 text-xs font-sans font-medium text-coal-800'
              >
                <span className='w-4 h-4 rounded-full bg-brand-yellow flex items-center justify-center text-coal-950 font-bold shrink-0'>
                  <Check className='w-2.5 h-2.5' />
                </span>
                <span className='truncate'>{inc}</span>
              </div>
            ))}
          </div>
        )}

        {/* Pricing & CTA */}
        <div className='flex items-center justify-between pt-2'>
          <div>
            <span className='text-xs text-coal-600 block font-sans'>
              Starting at
            </span>
            <span className='font-sans font-black text-2xl text-coal-950'>
              {pkg.price}
            </span>
            <span className='text-xs text-coal-600 font-sans'> / person</span>
          </div>

          <Link
            to={`/packages/${pkg.id}`}
            className='px-5 py-3 rounded-pill bg-coal-950 text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider hover:bg-coal-900 flex items-center gap-2 shadow-md transition-all active:scale-95'
          >
            View Details
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}
