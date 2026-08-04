import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-16 font-sans text-left">
      
      {/* 1. HERO STORY TITLE */}
      <section className="bg-[#F3EFE9] border-b border-[#EAE3D5] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#008ca3]">Hành Trình Gốm Sứ Phúc Quý</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2C2520] tracking-tight leading-tight">
            Chuyện của Đất, Lửa <br className="sm:hidden" /> & Đôi Bàn Tay Lành Nghề
          </h1>
          <p className="text-xs sm:text-sm text-[#5C5043] max-w-xl mx-auto leading-relaxed">
            Chúng tôi sinh ra giữa cái nôi làng cổ Bát Tràng, mang theo ước mơ gìn giữ dòng cốt đất phù sa và tôn vinh nét đẹp văn hóa mỹ nghệ ngàn năm nung nấu.
          </p>
        </div>
      </section>

      {/* 2. THE STORY DETAILS BRAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#008ca3] block">Về thương hiệu</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2520] leading-snug">
              Kế Thừa Tinh Hoa - Gìn Giữ Giá Trị Mỹ Nghệ Việt Nam
            </h2>
            <div className="w-12 h-1 bg-[#008ca3] rounded-full" />
            
            <p className="text-xs sm:text-sm text-[#5C5043] leading-relaxed font-semibold">
              Gốm Phúc Quý là thương hiệu gốm sứ thủ công của Công ty TNHH Gốm Sứ Phúc Quý, kế thừa truyền thống làm gốm lâu đời của làng nghề Làng Gốm Bát Tràng.
            </p>
            <p className="text-xs sm:text-sm text-[#5C5043] leading-relaxed">
              Thương hiệu được xây dựng với mục tiêu gìn giữ giá trị gốm sứ Việt Nam, kết hợp tinh hoa thủ công truyền thống với phong cách thiết kế hiện đại để mang đến những sản phẩm vừa có giá trị sử dụng, vừa có giá trị nghệ thuật.
            </p>
            <p className="text-xs sm:text-sm text-[#5C5043] leading-relaxed">
              Điểm nổi bật của Gốm Phúc Quý là sự kết hợp giữa kỹ thuật chế tác truyền thống và tính sáng tạo trong từng thiết kế. Mỗi sản phẩm đều được chăm chút từ khâu tạo hình, phủ men đến trang trí, mang nét riêng biệt và giá trị thẩm mỹ cao. Bên cạnh các sản phẩm có sẵn, thương hiệu còn nhận thiết kế gốm sứ theo yêu cầu, in logo doanh nghiệp, chế tác quà tặng và phục hồi các sản phẩm gốm sứ có giá trị.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-[#008ca3]/5 rounded-3xl filter blur-2xl" />
            <div className="relative aspect-video sm:aspect-square max-h-[440px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop&q=80" 
                alt="Pottery kiln firing ceramics" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
