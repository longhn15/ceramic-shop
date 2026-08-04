import { Product, ViewType } from '../types';
import { Sparkles, Trophy, PhoneCall, ArrowRight, ShieldCheck, HeartHandshake, Flame, Globe } from 'lucide-react';
import brandBanner from '../assets/images/phuc_quy_banner_1784188951927.jpg';

interface HomeViewProps {
  products: Product[];
  onNavigate: (view: ViewType) => void;
  onSelectProduct: (productId: string) => void;
  onSelectCategory: (category: string) => void;
  onContactToBuy: (product: Product) => void;
}

export default function HomeView({ 
  products, 
  onNavigate, 
  onSelectProduct, 
  onSelectCategory,
  onContactToBuy 
}: HomeViewProps) {
  
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  const categories = [
    { 
      id: 'binh-hut-loc', 
      name: 'Bình Hút Lộc', 
      label: 'Kiệt tác chiêu tài, vượng khí phong thủy', 
      count: 4, 
      img: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=400&auto=format&fit=crop&q=80',
      isFlagship: true 
    },
    { 
      id: 'trung-phong-thuy', 
      name: 'Trứng Phong Thủy', 
      label: 'Biểu tượng sinh sôi, khởi đầu cát tường', 
      count: 1, 
      img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&auto=format&fit=crop&q=80',
      isFlagship: false
    },
    { 
      id: 'lo-che', 
      name: 'Lọ Đựng Chè', 
      label: 'Đồ đựng danh trà sành điệu, chống ẩm', 
      count: 10, 
      img: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&auto=format&fit=crop&q=80',
      isFlagship: false
    }
  ];

  return (
    <div className="bg-[#FAF8F5] pb-16 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F3EFE9] to-[#EAE3D5] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EAE3D5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#008ca3]/10 text-[#008ca3] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Tinh Hoa Đất Sét & Men Nung
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2C2520] leading-tight tracking-tight">
              Gốm Sứ Phúc Quý<br />
              <span className="text-[#008ca3]">Sứ tinh hoa - Quà quý giá</span>
            </h1>
            <p className="text-sm sm:text-base text-[#5C5043] leading-relaxed max-w-xl">
              Từ bàn tay lành nghề của những nghệ nhân tại Bát Tràng, mỗi tác phẩm tại Gốm Sứ Phúc Quý là một kiệt tác đong đầy nhiệt huyết, đất nung qua lửa đỏ hơn 1300°C và những lớp men hỏa biến chảy mềm tự nhiên độc bản.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-2 bg-[#008ca3] text-white px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-[#006375] hover:scale-102 transition-all shadow-md cursor-pointer"
              >
                Khám Phá Bộ Sưu Tập <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 border border-[#008ca3] text-[#008ca3] px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-[#008ca3]/5 transition-colors cursor-pointer"
              >
                Xem Câu Chuyện Gốm
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E2D9CB]">
              <div>
                <span className="block text-2xl font-serif font-bold text-[#2C2520]">100%</span>
                <span className="block text-[11px] tracking-wider text-[#8C7A6B] uppercase font-mono">Thủ công tay</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#2C2520]">1300°C</span>
                <span className="block text-[11px] tracking-wider text-[#8C7A6B] uppercase font-mono">Nung nhiệt độ cao</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-[#2C2520]">Gốm sứ</span>
                <span className="block text-[11px] tracking-wider text-[#8C7A6B] uppercase font-mono">Cao cấp</span>
              </div>
            </div>
          </div>

          {/* Hero image showcase */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-[#008ca3]/5 rounded-full filter blur-3xl -z-10" />
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
              <img 
                src={brandBanner} 
                alt="Gốm Sứ Phúc Quý - Pottery Crafting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#2C2520]/90 backdrop-blur-md p-4 rounded-xl text-left border border-white/10 shadow-lg">
                <span className="text-[10px] uppercase font-mono text-[#008ca3] font-semibold tracking-widest block mb-0.5">Nghệ nhân ưu tú</span>
                <p className="text-white text-xs font-serif italic leading-relaxed">
                  "Gốm là nghệ thuật của Đất, Lửa và Tâm hồn của người thợ. Đất mềm gánh lửa đỏ mới nên vóc ngọc ngà."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#008ca3]">Dòng Mỹ Nghệ</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2520]">Khám Phá Theo Danh Mục</h2>
          <div className="w-12 h-1 bg-[#008ca3] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border ${
                cat.isFlagship 
                  ? 'border-2 border-[#008ca3] bg-[#008ca3]/5 ring-4 ring-[#008ca3]/5 hover:bg-white scale-[1.02]' 
                  : 'border-[#EAE3D5] hover:border-[#008ca3] bg-white hover:bg-white'
              }`}
            >
              {cat.isFlagship && (
                <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  Chủ Đạo
                </span>
              )}
              <div className={`w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border transition-colors ${
                cat.isFlagship ? 'border-[#008ca3] group-hover:scale-105' : 'border-[#EAE3D5] group-hover:border-[#008ca3]'
              }`}>
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-base font-bold text-[#2C2520] group-hover:text-[#008ca3] transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-[#8C7A6B] mt-1.5 leading-relaxed">{cat.label}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[11px] font-mono text-[#008ca3] font-bold group-hover:underline">
                Xem {cat.count} tác phẩm <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SPOTLIGHT: BINH HUT LOC */}
      <section className="bg-gradient-to-br from-[#1E2522] to-[#141816] text-[#FAF8F5] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#3A4540]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider border border-[#D4AF37]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> DÒNG SẢN PHẨM CHỦ ĐẠO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight tracking-tight">
              Bình Hút Tài Lộc <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
                Hội Tụ Khí Cát - Khởi Sắc Gia Uy
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Tác phẩm "Bình Hút Lộc" tại Gốm Sứ Phúc Quý được chuốt tay công phu từ đất sét dẻo mịn Sông Hồng, trải qua ngọn lửa thiêng hơn 1300°C và phủ lên mình lớp men độc bản. Với thiết kế kinh điển: <strong className="text-white font-medium">miệng loe rộng</strong> để đón rước tài lộc, <strong className="text-white font-medium">cổ thon hẹp</strong> để giữ của của không thất thoát, và <strong className="text-white font-medium">thân phình to</strong> tròn trịa để lưu giữ năng lượng hưng vượng dồi dào.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="block text-[#D4AF37] font-bold text-sm mb-1">Dáng Kinh Điển</span>
                Hồ Lô, Mai Bình, Tỏi Ống, Tỏi Loe Gầy chế tác chuẩn thước phong thủy.
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="block text-[#D4AF37] font-bold text-sm mb-1">Men Độc Bản</span>
                Men hỏa biến vàng kim, men ngọc Celadon, men lam nung khử ngọc bảo.
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="block text-[#D4AF37] font-bold text-sm mb-1">Ký Thác Ước Nguyện</span>
                Đắp nổi kỳ công "Tùng Hạc Diên Niên", vẽ vàng 24K cực kỳ sang quý.
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onSelectCategory('binh-hut-loc')}
                className="bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#1E2522] hover:from-[#F3E5AB] hover:to-[#D4AF37] px-8 py-3.5 rounded-lg text-sm font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
              >
                Trải Nghiệm Bộ Sưu Tập Bình Hút Lộc <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform hover:scale-[1.02] transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&auto=format&fit=crop&q=80" 
                alt="Bình Hút Lộc Cao Cấp" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] uppercase font-mono text-[#D4AF37] font-bold tracking-widest block mb-0.5">Tuyệt phẩm men hỏa biến</span>
                <p className="text-white text-xs font-serif font-semibold">Bình Hút Lộc Dáng Hồ Lô Hoàng Kim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="bg-[#FDFCFB] border-y border-[#EAE3D5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="text-center sm:text-left space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#008ca3]">Tuyển Chọn Tinh Tế</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2520]">Sản Phẩm Nổi Bật Độc Bản</h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#008ca3] hover:text-[#006375] transition-colors group cursor-pointer"
            >
              Xem tất cả tác phẩm <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => {
              const hasDiscount = p.originalPrice && p.originalPrice > p.price;
              const discountPercent = hasDiscount && p.originalPrice
                ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
                : 0;

              return (
                <div 
                  key={p.id}
                  id={`featured-product-card-${p.id}`}
                  className="bg-white rounded-xl overflow-hidden border border-[#EAE3D5] hover:border-[#008ca3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group relative"
                >
                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                    {p.isNew && (
                      <span className="bg-[#2E4A3F] text-white text-[10px] font-bold font-sans px-2.5 py-1 rounded shadow-sm">
                        MỚI
                      </span>
                    )}
                    {p.isBestSeller && (
                      <span className="bg-[#008ca3] text-white text-[10px] font-bold font-sans px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                        <Trophy className="w-3 h-3" /> BÁN CHẠY
                      </span>
                    )}
                    {hasDiscount && (
                      <span className="bg-red-600 text-white text-[10px] font-bold font-sans px-2.5 py-1 rounded shadow-sm">
                        GIẢM {discountPercent}%
                      </span>
                    )}
                  </div>

                  {/* Thumbnail */}
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
                  </div>

                  {/* Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between text-left space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#8C7A6B] uppercase font-mono tracking-wider">{p.categoryLabel}</span>
                      <h3 
                        onClick={() => onSelectProduct(p.id)}
                        className="text-sm font-sans font-semibold text-[#2C2520] hover:text-[#008ca3] transition-colors line-clamp-1 cursor-pointer"
                      >
                        {p.name}
                      </h3>
                      <p className="text-[11px] text-[#5C5043] font-mono leading-tight">{p.glazeLabel} • Firing {p.firingTemp}</p>
                    </div>

                    <div className="pt-2 border-t border-[#FAF8F5]">
                      <div className="flex justify-between items-baseline mb-3">
                        <div>
                          <span className="text-base font-sans font-semibold text-[#008ca3]">
                            {p.price.toLocaleString('vi-VN')}đ
                          </span>
                          {hasDiscount && (
                            <span className="text-[11px] text-[#8C7A6B] line-through ml-2 font-sans font-normal">
                              {p.originalPrice?.toLocaleString('vi-VN')}đ
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-xs text-[#008ca3] font-semibold bg-[#008ca3]/5 px-2 py-0.5 rounded">
                          ★ {p.rating}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onSelectProduct(p.id)}
                          className="w-full text-center border border-[#EAE3D5] hover:border-[#008ca3] text-xs font-medium text-[#5C5043] hover:text-[#008ca3] py-2 rounded-lg transition-colors cursor-pointer"
                        >
                          Xem chi tiết
                        </button>
                        <button
                          onClick={() => onContactToBuy(p)}
                          className="w-full bg-[#008ca3] text-white hover:bg-[#006375] text-xs font-medium py-2 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm"
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

        </div>
      </section>

      {/* 4. STORYTELLING / THE MAKING BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#2C2520] text-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            <span className="text-[11px] font-mono tracking-widest text-[#008ca3] font-bold uppercase">CÂU CHUYỆN GỐM SỨ PHÚC QUÝ</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
              Gìn giữ Đất đỏ Sông Hồng qua ngàn năm lửa đỏ
            </h2>
            <p className="text-xs sm:text-sm text-[#C5B9AC] leading-relaxed font-sans">
              Từ phù sa sông Hồng mộc mạc dẻo quánh, người thợ gốm Bát Tràng miệt mài nhào nặn, vuốt tay từng tác phẩm thô mộc. Rồi nung nấu trong nhiệt độ hơn 1200 độ C, thổi bùng lên linh hồn cho đất đá khô cằn. Mỗi tác phẩm của Gốm Sứ Phúc Quý là đại diện cho nghệ thuật mỹ nghệ truyền thống, chất chứa dòng chảy tinh hoa ngàn năm của dân tộc.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="bg-[#008ca3] hover:bg-[#006375] text-[#FAF8F5] px-6 py-3 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                Khám phá Quy trình Thổi hồn Đất <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop&q=80" 
              alt="Hands kneading potter clay" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#2C2520]/20" />
          </div>

        </div>
      </section>

      {/* 5. BRAND FEATURES / TRUST */}
      <section className="bg-[#FAF8F5] border-t border-[#EAE3D5] pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#008ca3]/10 flex items-center justify-center text-[#008ca3] shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2C2520]">Gốm Sứ Độc Bản</h4>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Lớp men hỏa biến chảy tự nhiên tạo màu sắc độc quyền cho từng sản phẩm.
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#008ca3]/10 flex items-center justify-center text-[#008ca3] shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2C2520]">Nung Nhiệt Độ Cao</h4>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Nung khử ở 1280°C - 1300°C loại bỏ hoàn toàn chì và tạp chất kim loại nặng độc hại.
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#008ca3]/10 flex items-center justify-center text-[#008ca3] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2C2520]">Bảo Hành Vỡ Hỏng</h4>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Giao hàng toàn quốc an toàn tuyệt đối, đóng kiện gỗ. Đền bù mới 100% nếu bị sứt mẻ.
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#008ca3]/10 flex items-center justify-center text-[#008ca3] shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2C2520]">Thủ Công Nghệ Nhân</h4>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Được nhào nặn hoàn toàn từ đôi tay lão luyện của các nghệ nhân làng cổ Bát Tràng.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
