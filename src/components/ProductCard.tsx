import React, { useState } from 'react';
import { ProductItem } from '../data/productsData';
import { ArrowUpRight, Shield, Layers } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onViewDetails: (productId: string) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onRequestQuote }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border border-slate-200 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between group shadow-2xs">
      <div>
        {/* Product Visual Container */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
              <span className="text-xs text-slate-500 font-mono">Loading specs...</span>
            </div>
          )}

          {!imageError ? (
            <img
              src={product.image}
              alt={`${product.name} - industrial specification by A. S. Enterprises`}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-90 group-hover:opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-4 text-center">
              <Layers className="w-8 h-8 text-slate-500 mb-2" />
              <span className="text-xs text-slate-300 font-semibold">{product.name}</span>
              <span className="text-[10px] text-slate-500 font-mono mt-1">Industrial Grade GI</span>
            </div>
          )}

          {/* Technical overlay rating (Unboxed clean text) */}
          <div className="absolute top-3 left-3 bg-[#111827]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono font-medium text-slate-200 border-l-2 border-[#F97316]">
            {product.category}
          </div>

          {product.fireRating && (
            <div className="absolute bottom-3 left-3 bg-[#0F4C81]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-white flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-[#F97316]" />
              <span>{product.fireRating}</span>
            </div>
          )}

          {product.soundRating && (
            <div className="absolute bottom-3 left-3 bg-[#0F4C81]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-white flex items-center gap-1.5">
              <span>{product.soundRating}</span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-5">
          {/* Unboxed Metadata kicker */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5 font-mono">
            <span>Engineering Standard</span>
            <span aria-hidden="true">·</span>
            <span>46mm Core</span>
          </div>

          <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-[#0F4C81] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Quick Specs */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
            {product.specifications.slice(0, 3).map((spec, i) => (
              <div key={i} className="flex justify-between items-center text-[11px]">
                <span className="text-slate-500">{spec.label}</span>
                <span className="font-mono text-slate-700 font-medium tabular-nums">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2 mt-2">
        <button
          onClick={() => onViewDetails(product.id)}
          className="w-full py-2 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1"
        >
          View Specs
          <ArrowUpRight className="w-3 h-3 text-slate-500" />
        </button>

        <button
          onClick={() => onRequestQuote(product.name)}
          className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#111827] hover:bg-[#0F4C81] transition-colors flex items-center justify-center"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
};
