import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openQuoteModal: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, openQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: High-Resolution Official Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F00000] rounded-xs group py-1"
            aria-label="M/s A.S ENTERPRISES Home"
          >
            <BrandLogo variant="primary" size="md" />
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-2 text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'text-[#F00000]' 
                      : 'text-slate-600 hover:text-[#111827]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F00000]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0F4C81] transition-colors px-3 py-2"
              title="Call Direct"
            >
              <Phone className="w-3.5 h-3.5 text-[#0F4C81]" />
              <span className="font-mono tabular-nums">{COMPANY_DATA.phone}</span>
            </a>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#111827] hover:bg-[#0F4C81] rounded-sm transition-colors whitespace-nowrap shadow-sm"
            >
              Request a Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 text-xs font-semibold uppercase text-white bg-[#111827] rounded-sm"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
            <BrandLogo variant="primary" size="sm" />
            <span className="text-[10px] font-mono uppercase text-slate-400">
              GST: 27ETGPS6246K1ZZ
            </span>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 text-sm font-semibold rounded-xs transition-colors ${
                  currentTab === link.id
                    ? 'bg-red-50 text-[#F00000]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold border border-slate-300 rounded-sm text-slate-800"
            >
              <Phone className="w-4 h-4 text-[#0F4C81]" />
              Call Now: {COMPANY_DATA.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-[#111827] rounded-sm text-center"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
