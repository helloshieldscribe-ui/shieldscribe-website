import React, { useState } from 'react';
import { X, Shield, Lock, FileText, CheckCircle2, Copy, Check, Printer, ExternalLink, Layers, ArrowLeft } from 'lucide-react';
import { SAMPLE_POLICY_DATA } from '../data/content';

interface SamplePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestStarterPack: () => void;
}

export const SamplePolicyModal: React.FC<SamplePolicyModalProps> = ({
  isOpen,
  onClose,
  onRequestStarterPack,
}) => {
  const [activeDocument, setActiveDocument] = useState<'access-control' | 'incident-response'>('access-control');
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isOpen) return null;

  const sample = SAMPLE_POLICY_DATA;

  const handleCopyClause = (clauseNum: string, heading: string) => {
    navigator.clipboard.writeText(`ShieldScribe Reference [${clauseNum} ${heading}]: Documented in POL-SEC-001.`);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#07111F] border border-[#23364D] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#11243A] border-b border-[#23364D] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#07111F] border border-[#23364D] flex items-center justify-center text-[#2DD4BF]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider">
                ShieldScribe Sample Policy Viewer
              </div>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[#F8FAFC]">
                {activeDocument === 'access-control'
                  ? 'Password & Access Control Policy (POL-SEC-001)'
                  : 'Incident Response Plan (POL-IR-004)'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07111F] hover:bg-[#162D4A] border border-[#23364D] text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              title="Print document preview"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print View</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#07111F] hover:bg-[#162D4A] border border-[#23364D] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Switcher & Notice Bar */}
        <div className="px-6 py-2.5 bg-[#0D1B2A] border-b border-[#23364D] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveDocument('access-control')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeDocument === 'access-control'
                  ? 'bg-[#3B82F6] text-white font-medium'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#11243A]'
              }`}
            >
              Policy 1: Access Control (Full Sample)
            </button>
            <button
              onClick={() => setActiveDocument('incident-response')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeDocument === 'incident-response'
                  ? 'bg-[#3B82F6] text-white font-medium'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#11243A]'
              }`}
            >
              Policy 2: Incident Response (Plan Excerpt)
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#2DD4BF] font-mono">
            <Lock className="w-3 h-3" />
            <span>ILLUSTRATIVE SAMPLE · NOT INTENDED FOR AUDIT USE UNTIL CUSTOMIZED</span>
          </div>
        </div>

        {/* Modal Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#07111F] text-xs sm:text-sm">
          {activeDocument === 'access-control' ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Cover Page Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#0D1B2A] border border-[#23364D] text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#11243A] border border-[#23364D] text-[#3B82F6] mx-auto">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#2DD4BF] uppercase tracking-widest">
                    INFORMATION SECURITY GOVERNANCE
                  </div>
                  <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC] mt-1">
                    Password & Access Control Policy
                  </h1>
                  <p className="text-xs text-[#94A3B8] mt-2">
                    Standard Operational Policy for Authentication, Authorization & Identity Lifecycle
                  </p>
                </div>

                {/* Document Control Table */}
                <div className="mt-6 rounded-lg border border-[#23364D] bg-[#11243A]/50 text-left overflow-hidden text-xs">
                  <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#23364D] p-3 border-b border-[#23364D]">
                    <div>
                      <span className="text-[#94A3B8] block text-[10px] uppercase">Document ID</span>
                      <span className="font-mono text-[#F8FAFC] font-semibold">{sample.documentId}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[10px] uppercase">Version</span>
                      <span className="font-mono text-[#2DD4BF] font-semibold">{sample.version}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[10px] uppercase">Classification</span>
                      <span className="text-[#F8FAFC] font-semibold">{sample.classification}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[10px] uppercase">Effective Date</span>
                      <span className="text-[#F8FAFC] font-semibold">{sample.effectiveDate}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#23364D] p-3">
                    <div>
                      <span className="text-[#94A3B8] block text-[10px] uppercase">Review Cadence</span>
                      <span className="text-[#F8FAFC]">{sample.reviewCadence}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[10px] uppercase">Designated Owner</span>
                      <span className="text-[#F8FAFC]">{sample.owner}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purpose & Scope */}
              <div className="p-6 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-4">
                <div>
                  <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2 flex items-center gap-2">
                    <span className="text-[#3B82F6] font-mono">1.0</span>
                    <span>Purpose & Applicability</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {sample.purpose}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#23364D]">
                  <h4 className="font-heading text-sm font-semibold text-[#F8FAFC] mb-2 flex items-center gap-2">
                    <span className="text-[#2DD4BF] font-mono">1.1</span>
                    <span>Scope of Coverage</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {sample.scope}
                  </p>
                </div>
              </div>

              {/* Roles & Responsibilities */}
              <div className="p-6 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-4">
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] flex items-center gap-2">
                  <span className="text-[#3B82F6] font-mono">2.0</span>
                  <span>Roles & Responsibilities Matrix</span>
                </h3>

                <div className="space-y-3">
                  {sample.rolesAndResponsibilities.map((r, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-[#11243A]/60 border border-[#23364D] text-xs">
                      <div className="font-semibold text-[#2DD4BF] mb-1">{r.role}</div>
                      <div className="text-[#94A3B8] leading-relaxed">{r.responsibility}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Operational Clauses */}
              <div className="space-y-4">
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] flex items-center gap-2">
                  <span className="text-[#3B82F6] font-mono">3.0</span>
                  <span>Operational Policy Clauses</span>
                </h3>

                {sample.clauses.map((clause) => (
                  <div
                    key={clause.sectionNumber}
                    className="p-6 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-[#2DD4BF] bg-[#11243A] px-2 py-0.5 rounded border border-[#23364D]">
                          {clause.sectionNumber}
                        </span>
                        <h4 className="font-heading text-sm font-bold text-[#F8FAFC]">
                          {clause.heading}
                        </h4>
                      </div>

                      <button
                        onClick={() => handleCopyClause(clause.sectionNumber, clause.heading)}
                        className="text-[11px] text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Cite</span>
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {clause.content}
                    </p>

                    {clause.guidelines && (
                      <div className="pt-3 border-t border-[#23364D] space-y-2">
                        {clause.guidelines.map((g, gi) => (
                          <div key={gi} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                            <span className="text-[#3B82F6] font-mono shrink-0 mt-0.5">[{gi + 1}]</span>
                            <span className="leading-relaxed">{g}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Approval & Governance Sign-Off */}
              <div className="p-6 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-4">
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] flex items-center gap-2">
                  <span className="text-[#3B82F6] font-mono">4.0</span>
                  <span>Governance Sign-Off & Verification</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-lg bg-[#11243A] border border-[#23364D] space-y-1">
                    <span className="text-[#94A3B8] uppercase text-[10px]">Prepared By:</span>
                    <div className="text-[#F8FAFC] font-semibold">{sample.reviewAndApproval.preparedBy}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#11243A] border border-[#23364D] space-y-1">
                    <span className="text-[#94A3B8] uppercase text-[10px]">Approved By:</span>
                    <div className="text-[#F8FAFC] font-semibold">{sample.reviewAndApproval.approvedBy}</div>
                  </div>
                </div>

                <div className="text-[11px] text-[#94A3B8] text-center pt-2">
                  Scheduled Next Governance Review: {sample.reviewAndApproval.nextReviewDate}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Incident Response Plan Excerpt */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#0D1B2A] border border-[#23364D] text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#11243A] border border-[#23364D] text-[#2DD4BF] mx-auto">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-[#2DD4BF] uppercase tracking-widest">
                  CYBERSECURITY OPERATIONS PLAYBOOK
                </div>
                <h1 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                  Incident Response Plan (POL-IR-004)
                </h1>
                <p className="text-xs text-[#94A3B8] max-w-xl mx-auto">
                  Summary excerpt of the 5-phase incident handling lifecycle and severity classification framework.
                </p>
              </div>

              {/* 5-Phase Lifecycle */}
              <div className="p-6 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-4">
                <h3 className="font-heading text-base font-bold text-[#F8FAFC]">
                  The 5-Stage Incident Handling Lifecycle
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                  {[
                    { stage: '1. Detection', desc: 'Identify anomaly via alerts, user reports, or failed MFA spikes.' },
                    { stage: '2. Triage', desc: 'Classify severity level (Sev 1 Low to Sev 4 Critical).' },
                    { stage: '3. Containment', desc: 'Isolate affected host, revoke active token, rotate credentials.' },
                    { stage: '4. Eradication', desc: 'Remove malicious persistence, purge unauthorized accounts.' },
                    { stage: '5. Post-Mortem', desc: 'Document root cause, update policies, notify required parties.' },
                  ].map((p, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#11243A] border border-[#23364D] space-y-1">
                      <div className="font-semibold text-[#2DD4BF]">{p.stage}</div>
                      <div className="text-[11px] text-[#94A3B8] leading-snug">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Severity Matrix Excerpt */}
              <div className="p-6 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-4">
                <h3 className="font-heading text-base font-bold text-[#F8FAFC]">
                  Severity Classification Matrix Excerpt
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-[#11243A] border border-[#EF4444]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-[#EF4444] font-mono mr-2">SEV 4 // CRITICAL:</span>
                      <span className="text-[#F8FAFC]">Confirmed breach of client confidential data or total cloud infrastructure compromise.</span>
                    </div>
                    <span className="text-[#94A3B8] font-mono text-[11px] shrink-0">Escalation: Immediate (15m)</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#11243A] border border-[#F59E0B]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-[#F59E0B] font-mono mr-2">SEV 3 // HIGH:</span>
                      <span className="text-[#F8FAFC]">Malware detected on workstation or isolated employee account compromise.</span>
                    </div>
                    <span className="text-[#94A3B8] font-mono text-[11px] shrink-0">Escalation: Within 2 Hours</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#11243A] border border-[#23364D] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-[#3B82F6] font-mono mr-2">SEV 2 // MEDIUM:</span>
                      <span className="text-[#F8FAFC]">Suspicious phishing email reported prior to employee credential entry.</span>
                    </div>
                    <span className="text-[#94A3B8] font-mono text-[11px] shrink-0">Escalation: Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 sm:p-5 bg-[#11243A] border-t border-[#23364D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#94A3B8] text-center sm:text-left">
            <span>Want all 5 policies tailored to your company's tools and team?</span>
            <span className="block sm:inline sm:ml-2 font-medium text-[#F8FAFC]">
              Get the complete Starter Pack for $199.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg border border-[#23364D] hover:bg-[#07111F] transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestStarterPack();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm"
            >
              Request Starter Pack ($199)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
