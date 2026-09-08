import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-brand-yellow text-coal-950 font-sans flex flex-col justify-between selection:bg-coal-950 selection:text-brand-yellow">
      <Navbar whatsappNumber="8446257619" />

      <main className="pt-36 pb-20 flex-grow flex items-center justify-center text-center px-6">
        <div className="max-w-lg space-y-6">
          <div className="w-20 h-20 rounded-full bg-coal-950 text-brand-yellow mx-auto flex items-center justify-center shadow-xl">
            <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <span className="font-calligraphy text-coal-950 text-4xl block">
            Raasta Bhatak Gaye Yaar...
          </span>

          <h1 className="font-sans font-black text-6xl sm:text-8xl text-coal-950 tracking-tight">
            404
          </h1>

          <p className="font-sans text-coal-800 text-sm sm:text-base leading-relaxed">
            Ye page kisi kachhe pahadi raaste par gayab ho gaya hai. Chal wapas basecamp chalte hain!
          </p>

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-pill bg-coal-950 text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider hover:bg-coal-900 shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Wapas Basecamp (Home) Chalo
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}