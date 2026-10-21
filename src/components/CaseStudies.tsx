import React, { useState } from 'react';
import { MUNICIPAL_CASE_STUDIES } from '../data/erpData';
import type { CaseStudy } from '../types/erp';
import { 
  Building2, 
  Users, 
  DollarSign, 
  Calendar, 
  Quote, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  MapPin,
  ShieldCheck
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: (subject?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [activeStudyId, setActiveStudyId] = useState<string>(MUNICIPAL_CASE_STUDIES[0].id);

  const activeStudy = MUNICIPAL_CASE_STUDIES.find(s => s.id === activeStudyId) || MUNICIPAL_CASE_STUDIES[0];

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-emerald">Proven Track Record</span>
          <h2 className="section-title">Government & Municipal Case Studies</h2>
          <p className="section-description">
            Discover how PrecisionERP Advisory LLC has guided cities, regional fire districts, and county governments through seamless legacy migrations, complex union payrolls, and clean financial audits.
          </p>
        </div>

        {/* Client Selector Cards */}
        <div className="case-studies-tabs">
          {MUNICIPAL_CASE_STUDIES.map(study => {
            const isSelected = study.id === activeStudyId;
            return (
              <button
                key={study.id}
                type="button"
                className={`study-tab-card ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveStudyId(study.id)}
              >
                <div className="study-tab-top">
                  <span className="study-entity-type">{study.entityType}</span>
                  <span className="study-duration-badge mono">{study.implementationDuration}</span>
                </div>
                <h4 className="study-client-title">{study.clientName}</h4>
                <div className="study-meta-row">
                  <span><Users size={12} /> {study.population}</span>
                  <span><DollarSign size={12} /> {study.operatingBudget}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Deep Dive */}
        <div className="case-study-hero-card glass-card">
          <div className="study-header-bar">
            <div>
              <div className="study-tags-row">
                <span className="badge badge-cyan">{activeStudy.entityType}</span>
                <span className="badge badge-subtle"><MapPin size={12} /> {activeStudy.location}</span>
                <span className="badge badge-gold">Replaced: {activeStudy.legacySystem}</span>
              </div>
              <h3 className="study-headline">{activeStudy.headline}</h3>
            </div>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => onOpenConsultation(`Case Study Reference: ${activeStudy.clientName}`)}
            >
              <span>Request Full Case Briefing</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="study-body-grid">
            {/* Left: Challenge & Solution */}
            <div className="study-narrative-col">
              <div className="narrative-box">
                <h5 className="narrative-heading text-rose">
                  <span>Municipal Challenge</span>
                </h5>
                <p>{activeStudy.challenge}</p>
              </div>

              <div className="narrative-box">
                <h5 className="narrative-heading text-cyan">
                  <span>Precision Implementation Strategy</span>
                </h5>
                <p>{activeStudy.solution}</p>
              </div>

              <div className="modules-deployed-box">
                <small>Core Government Modules Deployed:</small>
                <div className="mod-tags-wrap">
                  {activeStudy.modulesDeployed.map((mod, i) => (
                    <span key={i} className="deployed-mod-tag">{mod}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Outcomes & Leadership Testimonial */}
            <div className="study-outcomes-col">
              <div className="outcomes-card">
                <h5 className="outcomes-heading">
                  <TrendingUp size={16} className="text-emerald" />
                  <span>Audited Municipal Outcomes</span>
                </h5>
                <ul className="outcomes-list">
                  {activeStudy.outcomes.map((outcome, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="text-emerald check-icon" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Quote */}
              <div className="testimonial-card">
                <Quote size={24} className="quote-icon text-cyan" />
                <p className="quote-text">"{activeStudy.testimonial.quote}"</p>
                <div className="quote-author">
                  <strong>{activeStudy.testimonial.author}</strong>
                  <span>{activeStudy.testimonial.role} • {activeStudy.clientName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
