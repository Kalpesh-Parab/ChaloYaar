import React from 'react';
import PackageCard from '../../../components/common/PackageCard';
import { packagesData as defaultPackages } from '../../PackagesPage/data/packagesData';

export default function PackagesSection({
  packagesData,
  whatsappNumber = '919437777695',
}) {
  // Use props if passed, otherwise fallback directly to your unified packages data file
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
            Har trip pe limited 16-20 seats taaki tourist bus wali feeling
            bilkul na aaye. Only pure community vibe.
          </p>
        </div>

        {/* 3-Column Responsive Grid Rendering Shared Card Component */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
