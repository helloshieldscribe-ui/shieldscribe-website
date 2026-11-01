import React from 'react';
import { BookOpen, Layers, FileEdit, DollarSign, UserCheck, MessageSquare, Shield } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const benefitIcons = [
    BookOpen,
    Layers,
    FileEdit,
    DollarSign,
    UserCheck,
    MessageSquare,
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <Shield className="w-4 h-4" />
            <span>Service Distinction</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            Built for Clarity. Designed for Growing Teams.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            We focus on genuine, practical service characteristics that save founders time and give
            growing organisations solid security foundations without enterprise bureaucracy.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = benefitIcons[index] || Shield;
            return (
              <div
                key={item.id}
                className="p-7 rounded-xl bg-[#0D1B2A] border border-[#23364D] hover:border-[#2DD4BF]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#11243A] border border-[#23364D] flex items-center justify-center text-[#2DD4BF]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#3B82F6] bg-[#11243A] px-2.5 py-0.5 rounded border border-[#23364D]">
                      {item.metricOrFeature}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
