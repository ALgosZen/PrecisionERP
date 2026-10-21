import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Landmark, 
  Building2, 
  CheckCircle, 
  FileText,
  Play,
  Calculator
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenConsultation, 
  onOpenCalculator 
}) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Main Hero Header */}
        <div className="hero-content">
          <div className="hero-badge-row">
            <span className="badge badge-gold">
              <Landmark size={14} />
              <span>Government ERP Implementation LLC</span>
            </span>
            <span className="badge badge-cyan">
              <span>Cities • Towns • Counties</span>
            </span>
          </div>

          <h1 className="hero-headline">
            Mission-Critical Core ERP for <span className="gradient-text">Municipal Cities & Local Governments</span>
          </h1>

          <p className="hero-subhead">
            PrecisionERP Advisory & Implementation LLC delivers full-lifecycle implementations of core enterprise systems engineered specifically for public governance—mastering fund-based General Ledger, FLSA 7(k) public safety payroll, CIP project accounting, municipal fleet telematics, and civil service recruitment.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#modules" className="btn btn-primary">
              <span>Explore 9 Core City Modules</span>
              <ArrowRight size={16} />
            </a>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={onOpenCalculator}
            >
              <Calculator size={16} />
              <span>Estimate Municipal Timeline</span>
            </button>
            <button 
              type="button" 
              className="btn btn-gold"
              onClick={onOpenConsultation}
            >
              <span>Schedule City Briefing</span>
            </button>
          </div>

          {/* Verified Track Record Metrics */}
          <div className="hero-stats-strip">
            <div className="hero-stat-item">
              <span className="stat-number mono text-cyan">48+</span>
              <span className="stat-label">Municipal Go-Lives Completed</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="stat-number mono text-gold">100%</span>
              <span className="stat-label">On-Time & Within Budget</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="stat-number mono text-emerald">$3.8B+</span>
              <span className="stat-label">Public Funds Managed</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <span className="stat-number mono text-cyan">0</span>
              <span className="stat-label">GASB Audit Findings Post-Live</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Preview Card */}
        <div className="hero-visual-wrapper">
          <div className="hero-dashboard-preview glass-card">
            <div className="preview-top-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="preview-url-bar mono">
                <span>https://console.precisionerp.gov/city-of-metropolis/command</span>
              </div>
              <span className="badge badge-emerald badge-sm">Live Command</span>
            </div>

            <div className="preview-image-container">
              <img 
                src="/assets/precision_erp_hero.jpg" 
                alt="PrecisionERP Municipal City Dashboard Console" 
                className="hero-dashboard-img"
              />
              <div className="image-overlay-vignette"></div>

              {/* Floating Live Indicator Badges */}
              <div className="floating-badge badge-top-left glass-card animate-float">
                <div className="floating-icon bg-emerald">
                  <CheckCircle size={14} />
                </div>
                <div>
                  <strong>GASB 34/87/96 Verified</strong>
                  <small>General Fund 101 In-Balance</small>
                </div>
              </div>

              <div className="floating-badge badge-bottom-right glass-card animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="floating-icon bg-cyan">
                  <Activity size={14} />
                </div>
                <div>
                  <strong>Emergency Fleet Telematics</strong>
                  <small>145 Frontline Units Active • 99.4% Uptime</small>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left glass-card animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="floating-icon bg-gold">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <strong>FLSA 7(k) Public Safety Run</strong>
                  <small>Fire 24/48 & Police Dual-Run Matched</small>
                </div>
              </div>
            </div>

            <div className="preview-bottom-info">
              <div className="preview-feature-tag">
                <CheckCircle size={13} className="text-emerald" />
                <span>Multi-Fund General Ledger</span>
              </div>
              <div className="preview-feature-tag">
                <CheckCircle size={13} className="text-emerald" />
                <span>Civil Service Classification Matrix</span>
              </div>
              <div className="preview-feature-tag">
                <CheckCircle size={13} className="text-emerald" />
                <span>Capital Projects (CIP) & Grant SEFA</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
