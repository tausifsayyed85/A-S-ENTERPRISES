import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { COMPANY_DATA } from '../data/companyData';
import { QuoteSection } from '../components/QuoteSection';
import { 
  Wrench, 
  DoorClosed, 
  Scale, 
  Users, 
  Truck, 
  Hammer, 
  Building2, 
  CheckCircle2, 
  Phone, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ServicesPageProps {
  openQuoteModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ openQuoteModal }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header Banner */}
      <section className="bg-[#111827] text-white py-16 sm:py-20 border-b border-slate-800 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block mb-2 font-mono">
              Industrial Capability
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Engineering Support & Industrial Services
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              M/s A. S. Enterprises provides comprehensive technical maintenance, certified on-site fabrication, heavy plant mechanical overhauls, skilled manpower deployment, and civil works across power plants, industrial facilities, and infrastructure developments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white border border-slate-200 rounded-xs p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left col: Title and Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm rounded-xs border-l-2 border-[#0F4C81]">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                        Engineering Discipline
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.sectors.map((sec, i) => (
                      <span key={i} className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-xs">
                        {sec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => openQuoteModal(service.title)}
                      className="px-4 py-2 bg-[#0F4C81] hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                    >
                      Request Service Estimate
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right col: Scope of Work Matrix */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-5 rounded-xs">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-900 font-display mb-3 flex items-center justify-between">
                    <span>Execution Scope & Deliverables</span>
                    <span className="text-[11px] font-mono text-slate-400 font-normal">Industry Standard Compliance</span>
                  </h3>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {service.scope.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 bg-white p-2.5 border border-slate-100 rounded-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Direct Coordination:</span>
                    <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="font-bold text-slate-900 hover:underline">
                      +91 {COMPANY_DATA.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Quotation Section */}
      <QuoteSection />

    </div>
  );
};
