import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { PRODUCT_SERVICE_OPTIONS } from './QuoteModal';
import { Phone, Mail, CheckCircle, Send, ArrowRight } from 'lucide-react';

interface QuoteSectionProps {
  preselectedProduct?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ preselectedProduct }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productOrService: preselectedProduct || 'Fire Resistant Doors',
    projectLocation: '',
    requirement: '',
    preferredContact: 'Phone'
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefId(`ASE-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  return (
    <section id="quote-section" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden technical-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block mb-2 font-mono">
                Project Consultation & Estimating
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                Have an Industrial Requirement?
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Tell us about your project, product or service requirement and our technical team will get in touch with you with certified specifications and competitive commercial estimates.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#0F4C81] flex items-center justify-center text-white shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Direct Line</span>
                  <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="text-white font-mono font-bold hover:underline">
                    +91 {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#0F4C81] flex items-center justify-center text-white shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Email Enquiries</span>
                  <a href={`mailto:${COMPANY_DATA.email}`} className="text-white hover:underline">
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 text-slate-400 font-mono text-[11px]">
                GSTIN: <span className="text-white">{COMPANY_DATA.gstin}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-xs border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Request Successfully Submitted
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Reference: <span className="font-mono font-bold text-slate-900">{refId}</span>. Our technical representative will contact you with relevant drawings and quotations.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xs mt-2"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Anand Patil"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Company / Organization <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Maharashtra Power Unit"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 91689 86246"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Product / Service Required <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.productOrService}
                      onChange={(e) => setFormData({ ...formData, productOrService: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none bg-white"
                    >
                      {PRODUCT_SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Project Location <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Jalgaon / Mumbai / Bhusawal"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Requirement & Technical Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Provide details on quantities, dimensions, fire rating requirement, or scope of engineering work..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Preferred Mode of Contact
                  </label>
                  <div className="flex items-center gap-6 pt-1">
                    {['Phone', 'WhatsApp', 'Email'].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="secPreferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="text-[#0F4C81] focus:ring-[#0F4C81]"
                        />
                        <span className="text-slate-700 font-medium">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#111827] hover:bg-[#0F4C81] text-white font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Request a Quote
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
