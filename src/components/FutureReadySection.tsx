import React from 'react';
import { Cpu, Sparkles, Clock, ArrowRight, ShieldAlert, FileText, CheckCircle } from 'lucide-react';
import { FUTURE_READY_ITEMS } from '../data/content';

interface FutureReadySectionProps {
  onJoinWaitlist: (serviceName: string) => void;
}

export const FutureReadySection: React.FC<FutureReadySectionProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF] mb-3">
            <Cpu className="w-4 h-4" />
            <span>Forward Roadmap & Emerging Standards</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] text-balance">
            Preparing Businesses for the AI Era.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            As workplace artificial intelligence and vendor scrutiny expand, cybersecurity governance must adapt.
            Here is the planned documentation suite we are actively developing for growing technology businesses.
          </p>
        </div>

        {/* Future Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_READY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-[#0D1B2A] border border-[#23364D] hover:border-[#3B82F6]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                      item.status === 'Coming Soon'
                        ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30'
                        : 'bg-[#11243A] text-[#94A3B8] border-[#23364D]'
                    }`}
                  >
                    {item.status}
                  </span>
                  <Clock className="w-4 h-4 text-[#94A3B8]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-[#F8FAFC] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#23364D] flex items-center justify-between">
                <span className="text-[11px] text-[#2DD4BF] font-medium">
                  {item.relevance}
                </span>

                <button
                  onClick={() => onJoinWaitlist(item.title)}
                  className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1 transition-colors cursor-pointer py-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          {/* Custom Roadmap Request Card */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#11243A] to-[#07111F] border border-[#23364D] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-[#3B82F6]">Specialized Requests</div>
              <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">
                Need a Bespoke GRC Document?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                If your enterprise customer requested a specific security charter, disaster recovery protocol,
                or cryptographic standards document not listed here, we can draft custom policies on request.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onJoinWaitlist('Custom Security Documentation Request')}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-[#F8FAFC] bg-[#11243A] hover:bg-[#162D4A] border border-[#23364D] rounded-lg transition-colors cursor-pointer"
              >
                Request Custom Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
