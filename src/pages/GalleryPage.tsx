import React, { useState } from 'react';
import { GALLERY_DATA, GalleryItem } from '../data/galleryData';
import { QuoteSection } from '../components/QuoteSection';
import { X, ZoomIn, ArrowRight, Layers, ExternalLink } from 'lucide-react';

interface GalleryPageProps {
  openQuoteModal: (title?: string) => void;
}

const GalleryCard: React.FC<{
  item: GalleryItem;
  onClick: () => void;
}> = ({ item, onClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-200 hover:border-slate-400 rounded-xs overflow-hidden shadow-2xs group cursor-pointer transition-all duration-200 flex flex-col justify-between"
    >
      <div className="relative aspect-4/3 w-full bg-slate-900 overflow-hidden">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-400 p-4 text-center">
            <Layers className="w-8 h-8 text-slate-500 mb-2" />
            <span className="text-xs font-semibold text-slate-300">{item.title}</span>
            <span className="text-[10px] font-mono text-slate-500 mt-1">{item.category}</span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-[#111827]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-white border-l-2 border-[#F00000]">
          {item.tag}
        </div>

        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="p-2.5 bg-white text-slate-900 rounded-full shadow-lg">
            <ZoomIn className="w-5 h-5" />
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-bold text-slate-900 font-display group-hover:text-[#F00000] transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-400 text-[11px]">{item.category}</span>
          <span className="text-slate-700 font-semibold flex items-center gap-1 group-hover:text-[#F00000]">
            Inspect <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

export const GalleryPage: React.FC<GalleryPageProps> = ({ openQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [lightboxError, setLightboxError] = useState(false);

  const categories = [
    'All',
    'Door Systems',
    'Gate Systems',
    'Industrial Products',
    'Fabrication',
    'Industrial Sites'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header Banner */}
      <section className="bg-[#111827] text-white py-16 sm:py-20 border-b border-slate-800 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#F00000] font-semibold block mb-2 font-mono">
              Visual Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight">
              Industrial Installations & Engineering Field Work
            </h1>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Explore on-site technical deployments across steel doors, gate automation mechanisms, heavy truck weighbridges, and industrial valves supplied and serviced by M/s A.S ENTERPRISES.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-medium">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xs transition-colors shrink-0 ${
                  selectedCategory === category
                    ? 'bg-[#111827] text-white font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => {
                setActiveLightboxItem(item);
                setLightboxError(false);
              }}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="bg-white rounded-xs max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-[#111827] text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#F00000] tracking-wider block">
                  {activeLightboxItem.category} • {activeLightboxItem.tag}
                </span>
                <h3 className="text-base font-bold font-display text-white mt-0.5">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-xs transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div className="relative aspect-16/9 w-full bg-slate-950 rounded-xs overflow-hidden border border-slate-200">
                {!lightboxError ? (
                  <img
                    src={activeLightboxItem.image}
                    alt={activeLightboxItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain bg-slate-950"
                    onError={() => setLightboxError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center bg-slate-900">
                    <Layers className="w-12 h-12 text-slate-600 mb-2" />
                    <span className="text-sm font-semibold text-white">{activeLightboxItem.title}</span>
                    <span className="text-xs text-slate-400 mt-1">{activeLightboxItem.description}</span>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-800 font-mono">
                    Technical Scope Description
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
                    {activeLightboxItem.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const title = activeLightboxItem.title;
                    setActiveLightboxItem(null);
                    openQuoteModal(title);
                  }}
                  className="shrink-0 px-4 py-2 bg-[#F00000] hover:bg-red-700 text-white text-xs font-semibold rounded-xs shadow-xs transition-colors flex items-center gap-1.5"
                >
                  Request Technical Quotation <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Banner */}
      <QuoteSection />
    </div>
  );
};
