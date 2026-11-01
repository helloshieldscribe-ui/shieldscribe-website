import {
  ServiceItem,
  ProblemItem,
  HowItWorksStep,
  BenefitItem,
  FutureServiceItem,
  FAQItem,
  PolicyDocumentSample
} from '../types';

export const HERO_VALUE_STATEMENTS = [
  {
    title: 'Business-Specific Documentation',
    description: 'Customised to your company structure, tooling stack, and team size — not unedited stock templates.'
  },
  {
    title: 'Editable Word & PDF Files',
    description: 'Delivered in fully editable Microsoft Word (.docx) and clean, signed PDF formats for immediate distribution.'
  },
  {
    title: 'Human-Reviewed Deliverables',
    description: 'Every policy is thoroughly reviewed by documentation specialists for clarity, grammar, and operational realism.'
  }
];

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    id: 'prob-1',
    number: '01',
    title: 'No Dedicated Security Team',
    description: 'Small companies, digital agencies, and early SaaS startups rarely have the budget to employ full-time Information Security Officers or GRC documentation writers.',
    impact: 'Security responsibilities remain informal, leading to critical documentation gaps during audits.'
  },
  {
    id: 'prob-2',
    number: '02',
    title: 'Unclear Security Responsibilities',
    description: 'Without written policies, staff and external contractors do not know who is accountable for access revocations, system updates, or data protection.',
    impact: 'Assumptions replace documented protocol, increasing human error and response latency.'
  },
  {
    id: 'prob-3',
    number: '03',
    title: 'Generic Templates That Fail in Practice',
    description: 'Free internet policy templates are almost always bloated with 80 pages of irrelevant enterprise jargon that employees ignore and founders never implement.',
    impact: 'Documents sit in a forgotten folder without reflecting real company tools and workflows.'
  },
  {
    id: 'prob-4',
    number: '04',
    title: 'Customer Security Questionnaires',
    description: 'Enterprise prospects and B2B buyers routinely demand evidence of baseline cybersecurity governance before approving supplier vendor contracts.',
    impact: 'Deals stall and revenue is delayed while founders scramble to write policies from scratch.'
  },
  {
    id: 'prob-5',
    number: '05',
    title: 'Inconsistent Incident Procedures',
    description: 'When a phishing attempt succeeds or a laptop is misplaced, teams lack documented step-by-step triage escalation pathways and reporting forms.',
    impact: 'Confusion during initial hours damages containment efficacy and client transparency.'
  },
  {
    id: 'prob-6',
    number: '06',
    title: 'Severe Time & Bandwidth Constraints',
    description: 'Founders and technical leads are fully occupied building products and supporting clients, leaving no time for tedious policy drafting.',
    impact: 'Documentation is perpetually postponed until an urgent client audit or compliance deadline hits.'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'password-access-control',
    documentCode: 'POL-AC-001',
    title: 'Password & Access Control Policy',
    tagline: 'Standardise authentication, privileged credentials, and credential lifecycles.',
    description: 'Establishes clear, enforceable parameters for workforce authentication, role-based permissions, multi-factor enforcement, and prompt offboarding.',
    iconName: 'KeyRound',
    recommendedFor: 'Growing remote teams, SaaS startups, digital marketing agencies',
    inclusions: [
      'Password complexity, passphrase standards & credential management rules',
      'Mandatory Multi-Factor Authentication (MFA) requirements across business tools',
      'Formal access request, approval, and semi-annual review procedures',
      'Employee & contractor account provisioning and immediate revocation protocol',
      'Segregation of duties and privileged administrator access responsibilities'
    ],
    clausesSummary: [
      'Section 1: Authentication & Password Complexity Thresholds (minimum 14 characters, password manager mandate)',
      'Section 2: Multi-Factor Authentication (MFA/2FA) Enforcement across all primary cloud workspaces',
      'Section 3: Principle of Least Privilege and Role-Based Access Control (RBAC)',
      'Section 4: Provisioning & Deprovisioning Lifecycle (24-hour departure cutoff standard)',
      'Section 5: Privileged Account Management and Shared Credentials Prohibition'
    ]
  },
  {
    id: 'acceptable-use',
    documentCode: 'POL-AU-002',
    title: 'Acceptable Use Policy',
    tagline: 'Clarify day-to-day employee guidelines for devices, software, and company communication.',
    description: 'Defines acceptable and unacceptable behaviour when accessing business infrastructure, communication channels, internet access, and proprietary hardware.',
    iconName: 'Laptop',
    recommendedFor: 'Distributed teams, hybrid workplaces, marketing and creative agencies',
    inclusions: [
      'Company-owned and BYOD device usage expectations & endpoint safeguards',
      'Safe internet browsing, email etiquette, and social media boundaries',
      'Approved software guidelines and prohibition of unauthorised third-party tools (Shadow IT)',
      'Staff obligations regarding confidential business intellectual property',
      'Immediate reporting channels for suspicious communications or misuse'
    ],
    clausesSummary: [
      'Section 1: Scope & Hardware Custody Expectations',
      'Section 2: Electronic Communications (Email, Slack, Messaging) Security',
      'Section 3: Approved Software, License Compliance & Shadow IT Restrictions',
      'Section 4: Monitoring, Privacy Expectations & Company Property Rights',
      'Section 5: Misuse Identification, Disciplinary Escalation & Reporting'
    ]
  },
  {
    id: 'data-protection',
    documentCode: 'POL-DP-003',
    title: 'Data Protection Policy',
    tagline: 'Establish structured rules for data classification, handling, and secure retention.',
    description: 'Provides a practical framework for categorising sensitive company and client information, regulating transmission, and preventing unauthorised disclosure.',
    iconName: 'ShieldCheck',
    recommendedFor: 'Businesses handling client records, financial data, or proprietary IP',
    inclusions: [
      'Four-tier data classification structure (Public, Internal, Confidential, Restricted)',
      'Specific handling practices for client data, personal data, and proprietary code',
      'Secure cloud storage rules, local disk encryption, and backup mandates',
      'External data sharing parameters and third-party transmission safeguards',
      'Data retention timelines and secure electronic disposal requirements'
    ],
    clausesSummary: [
      'Section 1: Information Classification Schema (Public / Internal / Confidential / Restricted)',
      'Section 2: Data Storage, Transit Encryption (TLS) & Endpoint Full-Disk Encryption (BitLocker/FileVault)',
      'Section 3: Authorised Third-Party Sharing and Secure File Transfer Protocol',
      'Section 4: Data Retention Periods and Media Sanitisation Standards',
      'Section 5: Data Subject Privacy Principles & Regulatory Awareness'
    ]
  },
  {
    id: 'incident-response',
    documentCode: 'POL-IR-004',
    title: 'Incident Response Plan',
    tagline: 'A structured, actionable playbook to triage, contain, and report security events.',
    description: 'Equips your team with a clear 5-phase action plan when security anomalies, suspicious logins, phishing incidents, or hardware losses occur.',
    iconName: 'AlertTriangle',
    recommendedFor: 'All organisations needing a documented escalation path for customer vendor questionnaires',
    inclusions: [
      'Security event vs. security incident identification and severity definitions',
      'Internal reporting workflow with contact matrix and escalation channels',
      'Designated roles, incident coordinators, and emergency responsibilities',
      'Practical initial containment guidance (isolation, credential reset, preservation)',
      'Post-incident review checklist and remediation documentation template'
    ],
    clausesSummary: [
      'Section 1: Incident Severity Matrix (Severity 1 Low to Severity 4 Critical)',
      'Section 2: Incident Response Team (IRT) Roles & Contact Hierarchy',
      'Section 3: Five-Stage Response Lifecycle (Detection, Containment, Eradication, Recovery, Lessons Learned)',
      'Section 4: External Stakeholder & Customer Breach Notification Thresholds',
      'Section 5: Post-Incident Debriefing & Policy Revision Requirements'
    ]
  },
  {
    id: 'remote-working',
    documentCode: 'POL-RW-005',
    title: 'Remote Working Security Policy',
    tagline: 'Safeguard distributed workstations, home Wi-Fi networks, and mobile environments.',
    description: 'Addresses the specific security risks of modern flexible teams, remote engineers, and mobile staff operating outside corporate firewalls.',
    iconName: 'Wifi',
    recommendedFor: 'Remote-first startups, hybrid businesses, and distributed consultants',
    inclusions: [
      'Remote connectivity requirements (VPN, secure DNS, and verified home routers)',
      'Physical device protection in public spaces, co-working desks, and transit',
      'Secure voice/video communication and screen privacy in shared environments',
      'Home wireless security standards (WPA2/WPA3, non-default router admin credentials)',
      'Guidelines for secure handling of business data on non-office networks'
    ],
    clausesSummary: [
      'Section 1: Approved Remote Locations & Physical Workspace Security',
      'Section 2: Home Network Configuration (WPA3/WPA2, Router Password Changes)',
      'Section 3: Public Wi-Fi Safeguards, Screen Privacy Filters & Device Inactivity Locks',
      'Section 4: Printing Restrictions & Paper Document Shredding Protocols',
      'Section 5: Loss, Theft & Emergency Incident Notification Timelines'
    ]
  }
];

