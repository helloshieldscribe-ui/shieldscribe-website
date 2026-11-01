import React from 'react';
import { KeyRound, Laptop, ShieldCheck, AlertTriangle, Wifi, ArrowRight, Check, FileText } from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestPackage: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestPackage,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-[#3B82F6]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#2DD4BF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#3B82F6]" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-[#2DD4BF]" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-[#3B82F6]" />;
      default:
        return <FileText className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-3">
            <FileText className="w-4 h-4" />
            <span>Structured Governance Suite</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            Essential Cybersecurity Documentation for Growing Businesses.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Each document is crafted to provide operational clarity, align with standard security
            expectations, and satisfy vendor security evaluations without unnecessary operational drag.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <div
                key={service.id}
                className={`group relative rounded-xl bg-[#0D1B2A] border ${
                  isFeatured ? 'border-[#3B82F6]/40' : 'border-[#23364D]'
                } hover:border-[#3B82F6] transition-all duration-200 flex flex-col justify-between p-7`}
              >
                <div>
                  {/* Top Bar with Icon & Doc Code */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#11243A] border border-[#23364D] flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-[#94A3B8] bg-[#11243A] px-2.5 py-1 rounded border border-[#23364D]">
                      {service.documentCode}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Inclusions */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[#23364D]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
                      Key Inclusions
                    </div>
                    <ul className="space-y-2">
                      {service.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                          <Check className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span className="leading-snug">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#23364D] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-medium text-[#2DD4BF] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <span>View Clause Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRequestPackage(service.title)}
                    className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] px-2.5 py-1 rounded bg-[#11243A] hover:bg-[#162D4A] border border-[#23364D] transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Starter Pack Summary Card to complete the 3x2 grid */}
          <div className="rounded-xl bg-gradient-to-b from-[#11243A] to-[#0D1B2A] border border-[#2DD4BF]/40 p-7 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#2DD4BF] tracking-wider">
                  Complete Package
                </span>
                <span className="text-sm font-bold text-white bg-[#3B82F6] px-2.5 py-0.5 rounded">
                  $199 Total
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-[#F8FAFC]">
                Get All 5 Essential Policies Together
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Save time and establish a coherent governance foundation. The Starter Pack combines all five
                policies tailored to your business in editable Word and signed PDF formats.
              </p>

              <div className="p-3 rounded-lg bg-[#07111F]/60 border border-[#23364D] text-xs text-[#94A3B8] space-y-1">
                <div className="text-[#F8FAFC] font-medium">Standard 48-Hour Turnaround</div>
                <div>Customised for your team, tools, and remote workflows.</div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#pricing"
                className="w-full py-3 px-4 text-center text-xs font-semibold uppercase tracking-wider text-[#07111F] bg-[#2DD4BF] hover:bg-[#26bba8] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer font-heading"
              >
                <span>View Starter Pack Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
