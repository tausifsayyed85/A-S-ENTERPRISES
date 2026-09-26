import React, { useState, useEffect } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { X, CheckCircle, Phone, MessageSquare, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const PRODUCT_SERVICE_OPTIONS = [
  'Industrial Materials',
  'Hydraulic Pumps / Cylinders / Oil Coolers',
  'Industrial Valves',
  'Rolling Shutters',
  'Weighbridges',
  'Fire Extinguishers',
  'Circulating Chillers',
  'Fire Resistant Doors',
  'Clean Room Doors',
  'Lead Line Doors',
  'Acoustic Steel Doors',
  'Shaft Doors',
  'Automatic Gates',
  'Fire Resistant Windows',
  'Engineering Services',
  'Manpower Supply',
  'Fabrication',
  'Mechanical Works',
  'Civil Works',
  'Other'
];

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultProduct = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productOrService: defaultProduct || 'Fire Resistant Doors',
    projectLocation: '',
    requirement: '',
    preferredContact: 'Phone'
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (defaultProduct) {
      setFormData(prev => ({ ...prev, productOrService: defaultProduct }));
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ASE-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      productOrService: 'Fire Resistant Doors',
      projectLocation: '',
      requirement: '',
      preferredContact: 'Phone'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 shadow-2xl rounded-xs overflow-hidden my-8 max-h-[95vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F97316] block">
              Official Quotation Desk
            </span>
            <h3 className="text-lg font-bold font-display text-white">
              Request Commercial / Technical Quote
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xs hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold text-slate-900 font-display">
                Enquiry Successfully Registered
              </h4>

              <div className="bg-slate-50 border border-slate-200 p-4 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Reference Tracking ID:</span>
                  <span className="font-mono font-bold text-slate-900">{referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Product / Service:</span>
                  <span className="font-semibold text-slate-900">{formData.productOrService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Authorized Contact:</span>
                  <span className="text-slate-900">{formData.fullName} ({formData.phone})</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to M/s A. S. Enterprises. Our engineering & estimating team will review your specifications and contact you shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                  Call Direct: {COMPANY_DATA.phone}
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xs"
                >
                  Close & Continue
                </button>
              </div>
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
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] focus:border-[#0F4C81] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Company / Organization Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Precision Power Ltd"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] focus:border-[#0F4C81] outline-none"
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
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] focus:border-[#0F4C81] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Official Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. procurement@company.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] focus:border-[#0F4C81] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Product / Service of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.productOrService}
                    onChange={(e) => setFormData({ ...formData, productOrService: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] focus:border-[#0F4C81] outline-none bg-white"
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
                    Project / Plant Location <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Nagpur / Jalgaon / Pune"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] focus:border-[#0F4C81] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Technical Requirement / Bill of Quantities (BOQ) Summary <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  placeholder="Specify dimensions, door frame profiles, fire ratings (e.g. 2-Hour), quantities, hardware, or service scope..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] focus:border-[#0F4C81] outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Preferred Mode of Contact
                </label>
                <div className="flex items-center gap-4 pt-1">
                  {['Phone', 'WhatsApp', 'Email'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
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
                  Submit Request for Quote
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center">
                Strict commercial privacy. Information used solely to prepare technical proposals and estimates.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