export const STARTER_PACK_DETAILS = {
  name: 'ShieldScribe Security Documentation Starter Pack',
  price: '$199',
  billingType: 'One-Time Payment',
  targetTurnaround: '48 hours after requirements, scope and payment confirmation',
  documentsCount: 5,
  includedDocuments: [
    'Password & Access Control Policy (POL-AC-001)',
    'Acceptable Use Policy (POL-AU-002)',
    'Data Protection Policy (POL-DP-003)',
    'Incident Response Plan (POL-IR-004)',
    'Remote Working Security Policy (POL-RW-005)'
  ],
  keyFeatures: [
    '5 foundational cybersecurity documents tailored to your business',
    'Customised based on your specific team size, cloud tooling, and operating model',
    'Delivered in fully editable Microsoft Word (.docx) files',
    'High-resolution, professionally formatted PDF versions',
    '1 revision cycle included within 14 days of initial draft delivery',
    'Defined scope, transparent process, and guaranteed confidentiality',
    'Direct document control headers ready for audit distribution'
  ],
  scopeClarification: 'The Starter Pack is tailored for businesses with up to 50 employees using standard modern cloud workflows (Google Workspace, Microsoft 365, Slack, GitHub, etc.). Organisations with complex multi-subsidiary structures, specialized healthcare (HIPAA) or payment processing (PCI-DSS Level 1) requirements can request a custom documentation quote.'
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Tell Us About Your Business',
    subtitle: 'Quick intake assessment',
    description: 'Complete our simple 5-minute requirement questionnaire outlining your company structure, primary cloud tools, team size, and immediate documentation goals.',
    timeline: 'Approx. 5–10 minutes',
    deliverable: 'Client Intake Profile'
  },
  {
    step: 2,
    title: 'Confirm Requirements',
    subtitle: 'Scope & timeline review',
    description: 'We review your business profile, verify tooling details, confirm the exact deliverables, and lock in the 48-hour delivery timeline upon invoice settlement.',
    timeline: 'Within 4–6 business hours',
    deliverable: 'Confirmed Statement of Work'
  },
  {
    step: 3,
    title: 'Documentation Preparation',
    subtitle: 'Tailored drafting & review',
    description: 'Our specialists draft and customize each policy around your actual operations, followed by a human review check for clarity, structural coherence, and practical applicability.',
    timeline: '24–36 hours',
    deliverable: 'Customized Document Suite'
  },
  {
    step: 4,
    title: 'Receive Your Documents',
    subtitle: 'Editable files & revision',
    description: 'Receive your complete policy pack in editable Word (.docx) and PDF formats. You have 14 days to request adjustments under your included revision cycle.',
    timeline: 'Target 48 hours total',
    deliverable: 'Final Word & PDF Deliverables'
  }
];

