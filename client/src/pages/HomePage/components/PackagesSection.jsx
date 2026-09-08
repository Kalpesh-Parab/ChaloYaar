import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Check,
  ArrowRight,
  Flame,
} from 'lucide-react';

export default function PackagesSection({
  packagesData,
  whatsappNumber = '919999999999',
}) {
  const defaultPackages = [
    {
      id: 'chakrata-camping',
      title: 'Chakrata Ridge Camping & Secret Night Walk',
      badge: 'Filling Fast 🔥',
      tagline:
        'High-altitude pines, Tiger Falls trek & midnight bonfire acoustic jams',
      duration: '4N / 5D',
      pickup: 'Delhi / Dehradun',
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
      title: 'Spiti Valley Raw Road Expedition',
      badge: 'Upcoming Roadtrip',
      tagline:
        "Stargazing at 14,000 ft, ancient monasteries & world's highest post office",
      duration: '7N / 8D',
      pickup: 'Delhi / Chandigarh',
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
      title: 'Kasol & Hidden Grahan Village Trek',
      badge: 'Weekend Escape',
      tagline:
        'Riverside cafes, Parvati river trail & secluded village homestay',
      duration: '3N / 4D',
      pickup: 'Delhi / Chandigarh',
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

  const packages =
    packagesData && packagesData.length > 0 ? packagesData : defaultPackages;

  return (
    <section
      id='packages'
      className='py-24 bg-brand-yellow text-coal-950 relative border-t border-coal-950/10'
    >
      <div className='site-container'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4'>
          <div>
            <p className='font-calligraphy text-coal-950 text-3xl mb-1'>
              Pakka Plan, Zero Bahane
            </p>
            <h2 className='font-sans text-3xl sm:text-5xl font-extrabold text-coal-950'>
              Curated Batches & Camps 
            </h2>
          </div>
          <p className='font-sans text-coal-800 text-sm sm:text-base max-w-md'>
            Har trip pe limited 14-16 seats taaki tourist bus wali feeling
            bilkul na aaye. Only pure community vibe.
          </p>
        </div>

        {/* 1920px 3-Column Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className='rounded-surface yellow-card overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group'
            >
              {/* Image & Badges */}
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

              {/* Card Body */}
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

                {/* Inclusions */}
                <div className='grid grid-cols-2 gap-2 py-4 border-y border-coal-950/10'>
                  {pkg.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className='flex items-center gap-2 text-xs font-sans font-medium text-coal-800'
                    >
                      <span className='w-4 h-4 rounded-full bg-brand-yellow flex items-center justify-center text-coal-950 font-bold'>
                        <Check className='w-2.5 h-2.5' />
                      </span>
                      {inc}
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className='flex items-center justify-between pt-2'>
                  <div>
                    <span className='text-xs text-coal-600 block font-sans'>
                      Starting at
                    </span>
                    <span className='font-sans font-black text-2xl text-coal-950'>
                      {pkg.price}
                    </span>
                    <span className='text-xs text-coal-600 font-sans'>
                      {' '}
                      / person
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hey!%20Mujhe%20${encodeURIComponent(pkg.title)}%20ki%20itinerary%20aur%20booking%20karni%20hai.`}
                    target='_blank'
                    rel='noreferrer'
                    className='px-5 py-3 rounded-pill bg-coal-950 text-brand-yellow font-sans font-bold text-xs uppercase tracking-wider hover:bg-coal-900 flex items-center gap-2 shadow-md transition-all active:scale-95'
                  >
                    Itinerary & Seat Lock
                    <ArrowRight className='w-4 h-4' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
