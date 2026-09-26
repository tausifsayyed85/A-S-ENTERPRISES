import React, { useState } from 'react';
import { COMPANY_DATA, PROCUREMENT_FAQ_ITEMS } from '../data/companyData';
import { QuoteSection } from '../components/QuoteSection';
import { BrandLogo } from '../components/BrandLogo';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Target, 
  Award,
  ChevronDown,
  Clock,
  Truck,
  FileText,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  openQuoteModal: (productName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openQuoteModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Page Header */}
      <section className="bg-[#111827] text-white py-16 sm:py-20 border-b border-slate-800 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block mb-2 font-mono">
              Corporate Overview
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              About M/s A. S. Enterprises
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Industrial Material Suppliers • Industrial Solutions • Engineering Support • Reliable Services
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Pillars */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0F4C81] font-semibold block mb-1 font-mono">
                Organization Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                Built Around Quality, Reliability & Customer Support
              </h2>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              M/s A. S. ENTERPRISES is a professionally managed organization engaged in supplying industrial materials and providing engineering support services across various industrial sectors.
            </p>

            <p className="text-sm text-slate-700 leading-relaxed">
              We are committed to delivering high-quality products, dependable services, and timely project execution. With a strong focus on customer satisfaction, we provide industrial solutions that meet modern industry standards.
            </p>

            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-display mb-3">
                Our Operational Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPANY_DATA.strengths.map((str, i) => (
                  <div key={i} className="p-4 bg-white border border-slate-200 rounded-xs shadow-2xs">
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0F4C81] rounded-full shrink-0" />
                      {str.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {str.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-display mb-3">
                Working Sectors
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {COMPANY_DATA.workingSectors.map((sector, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-800 font-medium border border-slate-200 rounded-xs">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Official Entity Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 sm:p-8 rounded-xs shadow-xs space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Official Registered Corporate Identity
              </span>
              <div className="overflow-hidden rounded-xs shadow-md border border-slate-200">
                <BrandLogo variant="lockup-card" />
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-slate-500 block">Registered Address</span>
                <span className="text-slate-900 font-medium leading-relaxed block mt-0.5">
                  {COMPANY_DATA.address.fullAddress}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block">Goods and Services Tax ID (GSTIN)</span>
                <span className="font-mono text-slate-900 font-bold text-sm block mt-0.5">
                  {COMPANY_DATA.gstin}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block">Direct Telephone</span>
                <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="font-mono text-slate-900 font-bold text-sm hover:underline block mt-0.5">
                  +91 {COMPANY_DATA.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block">Official Business Email</span>
                <a href={`mailto:${COMPANY_DATA.email}`} className="text-slate-900 font-medium hover:underline block mt-0.5">
                  {COMPANY_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="p-4 bg-slate-900 text-white rounded-xs space-y-2">
                <span className="text-[11px] font-mono text-[#F97316] uppercase tracking-wider block">
                  Vision Statement
                </span>
                <p className="text-xs leading-relaxed italic text-slate-200">
                  "{COMPANY_DATA.vision}"
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Major Clients Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-y border-slate-800 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block mb-2 font-mono">
              Organizations Served
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Selected Clients & Industrial Organizations
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Major organizations as documented in the official company profile
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANY_DATA.majorClients.map((client, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-slate-800 border border-slate-700 rounded-xs flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-slate-950 border border-slate-700 rounded-xs flex items-center justify-center font-mono font-bold text-[#F97316] shrink-0 text-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {client}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                    Public / Industrial Corporation
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement & Delivery Timelines FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
              <span className="text-[#F00000] font-semibold">PROCUREMENT GUIDELINES</span>
              <span aria-hidden="true">·</span>
              <span>DELIVERY SCHEDULES</span>
              <span aria-hidden="true">·</span>
              <span>LOGISTICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Procurement & Delivery FAQs
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Addressing common queries from industrial procurement managers, EPC contractors, and site engineers regarding quotation requests, lead times, transportation, and technical compliance.
            </p>
          </div>

          {/* Interactive Accordion List */}
          <div className="space-y-3">
            {PROCUREMENT_FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-xs transition-colors duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-slate-400 bg-slate-50/50 shadow-xs' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-5 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C81]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-[#F00000] shrink-0 pt-0.5">
                        0{index + 1}.
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-1 text-slate-500 rounded-xs transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-slate-900' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      <p className="pl-7">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Support Strip Callout */}
          <div className="mt-10 p-6 bg-slate-900 text-white rounded-xs border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#F00000] block mb-1">
                Urgent Procurement Inquiries
              </span>
              <h4 className="text-base font-bold font-display text-white">
                Have a time-sensitive plant shutdown or custom project BOQ?
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Contact our estimating desk directly for urgent dispatch lead times, manufacturing slots, and site delivery arrangements.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#F00000]" />
                <span>+91 {COMPANY_DATA.phone}</span>
              </a>

              <button
                onClick={() => openQuoteModal('Procurement & Delivery Query')}
                className="px-4 py-2 bg-[#F00000] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Quotation */}
      <QuoteSection />

    </div>
  );
};
