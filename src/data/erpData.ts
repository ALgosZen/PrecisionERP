import type { ERPModule, CaseStudy } from '../types/erp';

export const ERP_MODULES: ERPModule[] = [
  {
    id: 'finance-gl',
    title: 'Municipal Finance & General Ledger (GL)',
    shortTitle: 'Finance & GL',
    category: 'Fiscal',
    badge: 'GASB 34 / 87 / 96 Certified',
    summary: 'Purpose-built fund accounting for public municipalities, providing real-time multi-fund general ledgers, encumbrance control, warrant validation, and automated CAFR/ACFR reporting.',
    iconName: 'Landmark',
    challengesSolved: [
      'Eliminates manual journal adjustments across restricted general, special revenue, and capital funds',
      'Automates multi-tiered encumbrance accounting to prevent unappropriated municipal overspending',
      'Instant GASB 87 (Leases) and GASB 96 (SBITAs) compliance schedules without external spreadsheets',
      'Clean electronic audit trails reducing external annual auditor inquiry turnaround by 75%'
    ],
    capabilities: [
      {
        title: 'Multi-Fund Accounting Architecture',
        description: 'Native separation for General Fund (101), Capital Outlay, Enterprise Utilities (501), Debt Service, and Grant Special Revenue funds with balanced interfund transfers.',
        complianceRef: 'GASB Statement No. 34 / 54'
      },
      {
        title: 'Real-Time Encumbrance & Budget Control',
        description: 'Hard and soft budget checking at requisition, purchase order, and invoice verification stages to strictly adhere to city council adopted appropriations.',
        complianceRef: 'GFOA Best Practice'
      },
      {
        title: 'Automated ACFR Financial Reporting Engine',
        description: 'Pre-configured Government-Wide and Fund Financial Statement rollups, eliminating weeks of manual financial consolidation during annual close.',
        complianceRef: 'GASB Statement No. 34'
      },
      {
        title: 'Automated Lease & Subscription Accounting',
        description: 'End-to-end liability schedules, right-of-use asset amortization, and required footnote disclosures for municipal leases and software subscriptions.',
        complianceRef: 'GASB 87 & GASB 96'
      }
    ],
    impactMetrics: [
      { value: '68%', label: 'Faster Fiscal Year-End Close', context: 'From 54 days down to 17 calendar days' },
      { value: '100%', label: 'Budgetary Overspend Prevention', context: 'Automated real-time encumbrance locks' },
      { value: '$1.4M', label: 'Average Reallocated Unspent Capital', context: 'Through proactive fund release tracking' }
    ],
    statutoryStandards: ['GASB 34 / 54 / 87 / 96', 'GFOA Reporting Guidelines', 'Yellow Book Audit Standards'],
    interactiveDemo: {
      demoTitle: 'City General Fund & Ledger Console',
      demoSubtitle: 'Inspect live municipal fund balances, open encumbrances, and verified warrant disbursements',
      tabs: ['Fund Balance Ledger', 'Encumbrance Journal', 'Audit Compliance Checker']
    }
  },
  {
    id: 'payroll',
    title: 'Public Sector & Safety Certified Payroll',
    shortTitle: 'Municipal Payroll',
    category: 'Workforce',
    badge: 'FLSA 7(k) & PERS Compliant',
    summary: 'Engineered specifically for city bargaining units, civil service rules, dual-pension tiers, FLSA 7(k) police and fire payroll cycles, and certified prevailing wage reporting.',
    iconName: 'ReceiptDollar',
    challengesSolved: [
      'Accurately calculates complex 14-day and 28-day FLSA Section 7(k) public safety overtime cycles',
      'Manages multi-tier state retirement systems (CalPERS, NYSLRS, FRS, OP&F, etc.) and hybrid pensions',
      'Automates retro-pay computations across union collective bargaining unit (MOU) renewals',
      'Guarantees 100% certified payroll reporting for federally and state funded capital projects'
    ],
    capabilities: [
      {
        title: 'FLSA Section 7(k) Public Safety Engine',
        description: 'Handles 106-hour fire thresholds and 86-hour police overtime calculations with shift differential, longevity, and specialty pay inclusions.',
        complianceRef: '29 U.S.C. § 207(k)'
      },
      {
        title: 'Public Pension & Tier Administration',
        description: 'Automated deduction and employer matching logic for Classic vs. PEPRA tiers, hazardous duty plans, and 457(b) deferred compensation.',
        complianceRef: 'State Retirement System Standards'
      },
      {
        title: 'Multi-Bargaining Unit (MOU) Rules Matrix',
        description: 'Custom pay scales, step-and-grade progressions, uniform allowances, and standby pay governed by specific city union contracts.',
        complianceRef: 'Civil Service Commission'
      },
      {
        title: 'Dual-Run Cutover Validation System',
        description: 'Proprietary automated comparison module that validates new ERP payroll runs against legacy runs down to the exact penny before cutover.',
        complianceRef: 'Precision Safe-Cutover Protocol'
      }
    ],
    impactMetrics: [
      { value: '99.98%', label: 'First-Run Net Pay Accuracy', context: 'Across multi-union city workforces' },
      { value: '85%', label: 'Reduction in Payroll Processing Time', context: 'From 4.5 days to 4.5 hours per bi-weekly cycle' },
      { value: '0', label: 'FLSA Overtime Grievances', context: 'Automated transparent formula audit trails' }
    ],
    statutoryStandards: ['FLSA Section 7(k)', 'State Public Pension Tiers', 'Davis-Bacon Certified Payroll'],
    interactiveDemo: {
      demoTitle: 'Public Safety Payroll & FLSA Simulator',
      demoSubtitle: 'Simulate 24/48 fire shifts, police differential rates, and multi-tier pension deductions',
      tabs: ['Fire/Police 7(k) Overtime', 'Pension Tier Breakdown', 'Certified Payroll Voucher']
    }
  },
  {
    id: 'hr-civil-service',
    title: 'Human Resources & Civil Service Administration',
    shortTitle: 'HR & Civil Service',
    category: 'Workforce',
    badge: 'Civil Service & Merit Rules',
    summary: 'Dedicated public sector HR platform supporting civil service job classifications, union bargaining agreement tracking, step-and-grade pay schedules, and municipal credentialing.',
    iconName: 'Users',
    challengesSolved: [
      'Eliminates paper-based tracking of municipal step-and-grade advancement schedules',
      'Automates mandatory public safety certification tracking (POST, EMT-P, commercial CDL)',
      'Tracks union seniority rosters, probationary milestones, and formal civil service appeals',
      'Provides transparent public salary transparency tables meeting state freedom of information standards'
    ],
    capabilities: [
      {
        title: 'Step-and-Grade Salary Matrix',
        description: 'Automates anniversary and merit step advancements across dozens of municipal bargaining agreements with retroactive reconciliation.',
        complianceRef: 'Civil Service Law'
      },
      {
        title: 'Public Safety Credentialing & Compliance',
        description: 'Real-time alerts for expiring state certifications, firearms qualifications, emergency vehicle operation licenses, and medical clearances.',
        complianceRef: 'POST / State Standards'
      },
      {
        title: 'MOU & Union Grievance Workflow',
        description: 'End-to-end audit logging for labor relations, grievances, disciplinary appeals, and binding arbitration timelines.',
        complianceRef: 'Public Employment Relations Board'
      },
      {
        title: 'Public Records & FOIA Transparency',
        description: 'Instant redaction-safe export of municipal workforce classification reports, headcounts, and authorized FTE budgets.',
        complianceRef: 'State Sunshine / Open Records'
      }
    ],
    impactMetrics: [
      { value: '92%', label: 'HR Admin Workload Reduction', context: 'Automated step-advancement workflows' },
      { value: '100%', label: 'Certification Compliance Rate', context: 'Zero lapses in public safety POST/CDL credentials' },
      { value: '24 hrs', label: 'FOIA Public Records Turnaround', context: 'Instant self-service data reporting' }
    ],
    statutoryStandards: ['Civil Service Rules', 'EEOC Public Sector EEO-4', 'FMLA / ADA Compliance'],
    interactiveDemo: {
      demoTitle: 'Civil Service Classification & Step Schedule',
      demoSubtitle: 'Explore municipal salary matrices, certification alert queues, and union seniority tiers',
      tabs: ['Step & Grade Matrix', 'Credential Verification Hub', 'FTE Position Roster']
    }
  },
  {
    id: 'project-accounting',
    title: 'Capital Improvement Projects (CIP) & Grant Accounting',
    shortTitle: 'Project Accounting & CIP',
    category: 'Fiscal',
    badge: '2 CFR 200 / Uniform Guidance',
    summary: 'Track multi-year capital projects, bond funding, infrastructure modernization, and federal grants (ARPA, FEMA, DOT, EPA) with audit-ready work-in-progress (WIP) capitalization.',
    iconName: 'FolderGit2',
    challengesSolved: [
      'Prevents loss of federal grant reimbursements through rigorous single-audit milestone tracking',
      'Automates multi-year municipal Capital Improvement Plan (CIP) budgets across fiscal years',
      'Tracks contractor retainage, mechanics liens, and milestone pay applications (AIA G702/G703)',
      'Automated transfer of completed WIP assets into fixed asset depreciation schedules'
    ],
    capabilities: [
      {
        title: 'Multi-Year CIP Budget Lifecycle',
        description: 'Manages 5-year and 10-year municipal capital plans with continuous appropriation rollover and bond proceeds segregation.',
        complianceRef: 'GFOA CIP Capitalization'
      },
      {
        title: 'Federal Grant Drawdown Tracking',
        description: 'Rigorous cost-allocation structures compliant with federal Uniform Guidance, streamlining SEFA (Schedule of Expenditures of Federal Awards) reporting.',
        complianceRef: '2 CFR 200 Subpart E'
      },
      {
        title: 'Contractor Pay App & Retainage Engine',
        description: 'Tracks contract encumbrances, change order authorisations, and statutory 5% or 10% escrow retainage releases upon project acceptance.',
        complianceRef: 'Public Contract Code'
      },
      {
        title: 'Asset Capitalization & Depreciation',
        description: 'One-click conversion of construction work-in-progress into GASB 34 compliant infrastructure fixed assets with automated componentization.',
        complianceRef: 'GASB Statement No. 34'
      }
    ],
    impactMetrics: [
      { value: '$42M', label: 'Federal & State Grant Funds Protected', context: 'Across client city audits with 0 clawbacks' },
      { value: '45%', label: 'Faster CIP Project Closeout', context: 'Automated retainage & asset capitalization' },
      { value: '100%', label: 'Single Audit (SEFA) Compliance', context: 'Comprehensive subrecipient monitoring' }
    ],
    statutoryStandards: ['2 CFR 200 (Uniform Guidance)', 'GASB 34 Infrastructure Assets', 'Federal Single Audit Act'],
    interactiveDemo: {
      demoTitle: 'Municipal CIP Infrastructure Ledger',
      demoSubtitle: 'Manage capital bond expenditures, federal grant drawdowns, and contractor retainage',
      tabs: ['Capital Projects (CIP)', 'Federal Grant Drawdowns', 'Retainage & Work Orders']
    }
  },
  {
    id: 'fleet-mgmt',
    title: 'Municipal Fleet, Assets & Telematics Management',
    shortTitle: 'Fleet & Assets',
    category: 'Operations',
    badge: 'Telematics & EV Fleet Ready',
    summary: 'Comprehensive management of all municipal rolling stock—police cruisers, fire apparatus, snowplows, transit buses, and city utility trucks—with automated work orders and fuel tracking.',
    iconName: 'Truck',
    challengesSolved: [
      'Eliminates unexpected public safety vehicle downtime through predictive maintenance scheduling',
      'Tracks fuel consumption, cardlock keys, and municipal EV charging infrastructure telemetry',
      'Streamlines municipal work orders, internal labor billing, and warranty recovery from manufacturers',
      'Automates 10-year fleet replacement forecasting based on lifecycle cost analysis and salvage value'
    ],
    capabilities: [
      {
        title: 'Preventive Maintenance Automation',
        description: 'Schedules servicing by engine hours, mileage, and days with automated dispatch alerts for emergency vehicles.',
        complianceRef: 'DOT / OSHA Safety Standards'
      },
      {
        title: 'Telematics & Fuel Card Integration',
        description: 'Direct ingestion of OBD-II/J1939 engine diagnostic trouble codes (DTC), GPS location, and fuel pump transaction logs.',
        complianceRef: 'Fleet Sustainability Mandates'
      },
      {
        title: 'Internal Service Fund (ISF) Billing',
        description: 'Automates monthly maintenance and vehicle rental chargebacks from Central Fleet to Police, Fire, and Public Works budgets.',
        complianceRef: 'Governmental Fund Accounting'
      },
      {
        title: 'Municipal Fleet Replacement Index',
        description: 'Scoring algorithm evaluating age, maintenance costs, reliability, and fuel efficiency to prioritize capital vehicle appropriations.',
        complianceRef: 'APWA Fleet Guidelines'
      }
    ],
    impactMetrics: [
      { value: '99.4%', label: 'Emergency Fleet Uptime', context: 'Police interceptors and frontline fire apparatus' },
      { value: '28%', label: 'Reduction in Maintenance Spend', context: 'Via warranty capture & scheduled servicing' },
      { value: '$420K', label: 'Annual Fuel Savings', context: 'Through route optimization & idling reduction' }
    ],
    statutoryStandards: ['APWA Fleet Best Practices', 'DOT Safety Regulations', 'EPA Clean Fleet Mandates'],
    interactiveDemo: {
      demoTitle: 'City Operations Fleet Telematics Console',
      demoSubtitle: 'Real-time vehicle health, automated work orders, and fuel efficiency analytics',
      tabs: ['Live Fleet Roster', 'Work Order Dispatch', 'Replacement Scoring']
    }
  },
  {
    id: 'inventory',
    title: 'City Inventory & Warehouse Supply Management',
    shortTitle: 'Inventory & Supplies',
    category: 'Operations',
    badge: 'Multi-Location Barcode & FIFO',
    summary: 'Centralizes parts and material management for public works, water distribution utilities, traffic signals, street maintenance, and emergency response stockpiles.',
    iconName: 'Boxes',
    challengesSolved: [
      'Eliminates stock-outs of critical utility pipe fittings, water meters, and electrical components',
      'Tracks inventory valuations across FIFO, LIFO, and weighted average methods for audit compliance',
      'Automates internal work-order material issuances and departmental chargebacks',
      'Barcode mobile scanning for fast warehouse check-in, transfer, and annual cycle counting'
    ],
    capabilities: [
      {
        title: 'Multi-Warehouse & Central Yard Control',
        description: 'Unified visibility across public works yards, emergency management stockpiles, and remote utility pump stations.',
        complianceRef: 'GASB 34 Asset Controls'
      },
      {
        title: 'Automated Min/Max Replenishment',
        description: 'Automatic generation of purchase requisitions when critical city infrastructure parts fall below safety thresholds.',
        complianceRef: 'Municipal Procurement Code'
      },
      {
        title: 'Emergency Preparedness Stockpiling',
        description: 'Dedicated FEMA-ready inventory reserves for storm recovery, sandbags, water distribution, and emergency generator fuels.',
        complianceRef: 'FEMA Public Assistance Guidelines'
      },
      {
        title: 'Mobile Barcode & RFID Auditing',
        description: 'Seamless mobile app for yard personnel to scan parts directly into active work orders and conduct rapid cycle audits.',
        complianceRef: 'Internal Controls Best Practice'
      }
    ],
    impactMetrics: [
      { value: '99.2%', label: 'Inventory Count Accuracy', context: 'Zero audit variance during annual review' },
      { value: '34%', label: 'Carrying Cost Reduction', context: 'Eliminated redundant safety stock across yards' },
      { value: '0 hrs', label: 'Emergency Part Delay', context: 'Automated reorder triggers for vital pipe fittings' }
    ],
    statutoryStandards: ['GASB Reporting Guidelines', 'Uniform Commercial Code', 'FEMA Resource Typing'],
    interactiveDemo: {
      demoTitle: 'Public Works Central Warehouse Console',
      demoSubtitle: 'Monitor stock levels, emergency stockpiles, and departmental material allocations',
      tabs: ['Warehouse Stock Catalog', 'Reorder Triggers', 'Material Issue Ledger']
    }
  },
  {
    id: 'recruitment-onboarding',
    title: 'Recruitment & Civil Service Merit Onboarding',
    shortTitle: 'Recruitment & Onboarding',
    category: 'Workforce',
    badge: 'Merit Testing & Public Oath',
    summary: 'End-to-end applicant tracking and onboarding tailored for city governments, managing civil service merit exams, veteran preference scoring, background investigations, and sworn oaths.',
    iconName: 'UserCheck',
    challengesSolved: [
      'Eliminates manual scoring and ranking for civil service eligibility lists',
      'Accelerates time-to-hire for high-demand municipal roles: 911 dispatchers, police, water operators',
      'Automates multi-phase public safety background checks (CJIS, polygraph, psychological)',
      'Digital pre-boarding with automated ethics disclosures, W-4, direct deposit, and official oath of office'
    ],
    capabilities: [
      {
        title: 'Civil Service Examination & Ranking',
        description: 'Configurable merit scoring rules with automatic calculation of veteran preference points, residency bonus, and certified ranking lists.',
        complianceRef: 'Civil Service Commission Rules'
      },
      {
        title: 'Public Safety Investigation Tracking',
        description: 'Secure, CJIS-compliant tracking for sworn personnel background investigations, references, and chain of custody documentation.',
        complianceRef: 'CJIS Security Policy'
      },
      {
        title: 'Digital Sworn Oath & Ethics Disclosures',
        description: 'Paperless completion of municipal conflict of interest forms, state financial disclosures (Form 700), and recorded oath of office.',
        complianceRef: 'State Government Code'
      },
      {
        title: 'EEO-4 & Diversity Compliance Reporting',
        description: 'One-click demographic analytics for public sector affirmative action and federal EEOC compliance reporting.',
        complianceRef: 'Title VII / EEOC EEO-4'
      }
    ],
    impactMetrics: [
      { value: '42 days', label: 'Faster Time-to-Hire', context: 'From posting to appointment in municipal departments' },
      { value: '100%', label: 'Merit List Integrity', context: 'Zero civil service appeals upheld against scoring' },
      { value: '98%', label: 'Day-One Readiness', context: 'Uniforms, credentials, and credentials issued prior to day 1' }
    ],
    statutoryStandards: ['Civil Service Merit Principles', 'EEOC EEO-4 Compliance', 'CJIS Background Screening'],
    interactiveDemo: {
      demoTitle: 'Municipal Civil Service Talent Console',
      demoSubtitle: 'Manage certified eligibility lists, candidate scoring, and official appointment workflows',
      tabs: ['Civil Service Eligibility List', 'Onboarding Verification Matrix', 'Ethics & Oath Packet']
    }
  },
  {
    id: 'time-labor',
    title: 'Municipal Time, Labor & Shift Scheduling',
    shortTitle: 'Time & Labor',
    category: 'Workforce',
    badge: '24/48 Fire & Split Shifts',
    summary: 'Automates complex municipal shift scheduling, electronic punch collection, union-mandated meal penalties, call-back minimums, and supervisor sign-offs across 24/7 city operations.',
    iconName: 'Clock',
    challengesSolved: [
      'Eliminates manual paper timecards across 24/7 emergency services, public works, and parks',
      'Enforces union collective bargaining rules for emergency call-out pay, standby, and shift premiums',
      'Provides real-time supervisor overtime budget warnings before assignments are approved',
      'Seamless bi-directional integration with payroll, automatically classifying comp time vs cash overtime'
    ],
    capabilities: [
      {
        title: 'Public Safety Shift Rostering',
        description: 'Configurable rosters for Fire 24/48 and 48/96 cycles, Police 12-hour patrol shifts, and split-shift transit schedules with minimum staffing alarms.',
        complianceRef: 'Public Safety Staffing Mandates'
      },
      {
        title: 'Comp Time Banking & Payout Caps',
        description: 'Enforces statutory FLSA comp-time banking limits (240 hours general, 480 hours public safety) with automated payout triggers.',
        complianceRef: '29 U.S.C. § 207(o)'
      },
      {
        title: 'Geo-Fenced Mobile & Biometric Punch',
        description: 'Ruggedized field clocks and geofenced smartphone check-in for public works crews and parks staff with offline caching.',
        complianceRef: 'Fair Labor Standards Act'
      },
      {
        title: 'Disaster Recovery & FEMA Labor Tracking',
        description: 'Dedicated disaster cost codes that isolate storm response labor hours for 100% federal emergency reimbursement.',
        complianceRef: 'FEMA Disaster Assistance Policy'
      }
    ],
    impactMetrics: [
      { value: '94%', label: 'Reduction in Time Approval Delays', context: 'Multi-level electronic sign-off routing' },
      { value: '$310K', label: 'Overtime Budget Leakage Prevented', context: 'Via real-time threshold warnings' },
      { value: '100%', label: 'FEMA Labor Reimbursement Audit', context: 'Automated disaster tracking codes' }
    ],
    statutoryStandards: ['FLSA Section 7(o) Comp Time', 'FEMA Schedule of Equipment & Labor', 'Union MOU Rules'],
    interactiveDemo: {
      demoTitle: 'Municipal Shift Scheduling & Labor Portal',
      demoSubtitle: 'Explore Fire Department 24/48 rotations, Police 12-hr shifts, and comp time banking',
      tabs: ['Fire 24/48 Shift Schedule', 'Police Patrol Roster', 'Overtime & Comp Tracker']
    }
  },
  {
    id: 'offboarding',
    title: 'Offboarding, Retirement & Asset Transition',
    shortTitle: 'Offboarding & Transition',
    category: 'Governance',
    badge: 'CJIS Revocation & PERS Vesting',
    summary: 'A secure, auditable separation workflow ensuring city equipment recovery, credential revocation, sick leave conversion to retirement health savings, and state pension reporting.',
    iconName: 'ShieldAlert',
    challengesSolved: [
      'Prevents security vulnerabilities through immediate, automated revocation of CJIS and municipal network access',
      'Guarantees 100% recovery of city-issued property: badges, firearms, body cameras, radios, and keys',
      'Automates complex terminal pay calculations including sick leave buyback and vacation accrual caps',
      'Certifies final service credits and compensation data directly to state public retirement systems'
    ],
    capabilities: [
      {
        title: 'Automated Credential & Access Revocation',
        description: 'Synchronized deprovisioning across building access keycards, Active Directory, CAD/RMS public safety systems, and financial authorisations.',
        complianceRef: 'CJIS Security Policy Area 5'
      },
      {
        title: 'Sworn Officer Asset Custody Tracking',
        description: 'Strict chain-of-custody documentation for weapons, ballistic vests, tactical gear, radio serial numbers, and emergency vehicle return.',
        complianceRef: 'Municipal Property Accountability'
      },
      {
        title: 'Retirement Sick Leave & VEBA Conversion',
        description: 'Calculates contractual percentage payouts of unused sick leave into Post-Employment Health Plans (VEBA / HRA) or pension service credits.',
        complianceRef: 'IRS Section 501(c)(9)'
      },
      {
        title: 'Pension Vesting & Separation Certification',
        description: 'Direct generation of state retirement system separation forms (PERS/TRS) with verified final average salary and service credit totals.',
        complianceRef: 'State Retirement System Standards'
      }
    ],
    impactMetrics: [
      { value: '15 min', label: 'Complete Digital Access Revocation', context: 'Down from 48-72 hours under legacy systems' },
      { value: '100%', label: 'Public Safety Asset Recovery', context: 'Zero missing weapons, radios, or badges' },
      { value: '0', label: 'Terminal Pay Grievances', context: 'Clear formula transparency on leave conversions' }
    ],
    statutoryStandards: ['CJIS Security Policy 5.4', 'IRS 501(c)(9) VEBA Rules', 'State Public Records Retention'],
    interactiveDemo: {
      demoTitle: 'Municipal Asset Recovery & Separation Audit',
      demoSubtitle: 'Review offboarding checklist, IT/CJIS access cutoffs, and terminal pay calculations',
      tabs: ['Public Safety Asset Return', 'Security Clearance Revocation', 'Terminal Pay & Pension']
    }
  }
];

