import React from 'react';
import { Users2, HelpCircle, FileX2, ClipboardCheck, AlertOctagon, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROBLEM_ITEMS } from '../data/content';

interface ProblemSectionProps {
  onExploreServices: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onExploreServices }) => {
  const problemIcons = [
    Users2,
    HelpCircle,
    FileX2,
    ClipboardCheck,
    AlertOctagon,
    Clock,
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0D1B2A]/40 border-y border-[#23364D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <span>The Reality for Growing Teams</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            Security Documentation Shouldn't Be Complicated.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Most businesses recognize the importance of cybersecurity governance. Yet without dedicated
            in-house compliance officers, establishing clear, actionable policies turns into an overwhelming hurdle.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_ITEMS.map((item, index) => {
            const IconComponent = problemIcons[index] || AlertOctagon;
            return (
              <div
                key={item.id}
                className="group relative p-6 sm:p-7 rounded-xl bg-[#11243A]/60 border border-[#23364D] hover:border-[#3B82F6]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold text-[#2DD4BF] tracking-wider">
                      PROBLEM {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#07111F] border border-[#23364D] flex items-center justify-center text-[#94A3B8] group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/40 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-[#F8FAFC] mb-2.5 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#23364D]/50 text-xs text-[#94A3B8]/90">
                  <strong className="text-[#F8FAFC]/90">Business Impact:</strong> {item.impact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Bridge: How ShieldScribe Solves This */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#11243A] via-[#0D1B2A] to-[#11243A] border border-[#23364D] relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#3B82F6]/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
                <ShieldCheck className="w-4 h-4" />
                <span>The ShieldScribe Solution</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                Clear Policies. Practical Rules. Zero Enterprise Fluff.
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                ShieldScribe bridges this gap by translating complex cybersecurity expectations into tailored,
                concise documents designed specifically for modern teams. We do the heavy drafting so you can
                operate securely and satisfy client evaluations with confidence.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onExploreServices}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>See Our 5 Foundational Policies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
