import React, { useState } from 'react';
import { ERP_MODULES } from '../data/erpData';
import type { ModuleId } from '../types/erp';
import { ModuleSimulator } from './ModuleSimulator';
import { 
  Landmark, 
  Receipt, 
  Users, 
  FolderGit2, 
  Truck, 
  Boxes, 
  UserCheck, 
  Clock, 
  ShieldAlert, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Shield,
  FileCheck2
} from 'lucide-react';

interface ModuleExplorerProps {
  onOpenConsultation: (moduleTitle?: string) => void;
  onOpenCalculator: () => void;
}

export const ModuleExplorer: React.FC<ModuleExplorerProps> = ({ 
  onOpenConsultation, 
  onOpenCalculator 
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<ModuleId>('finance-gl');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fiscal', 'Workforce', 'Operations', 'Governance'];

  const filteredModules = selectedCategory === 'All' 
    ? ERP_MODULES 
    : ERP_MODULES.filter(m => m.category === selectedCategory);

  const activeModule = ERP_MODULES.find(m => m.id === selectedModuleId) || ERP_MODULES[0];

  const getModuleIcon = (id: ModuleId) => {
    switch (id) {
      case 'finance-gl': return <Landmark size={20} />;
      case 'payroll': return <Receipt size={20} />;
      case 'hr-civil-service': return <Users size={20} />;
      case 'project-accounting': return <FolderGit2 size={20} />;
      case 'fleet-mgmt': return <Truck size={20} />;
      case 'inventory': return <Boxes size={20} />;
      case 'recruitment-onboarding': return <UserCheck size={20} />;
      case 'time-labor': return <Clock size={20} />;
      case 'offboarding': return <ShieldAlert size={20} />;
      default: return <Landmark size={20} />;
    }
  };

  return (
    <section id="modules" className="module-explorer-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-cyan">Comprehensive Public Sector Architecture</span>
          <h2 className="section-title">Core Municipal ERP Implementation Modules</h2>
          <p className="section-description">
            Explore our specialized, battle-tested implementations tailored for cities, towns, and county governments. Each module is engineered for strict statutory compliance, union rules, and civic audit readiness.
          </p>

          {/* Category Filter Pills */}
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All' ? 'All 9 Core Modules' : `${cat} Systems`}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid / Selector Bar */}
        <div className="module-nav-grid">
          {filteredModules.map(mod => {
            const isSelected = mod.id === selectedModuleId;
            return (
              <button
                key={mod.id}
                type="button"
                className={`module-nav-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedModuleId(mod.id)}
              >
                <div className="module-nav-icon-wrapper">
                  {getModuleIcon(mod.id)}
                </div>
                <div className="module-nav-text">
                  <span className="module-nav-category">{mod.category}</span>
                  <strong className="module-nav-title">{mod.shortTitle}</strong>
                </div>
                <span className="module-nav-badge">{mod.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Detailed Showcase Card */}
        <div className="active-module-container glass-card">
          {/* Top Banner & Overview */}
          <div className="active-module-header">
            <div className="active-header-left">
              <div className="active-icon-badge">
                {getModuleIcon(activeModule.id)}
              </div>
              <div>
                <div className="active-badges-row">
                  <span className="badge badge-cyan">{activeModule.category} Module</span>
                  <span className="badge badge-gold">{activeModule.badge}</span>
                  {activeModule.statutoryStandards.map((std, i) => (
                    <span key={i} className="badge badge-subtle">{std}</span>
                  ))}
                </div>
                <h3 className="active-module-h3">{activeModule.title}</h3>
                <p className="active-module-summary">{activeModule.summary}</p>
              </div>
            </div>

            <div className="active-header-actions">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenConsultation(activeModule.title)}
              >
                <span>Request {activeModule.shortTitle} Briefing</span>
                <ChevronRight size={16} />
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onOpenCalculator}
              >
                <span>Scope Implementation</span>
              </button>
            </div>
          </div>

          {/* Impact Metrics Strip */}
          <div className="module-metrics-strip">
            {activeModule.impactMetrics.map((metric, idx) => (
              <div key={idx} className="metric-box">
                <div className="metric-val mono">{metric.value}</div>
                <div className="metric-lbl">{metric.label}</div>
                <div className="metric-ctx">{metric.context}</div>
              </div>
            ))}
          </div>

          {/* Interactive Live Console Simulator */}
          <ModuleSimulator module={activeModule} />

          {/* Two-Column Deep Dive: Challenges & Capabilities */}
          <div className="module-deepdive-grid">
            {/* Left: Municipal Challenges Solved */}
            <div className="deepdive-col">
              <h4 className="deepdive-heading">
                <Shield className="text-cyan" size={18} />
                <span>Municipal Roadblocks Solved</span>
              </h4>
              <ul className="challenge-list">
                {activeModule.challengesSolved.map((item, idx) => (
                  <li key={idx} className="challenge-item">
                    <CheckCircle size={18} className="text-emerald check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Core City Capabilities */}
            <div className="deepdive-col">
              <h4 className="deepdive-heading">
                <FileCheck2 className="text-gold" size={18} />
                <span>Core Architectural Capabilities</span>
              </h4>
              <div className="capabilities-stack">
                {activeModule.capabilities.map((cap, idx) => (
                  <div key={idx} className="capability-card">
                    <div className="cap-top">
                      <strong>{cap.title}</strong>
                      {cap.complianceRef && (
                        <span className="cap-ref">{cap.complianceRef}</span>
                      )}
                    </div>
                    <p>{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
