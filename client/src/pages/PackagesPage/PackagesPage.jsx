import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ScrollDescender from '../../components/common/ScrollDescender';

import PackagesFilterBar from './components/PackagesFilterBar';
import TestimonialsSection from '../HomePage/components/TestimonialsSection';
import ContactSection from '../HomePage/components/ContactSection';

import { Calendar, Clock, MapPin, ArrowRight, Flame } from 'lucide-react';

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('All Hubs');

  const whatsappNumber = '9437777695';

  const allPackages = [
    {
      id: 'chakrata-camping',
      category: 'camping',
      pickup: 'Ex-Delhi',
      title: 'Chakrata Ridge Camping & Secret Night Walk',
      badge: 'Filling Fast 🔥',
      tagline:
        'High-altitude pines, Tiger Falls trek & midnight bonfire acoustic jams',
      duration: '4N / 5D',
      price: '₹6,499',
      nextBatch: 'Coming Weekend',
      image:
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop',
      inclusions: [
        'Alpine Dome Tents',
        'All Pahadi Meals',
        'Guided Night Walk',
        'Bonfire & Acoustic Jams',
      ],
    },
    {
      id: 'spiti-circuit',
      category: 'roadtrip',
      pickup: 'Ex-Chandigarh',
      title: 'Spiti Valley Raw Road Expedition',
      badge: 'Upcoming Expedition',
      tagline:
        "Stargazing at 14,000 ft, ancient monasteries & world's highest post office",
      duration: '7N / 8D',
      price: '₹18,999',
      nextBatch: 'End of Month',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      inclusions: [
        '4x4 Mountain Cruiser',
        'Homestay & Camps',
        'Fuel & Permits',
        'Trip Captain On-Board',
      ],
    },
    {
      id: 'kasol-grahan',
      category: 'weekend',
      pickup: 'Ex-Delhi',
      title: 'Kasol & Hidden Grahan Village Trek',
      badge: 'Weekend Escape',
      tagline:
        'Riverside cafes, Parvati river trail & secluded village homestay',
      duration: '3N / 4D',
      price: '₹5,999',
      nextBatch: 'Next Friday',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
      inclusions: [
        'Riverside Stay',
        'Local Himachali Food',
        'Grahan Forest Guide',
        'Cafe Hopping',
      ],
    },
  ];

  // Filtering Logic
  const filteredPackages = allPackages.filter((pkg) => {
    const matchesCat =
      selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesLoc =
      selectedLocation === 'All Hubs' || pkg.pickup === selectedLocation;
    return matchesCat && matchesLoc;
  });

  return (
    <div className='min-h-screen bg-brand-yellow text-coal-950 font-sans selection:bg-coal-950 selection:text-brand-yellow'>
      <Navbar
        activeBatch='Chakrata Batch: Coming Weekend 🔥'
        whatsappNumber={whatsappNumber}
      />
      <ScrollDescender />

      <main className='pt-36 pb-20'>
        <div className='site-container'>
          {/* Header */}
          <div className='text-center max-w-2xl mx-auto mb-12 space-y-2'>
            <p className='font-calligraphy text-coal-950 text-3xl'>
              Find Your Next Vibe
            </p>
            <h1 className='font-sans text-4xl sm:text-6xl font-extrabold text-coal-950'>
              Curated Trips & Camps
            </h1>
            <p className='font-sans text-coal-800 text-sm sm:text-base'>
              Weekend escapes, bonfire trails, and high-altitude circuits. Zero
              tour-operator boring scenes.
            </p>
          </div>

          {/* Interactive Filters */}
          <PackagesFilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />

          {/* Packages Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className='rounded-surface yellow-card overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group'
              >
                {/* Image */}
                <div className='relative h-64 w-full overflow-hidden'>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent' />

                  <span className='absolute top-4 left-4 px-3 py-1 rounded-pill bg-coal-950 text-brand-yellow font-sans font-bold text-xs flex items-center gap-1'>
                    <Flame className='w-3.5 h-3.5' />
                    {pkg.badge}
                  </span>

                  <span className='absolute bottom-4 left-4 px-3 py-1 rounded-pill bg-white/90 text-coal-950 font-sans font-semibold text-xs flex items-center gap-1.5 shadow-sm'>
                    <MapPin className='w-3 h-3 text-coal-950' />
                    {pkg.pickup}
                  </span>
                </div>

                {/* Body */}
                <div className='p-6 flex flex-col flex-grow justify-between space-y-6'>
                  <div>
                    <div className='flex items-center gap-3 text-xs text-coal-600 font-sans font-medium mb-2'>
                      <span className='flex items-center gap-1'>
                        <Clock className='w-3.5 h-3.5' /> {pkg.duration}
                      </span>
                      <span>•</span>
                      <span className='flex items-center gap-1'>
                        <Calendar className='w-3.5 h-3.5' /> Batch:{' '}
                        {pkg.nextBatch}
                      </span>
                    </div>

                    <h3 className='font-sans font-bold text-xl sm:text-2xl text-coal-950 leading-snug'>
                      {pkg.title}
                    </h3>

                    <p className='font-sans text-coal-700 text-sm mt-2 leading-relaxed'>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Action Row - Routes to /packages/:id */}
                  <div className='flex items-center justify-between pt-4 border-t border-coal-950/10'>
                    <div>
                      <span className='text-xs text-coal-600 block font-sans'>
                        Starting at
                      </span>
                      <span className='font-sans font-black text-2xl text-coal-950'>
                        {pkg.price}
                      </span>
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
            ))}
          </div>
        </div>
      </main>

      {/* Reused Social Proof & WhatsApp Connect */}
      <TestimonialsSection />
      <ContactSection whatsappNumber={whatsappNumber} />

      <Footer />
    </div>
  );
}
