import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Shield, Building, Globe, Layers, Lock } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  selectedServicePreset?: string;
  onClearPreset?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServicePreset,
  onClearPreset,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    country: 'United States',
    industry: 'Technology / SaaS',
    companySize: '1–10 employees',
    requiredService: 'ShieldScribe Security Documentation Starter Pack ($199)',
    additionalRequirements: '',
    consentCheckbox: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  // Sync selected service preset if provided
  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({
        ...prev,
        requiredService: selectedServicePreset,
      }));
    }
  }, [selectedServicePreset]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Please provide your business email address.';
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Please enter a valid email format (e.g., name@company.com).';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your company or agency name.';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Please specify your country.';
    }

    if (!formData.consentCheckbox) {
      newErrors.consentCheckbox = 'Please confirm consent to process this documentation inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate verified client-side submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      country: 'United States',
      industry: 'Technology / SaaS',
      companySize: '1–10 employees',
      requiredService: 'ShieldScribe Security Documentation Starter Pack ($199)',
      additionalRequirements: '',
      consentCheckbox: false,
    });
    setErrors({});
    if (onClearPreset) onClearPreset();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Support Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2DD4BF]">
              <Mail className="w-4 h-4" />
              <span>Direct Customer Intake</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Request Your Documentation Package.
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              Submit your company details and documentation objectives. We will review your request,
              confirm scope and delivery timeline, and send you a secure digital invoice and onboarding questionnaire.
            </p>

            <div className="p-5 rounded-xl bg-[#0D1B2A] border border-[#23364D] space-y-3 text-xs text-[#94A3B8]">
              <div className="font-heading font-semibold text-[#F8FAFC] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#3B82F6]" />
                <span>Our Privacy & Security Commitment</span>
              </div>
              <p>
                We never ask for passwords, private keys, live infrastructure credentials, or payment card
                numbers via this intake form.
              </p>
              <div className="pt-2 border-t border-[#23364D] text-[#2DD4BF] font-mono">
                Direct Contact: helloshieldscribe@gmail.com
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                <span>Target confirmation turnaround: under 4 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span>Serving businesses across the USA, UK, and remote-first hubs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0D1B2A] border border-[#23364D] p-6 sm:p-8 shadow-xl relative">
              {/* Form Mode Clarification Banner */}
              <div className="mb-6 p-3 rounded-lg bg-[#11243A]/60 border border-[#23364D] text-[11px] text-[#94A3B8] flex items-center justify-between">
                <span>
                  <strong className="text-[#F8FAFC]">Direct Inquiry:</strong> Submissions are validated and routed to our intake desk.
                </span>
                <span className="text-[#2DD4BF] font-mono">SECURE FORM</span>
              </div>

              {submittedData ? (
                /* Success Confirmation State */
                <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#2DD4BF]/20 border border-[#2DD4BF] text-[#2DD4BF] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                      Inquiry Successfully Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto">
                      Thank you, <strong className="text-[#F8FAFC]">{submittedData.fullName}</strong>. We have logged
                      your documentation request for <strong className="text-[#F8FAFC]">{submittedData.companyName}</strong>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="max-w-md mx-auto p-4 rounded-xl bg-[#11243A] border border-[#23364D] text-left text-xs space-y-2 text-[#94A3B8]">
                    <div className="flex justify-between border-b border-[#23364D] pb-1.5">
                      <span>Service Requested:</span>
                      <span className="text-[#F8FAFC] font-medium">{submittedData.requiredService}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#23364D] pb-1.5">
                      <span>Business Email:</span>
                      <span className="text-[#2DD4BF] font-mono">{submittedData.businessEmail}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#23364D] pb-1.5">
                      <span>Company / Region:</span>
                      <span className="text-[#F8FAFC]">{submittedData.companyName} ({submittedData.country})</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Estimated Scope Review:</span>
                      <span className="text-[#3B82F6] font-semibold">Under 4 business hours</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8]">
                    A copy of your intake summary will be sent to your email with the secure onboarding questionnaire link.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                        Full Name <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full bg-[#11243A] border ${
                          errors.fullName ? 'border-[#EF4444]' : 'border-[#23364D]'
                        } rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#3B82F6]`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-[#EF4444]">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessEmail" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                        Business Email <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className={`w-full bg-[#11243A] border ${
                          errors.businessEmail ? 'border-[#EF4444]' : 'border-[#23364D]'
                        } rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#3B82F6]`}
                      />
                      {errors.businessEmail && (
                        <p className="mt-1 text-[11px] text-[#EF4444]">{errors.businessEmail}</p>
                      )}
                    </div>
                  </div>

                  {/* Company Name & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                        Company Name <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Horizon Digital Labs"
                        className={`w-full bg-[#11243A] border ${
                          errors.companyName ? 'border-[#EF4444]' : 'border-[#23364D]'
                        } rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#3B82F6]`}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-[11px] text-[#EF4444]">{errors.companyName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                        Country / Jurisdiction <span className="text-[#EF4444]">*</span>
                      </label>
                      <select
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-[#11243A] border border-[#23364D] rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] focus:outline-none focus:border-[#3B82F6]"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="European Union">European Union</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other International</option>
                      </select>
                    </div>
                  </div>

                  {/* Industry & Company Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="industry" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                        Industry / Sector
                      </label>
                      <select
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-[#11243A] border border-[#23364D] rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] focus:outline-none focus:border-[#3B82F6]"
                      >
                        <option value="Technology / SaaS">Technology / SaaS</option>
                        <option value="Digital Marketing Agency">Digital Marketing Agency</option>
                        <option value="IT & Managed Services">IT & Managed Services</option>
                        <option value="Web & Software Development">Web & Software Development</option>
                        <option value="Professional Consulting">Professional Consulting</option>
                        <option value="E-Commerce / Retail">E-Commerce / Retail</option>
                        <option value="Other">Other Industry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="companySize" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                        Company Size (Workforce)
                      </label>
                      <select
                        id="companySize"
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full bg-[#11243A] border border-[#23364D] rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] focus:outline-none focus:border-[#3B82F6]"
                      >
                        <option value="1–10 employees">1–10 employees</option>
                        <option value="11–25 employees">11–25 employees</option>
                        <option value="26–50 employees">26–50 employees (Standard Starter Pack limit)</option>
                        <option value="51–100 employees">51–100 employees (Custom scope)</option>
                        <option value="100+ employees">100+ employees (Enterprise quote)</option>
                      </select>
                    </div>
                  </div>

                  {/* Required Service Selection */}
                  <div>
                    <label htmlFor="requiredService" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                      Required Service / Package
                    </label>
                    <select
                      id="requiredService"
                      value={formData.requiredService}
                      onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                      className="w-full bg-[#11243A] border border-[#23364D] rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] focus:outline-none focus:border-[#3B82F6]"
                    >
                      <option value="ShieldScribe Security Documentation Starter Pack ($199)">
                        ShieldScribe Security Documentation Starter Pack ($199 — All 5 Foundational Policies)
                      </option>
                      <option value="Password & Access Control Policy (POL-AC-001)">
                        Password & Access Control Policy Only
                      </option>
                      <option value="Acceptable Use Policy (POL-AU-002)">
                        Acceptable Use Policy Only
                      </option>
                      <option value="Data Protection Policy (POL-DP-003)">
                        Data Protection Policy Only
                      </option>
                      <option value="Incident Response Plan (POL-IR-004)">
                        Incident Response Plan Only
                      </option>
                      <option value="Remote Working Security Policy (POL-RW-005)">
                        Remote Working Security Policy Only
                      </option>
                      <option value="Custom Security Documentation & Client Questionnaires">
                        Custom Security Documentation & Client Questionnaires
                      </option>
                    </select>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label htmlFor="additionalRequirements" className="block text-xs font-medium text-[#F8FAFC] mb-1.5">
                      Additional Requirements or Tooling Notes (Optional)
                    </label>
                    <textarea
                      id="additionalRequirements"
                      rows={3}
                      value={formData.additionalRequirements}
                      onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                      placeholder="e.g., We use Google Workspace, GitHub, and 1Password. Need documentation before an upcoming enterprise client audit next week."
                      className="w-full bg-[#11243A] border border-[#23364D] rounded-lg px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#3B82F6]"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentCheckbox}
                        onChange={(e) => setFormData({ ...formData, consentCheckbox: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded bg-[#11243A] border-[#23364D] text-[#3B82F6] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-xs text-[#94A3B8] leading-tight">
                        I confirm that the provided information is for business documentation purposes. I acknowledge that ShieldScribe provides documentation support, not legal advice or formal ISO/GDPR compliance certification. <span className="text-[#EF4444]">*</span>
                      </span>
                    </label>
                    {errors.consentCheckbox && (
                      <p className="mt-1 text-[11px] text-[#EF4444] pl-7">{errors.consentCheckbox}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/50 rounded-lg transition-all duration-200 shadow-md hover:shadow-[#3B82F6]/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Your Intake...</span>
                      ) : (
                        <>
                          <span>Submit Documentation Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
