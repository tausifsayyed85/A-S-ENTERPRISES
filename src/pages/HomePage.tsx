import React from 'react';
import { COMPANY_DATA, FAQ_ITEMS } from '../data/companyData';
import { PRODUCTS_DATA } from '../data/productsData';
import { SERVICES_DATA } from '../data/servicesData';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { ProductCard } from '../components/ProductCard';
import { QuoteSection } from '../components/QuoteSection';
import { BrandLogo } from '../components/BrandLogo';
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Flame, 
  Building2, 
  Layers, 
  VolumeX, 
  Radio, 
  SlidersHorizontal,
  ChevronRight,
  HelpCircle,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
  openProductDetail: (productId: string) => void;
  openQuoteModal: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentTab,
  openProductDetail,
  openQuoteModal
}) => {
  // Specialized Door Solutions spotlight subset
  const featuredDoorProducts = PRODUCTS_DATA.filter(p => 
    ['hollow-metal-steel-doors', 'fire-resistant-steel-doors', 'clean-room-doors', 'acoustic-steel-doors', 'lead-line-doors', 'automatic-sliding-gates'].includes(p.id)
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#111827] text-white overflow-hidden technical-grid border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-transparent z-10" />

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img
            src="/images/hero_industrial_facility.jpg"
            alt="Large-scale industrial engineering facility and power plant"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 relative z-20">
          <div className="max-w-3xl">
            {/* Official Brand Identity Monogram & Metadata Kicker */}
            <div className="mb-6">
              <BrandLogo variant="primary" size="lg" />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
              <span className="text-[#F00000] font-semibold">ALL TYPES INDUSTRIAL MATERIAL SUPPLIERS</span>
              <span aria-hidden="true">/</span>
              <span>Faizpur, Jalgaon</span>
              <span aria-hidden="true">/</span>
              <span>GSTIN: 27ETGPS6246K1ZZ</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight sm:leading-none text-balance">
              Industrial Solutions Built for Performance, Safety & Reliability
            </h1>

            <p className="mt-4 text-base sm:text-lg font-medium text-slate-300">
              Industrial Materials, Specialized Door Systems & Engineering Support
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              From industrial materials and specialized door systems to engineering, maintenance and project support, M/s A. S. Enterprises delivers dependable solutions for demanding industrial environments.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="px-6 py-3.5 bg-[#F00000] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 shadow-md"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors border border-slate-700"
              >
                Explore Products
              </button>

              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="px-5 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F97316]" />
                <span>Talk to Our Team: +91 {COMPANY_DATA.phone}</span>
              </a>
            </div>

            {/* Subtle Industrial Quality Badges */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2-Hour Certified Fire Doors</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acoustic STC 48 Rated Systems</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Heavy Sliding Gates up to 5000 kg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-slate-900 border-b border-slate-800 py-6 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="shrink-0">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#F97316] font-semibold block">
                Field Operations
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white font-display">
                Industrial Support Across Critical Sectors
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex items-center gap-2 sm:gap-4 text-xs font-medium text-slate-300">
              {COMPANY_DATA.workingSectors.map((sector, idx) => (
                <div 
                  key={idx} 
                  className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/60 rounded-xs flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#0F4C81] rounded-full" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0F4C81] font-semibold block mb-2 font-mono">
                  About A. S. Enterprises
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                  Built Around Quality, Reliability & Customer Support
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                M/s A. S. ENTERPRISES is a professionally managed organization engaged in supplying industrial materials and providing engineering support services across various industrial sectors.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                We are committed to delivering high-quality products, dependable services, and timely project execution. With a strong focus on customer satisfaction, we provide industrial solutions that meet modern industry standards.
              </p>

              {/* Verified Strengths List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {COMPANY_DATA.strengths.map((str, i) => (
                  <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xs">
                    <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full" />
                      {str.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                      {str.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    setCurrentTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-[#111827] hover:bg-[#0F4C81] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                >
                  Read More About Us
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Industrial Blueprint Graphic & Verification Box */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-xs relative">
              <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Company Registry Profile
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                    M/s A.S ENTERPRISES
                  </h3>
                </div>
                <BrandLogo variant="primary" size="sm" showWordmark={false} />
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-200/80">
                  <span className="text-slate-500 font-medium">Principal Activity</span>
                  <span className="text-slate-900 font-semibold text-right">Industrial Material Supply & Engineering Support</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/80">
                  <span className="text-slate-500 font-medium">GST Identification Number</span>
                  <span className="font-mono text-slate-900 font-bold">{COMPANY_DATA.gstin}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/80">
                  <span className="text-slate-500 font-medium">Headquarters Address</span>
                  <span className="text-slate-900 text-right max-w-xs">{COMPANY_DATA.address.fullAddress}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/80">
                  <span className="text-slate-500 font-medium">Direct Telephone</span>
                  <span className="font-mono text-slate-900 font-bold">+91 {COMPANY_DATA.phone}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 font-medium">Official Email</span>
                  <span className="text-slate-900 font-medium">{COMPANY_DATA.email}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-900 text-white rounded-xs">
                <span className="text-[11px] font-mono text-[#F97316] uppercase block mb-1">
                  Core Company Commitment
                </span>
                <p className="text-xs font-semibold tracking-wider font-display">
                  QUALITY • COMMITMENT • RELIABILITY
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0F4C81] font-semibold block mb-2 font-mono">
                Catalogue Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight">
                Industrial Products & Specialized Solutions
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#0F4C81] hover:text-blue-800 flex items-center gap-1.5"
            >
              Browse Complete Catalogue ({PRODUCTS_DATA.length} Products)
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Broad Industrial Products from Company Profile */}
          <div className="mb-12">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 font-bold">
              Core Industrial Supplies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Hydraulic Pumps, Cylinders & Oil Coolers',
                  desc: 'High-pressure fluid power solutions, double-acting industrial cylinders and heat exchanger cooling circuits.',
                  id: 'hydraulic-systems'
                },
                {
                  title: 'Industrial Valves',
                  desc: 'Gate, globe, check, ball, and butterfly valves engineered for steam, utility water, and process piping.',
                  id: 'industrial-valves'
                },
                {
                  title: 'Rolling Shutters',
                  desc: 'Heavy-gauge steel shutters available in manual pull-push, mechanical gear-operated, and electric motorized variants.',
                  id: 'rolling-shutters'
                },
                {
                  title: 'Weighbridges & Weighing Equipments',
                  desc: 'Heavy vehicle pit and pitless weighbridge systems with precision hermetic load cells and digital weight terminals.',
                  id: 'weighbridges-equipment'
                },
                {
                  title: 'Fire Extinguishers',
                  desc: 'Industrial-grade dry chemical powder, CO2, and foam extinguishers configured for high-hazard environments.',
                  id: 'fire-extinguishers'
                },
                {
                  title: 'Circulating Chillers',
                  desc: 'Closed-loop process fluid chillers for equipment cooling, power plant laboratory analysis, and machinery temperature control.',
                  id: 'circulating-chillers'
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200 hover:border-slate-400 transition-colors flex flex-col justify-between rounded-xs"
                >
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      Category 0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => openProductDetail(item.id)}
                      className="text-xs font-semibold text-[#0F4C81] hover:underline"
                    >
                      View Specifications
                    </button>
                    <button
                      onClick={() => openQuoteModal(item.title)}
                      className="text-xs font-semibold text-slate-700 hover:text-slate-900"
                    >
                      Enquire ›
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. SPECIALIZED DOOR SOLUTIONS */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Specialized Door & Access Solutions (Brochure Lineup)
                </h3>
                <p className="text-xs text-slate-600">
                  Engineered with 46 mm thickness, galvanized iron (GI) construction, and certified performance.
                </p>
              </div>

              <span className="text-xs font-mono text-slate-500">
                12 Door, Gate & Window Models
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDoorProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={openProductDetail}
                  onRequestQuote={openQuoteModal}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. ENGINEERING SERVICES */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F4C81] font-semibold block mb-2 font-mono">
              On-Site Execution & Maintenance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              Engineering Support & Industrial Services
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We deploy experienced technicians, certified fabricators, and heavy machinery support across industrial sectors, power generation plants, and infrastructure sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <div 
                key={service.id} 
                className="bg-slate-50 border border-slate-200 p-6 rounded-xs hover:border-slate-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#0F4C81] font-bold">
                      0{idx + 1}. SERVICE
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Industrial Scope</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {service.scope.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F97316] font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setCurrentTab('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#0F4C81] hover:underline"
                  >
                    View Service Details
                  </button>
                  <button
                    onClick={() => openQuoteModal(service.title)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900"
                  >
                    Request Support ›
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setCurrentTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-slate-900 hover:bg-[#0F4C81] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              Explore All Engineering Services
            </button>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F4C81] font-semibold block mb-2 font-mono">
              Target Operating Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              Solutions Across Critical Industrial Environments
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Industrial products and engineering support matched to the exact operational and regulatory standards of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES_DATA.slice(0, 8).map((ind) => (
              <div 
                key={ind.id} 
                className="p-5 bg-white border border-slate-200 hover:border-slate-400 transition-colors rounded-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">
                    {ind.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#0F4C81] mt-0.5">
                    {ind.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-700 block mb-1">
                    Featured Fit:
                  </span>
                  <span className="text-xs text-slate-500 font-mono line-clamp-1">
                    {ind.relevantProducts[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setCurrentTab('industries');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#0F4C81] hover:underline inline-flex items-center gap-1.5"
            >
              View all 12 industries served with product mapping
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0F4C81] font-semibold block mb-2 font-mono">
              Operational Competence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Why Choose A. S. Enterprises
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Core strengths stated in company profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DATA.strengths.map((str, index) => (
              <div 
                key={index} 
                className="p-6 bg-slate-50 border border-slate-200 rounded-xs hover:border-slate-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs rounded-xs">
                    0{index + 1}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Verified Pillar</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display">
                  {str.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {str.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MAJOR CLIENTS / ORGANIZATIONS SERVED */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block mb-2 font-mono">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Major Clients / Organizations Served
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Selected organizations served as listed in company profile
            </p>
          </div>

          {/* 6 Verified Clients Strictly from Company Profile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANY_DATA.majorClients.map((client, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-slate-800/90 border border-slate-700/80 rounded-xs flex items-center gap-4 hover:border-slate-500 transition-colors"
              >
                <div className="w-10 h-10 bg-slate-950 border border-slate-700 rounded-xs flex items-center justify-center font-mono font-bold text-[#F97316] shrink-0 text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {client}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                    Industrial / Utility Sector
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. COMPANY VISION */}
      <section className="py-20 bg-[#0B0F19] text-white border-b border-slate-800 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#F97316] font-semibold block font-mono">
            Our Vision
          </span>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white tracking-tight leading-relaxed">
            "{COMPANY_DATA.vision}"
          </blockquote>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span>QUALITY</span>
            <span aria-hidden="true">·</span>
            <span>COMMITMENT</span>
            <span aria-hidden="true">·</span>
            <span>RELIABILITY</span>
          </div>
        </div>
      </section>

      {/* 11. REQUEST A QUOTE (Interactive Conversion Block) */}
      <QuoteSection />

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0F4C81] font-semibold block mb-2 font-mono">
              Technical Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
              Frequently Asked Technical Questions
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Direct technical information grounded in catalog specifications
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <div 
                key={index} 
                className="p-5 bg-slate-50 border border-slate-200 rounded-xs"
              >
                <h3 className="text-sm font-bold text-slate-900 font-display flex items-start gap-2.5">
                  <span className="text-[#0F4C81] font-mono">Q{index + 1}.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
