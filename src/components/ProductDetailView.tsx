import React, { useState } from 'react';
import { Product, Review, ViewType } from '../types';
import { Star, PhoneCall, MessageCircle, ArrowLeft, ShieldCheck, MapPin, Sparkles, Send, Check, ArrowUpRight, HelpCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
  onBack: () => void;
  onContactToBuy: (product: Product) => void;
  onNavigate: (view: ViewType) => void;
  onSelectProduct: (productId: string) => void;
}

export default function ProductDetailView({
  product,
  relatedProducts,
  onBack,
  onContactToBuy,
  onNavigate,
  onSelectProduct
}: ProductDetailViewProps) {
  
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'info' | 'reviews'>('info');

  // Review Form States
  const [reviews, setReviews] = useState<Review[]>(product.reviewsList);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState(false);

  // Handle Add Review
  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newReview: Review = {
      id: `r_new_${Date.now()}`,
      userName: newReviewName,
      rating: newReviewRating,
      date: new Date().toLocaleDateString('vi-VN'),
      comment: newReviewComment
    };

    setReviews(prev => [newReview, ...prev]);
    setNewReviewName('');
    setNewReviewRating(5);
    setNewReviewComment('');
    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 3000);
  };

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-16 font-sans">
      
      {/* 1. BREADCRUMBS & BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#008ca3] hover:text-[#006375] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại bộ sưu tập
          </button>
          
          <nav className="text-xs text-[#8C7A6B] font-mono">
            <span className="hover:text-[#008ca3] cursor-pointer" onClick={() => onNavigate('home')}>Trang chủ</span>
            <span className="mx-2">/</span>
            <span className="hover:text-[#008ca3] cursor-pointer" onClick={() => onNavigate('products')}>Tác phẩm</span>
            <span className="mx-2">/</span>
            <span className="text-[#2C2520] font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. MAIN LAYOUT (TWO COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-[#EAE3D5] p-6 sm:p-8 rounded-2xl shadow-sm">
          
          {/* LEFT: IMAGE GALLERY (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Image Frame */}
            <div className="aspect-square bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#EAE3D5] shadow-inner relative group">
              <img
                src={product.images[activeImageIdx]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 bg-[#FAF8F5] transition-all cursor-pointer ${
                    activeImageIdx === idx 
                      ? 'border-[#008ca3] scale-102 shadow-sm' 
                      : 'border-[#EAE3D5] hover:border-[#8C7A6B]'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS AREA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-6">
            
            {/* Product Meta */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#008ca3]/10 text-[#008ca3] text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded">
                  {product.categoryLabel.toUpperCase()}
                </span>
                <span className="bg-[#3F5E4D]/10 text-[#3F5E4D] text-[10px] font-bold font-mono tracking-wider px-2.5 py-1 rounded">
                  {product.glazeLabel.toUpperCase()}
                </span>
                <span className="bg-[#FAF8F5] border border-[#EAE3D5] text-[#8C7A6B] text-[10px] font-mono font-bold tracking-wider px-2 py-1 rounded">
                  MÃ: #{product.id.toUpperCase()}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2520] tracking-tight">
                {product.name}
              </h1>

              {/* Rating stars */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-1 text-sm font-bold text-[#2C2520] font-sans">{product.rating}</span>
                </div>
                <span className="text-[#EAE3D5]">|</span>
                <span className="text-xs text-[#8C7A6B] font-mono">{reviews.length} đánh giá thực tế</span>
                <span className="text-[#EAE3D5]">|</span>
                <span className="text-xs text-[#3F5E4D] font-mono font-semibold">Tác phẩm độc bản</span>
              </div>
            </div>

            {/* Price section */}
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EAE3D5] flex items-baseline gap-4">
              <span className="text-2xl sm:text-3xl font-sans font-semibold text-[#008ca3]">
                {product.price.toLocaleString('vi-VN')}đ
              </span>
              {hasDiscount && (
                <>
                  <span className="text-xs sm:text-sm text-[#8C7A6B] line-through">
                    {product.originalPrice?.toLocaleString('vi-VN')}đ
                  </span>
                  <span className="text-xs font-bold text-[#2E4A3F] bg-[#2E4A3F]/10 px-2.5 py-1 rounded">
                    Tiết kiệm {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 border-y border-[#EAE3D5] py-4">
              <div className="text-xs space-y-1">
                <span className="text-[#8C7A6B] block font-mono uppercase tracking-wider text-[10px]">Dòng men</span>
                <span className="font-semibold text-[#2C2520] block">{product.glazeLabel}</span>
              </div>
              <div className="text-xs space-y-1">
                <span className="text-[#8C7A6B] block font-mono uppercase tracking-wider text-[10px]">Kích thước</span>
                <span className="font-semibold text-[#2C2520] block">{product.dimensions}</span>
              </div>
              <div className="text-xs space-y-1">
                <span className="text-[#8C7A6B] block font-mono uppercase tracking-wider text-[10px]">Nhiệt độ nung</span>
                <span className="font-semibold text-[#2C2520] block">{product.firingTemp}</span>
              </div>
              <div className="text-xs space-y-1">
                <span className="text-[#8C7A6B] block font-mono uppercase tracking-wider text-[10px]">Xuất xứ</span>
                <span className="font-semibold text-[#2C2520] block flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#008ca3]" /> {product.origin.split(',')[0]}
                </span>
              </div>
            </div>

            {/* Consultation Note */}
            <div className="bg-[#008ca3]/5 rounded-xl p-3.5 border border-[#008ca3]/15 flex items-start gap-2.5 text-xs text-[#2C2520]">
              <Sparkles className="w-4 h-4 text-[#008ca3] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Tác phẩm gốm thủ công chế tác riêng biệt. Liên hệ trực tiếp với nghệ nhân Phúc Quý để được tư vấn kích thước, gửi video cận cảnh lớp men thực tế tại xưởng và xác nhận vận chuyển an toàn.
              </p>
            </div>

            {/* Direct Contact CTAs */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Primary Action: Call Hotline */}
                <a
                  id="product-detail-call-btn"
                  href={`tel:${CONTACT_CONFIG.phone}`}
                  className="h-13 bg-[#008ca3] hover:bg-[#006375] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer group"
                >
                  <PhoneCall className="w-4 h-4 text-white group-hover:animate-bounce" />
                  <div className="text-left">
                    <span className="block text-[10px] text-white/80 font-normal leading-tight">Gọi đặt hàng ngay</span>
                    <span className="block text-xs font-bold leading-tight">{CONTACT_CONFIG.phoneDisplay}</span>
                  </div>
                </a>

                {/* Secondary Action: Chat Zalo */}
                <a
                  id="product-detail-zalo-btn"
                  href={CONTACT_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-13 bg-[#0068FF] hover:bg-[#0054d1] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Chat Qua Zalo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

              {/* Tertiary Action: Open Full Consultation Modal */}
              <button
                id="product-detail-consult-modal-btn"
                onClick={() => onContactToBuy(product)}
                className="w-full py-3 border border-[#008ca3] text-[#008ca3] hover:bg-[#008ca3]/5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" /> Yêu cầu nghệ nhân gọi lại tư vấn
              </button>

              {/* Guarantees */}
              <div className="flex items-center gap-2 text-[11px] text-[#5C5043] font-mono bg-[#FAF8F5] p-2.5 rounded-lg border border-[#FAF8F5]">
                <ShieldCheck className="w-4 h-4 text-[#3F5E4D] shrink-0" />
                <span>Cam kết đóng kiện gỗ chuyên dụng • Kiểm tra tác phẩm ưng ý trước khi thanh toán.</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3. DETAILED SPECS & CUSTOMER REVIEWS TABS */}
        <div className="mt-12 bg-white border border-[#EAE3D5] rounded-2xl overflow-hidden shadow-sm text-left">
          
          {/* Tab buttons */}
          <div className="flex border-b border-[#EAE3D5] bg-[#FAF8F5]">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-4 text-xs font-bold uppercase tracking-wider font-mono border-r border-[#EAE3D5] transition-all cursor-pointer ${
                activeTab === 'info' 
                  ? 'bg-white text-[#008ca3] border-t-2 border-t-[#008ca3]' 
                  : 'text-[#8C7A6B] hover:text-[#008ca3]'
              }`}
            >
              Thông tin chi tiết & Cảm hứng
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-4 text-xs font-bold uppercase tracking-wider font-mono transition-all cursor-pointer ${
                activeTab === 'reviews' 
                  ? 'bg-white text-[#008ca3] border-t-2 border-t-[#008ca3]' 
                  : 'text-[#8C7A6B] hover:text-[#008ca3]'
              }`}
            >
              Đánh giá thực tế ({reviews.length})
            </button>
          </div>

          <div className="p-6 sm:p-8">
            
            {/* Tab Content: Info */}
            {activeTab === 'info' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-lg font-serif font-semibold text-[#2C2520] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#008ca3]" /> Thuyết Minh Tác Phẩm
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5043] leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5C5043] leading-relaxed">
                    Mỗi tác phẩm gốm được sinh ra đều là sự cộng tác tuyệt vời của tứ đại: Đất đại diện cho phôi cốt vững chãi, Thủy hòa quyện tạo sự dẻo dai tạo hình, Phong làm khô ráo định hình vóc dáng, Hỏa nung nấu thăng hoa nên lớp men sáng bóng huyền diệu. Gốm Sứ Phúc Quý mong muốn mang dòng chảy nghệ thuật thuần khiết ấy vào không gian đương đại của gia đình bạn.
                  </p>
                </div>

                {/* Specs Table */}
                <div className="md:col-span-5 bg-[#FAF8F5] border border-[#EAE3D5] p-5 rounded-xl space-y-3">
                  <h4 className="text-xs font-bold text-[#2C2520] uppercase font-mono tracking-wider border-b border-[#EAE3D5] pb-2">Thông Số Vật Lý</h4>
                  <table className="w-full text-xs text-[#5C5043]">
                    <tbody className="divide-y divide-[#EAE3D5]/50">
                      <tr>
                        <td className="py-2.5 font-medium text-[#8C7A6B] font-mono">Kích thước</td>
                        <td className="py-2.5 text-right font-semibold text-[#2C2520]">{product.dimensions}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-[#8C7A6B] font-mono">Khối lượng cốt</td>
                        <td className="py-2.5 text-right font-semibold text-[#2C2520]">{product.weight}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-[#8C7A6B] font-mono">Dòng men tráng</td>
                        <td className="py-2.5 text-right font-semibold text-[#2C2520]">{product.glazeLabel}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-[#8C7A6B] font-mono">Kỹ thuật nổi</td>
                        <td className="py-2.5 text-right font-semibold text-[#2C2520]">{product.craftTechnique.split(',')[0]}</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-[#8C7A6B] font-mono">Bảo dưỡng</td>
                        <td className="py-2.5 text-right font-semibold text-[#2C2520]">Lau bằng vải mềm ẩm, dùng được nước nóng</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab Content: Reviews & Form */}
            {activeTab === 'reviews' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Review List */}
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-sm font-bold text-[#2C2520] uppercase font-mono tracking-wider border-b border-[#EAE3D5] pb-2">
                    Các Nhận Xét Đã Nhận
                  </h3>
                  
                  {reviews.length === 0 && (
                    <p className="text-xs text-[#8C7A6B] italic py-4">Chưa có đánh giá nào cho tác phẩm này. Hãy là người đầu tiên chia sẻ cảm nhận!</p>
                  )}

                  <div className="space-y-4">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="border-b border-[#EAE3D5]/60 pb-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#EAE3D5] text-[#8C7A6B] font-sans font-bold text-xs flex items-center justify-center">
                              {rev.userName.charAt(0)}
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#2C2520] block">{rev.userName}</span>
                              <span className="text-[10px] text-[#8C7A6B] font-mono block">{rev.date}</span>
                            </div>
                          </div>

                          <div className="flex text-amber-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < rev.rating ? 'fill-amber-400' : 'text-gray-200'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-[#5C5043] leading-relaxed pl-10">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Add Review Form */}
                <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#EAE3D5] p-5 rounded-xl space-y-4">
                  <h4 className="text-xs font-bold text-[#2C2520] uppercase font-mono tracking-wider border-b border-[#EAE3D5] pb-2">Gửi Cảm Nhận Của Bạn</h4>
                  
                  {reviewSuccess && (
                    <div className="bg-[#3F5E4D]/10 border border-[#3F5E4D] text-[#3F5E4D] p-3 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Cảm ơn bạn! Đánh giá đã được xuất bản trực tuyến.
                    </div>
                  )}

                  <form onSubmit={handleAddReviewSubmit} className="space-y-3.5">
                    <div className="text-left">
                      <label className="block text-[11px] font-bold text-[#8C7A6B] uppercase font-mono mb-1">Tên của bạn *</label>
                      <input
                        type="text"
                        required
                        value={newReviewName}
                        onChange={(e) => setNewReviewName(e.target.value)}
                        placeholder="VD: Nguyễn Thúy Hằng"
                        className="w-full bg-white border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] px-3 py-2 rounded text-xs"
                      />
                    </div>

                    <div className="text-left">
                      <label className="block text-[11px] font-bold text-[#8C7A6B] uppercase font-mono mb-1">Mức độ hài lòng *</label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((starVal) => (
                          <button
                            type="button"
                            key={starVal}
                            onClick={() => setNewReviewRating(starVal)}
                            className="p-1 cursor-pointer transition-colors"
                          >
                            <Star 
                              className={`w-5 h-5 ${starVal <= newReviewRating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="text-left">
                      <label className="block text-[11px] font-bold text-[#8C7A6B] uppercase font-mono mb-1">Nhận xét chi tiết *</label>
                      <textarea
                        required
                        rows={3}
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        placeholder="Hãy chia sẻ cảm nhận về lớp men, đóng gói vận chuyển..."
                        className="w-full bg-white border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] p-3 rounded text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#008ca3] hover:bg-[#006375] text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" /> Gửi cảm nhận gốm
                    </button>
                  </form>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* 4. RECOMMENDED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 text-left">
            <h2 className="text-xl font-serif font-bold text-[#2C2520] mb-6 border-b border-[#EAE3D5] pb-3">Các tác phẩm liên quan khác</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div 
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-xl overflow-hidden border border-[#EAE3D5] hover:border-[#008ca3] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col"
                >
                  <div className="aspect-square bg-[#FAF8F5] overflow-hidden relative">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-[#8C7A6B] uppercase font-mono block mb-0.5">{p.categoryLabel}</span>
                      <h4 className="text-xs font-serif font-bold text-[#2C2520] group-hover:text-[#008ca3] transition-colors line-clamp-1">
                        {p.name}
                      </h4>
                    </div>
                    <div className="flex justify-between items-baseline pt-2 border-t border-[#FAF8F5] mt-3">
                      <span className="text-xs font-bold text-[#008ca3]">
                        {p.price.toLocaleString('vi-VN')}đ
                      </span>
                      <span className="text-[10px] text-amber-500 font-bold">★ {p.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