export const MUNICIPAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'city-of-lakewood',
    clientName: 'City of Lakewood',
    entityType: 'City Municipality',
    population: '185,000 Residents',
    operatingBudget: '$390M Annual Budget',
    location: 'Pacific Northwest Region',
    legacySystem: 'Tyler Munis (22-Year Legacy Instance)',
    implementationDuration: '14 Months (On-Schedule)',
    headline: 'Replacing a 22-Year Legacy System with Unified Civic ERP Across 12 City Departments',
    challenge: 'The city was trapped on an obsolete, heavily customized legacy ERP that required 60+ days for annual close, suffered frequent payroll errors for public safety staff, and maintained disconnected spreadsheets for fleet and capital improvement projects.',
    solution: 'PrecisionERP LLC served as primary implementation partner, re-architecting the chart of accounts for GASB 34/87/96, deploying automated FLSA 7(k) public safety payroll, migrating 15 years of general ledger records, and training 450 municipal users.',
    outcomes: [
      'Year-end fiscal close reduced from 62 days to 16 calendar days',
      'Dual-run payroll achieved 100% net accuracy across 1,400 union and sworn personnel',
      'Achieved clean GFOA Certificate of Achievement for Excellence in Financial Reporting in Year 1',
      'Unified 780 fleet assets and 42 active CIP projects into real-time executive dashboards'
    ],
    modulesDeployed: ['Finance & GL', 'Payroll', 'Time & Labor', 'Fleet & Assets', 'Project Accounting'],
    testimonial: {
      quote: "PrecisionERP LLC did not just install software—they understood the exact nuances of our police union MOU, our fire 24/48 rotations, and our state retirement system. Their public sector expertise made this the smoothest major IT rollout in city history.",
      author: "Marcus Vance, CPA",
      role: "Director of Finance & Information Technology"
    }
  },
  {
    id: 'metro-fire-district',
    clientName: 'Metro Regional Fire & Rescue District',
    entityType: 'Special District',
    population: '420,000 Protected Citizens',
    operatingBudget: '$145M Operating Budget',
    location: 'Mid-Atlantic Region',
    legacySystem: 'Disparate AS400 & Excel Workbooks',
    implementationDuration: '9 Months (Phased)',
    headline: 'Modernizing Public Safety Shift Scheduling, FLSA 7(k) Payroll, and Fleet Readiness',
    challenge: 'Complex 24/48 and 48/96 fire shift rotations generated frequent overtime calculation disputes, while paper-based maintenance logs for 115 frontline fire pumpers and ladder trucks risked apparatus readiness.',
    solution: 'PrecisionERP LLC deployed specialized Public Safety Payroll, Time & Labor with automated FLSA 7(k) threshold calculation, and the Fleet Telematics module with direct maintenance work-order alerts for fire station captains.',
    outcomes: [
      'Zero FLSA overtime calculation disputes since cutover',
      'Frontline apparatus readiness increased from 91% to 99.6%',
      'Eliminated 3,200 annual manual overtime calculation hours for station battalion chiefs',
      '100% FEMA audit compliance for severe weather and mutual-aid emergency incidents'
    ],
    modulesDeployed: ['Payroll', 'Time & Labor', 'Fleet & Assets', 'Inventory & Supplies'],
    testimonial: {
      quote: "When dealing with emergency response, payroll errors or apparatus breakdowns are unacceptable. PrecisionERP LLC understood the pressure our district operates under and delivered an airtight system.",
      author: "Chief Elena Rodriguez",
      role: "Deputy Chief of Administration & Operations"
    }
  },
  {
    id: 'cumberland-county',
    clientName: 'County of Cumberland',
    entityType: 'County Government',
    population: '540,000 Residents',
    operatingBudget: '$720M Operating Budget',
    location: 'Southeast Region',
    legacySystem: 'CGI Advantage & Infor Lawson Hybrid',
    implementationDuration: '18 Months (Enterprise Suite)',
    headline: 'Unified Capital Improvement Accounting, Civil Service HR & Centralized Fleet',
    challenge: 'County administrators managed over $180M in federal infrastructure grants across 14 public works departments with disparate systems, facing high audit risk and inefficient civil service recruitment.',
    solution: 'PrecisionERP LLC implemented an enterprise municipal suite encompassing Project Accounting (CIP), Civil Service HR & Recruitment, and Multi-Location Central Warehouse Inventory across the county.',
    outcomes: [
      '$180M in federal grant expenditures audited under 2 CFR 200 with zero questioned costs',
      'Average time-to-hire for critical public works personnel reduced by 36 days',
      'Central warehouse inventory accuracy improved to 99.4% through mobile barcode integration',
      'Automated GASB 87 and GASB 96 compliance reports generated in minutes'
    ],
    modulesDeployed: ['Finance & GL', 'Project Accounting', 'HR & Civil Service', 'Recruitment & Onboarding', 'Inventory & Supplies'],
    testimonial: {
      quote: "PrecisionERP LLC is the gold standard for municipal and county ERP implementations. Their team's deep knowledge of county fund accounting and civil service rules was evident from day one.",
      author: "David Sterling",
      role: "County Administrator & Clerk of the Board"
    }
  }
];

