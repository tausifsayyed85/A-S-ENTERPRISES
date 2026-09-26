import React, { useState } from 'react';
import { ProductItem } from '../data/productsData';
import { COMPANY_DATA } from '../data/companyData';
import { TechnicalSpecTable } from './TechnicalSpecTable';
import { GateMotorTable } from './GateMotorTable';
import { X, Phone, MessageSquare, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello A. S. Enterprises, I would like to enquire about technical specifications and pricing for "${product.name}". Please assist.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 shadow-2xl rounded-xs overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#F97316] rounded-full inline-block" />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                {product.category} Specification
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-display text-white">
                {product.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-xs hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-6 relative aspect-4/3 bg-slate-900 rounded-xs overflow-hidden border border-slate-200">
              {!imageError ? (
                <img
                  src={product.image}
                  alt={`${product.name} industrial view`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-400 p-6 text-center">
                  <Shield className="w-10 h-10 text-slate-500 mb-2" />
                  <span className="text-sm font-semibold text-white">{product.name}</span>
                  <span className="text-xs text-slate-400 mt-1">{product.tagline}</span>
                </div>
              )}
              {product.fireRating && (
                <div className="absolute top-3 left-3 bg-[#0F4C81] text-white text-xs font-mono px-3 py-1 flex items-center gap-1.5 shadow-sm">
                  <Shield className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{product.fireRating}</span>
                </div>
              )}
            </div>

            <div className="md:col-span-6 space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#0F4C81] font-bold">
                {product.tagline}
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                {product.overview}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-2">
                  Key Technical Features
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {product.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons in Hero */}
              <div className="pt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    onRequestQuote(product.name);
                    onClose();
                  }}
                  className="px-4 py-2 bg-[#0F4C81] hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                >
                  Request Technical Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/919168986246?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Specs
                </a>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <TechnicalSpecTable specifications={product.specifications} />

          {/* Gate Motor Table (if automatic gate) */}
          {product.gateMotorModels && (
            <GateMotorTable 
              models={product.gateMotorModels} 
              type={product.id.includes('sliding') ? 'sliding' : 'swing'} 
            />
          )}

          {/* Applications Grid */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 font-display mb-3">
              Recommended Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {product.applications.map((app, index) => (
                <div key={index} className="p-2.5 bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0F4C81] rounded-full shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware & Accessories (if applicable) */}
          {product.hardware && product.hardware.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 font-display mb-3">
                Compatible Hardware & Accessories
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                {product.hardware.map((item, index) => (
                  <div key={index} className="p-2 bg-white border border-slate-200 text-slate-700 flex items-center gap-1.5">
                    <span className="text-[#F97316] font-bold">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vision Lite Options */}
          {product.visionLiteOptions && product.visionLiteOptions.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 font-display mb-3">
                Vision Lite Options
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {product.visionLiteOptions.map((opt, i) => (
                  <div key={i} className="p-2 bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Color Shades Swatches */}
          {product.colorShades && product.colorShades.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 font-display">
                  Available Powder Coating Colour Shades (RAL)
                </h4>
                {selectedColor && (
                  <span className="text-xs font-mono text-[#0F4C81]">Selected: {selectedColor}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.colorShades.map((shade) => (
                  <button
                    key={shade.code}
                    onClick={() => setSelectedColor(`${shade.code} - ${shade.name}`)}
                    className={`flex items-center gap-2 px-3 py-1.5 border text-xs transition-colors rounded-xs ${
                      selectedColor?.includes(shade.code) 
                        ? 'border-[#0F4C81] bg-blue-50/50 shadow-xs' 
                        : 'border-slate-200 hover:border-slate-400 bg-white'
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0" 
                      style={{ backgroundColor: shade.hex }}
                    />
                    <span className="font-mono text-slate-800">{shade.code}</span>
                    <span className="text-slate-500 text-[11px]">({shade.name})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-mono">
            Direct Support: <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="text-slate-800 font-bold hover:underline font-mono">+{COMPANY_DATA.phone}</a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-xs transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(product.name);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#111827] hover:bg-[#0F4C81] rounded-xs transition-colors"
            >
              Get Custom Quote
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
