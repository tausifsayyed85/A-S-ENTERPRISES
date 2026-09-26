import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { Phone, MessageSquare, Send } from 'lucide-react';

interface MobileStickyBarProps {
  openQuoteModal: (productName?: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ openQuoteModal }) => {
  const whatsappUrl = `https://wa.me/919168986246?text=${encodeURIComponent(
    "Hello A. S. Enterprises, I would like to enquire about your industrial products/services. Please share more details."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#111827] border-t border-slate-700/80 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        <a
          href={`tel:${COMPANY_DATA.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-slate-800 text-white rounded-sm active:bg-slate-700"
        >
          <Phone className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-emerald-700 text-white rounded-sm active:bg-emerald-600"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => openQuoteModal()}
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#0F4C81] text-white rounded-sm active:bg-blue-700"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Quote</span>
        </button>
      </div>
    </div>
  );
};
