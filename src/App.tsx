import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { HowItWorks } from './components/HowItWorks';
import { SamplePolicyPreview } from './components/SamplePolicyPreview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { FutureReadySection } from './components/FutureReadySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SamplePolicyModal } from './components/SamplePolicyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal } from './components/LegalModal';
import { ServiceItem } from './types';

export default function App() {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [contactServicePreset, setContactServicePreset] = useState<string>(
    'ShieldScribe Security Documentation Starter Pack ($199)'
  );

  const scrollToContact = (servicePreset?: string) => {
    if (servicePreset) {
      setContactServicePreset(servicePreset);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-[#F8FAFC] selection:bg-[#3B82F6]/30 selection:text-[#2DD4BF]">
      {/* Navigation */}
      <Navbar
        onOpenContact={scrollToContact}
        onOpenSample={() => setIsSampleModalOpen(true)}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Section 2: Hero */}
        <Hero
          onOpenSample={() => setIsSampleModalOpen(true)}
          onExploreServices={scrollToServices}
        />

        {/* Section 3: The Problem */}
        <ProblemSection onExploreServices={scrollToServices} />

        {/* Section 4: Our Services */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceForModal(service)}
          onRequestPackage={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* Section 5: Pricing */}
        <PricingSection
          onRequestPackage={() =>
            scrollToContact('ShieldScribe Security Documentation Starter Pack ($199)')
          }
        />

        {/* Section 6: How It Works */}
        <HowItWorks
          onRequestPackage={() =>
            scrollToContact('ShieldScribe Security Documentation Starter Pack ($199)')
          }
        />

        {/* Section 7: Sample Policy Preview */}
        <SamplePolicyPreview
          onOpenFullSample={() => setIsSampleModalOpen(true)}
        />

        {/* Section 8: Why Choose ShieldScribe */}
        <WhyChooseUs />

        {/* Section 9: About ShieldScribe */}
        <AboutSection
          onContactFounder={() => scrollToContact('General Documentation Inquiry')}
        />

        {/* Section 10: Future-Ready Cybersecurity (Preparing Businesses for AI Era) */}
        <FutureReadySection
          onJoinWaitlist={(serviceName) => scrollToContact(`Waitlist Inquiry: ${serviceName}`)}
        />

        {/* Section 11: FAQ */}
        <FAQSection />

        {/* Section 12: Contact & Customer Enquiry */}
        <ContactSection
          selectedServicePreset={contactServicePreset}
          onClearPreset={() =>
            setContactServicePreset('ShieldScribe Security Documentation Starter Pack ($199)')
          }
        />
      </main>

      {/* Section 13: Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenSample={() => setIsSampleModalOpen(true)}
        onScrollToTop={scrollToTop}
      />

      {/* Interactive Modals */}
      <SamplePolicyModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onRequestStarterPack={() => {
          setIsSampleModalOpen(false);
          scrollToContact('ShieldScribe Security Documentation Starter Pack ($199)');
        }}
      />

      <ServiceDetailModal
        service={selectedServiceForModal}
        isOpen={selectedServiceForModal !== null}
        onClose={() => setSelectedServiceForModal(null)}
        onRequestService={(title) => {
          setSelectedServiceForModal(null);
          scrollToContact(title);
        }}
      />

      <LegalModal
        type={legalModalType}
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
