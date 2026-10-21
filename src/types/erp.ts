export type ModuleId =
  | 'finance-gl'
  | 'payroll'
  | 'hr-civil-service'
  | 'project-accounting'
  | 'fleet-mgmt'
  | 'inventory'
  | 'recruitment-onboarding'
  | 'time-labor'
  | 'offboarding';

export interface ModuleMetric {
  value: string;
  label: string;
  context: string;
}

export interface ModuleCapability {
  title: string;
  description: string;
  complianceRef?: string;
}

export interface ERPModule {
  id: ModuleId;
  title: string;
  shortTitle: string;
  category: 'Fiscal' | 'Workforce' | 'Operations' | 'Governance';
  badge: string;
  summary: string;
  iconName: string;
  challengesSolved: string[];
  capabilities: ModuleCapability[];
  impactMetrics: ModuleMetric[];
  statutoryStandards: string[];
  interactiveDemo: {
    demoTitle: string;
    demoSubtitle: string;
    tabs: string[];
  };
}

export interface CaseStudy {
  id: string;
  clientName: string;
  entityType: 'City Municipality' | 'County Government' | 'Regional Utility & Transit' | 'Special District';
  population: string;
  operatingBudget: string;
  location: string;
  legacySystem: string;
  implementationDuration: string;
  headline: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  modulesDeployed: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ScopeOptions {
  agencyType: string;
  populationTier: string;
  legacyPlatform: string;
  selectedModules: ModuleId[];
  integrations: string[];
}

export interface ScopeResult {
  estimatedDurationWeeks: number;
  phaseCount: number;
  complexityTier: 'Standard Municipal' | 'Accelerated Civic' | 'Comprehensive Metro Enterprise';
  roadmapPhases: {
    phase: string;
    duration: string;
    modules: string[];
    criticalMilestone: string;
  }[];
  statutoryChecklist: string[];
  changeManagementRecommendation: string;
}

export interface ConsultationForm {
  municipalityName: string;
  department: string;
  contactName: string;
  officialTitle: string;
  workEmail: string;
  phone: string;
  state: string;
  selectedModules: ModuleId[];
  fiscalYearTarget: string;
  projectNotes: string;
}
