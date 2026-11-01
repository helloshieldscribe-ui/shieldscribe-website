import React from 'react';
import { Shield, CheckCircle2, User, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactFounder: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactFounder }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0D1B2A]/40 border-t border-[#23364D]/60 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image and Visual Anchor */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#23364D] shadow-2xl group">
              <img
                src="/src/assets/images/about_security_consultant_1793519969055.jpg"
                alt="ShieldScribe cybersecurity governance workspace with policy documentation"
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/30 to-transparent" />

              {/* Overlay founder profile callout */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0D1B2A]/90 backdrop-blur-md border border-[#23364D] text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#11243A] border border-[#23364D] flex items-center justify-center text-[#2DD4BF] shrink-0 font-heading font-bold text-sm">
                    SS
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#F8FAFC]">
                      Lead Documentation Practice
                    </div>
                    <div className="text-[11px] text-[#2DD4BF]">
                      ShieldScribe · Cybersecurity Documentation Consultancy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder-Led Introduction & Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
              <Shield className="w-4 h-4" />
              <span>About ShieldScribe</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
              Why We Built ShieldScribe for Smaller Organisations.
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              Most cybersecurity advice is written for Fortune 500 enterprises with dedicated teams of risk officers,
              compliance lawyers, and security analysts. Smaller businesses, creative agencies, and early SaaS
              startups don't have those departments — but their clients and auditors expect the exact same level
              of documentation rigor.
            </p>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              ShieldScribe was founded to level that playing field. We provide structured, practical cybersecurity
              documentation as a service: clear policies tailored to how modern teams actually operate, without
              charging enterprise consulting fees or locking you into expensive compliance software.
            </p>

            {/* Core Methodology Pillars */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F8FAFC]">
                Our Documentation Principles:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#94A3B8]">
                <div className="p-3.5 rounded-lg bg-[#11243A]/60 border border-[#23364D] space-y-1">
                  <div className="font-semibold text-[#F8FAFC] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    <span>Clear Security Responsibilities</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    Defining exactly who oversees access, approvals, and system updates to eliminate ambiguity.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#11243A]/60 border border-[#23364D] space-y-1">
                  <div className="font-semibold text-[#F8FAFC] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>Practical, Enforceable Rules</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    Policies that team members understand and follow without slowing down daily shipping velocity.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#11243A]/60 border border-[#23364D] space-y-1">
                  <div className="font-semibold text-[#F8FAFC] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    <span>Responsible AI + Human Review</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    We leverage modern AI tools to accelerate research, but every clause is reviewed line-by-line by a human specialist.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#11243A]/60 border border-[#23364D] space-y-1">
                  <div className="font-semibold text-[#F8FAFC] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>No Inflated Legal Claims</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8]">
                    We provide documentation support, not legal advice or artificial compliance certifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onContactFounder}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Have a Specific Documentation Question? Talk to Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
