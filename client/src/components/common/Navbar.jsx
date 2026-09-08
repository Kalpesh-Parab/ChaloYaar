import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export default function Navbar({
  activeBatch = 'Chakrata Batch Live 🔥',
  whatsappNumber = '8446257619',
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Packages', to: '/packages' },
  { name: 'Custom Trips', to: '/custom-trip' },
  { name: 'The Vibe', to: '/about' },
  { name: 'FAQs', to: '/faq' },
];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-12 pt-4 transition-all duration-300'>
      <nav
        className={`w-full max-w-[1920px] rounded-pill transition-all duration-300 flex items-center justify-between px-6 md:px-10 py-3 ${
          scrolled
            ? 'glass-nav-yellow shadow-2xl text-white'
            : 'bg-coal-950/90 text-white border border-white/10 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo - Navigates to Home */}
        <Link to='/' className='flex items-center gap-3 group'>
          <img
            src={logoImg}
            alt='Chalo Yaar'
            className='w-11 h-11 rounded-full border-2 border-brand-yellow object-cover transition-transform group-hover:scale-105'
          />
          <div className='flex flex-col'>
            <span className='font-logo text-2xl tracking-normal text-brand-yellow lowercase leading-none -rotate-2'>
              chalo yaar
            </span>
            <span className='text-[10px] uppercase tracking-widest text-white/70 font-sans mt-0.5'>
              Travel • Explore • Memories
            </span>
          </div>
        </Link>

        {/* Live Batch Indicator */}
        {activeBatch && (
          <div className='hidden lg:flex items-center gap-2 px-3.5 py-1 rounded-pill bg-coal-900 border border-brand-yellow/40 text-xs font-sans'>
            <span className='w-2 h-2 rounded-full bg-brand-yellow animate-pulse' />
            <span className='text-brand-yellow font-semibold'>
              {activeBatch}
            </span>
          </div>
        )}

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={idx}
                to={link.to}
                className={`text-sm font-sans font-semibold transition-colors ${
                  isActive
                    ? 'text-brand-yellow'
                    : 'text-white/90 hover:text-brand-yellow'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className='hidden sm:flex items-center gap-3'>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hey%20Chalo%20Yaar!%20Mujhe%20weekend%20trips%20ki%20details%20chahiye.`}
            target='_blank'
            rel='noreferrer'
            className='px-6 py-2.5 rounded-pill bg-brand-yellow hover:bg-brand-yellow-deep text-coal-950 font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 flex items-center gap-1.5'
          >
            <MessageCircle className='w-4 h-4 fill-coal-950' />
            Plan Banao
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='md:hidden text-white hover:text-brand-yellow p-1 cursor-pointer'
          aria-label='Toggle Menu'
        >
          {mobileMenuOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className='absolute top-20 left-4 right-4 bg-coal-950/95 border border-brand-yellow/30 rounded-2xl p-6 backdrop-blur-xl flex flex-col gap-4 md:hidden shadow-2xl text-white'>
          <div className='flex items-center gap-2 pb-3 border-b border-coal-800 text-xs text-brand-yellow font-sans'>
            <span className='w-2 h-2 rounded-full bg-brand-yellow' />
            {activeBatch}
          </div>
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className='text-base font-sans font-semibold text-white hover:text-brand-yellow transition-colors'
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target='_blank'
            rel='noreferrer'
            className='mt-2 w-full py-3 rounded-pill bg-brand-yellow text-coal-950 font-sans font-bold text-center text-sm flex items-center justify-center gap-2'
          >
            <MessageCircle className='w-4 h-4 fill-coal-950' />
            Captain Se Baat Karo
          </a>
        </div>
      )}
    </header>
  );
}
