import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { CONTACT_CONFIG } from '../config/contact';
import { X, PhoneCall, MessageCircle, ShieldCheck, Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface ContactToBuyModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactToBuyModal({ product, isOpen, onClose }: ContactToBuyModalProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
      setPhoneNumber('');
      setCustomerNote('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  const handleRequestCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div 
      id="contact-to-buy-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm transition-all"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#EAE3D5] overflow-hidden text-left my-8 transform transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#F3EFE9] px-6 py-4 border-b border-[#EAE3D5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#008ca3] animate-pulse" />
            <h2 id="modal-headline" className="text-base sm:text-lg font-serif font-bold text-[#2C2520]">
              Tư Vấn & Đặt Mua Tác Phẩm
            </h2>
          </div>
          <button
            id="close-contact-modal"
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#5C5043] hover:text-[#2C2520] flex items-center justify-center border border-[#EAE3D5] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[calc(85vh-80px)] overflow-y-auto">
          
          {/* Selected Product Summary Card */}
          <div className="bg-white rounded-xl p-4 border border-[#EAE3D5] flex gap-4 items-center shadow-sm">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#FAF8F5] border border-[#EAE3D5] shrink-0">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#8C7A6B] block">
                {product.categoryLabel} • Mã: #{product.id.toUpperCase()}
              </span>
              <h3 className="text-sm sm:text-base font-serif font-bold text-[#2C2520] truncate">
                {product.name}
              </h3>
              <div className="text-xs text-[#5C5043] font-mono flex flex-wrap gap-x-2">
                <span>{product.glazeLabel}</span>
                <span>•</span>
                <span>{product.dimensions}</span>
              </div>
              <div className="flex items-baseline gap-2 pt-0.5">
                <span className="text-base font-semibold text-[#008ca3]">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                {hasDiscount && (
                  <span className="text-xs text-[#8C7A6B] line-through">
                    {product.originalPrice?.toLocaleString('vi-VN')}đ
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Advice Note */}
          <div className="bg-[#008ca3]/5 rounded-xl p-3.5 border border-[#008ca3]/15 flex items-start gap-3 text-xs text-[#2C2520]">
            <Sparkles className="w-4 h-4 text-[#008ca3] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Mỗi tác phẩm là <strong>độc bản thủ công</strong>. Nghệ nhân Phúc Quý luôn sẵn sàng gửi ảnh/video thực tế tại xưởng và tư vấn chi tiết về kích thước phong thủy.
            </p>
          </div>

          {/* Main Direct Contact CTAs */}
          <div className="space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8C7A6B]">
              Phương Thức Liên Hệ Trực Tiếp
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Call Hotline CTA */}
              <a
                id="modal-call-hotline-btn"
                href={`tel:${CONTACT_CONFIG.phone}`}
                className="flex items-center gap-3 bg-[#008ca3] hover:bg-[#006375] text-white p-3.5 rounded-xl transition-all shadow-md group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>
                <div className="text-left min-w-0">
                  <span className="block text-[11px] text-white/80 font-mono">Gọi Hotline Ngay</span>
                  <strong className="block text-sm sm:text-base font-bold text-white tracking-wide">
                    {CONTACT_CONFIG.phoneDisplay}
                  </strong>
                </div>
              </a>

              {/* Chat Zalo CTA */}
              <a
                id="modal-chat-zalo-btn"
                href={CONTACT_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#0068FF] hover:bg-[#0054d1] text-white p-3.5 rounded-xl transition-all shadow-md group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="block text-[11px] text-white/80 font-mono">Nhắn Tin Zalo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
                  </div>
                  <strong className="block text-sm sm:text-base font-bold text-white tracking-wide">
                    Tư Vấn Zalo 24/7
                  </strong>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Request Callback Form */}
          <div className="bg-white rounded-xl p-4 border border-[#EAE3D5] space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2C2520]">
              Hoặc để lại số điện thoại (Chúng tôi gọi lại)
            </span>

            {isSubmitted ? (
              <div className="bg-[#3F5E4D]/10 border border-[#3F5E4D]/30 text-[#3F5E4D] p-3 rounded-lg text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-[#3F5E4D] shrink-0" />
                <span>
                  Đã ghi nhận! Nghệ nhân Phúc Quý sẽ liên hệ lại với số <strong>{phoneNumber}</strong> trong ít phút.
                </span>
              </div>
            ) : (
              <form onSubmit={handleRequestCallback} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Nhập số điện thoại của bạn..."
                    className="flex-1 bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] focus:ring-1 focus:ring-[#008ca3] px-3 py-2 rounded-lg text-xs text-[#2C2520]"
                  />
                  <button
                    type="submit"
                    id="modal-request-callback-btn"
                    className="bg-[#2C2520] hover:bg-[#433932] text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0"
                  >
                    Yêu Cầu Gọi Lại
                  </button>
                </div>
                <input
                  type="text"
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="Ghi chú (Ví dụ: cần giao tại Hà Nội trước thứ 7, tư vấn màu men...)"
                  className="w-full bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] px-3 py-2 rounded-lg text-xs text-[#2C2520]"
                />
              </form>
            )}
          </div>

          {/* Guarantees */}
          <div className="flex items-center gap-2 text-[11px] text-[#5C5043] font-mono pt-1 border-t border-[#EAE3D5]">
            <ShieldCheck className="w-4 h-4 text-[#008ca3] shrink-0" />
            <span>Cam kết đóng kiện gỗ an toàn • Đổi trả đền bù 100% nếu nứt vỡ khi vận chuyển</span>
          </div>

        </div>
      </div>
    </div>
  );
}
