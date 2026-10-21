import React from 'react';
import { COMPLIANCE_STANDARDS } from '../data/erpData';
import { ShieldCheck, FileCheck, Lock, Landmark, Award } from 'lucide-react';

export const ComplianceSecurity: React.FC = () => {
  return (
    <section id="compliance" className="compliance-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">Audited Government Standards</span>
          <h2 className="section-title">Statutory Compliance & Security Mandates</h2>
          <p className="section-description">
            City managers and council members bear personal and fiduciary accountability for public fund management. Every PrecisionERP implementation conforms to federal, state, and local accounting standards.
          </p>
        </div>

        <div className="compliance-cards-grid">
          {COMPLIANCE_STANDARDS.map((std, idx) => (
            <div key={std.code} className="compliance-box glass-card">
              <div className="compliance-top">
                <span className="std-code mono">{std.code}</span>
                <span className="badge badge-subtle">Statutory Standard</span>
              </div>
              <h4 className="std-name">{std.name}</h4>
              <p className="std-detail">{std.detail}</p>
              <div className="compliance-verified">
                <ShieldCheck size={16} className="text-emerald" />
                <span>Verified in Independent Municipal Audits</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & FedRAMP callout */}
        <div className="security-callout-strip glass-card">
          <div className="sec-icon-wrap">
            <Lock size={28} className="text-cyan" />
          </div>
          <div className="sec-text">
            <strong>Public Sector Data Sovereignty & CJIS Security Compliance</strong>
            <p>All client data, public safety personnel records, and municipal banking interfaces are deployed in FedRAMP High and StateRAMP certified government cloud environments with 256-bit AES encryption at rest and in transit.</p>
          </div>
          <div className="sec-badges">
            <span className="badge badge-cyan">FedRAMP High</span>
            <span className="badge badge-gold">CJIS Level 4</span>
            <span className="badge badge-emerald">SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </section>
  );
};
