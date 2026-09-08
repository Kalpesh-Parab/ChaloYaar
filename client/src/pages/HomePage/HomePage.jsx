import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ScrollDescender from '../../components/common/ScrollDescender'; // <-- Use ScrollDescender

import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import PackagesSection from './components/PackagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  const [pageData] = useState({
    siteConfig: {
      activeBatch: 'Chakrata Batch: Coming Weekend 🔥',
      whatsappNumber: '8446257619',
    },
    hero: {
      badge: 'CHAKRATA WEEKEND BATCH LIVE',
      calligraphySub:
        'Where strangers turn into bonfire buddies & weekend stories.',
      mainHeadingPrefix: 'WhatsApp pe plans banana band karo,',
      mainHeadingAccent: 'chalo yaar!',
      videoSrc: '/hero-camp.mp4',
      subHeading:
        'High-altitude camping at 7,000 ft, unfiltered campfires, secret night walks, and zero awkward corporate vibes. Solo ho ya group ke saath — sab sorted hai.',
      stats: [
        { label: '70% Solo Travelers', desc: 'No lonely scenes' },
        { label: 'Ghar Jaisa Pahadi Khana', desc: 'Garhwali meals included' },
        { label: 'Night Walk & Campfire', desc: 'Guided by captains' },
        { label: 'Zero Hidden Costs', desc: 'Jo bola, wahi milega' },
      ],
    },
    about: {
      tag: 'SCENE KYA HAI?',
      calligraphyAccent: 'Kyunki zindagi screens ke piche nahi bitti...',
      title: 'WhatsApp groups mein trips plan karna band karo.',
      story:
        "We got tired of planned trips dying in group chats with 'bhai agle mahine pakka'. So Chalo Yaar was born on 31st August — an unpretentious circle of backpackers, bonfire lovers, and weekend wanderers who actually show up.",
    },
    packages: [],
    testimonials: null,
  });

  return (
    <div className='min-h-screen bg-brand-yellow text-coal-950 font-sans selection:bg-coal-950 selection:text-brand-yellow'>
      <Navbar
        activeBatch={pageData.siteConfig.activeBatch}
        whatsappNumber={pageData.siteConfig.whatsappNumber}
      />

      {/* Renders desktop cliff descent AND mobile top tracker */}
      <ScrollDescender />

      <main>
        <HeroSection
          heroData={{
            ...pageData.hero,
            whatsappNumber: pageData.siteConfig.whatsappNumber,
          }}
        />
        <AboutUsSection aboutData={pageData.about} />
        <PackagesSection
          packagesData={pageData.packages}
          whatsappNumber={pageData.siteConfig.whatsappNumber}
        />
        <TestimonialsSection testimonialsData={pageData.testimonials} />
        <ContactSection whatsappNumber={pageData.siteConfig.whatsappNumber} />
      </main>

      <Footer />
    </div>
  );
}
