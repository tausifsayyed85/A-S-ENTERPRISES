import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PRODUCTS_DATA, ProductItem } from './data/productsData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  // Handle URL hash navigation if user navigates via hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'products', 'services', 'industries', 'gallery', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductDetail = (productId: string) => {
    setSelectedProductId(productId);
  };

  const closeProductDetail = () => {
    setSelectedProductId(null);
  };

  const openQuoteModal = (productName?: string) => {
    setQuoteProduct(productName || '');
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const selectedProduct = selectedProductId 
    ? PRODUCTS_DATA.find((p) => p.id === selectedProductId) || null
    : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#111827]">
      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        openQuoteModal={openQuoteModal}
      />

      {/* Main Content View */}
      <main className="flex-1 pb-16 sm:pb-0">
        {currentTab === 'home' && (
          <HomePage
            setCurrentTab={handleTabChange}
            openProductDetail={openProductDetail}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage openQuoteModal={openQuoteModal} />
        )}

        {currentTab === 'products' && (
          <ProductsPage
            openProductDetail={openProductDetail}
            openQuoteModal={openQuoteModal}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage openQuoteModal={openQuoteModal} />
        )}

        {currentTab === 'industries' && (
          <IndustriesPage openQuoteModal={openQuoteModal} />
        )}

        {currentTab === 'gallery' && (
          <GalleryPage openQuoteModal={openQuoteModal} />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentTab={handleTabChange}
        openProductDetail={openProductDetail}
        openQuoteModal={openQuoteModal}
      />

      {/* Sticky Quick Contact on Mobile (height <15% of viewport) */}
      <MobileStickyBar openQuoteModal={openQuoteModal} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={closeProductDetail}
        onRequestQuote={openQuoteModal}
      />

      {/* Request a Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
