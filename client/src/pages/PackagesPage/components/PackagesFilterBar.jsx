import React from 'react';
import { Sparkles, MapPin, Calendar, Compass } from 'lucide-react';

export default function PackagesFilterBar({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
}) {
  const categories = [
    { id: 'all', label: 'Sabhi Trips (All)' },
    { id: 'weekend', label: 'Weekend Getaways (2-4D)' },
    { id: 'roadtrip', label: 'High Altitude Roadtrips' },
    { id: 'camping', label: 'Stargazing & Camps' },
  ];

  const locations = ['All Hubs', 'Ex-Delhi', 'Ex-Dehradun', 'Ex-Chandigarh'];

  return (
    <div className='space-y-4 mb-10'>
      {/* Category Pills */}
      <div className='flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none'>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-pill text-xs sm:text-sm font-sans font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-coal-950 text-brand-yellow shadow-md scale-105'
                : 'bg-white/80 text-coal-900 border border-coal-950/15 hover:bg-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Quick Location Chips */}
      <div className='flex items-center gap-2 text-xs font-sans'>
        <span className='text-coal-700 font-bold flex items-center gap-1'>
          <MapPin className='w-3.5 h-3.5 text-coal-950' /> Starting From:
        </span>
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`px-3 py-1 rounded-pill transition-colors cursor-pointer ${
              selectedLocation === loc
                ? 'bg-coal-950 text-white font-bold'
                : 'text-coal-800 hover:bg-coal-950/10'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>
    </div>
  );
}
