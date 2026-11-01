import React from 'react';
import { Shield, FileText, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSample: () => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenSample,
  onScrollToTop,
}) => {
  return (
    <footer className="bg-[#07111F] border-t border-[#23364D] text-xs text-[#94A3B8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#11243A] border border-[#23364D]">
                <Shield className="w-5 h-5 text-[#3B82F6]" />
                <FileText className="w-3 h-3 text-[#2DD4BF] absolute bottom-1.5 right-1.5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-[#F8FAFC]">
                Shield<span className="text-[#2DD4BF]">Scribe</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed text-[#94A3B8] max-w-sm">
              Professional, business-tailored cybersecurity documentation as a service. Helping growing
              organisations establish clear security expectations and strong governance foundations.
            </p>

            <div className="pt-2 text-[11px] text-[#2DD4BF] font-mono">
              Clear Policies. Stronger Security Foundations.
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-heading font-semibold text-[#F8FAFC] text-sm uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#F8FAFC] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#F8FAFC] transition-colors">
                  Pricing ($199)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSample}
                  className="hover:text-[#F8FAFC] transition-colors text-left cursor-pointer"
                >
                  Sample Policy
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F8FAFC] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F8FAFC] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Policies */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-heading font-semibold text-[#F8FAFC] text-sm uppercase tracking-wider">
              Foundational Policies
            </div>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-[#F8FAFC] transition-colors cursor-pointer" onClick={onOpenSample}>
                Password & Access Control Policy
              </li>
              <li className="hover:text-[#F8FAFC] transition-colors cursor-pointer" onClick={onOpenSample}>
                Acceptable Use Policy
              </li>
              <li className="hover:text-[#F8FAFC] transition-colors cursor-pointer" onClick={onOpenSample}>
                Data Protection Policy
              </li>
              <li className="hover:text-[#F8FAFC] transition-colors cursor-pointer" onClick={onOpenSample}>
                Incident Response Plan
              </li>
              <li className="hover:text-[#F8FAFC] transition-colors cursor-pointer" onClick={onOpenSample}>
                Remote Working Security Policy
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-heading font-semibold text-[#F8FAFC] text-sm uppercase tracking-wider">
              Contact & Inquiries
            </div>
            <p className="text-xs text-[#94A3B8]">
              Have questions regarding document scope or client security questionnaires?
            </p>
            <div className="flex items-center gap-2 text-xs text-[#2DD4BF]">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:helloshieldscribe@gmail.com" className="hover:underline">
                helloshieldscribe@gmail.com
              </a>
            </div>
            <div className="pt-2 flex items-center gap-3 text-xs">
              <button
                onClick={onOpenPrivacy}
                className="hover:text-[#F8FAFC] underline transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={onOpenTerms}
                className="hover:text-[#F8FAFC] underline transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-[#23364D]/60 text-[11px] text-[#94A3B8]/80 leading-relaxed">
          <p>
            <strong className="text-[#94A3B8]">Legal & Regulatory Disclaimer:</strong> ShieldScribe provides cybersecurity documentation drafting services and governance templates based on client-provided intake information. ShieldScribe does not provide formal legal counsel, accredited statutory certifications (such as accredited ISO 27001 certificates), or an absolute guarantee of audit passage or liability indemnification. Clients are encouraged to review final deliverables with their legal or compliance advisors where statutory jurisdictional obligations apply.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-[#23364D]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} ShieldScribe. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#94A3B8]/60">Built for businesses in the USA & UK</span>
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
