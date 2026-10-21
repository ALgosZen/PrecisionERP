import React, { useState } from 'react';
import type { ERPModule } from '../types/erp';
import { 
  CheckCircle2, 
  AlertCircle, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Activity, 
  Search, 
  Plus, 
  Download, 
  Truck, 
  Calendar, 
  Key, 
  Award,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ModuleSimulatorProps {
  module: ERPModule;
}

export const ModuleSimulator: React.FC<ModuleSimulatorProps> = ({ module }) => {
  const [activeTab, setActiveTab] = useState(0);

  // State for interactive features
  const [safetyOvertimeHours, setSafetyOvertimeHours] = useState(14);
  const [hourlyBaseRate, setHourlyBaseRate] = useState(48.5);
  const [selectedShiftType, setSelectedShiftType] = useState<'fire' | 'police'>('fire');
  const [compTimeBanked, setCompTimeBanked] = useState(180);
  const [selectedFundFilter, setSelectedFundFilter] = useState('all');
  const [simulatedPoAmount, setSimulatedPoAmount] = useState('14500');
  const [poStatus, setPoStatus] = useState<string | null>(null);

  // Simulation handlers
  const handleCheckEncumbrance = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(simulatedPoAmount) || 0;
    if (amount > 50000) {
      setPoStatus('Hard Lock Warning: Requisition requires City Council Budget Amendment (Exceeds $50,000 threshold).');
    } else {
      setPoStatus('Passed: Encumbrance verified against Account #101-4100-520 (General Fund Unencumbered Balance: $284,500).');
    }
  };

  const renderContent = () => {
    switch (module.id) {
      case 'finance-gl':
        return renderFinanceGL();
      case 'payroll':
        return renderPayroll();
      case 'hr-civil-service':
        return renderHRCivilService();
      case 'project-accounting':
        return renderProjectAccounting();
      case 'fleet-mgmt':
        return renderFleetMgmt();
      case 'inventory':
        return renderInventory();
      case 'recruitment-onboarding':
        return renderRecruitment();
      case 'time-labor':
        return renderTimeLabor();
      case 'offboarding':
        return renderOffboarding();
      default:
        return <div>Select a valid module tab</div>;
    }
  };

  // 1. Finance & GL Simulation
  const renderFinanceGL = () => {
    const funds = [
      { code: '101', name: 'General Fund (Municipal Operations)', budget: '$48,250,000', spent: '$31,420,000', encumbered: '$4,110,000', available: '$12,720,000', health: '92% Healthy' },
      { code: '210', name: 'Police Special Revenue & Asset Forfeiture', budget: '$3,800,000', spent: '$2,140,000', encumbered: '$390,000', available: '$1,270,000', health: '96% Healthy' },
      { code: '301', name: 'Capital Infrastructure Improvement (CIP)', budget: '$24,500,000', spent: '$16,800,000', encumbered: '$6,200,000', available: '$1,500,000', health: '88% Healthy' },
      { code: '501', name: 'Water & Sewer Utility Enterprise Fund', budget: '$18,900,000', spent: '$11,350,000', encumbered: '$1,920,000', available: '$5,630,000', health: '94% Healthy' },
      { code: '601', name: 'Central Fleet Internal Service Fund (ISF)', budget: '$6,400,000', spent: '$4,100,000', encumbered: '$850,000', available: '$1,450,000', health: '91% Healthy' },
    ];

    if (activeTab === 0) {
      return (
        <div className="sim-pane">
          <div className="sim-toolbar">
            <div className="sim-toolbar-title">
              <strong>GASB 34 / 54 Fund Accounting Ledger</strong>
              <span>City Fiscal Year 2026-2027 • Real-time Appropriations Balance</span>
            </div>
            <div className="sim-actions">
              <span className="badge badge-emerald"><CheckCircle2 size={13} /> Trial Balance In-Balance</span>
            </div>
          </div>

          <div className="sim-table-wrapper">
            <table className="sim-table">
              <thead>
                <tr>
                  <th>Fund Code & Description</th>
                  <th>Adopted Budget</th>
                  <th>YTD Expenditures</th>
                  <th>Open Encumbrances</th>
                  <th>Unencumbered Balance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {funds.map((f) => (
                  <tr key={f.code}>
                    <td>
                      <div className="cell-fund">
                        <span className="fund-badge">{f.code}</span>
                        <div>
                          <strong>{f.name}</strong>
                          <small>Restricted / Committed Reserve</small>
                        </div>
                      </div>
                    </td>
                    <td className="mono">{f.budget}</td>
                    <td className="mono">{f.spent}</td>
                    <td className="mono text-amber">{f.encumbered}</td>
                    <td className="mono text-cyan font-bold">{f.available}</td>
                    <td><span className="status-pill status-healthy">{f.health}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeTab === 1) {
      return (
        <div className="sim-pane">
          <div className="sim-toolbar">
            <div>
              <strong>Pre-Audit Purchase Encumbrance Check</strong>
              <span>Real-time hard budget verification prevents unauthorized municipal commitments</span>
            </div>
          </div>

          <form onSubmit={handleCheckEncumbrance} className="sim-form-card">
            <div className="sim-form-grid">
              <div className="form-group">
                <label>Department Requisitioner</label>
                <select className="sim-select" defaultValue="pw">
                  <option value="pw">Public Works - Street Maintenance (101-4100)</option>
                  <option value="pd">Police Dept - Tactical Equipment (101-2100)</option>
                  <option value="fd">Fire & Rescue - Life Safety (101-2200)</option>
                  <option value="wu">Water Utility - Infrastructure (501-7100)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Vendor / Contractor</label>
                <input className="sim-input" type="text" defaultValue="Cascade Heavy Equipment & Parts LLC" readOnly />
              </div>

              <div className="form-group">
                <label>Requisition Amount ($ USD)</label>
                <input 
                  className="sim-input" 
                  type="number" 
                  value={simulatedPoAmount}
                  onChange={(e) => setSimulatedPoAmount(e.target.value)}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Zap size={16} /> Validate Encumbrance
                </button>
              </div>
            </div>

            {poStatus && (
              <div className={`sim-alert ${poStatus.startsWith('Passed') ? 'sim-alert-success' : 'sim-alert-warning'}`}>
                {poStatus.startsWith('Passed') ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <div>{poStatus}</div>
              </div>
            )}
          </form>

          <div className="sim-recent-pos">
            <h5 className="subhead">Recently Verified Council Purchase Orders</h5>
            <div className="po-list">
              <div className="po-item">
                <span className="po-num">PO-2026-8812</span>
                <span className="po-desc">Emergency Culvert Drainage Concrete</span>
                <span className="mono text-cyan">$34,800.00</span>
                <span className="badge badge-emerald">Encumbered & Verified</span>
              </div>
              <div className="po-item">
                <span className="po-num">PO-2026-8813</span>
                <span className="po-desc">Motorola APX8000 Radio Upgrades (Police)</span>
                <span className="mono text-cyan">$82,400.00</span>
                <span className="badge badge-gold">Council Approved</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="sim-pane">
        <div className="compliance-grid">
          <div className="comp-card">
            <div className="comp-header">
              <span className="badge badge-cyan">GASB 87</span>
              <h5>Municipal Lease Obligations</h5>
            </div>
            <p>Automated right-of-use asset amortisation for municipal copy machines, real estate towers, and utility substations.</p>
            <div className="comp-stat">
              <strong>14 Leases Active</strong>
              <span>Liability: $1,420,800 • Footnote Ready</span>
            </div>
          </div>

          <div className="comp-card">
            <div className="comp-header">
              <span className="badge badge-cyan">GASB 96</span>
              <h5>SBITA Software Subscriptions</h5>
            </div>
            <p>Subscription-Based Information Technology Arrangements categorized and amortized per statutory governmental rules.</p>
            <div className="comp-stat">
              <strong>8 SBITAs Tracked</strong>
              <span>Present Value: $840,000 • 100% Compliant</span>
            </div>
          </div>

          <div className="comp-card">
            <div className="comp-header">
              <span className="badge badge-emerald">Audit Trail</span>
              <h5>Single Audit / ACFR Portal</h5>
            </div>
            <p>External certified public accounting auditors access immutable, read-only transaction ledgers with zero staff interruption.</p>
            <div className="comp-stat">
              <strong>Clean Opinion Status</strong>
              <span>GFOA Award Compliant Architecture</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 2. Payroll Simulation
  const renderPayroll = () => {
    // FLSA 7(k) calculation
    const thresholdHours = selectedShiftType === 'fire' ? 106 : 86; // 14-day or 28-day public safety
    const regularRate = hourlyBaseRate;
    const regularPay = thresholdHours * regularRate;
    const overtimeRate = regularRate * 1.5;
    const overtimePay = safetyOvertimeHours * overtimeRate;
    const totalGross = regularPay + overtimePay;

    return (
      <div className="sim-pane">
        <div className="sim-tabs-header">
          <div className="sim-toolbar-title">
            <strong>FLSA Section 7(k) Public Safety Payroll Engine</strong>
            <span>Simulating Certified 14-Day Cycle for Police and Fire Unions</span>
          </div>
        </div>

        <div className="sim-calculator-container">
          <div className="calc-inputs">
            <div className="form-group">
              <label>Public Safety Bargaining Unit</label>
              <div className="toggle-group">
                <button 
                  type="button" 
                  className={`toggle-btn ${selectedShiftType === 'fire' ? 'active' : ''}`}
                  onClick={() => { setSelectedShiftType('fire'); setHourlyBaseRate(46.25); }}
                >
                  IAFF Local 402 (Firefighters 24/48)
                </button>
                <button 
                  type="button" 
                  className={`toggle-btn ${selectedShiftType === 'police' ? 'active' : ''}`}
                  onClick={() => { setSelectedShiftType('police'); setHourlyBaseRate(52.80); }}
                >
                  Police Officers Association (POA)
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Statutory Base Rate: <span className="mono text-cyan">${hourlyBaseRate.toFixed(2)} / hr</span></label>
              <input 
                type="range" 
                min="35" 
                max="75" 
                step="0.5" 
                value={hourlyBaseRate} 
                onChange={(e) => setHourlyBaseRate(parseFloat(e.target.value))}
                className="sim-slider" 
              />
            </div>

            <div className="form-group">
              <label>Overtime Shift Hours Beyond 7(k) Threshold: <span className="mono text-gold">{safetyOvertimeHours} hrs</span></label>
              <input 
                type="range" 
                min="0" 
                max="48" 
                step="1" 
                value={safetyOvertimeHours} 
                onChange={(e) => setSafetyOvertimeHours(parseInt(e.target.value))}
                className="sim-slider" 
              />
            </div>

            <div className="badge-callout">
              <ShieldCheck size={16} />
              <span>Includes longevity pay (+5%), hazardous duty premium, and uniform allowance into regular rate of pay as mandated by FLSA 29 U.S.C. § 207(k).</span>
            </div>
          </div>

          <div className="calc-results-card">
            <div className="result-header">
              <span>Certified Bi-Weekly Public Safety Voucher</span>
              <span className="badge badge-emerald">Verified In Dual-Run</span>
            </div>

            <div className="voucher-line">
              <span>Standard 7(k) Hours ({thresholdHours} hrs @ ${regularRate.toFixed(2)})</span>
              <span className="mono">${regularPay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="voucher-line">
              <span>7(k) Premium Overtime ({safetyOvertimeHours} hrs @ ${(overtimeRate).toFixed(2)})</span>
              <span className="mono text-gold">${overtimePay.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="voucher-line">
              <span>Specialty Pay (Paramedic / Field Training)</span>
              <span className="mono">$250.00</span>
            </div>

            <div className="voucher-divider"></div>

            <div className="voucher-line total">
              <strong>Gross Bi-Weekly Compensation:</strong>
              <strong className="mono text-cyan font-bold">${(totalGross + 250).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
            </div>

            <div className="pension-deductions">
              <small>State Pension Tier Deductions:</small>
              <div className="deduction-tag">
                <span>Public Safety PERS Tier 1 (9.0% Employee)</span>
                <span className="mono">-${((totalGross + 250) * 0.09).toFixed(2)}</span>
              </div>
              <div className="deduction-tag">
                <span>City Matching Employer Contribution (28.4%)</span>
                <span className="mono text-emerald">+${((totalGross + 250) * 0.284).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 3. HR & Civil Service
  const renderHRCivilService = () => (
    <div className="sim-pane">
      <div className="sim-toolbar">
        <div>
          <strong>City Civil Service Classification & Step Schedule</strong>
          <span>Bargaining Unit: AFSCME Local 110 & Management Confidential</span>
        </div>
        <span className="badge badge-cyan">FY 2026 Salary Table Approved</span>
      </div>

      <div className="sim-table-wrapper">
        <table className="sim-table">
          <thead>
            <tr>
              <th>Class Title</th>
              <th>Pay Grade</th>
              <th>Step 1 (Base)</th>
              <th>Step 2 (+5%)</th>
              <th>Step 3 (+5%)</th>
              <th>Step 4 (+5%)</th>
              <th>Step 5 (Top)</th>
              <th>Active FTEs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Police Officer II</strong><br/><small>Sworn Public Safety</small></td>
              <td><span className="mono font-bold">P-22</span></td>
              <td className="mono">$82,400</td>
              <td className="mono">$86,520</td>
              <td className="mono">$90,846</td>
              <td className="mono">$95,388</td>
              <td className="mono text-cyan font-bold">$100,158</td>
              <td>42 FTE</td>
            </tr>
            <tr>
              <td><strong>Senior Civil Engineer</strong><br/><small>Public Works Infrastructure</small></td>
              <td><span className="mono font-bold">E-34</span></td>
              <td className="mono">$104,200</td>
              <td className="mono">$109,410</td>
              <td className="mono">$114,880</td>
              <td className="mono">$120,624</td>
              <td className="mono text-cyan font-bold">$126,656</td>
              <td>8 FTE</td>
            </tr>
            <tr>
              <td><strong>Water Treatment Plant Operator</strong><br/><small>Grade IV State Certified</small></td>
              <td><span className="mono font-bold">U-18</span></td>
              <td className="mono">$68,500</td>
              <td className="mono">$71,925</td>
              <td className="mono">$75,521</td>
              <td className="mono">$79,297</td>
              <td className="mono text-cyan font-bold">$83,262</td>
              <td>14 FTE</td>
            </tr>
            <tr>
              <td><strong>911 Senior Communications Officer</strong><br/><small>Emergency Dispatch Services</small></td>
              <td><span className="mono font-bold">D-16</span></td>
              <td className="mono">$62,100</td>
              <td className="mono">$65,205</td>
              <td className="mono">$68,465</td>
              <td className="mono">$71,888</td>
              <td className="mono text-cyan font-bold">$75,483</td>
              <td>19 FTE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // 4. Project Accounting & CIP
  const renderProjectAccounting = () => (
    <div className="sim-pane">
      <div className="sim-toolbar">
        <div>
          <strong>Capital Improvement Projects (CIP) & Grant Drawdown Portal</strong>
          <span>Tracking Multi-Year Appropriations & Contractor Retainage (AIA G702)</span>
        </div>
        <span className="badge badge-emerald">2 CFR 200 Audit Compliant</span>
      </div>

      <div className="sim-table-wrapper">
        <table className="sim-table">
          <thead>
            <tr>
              <th>Project ID & Name</th>
              <th>Funding Sources</th>
              <th>Total Budget</th>
              <th>Expended to Date</th>
              <th>Retainage Held (5%)</th>
              <th>Completion</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>CIP-2024-04: Downtown Water Main Overhaul</strong>
                <br/><small>Replacement of 8,400 linear ft aged ductile iron</small>
              </td>
              <td><span className="badge badge-subtle">EPA Drinking Water SRF (70%) + Utility (30%)</span></td>
              <td className="mono">$8,450,000</td>
              <td className="mono">$5,120,000</td>
              <td className="mono text-gold">$256,000</td>
              <td>
                <div className="prog-bar-container">
                  <div className="prog-bar" style={{ width: '68%' }}></div>
                  <span>68%</span>
                </div>
              </td>
              <td><span className="status-pill status-healthy">On Schedule</span></td>
            </tr>
            <tr>
              <td>
                <strong>CIP-2025-01: Fire Station #4 Modernization</strong>
                <br/><small>Seismic retrofit, 3-bay drive-thru apparatus bays</small>
              </td>
              <td><span className="badge badge-subtle">Municipal Bond Series 2024</span></td>
              <td className="mono">$14,200,000</td>
              <td className="mono">$11,840,000</td>
              <td className="mono text-gold">$592,000</td>
              <td>
                <div className="prog-bar-container">
                  <div className="prog-bar" style={{ width: '84%' }}></div>
                  <span>84%</span>
                </div>
              </td>
              <td><span className="status-pill status-healthy">On Schedule</span></td>
            </tr>
            <tr>
              <td>
                <strong>CIP-2025-09: Grand Avenue Signal Sync & EV Corridor</strong>
                <br/><small>Smart adaptive traffic signal controllers</small>
              </td>
              <td><span className="badge badge-subtle">Federal DOT CMAQ Grant</span></td>
              <td className="mono">$3,800,000</td>
              <td className="mono">$1,450,000</td>
              <td className="mono text-gold">$72,500</td>
              <td>
                <div className="prog-bar-container">
                  <div className="prog-bar" style={{ width: '38%' }}></div>
                  <span>38%</span>
                </div>
              </td>
              <td><span className="status-pill status-healthy">Phase 2 Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // 5. Fleet Management
  const renderFleetMgmt = () => (
    <div className="sim-pane">
      <div className="sim-toolbar">
        <div>
          <strong>Municipal Fleet Telematics & Readiness Hub</strong>
          <span>Tracking 480 Active City Units • Police, Fire, Utilities & Public Works</span>
        </div>
        <span className="badge badge-cyan"><Truck size={13} /> 99.4% Frontline Uptime</span>
      </div>

      <div className="sim-table-wrapper">
        <table className="sim-table">
          <thead>
            <tr>
              <th>Vehicle Unit #</th>
              <th>Make / Model / Type</th>
              <th>Assigned Department</th>
              <th>Telematics Odometer</th>
              <th>Fuel / Battery</th>
              <th>DTC Health Status</th>
              <th>Next Scheduled PM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="mono font-bold text-cyan">PD-114</span></td>
              <td>2024 Ford Police Interceptor Utility (AWD)</td>
              <td>Police Patrol - Sector 3</td>
              <td className="mono">28,450 mi</td>
              <td><span className="status-pill status-healthy">88% Fuel</span></td>
              <td><span className="status-pill status-healthy">0 DTC Codes</span></td>
              <td>30,000 mi (Brake Inspection)</td>
            </tr>
            <tr>
              <td><span className="mono font-bold text-cyan">E-07</span></td>
              <td>2022 Pierce Enforcer 1500 GPM Pumper</td>
              <td>Fire Station 7 - Frontline</td>
              <td className="mono">3,420 hrs / 18,200 mi</td>
              <td><span className="status-pill status-healthy">94% Diesel</span></td>
              <td><span className="status-pill status-healthy">Pump Certified</span></td>
              <td>Monthly NFPA 1911 Service</td>
            </tr>
            <tr>
              <td><span className="mono font-bold text-cyan">PW-42</span></td>
              <td>2021 Freightliner M2-106 Street Sweeper</td>
              <td>Public Works Maintenance</td>
              <td className="mono">42,800 mi</td>
              <td><span className="status-pill status-healthy">76% Fuel</span></td>
              <td><span className="status-pill status-warning">Hydraulic Filter Alert</span></td>
              <td>Work Order #WO-4912 Open</td>
            </tr>
            <tr>
              <td><span className="mono font-bold text-cyan">EV-03</span></td>
              <td>2025 Chevy Bolt EV - Code Enforcement</td>
              <td>Community Development</td>
              <td className="mono">9,200 mi</td>
              <td><span className="status-pill status-healthy">92% Electric</span></td>
              <td><span className="status-pill status-healthy">Optimum</span></td>
              <td>Tire Rotation (10,000 mi)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // 6. Inventory & Warehouse
  const renderInventory = () => (
    <div className="sim-pane">
      <div className="sim-toolbar">
        <div>
          <strong>City Central Yard & Utility Inventory Catalog</strong>
          <span>Warehouse #1: Central Public Works Yard • FIFO Valuation Method</span>
        </div>
        <span className="badge badge-emerald">Annual Physical Audit: 99.8% Match</span>
      </div>

      <div className="sim-table-wrapper">
        <table className="sim-table">
          <thead>
            <tr>
              <th>Item SKU & Description</th>
              <th>Category</th>
              <th>On-Hand</th>
              <th>Allocated to WOs</th>
              <th>Safety Threshold</th>
              <th>Unit Cost</th>
              <th>Stock Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="mono font-bold">WTR-PIPE-8DI</span><br/>8-inch Ductile Iron Water Main Pipe (18ft)</td>
              <td>Water Distribution</td>
              <td className="mono font-bold">140 lengths</td>
              <td className="mono">40</td>
              <td className="mono">30 lengths</td>
              <td className="mono">$385.00</td>
              <td><span className="status-pill status-healthy">Optimal</span></td>
            </tr>
            <tr>
              <td><span className="mono font-bold">MTR-SENS-1</span><br/>1-inch AMR Smart Water Meter Transceiver</td>
              <td>Utility Metering</td>
              <td className="mono font-bold">280 units</td>
              <td className="mono">85</td>
              <td className="mono">50 units</td>
              <td className="mono">$215.00</td>
              <td><span className="status-pill status-healthy">Optimal</span></td>
            </tr>
            <tr>
              <td><span className="mono font-bold">TRAF-LED-R1</span><br/>12-inch Red LED Traffic Signal Retrofit Module</td>
              <td>Traffic Signals</td>
              <td className="mono font-bold">18 units</td>
              <td className="mono">12</td>
              <td className="mono text-amber">25 units</td>
              <td className="mono">$84.50</td>
              <td><span className="status-pill status-warning">Auto-Reorder Queued</span></td>
            </tr>
            <tr>
              <td><span className="mono font-bold">FEMA-SAND-50</span><br/>Polypropylene Flood Sandbags (Bale of 1000)</td>
              <td>Emergency Mgmt</td>
              <td className="mono font-bold">50 bales</td>
              <td className="mono">0</td>
              <td className="mono">20 bales</td>
              <td className="mono">$240.00</td>
              <td><span className="status-pill status-healthy">FEMA Stockpile Ready</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // 7. Recruitment & Onboarding
  const renderRecruitment = () => (
    <div className="sim-pane">
      <div className="sim-toolbar">
        <div>
          <strong>Civil Service Merit Eligibility List</strong>
          <span>Requisition: #CS-2026-08 • Police Officer Recruit (Entry-Level)</span>
        </div>
        <span className="badge badge-cyan">Certified by Civil Service Commission</span>
      </div>

      <div className="sim-table-wrapper">
        <table className="sim-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Candidate Name</th>
              <th>Written Exam (70%)</th>
              <th>Oral Board (30%)</th>
              <th>Veteran Pref.</th>
              <th>Residency</th>
              <th>Final Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="rank-badge rank-1">#1</span></td>
              <td><strong>David A. Vance</strong></td>
              <td className="mono">96.0</td>
              <td className="mono">94.5</td>
              <td className="mono text-emerald">+5.0 (USMC)</td>
              <td className="mono">+2.0 (Resident)</td>
              <td className="mono text-cyan font-bold">102.55</td>
              <td><span className="badge badge-emerald">Conditional Offer Extended</span></td>
            </tr>
            <tr>
              <td><span className="rank-badge rank-2">#2</span></td>
              <td><strong>Rachel M. Morales</strong></td>
              <td className="mono">95.0</td>
              <td className="mono">97.0</td>
              <td className="mono">—</td>
              <td className="mono">+2.0 (Resident)</td>
              <td className="mono text-cyan font-bold">97.60</td>
              <td><span className="badge badge-cyan">Background Cleared</span></td>
            </tr>
            <tr>
              <td><span className="rank-badge rank-3">#3</span></td>
              <td><strong>Jonathan K. Hayes</strong></td>
              <td className="mono">92.0</td>
              <td className="mono">93.0</td>
              <td className="mono text-emerald">+5.0 (Army)</td>
              <td className="mono">—</td>
              <td className="mono text-cyan font-bold">97.30</td>
              <td><span className="badge badge-subtle">Psych / Medical Scheduled</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // 8. Time & Labor
  const renderTimeLabor = () => (
    <div className="sim-pane">
      <div className="sim-toolbar">
        <div>
          <strong>Municipal Shift Rostering & Overtime Thresholds</strong>
          <span>Fire Station 3 & Station 5 • 24/48 Shift Cycle (Shift A On-Duty)</span>
        </div>
        <span className="badge badge-emerald">Minimum Staffing Satisfied</span>
      </div>

      <div className="shift-schedule-grid">
        <div className="shift-card active-shift">
          <div className="shift-header">
            <strong>Shift A (Current Tour)</strong>
            <span className="badge badge-emerald">On-Duty: 08:00 - 08:00 (+1)</span>
          </div>
          <div className="shift-staff">
            <div className="staff-row">
              <span>Captain T. Miller</span>
              <span className="badge badge-subtle">Engine 3 Commander</span>
            </div>
            <div className="staff-row">
              <span>Engineer S. Patel</span>
              <span className="badge badge-subtle">Apparatus Operator</span>
            </div>
            <div className="staff-row">
              <span>Firefighter / PM J. Ortiz</span>
              <span className="badge badge-cyan">Paramedic Certified</span>
            </div>
            <div className="staff-row">
              <span>Firefighter M. Chen</span>
              <span className="badge badge-subtle">Nozzle Team</span>
            </div>
          </div>
          <div className="shift-footer">
            <small>Overtime Cap: 0 hrs this tour • Kelly Day Scheduled: 10/28</small>
          </div>
        </div>

        <div className="shift-card">
          <div className="shift-header">
            <strong>Comp Time vs Overtime Banking Rule</strong>
            <span className="badge badge-gold">FLSA 480-Hour Cap</span>
          </div>
          <div className="comp-time-calc">
            <p>Under FLSA 29 U.S.C. § 207(o), public safety personnel may accrue up to 480 hours of compensatory time before cash overtime payout is mandatory.</p>
            <div className="sim-bar-wrapper">
              <label>Current Accrual: <span className="mono text-cyan">{compTimeBanked} / 480 hrs</span></label>
              <div className="prog-bar-container">
                <div className="prog-bar" style={{ width: `${(compTimeBanked / 480) * 100}%` }}></div>
              </div>
            </div>
            <div className="button-group-sm">
              <button 
                type="button" 
                className="btn btn-secondary btn-sm" 
                onClick={() => setCompTimeBanked(prev => Math.min(480, prev + 12))}
              >
                + Bank 12 hrs Shift Overtime
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm" 
                onClick={() => setCompTimeBanked(180)}
              >
                Reset Accrual
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 9. Offboarding & Asset Return
  const renderOffboarding = () => (
    <div className="sim-pane">
      <div className="sim-toolbar">
        <div>
          <strong>Public Safety Separation & CJIS Revocation Protocol</strong>
          <span>Officer Badge #412 • Retirement Separation (25 Years Service)</span>
        </div>
        <span className="badge badge-emerald">Chain of Custody Verified</span>
      </div>

      <div className="offboarding-grid">
        <div className="offboarding-card">
          <h5><ShieldCheck size={16} /> Asset & Equipment Return Log</h5>
          <div className="checklist">
            <div className="check-item verified">
              <CheckCircle2 size={16} />
              <div>
                <strong>Duty Weapon: Glock 17 Gen 5 (Serial #BSF-8821)</strong>
                <small>Armorer Verification: Armory Sergeant K. Novak (Sign-off recorded)</small>
              </div>
            </div>
            <div className="check-item verified">
              <CheckCircle2 size={16} />
              <div>
                <strong>Motorola APX 8000 Portable Radio (Serial #RADIO-4910)</strong>
                <small>Radio ID removed from Regional Dispatch Talkgroup</small>
              </div>
            </div>
            <div className="check-item verified">
              <CheckCircle2 size={16} />
              <div>
                <strong>Axon Body 3 Camera (Serial #X810294) & Taser 7</strong>
                <small>All stored body-worn video uploaded and evidence archived</small>
              </div>
            </div>
            <div className="check-item verified">
              <CheckCircle2 size={16} />
              <div>
                <strong>City Hall Electronic Access Keycard & Master Patrol Keys</strong>
                <small>Keycard reader permissions deprovisioned instantaneously</small>
              </div>
            </div>
          </div>
        </div>

        <div className="offboarding-card">
          <h5><Key size={16} /> Digital & CJIS Credential Revocation</h5>
          <div className="checklist">
            <div className="check-item verified">
              <CheckCircle2 size={16} />
              <div>
                <strong>CJIS Level 4 State Police Network Terminal</strong>
                <small>User account disabled in State CJIS Central Directory</small>
              </div>
            </div>
            <div className="check-item verified">
              <CheckCircle2 size={16} />
              <div>
                <strong>CAD / RMS Emergency Dispatch System</strong>
                <small>Dispatch console login credentials revoked</small>
              </div>
            </div>
            <div className="check-item verified">
              <CheckCircle2 size={16} />
              <div>
                <strong>State Retirement PERS Vesting Certification</strong>
                <small>Final 36-month compensation certificate dispatched to State Board</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="module-simulator-container">
      {/* Simulation Header */}
      <div className="simulator-header">
        <div className="sim-title-group">
          <div className="sim-tag">
            <Activity size={14} className="text-cyan" />
            <span>Interactive Municipal Console Preview</span>
          </div>
          <h4>{module.interactiveDemo.demoTitle}</h4>
          <p>{module.interactiveDemo.demoSubtitle}</p>
        </div>

        {/* Tab selection */}
        <div className="sim-tab-list">
          {module.interactiveDemo.tabs.map((tab, idx) => (
            <button
              key={tab}
              type="button"
              className={`sim-tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Pane */}
      <div className="simulator-body">
        {renderContent()}
      </div>
    </div>
  );
};
