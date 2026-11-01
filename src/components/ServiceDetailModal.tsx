import React from 'react';
import { X, Shield, Check, ArrowRight, FileText } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onRequestService,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#07111F] border border-[#23364D] shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#11243A] border-b border-[#23364D] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#2DD4BF] bg-[#07111F] px-2.5 py-1 rounded border border-[#23364D]">
              {service.documentCode}
            </span>
            <h2 className="font-heading text-lg font-bold text-[#F8FAFC]">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#07111F] hover:bg-[#162D4A] border border-[#23364D] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] mb-1">
              Document Purpose & Scope
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#23364D]">
            <div className="text-xs text-[#94A3B8] uppercase font-mono mb-1">Recommended For</div>
            <div className="text-xs font-semibold text-[#F8FAFC]">{service.recommendedFor}</div>
          </div>

          {/* Clauses breakdown */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Detailed Clause Structure Included in Deliverable:
            </div>
            <div className="space-y-2">
              {service.clausesSummary.map((clause, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#0D1B2A] border border-[#23364D] text-xs text-[#94A3B8] flex items-start gap-2.5"
                >
                  <span className="text-[#3B82F6] mt-0.5">▪</span>
                  <span className="leading-relaxed text-[#F8FAFC]/90">{clause}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Inclusions */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC]">
              Operational Requirements Addressed:
            </div>
            <div className="space-y-2">
              {service.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#11243A] border-t border-[#23364D] flex items-center justify-between gap-4">
          <div className="text-xs text-[#94A3B8] hidden sm:block">
            Included in the $199 Starter Pack or available individually upon request.
          </div>
          <button
            onClick={() => {
              onClose();
              onRequestService(service.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
          >
            <span>Enquire About This Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
