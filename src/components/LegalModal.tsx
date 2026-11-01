import React from 'react';
import { X, Shield, Lock, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, isOpen, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#07111F] border border-[#23364D] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#11243A] border-b border-[#23364D] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#07111F] border border-[#23364D] flex items-center justify-center text-[#2DD4BF]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#2DD4BF] uppercase">ShieldScribe Governance</div>
              <h2 className="font-heading text-lg font-bold text-[#F8FAFC]">
                {type === 'privacy' ? 'Privacy & Data Protection Policy' : 'Terms of Service & Scope of Engagement'}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#07111F] hover:bg-[#162D4A] border border-[#23364D] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-[#94A3B8] leading-relaxed space-y-5">
          {type === 'privacy' ? (
            <>
              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  1. Information We Collect
                </h3>
                <p>
                  ShieldScribe collects only the business information necessary to draft and tailor your requested
                  cybersecurity documentation. This includes contact name, business email address, company name,
                  jurisdiction, workforce size, and high-level descriptions of your technology stack (e.g., identity
                  provider, cloud hosting services, password manager).
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  2. Strict Confidentiality & Credential Protection
                </h3>
                <p>
                  We never request or store sensitive authentication secrets, such as live administrator passwords,
                  API tokens, secret keys, or payment card numbers. Client intake data is treated as strictly
                  confidential and is never shared, rented, or sold to third parties.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  3. Use of AI Tools & Data Privacy
                </h3>
                <p>
                  ShieldScribe utilizes modern computational tools to streamline research and structural formatting.
                  Client proprietary data and trade secrets are never ingested into public foundational AI model
                  training sets. All final policy documents undergo human review by our documentation team prior
                  to client handover.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  4. Data Retention & Deletion
                </h3>
                <p>
                  Client intake records and drafted policies are retained securely for thirty (30) days following
                  project delivery to fulfill the included revision warranty. Clients may request immediate deletion
                  of their intake records at any time by contacting helloshieldscribe@gmail.com.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  1. Nature of Services (Documentation Support Only)
                </h3>
                <p>
                  ShieldScribe provides cybersecurity documentation drafting services and governance templates.
                  ShieldScribe is not a law firm, certified public accounting firm, or accredited certification body.
                  Our deliverables do not constitute formal legal counsel, statutory compliance guarantees, or
                  formal audit certificates (such as ISO 27001 or SOC 2 Type II certifications).
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  2. Starter Pack Scope & Turnaround
                </h3>
                <p>
                  The ShieldScribe Security Documentation Starter Pack ($199) covers five foundational policies for
                  single-entity businesses with up to 50 employees utilizing standard modern cloud platforms. The
                  target turnaround of 48 hours begins once the client has provided all necessary intake responses,
                  confirmed scope, and completed digital invoice settlement.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  3. Included Revision Policy
                </h3>
                <p>
                  Each Starter Pack includes one (1) full round of revisions requested within fourteen (14) calendar
                  days of initial draft delivery. Revisions encompass adjustments to terminology, organizational roles,
                  and tooling specifics within the original agreed scope. Out-of-scope additions will be quoted
                  separately.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-[#F8FAFC] mb-2">
                  4. Client Ownership of Deliverables
                </h3>
                <p>
                  Upon full payment, the client receives unrestricted, perpetual rights to use, edit, reproduce, and
                  internally distribute the delivered Microsoft Word (.docx) and PDF files for their internal business
                  governance needs.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#11243A] border-t border-[#23364D] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