export const WHY_CHOOSE_ITEMS: BenefitItem[] = [
  {
    id: 'why-1',
    title: 'Clear and Practical Documentation',
    description: 'We avoid indecipherable academic jargon. Our policies are written in crisp, plain English so your team actually reads, understands, and adheres to them.',
    metricOrFeature: 'Action-oriented language'
  },
  {
    id: 'why-2',
    title: 'Business-Specific Requirements',
    description: 'We adapt policies to your real setup — whether you use Google Workspace or Microsoft 365, remote Macs or managed PCs, GitHub or AWS.',
    metricOrFeature: 'Tailored to your stack'
  },
  {
    id: 'why-3',
    title: 'Editable Deliverables Included',
    description: 'You receive complete Microsoft Word (.docx) source files along with clean PDFs, allowing your team to update names and version numbers as your company evolves.',
    metricOrFeature: 'Full ownership of files'
  },
  {
    id: 'why-4',
    title: 'Transparent One-Time Pricing',
    description: 'No recurring subscriptions, no per-user monthly seat fees, and no surprise add-ons. You get 5 foundational policies for a predictable $199 one-off investment.',
    metricOrFeature: '$199 fixed package'
  },
  {
    id: 'why-5',
    title: 'Human Quality Review',
    description: 'Every policy document is reviewed line-by-line by an experienced human documentation specialist to eliminate generic template contradictions.',
    metricOrFeature: 'Meticulous human QA'
  },
  {
    id: 'why-6',
    title: 'Straightforward Communication',
    description: 'No endless sales discovery calls or aggressive upsell funnels. You submit requirements, we confirm, and we deliver your documents on schedule.',
    metricOrFeature: 'Fast & responsive'
  }
];

