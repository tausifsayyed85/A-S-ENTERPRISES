import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  openProductDetail: (productId: string) => void;
  openQuoteModal: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, openProductDetail, openQuoteModal }) => {
  const handleNav = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredDoors = [
    { name: 'Fire Resistant Doors', id: 'fire-resistant-steel-doors' },
    { name: 'Clean Room Doors', id: 'clean-room-doors' },
    { name: 'Acoustic Steel Doors', id: 'acoustic-steel-doors' },
    { name: 'Shaft Doors', id: 'shaft-doors' },
    { name: 'Lead Line Doors', id: 'lead-line-doors' },
    { name: 'Automatic Sliding Gates', id: 'automatic-sliding-gates' },
    { name: 'Fire Resistant Windows', id: 'fire-resistant-windows' }
  ];

  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-800">
      {/* Top Banner strip */}
      <div className="border-b border-slate-800 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F00000] font-semibold block mb-1">
              Industrial Engineering Partner
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Have an industrial procurement or project requirement?
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 bg-[#F00000] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
            >
              Request a Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#F00000]" />
              Call {COMPANY_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-column body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company Profile with Official Brand Logo */}
          <div className="space-y-4">
            <BrandLogo variant="primary" size="md" />
            
            <p className="text-xs font-semibold text-slate-300 tracking-wide pt-1">
              Industrial Material Suppliers
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial Solutions • Engineering Support • Reliable Services
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              A professionally managed organization engaged in supplying industrial materials and providing engineering support services across critical industrial sectors.
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered Business: <strong className="font-mono text-white">{COMPANY_DATA.gstin}</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-200 font-bold mb-4 font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('products')} 
                  className="hover:text-white transition-colors"
                >
                  Products & Door Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-white transition-colors"
                >
                  Engineering Support Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('industries')} 
                  className="hover:text-white transition-colors"
                >
                  Industries We Serve
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('gallery')} 
                  className="hover:text-white transition-colors"
                >
                  Work & Product Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Products */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-200 font-bold mb-4 font-display">
              Door & Access Systems
            </h4>
            <ul className="space-y-2.5 text-xs">
              {featuredDoors.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentTab('products');
                      openProductDetail(item.id);
                    }}
                    className="hover:text-white text-left transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-200 font-bold mb-4 font-display">
              Office & Contact
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_DATA.address.fullAddress}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <a 
                  href={`tel:${COMPANY_DATA.phoneRaw}`} 
                  className="font-mono text-white hover:underline tabular-nums"
                >
                  +91 {COMPANY_DATA.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                <a 
                  href={`mailto:${COMPANY_DATA.email}`} 
                  className="text-white hover:underline break-all"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/919168986246?text=${encodeURIComponent("Hello A. S. Enterprises, I would like to enquire about your industrial products/services. Please share more details.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-700/80 hover:bg-emerald-600 text-white rounded-sm text-xs transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#0B0F19] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 M/s A. S. Enterprises. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>GSTIN: <strong className="text-slate-300">{COMPANY_DATA.gstin}</strong></span>
            <span aria-hidden="true">·</span>
            <span>QUALITY · COMMITMENT · RELIABILITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
