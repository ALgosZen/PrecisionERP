import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModuleExplorer } from './components/ModuleExplorer';
import { ScopeCalculator } from './components/ScopeCalculator';
import { CaseStudies } from './components/CaseStudies';
import { Methodology } from './components/Methodology';
import { ComplianceSecurity } from './components/ComplianceSecurity';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RfpModal } from './components/RfpModal';
import './App.css';

export function App() {
  const [rfpModalOpen, setRfpModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState<string | undefined>(undefined);
  const [scopeSummary, setScopeSummary] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (subject?: string) => {
    setModalSubject(subject);
    setScopeSummary(undefined);
    setRfpModalOpen(true);
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultationWithScope = (summaryText: string) => {
    setModalSubject('Municipal Implementation Scope Estimate');
    setScopeSummary(summaryText);
    setRfpModalOpen(true);
  };

  return (
    <div className="app-layout">
      {/* Top Header & Navigation */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultation('Executive Municipal Briefing')}
        onOpenCalculator={handleOpenCalculator}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenConsultation={() => handleOpenConsultation('General Municipal Inquiry')}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 9 Core Government ERP Modules Explorer & Simulator */}
        <ModuleExplorer 
          onOpenConsultation={(modTitle) => handleOpenConsultation(modTitle ? `Module Consultation: ${modTitle}` : undefined)}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Interactive Scope & Timeline Estimator */}
        <ScopeCalculator 
          onOpenConsultationWithScope={handleOpenConsultationWithScope}
        />

        {/* Government Case Studies */}
        <CaseStudies 
          onOpenConsultation={(subject) => handleOpenConsultation(subject)}
        />

        {/* 6-Stage Implementation Blueprint */}
        <Methodology 
          onOpenConsultation={() => handleOpenConsultation('Implementation Blueprint Assessment')}
        />

        {/* Statutory Standards & Security */}
        <ComplianceSecurity />

        {/* Contact & Consultation Office */}
        <ContactSection 
          onOpenConsultation={() => handleOpenConsultation('Direct Council Inquiry')}
        />
      </main>

      {/* Comprehensive Civic Footer */}
      <Footer />

      {/* Municipal RFP & Briefing Request Modal */}
      <RfpModal 
        isOpen={rfpModalOpen}
        onClose={() => setRfpModalOpen(false)}
        initialInterest={modalSubject}
        scopeSummaryText={scopeSummary}
      />
    </div>
  );
}

export default App;
