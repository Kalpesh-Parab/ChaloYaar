import React from 'react';
import logoImg from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className='bg-coal-950 border-t border-coal-800 text-sand-400 font-sans py-12 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='flex items-center gap-3'>
          <img
            src={logoImg}
            alt='Chalo Yaar'
            className='w-9 h-9 rounded-full border border-brand-yellow object-cover'
          />
          <div>
            <span className='font-display font-bold text-white text-base tracking-wide'>
              CHALO{' '}
              <span className='text-brand-yellow font-desi text-lg'>YAAR</span>
            </span>
            <p className='text-[11px] text-white/80'>
              Travel • Explore • Memories — Est. 31 Aug
            </p>
          </div>
        </div>

        <p className='font-desi text-sm text-white/80 text-center md:text-right'>
          "Zindagi lambi nahi, memorable honi chahiye." 🏕️✨
        </p>

        <p className='text-xs text-white/60'>
          © {new Date().getFullYear()} Chalo Yaar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