export const FUTURE_READY_ITEMS: FutureServiceItem[] = [
  {
    id: 'future-1',
    title: 'AI Acceptable Use Policies',
    status: 'Coming Soon',
    description: 'Clear guidelines regulating employee use of generative AI tools (ChatGPT, Claude, Copilot) to prevent sensitive customer data and code leaks.',
    relevance: 'Essential for modern teams using AI tooling'
  },
  {
    id: 'future-2',
    title: 'AI Governance Documentation',
    status: 'Planned',
    description: 'Internal documentation frameworks for assessing model risk, data provenance, and responsible AI system deployment within your software stack.',
    relevance: 'Emerging regulatory alignment for SaaS companies'
  },
  {
    id: 'future-3',
    title: 'Cybersecurity Risk Registers',
    status: 'Planned',
    description: 'Structured spreadsheet and document registers to identify, score, assign, and track organizational security risks and remediation schedules.',
    relevance: 'Critical for enterprise audit readiness'
  },
  {
    id: 'future-4',
    title: 'Vendor Security Questionnaires Support',
    status: 'Coming Soon',
    description: 'Pre-formatted response libraries and documentation mapping to accelerate customer security assessments (SIG, CAIQ, custom RFPs).',
    relevance: 'Unblocks enterprise sales cycles'
  },
  {
    id: 'future-5',
    title: 'Security Awareness Documentation',
    status: 'Planned',
    description: 'Quarterly staff security memos, new-hire onboarding cheat sheets, and practical phishing vigilance reference guides.',
    relevance: 'Cultivates a security-conscious workplace culture'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Services & Scope',
    question: 'What exactly does ShieldScribe provide?',
    answer: 'ShieldScribe provides professionally structured, business-tailored cybersecurity policies and governance documentation (such as Access Control, Acceptable Use, Data Protection, Incident Response, and Remote Working policies). We deliver documentation as a service — supplying the essential operational paperwork growing companies need to establish internal clarity and respond to client security evaluations.'
  },
  {
    id: 'faq-2',
    category: 'Services & Scope',
    question: 'Are the documents customised to my specific business?',
    answer: 'Yes. Unlike generic downloadable templates with endless [Insert Company Name Here] brackets, we customize every policy based on your intake questionnaire. We reflect your actual operating model (remote, hybrid, or on-site), primary cloud providers (e.g. Google Workspace, Microsoft 365, AWS, GitHub), team structure, and administrative roles.'
  },
  {
    id: 'faq-3',
    category: 'Compliance & Legal',
    question: 'Does having these documents guarantee ISO 27001, SOC 2, or GDPR compliance?',
    answer: 'No. ShieldScribe provides structured documentation support, not legal advice, formal audit certification, or a guarantee of regulatory compliance. Certification requires independent accredited auditor evaluation of your technical controls in operation. However, having professionally documented, practical policies is a mandatory prerequisite for any formal audit or customer security review.'
  },
  {
    id: 'faq-4',
    category: 'Delivery & Formats',
    question: 'What file formats will I receive?',
    answer: 'You will receive fully editable Microsoft Word (.docx) files and print-ready, high-resolution PDF documents. Because you receive the source Word files, your internal team can easily revise wording, add specific personnel names, or adjust operational thresholds in the future without paying us additional fees.'
  },
  {
    id: 'faq-5',
    category: 'Delivery & Formats',
    question: 'How long does delivery take?',
    answer: 'Our standard target turnaround for the Security Documentation Starter Pack is 48 business hours after we receive your completed intake information, confirm the scope, and confirm payment. If your requirements involve custom multi-entity structures or non-standard tools, we confirm the exact delivery date prior to kick-off.'
  },
  {
    id: 'faq-6',
    category: 'Delivery & Formats',
    question: 'Can I request revisions after receiving my documents?',
    answer: 'Yes. One complete revision cycle is included with the Starter Pack. You have 14 days from delivery to review the documents with your team and provide feedback. We incorporate your adjustments (such as terminology refinements or tooling tweaks) and re-deliver the finalized files within 24–48 hours.'
  },
  {
    id: 'faq-7',
    category: 'Services & Scope',
    question: 'How do I submit my business requirements?',
    answer: 'After initiating your order or submitting the enquiry form, you receive a straightforward intake link with guided questions covering company name, entity type, headquarters, operating model, workforce size, email/identity provider, cloud storage, password management tools, and any specific client contract requirements you must address.'
  },
  {
    id: 'faq-8',
    category: 'Delivery & Formats',
    question: 'How is payment handled?',
    answer: 'Payment for the $199 Starter Pack is a simple one-time transaction processed securely via digital invoice (Stripe / Bank Transfer). We do not store credit card credentials, and there are zero recurring monthly subscriptions or hidden maintenance fees.'
  },
  {
    id: 'faq-9',
    category: 'Compliance & Legal',
    question: 'Do you provide legal advice or act as legal counsel?',
    answer: 'No. ShieldScribe is a specialized technical documentation consultancy, not a law firm. Our materials are intended to establish clear internal operational guidelines and technical expectations. If your organization requires formal legal counsel or statutory regulatory certifications, you should consult a licensed attorney.'
  },
  {
    id: 'faq-10',
    category: 'Compliance & Legal',
    question: 'How is my business information protected during the process?',
    answer: 'We treat all client operational details, tooling configurations, and company data with strict confidentiality. Intake data is utilized solely to draft your requested policies, is stored on encrypted systems, and is never shared, marketed, or ingested into public third-party model training datasets.'
  }
];

