import React, { useState } from 'react';
import { Play, Image as ImageIcon, X } from 'lucide-react';

export default function TripGallery({ media = [] }) {
  const [activeMedia, setActiveMedia] = useState(null);

  const defaultMedia = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop',
      caption: 'Basecamp under the Deodar pines at dusk',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop',
      caption: 'Campfire acoustic session & storytelling circle',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
      caption: 'Early morning ridge walk with hot Garhwali chai',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop',
      caption: 'Alpine dome tent setups (twin & triple sharing)',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      caption: 'Tiger Falls stream dip & trail memories',
    },
  ];

  const galleryList = media.length > 0 ? media : defaultMedia;

  return (
    <section className="mt-12 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-calligraphy text-coal-950 text-2xl">Unfiltered Visuals</span>
          <h3 className="font-sans font-extrabold text-2xl text-coal-950">
            Trip Ki Jhalak 📸
          </h3>
        </div>
        <span className="text-xs font-sans text-coal-700 font-semibold hidden sm:inline-block">
          Real shots from our previous batches
        </span>
      </div>

      {/* Responsive Media Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[190px]">
        {galleryList.map((item, idx) => {
          // Bento layout styling: first item takes double height and width on desktop
          const isFeatured = idx === 0;
          return (
            <div
              key={idx}
              onClick={() => setActiveMedia(item)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group yellow-card border border-coal-950/10 ${
                isFeatured ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5 sm:p-4 text-white">
                <span className="text-xs font-sans font-semibold line-clamp-2">
                  {item.caption}
                </span>
              </div>

              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow text-coal-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-coal-950 ml-0.5" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 bg-coal-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-coal-900 border border-coal-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-coal-950/80 text-white hover:text-brand-yellow z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeMedia.type === 'video' ? (
              <video controls autoPlay className="w-full max-h-[80vh] object-cover">
                <source src={activeMedia.url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={activeMedia.url}
                alt={activeMedia.caption}
                className="w-full max-h-[80vh] object-contain"
              />
            )}

            <div className="p-4 bg-coal-950 text-white text-sm font-sans text-center">
              {activeMedia.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}