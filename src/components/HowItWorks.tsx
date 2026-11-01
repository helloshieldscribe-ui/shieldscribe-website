import React from 'react';
import { ClipboardList, CheckCircle2, FileEdit, FileCheck2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface HowItWorksProps {
  onRequestPackage: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onRequestPackage }) => {
  const stepIcons = [
    ClipboardList,
    CheckCircle2,
    FileEdit,
    FileCheck2
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-3">
            <span>Streamlined Engagement</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            How It Works: From Intake to Delivery in 48 Hours.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A frictionless, structured workflow engineered to take cybersecurity documentation off your plate
            without requiring hours of meetings or legal complexity.
          </p>
        </div>

        {/* 4-Step Horizontal Process Grid with Connector Lines */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-gradient-to-r from-[#3B82F6]/20 via-[#2DD4BF]/40 to-[#3B82F6]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = stepIcons[index] || ClipboardList;
              return (
                <div
                  key={step.step}
                  className="rounded-xl bg-[#0D1B2A] border border-[#23364D] p-6 hover:border-[#3B82F6]/60 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#11243A] border border-[#23364D] flex items-center justify-center text-[#2DD4BF] shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-heading font-extrabold text-2xl text-[#23364D] group-hover:text-[#3B82F6] transition-colors">
                        0{step.step}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-[#3B82F6] uppercase tracking-wider mb-1">
                      {step.subtitle}
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#F8FAFC] mb-2.5">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Deliverable Footer */}
                  <div className="pt-4 border-t border-[#23364D] space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[#94A3B8]">
                      <span>Turnaround:</span>
                      <span className="font-medium text-[#F8FAFC]">{step.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#94A3B8]">
                      <span>Deliverable:</span>
                      <span className="text-[#2DD4BF] font-mono">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onRequestPackage}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer"
          >
            <span>Start Step 1: Tell Us About Your Business</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
