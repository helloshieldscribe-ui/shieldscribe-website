import React, { useState } from 'react';
import { Eye, Shield, Lock, FileText, CheckCircle2, Copy, Check, Printer } from 'lucide-react';
import { SAMPLE_POLICY_DATA } from '../data/content';

interface SamplePolicyPreviewProps {
  onOpenFullSample: () => void;
}

export const SamplePolicyPreview: React.FC<SamplePolicyPreviewProps> = ({ onOpenFullSample }) => {
  const [activeSection, setActiveSection] = useState<'control' | 'purpose' | 'controls' | 'governance'>('control');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const sample = SAMPLE_POLICY_DATA;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(
      `ShieldScribe Sample Policy: ${sample.title} (${sample.documentId} v${sample.version}) - Internal Governance Reference`
    );
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="sample-preview" className="py-20 lg:py-28 bg-[#0D1B2A]/40 border-t border-[#23364D]/60 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-3">
              <Eye className="w-4 h-4" />
              <span>Full Transparency & Quality Review</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
              See the Quality Before You Commit.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We believe in total transparency. Inspect our real document structure below — including standard
              document control metadata, roles, operational controls, and executive approval blocks.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenFullSample}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm"
            >
              <Eye className="w-4 h-4 text-[#2DD4BF]" />
              <span>Open Interactive Document Reader</span>
            </button>
          </div>
        </div>

        {/* Document Showcase Container */}
        <div className="rounded-2xl bg-[#07111F] border border-[#23364D] shadow-2xl overflow-hidden">
          {/* Document Top Metabar */}
          <div className="px-6 py-3.5 bg-[#11243A] border-b border-[#23364D] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#2DD4BF] bg-[#07111F] px-2.5 py-1 rounded border border-[#23364D]">
                {sample.documentId}
              </span>
              <span className="text-sm font-semibold text-[#F8FAFC]">
                {sample.title}
              </span>
              <span className="text-xs text-[#94A3B8] hidden sm:inline">
                Version {sample.version}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-[#2DD4BF] font-mono bg-[#07111F] px-2.5 py-1 rounded border border-[#23364D]">
                <Lock className="w-3 h-3" />
                <span>CLASSIFICATION: {sample.classification}</span>
              </div>
              <button
                onClick={handleCopyCitation}
                className="hidden sm:flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer px-2 py-1 rounded hover:bg-[#162D4A]"
                title="Copy reference citation"
              >
                {copiedNotification ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    <span className="text-[#2DD4BF]">Citation Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Document Inspection Tabs */}
          <div className="bg-[#0A1624] border-b border-[#23364D] px-6 flex overflow-x-auto text-xs">
            <button
              onClick={() => setActiveSection('control')}
              className={`py-3 px-4 font-medium transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                activeSection === 'control'
                  ? 'text-[#F8FAFC] border-[#3B82F6] bg-[#11243A]/40'
                  : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
              }`}
            >
              1. Document Control & Metadata
            </button>
            <button
              onClick={() => setActiveSection('purpose')}
              className={`py-3 px-4 font-medium transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                activeSection === 'purpose'
                  ? 'text-[#F8FAFC] border-[#3B82F6] bg-[#11243A]/40'
                  : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
              }`}
            >
              2. Purpose & Roles
            </button>
            <button
              onClick={() => setActiveSection('controls')}
              className={`py-3 px-4 font-medium transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                activeSection === 'controls'
                  ? 'text-[#F8FAFC] border-[#3B82F6] bg-[#11243A]/40'
                  : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
              }`}
            >
              3. Operational Clauses & MFA Standards
            </button>
            <button
              onClick={() => setActiveSection('governance')}
              className={`py-3 px-4 font-medium transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
                activeSection === 'governance'
                  ? 'text-[#F8FAFC] border-[#3B82F6] bg-[#11243A]/40'
                  : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
              }`}
            >
              4. Review & Executive Sign-Off
            </button>
          </div>

          {/* Document Content Sheet */}
          <div className="p-6 sm:p-10 bg-[#07111F] min-h-[380px]">
            {/* Illustrative Notice Watermark Banner */}
            <div className="mb-6 p-3 rounded bg-[#11243A]/60 border border-[#23364D] flex items-center justify-between text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span>
                  <strong>Illustrative Preview:</strong> This preview displays authentic clauses from our
                  Password & Access Control Policy template as formatted in the Starter Pack.
                </span>
              </div>
              <span className="font-mono text-[#2DD4BF] hidden md:inline">CONFIDENTIAL SAMPLE</span>
            </div>

            {/* TAB 1: Document Control Table */}
            {activeSection === 'control' && (
              <div className="space-y-6">
                <div className="border-b border-[#23364D] pb-4">
                  <h3 className="font-heading text-xl font-bold text-[#F8FAFC]">
                    Document Control Information
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Formal governance metadata required by vendor questionnaires and SOC 2 / ISO baseline reviews.
                  </p>
                </div>

                <div className="rounded-xl border border-[#23364D] bg-[#0D1B2A] overflow-hidden text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#23364D] border-b border-[#23364D] p-4 bg-[#11243A]/40">
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] uppercase">Document Title</span>
                      <span className="text-[#F8FAFC] font-semibold text-sm mt-0.5 block">{sample.title}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] uppercase">Document ID</span>
                      <span className="font-mono text-[#2DD4BF] font-semibold text-sm mt-0.5 block">{sample.documentId}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] uppercase">Current Version</span>
                      <span className="font-mono text-[#F8FAFC] font-semibold text-sm mt-0.5 block">{sample.version}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] uppercase">Security Classification</span>
                      <span className="text-[#3B82F6] font-semibold text-sm mt-0.5 block">{sample.classification}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#23364D] p-4">
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] uppercase">Effective Date</span>
                      <span className="text-[#F8FAFC] mt-0.5 block">{sample.effectiveDate}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] uppercase">Review Cadence</span>
                      <span className="text-[#F8FAFC] mt-0.5 block">{sample.reviewCadence}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[11px] uppercase">Designated Owner</span>
                      <span className="text-[#F8FAFC] mt-0.5 block">{sample.owner}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#94A3B8] leading-relaxed">
                  Every document delivered by ShieldScribe contains this structured header block in Microsoft Word format, allowing you to easily maintain your internal document version history and assign department owners.
                </div>
              </div>
            )}

            {/* TAB 2: Purpose & Roles */}
            {activeSection === 'purpose' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#2DD4BF] mb-2">
                    Section 1: Policy Purpose & Scope
                  </h4>
                  <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#23364D] text-xs sm:text-sm text-[#94A3B8] leading-relaxed space-y-3">
                    <p><strong className="text-[#F8FAFC]">1.1 Purpose:</strong> {sample.purpose}</p>
                    <p><strong className="text-[#F8FAFC]">1.2 Scope:</strong> {sample.scope}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#3B82F6] mb-2">
                    Section 2: Roles & Responsibilities Matrix
                  </h4>
                  <div className="space-y-2.5">
                    {sample.rolesAndResponsibilities.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-[#0D1B2A] border border-[#23364D] text-xs">
                        <div className="font-semibold text-[#F8FAFC] mb-1">{item.role}</div>
                        <div className="text-[#94A3B8] leading-relaxed">{item.responsibility}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Operational Clauses */}
            {activeSection === 'controls' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#23364D] pb-3">
                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">
                    Operational Clauses & Baseline Security Rules
                  </h3>
                  <span className="text-xs text-[#2DD4BF] font-mono">Excerpt: Clauses 1.0 – 4.0</span>
                </div>

                <div className="space-y-4">
                  {sample.clauses.slice(0, 3).map((clause) => (
                    <div key={clause.sectionNumber} className="p-4 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-[#3B82F6]">
                          CLAUSE {clause.sectionNumber}
                        </span>
                        <span className="text-xs font-heading font-semibold text-[#F8FAFC]">
                          {clause.heading}
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {clause.content}
                      </p>
                      {clause.guidelines && (
                        <div className="pt-2 border-t border-[#23364D]/60 space-y-1.5">
                          {clause.guidelines.map((g, gi) => (
                            <div key={gi} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                              <span className="text-[#2DD4BF] mt-0.5">▸</span>
                              <span className="leading-snug">{g}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: Governance Sign-off */}
            {activeSection === 'governance' && (
              <div className="space-y-6">
                <div className="border-b border-[#23364D] pb-3">
                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">
                    Review, Approval & Compliance Maintenance
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Formal authorization section verifying managerial endorsement of the security policy.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-[#94A3B8]">Draft Preparation</span>
                      <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                    </div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">{sample.reviewAndApproval.preparedBy}</div>
                    <div className="text-xs text-[#94A3B8]">
                      Drafted against standard cloud security parameters and company intake survey.
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-[#94A3B8]">Management Sign-Off</span>
                      <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">{sample.reviewAndApproval.approvedBy}</div>
                    <div className="text-xs text-[#94A3B8]">
                      Authorized operational adoption across all workforce endpoints and systems.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#11243A]/60 border border-[#23364D] flex items-center justify-between text-xs text-[#94A3B8]">
                  <span>Scheduled Next Governance Review: <strong className="text-[#F8FAFC]">{sample.reviewAndApproval.nextReviewDate}</strong></span>
                  <span className="text-[#2DD4BF] font-mono">ANNUAL CADENCE</span>
                </div>
              </div>
            )}
          </div>

          {/* Document Footer Bar */}
          <div className="px-6 py-4 bg-[#11243A] border-t border-[#23364D] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#94A3B8]">
              Delivered in clean, editable <strong className="text-[#F8FAFC]">.docx (Microsoft Word)</strong> and <strong className="text-[#F8FAFC]">.pdf</strong> formats.
            </div>

            <button
              onClick={onOpenFullSample}
              className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Inspect All Clauses in Full-Screen Modal</span>
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
