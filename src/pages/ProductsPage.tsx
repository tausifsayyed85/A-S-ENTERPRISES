import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, COLOR_PALETTE } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, Shield, Layers, Sliders, ArrowUpRight } from 'lucide-react';

interface ProductsPageProps {
  openProductDetail: (productId: string) => void;
  openQuoteModal: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  openProductDetail,
  openQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Doors', 'Gates', 'Windows', 'Industrial Products'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.applications.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
            <span>Catalogue</span>
            <span aria-hidden="true">·</span>
            <span>Technical Specifications</span>
            <span aria-hidden="true">·</span>
            <span>M/s A. S. Enterprises</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Industrial Products & Specialized Door Systems
          </h1>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Engineered hollow metal pressed steel doors, certified fire-resistant doors, acoustic doors, gate automation kits, and heavy industrial supplies manufactured to rigorous engineering standards.
          </p>
        </div>

        {/* Filters and Search Bar (Digital Catalogue UX) */}
        <div className="bg-white border border-slate-200 p-4 rounded-xs mb-8 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#111827] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or applications..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#0F4C81] outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Results Count & Notice */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-mono">
          <span>Showing {filteredProducts.length} of {PRODUCTS_DATA.length} products</span>
          <span className="hidden sm:inline">Custom sizes and frame rabbets available upon request</span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={openProductDetail}
                onRequestQuote={openQuoteModal}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 p-12 text-center rounded-xs">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 font-display">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search criteria or explore our complete catalog categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Technical Reference Footer Strip on Products Page */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Engineering Door Specs summary */}
          <div className="bg-white border border-slate-200 p-6 rounded-xs">
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-900 font-display mb-3">
              Specialized Door Technical Standards
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Standard Shutter Thickness</span>
                <span className="font-mono font-semibold text-slate-900">46 mm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Standard Shutter GI Sheet</span>
                <span className="font-mono font-semibold text-slate-900">0.80 ~ 1.2 mm GI Sheet</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Pad Plates</span>
                <span className="font-mono font-semibold text-slate-900">3 mm predrilled and tapped</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Door Frame Profiles</span>
                <span className="font-mono font-semibold text-slate-900">55x57, 80x57, 100x57, 125x57, 143x57</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Rabbet Profiles</span>
                <span className="font-mono font-semibold text-slate-900">Single Rabbet or Double Rabbet</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Surface Finish</span>
                <span className="font-mono font-semibold text-slate-900">Pure Polyester Powder Coating</span>
              </div>
            </div>
          </div>

          {/* Color shades reference */}
          <div className="bg-white border border-slate-200 p-6 rounded-xs">
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-900 font-display mb-3">
              Standard Powder Coating Palette (RAL)
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Doors, frames, and windows are available in electrostatic pure polyester powder coating in standardized industrial RAL colors for weather protection and aesthetic integration.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {COLOR_PALETTE.map((shade) => (
                <div key={shade.code} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xs">
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0" style={{ backgroundColor: shade.hex }} />
                  <div>
                    <span className="font-mono font-bold text-[11px] block">{shade.code}</span>
                    <span className="text-[10px] text-slate-500">{shade.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
