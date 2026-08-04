import { ViewType } from '../types';
import { Mail, Phone, MapPin, Heart, MessageCircle, Facebook } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import brandLogo from '../assets/images/logo.jpg';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2C2520] text-[#FAF8F5]/90 border-t border-[#3E342C] pt-16 pb-8 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C5B9AC]/30 bg-[#FAF8F5] flex items-center justify-center shrink-0">
                <img 
                  src={brandLogo} 
                  alt="Gốm Sứ Phúc Quý Logo" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div>
                <span className="block text-lg font-serif font-bold tracking-wider text-white">
                  {CONTACT_CONFIG.brandName}
                </span>
                <span className="block text-[10px] text-[#C5B9AC] font-mono tracking-widest uppercase">
                  {CONTACT_CONFIG.tagline}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#C5B9AC] leading-relaxed">
              Gốm Sứ Phúc Quý tự hào gìn giữ và thổi hồn vào từng thớ đất sét đỏ sông Hồng, kiến tạo nên những tác phẩm gốm mỹ nghệ truyền thống mang hơi thở đương đại cho không gian sống của bạn.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-mono mb-4 border-b border-[#3E342C] pb-2">
              Khám Phá
            </h3>
            <ul className="space-y-2.5 text-xs text-[#C5B9AC]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#008ca3] transition-colors cursor-pointer">
                  Trang chủ Gốm Sứ Phúc Quý
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#008ca3] transition-colors cursor-pointer">
                  Bộ sưu tập Tác phẩm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#008ca3] transition-colors cursor-pointer">
                  Quy trình Chế tác Thủ công
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#008ca3] transition-colors cursor-pointer">
                  Liên hệ & Tư vấn Trực tiếp
                </button>
              </li>
            </ul>
          </div>

          {/* Glaze Types */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-mono mb-4 border-b border-[#3E342C] pb-2">
              Dòng Men Nghệ Thuật
            </h3>
            <ul className="space-y-2.5 text-xs text-[#C5B9AC]">
              <li><span className="hover:text-[#008ca3] transition-colors cursor-pointer" onClick={() => onNavigate('products')}>Men Hỏa Biến Độc Bản</span></li>
              <li><span className="hover:text-[#008ca3] transition-colors cursor-pointer" onClick={() => onNavigate('products')}>Men Hoàng Thổ Chiêu Tài</span></li>
              <li><span className="hover:text-[#008ca3] transition-colors cursor-pointer" onClick={() => onNavigate('products')}>Men Ngọc Celadon Hoàng Gia</span></li>
              <li><span className="hover:text-[#008ca3] transition-colors cursor-pointer" onClick={() => onNavigate('products')}>Men Lam Khử Truyền Thống</span></li>
            </ul>
          </div>

          {/* Showroom Contacts */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase font-mono mb-4 border-b border-[#3E342C] pb-2">
              Liên Hệ Xưởng & Studio
            </h3>
            <div className="flex items-start gap-2 text-xs text-[#C5B9AC]">
              <MapPin className="w-4 h-4 text-[#008ca3] shrink-0 mt-0.5" />
              <span>
                <strong>Hà Nội:</strong> {CONTACT_CONFIG.address}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C5B9AC]">
              <Phone className="w-4 h-4 text-[#008ca3] shrink-0" />
              <a href={`tel:${CONTACT_CONFIG.phone}`} className="hover:text-white transition-colors font-bold text-white">
                {CONTACT_CONFIG.phoneDisplay} (Hotline & Zalo)
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C5B9AC]">
              <Mail className="w-4 h-4 text-[#008ca3] shrink-0" />
              <span>{CONTACT_CONFIG.email}</span>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={CONTACT_CONFIG.zaloUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0068FF] hover:bg-[#0054d1] text-white flex items-center justify-center text-xs font-bold transition-transform hover:scale-105"
                title="Zalo Gốm Sứ Phúc Quý"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={CONTACT_CONFIG.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center text-xs font-bold transition-transform hover:scale-105"
                title="Facebook Gốm Sứ Phúc Quý"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#3E342C] pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#8C7A6B]">
          <p>© 2026 GỐM SỨ PHÚC QUÝ. Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1.5 mt-2 sm:mt-0">
            Gìn giữ tinh hoa đất Việt với <Heart className="w-3.5 h-3.5 text-[#008ca3] fill-[#008ca3]" /> tại Bát Tràng
          </p>
        </div>

      </div>
    </footer>
  );
}