export const SAMPLE_POLICY_DATA: PolicyDocumentSample = {
  id: 'sample-access-control',
  title: 'Password & Access Control Policy',
  documentId: 'POL-SEC-001',
  version: '1.2',
  classification: 'Internal / Confidential',
  effectiveDate: 'October 24, 2026',
  reviewCadence: 'Annual',
  owner: 'Head of Operations & Information Security',
  purpose: 'The purpose of this Password & Access Control Policy is to establish enforceable standards for granting, maintaining, and revoking access to company computing resources, sensitive client data, and cloud infrastructure. By regulating authentication requirements and enforcing the Principle of Least Privilege, this policy minimizes the risk of credential compromise, unauthorized data disclosure, and lateral network movement.',
  scope: 'This policy applies to all full-time employees, part-time staff, independent contractors, temporary workers, and third-party vendors accessing company-owned hardware, cloud services (including Google Workspace, AWS, GitHub, Slack, and accounting software), internal networks, and corporate communication channels.',
  rolesAndResponsibilities: [
    {
      role: 'Operations / Security Lead',
      responsibility: 'Reviews and approves privileged access grants, maintains the centralized access register, coordinates semi-annual access audits, and oversees prompt deprovisioning.'
    },
    {
      role: 'Department Managers',
      responsibility: 'Submits formal access requests for new personnel based strictly on job duties; provides immediate notification upon employee resignation or role transfer.'
    },
    {
      role: 'All Workforce Members',
      responsibility: 'Protects authentication credentials, uses the company password manager, enables MFA on all accounts, and reports suspicious login alerts immediately.'
    }
  ],
  clauses: [
    {
      sectionNumber: '1.0',
      heading: 'Password Complexity & Credential Standards',
      content: 'All user accounts accessing company systems must utilize strong, cryptographically resilient passwords or passphrases that cannot be easily guessed or subjected to automated dictionary attacks.',
      guidelines: [
        'Passwords must contain a minimum of 14 characters (or 16 characters for administrative accounts).',
        'Must combine at least three character categories: uppercase letters, lowercase letters, numbers, and symbols.',
        'Use of predictable phrases, company names, sequential numbers, or personal identifying information is strictly prohibited.',
        'Credentials must be stored exclusively in the approved enterprise password manager. Writing passwords in plain text, spreadsheets, or physical notes is a direct policy violation.'
      ]
    },
    {
      sectionNumber: '2.0',
      heading: 'Multi-Factor Authentication (MFA) Mandate',
      content: 'Multi-Factor Authentication adds a critical defensive layer by requiring two or more distinct authentication factors before granting access to business assets.',
      guidelines: [
        'MFA is mandatory for all workforce accounts across primary identity providers, cloud consoles, code repositories, and email workspaces.',
        'Time-based One-Time Password (TOTP) authenticator apps (e.g., Google Authenticator, 1Password) or hardware security keys (FIDO2/WebAuthn) are the required secondary factors.',
        'SMS-based authentication is strongly discouraged and permitted only as a temporary fallback when no cryptographic alternative is supported.',
        'Workforce members must never approve unexpected push notifications or prompt approvals (MFA fatigue protection).'
      ]
    },
    {
      sectionNumber: '3.0',
      heading: 'Principle of Least Privilege & Access Provisioning',
      content: 'Access permissions must be provisioned strictly on a "need-to-know" basis, granting only the minimum privileges required to execute legitimate business duties.',
      guidelines: [
        'New account requests must be submitted in writing and approved by the corresponding department supervisor.',
        'Role-Based Access Control (RBAC) groups must be used rather than ad-hoc individual permission grants.',
        'Temporary elevated privileges granted for debugging or maintenance must expire automatically within 24 hours.'
      ]
    },
    {
      sectionNumber: '4.0',
      heading: 'Deprovisioning & Immediate Revocation Protocol',
      content: 'Prompt revocation of system access upon workforce termination or contractor conclusion is vital to preventing unauthorized post-employment access.',
      guidelines: [
        'Upon notification of voluntary or involuntary departure, all accounts, VPN tokens, and third-party SaaS seats must be disabled within 4 business hours (or immediately in involuntary terminations).',
        'Single Sign-On (SSO) centralized account suspension must be executed first to invalidate all active session tokens across federated services.',
        'Company hardware must be recovered and remotely sanitized in accordance with the Endpoint Security Checklist.'
      ]
    },
    {
      sectionNumber: '5.0',
      heading: 'Periodic Access Audit & Inactivity Thresholds',
      content: 'Regular audits ensure stale accounts and scope creep are identified and rectified before vulnerabilities emerge.',
      guidelines: [
        'A comprehensive access review must be conducted every six (6) months by the Operations Lead.',
        'Accounts inactive for greater than ninety (90) consecutive days must be automatically suspended pending managerial re-verification.',
        'Workstation screens must automatically lock after five (5) minutes of user inactivity.'
      ]
    }
  ],
  reviewAndApproval: {
    preparedBy: 'ShieldScribe Security Documentation Practice',
    approvedBy: 'Client Managing Director / Chief Information Security Officer',
    nextReviewDate: 'October 24, 2027 (Annual Cadence)'
  }
};
