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

export default function TripDetailPage() {
  const { slug } = useParams();
  const whatsappNumber = "919999999999";

  // Mock database object (ready to connect to backend MongoDB / Node API)
  const tripData = {
    title: "Chakrata Ridge Camping & Secret Night Walk",
    duration: "4N / 5D",
    price: "₹6,499",
    pickup: "Delhi / Dehradun",
    nextBatch: "Coming Friday Night",
    groupSize: "14 - 16 Folks Max",
    heroImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1600&auto=format&fit=crop",
    overview: "Forget standard commercial hill stations. Chakrata sits hidden at 7,000 ft in the Garhwal Himalayas. Expect pristine deodar forests, a scenic hike down to Tiger Falls, unfiltered evening campfires, and our signature guided midnight constellation walk on quiet ridge tops.",
    itinerary: [
      {
        title: "Day 1: The Midnight Escape from Delhi",
        headline: "Pick-up from Akshardham / Kashmiri Gate at 10:30 PM",
        details: "Board our comfortable push-back tempo traveler. Overnight road trip with curated road songs, midnight dhaba tea break at Murthal, and winding scenic hills by morning.",
        highlights: ["Overnight ride", "Midnight chai stops", "Icebreaker games"]
      },
      {
        title: "Day 2: Basecamp Check-in & Sunset Ridge Walk",
        headline: "Reach campsite by 11 AM, freshen up & hot Garhwali lunch",
        details: "Settle into alpine dome tents on twin/triple sharing. Post-lunch afternoon hike to Chilmiri sunset point for a 360° view of snow peaks. Night campfire with guitar and freshly grilled dinner.",
        highlights: ["Alpine dome tents", "Garhwali lunch", "Chilmiri sunset", "Campfire acoustic jam"]
      },
      {
        title: "Day 3: Tiger Falls Trek & Midnight Stargazing Walk",
        headline: "Hidden waterfall trail, natural pool dip & constellation trail",
        details: "Trek down to the magnificent Tiger Falls (one of the highest direct falls in India). Splash in mountain pools followed by pahadi Maggi. Post-dinner, guided silent night walk under raw starlight.",
        highlights: ["Tiger Falls hike", "Natural pools", "Midnight guided night walk", "Zero light pollution"]
      },
      {
        title: "Day 4: Sunrise Tea & Return Drive",
        headline: "Morning ridge sunrise, heavy breakfast & scenic return",
        details: "Catch sunrise with adrak chai over mountain horizons. Pack bags, group photo roll, and depart toward Dehradun/Delhi, reaching home by late night with new lifelong friends.",
        highlights: ["Sunrise tea", "Group polaroids", "Drop at Delhi Metro"]
      }
    ],
    inclusions: [
      "Delhi to Delhi AC Tempo Traveler transfers",
      "Alpine Dome Tents on Twin/Triple sharing",
      "All meals at campsite (Buffet Breakfast, Lunch & Campfire Dinner)",
      "Tiger Falls guided trek with forest entry permits",
      "Guided midnight night walk with mountain captains",
      "Evening bonfire, acoustic guitar jam & campfire snacks",
      "First aid support and certified trek leaders"
    ],
    exclusions: [
      "Any personal snacks, mineral water bottles, or cafe expenses",
      "Any adventure activities not mentioned in the plan",
      "Emergency medical or travel insurance"
    ],
    packingItems: [
      "Warm fleece jacket or hoodie (Chakrata drops to 12°C at night)",
      "Good grip sports shoes or trekking boots",
      "Reusable water bottle (No single-use plastic in hills)",
      "Power bank & torch/headlamp for the night walk",
      "Personal toiletries and mini towel",
      "Your raw, open vibe (Leave city stress behind)"
    ]
  };

  return (
    <div className="min-h-screen bg-brand-yellow text-coal-950 font-sans selection:bg-coal-950 selection:text-brand-yellow pb-24">
      <Navbar activeBatch="Chakrata Batch: Coming Weekend 🔥" whatsappNumber={whatsappNumber} />

      <main className="pt-28">
        <div className="site-container">
          
          {/* Back to Packages Link */}
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-coal-800 hover:text-coal-950 mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Wapas Sabhi Packages Par Jao
          </Link>

          {/* Hero Banner Container */}
          <div className="rounded-surface overflow-hidden yellow-card relative mb-10">
            <div className="h-72 sm:h-96 md:h-[450px] w-full relative">
              <img
                src={tripData.heroImage}
                alt={tripData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal-950/80 via-coal-950/20 to-transparent" />
              
              {/* Badges Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-pill bg-brand-yellow text-coal-950 font-sans font-bold text-xs inline-flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-coal-950" />
                  Filling Fast (Limited 16 Seats)
                </span>
                <h1 className="font-sans font-black text-3xl sm:text-5xl text-white">
                  {tripData.title}
                </h1>
              </div>
            </div>

            {/* Trip Quick Spec Bar */}
            <div className="p-6 bg-white grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-coal-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-yellow-deep" />
                <div>
                  <span className="text-[11px] text-coal-600 block">Duration</span>
                  <span className="font-sans font-bold text-sm text-coal-950">{tripData.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow-deep" />
                <div>
                  <span className="text-[11px] text-coal-600 block">Pick-up & Drop</span>
                  <span className="font-sans font-bold text-sm text-coal-950">{tripData.pickup}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brand-yellow-deep" />
                <div>
                  <span className="text-[11px] text-coal-600 block">Next Batch</span>
                  <span className="font-sans font-bold text-sm text-coal-950">{tripData.nextBatch}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-brand-yellow-deep" />
                <div>
                  <span className="text-[11px] text-coal-600 block">Batch Size</span>
                  <span className="font-sans font-bold text-sm text-coal-950">{tripData.groupSize}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Story & Overview */}
          <div className="p-8 rounded-card yellow-card mb-10 space-y-3">
            <span className="font-calligraphy text-coal-950 text-2xl">Trip Ka Scene Kya Hai?</span>
            <p className="font-sans text-coal-800 text-base sm:text-lg leading-relaxed">
              {tripData.overview}
            </p>
          </div>

          {/* Interactive Day-Wise Timeline */}
          <DayWiseTimeline itinerary={tripData.itinerary} />

          {/* Inclusions vs Exclusions */}
          <InclusionsExclusions
            inclusions={tripData.inclusions}
            exclusions={tripData.exclusions}
          />

{/* Packing Checklist */}
          <div className="mt-10">
            <PackingChecklist packingItems={tripData.packingItems} />
          </div>

          {/* Photo & Video Highlights Gallery */}
          <TripGallery />

        </div>
      </main>

      {/* Social Proof */}
      <TestimonialsSection />

      {/* Sticky Bottom Booking Bar */}
      <StickyBookingBar
        price={tripData.price}
        title={tripData.title}
        whatsappNumber={whatsappNumber}
      />

      <Footer />
    </div>
  );
}