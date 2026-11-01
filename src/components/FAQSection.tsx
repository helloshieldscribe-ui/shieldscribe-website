import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Services & Scope', 'Delivery & Formats', 'Compliance & Legal'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0D1B2A]/40 border-t border-[#23364D]/60 relative scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Clear Answers to Important Questions.
          </h2>
          <p className="mt-3 text-base text-[#94A3B8]">
            We provide upfront, honest answers regarding what our documentation service covers,
            delivery timelines, file formats, and regulatory distinctions.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#11243A] rounded-lg border border-[#23364D] w-full sm:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#3B82F6] text-white shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#11243A] border border-[#23364D] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6]"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#94A3B8] bg-[#11243A]/40 rounded-xl border border-[#23364D]">
              No questions found matching your search term. Feel free to contact our team directly below.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-[#0D1B2A] border border-[#23364D] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#11243A]/40 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#2DD4BF] shrink-0">
                        {faq.id.replace('faq-', 'Q.')}
                      </span>
                      <span className="font-heading text-sm sm:text-base font-semibold text-[#F8FAFC]">
                        {faq.question}
                      </span>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-[#11243A] border border-[#23364D] flex items-center justify-center shrink-0 text-[#94A3B8]">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#2DD4BF]" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-[#23364D]/60 text-xs sm:text-sm text-[#94A3B8] leading-relaxed bg-[#07111F]/30">
                      <p>{faq.answer}</p>
                      <div className="mt-3 pt-2 border-t border-[#23364D]/40 flex items-center justify-between text-[11px]">
                        <span className="text-[#3B82F6] font-mono">Category: {faq.category}</span>
                        <span className="text-[#94A3B8]">Clear, practical guidance</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Transparent Compliance Clarification Card */}
        <div className="mt-12 p-5 rounded-xl bg-[#11243A]/60 border border-[#23364D] flex items-start gap-3.5 text-xs text-[#94A3B8] leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F8FAFC]">Important Compliance & Legal Notice:</strong> ShieldScribe helps businesses draft clear and practical internal cybersecurity policies. We do not provide statutory legal advice, formal audit certifications (e.g. issuing accredited ISO 27001 certificates), or an absolute guarantee of audit passage.
          </div>
        </div>
      </div>
    </section>
  );
};
