import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  PhoneCall,
  Landmark
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation, 
  onOpenCalculator 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Gov Announcement Bar */}
      <div className="top-gov-bar">
        <div className="container top-bar-content">
          <div className="gov-notice">
            <span className="gov-flag">🏛️</span>
            <span><strong>PrecisionERP Advisory & Implementation LLC</strong> — Supporting City & County Governments Across North America</span>
          </div>
          <div className="gov-meta">
            <span className="badge badge-emerald badge-sm">GASB 96 / 87 Certified</span>
            <span className="badge badge-cyan badge-sm">CJIS Level 4 Ready</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container main-nav-container">
        <a href="#" className="brand-logo">
          <div className="logo-icon-box">
            <Landmark size={22} className="logo-svg" />
          </div>
          <div className="logo-text-block">
            <span className="logo-name">Precision<strong>ERP</strong></span>
            <span className="logo-sub">ADVISORY & IMPLEMENTATION LLC</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <a href="#modules" className="nav-link">Core Modules</a>
          <a href="#calculator" className="nav-link">Scope Estimator</a>
          <a href="#case-studies" className="nav-link">City Case Studies</a>
          <a href="#methodology" className="nav-link">Implementation Blueprint</a>
          <a href="#compliance" className="nav-link">GASB & Security</a>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-secondary btn-sm"
            onClick={onOpenCalculator}
          >
            <span>Scope Calculator</span>
          </button>
          <button 
            type="button" 
            className="btn btn-gold btn-sm"
            onClick={onOpenConsultation}
          >
            <PhoneCall size={14} />
            <span>Schedule Briefing</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          type="button" 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay glass-card">
          <nav className="mobile-nav-links">
            <a href="#modules" onClick={() => setMobileMenuOpen(false)}>Core Modules (9 Systems)</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>RFP & Scope Calculator</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Government Case Studies</a>
            <a href="#methodology" onClick={() => setMobileMenuOpen(false)}>6-Stage Implementation Blueprint</a>
            <a href="#compliance" onClick={() => setMobileMenuOpen(false)}>Statutory Compliance (GASB / FLSA)</a>
          </nav>
          <div className="mobile-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-block"
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
            >
              <span>Schedule Municipal Consultation</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
