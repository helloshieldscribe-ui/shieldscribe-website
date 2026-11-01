export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  inclusions: string[];
  clausesSummary: string[];
  recommendedFor: string;
  documentCode: string;
}

export interface ProblemItem {
  id: string;
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  deliverable: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  metricOrFeature: string;
}

export interface FutureServiceItem {
  id: string;
  title: string;
  status: 'Planned' | 'Coming Soon';
  description: string;
  relevance: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Services & Scope' | 'Delivery & Formats' | 'Compliance & Legal';
}

export interface PolicySampleClause {
  sectionNumber: string;
  heading: string;
  content: string;
  guidelines?: string[];
}

export interface PolicyDocumentSample {
  id: string;
  title: string;
  documentId: string;
  version: string;
  classification: string;
  effectiveDate: string;
  reviewCadence: string;
  owner: string;
  purpose: string;
  scope: string;
  rolesAndResponsibilities: Array<{ role: string; responsibility: string }>;
  clauses: PolicySampleClause[];
  reviewAndApproval: {
    preparedBy: string;
    approvedBy: string;
    nextReviewDate: string;
  };
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  country: string;
  industry: string;
  companySize: string;
  requiredService: string;
  additionalRequirements: string;
  consentCheckbox: boolean;
}
