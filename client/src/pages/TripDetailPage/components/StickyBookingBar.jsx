import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function StickyBookingBar({ price, title, whatsappNumber = "919999999999" }) {
  const handleBookingClick = () => {
    const message = `Hey Chalo Yaar Captain! Mujhe ${title} ki upcoming batch mein seat reserve karni hai.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-coal-950/95 backdrop-blur-md border-t border-coal-800 py-6 px-4 sm:px-8">
      <div className="site-container flex items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-sand-400 font-sans block">
            Special Batch Price
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-sans font-black text-2xl sm:text-3xl text-brand-yellow">
              {price}
            </span>
            <span className="text-xs text-sand-400 font-sans">/ person all-inclusive</span>
          </div>
        </div>

        <button
          onClick={handleBookingClick}
          className="px-6 sm:px-8 py-3.5 rounded-pill bg-brand-yellow hover:bg-brand-yellow-deep text-coal-950 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-yellow-glow transition-all active:scale-95 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-coal-950" />
          <span>Seat Lock Karo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}