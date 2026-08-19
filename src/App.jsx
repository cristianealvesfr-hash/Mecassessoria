import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import Services from './components/Services';
import EventsCarousel from './components/EventsCarousel';
import ResultsPanel from './components/ResultsPanel';
import PaceCalculator from './components/PaceCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import CertificateModal from './components/CertificateModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfUseModal from './components/TermsOfUseModal';
import CookieBanner from './components/CookieBanner';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedEventForModal, setSelectedEventForModal] = useState(null);
  const [certificateResult, setCertificateResult] = useState(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleOpenRegistration = (event) => {
    setSelectedEventForModal(event);
  };

  const handleCloseRegistration = () => {
    setSelectedEventForModal(null);
  };

  const handleOpenCertificate = (resultData) => {
    setCertificateResult(resultData);
  };

  const handleCloseCertificate = () => {
    setCertificateResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-mec-text antialiased selection:bg-mec-blue selection:text-white">
      {/* Fixed Sticky Header */}
      <Navbar 
        onOpenEventModal={handleOpenRegistration}
      />

      {/* Main Landing Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenEventModal={handleOpenRegistration}
        />

        {/* 2. Social Proof / Stats Strip (#0099FF) */}
        <StatsBanner />

        {/* 3. Our Services (3-Cards Grid) */}
        <Services />

        {/* 4. Events Calendar (Ticket Sports Inspired Carousel) */}
        <EventsCarousel 
          onSelectEvent={handleOpenRegistration}
        />

        {/* 5. Differentiators & Authority */}
        <WhyChooseUs />

        {/* 6. Post-Race Results Finder (Search by Bib & Split Times) */}
        <ResultsPanel 
          onOpenCertificate={handleOpenCertificate}
        />

        {/* 7. Interactive Pace Calculator & Lead Magnet */}
        <PaceCalculator />

        {/* 8. Testimonials & FAQs */}
        <Testimonials />
      </main>

      {/* 9. Footer (#F8F9FA) */}
      <Footer 
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenTermsModal={() => setIsTermsModalOpen(true)}
      />

      {/* Cookie Consent Banner (LGPD) */}
      <CookieBanner 
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* Context-Aware Dynamic Floating WhatsApp & Instagram Buttons */}
      <FloatingWhatsApp />

      {/* Modals */}
      {selectedEventForModal && (
        <RegistrationModal 
          event={selectedEventForModal} 
          onClose={handleCloseRegistration} 
        />
      )}

      {certificateResult && (
        <CertificateModal 
          result={certificateResult} 
          onClose={handleCloseCertificate} 
        />
      )}

      {isPrivacyModalOpen && (
        <PrivacyPolicyModal 
          onClose={() => setIsPrivacyModalOpen(false)}
        />
      )}

      {isTermsModalOpen && (
        <TermsOfUseModal 
          onClose={() => setIsTermsModalOpen(false)}
        />
      )}
    </div>
  );
}