export const METHODOLOGY_STAGES = [
  {
    step: '01',
    title: 'Pre-RFP Readiness & Municipal Gap Analysis',
    duration: 'Weeks 1 - 4',
    description: 'We audit current municipal workflows, review union collective bargaining agreements (MOUs), assess legacy data hygiene, and define state statutory compliance requirements.'
  },
  {
    step: '02',
    title: 'Chart of Accounts & Fund Structuring',
    duration: 'Weeks 5 - 8',
    description: 'Architecting a GASB 34/54 compliant fund structure separating General, Enterprise, Internal Service, and Capital Project funds with rigorous encumbrance rules.'
  },
  {
    step: '03',
    title: 'Data Extraction, Cleansing & Reconciliation',
    duration: 'Weeks 9 - 16',
    description: 'Extracting 7-15 years of historical city financial records, master vendor lists, employee records, and fleet equipment assets with automated cleansing algorithms.'
  },
  {
    step: '04',
    title: 'Dual-Pay Run Validation & Public Safety Testing',
    duration: 'Weeks 17 - 24',
    description: 'Running minimum 3 consecutive parallel payroll cycles against the legacy system to ensure net-pay, pension tier deductions, and FLSA 7(k) overtime match to the cent.'
  },
  {
    step: '05',
    title: 'Role-Based City Staff Training & Change Management',
    duration: 'Weeks 25 - 28',
    description: 'Tailored hands-on simulations for department heads, payroll clerks, public works supervisors, warehouse technicians, and civil service commissioners.'
  },
  {
    step: '06',
    title: 'Go-Live War Room & 24/7 Cutover Stabilization',
    duration: 'Weeks 29+',
    description: 'On-site cutover command center during fiscal year transition, daily executive status briefings, and ongoing post-live hypercare support.'
  }
];

