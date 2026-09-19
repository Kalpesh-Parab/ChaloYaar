import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import DayWiseTimeline from './components/DayWiseTimeline';
import InclusionsExclusions from './components/InclusionsExclusions';
import PackingChecklist from './components/PackingChecklist';
import StickyBookingBar from './components/StickyBookingBar';
import TestimonialsSection from '../HomePage/components/TestimonialsSection';
import TripGallery from './components/TripGallery';
import { MapPin, Clock, Calendar, Users, Flame, ArrowLeft } from 'lucide-react';
import { packagesData } from '../PackagesPage/data/packagesData';

export default function TripDetailPage() {
  const { slug } = useParams();
  const whatsappNumber = '919437777695';

  const tripData =
    packagesData.find((pkg) => pkg.id === slug) || packagesData[0];

  return (
    <div className='min-h-screen bg-brand-yellow text-coal-950 font-sans selection:bg-coal-950 selection:text-brand-yellow pb-24'>
      <Navbar
        activeBatch={`${tripData.title} 🔥`}
        whatsappNumber={whatsappNumber}
      />

      <main className='pt-28'>
        <div className='site-container'>
          <Link
            to='/packages'
            className='inline-flex items-center gap-2 text-xs font-sans font-bold text-coal-800 hover:text-coal-950 mb-6 group cursor-pointer'
          >
            <ArrowLeft className='w-4 h-4 transition-transform group-hover:-translate-x-1' />
            Wapas Sabhi Packages Par Jao
          </Link>

          {/* Hero Banner */}
          <div className='rounded-surface overflow-hidden yellow-card relative mb-10'>
            <div className='h-72 sm:h-96 md:h-[450px] w-full relative'>
              <img
                src={tripData.heroImage || tripData.cardImage}
                alt={tripData.title}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-coal-950/80 via-coal-950/20 to-transparent' />

              <div className='absolute bottom-6 left-6 right-6 text-white space-y-2'>
                <span className='px-3 py-1 rounded-pill bg-brand-yellow text-coal-950 font-sans font-bold text-xs inline-flex items-center gap-1'>
                  <Flame className='w-3.5 h-3.5 fill-coal-950' />
                  {tripData.badge || 'Filling Fast'}
                </span>
                <h1 className='font-sans font-black text-3xl sm:text-5xl text-white'>
                  {tripData.title}
                </h1>
              </div>
            </div>

            {/* Quick Specs */}
            <div className='p-6 bg-white grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-coal-100'>
              <div className='flex items-center gap-3'>
                <Clock className='w-5 h-5 text-brand-yellow-deep' />
                <div>
                  <span className='text-[11px] text-coal-600 block'>
                    Duration
                  </span>
                  <span className='font-sans font-bold text-sm text-coal-950'>
                    {tripData.duration}
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin className='w-5 h-5 text-brand-yellow-deep' />
                <div>
                  <span className='text-[11px] text-coal-600 block'>
                    Pick-up & Drop
                  </span>
                  <span className='font-sans font-bold text-sm text-coal-950'>
                    {tripData.pickup}
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Calendar className='w-5 h-5 text-brand-yellow-deep' />
                <div>
                  <span className='text-[11px] text-coal-600 block'>
                    Next Batch
                  </span>
                  <span className='font-sans font-bold text-sm text-coal-950'>
                    {tripData.nextBatch}
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Users className='w-5 h-5 text-brand-yellow-deep' />
                <div>
                  <span className='text-[11px] text-coal-600 block'>
                    Batch Size
                  </span>
                  <span className='font-sans font-bold text-sm text-coal-950'>
                    {tripData.groupSize}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className='p-8 rounded-card yellow-card mb-10 space-y-3'>
            <span className='font-calligraphy text-coal-950 text-2xl'>
              Trip Ka Scene Kya Hai?
            </span>
            <p className='font-sans text-coal-800 text-base sm:text-lg leading-relaxed'>
              {tripData.overview}
            </p>
          </div>

          {/* Timeline */}
          <DayWiseTimeline itinerary={tripData.itinerary} />

          {/* Inclusions & Exclusions */}
          <InclusionsExclusions
            inclusions={tripData.inclusions}
            exclusions={tripData.exclusions}
          />

          {/* Packing Items */}
          <div className='mt-10'>
            <PackingChecklist packingItems={tripData.packingItems} />
          </div>

          {/* Gallery with dynamic data */}
          <TripGallery media={tripData.gallery} />
        </div>
      </main>

      <TestimonialsSection />
      <StickyBookingBar
        price={tripData.price}
        title={tripData.title}
        whatsappNumber={whatsappNumber}
      />
      <Footer />
    </div>
  );
}
