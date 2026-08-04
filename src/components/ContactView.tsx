import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Clock, PhoneCall, MessageCircle, ArrowUpRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ContactView() {
  
  // Contact Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate sending contact message
    setIsSuccess(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-16 font-sans text-left">
      
      {/* 1. HEADER HERO BANNER */}
      <section className="bg-[#F3EFE9] border-b border-[#EAE3D5] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#008ca3]">Mở Cửa Ghé Thăm & Tư Vấn</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#2C2520]">Liên Hệ Gốm Sứ Phúc Quý</h1>
          <p className="text-xs sm:text-sm text-[#8C7A6B] max-w-xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn lòng lắng nghe mọi ý kiến đóng góp, tư vấn đặt mua tác phẩm gốm độc bản, thảo luận hợp tác chế tác quà tặng doanh nghiệp hoặc tư vấn bài trí gốm phong thủy cho ngôi nhà của bạn.
          </p>
        </div>
      </section>

      {/* 2. BODY COORDINATES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: STUDIO COORDINATES (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Quick Actions Box */}
            <div className="bg-[#2C2520] text-white p-6 rounded-2xl shadow-md space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#008ca3]">Liên Hệ Đặt Hàng Trực Tiếp</span>
              <h3 className="font-serif font-bold text-lg text-white">Tư Vấn & Báo Giá Nhanh</h3>
              <p className="text-xs text-[#C5B9AC] leading-relaxed">
                Đội ngũ nghệ nhân Phúc Quý luôn túc trực hỗ trợ tư vấn hình ảnh/video thực tế tại xưởng và xác nhận đóng gói.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="contact-call-now-btn"
                  href={`tel:${CONTACT_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 bg-[#008ca3] hover:bg-[#006375] text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Gọi {CONTACT_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  id="contact-zalo-now-btn"
                  href={CONTACT_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0054d1] text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Zalo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#EAE3D5] p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#2C2520]">Hệ Thống Trưng Bày</h3>
              <p className="text-xs text-[#8C7A6B] leading-relaxed">
                Kính mời quý khách hàng trực tiếp ghé thăm showroom trưng bày và xưởng gốm nung để cảm nhận trọn vẹn từng thớ gốm mịn màng:
              </p>

              <div className="space-y-4 pt-2">
                {/* Main Branch */}
                <div className="flex gap-3 text-xs items-start">
                  <MapPin className="w-5 h-5 text-[#008ca3] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-[#2C2520] block font-serif">Xưởng Nung & Showroom Bát Tràng</strong>
                    <span className="text-[#5C5043] block">
                      {CONTACT_CONFIG.address}
                    </span>
                    <span className="text-[#8C7A6B] block font-mono text-[11px]">Hotline: {CONTACT_CONFIG.phoneDisplay}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contacts details */}
            <div className="bg-white border border-[#EAE3D5] p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-base text-[#2C2520]">Thông Tin Nhanh</h3>
              
              <div className="space-y-3 text-xs text-[#5C5043]">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#008ca3]" />
                  <a href={`tel:${CONTACT_CONFIG.phone}`} className="hover:text-[#008ca3] transition-colors font-semibold">
                    {CONTACT_CONFIG.phoneDisplay} (Hotline & Zalo)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#008ca3]" />
                  <a href={`mailto:${CONTACT_CONFIG.email}`} className="hover:text-[#008ca3] transition-colors">
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#008ca3]" />
                  <span>{CONTACT_CONFIG.workingHours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM & MAP (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Form card */}
            <div className="bg-white border border-[#EAE3D5] p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-lg text-[#2C2520] border-b border-[#EAE3D5] pb-3">
                Gửi Yêu Cầu Tư Vấn Tác Phẩm
              </h3>

              {isSuccess && (
                <div className="bg-[#3F5E4D]/10 border border-[#3F5E4D] text-[#3F5E4D] p-4 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#3F5E4D] stroke-[3]" /> Tin nhắn của bạn đã được chuyển tới nghệ nhân Gốm Sứ Phúc Quý. Chúng tôi sẽ phản hồi trong vòng ít phút.
                </div>
              )}

              <form onSubmit={handleSubmitContact} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[11px] font-bold text-[#8C7A6B] uppercase font-mono">Họ và tên của bạn *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="VD: Nguyễn Văn Trung"
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] px-3.5 py-2.5 rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="block text-[11px] font-bold text-[#8C7A6B] uppercase font-mono">Số điện thoại hoặc Email *</label>
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="VD: 0912xxxxxx hoặc email..."
                      className="w-full bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] px-3.5 py-2.5 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-[11px] font-bold text-[#8C7A6B] uppercase font-mono">Chủ đề hoặc Mã tác phẩm cần tư vấn</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="VD: Tư vấn Bình Hút Lộc men hoàng thổ, bộ ấm chén..."
                    className="w-full bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] px-3.5 py-2.5 rounded-lg text-xs"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-[11px] font-bold text-[#8C7A6B] uppercase font-mono">Nội dung chi tiết *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập câu hỏi hoặc yêu cầu tư vấn kích thước phong thủy, thời gian giao tác phẩm..."
                    className="w-full bg-[#FAF8F5] border border-[#EAE3D5] focus:outline-none focus:border-[#008ca3] p-3.5 rounded-lg text-xs"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-button"
                  className="bg-[#008ca3] hover:bg-[#006375] text-white px-6 py-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  Gửi Yêu Cầu Tư Vấn <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            </div>

            {/* Styled interactive-looking Map placeholder */}
            <div className="bg-white border border-[#EAE3D5] p-5 rounded-2xl shadow-sm space-y-3 text-left">
              <span className="block text-[10px] font-bold text-[#8C7A6B] uppercase font-mono">Định vị showroom xưởng sản xuất</span>
              <div className="relative h-48 bg-[#EAE3D5] rounded-xl overflow-hidden shadow-inner flex flex-col justify-center items-center text-center p-6 text-[#5C5043]">
                {/* Custom SVG lines representing streets */}
                <div className="absolute inset-0 opacity-15">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="10" x2="300" y2="200" stroke="#000" strokeWidth="8" />
                    <line x1="100" y1="0" x2="100" y2="400" stroke="#000" strokeWidth="4" />
                    <line x1="20" y1="100" x2="400" y2="100" stroke="#000" strokeWidth="6" />
                    <circle cx="100" cy="100" r="15" fill="#008ca3" />
                  </svg>
                </div>
                
                <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-[#EAE3D5] text-center z-10 space-y-1 shadow-md">
                  <MapPin className="w-5 h-5 text-[#008ca3] mx-auto animate-bounce" />
                  <strong className="block text-xs font-serif text-[#2C2520]">Xưởng Nung & Showroom Gốm Sứ Phúc Quý</strong>
                  <span className="block text-[10px] text-[#8C7A6B] font-mono">{CONTACT_CONFIG.address}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
