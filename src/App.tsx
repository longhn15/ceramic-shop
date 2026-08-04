import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import ProductDetailView from './components/ProductDetailView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import ContactToBuyModal from './components/ContactToBuyModal';
import FloatingContactButtons from './components/FloatingContactButtons';

import { MOCK_PRODUCTS } from './data/products';
import { Product, ViewType, FilterState } from './types';

export default function App() {
  
  // Navigation View State
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Filter State to be shared or passed as initial values
  const [productFilters, setProductFilters] = useState<FilterState>({
    search: '',
    category: '',
    glazeType: '',
    priceRange: [0, 4000000],
    sortBy: 'default'
  });

  // Contact to buy modal state
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Sync scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentView, selectedProductId]);

  // Open Contact to Buy Modal
  const handleOpenContactModal = (product: Product) => {
    setModalProduct(product);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setModalProduct(null);
  };

  // FILTER CATEGORY FROM HOME
  const handleSelectCategoryFromHome = (categoryId: string) => {
    setProductFilters({
      search: '',
      category: categoryId,
      glazeType: '',
      priceRange: [0, 4000000],
      sortBy: 'default'
    });
    setCurrentView('products');
  };

  // PRODUCT SELECT DETAILED VIEW
  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('detail');
  };

  // Active product definition for DetailView
  const selectedProduct = MOCK_PRODUCTS.find(p => p.id === selectedProductId) || MOCK_PRODUCTS[0];
  const relatedProducts = MOCK_PRODUCTS.filter(
    p => p.category === selectedProduct.category && p.id !== selectedProduct.id
  ).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] font-sans antialiased text-[#2C2520]">
      
      {/* Dynamic Navigation Header */}
      <Header 
        currentView={currentView} 
        onNavigate={(view) => {
          setCurrentView(view);
          setSelectedProductId(null);
        }} 
      />

      {/* Main Content Area switching between Views */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView
            products={MOCK_PRODUCTS}
            onNavigate={(view) => {
              setCurrentView(view);
              setSelectedProductId(null);
            }}
            onSelectProduct={handleSelectProduct}
            onSelectCategory={handleSelectCategoryFromHome}
            onContactToBuy={handleOpenContactModal}
          />
        )}

        {currentView === 'products' && (
          <ProductsView
            products={MOCK_PRODUCTS}
            initialFilters={productFilters}
            onSelectProduct={handleSelectProduct}
            onContactToBuy={handleOpenContactModal}
          />
        )}

        {currentView === 'detail' && (
          <ProductDetailView
            product={selectedProduct}
            relatedProducts={relatedProducts}
            onBack={() => {
              setCurrentView('products');
              setSelectedProductId(null);
            }}
            onContactToBuy={handleOpenContactModal}
            onNavigate={(view) => {
              setCurrentView(view);
              setSelectedProductId(null);
            }}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'about' && (
          <AboutView />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Artisan Footer */}
      <Footer 
        onNavigate={(view) => {
          setCurrentView(view);
          setSelectedProductId(null);
        }} 
      />

      {/* Contact to Buy Modal */}
      <ContactToBuyModal 
        product={modalProduct}
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
      />

      {/* Persistent Floating Contact Actions (Hotline + Zalo) */}
      <FloatingContactButtons />

    </div>
  );
}
