import React, { useState } from 'react';
import type { ModuleId } from '../types/erp';
import { ERP_MODULES } from '../data/erpData';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Building, 
  Mail, 
  Phone, 
  FileUp, 
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  scopeSummaryText?: string;
}

export const RfpModal: React.FC<RfpModalProps> = ({ 
  isOpen, 
  onClose, 
  initialInterest, 
  scopeSummaryText 
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const [formData, setFormData] = useState({
    agencyName: '',
    state: 'California',
    contactName: '',
    officialTitle: '',
    email: '',
    phone: '',
    targetTimeline: 'Q1-Q2 2027',
    primaryInterest: initialInterest || 'Comprehensive Core ERP Suite',
    notes: scopeSummaryText || '',
    selectedModules: ['finance-gl', 'payroll'] as ModuleId[]
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `PERP-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setSubmitted(true);
  };

  const toggleModule = (id: ModuleId) => {
    setFormData(prev => ({
      ...prev,
      selectedModules: prev.selectedModules.includes(id)
        ? prev.selectedModules.filter(m => m !== id)
        : [...prev.selectedModules, id]
    }));
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-pane">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="text-emerald" />
            </div>
            <h3>Municipal Briefing Request Confirmed</h3>
            <p className="success-subtext">
              Thank you, <strong>{formData.contactName}</strong>. Your inquiry for <strong>{formData.agencyName}</strong> has been logged into our Public Sector Practice Group.
            </p>
            <div className="confirm-code-box">
              <small>Engagement Reference Tracking Code:</small>
              <strong className="mono text-cyan">{confirmationCode}</strong>
            </div>
            <div className="next-steps-list">
              <div className="step-item">
                <span className="step-dot">1</span>
                <span>Our Lead Municipal ERP Principal will review your agency profile and statutory requirements.</span>
              </div>
              <div className="step-item">
                <span className="step-dot">2</span>
                <span>You will receive a confidential calendar invitation and preliminary Municipal Gap Assessment checklist within 24 business hours.</span>
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Return to Portal
            </button>
          </div>
        ) : (
          <div className="modal-form-pane">
            <div className="modal-header">
              <span className="badge badge-cyan">PrecisionERP Advisory LLC</span>
              <h3 className="modal-title">Request City Briefing & RFP Review</h3>
              <p className="modal-desc">
                Engage directly with our certified government implementation directors. We provide confidential, vendor-neutral advisory for municipal leadership.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="rfp-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Municipality / Agency Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. City of Maplewood / Pierce County"
                    className="sim-input"
                    value={formData.agencyName}
                    onChange={e => setFormData({ ...formData, agencyName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>State / Jurisdiction *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Washington State"
                    className="sim-input"
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Katherine Hayes, CPA"
                    className="sim-input"
                    value={formData.contactName}
                    onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Official Municipal Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Finance Director / City Manager / CIO"
                    className="sim-input"
                    value={formData.officialTitle}
                    onChange={e => setFormData({ ...formData, officialTitle: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Official Government Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. khayes@maplewood.gov"
                    className="sim-input"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Direct Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. (555) 234-5678"
                    className="sim-input"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Module Multi-Select Pills */}
              <div className="form-group">
                <label>Modules Under Review (Select all that apply):</label>
                <div className="modal-modules-wrap">
                  {ERP_MODULES.map(m => {
                    const isSel = formData.selectedModules.includes(m.id);
                    return (
                      <button
                        key={m.id}
                        type="button"
                        className={`modal-mod-pill ${isSel ? 'selected' : ''}`}
                        onClick={() => toggleModule(m.id)}
                      >
                        {isSel && <CheckCircle2 size={12} />}
                        <span>{m.shortTitle}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="form-group">
                <label>Target Go-Live / Fiscal Year Window</label>
                <select
                  className="sim-select"
                  value={formData.targetTimeline}
                  onChange={e => setFormData({ ...formData, targetTimeline: e.target.value })}
                >
                  <option value="Immediate RFP In-Progress">Immediate RFP In-Progress (Current FY)</option>
                  <option value="Next Fiscal Year (July 1)">Next Fiscal Year (July 1 Target)</option>
                  <option value="Calendar Year (Jan 1)">Calendar Year (Jan 1 Target)</option>
                  <option value="Pre-RFP Strategic Discovery (12-18 Months)">Pre-RFP Strategic Discovery (12-18 Months)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Scope & Requirements Notes</label>
                <textarea
                  rows={3}
                  className="sim-textarea"
                  placeholder="Outline your existing systems, public safety union complexities, or specific RFP timeline requirements..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="form-footer">
                <div className="privacy-badge">
                  <ShieldCheck size={14} className="text-cyan" />
                  <span>Confidential government advisory. Protected under non-disclosure.</span>
                </div>
                <button type="submit" className="btn btn-gold">
                  <Send size={16} />
                  <span>Submit Municipal Consultation Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
