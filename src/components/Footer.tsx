import React from 'react';
import { Landmark, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { ERP_MODULES } from '../data/erpData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="logo-icon-box">
                <Landmark size={20} className="logo-svg" />
              </div>
              <div className="logo-text-block">
                <span className="logo-name">Precision<strong>ERP</strong></span>
                <span className="logo-sub">ADVISORY & IMPLEMENTATION LLC</span>
              </div>
            </div>
            <p className="footer-about">
              PrecisionERP Advisory & Implementation LLC is a specialized public sector technology consultancy. We partner with city councils, mayors, town managers, and county commissioners to deliver resilient, audit-proof core ERP transformations.
            </p>
            <div className="footer-badges">
              <span className="badge badge-subtle">CAGE: 8VJ91</span>
              <span className="badge badge-emerald">GASB 96 / 87</span>
              <span className="badge badge-cyan">CJIS Level 4</span>
            </div>
          </div>

          {/* Module Links */}
          <div className="footer-col">
            <h5 className="footer-col-title">Municipal Core Modules</h5>
            <ul className="footer-links-list">
              {ERP_MODULES.slice(0, 5).map(m => (
                <li key={m.id}>
                  <a href="#modules">{m.shortTitle}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Operations & Talent</h5>
            <ul className="footer-links-list">
              {ERP_MODULES.slice(5).map(m => (
                <li key={m.id}>
                  <a href="#modules">{m.shortTitle}</a>
                </li>
              ))}
              <li><a href="#calculator">RFP Scope Calculator</a></li>
              <li><a href="#case-studies">City Case Studies</a></li>
            </ul>
          </div>

          {/* Practice Standards */}
          <div className="footer-col">
            <h5 className="footer-col-title">Statutory Standards</h5>
            <ul className="footer-links-list">
              <li><a href="#compliance">GASB 34 / 54 Fund Accounting</a></li>
              <li><a href="#compliance">GASB 87 / 96 Leases & SBITAs</a></li>
              <li><a href="#compliance">FLSA Section 7(k) Public Safety</a></li>
              <li><a href="#compliance">2 CFR 200 Federal Single Audit</a></li>
              <li><a href="#compliance">Civil Service Merit Standards</a></li>
              <li><a href="#compliance">GFOA Financial Reporting</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-line">
            © {new Date().getFullYear()} PrecisionERP Advisory & Implementation LLC. All rights reserved. Registered Limited Liability Company.
          </div>
          <div className="legal-links">
            <a href="#">Public Records (FOIA) Policy</a>
            <span>•</span>
            <a href="#">CJIS Compliance Statement</a>
            <span>•</span>
            <a href="#">Municipal Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
