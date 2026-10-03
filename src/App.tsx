/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PromoBanner } from './components/PromoBanner';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesOverview } from './components/ServicesOverview';
import { AboutSection } from './components/AboutSection';
import { CasesAndTestimonials } from './components/CasesAndTestimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServicesDetailPage } from './components/ServicesDetailPage';
import { BookingPage } from './components/BookingPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TreatmentModal } from './components/TreatmentModal';
import { clinicConfig, treatmentsData } from './data/clinicData';
import { Treatment } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('ortodoncia');

  // Handle browser URL synchronization and back/forward navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname || '/';
      const hash = window.location.hash || '';
      setCurrentRoute(hash ? `${path}${hash}` : path);

      // Handle smooth scroll to section if hash is present
      if (hash && hash.startsWith('#')) {
        setTimeout(() => {
          const el = document.getElementById(hash.substring(1));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Initial check for hash scrolling on load
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);

    if (route.startsWith('/#')) {
      const hash = route.substring(1);
      window.history.pushState({}, '', hash);
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.history.pushState({}, '', route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenWhatsAppGeneral = () => {
    const waUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClaimPromo = () => {
    setPreselectedBookingService('estetica-dental');
    navigateTo('/agendar');
  };

  const handleBookService = (serviceId: string) => {
    setActiveModalTreatment(null);
    setPreselectedBookingService(serviceId);
    navigateTo('/agendar');
  };

  const handleGoToFullServicePage = (slug: string) => {
    setActiveModalTreatment(null);
    navigateTo(`/servicios/${slug}`);
  };

  // Determine current view
  const isServicesPage = currentRoute.startsWith('/servicios');
  const isBookingPage = currentRoute === '/agendar';

  // Extract slug if /servicios/slug
  const serviceSlug = isServicesPage && currentRoute.startsWith('/servicios/')
    ? currentRoute.replace('/servicios/', '')
    : undefined;

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Top Promotional Banner (Dynamic CMS driven) */}
      <PromoBanner onClaimPromo={handleClaimPromo} />

      {/* Primary Fixed Navigation Bar (3-Zone Top Bar Contract) */}
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main View Switcher */}
      <main className="flex-1">
        {isBookingPage ? (
          <BookingPage
            initialServiceId={preselectedBookingService}
            onNavigate={navigateTo}
          />
        ) : isServicesPage ? (
          <ServicesDetailPage
            initialSlug={serviceSlug}
            onNavigate={navigateTo}
            onBookService={handleBookService}
          />
        ) : (
          /* Landing / Master Page (/) */
          <>
            <Hero
              onNavigate={navigateTo}
              onOpenWhatsApp={handleOpenWhatsAppGeneral}
            />

            <TrustBar />

            <ServicesOverview
              onSelectService={(treatment) => setActiveModalTreatment(treatment)}
              onNavigateToAll={() => navigateTo('/servicios')}
              onBookService={handleBookService}
            />

            <AboutSection
              onScheduleCall={() => navigateTo('/agendar')}
            />

            <CasesAndTestimonials />

            <FaqSection />

            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Quick Treatment Overview Modal */}
      {activeModalTreatment && (
        <TreatmentModal
          treatment={activeModalTreatment}
          onClose={() => setActiveModalTreatment(null)}
          onBook={handleBookService}
          onGoToFullPage={handleGoToFullServicePage}
        />
      )}
    </div>
  );
}
