import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import FoundersManifesto from './components/FoundersManifesto';
import CaptainsDeck from './components/CaptainsDeck';
import CommunityRules from './components/CommunityRules';
import ContactSection from '../HomePage/components/ContactSection';

export default function AboutUsPage() {
  const whatsappNumber = "919999999999";

  return (
    <div className="min-h-screen bg-brand-yellow text-coal-950 font-sans selection:bg-coal-950 selection:text-brand-yellow">
      <Navbar activeBatch="Chakrata Batch: Coming Weekend 🔥" whatsappNumber={whatsappNumber} />

      <main className="pt-28">
        <FoundersManifesto />
        <CaptainsDeck />
        <CommunityRules />
        <ContactSection whatsappNumber={whatsappNumber} />
      </main>

      <Footer />
    </div>
  );
}