import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import ContactSection from '../HomePage/components/ContactSection';
import { ChevronDown, HelpCircle, ShieldCheck, Tent, IndianRupee, HeartHandshake } from 'lucide-react';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'Sabhi Sawal (All)', icon: HelpCircle },
    { id: 'camping', label: 'Campsite & Stays', icon: Tent },
    { id: 'safety', label: 'Safety & Solo Travelers', icon: ShieldCheck },
    { id: 'booking', label: 'Payment & Cancellations', icon: IndianRupee },
  ];

  const faqs = [
    {
      category: 'camping',
      question: 'Washrooms ka kya scene hota hai camping mein?',
      answer:
        'Hum jungle mein raw tents zaroor lagate hain, but hygiene pe zero compromise hai. Humare basecamps par dedicated, clean western/Indian dry washroom setups ya attached brick-and-mortar washrooms hote hain running water ke saath.',
    },
    {
      category: 'safety',
      question: 'Main solo ladki hoon, kya ye trip mere liye 100% safe hai?',
      answer:
        'Hamare batches mein 70%+ travelers solo aate hain aur unme se 40-50% female travelers hoti hain. Har batch mein certified trip leads hote hain, zero-tolerance anti-harassment policy hai, aur tent sharing sirf female-with-female basis par hi hoti hai.',
    },
    {
      category: 'camping',
      question: 'Khaana kaisa milega? Maggi ke alawa kuch hota hai?',
      answer:
        'Bilkul! Hum local pahadi chefs ke haath ka bana taaza Garhwali aur Himachali khana serve karte hain. Breakfast mein paranthe/poha/eggs aur dinner mein paneer, dal, local sabzi, roti, rice aur campfire snacks rehte hain.',
    },
    {
      category: 'safety',
      question: 'Agar mujhe trekking ka koi experience nahi hai toh?',
      answer:
        'Chakrata Ridge Walk aur Tiger Falls jaise weekend escapes beginner-friendly hote hain. Speed ka koi pressure nahi hai—Captain sabse peeche reh kar group ka pace balance karta hai.',
    },
    {
      category: 'booking',
      question: 'Seat book karne ke liye kitna advance dena padta hai?',
      answer:
        'Bas ₹2,000/- token advance dekar WhatsApp par apni seat block kar sakte ho. Baki ka amount trip departure se 24 ghante pehle clear karna hota hai.',
    },
    {
      category: 'booking',
      question: 'Agar last minute emergency aa gayi toh cancellation refund milega?',
      answer:
        'Trip departure se 7 din pehle inform karne par 100% credit shell milta hai jise aap agle 6 mahine mein kisi bhi Chalo Yaar trip ke liye redeem kar sakte ho. Departure se 48 ghante pehle cancel karne par token non-refundable rehta hai kyunki vehicles aur camps pre-booked hote hain.',
    },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-yellow text-coal-950 font-sans selection:bg-coal-950 selection:text-brand-yellow">
      <Navbar activeBatch="Chakrata Batch: Coming Weekend 🔥" whatsappNumber="8446257619" />

      <main className="pt-36 pb-20">
        <div className="site-container max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-12">
            <span className="font-calligraphy text-coal-950 text-3xl">Dimaag Mein Koi Doubt?</span>
            <h1 className="font-sans text-4xl sm:text-6xl font-extrabold text-coal-950">
              Clear & Honest Answers 
            </h1>
            <p className="font-sans text-coal-800 text-sm sm:text-base">
              Pahad jaane se pehle saare doubts sort kar lo. Jo bola, wahi milega.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-pill text-xs sm:text-sm font-sans font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-coal-950 text-brand-yellow shadow-md scale-105'
                      : 'bg-white/80 text-coal-900 border border-coal-950/15 hover:bg-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl yellow-card border border-coal-950/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer bg-white hover:bg-coal-50 transition-colors"
                  >
                    <span className="font-sans font-bold text-base sm:text-lg text-coal-950 pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full bg-coal-100 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-brand-yellow' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-coal-950" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 font-sans text-sm sm:text-base text-coal-800 leading-relaxed border-t border-coal-100 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <ContactSection whatsappNumber="8446257619" />
      <Footer />
    </div>
  );
}