import React, { useState } from 'react';
import { Sparkles, Menu, X, Compass, Info, Phone, Search, PhoneCall } from 'lucide-react';
import { ViewType } from '../types';
import { CONTACT_CONFIG } from '../config/contact';
import brandLogo from '../assets/images/logo.jpg';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { view: ViewType; label: string; icon: React.ReactNode }[] = [
    { view: 'home', label: 'Trang chủ', icon: <Compass className="w-4 h-4" /> },
    { view: 'products', label: 'Tác phẩm', icon: <Sparkles className="w-4 h-4" /> },
    { view: 'about', label: 'Giới thiệu', icon: <Info className="w-4 h-4" /> },
    { view: 'contact', label: 'Liên hệ', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3D5] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="header-brand-logo"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#008ca3] bg-[#FAF8F5] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 shrink-0">
              <img 
                src={brandLogo} 
                alt="Gốm Sứ Phúc Quý Logo" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-serif font-bold text-[#2C2520] tracking-wide group-hover:text-[#008ca3] transition-colors">
                GỐM SỨ PHÚC QUÝ
              </span>
              <span className="block text-[10px] tracking-widest text-[#8C7A6B] uppercase font-mono">
                Sứ tinh hoa - Quà quý giá
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = currentView === item.view || (item.view === 'products' && currentView === 'detail');
              return (
                <button
                  key={item.view}
                  id={`nav-link-${item.view}`}
                  onClick={() => onNavigate(item.view)}
                  className={`flex items-center gap-1.5 px-1 py-2 text-sm font-medium transition-all relative cursor-pointer ${
                    isActive 
                      ? 'text-[#008ca3] font-semibold' 
                      : 'text-[#5C5043] hover:text-[#008ca3]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#008ca3] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Search shortcut */}
            <button
              onClick={() => {
                onNavigate('products');
              }}
              className="p-2 text-[#5C5043] hover:text-[#008ca3] transition-colors rounded-full hover:bg-[#F3EFE9] cursor-pointer"
              title="Tìm kiếm tác phẩm"
              aria-label="Tìm kiếm tác phẩm"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Hotline Call Pill */}
            <a
              id="header-hotline-btn"
              href={`tel:${CONTACT_CONFIG.phone}`}
              className="hidden sm:inline-flex items-center gap-2 bg-[#008ca3]/10 hover:bg-[#008ca3] text-[#008ca3] hover:text-white px-4 py-2 rounded-full text-xs font-mono font-bold transition-all border border-[#008ca3]/30 shadow-xs cursor-pointer group"
            >
              <PhoneCall className="w-3.5 h-3.5 group-hover:animate-bounce" />
              <span>{CONTACT_CONFIG.phoneDisplay}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#5C5043] hover:text-[#008ca3] hover:bg-[#F3EFE9] rounded-lg transition-colors cursor-pointer"
              aria-label="Mở menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#EAE3D5] px-4 py-4 space-y-3 shadow-lg animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentView === item.view || (item.view === 'products' && currentView === 'detail');
              return (
                <button
                  key={item.view}
                  onClick={() => {
                    onNavigate(item.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#008ca3] text-white shadow-md' 
                      : 'text-[#5C5043] hover:bg-[#F3EFE9] hover:text-[#008ca3]'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Quick contact buttons on mobile drawer */}
          <div className="pt-3 border-t border-[#EAE3D5] grid grid-cols-2 gap-2">
            <a
              href={`tel:${CONTACT_CONFIG.phone}`}
              className="flex items-center justify-center gap-1.5 bg-[#008ca3] text-white py-2.5 px-3 rounded-xl text-xs font-mono font-bold shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Gọi Hotline
            </a>
            <a
              href={CONTACT_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#0068FF] text-white py-2.5 px-3 rounded-xl text-xs font-mono font-bold shadow-sm"
            >
              Chat Zalo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

