import React from 'react';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { QuoteSection } from '../components/QuoteSection';
import { ArrowRight, Check } from 'lucide-react';

interface IndustriesPageProps {
  openQuoteModal: (industryName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ openQuoteModal }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Page Header */}
      <section className="bg-[#111827] text-white py-16 sm:py-20 border-b border-slate-800 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block mb-2 font-mono">
              Sector Specialization
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Solutions Across Critical Industrial Environments
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              We engineer and deliver industrial material supplies, high-specification door and barrier systems, and ongoing maintenance tailored specifically to the operational requirements of each facility type.
            </p>
          </div>
        </div>
      </section>

      {/* 12 Industry Cards Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <div
              key={ind.id}
              className="bg-white border border-slate-200 rounded-xs p-6 flex flex-col justify-between hover:border-slate-400 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#0F4C81]">
                    SECTOR 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 bg-[#F97316] rounded-full" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {ind.name}
                </h3>

                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  {ind.tagline}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {ind.description}
                </p>

                {/* Relevant Products */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 font-mono mb-2">
                    Key Products Supplied:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {ind.relevantProducts.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Services */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-800 font-mono mb-2">
                    Key Engineering Services:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {ind.relevantServices.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-[#0F4C81] font-bold">›</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => openQuoteModal(`${ind.name} Requirements`)}
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-[#0F4C81] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  Enquire for {ind.name}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Quote Section */}
      <QuoteSection />

    </div>
  );
};
