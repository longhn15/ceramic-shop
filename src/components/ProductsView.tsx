import { useState, useMemo } from 'react';
import { Product, FilterState } from '../types';
import { Search, SlidersHorizontal, ArrowUpDown, RotateCcw, PhoneCall, Eye, Trophy, X, Filter } from 'lucide-react';

interface ProductsViewProps {
  products: Product[];
  initialFilters: FilterState;
  onSelectProduct: (productId: string) => void;
  onContactToBuy: (product: Product) => void;
}

export default function ProductsView({ 
  products, 
  initialFilters, 
  onSelectProduct, 
  onContactToBuy 
}: ProductsViewProps) {
  
  // Local state for our active filters
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  // Handles updating filter fields
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
    setCurrentPage(1); // Reset page on filter change
  };

  // Reset all filters to default
  const handleResetFilters = () => {
    setFilters({
      search: '',
      category: '',
      glazeType: '',
      priceRange: [0, 4000000],
      sortBy: 'default'
    });
    setCurrentPage(1);
  };

  // Check if any non-default filter is active
  const hasActiveFilters = Boolean(
    filters.search.trim() ||
    filters.category ||
    filters.glazeType ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 4000000 ||
    filters.sortBy !== 'default'
  );

  // Count active filter conditions
  const activeFiltersCount = (
    (filters.search.trim() ? 1 : 0) +
    (filters.category ? 1 : 0) +
    (filters.glazeType ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 4000000 ? 1 : 0) +
    (filters.sortBy !== 'default' ? 1 : 0)
  );

  // 1. FILTERING & SORTING LOGIC
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || 
             p.description.toLowerCase().includes(q) ||
             p.glazeLabel.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    // Glaze type filter
    if (filters.glazeType) {
      result = result.filter(p => p.glazeType === filters.glazeType);
    }

    // Price range filter
    result = result.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Sorting
    if (filters.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'new') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [products, filters]);

  // 2. PAGINATION CALCULATIONS
  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  const categories = [
    { id: '', label: 'Tất cả tác phẩm' },
    { id: 'binh-hut-loc', label: 'Bình Hút Lộc' },
    { id: 'trung-phong-thuy', label: 'Trứng Phong Thủy' },
    { id: 'lo-che', label: 'Lọ Đựng Chè' },
  ];

  const glazes = [
    { id: '', label: 'Tất cả dòng men' },
    { id: 'men-van-da', label: 'Men Vân Đá' },
    { id: 'men-mau', label: 'Men Màu' },
    { id: 'men-lam-truyen-thong', label: 'Men Lam Truyền Thống' },
  ];

  const pricePresets = [
    { id: 'all', label: 'Tất cả mức giá', value: [0, 4000000] as [number, number] },
    { id: 'under-500k', label: 'Dưới 500.000đ', value: [0, 500000] as [number, number] },
    { id: '500k-1.5m', label: '500.000đ - 1.500.000đ', value: [500000, 1500000] as [number, number] },
    { id: 'above-1.5m', label: 'Trên 1.500.000đ', value: [1500000, 4000000] as [number, number] },
  ];

  // Detect current price preset value for mobile select
  const currentPricePreset = pricePresets.find(
    p => p.value[0] === filters.priceRange[0] && p.value[1] === filters.priceRange[1]
  )?.id || 'custom';

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-16 font-sans">
      
      {/* 1. HERO TOP BAR WITH SEARCH */}
      <div className="bg-[#F3EFE9] border-b border-[#EAE3D5] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left space-y-1 w-full md:w-auto">
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#2C2520]">Danh Mục Tác Phẩm Nghệ Thuật</h1>
            <p className="text-xs text-[#8C7A6B]">Khám phá tinh tuyển các tác phẩm gốm nung tinh xảo từ làng nghề Bát Tràng.</p>
          </div>

          {/* Large Search Box */}
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              id="product-search-input"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              placeholder="Tìm kiếm bình hút lộc, trứng phong thủy, dòng men..."
              className="w-full bg-white border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] focus:ring-1 focus:ring-[#008ca3] py-3 pl-11 pr-9 rounded-xl text-sm placeholder-[#A69685] text-[#2C2520] shadow-sm transition-all"
            />
            <Search className="absolute left-4 top-3.5 w-4.5 h-4.5 text-[#8C7A6B]" />
            {filters.search && (
              <button
                onClick={() => handleFilterChange('search', '')}
                className="absolute right-3 top-3.5 text-[#8C7A6B] hover:text-[#2C2520] p-0.5"
                title="Xóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. TABLET & MOBILE COMPACT FILTER BAR (< lg) */}
      <div className="lg:hidden border-b border-[#EAE3D5] bg-white sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-2.5">
          
          {/* Horizontal Quick Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-0.5">
            {categories.map((cat) => {
              const isSelected = filters.category === cat.id;
              const count = cat.id === '' 
                ? products.length 
                : products.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleFilterChange('category', cat.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#008ca3] text-white shadow-sm'
                      : 'bg-[#FAF8F5] text-[#5C5043] border border-[#EAE3D5] hover:border-[#008ca3]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isSelected ? 'bg-white/20 text-white' : 'bg-[#EAE3D5]/60 text-[#8C7A6B]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Compact Dropdown Filters Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center">
            
            {/* Glaze Dropdown */}
            <div className="relative">
              <select
                id="mobile-filter-glaze"
                value={filters.glazeType}
                onChange={(e) => handleFilterChange('glazeType', e.target.value)}
                className="w-full appearance-none bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] text-[11px] font-medium text-[#2C2520] pl-3 pr-7 py-2 rounded-lg truncate cursor-pointer"
              >
                {glazes.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8C7A6B]">
                <Filter className="w-3 h-3" />
              </div>
            </div>

            {/* Price Preset Dropdown */}
            <div className="relative">
              <select
                id="mobile-filter-price"
                value={currentPricePreset}
                onChange={(e) => {
                  const selected = pricePresets.find(p => p.id === e.target.value);
                  if (selected) {
                    handleFilterChange('priceRange', selected.value);
                  }
                }}
                className="w-full appearance-none bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] text-[11px] font-medium text-[#2C2520] pl-3 pr-7 py-2 rounded-lg truncate cursor-pointer"
              >
                {pricePresets.map((preset) => (
                  <option key={preset.id} value={preset.id}>
                    {preset.label}
                  </option>
                ))}
                {currentPricePreset === 'custom' && (
                  <option value="custom">Tùy chỉnh khoảng giá</option>
                )}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8C7A6B]">
                <SlidersHorizontal className="w-3 h-3" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative col-span-2 sm:col-span-1">
              <select
                id="mobile-filter-sort"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full appearance-none bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] text-[11px] font-medium text-[#2C2520] pl-3 pr-7 py-2 rounded-lg truncate cursor-pointer"
              >
                <option value="default">Sắp xếp: Mặc định</option>
                <option value="price-asc">Giá: Thấp tới Cao</option>
                <option value="price-desc">Giá: Cao tới Thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
                <option value="new">Tác phẩm mới nhất</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8C7A6B]">
                <ArrowUpDown className="w-3 h-3" />
              </div>
            </div>

          </div>

          {/* Active filter reset notice if applied */}
          {hasActiveFilters && (
            <div className="flex justify-between items-center pt-1 text-xs text-[#5C5043]">
              <span className="text-[11px] text-[#8C7A6B] font-mono">
                Đang hiển thị <strong>{totalItems}</strong> tác phẩm ({activeFiltersCount} tiêu chí)
              </span>
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-bold text-[#008ca3] hover:text-[#006375] flex items-center gap-1 cursor-pointer bg-[#008ca3]/10 px-2 py-0.5 rounded-md"
              >
                <RotateCcw className="w-3 h-3" /> Xóa bộ lọc
              </button>
            </div>
          )}

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 3. DESKTOP FILTER SIDEBAR (LEFT) - HIDDEN ON MOBILE/TABLET */}
          <div className="hidden lg:block space-y-6 lg:sticky lg:top-28 h-fit bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE3D5]">
            <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-3">
              <h3 className="font-serif font-bold text-base text-[#2C2520] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#008ca3]" /> Bộ Lọc Tìm Kiếm
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-semibold text-[#008ca3] hover:text-[#006375] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Thiết lập lại
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-2 text-left">
              <span className="block text-xs font-bold uppercase font-mono tracking-wider text-[#8C7A6B]">Danh Mục</span>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    id={`filter-category-${cat.id || 'all'}`}
                    onClick={() => handleFilterChange('category', cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      filters.category === cat.id 
                        ? 'bg-[#008ca3]/15 text-[#008ca3] font-bold border-l-4 border-[#008ca3]' 
                        : 'text-[#5C5043] hover:bg-[#F3EFE9] hover:text-[#008ca3]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Glaze Filter */}
            <div className="space-y-2 text-left pt-2 border-t border-[#EAE3D5]">
              <span className="block text-xs font-bold uppercase font-mono tracking-wider text-[#8C7A6B]">Dòng Men</span>
              <div className="space-y-1.5">
                {glazes.map((g) => (
                  <button
                    key={g.id}
                    id={`filter-glaze-${g.id || 'all'}`}
                    onClick={() => handleFilterChange('glazeType', g.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      filters.glazeType === g.id 
                        ? 'bg-[#008ca3]/15 text-[#008ca3] font-bold border-l-4 border-[#008ca3]' 
                        : 'text-[#5C5043] hover:bg-[#F3EFE9] hover:text-[#008ca3]'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Preset */}
            <div className="space-y-2 text-left pt-2 border-t border-[#EAE3D5]">
              <span className="block text-xs font-bold uppercase font-mono tracking-wider text-[#8C7A6B]">Khoảng Giá</span>
              <div className="grid grid-cols-2 gap-1.5">
                {pricePresets.slice(0, 4).map((preset, idx) => {
                  const isSelected = filters.priceRange[0] === preset.value[0] && filters.priceRange[1] === preset.value[1];
                  return (
                    <button
                      key={idx}
                      onClick={() => handleFilterChange('priceRange', preset.value)}
                      className={`px-2 py-1.5 border rounded-lg text-[10px] font-semibold text-center transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-[#008ca3] border-[#008ca3] text-white' 
                          : 'border-[#EAE3D5] text-[#5C5043] hover:border-[#008ca3]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>

              {/* Precise Price Inputs */}
              <div className="flex items-center gap-1.5 pt-2">
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handleFilterChange('priceRange', [Math.max(0, parseInt(e.target.value) || 0), filters.priceRange[1]])}
                  className="w-full bg-white border border-[#EAE3D5] focus:outline-none text-[11px] px-2 py-1.5 rounded text-center text-[#2C2520]"
                  placeholder="Min"
                />
                <span className="text-[#8C7A6B] text-xs">-</span>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], Math.max(0, parseInt(e.target.value) || 0)])}
                  className="w-full bg-white border border-[#EAE3D5] focus:outline-none text-[11px] px-2 py-1.5 rounded text-center text-[#2C2520]"
                  placeholder="Max"
                />
              </div>
            </div>

          </div>

          {/* 4. PRODUCTS GRID & DESKTOP SORTBAR (RIGHT) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Desktop Top Sort / Results Bar (Hidden on Mobile as it is in dropdown bar) */}
            <div className="hidden lg:flex justify-between items-center bg-white border border-[#EAE3D5] p-4 rounded-xl">
              <span className="text-xs text-[#5C5043] font-mono">
                Tìm thấy <strong>{totalItems}</strong> tác phẩm gốm nghệ thuật
              </span>

              {/* Sort By Selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-[#8C7A6B]" />
                <span className="text-xs text-[#5C5043] shrink-0">Sắp xếp theo:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-44 bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none text-xs px-3 py-2 rounded-lg text-[#2C2520] cursor-pointer"
                >
                  <option value="default">Mặc định / Nổi bật</option>
                  <option value="price-asc">Giá: Thấp tới Cao</option>
                  <option value="price-desc">Giá: Cao tới Thấp</option>
                  <option value="rating">Đánh giá tốt nhất</option>
                  <option value="new">Tác phẩm mới nhất</option>
                </select>
              </div>
            </div>

            {/* Empty State */}
            {totalItems === 0 && (
              <div className="bg-white border border-[#EAE3D5] rounded-2xl py-20 px-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#008ca3]/10 text-[#008ca3] rounded-full flex items-center justify-center mx-auto text-2xl font-serif">
                  ?
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2C2520]">Không có tác phẩm nào phù hợp</h3>
                <p className="text-xs text-[#8C7A6B] max-w-sm mx-auto">
                  Hãy thử nới lỏng khoảng giá, chuyển sang danh mục hoặc dòng men khác, hoặc gỡ bớt từ khóa tìm kiếm.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-[#008ca3] hover:bg-[#006375] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  Xóa tất cả bộ lọc
                </button>
              </div>
            )}

            {/* Product Grid */}
            {totalItems > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((p) => {
                  const hasDiscount = p.originalPrice && p.originalPrice > p.price;
                  const discountPercent = hasDiscount && p.originalPrice
                    ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
                    : 0;

                  return (
                    <div 
                      key={p.id}
                      id={`product-card-${p.id}`}
                      className="bg-white rounded-xl overflow-hidden border border-[#EAE3D5] hover:border-[#008ca3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group relative"
                    >
                      {/* Badge display */}
                      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                        {p.isNew && (
                          <span className="bg-[#2E4A3F] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">
                            MỚI
                          </span>
                        )}
                        {p.isBestSeller && (
                          <span className="bg-[#008ca3] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-0.5">
                            <Trophy className="w-2.5 h-2.5" /> BÁN CHẠY
                          </span>
                        )}
                        {hasDiscount && (
                          <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">
                            -{discountPercent}%
                          </span>
                        )}
                      </div>

                      {/* Image Frame */}
                      <div 
                        onClick={() => onSelectProduct(p.id)}
                        className="aspect-square bg-[#FAF8F5] overflow-hidden cursor-pointer relative"
                      >
                        <img 
                          src={p.images[0]} 
                          alt={p.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer" 
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Hover Overlay Buttons */}
                        <div className="absolute inset-x-4 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProduct(p.id);
                            }}
                            className="bg-white/95 text-[#2C2520] hover:bg-[#008ca3] hover:text-white p-2.5 rounded-full shadow-lg transition-colors cursor-pointer"
                            title="Xem chi tiết"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Details Area */}
                      <div className="p-4 flex-1 flex flex-col justify-between text-left space-y-3">
                        <div className="space-y-1">
                          <span className="text-[9px] text-[#8C7A6B] uppercase font-mono tracking-wider">{p.categoryLabel}</span>
                          <h3 
                            onClick={() => onSelectProduct(p.id)}
                            className="text-sm font-sans font-semibold text-[#2C2520] hover:text-[#008ca3] transition-colors line-clamp-1 cursor-pointer"
                          >
                            {p.name}
                          </h3>
                          <div className="flex items-center gap-2 text-[10px] text-[#5C5043] font-mono">
                            <span className="bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#EAE3D5]">{p.glazeLabel}</span>
                            <span>{p.dimensions.split('x')[0]}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#FAF8F5]">
                          <div className="flex justify-between items-baseline mb-2.5">
                            <div>
                              <span className="text-sm font-sans font-semibold text-[#008ca3]">
                                {p.price.toLocaleString('vi-VN')}đ
                              </span>
                              {hasDiscount && (
                                <span className="text-[10px] text-[#8C7A6B] line-through ml-1.5 font-sans font-normal">
                                  {p.originalPrice?.toLocaleString('vi-VN')}đ
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-[#008ca3] font-semibold bg-[#008ca3]/5 px-1.5 py-0.5 rounded">
                              ★ {p.rating}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => onSelectProduct(p.id)}
                              className="text-center border border-[#EAE3D5] hover:border-[#008ca3] text-[11px] font-medium text-[#5C5043] hover:text-[#008ca3] py-2 rounded-lg transition-colors cursor-pointer"
                            >
                              Xem chi tiết
                            </button>
                            <button
                              onClick={() => onContactToBuy(p)}
                              className="bg-[#008ca3] hover:bg-[#006375] text-white text-[11px] font-medium py-2 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                            >
                              <PhoneCall className="w-3 h-3" /> Liên hệ mua
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 pt-6 border-t border-[#EAE3D5]">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 border border-[#EAE3D5] rounded-xl text-xs font-semibold text-[#5C5043] hover:border-[#008ca3] hover:text-[#008ca3] disabled:opacity-40 disabled:hover:border-[#EAE3D5] disabled:hover:text-[#5C5043] transition-all cursor-pointer"
                >
                  Trang trước
                </button>
                <div className="flex gap-1.5">
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          currentPage === pageNum 
                            ? 'bg-[#008ca3] text-white shadow-md' 
                            : 'border border-[#EAE3D5] text-[#5C5043] hover:border-[#008ca3] hover:text-[#008ca3]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className="px-4 py-2 border border-[#EAE3D5] rounded-xl text-xs font-semibold text-[#5C5043] hover:border-[#008ca3] hover:text-[#008ca3] disabled:opacity-40 disabled:hover:border-[#EAE3D5] disabled:hover:text-[#5C5043] transition-all cursor-pointer"
                >
                  Trang sau
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
