import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  Landmark
} from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [directSent, setDirectSent] = useState(false);
  const [inquiry, setInquiry] = useState({
    city: '',
    role: 'City Manager',
    email: '',
    phone: '',
    message: ''
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDirectSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-grid">
            {/* Left: LLC Information */}
            <div className="contact-info-col">
              <span className="badge badge-gold">Municipal Engagement Office</span>
              <h3 className="contact-heading">Partner with Certified Public Sector ERP Principals</h3>
              <p className="contact-sub">
                PrecisionERP Advisory & Implementation LLC provides confidential advisory to municipal elected officials, city managers, finance directors, and union leadership.
              </p>

              <div className="contact-details-stack">
                <div className="detail-item">
                  <div className="detail-icon"><Landmark size={18} /></div>
                  <div>
                    <strong>PrecisionERP Advisory & Implementation LLC</strong>
                    <p>Government Technology Center • Public Sector Practice</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon"><Mail size={18} /></div>
                  <div>
                    <strong>Direct Municipal Advisory Desk</strong>
                    <p>advisory@precisionerp.gov-advisory.com</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon"><Phone size={18} /></div>
                  <div>
                    <strong>Toll-Free City Council Hotline</strong>
                    <p>(800) 582-PRECISION • (800) 582-7732</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon"><Clock size={18} /></div>
                  <div>
                    <strong>Civic Response Commitment</strong>
                    <p>Formal written assessment provided within 24 business hours</p>
                  </div>
                </div>
              </div>

              <div className="cert-strip">
                <span className="badge badge-subtle">CAGE: 8VJ91</span>
                <span className="badge badge-subtle">SAM.gov Active</span>
                <span className="badge badge-subtle">GSA Schedule 70 Ready</span>
              </div>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="contact-form-col">
              {directSent ? (
                <div className="direct-success">
                  <CheckCircle2 size={42} className="text-emerald" />
                  <h4>Inquiry Successfully Logged</h4>
                  <p>Our Municipal ERP Practice Lead has received your message and will coordinate a confidential briefing tailored to your city's charter.</p>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setDirectSent(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="quick-inquiry-form">
                  <h4>Schedule a Municipal Discovery Session</h4>
                  <p>Request an introductory briefing on your city's timeline and legacy ERP replacement.</p>

                  <div className="form-group">
                    <label>Municipality / City / County *</label>
                    <input 
                      type="text" 
                      required 
                      className="sim-input" 
                      placeholder="e.g. City of Bellevue"
                      value={inquiry.city}
                      onChange={e => setInquiry({ ...inquiry, city: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Municipal Office / Role *</label>
                    <select 
                      className="sim-select"
                      value={inquiry.role}
                      onChange={e => setInquiry({ ...inquiry, role: e.target.value })}
                    >
                      <option value="City Manager / Administrator">City Manager / Administrator</option>
                      <option value="Finance Director / Chief Financial Officer">Finance Director / CFO</option>
                      <option value="Chief Information Officer / IT Director">CIO / IT Director</option>
                      <option value="HR / Civil Service Director">HR / Civil Service Director</option>
                      <option value="Public Works / Fleet Director">Public Works / Fleet Director</option>
                      <option value="Fire Chief / Police Chief">Fire Chief / Police Chief</option>
                      <option value="Elected Councilmember / Mayor">Elected Councilmember / Mayor</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Government Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      className="sim-input" 
                      placeholder="e.g. leadership@bellevuewa.gov"
                      value={inquiry.email}
                      onChange={e => setInquiry({ ...inquiry, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Specific Modules or Scope Focus</label>
                    <textarea 
                      rows={2} 
                      className="sim-textarea" 
                      placeholder="e.g., Replacing Tyler Munis, FLSA 7(k) public safety overtime, or GASB 87/96 lease schedules..."
                      value={inquiry.message}
                      onChange={e => setInquiry({ ...inquiry, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    <Send size={16} />
                    <span>Send Confidential Municipal Inquiry</span>
                  </button>

                  <div className="form-subtext">
                    <ShieldCheck size={13} className="text-emerald" />
                    <span>Strict public sector privacy guaranteed. No unsolicited sales calls.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
