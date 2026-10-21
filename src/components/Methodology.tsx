import React from 'react';
import { METHODOLOGY_STAGES } from '../data/erpData';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface MethodologyProps {
  onOpenConsultation: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenConsultation }) => {
  return (
    <section id="methodology" className="methodology-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-cyan">Disciplined Municipal Execution</span>
          <h2 className="section-title">The Precision 6-Stage Implementation Blueprint</h2>
          <p className="section-description">
            Municipal ERP projects fail when treated like generic commercial software rollouts. Our methodology is built exclusively around public sector realities: union collective bargaining, statutory public notice, council approval gates, and multi-fund financial reconciliations.
          </p>
        </div>

        <div className="methodology-timeline">
          {METHODOLOGY_STAGES.map((stage, idx) => (
            <div key={stage.step} className="stage-card glass-card">
              <div className="stage-header">
                <span className="stage-number mono">{stage.step}</span>
                <span className="stage-duration-chip mono">{stage.duration}</span>
              </div>
              <h4 className="stage-title">{stage.title}</h4>
              <p className="stage-desc">{stage.description}</p>
              <div className="stage-footer">
                <CheckCircle2 size={15} className="text-emerald" />
                <span>Formal Municipal Steering Committee Gate</span>
              </div>
            </div>
          ))}
        </div>

        <div className="blueprint-banner glass-card">
          <div className="banner-text">
            <h4>Ready to Review Your City's ERP Readiness Assessment?</h4>
            <p>Our senior public sector implementation principals conduct comprehensive 3-day on-site or virtual gap analyses for municipal leadership.</p>
          </div>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onOpenConsultation}
          >
            <span>Schedule Municipal Readiness Review</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
