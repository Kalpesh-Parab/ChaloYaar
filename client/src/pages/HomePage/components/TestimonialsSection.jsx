import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection({ testimonialsData }) {
  const defaultReviews = [
    {
      quote:
        'Bhai solo gaya tha Chakrata camping ke liye. Boarding ke time laga ajeeb hoga, but campfire tak sab dost ban chuke the. Best weekend escape!',
      author: 'Rohan Verma',
      location: 'Joined Solo from Delhi',
      trip: 'Chakrata Night Walk Batch',
      rating: 5,
    },
    {
      quote:
        'No commercial tourist rush. Captain made authentic Garhwali khana and the midnight stargazing ridge walk was pure magic.',
      author: 'Sneha Kulkarni',
      location: 'Traveled with 2 friends',
      trip: 'Chakrata Weekend Escape',
      rating: 5,
    },
    {
      quote:
        'Clean tents, zero hidden costs jo call pe bole the wahi raha. Highly recommended for people who hate boring family tour packages.',
      author: 'Aditya & Gang',
      location: 'Chandigarh',
      trip: 'Ridge Camping & Trek',
      rating: 5,
    },
  ];

  const reviews = testimonialsData || defaultReviews;

  return (
    <section
      id='testimonials'
      className='py-24 bg-brand-yellow text-coal-950 relative border-t border-coal-950/10'
    >
      <div className='site-container'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16 space-y-2'>
          <p className='font-calligraphy text-coal-950 text-3xl'>
            Unfiltered Yaari Stories
          </p>
          <h2 className='font-sans text-3xl sm:text-5xl font-extrabold text-coal-950'>
            Log Kya Keh Rahe Hain?
          </h2>
          <p className='font-sans text-coal-800 text-sm sm:text-base'>
            Na koi paid models, na PR. Bas real travelers aur unki unfiltered
            pahadi yaadein.
          </p>
        </div>

        {/* 1920px 3-Column Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className='p-8 rounded-card yellow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group'
            >
              <div className='space-y-4'>
                {/* 5-Star Rating */}
                <div className='flex items-center gap-1 text-coal-950'>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className='w-4 h-4 fill-coal-950' />
                  ))}
                </div>

                <Quote className='w-8 h-8 text-brand-yellow-deep opacity-80' />

                <p className='font-sans text-coal-900 text-sm sm:text-base leading-relaxed italic'>
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className='pt-6 mt-6 border-t border-coal-950/10'>
                <p className='font-sans font-bold text-coal-950 text-base'>
                  {rev.author}
                </p>
                <p className='font-sans text-xs font-semibold text-coal-700'>
                  {rev.location}
                </p>
                <p className='font-sans text-[11px] text-coal-600 mt-0.5'>
                  {rev.trip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
