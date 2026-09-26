import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { QuoteSection } from '../components/QuoteSection';
import { Phone, Mail, MapPin, MessageSquare, Shield, Clock, ExternalLink } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/919168986246?text=${encodeURIComponent(
    "Hello A. S. Enterprises, I would like to enquire about your industrial products/services. Please share more details."
  )}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Page Header */}
      <section className="bg-[#111827] text-white py-16 sm:py-20 border-b border-slate-800 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block mb-2 font-mono">
              Communications & Enquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Contact M/s A. S. Enterprises
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Connect directly with our engineering and industrial material sales team for drawings, technical specifications, and project quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-xs shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-slate-100 rounded-xs flex items-center justify-center text-[#0F4C81]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 font-mono">
                    Direct Phone Line
                  </h3>
                  <a 
                    href={`tel:${COMPANY_DATA.phoneRaw}`} 
                    className="text-lg font-bold font-mono text-slate-900 hover:text-[#0F4C81] transition-colors"
                  >
                    +91 {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Available for urgent industrial enquiries, technical consultations, and purchase order tracking.
              </p>
              <div className="mt-3">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C81] hover:underline"
                >
                  <span>Click to call now</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-xs shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-50 rounded-xs flex items-center justify-center text-emerald-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 font-mono">
                    Instant WhatsApp Enquiry
                  </h3>
                  <span className="text-lg font-bold text-slate-900">
                    +91 {COMPANY_DATA.phone}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Send engineering drawings, BOQ spreadsheets, and rapid RFQs directly over WhatsApp.
              </p>
              <div className="mt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline"
                >
                  <span>Open WhatsApp conversation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-xs shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-50 rounded-xs flex items-center justify-center text-[#0F4C81]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 font-mono">
                    Commercial Email
                  </h3>
                  <a 
                    href={`mailto:${COMPANY_DATA.email}`} 
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0F4C81] break-all transition-colors"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Official mailbox for tenders, tender documents, RFQs, and formal corporate communication.
              </p>
            </div>

            {/* Physical Location Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-xs shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xs flex items-center justify-center text-[#F97316]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 font-mono">
                    Registered Operating Address
                  </h3>
                  <h4 className="text-sm font-bold text-slate-900 font-display">
                    M/s A. S. ENTERPRISES
                  </h4>
                </div>
              </div>

              <div className="text-xs text-slate-700 space-y-1 pl-13">
                <p><strong>Post:</strong> At Post Faizpur</p>
                <p><strong>Taluka:</strong> Tal - Yawal</p>
                <p><strong>District:</strong> Dist - Jalgaon</p>
                <p><strong>PIN Code:</strong> 425503</p>
                <p><strong>State:</strong> Maharashtra, India</p>
                <p className="pt-2 text-slate-500 font-mono">
                  GSTIN: <strong className="text-slate-900">{COMPANY_DATA.gstin}</strong>
                </p>
              </div>
            </div>

          </div>

          {/* Regional Area Map & Verification Panel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Placeholder with Accurate Regional Coordinates & Route context */}
            <div className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-xs">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#F97316] uppercase block">
                    Operating Base Location
                  </span>
                  <h3 className="text-sm font-bold font-display">
                    Faizpur, Taluka Yawal, District Jalgaon (Maharashtra)
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">PIN: 425503</span>
              </div>

              {/* Styled Interactive/Visual Map Area */}
              <div className="relative aspect-16/9 bg-slate-100 technical-grid flex flex-col items-center justify-center p-6 text-center border-b border-slate-200">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#0F4C81] border border-slate-200 mb-3 animate-bounce">
                  <MapPin className="w-6 h-6 text-[#F97316]" />
                </div>
                
                <h4 className="text-base font-bold text-slate-900 font-display">
                  M/s A. S. ENTERPRISES
                </h4>
                <p className="text-xs text-slate-600 max-w-md mt-1">
                  At Post Faizpur, Tal - Yawal, Dist - Jalgaon, Pin - 425503, Maharashtra, India
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
                  <span className="px-2.5 py-1 bg-white border border-slate-200 font-mono text-slate-700">
                    Jalgaon District Hub
                  </span>
                  <span className="px-2.5 py-1 bg-white border border-slate-200 font-mono text-slate-700">
                    Bhusawal Rail/Power Corridor Proximity
                  </span>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Faizpur Yawal Jalgaon Maharashtra 425503")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-[#0F4C81] text-white text-xs font-semibold rounded-xs transition-colors"
                >
                  <span>Open Location in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-4 bg-slate-50 text-xs text-slate-600 flex items-center justify-between">
                <span>GSTIN Registered Entity: <strong>{COMPANY_DATA.gstin}</strong></span>
                <span className="font-mono text-slate-400">Maharashtra - State Code 27</span>
              </div>
            </div>

            {/* Direct Enquiry Prompt */}
            <div className="bg-slate-900 text-white p-6 rounded-xs technical-grid">
              <h3 className="text-lg font-bold font-display text-white mb-2">
                Technical Submission & RFQ Desk
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                To submit detailed drawings, architectural specifications, or project bill of quantities (BOQ), please use the RFQ form below or email us directly at <a href={`mailto:${COMPANY_DATA.email}`} className="text-[#F97316] underline font-mono">{COMPANY_DATA.email}</a>.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>Response Time: Typically within 24-48 Business Hours</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Quote Section Form */}
      <QuoteSection />

    </div>
  );
};
