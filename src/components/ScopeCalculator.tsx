import React, { useState } from 'react';
import type { ModuleId, ScopeResult } from '../types/erp';
import { ERP_MODULES } from '../data/erpData';
import { 
  Calculator, 
  Clock, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  HelpCircle,
  FileSpreadsheet,
  AlertTriangle
} from 'lucide-react';

interface ScopeCalculatorProps {
  onOpenConsultationWithScope: (summaryText: string) => void;
}

export const ScopeCalculator: React.FC<ScopeCalculatorProps> = ({ 
  onOpenConsultationWithScope 
}) => {
  const [populationTier, setPopulationTier] = useState<string>('mid');
  const [legacySystem, setLegacySystem] = useState<string>('tyler');
  const [selectedModules, setSelectedModules] = useState<ModuleId[]>([
    'finance-gl',
    'payroll',
    'time-labor',
    'project-accounting'
  ]);
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([
    'bank-ach',
    'gis-esri'
  ]);

  const toggleModule = (id: ModuleId) => {
    setSelectedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Dynamic scope calculation logic
  const calculateScope = (): ScopeResult => {
    let baseWeeks = 20;

    // Population complexity factor
    if (populationTier === 'small') baseWeeks = 16;
    if (populationTier === 'mid') baseWeeks = 24;
    if (populationTier === 'large') baseWeeks = 34;
    if (populationTier === 'county') baseWeeks = 44;

    // Module additions
    baseWeeks += selectedModules.length * 2.5;

    // Integrations
    baseWeeks += selectedIntegrations.length * 1.5;

    // Legacy migration complexity
    if (legacySystem === 'as400' || legacySystem === 'inhouse') baseWeeks += 6;

    const roundedWeeks = Math.round(baseWeeks);
    const months = (roundedWeeks / 4.3).toFixed(1);

    // Determine phases
    const phase1Mods: string[] = [];
    const phase2Mods: string[] = [];
    const phase3Mods: string[] = [];

    selectedModules.forEach(modId => {
      const mod = ERP_MODULES.find(m => m.id === modId);
      if (!mod) return;
      if (mod.id === 'finance-gl' || mod.id === 'project-accounting') {
        phase1Mods.push(mod.shortTitle);
      } else if (mod.id === 'payroll' || mod.id === 'time-labor' || mod.id === 'hr-civil-service') {
        phase2Mods.push(mod.shortTitle);
      } else {
        phase3Mods.push(mod.shortTitle);
      }
    });

    const roadmapPhases = [
      {
        phase: 'Phase 1: Fiscal Foundation & Core GL',
        duration: `${Math.round(roundedWeeks * 0.35)} Weeks`,
        modules: phase1Mods.length > 0 ? phase1Mods : ['Chart of Accounts & Core GL'],
        criticalMilestone: 'Fund balance reconciliation, open encumbrance lock & auditor sign-off'
      },
      {
        phase: 'Phase 2: Public Workforce & Certified Payroll',
        duration: `${Math.round(roundedWeeks * 0.40)} Weeks`,
        modules: phase2Mods.length > 0 ? phase2Mods : ['Workforce & FLSA Timekeeping'],
        criticalMilestone: 'Minimum 3 consecutive dual-run parallel pay cycles with 100% net match'
      },
      {
        phase: 'Phase 3: Operations, Fleet & Field Asset Execution',
        duration: `${Math.round(roundedWeeks * 0.25)} Weeks`,
        modules: phase3Mods.length > 0 ? phase3Mods : ['Fleet & Central Warehouse Inventory'],
        criticalMilestone: 'Mobile field barcode validation, work-order billing & final cutover'
      }
    ];

    let complexityTier: ScopeResult['complexityTier'] = 'Standard Municipal';
    if (roundedWeeks > 32) complexityTier = 'Comprehensive Metro Enterprise';
    else if (roundedWeeks > 22) complexityTier = 'Accelerated Civic';

    return {
      estimatedDurationWeeks: roundedWeeks,
      phaseCount: 3,
      complexityTier,
      roadmapPhases,
      statutoryChecklist: [
        'GASB 34 / 54 Fund Accounting Hierarchy Established',
        'GASB 87 / 96 Leases and Software Subscriptions Amortized',
        'FLSA Section 7(k) Public Safety 14/28-Day Rules Validated',
        'CJIS Level 4 Background & Access Security Sign-off',
        'State Public Retirement (PERS/TRS) Reporting Interface Tested'
      ],
      changeManagementRecommendation: `Recommended for ${populationTier.toUpperCase()} tier: 1 Lead Municipal Project Manager, 2 Department SME Champions, and 120 Hours of Hands-on Staff Sandbox Practice.`
    };
  };

  const scope = calculateScope();

  const handleGenerateSummary = () => {
    const summary = `Municipal Scope Request:
- Population Tier: ${populationTier}
- Current Legacy System: ${legacySystem}
- Selected Modules (${selectedModules.length}): ${selectedModules.join(', ')}
- Target Integrations: ${selectedIntegrations.join(', ')}
- Estimated Project Timeline: ~${scope.estimatedDurationWeeks} Weeks (${(scope.estimatedDurationWeeks / 4.3).toFixed(1)} Months)`;
    onOpenConsultationWithScope(summary);
  };

  return (
    <section id="calculator" className="scope-calculator-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-gold">Interactive Government Advisory Tool</span>
          <h2 className="section-title">Municipal ERP Scope & Implementation Estimator</h2>
          <p className="section-description">
            City managers, CFOs, and ERP steering committees can model timeline projections, phased go-live sequencing, and dual-run requirements tailored to their municipality's size and legacy infrastructure.
          </p>
        </div>

        <div className="calculator-layout-grid">
          {/* Controls Column (Left) */}
          <div className="calc-controls-pane glass-card">
            <h4 className="pane-title">
              <Calculator size={18} className="text-cyan" />
              <span>1. Define Municipal Profile</span>
            </h4>

            {/* Population Tier */}
            <div className="calc-group">
              <label className="calc-label">Municipal Agency Size & Population</label>
              <div className="tier-selector">
                <button
                  type="button"
                  className={`tier-btn ${populationTier === 'small' ? 'active' : ''}`}
                  onClick={() => setPopulationTier('small')}
                >
                  <strong>Town / Borough</strong>
                  <small>&lt; 25,000 Pop</small>
                </button>
                <button
                  type="button"
                  className={`tier-btn ${populationTier === 'mid' ? 'active' : ''}`}
                  onClick={() => setPopulationTier('mid')}
                >
                  <strong>Mid-Size City</strong>
                  <small>25k – 100k Pop</small>
                </button>
                <button
                  type="button"
                  className={`tier-btn ${populationTier === 'large' ? 'active' : ''}`}
                  onClick={() => setPopulationTier('large')}
                >
                  <strong>Major Metro</strong>
                  <small>100k – 400k Pop</small>
                </button>
                <button
                  type="button"
                  className={`tier-btn ${populationTier === 'county' ? 'active' : ''}`}
                  onClick={() => setPopulationTier('county')}
                >
                  <strong>County / Region</strong>
                  <small>400,000+ Pop</small>
                </button>
              </div>
            </div>

            {/* Legacy System */}
            <div className="calc-group">
              <label className="calc-label">Current Primary Legacy Platform</label>
              <select 
                className="sim-select" 
                value={legacySystem} 
                onChange={(e) => setLegacySystem(e.target.value)}
              >
                <option value="tyler">Tyler Technologies (Munis / Incode)</option>
                <option value="infor">Infor / Lawson Public Sector</option>
                <option value="cgi">CGI Advantage ERP</option>
                <option value="centralsquare">CentralSquare Technologies</option>
                <option value="oracle">Oracle PeopleSoft / E-Business Suite</option>
                <option value="sap">SAP Public Sector ECC</option>
                <option value="as400">Legacy IBM AS400 / In-House Spreadsheets</option>
              </select>
            </div>

            {/* Modules Selection */}
            <div className="calc-group">
              <div className="label-with-count">
                <label className="calc-label">Select Core Government Modules to Deploy</label>
                <span className="badge badge-subtle">{selectedModules.length} of 9 Selected</span>
              </div>
              <div className="module-checkbox-grid">
                {ERP_MODULES.map(mod => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      className={`module-check-item ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleModule(mod.id)}
                    >
                      <div className={`checkbox-box ${isChecked ? 'checked' : ''}`}>
                        {isChecked && <CheckCircle2 size={14} />}
                      </div>
                      <div className="check-text">
                        <strong>{mod.shortTitle}</strong>
                        <small>{mod.category}</small>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Integrations */}
            <div className="calc-group">
              <label className="calc-label">Key Municipal Interfaces & Integrations</label>
              <div className="integrations-chips">
                {[
                  { id: 'bank-ach', label: 'Bank Positive Pay & ACH Warrants' },
                  { id: 'cad-rms', label: 'Police/Fire CAD & RMS Dispatch' },
                  { id: 'gis-esri', label: 'Esri GIS Spatial Asset Mapping' },
                  { id: 'scada-wtr', label: 'SCADA Water/Sewer Metering' },
                  { id: '311-portal', label: 'Citizen 311 Request Portal' },
                  { id: 'pers-retire', label: 'State Pension System Electronic Interface' },
                ].map(item => {
                  const isSel = selectedIntegrations.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`chip-btn ${isSel ? 'active' : ''}`}
                      onClick={() => toggleIntegration(item.id)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Output Column (Right) */}
          <div className="calc-results-pane glass-card">
            <div className="results-header">
              <span className="badge badge-cyan">Precision Blueprint Estimate</span>
              <h4 className="results-h4">Project Roadmap & Readiness Projection</h4>
            </div>

            {/* Big Stat Summary */}
            <div className="big-stat-banner">
              <div className="big-stat">
                <span className="stat-num mono text-cyan">{scope.estimatedDurationWeeks}</span>
                <span className="stat-unit">Estimated Weeks</span>
                <span className="stat-desc">~{(scope.estimatedDurationWeeks / 4.3).toFixed(1)} Months to Full Go-Live</span>
              </div>
              <div className="big-stat-divider"></div>
              <div className="big-stat">
                <span className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>{scope.complexityTier}</span>
                <div className="stat-subdetail">
                  <div><strong>Phased Sequence:</strong> 3 Structured Gates</div>
                  <div><strong>Dual-Run Cycles:</strong> Min 3 Consecutive Runs</div>
                </div>
              </div>
            </div>

            {/* Phased Roadmap Sequence */}
            <div className="roadmap-stages">
              <h5 className="subhead">Recommended Phased Go-Live Sequence</h5>
              <div className="phase-cards-list">
                {scope.roadmapPhases.map((phase, idx) => (
                  <div key={idx} className="phase-card">
                    <div className="phase-top">
                      <div className="phase-title-line">
                        <span className="phase-dot">{idx + 1}</span>
                        <strong>{phase.phase}</strong>
                      </div>
                      <span className="phase-duration mono">{phase.duration}</span>
                    </div>
                    <div className="phase-modules-tags">
                      {phase.modules.map((m, i) => (
                        <span key={i} className="phase-mod-tag">{m}</span>
                      ))}
                    </div>
                    <div className="phase-milestone">
                      <CheckCircle2 size={13} className="text-emerald" />
                      <span><strong>Key Gate:</strong> {phase.criticalMilestone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statutory Checkpoints */}
            <div className="statutory-box">
              <h5 className="subhead">Built-in Statutory Compliance Checkpoints</h5>
              <ul className="checkpoints-list">
                {scope.statutoryChecklist.map((chk, i) => (
                  <li key={i}>
                    <ShieldCheck size={14} className="text-cyan" />
                    <span>{chk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="results-action-box">
              <button 
                type="button" 
                className="btn btn-gold btn-block"
                onClick={handleGenerateSummary}
              >
                <span>Request Custom RFP Specification Packet</span>
                <ArrowRight size={16} />
              </button>
              <p className="confidentiality-note">
                PrecisionERP Advisory LLC guarantees 100% municipal confidentiality. No vendor lock-in; vendor-neutral RFP advisory.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
