import React, { useState } from 'react';
import { Shield, FileCheck, CheckCircle2, ArrowRight, Eye, Lock, FileSpreadsheet, Layers, Sparkles } from 'lucide-react';
import { HERO_VALUE_STATEMENTS } from '../data/content';

interface HeroProps {
  onOpenSample: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSample, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'cover' | 'clauses' | 'signoff'>('cover');

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background with abstract cybersecurity mesh & radial glow */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/src/assets/images/hero_cyber_mesh_1793519967827.jpg"
          alt="Cybersecurity governance network visualization"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/70 via-[#07111F]/90 to-[#07111F]" />
      </div>

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#2DD4BF]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            {/* Context kicker: clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
              <Shield className="w-4 h-4 text-[#2DD4BF]" />
              <span>Cybersecurity Governance · GRC Documentation as a Service</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.12] text-balance">
              Cybersecurity Documentation.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2DD4BF]">
                Simplified for Your Business.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              Professional, tailored cybersecurity policies and procedures designed to help growing
              businesses establish clear security expectations, document responsibilities, and
              build stronger governance foundations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreServices}
                className="px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-all duration-200 shadow-md hover:shadow-[#3B82F6]/25 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSample}
                className="px-7 py-3.5 text-sm font-medium text-[#F8FAFC] bg-[#11243A] hover:bg-[#162D4A] border border-[#23364D] hover:border-[#3B82F6]/60 rounded-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <Eye className="w-4 h-4 text-[#2DD4BF]" />
                <span>View Sample Policy</span>
              </button>
            </div>

            {/* Brand Positioning Note */}
            <div className="pt-2 text-xs text-[#94A3B8]/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
              <span>Designed for small businesses, SaaS startups, and digital agencies in the USA & UK.</span>
            </div>
          </div>

          {/* Right Column: Premium Document Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Document Border Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#3B82F6]/30 via-transparent to-[#2DD4BF]/20 blur-md opacity-75" />

              <div className="relative rounded-xl bg-[#0D1B2A] border border-[#23364D] shadow-2xl overflow-hidden">
                {/* Document Header Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-[#11243A] border-b border-[#23364D]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/60" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/60" />
                    <span className="ml-2 font-mono text-xs text-[#94A3B8]">POL-SEC-001_v1.2.docx</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#2DD4BF] font-mono">
                    <Lock className="w-3 h-3" />
                    <span>RESTRICTED</span>
                  </div>
                </div>

                {/* Mockup Interactive Navigation Tabs */}
                <div className="flex items-center border-b border-[#23364D] bg-[#0A1624] px-4 text-xs">
                  <button
                    onClick={() => setActiveTab('cover')}
                    className={`py-2 px-3 font-medium transition-colors cursor-pointer border-b-2 ${
                      activeTab === 'cover'
                        ? 'text-[#F8FAFC] border-[#3B82F6] bg-[#11243A]/50'
                        : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
                    }`}
                  >
                    Document Control
                  </button>
                  <button
                    onClick={() => setActiveTab('clauses')}
                    className={`py-2 px-3 font-medium transition-colors cursor-pointer border-b-2 ${
                      activeTab === 'clauses'
                        ? 'text-[#F8FAFC] border-[#3B82F6] bg-[#11243A]/50'
                        : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
                    }`}
                  >
                    Security Controls (MFA)
                  </button>
                  <button
                    onClick={() => setActiveTab('signoff')}
                    className={`py-2 px-3 font-medium transition-colors cursor-pointer border-b-2 ${
                      activeTab === 'signoff'
                        ? 'text-[#F8FAFC] border-[#3B82F6] bg-[#11243A]/50'
                        : 'text-[#94A3B8] border-transparent hover:text-[#F8FAFC]'
                    }`}
                  >
                    Audit & Sign-Off
                  </button>
                </div>

                {/* Document Body Area */}
                <div className="p-6 space-y-4 bg-[#0D1B2A] min-h-[300px]">
                  {activeTab === 'cover' && (
                    <div className="space-y-4 text-left">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-[#2DD4BF] font-mono">
                            ShieldScribe Policy Suite
                          </div>
                          <h3 className="font-heading font-bold text-lg text-[#F8FAFC] mt-0.5">
                            Password & Access Control Policy
                          </h3>
                        </div>
                        <div className="p-2 rounded bg-[#11243A] border border-[#23364D]">
                          <Shield className="w-5 h-5 text-[#3B82F6]" />
                        </div>
                      </div>

                      {/* Document Control Table */}
                      <div className="rounded border border-[#23364D] bg-[#11243A]/60 overflow-hidden text-xs">
                        <div className="grid grid-cols-2 divide-x divide-[#23364D] border-b border-[#23364D] p-2.5">
                          <span className="text-[#94A3B8]">Document ID</span>
                          <span className="font-mono text-[#F8FAFC] pl-2 font-medium">POL-SEC-001</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-[#23364D] border-b border-[#23364D] p-2.5">
                          <span className="text-[#94A3B8]">Classification</span>
                          <span className="text-[#2DD4BF] pl-2 font-medium">Confidential / Internal</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-[#23364D] border-b border-[#23364D] p-2.5">
                          <span className="text-[#94A3B8]">Review Cadence</span>
                          <span className="text-[#F8FAFC] pl-2">Annual Verification</span>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-[#23364D] p-2.5">
                          <span className="text-[#94A3B8]">Owner Role</span>
                          <span className="text-[#F8FAFC] pl-2">Head of Information Security</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                        <strong className="text-[#F8FAFC]">Policy Purpose:</strong> To define enforceable
                        authentication standards, role-based access privileges, and rapid deprovisioning
                        timelines to protect corporate databases and cloud assets.
                      </p>
                    </div>
                  )}

                  {activeTab === 'clauses' && (
                    <div className="space-y-3.5 text-left text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#23364D]">
                        <span className="font-mono text-[#3B82F6] font-semibold">SECTION 2.0 // CONTROL SPECIFICATION</span>
                        <span className="text-[11px] text-[#94A3B8]">MFA Mandate</span>
                      </div>
                      <p className="text-[#F8FAFC] font-medium">
                        2.1 Multi-Factor Authentication (MFA) Enforcement Standard
                      </p>
                      <ul className="space-y-2 text-[#94A3B8]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#2DD4BF] mt-0.5">▪</span>
                          <span>Mandatory for all corporate email, cloud hosting, and code repositories.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#2DD4BF] mt-0.5">▪</span>
                          <span>TOTP authenticators or FIDO2 hardware keys required; SMS prohibited.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#2DD4BF] mt-0.5">▪</span>
                          <span>Workforce prohibited from approving unverified push notifications.</span>
                        </li>
                      </ul>
                      <div className="p-2.5 rounded bg-[#11243A] border border-[#23364D] text-[11px] text-[#94A3B8]">
                        <span className="text-[#2DD4BF] font-semibold">Audit Checkpoint:</span> Semi-annual automated MFA enrollment log review.
                      </div>
                    </div>
                  )}

                  {activeTab === 'signoff' && (
                    <div className="space-y-4 text-left text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#23364D]">
                        <span className="font-mono text-[#2DD4BF] font-semibold">SECTION 6.0 // AUDIT APPROVAL</span>
                        <span className="text-[11px] text-[#94A3B8]">Governance Sign-Off</span>
                      </div>
                      <div className="space-y-2.5">
                        <div className="p-3 rounded bg-[#11243A] border border-[#23364D] flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-[#94A3B8] uppercase">Prepared By</div>
                            <div className="text-[#F8FAFC] font-medium">ShieldScribe Documentation Specialist</div>
                          </div>
                          <FileCheck className="w-4 h-4 text-[#2DD4BF]" />
                        </div>
                        <div className="p-3 rounded bg-[#11243A] border border-[#23364D] flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-[#94A3B8] uppercase">Client Authorization</div>
                            <div className="text-[#F8FAFC] font-medium">Managing Director / CISO Sign-off</div>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                        </div>
                      </div>
                      <p className="text-[11px] text-[#94A3B8] italic">
                        Delivered in editable Word (.docx) format with corporate logo and customized stakeholder fields.
                      </p>
                    </div>
                  )}
                </div>

                {/* Mockup Action Footer */}
                <div className="px-5 py-3 bg-[#11243A] border-t border-[#23364D] flex items-center justify-between text-xs">
                  <span className="text-[#94A3B8]">5 Policies Included in Starter Pack</span>
                  <button
                    onClick={onOpenSample}
                    className="text-[#2DD4BF] hover:text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Read Full Document</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Value Statements: 3 Credibility Pillars (Full width strip) */}
        <div className="mt-16 pt-8 border-t border-[#23364D]/60 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HERO_VALUE_STATEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D1B2A]/60 border border-[#23364D]/80 hover:border-[#3B82F6]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#11243A] border border-[#23364D] flex items-center justify-center shrink-0">
                  {idx === 0 && <Shield className="w-4 h-4 text-[#2DD4BF]" />}
                  {idx === 1 && <FileSpreadsheet className="w-4 h-4 text-[#3B82F6]" />}
                  {idx === 2 && <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />}
                </div>
                <h3 className="font-heading text-sm font-semibold text-[#F8FAFC]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed pl-11">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
