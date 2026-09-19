import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ScrollDescender from '../../components/common/ScrollDescender';
import PackagesFilterBar from './components/PackagesFilterBar';
import PackageCard from '../../components/common/PackageCard';
import TestimonialsSection from '../HomePage/components/TestimonialsSection';
import ContactSection from '../HomePage/components/ContactSection';
import { packagesData } from './data/packagesData';

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('All Hubs');
  const whatsappNumber = '9437777695';

  const filteredPackages = packagesData.filter((pkg) => {
    const matchesCat =
      selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesLoc =
      selectedLocation === 'All Hubs' ||
      (pkg.pickup &&
        pkg.pickup.toLowerCase().includes(selectedLocation.toLowerCase()));
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

          <PackagesFilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </main>

      <TestimonialsSection />
      <ContactSection whatsappNumber={whatsappNumber} />
      <Footer />
    </div>
  );
}
