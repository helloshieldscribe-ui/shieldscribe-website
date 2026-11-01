import React, { useState, useEffect } from 'react';
import { Shield, FileText, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (servicePreset?: string) => void;
  onOpenSample: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenSample }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Sample Policy', href: '#sample-preview' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md border-b border-[#23364D]/80 shadow-lg'
          : 'bg-[#07111F]/60 backdrop-blur-sm border-b border-[#23364D]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-[#F8FAFC]"
            aria-label="ShieldScribe Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#11243A] border border-[#23364D] group-hover:border-[#3B82F6] transition-colors">
              <Shield className="w-5 h-5 text-[#3B82F6]" />
              <FileText className="w-3.5 h-3.5 text-[#2DD4BF] absolute bottom-2 right-2 opacity-90" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-[#F8FAFC]">
              Shield<span className="text-[#2DD4BF]">Scribe</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#94A3B8]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#F8FAFC] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2DD4BF] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenContact('ShieldScribe Security Documentation Starter Pack ($199)')}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-all duration-200 shadow-sm hover:shadow-[#3B82F6]/20 flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#11243A] border border-[#23364D] text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D1B2A] border-b border-[#23364D] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#11243A] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#23364D]/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('ShieldScribe Security Documentation Starter Pack ($199)');
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSample();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#11243A] rounded-lg transition-colors cursor-pointer"
            >
              View Sample Policy
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
