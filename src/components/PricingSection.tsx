import React from 'react';
import { Check, Shield, Clock, FileSpreadsheet, RefreshCw, FileText, ArrowRight, Info } from 'lucide-react';
import { STARTER_PACK_DETAILS } from '../data/content';

interface PricingSectionProps {
  onRequestPackage: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestPackage }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0D1B2A]/50 border-t border-[#23364D]/60 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <span>Transparent Investment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            Simple, Transparent One-Time Pricing.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            No recurring monthly subscriptions, no per-employee seat licenses, and no hidden surprises.
            A predictable, flat-fee documentation package for growing businesses.
          </p>
        </div>

        {/* Pricing Card & Scope Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Pricing Box */}
          <div className="lg:col-span-7 rounded-2xl bg-[#11243A] border-2 border-[#3B82F6] p-8 sm:p-10 relative shadow-xl flex flex-col justify-between">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#3B82F6] text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-sm">
              Foundational Governance Package
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-6 border-b border-[#23364D]">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                    {STARTER_PACK_DETAILS.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Complete five-document cybersecurity governance foundation
                  </p>
                </div>
                <div className="sm:text-right mt-2 sm:mt-0">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F8FAFC]">
                      {STARTER_PACK_DETAILS.price}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-medium">USD</span>
                  </div>
                  <span className="text-xs font-medium text-[#2DD4BF] block mt-0.5">
                    {STARTER_PACK_DETAILS.billingType}
                  </span>
                </div>
              </div>

              {/* What's Included */}
              <div className="py-6 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">
                  Everything Included in Your Deliverable:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#94A3B8]">
                  {STARTER_PACK_DETAILS.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#3B82F6]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#3B82F6]" />
                      </div>
                      <span className="leading-snug text-[#F8FAFC]/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Documents List */}
              <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-2.5 mb-6">
                <div className="text-xs font-semibold text-[#2DD4BF] flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span>5 Tailored Policies in the Pack:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8]">
                  {STARTER_PACK_DETAILS.includedDocuments.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span className="truncate">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA and Delivery Commit */}
            <div className="pt-6 border-t border-[#23364D] space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-[#94A3B8]">
                  <Clock className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Target Turnaround: <strong className="text-[#F8FAFC]">48 Hours</strong> from confirmation</span>
                </div>

                <button
                  onClick={onRequestPackage}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-all duration-200 shadow-md hover:shadow-[#3B82F6]/25 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>Request Your Policy Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-[#94A3B8] text-center sm:text-left">
                Standard payment via secure digital invoice. No card details stored.
              </div>
            </div>
          </div>

          {/* Right Column: Scope Clarification & Custom Needs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Scope Clarification Card */}
            <div className="rounded-xl bg-[#11243A]/80 border border-[#23364D] p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
                <Info className="w-4 h-4" />
                <span>Defined Scope & Realistic Boundaries</span>
              </div>
              <h4 className="font-heading text-base font-bold text-[#F8FAFC]">
                Who is the Starter Pack tailored for?
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {STARTER_PACK_DETAILS.scopeClarification}
              </p>
              <div className="p-3 rounded-lg bg-[#07111F] border border-[#23364D] text-xs text-[#94A3B8] leading-relaxed">
                <strong className="text-[#F8FAFC]">Notice:</strong> Additional work, non-standard compliance frameworks, or bespoke multi-entity workflows will be quoted transparently before any commitment is made.
              </div>
            </div>

            {/* Revision & Delivery Assurance Card */}
            <div className="rounded-xl bg-[#0D1B2A] border border-[#23364D] p-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#3B82F6] flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Included Revision Process</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                We know fine-tuning is part of establishing company policies. Every Starter Pack includes
                one full revision cycle within 14 days of receipt so your leadership team can review and
                refine terminology with our team.
              </p>
              <div className="pt-2 text-xs text-[#2DD4BF] font-mono">
                ✓ 14-day review window &nbsp;·&nbsp; ✓ Rapid 24–48h revision turnaround
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