export const COMPLIANCE_STANDARDS = [
  {
    code: 'GASB 34 / 54',
    name: 'Fund Accounting & Reporting',
    detail: 'Full support for modified accrual, fund balances classification (Nonspendable, Restricted, Committed, Assigned, Unassigned), and government-wide financial statements.'
  },
  {
    code: 'GASB 87 & 96',
    name: 'Leases & SBITA Subscriptions',
    detail: 'Automated amortization schedules, lease liability calculations, right-of-use asset tracking, and comprehensive footnote disclosure exports.'
  },
  {
    code: 'FLSA Section 7(k)',
    name: 'Public Safety Overtime Cycles',
    detail: 'Certified overtime calculations for police officers and firefighters over 7 to 28-day statutory cycles including longevity and specialty pays.'
  },
  {
    code: 'CJIS Level 4',
    name: 'Criminal Justice Security Policy',
    detail: 'Strict role-based access control, encrypted audit logs, and instantaneous credential revocation for public safety personnel records.'
  },
  {
    code: '2 CFR 200 (Uniform Guidance)',
    name: 'Federal Grant Management (SEFA)',
    detail: 'Compliant tracking of federal awards (ARPA, FEMA, DOT) ensuring zero audit findings during annual Single Audits.'
  },
  {
    code: 'Civil Service & Merit Rules',
    name: 'Merit Testing & EEO-4',
    detail: 'Transparent eligibility list generation, veteran preference point scoring, and automated federal EEO-4 public workforce reporting.'
  }
];
