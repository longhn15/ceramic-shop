import { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  // BINH HUT LOC (Flagships)
  {
    id: 'p1',
    name: 'Bình Hút Lộc Dáng Hồ Lô Men Vân Đá Hoàng Kim',
    vietnameseName: 'Bình Hút Lộc Dáng Hồ Lô Men Vân Đá Hoàng Kim',
    category: 'binh-hut-loc',
    categoryLabel: 'Bình Hút Lộc',
    price: 1850000,
    originalPrice: 2200000,
    rating: 4.9,
    reviewsCount: 48,
    images: [
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Bình hút tài lộc dáng Hồ Lô đong đầy may mắn, trường thọ và vượng khí cát tường. Thân bình có thắt eo tinh tế phân chia hai bầu âm dương hài hòa, giúp thu hút tài khí và tích tụ sinh khí cát tường bền vững cho gia chủ. Lớp men vân đá sắc vàng kim kết hợp ngọc thạch nung ở 1300°C tạo ra lớp vân đá chảy mềm óng ánh tuyệt mỹ như vân thạch thiên nhiên.',
    glazeType: 'men-van-da',
    glazeLabel: 'Men Vân Đá',
    firingTemp: '1280°C - 1300°C',
    craftTechnique: 'Vuốt tay thủ công tinh xảo trên bàn xoay gỗ cổ truyền',
    dimensions: 'Cao 32cm x Đường kính bụng 18cm x Miệng bình 5cm',
    weight: '2.5 kg',
    origin: 'Xưởng gốm nghệ thuật Gốm Sứ Phúc Quý, Bát Tràng',
    isFeatured: true,
    isBestSeller: true,
    isNew: true,
    stock: 8,
    reviewsList: [
      {
        id: 'r1_1',
        userName: 'Nguyễn Tiến Đạt',
        rating: 5,
        date: '15/06/2026',
        comment: 'Bình hồ lô men vân đá này quá xuất sắc. Vân đá chảy lấp lánh như vàng ròng hòa quyện với ngọc lam sâu thẳm. Đặt ở ban thờ thần tài trông sang trọng và uy nghiêm hẳn lên.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
      },
      {
        id: 'r1_2',
        userName: 'Vũ Thị Minh',
        rating: 5,
        date: '02/06/2026',
        comment: 'Dáng hồ lô tròn đều cân đối, cổ bình thon hẹp đúng chuẩn hút lộc phong thủy. Shop đóng gói bọc xốp gỗ cực kỳ chuyên nghiệp, vận chuyển an toàn tuyệt đối.'
      }
    ]
  },
  {
    id: 'p2',
    name: 'Mai Bình Tích Lộc Đắp Nổi Tùng Hạc Diên Niên Men Vân Đá',
    vietnameseName: 'Mai Bình Tích Lộc Đắp Nổi Tùng Hạc Diên Niên Men Vân Đá',
    category: 'binh-hut-loc',
    categoryLabel: 'Bình Hút Lộc',
    price: 2450000,
    originalPrice: 2900000,
    rating: 4.8,
    reviewsCount: 36,
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Mai bình tích lộc với dáng đứng kiêu sa, thon thả thuôn dài từ miệng nhỏ lượn dần xuống chân thon. Họa tiết "Tùng Hạc Diên Niên" được đắp nổi thủ công 100% cực kỳ tinh xảo bởi các nghệ nhân giàu kinh nghiệm, đại diện cho sự trường thọ, thanh cao và khí chất kiên cường. Lớp men vân đá rạn vân gỗ trứ danh phủ bóng mang đậm giá trị văn hóa và chiều sâu di sản mỹ nghệ Việt Nam.',
    glazeType: 'men-van-da',
    glazeLabel: 'Men Vân Đá',
    firingTemp: '1200°C',
    craftTechnique: 'Tạo hình cốt sành nén, vẽ tay phối đắp nổi nổi, nung củi truyền thống',
    dimensions: 'Cao 38cm x Đường kính bụng 20cm',
    weight: '3.2 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    isFeatured: true,
    stock: 5,
    reviewsList: [
      {
        id: 'r2_1',
        userName: 'Lê Thanh Bình',
        rating: 5,
        date: '20/05/2026',
        comment: 'Họa tiết đắp nổi rất có hồn, từng cánh chim hạc, tán lá tùng đều rõ nét và có chiều sâu 3D. Men vân đá xịn sờ nhám nhẹ tay, cổ kính quý phái.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'p3',
    name: 'Bình Hút Lộc Dáng Tỏi Ống Vẽ Vàng Men Lam Truyền Thống',
    vietnameseName: 'Bình Hút Lộc Dáng Tỏi Ống Vẽ Vàng Men Lam Truyền Thống',
    category: 'binh-hut-loc',
    categoryLabel: 'Bình Hút Lộc',
    price: 3500000,
    rating: 5.0,
    reviewsCount: 29,
    images: [
      'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Tác phẩm tỏi ống tích lộc cực kỳ cao cấp với cổ cao thon gọn thẳng tắp, thân tròn đầy vững chãi giúp đón nhận cát khí và gìn giữ tài lộc vẹn toàn cho gia chủ. Họa tiết sơn thủy hữu tình vẽ thủ công bằng chất men lam truyền thống sâu thẳm, sau đó được vẽ viền thêm vàng 24K sang trọng trên bề mặt rồi nung lần hai để tạo độ sáng lóng lánh vĩnh cửu.',
    glazeType: 'men-lam-truyen-thong',
    glazeLabel: 'Men Lam Truyền Thống',
    firingTemp: '1300°C (Nung khử)',
    craftTechnique: 'Vuốt tay cốt sành, vẽ oxit coban lam truyền thống sâu, nung lửa khử oxy tuyệt đối',
    dimensions: 'Cao 45cm x Đường kính bụng 22cm',
    weight: '4.5 kg',
    origin: 'Xưởng gốm nghệ thuật Gốm Sứ Phúc Quý, Bát Tràng',
    isFeatured: true,
    isBestSeller: true,
    stock: 3,
    reviewsList: [
      {
        id: 'r3_1',
        userName: 'Trần Khắc Tiệp',
        rating: 5,
        date: '28/05/2026',
        comment: 'Đẹp đến từng chi tiết! Men lam truyền thống có màu xanh ngọc sâu thẳm, nét vẽ vàng 24k sáng bóng lóng lánh phản chiếu ánh sáng cực kỳ quý phái.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'p4',
    name: 'Bình Hút Lộc Dáng Tỏi Loe Gầy Men Màu Celadon',
    vietnameseName: 'Bình Hút Lộc Dáng Tỏi Loe Gầy Men Màu Celadon',
    category: 'binh-hut-loc',
    categoryLabel: 'Bình Hút Lộc',
    price: 1250000,
    originalPrice: 1500000,
    rating: 4.7,
    reviewsCount: 18,
    images: [
      'https://images.unsplash.com/photo-1603178455924-ef33372953bb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576016770956-debb63d900ae?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Chiếc bình hút lộc dáng tỏi loe gầy thanh nhã với thiết kế cổ cao thanh thoát, loe nhẹ thanh tao ở miệng bình. Sắc men màu Celadon bóng mướt mượt mà như ngọc thạch thiên nhiên, mang lại chiều sâu nghệ thuật cổ điển nhã nhặn. Rất thích hợp để trưng bày tại phòng khách, phòng trà làm điểm nhấn tĩnh lặng, an yên.',
    glazeType: 'men-mau',
    glazeLabel: 'Men Màu',
    firingTemp: '1260°C',
    craftTechnique: 'Vuốt tay tạo hình mỏng đều, tráng men màu Celadon dày nung hỏa lò',
    dimensions: 'Cao 35cm x Đường kính bụng 15cm',
    weight: '1.8 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    isNew: true,
    stock: 12,
    reviewsList: [
      {
        id: 'r4_1',
        userName: 'Phạm Thị Thùy',
        rating: 5,
        date: '10/05/2026',
        comment: 'Màu sắc thanh tao lịch sự, men màu mịn như ngọc không một vết gợn dơ. Rất thích hợp để bày trí trong nhà phong cách tối giản Bắc Âu kết hợp Á Đông.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
      }
    ]
  },

  // TRUNG PHONG THUY
  {
    id: 'p5',
    name: 'Trứng Phong Thủy Chiêu Tài Men Vân Đá Ngọc Bích',
    vietnameseName: 'Trứng Phong Thủy Chiêu Tài Men Vân Đá Ngọc Bích',
    category: 'trung-phong-thuy',
    categoryLabel: 'Trứng Phong Thủy',
    price: 850000,
    originalPrice: 1100000,
    rating: 4.8,
    reviewsCount: 22,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Trứng phong thủy (Trứng tụ tài lộc) với thiết kế dáng bầu tròn hoàn hảo không góc chết, tượng trưng cho sự sinh sôi nảy nở, khởi đầu mới viên mãn hanh thông và thu hút may mắn ngập tràn. Màu men vân đá chảy đa sắc từ xanh ngọc thạch lam thẳm sang sắc nâu vàng hổ phách, nung nấu công phu tạo nên tuyệt tác vân thạch tự nhiên tuyệt vời.',
    glazeType: 'men-van-da',
    glazeLabel: 'Men Vân Đá',
    firingTemp: '1280°C',
    craftTechnique: 'Điêu khắc tay định dáng tròn đều, phủ lớp men vân đá chảy loang',
    dimensions: 'Cao 25cm x Đường kính lớn 18cm',
    weight: '2.0 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    isNew: true,
    stock: 7,
    reviewsList: [
      {
        id: 'r5_1',
        userName: 'Đỗ Hữu Hùng',
        rating: 5,
        date: '04/06/2026',
        comment: 'Trứng phong thủy cực kỳ tròn trịa, nước men vân đá xanh thẳm bóng loáng rực rỡ dưới đèn hắt phòng khách. Đáng tiền mua trang trí.'
      }
    ]
  },

  // LO CHE
  {
    id: 'p6',
    name: 'Lọ Đựng Chè Dáng Chum Men Màu Ngọc Lam',
    vietnameseName: 'Lọ Đựng Chè Dáng Chum Men Màu Ngọc Lam',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 250000,
    rating: 4.9,
    reviewsCount: 33,
    images: [
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Lọ đựng trà dáng chum tròn dân dã cổ truyền, thiết kế nắp đậy vòng silicon khít chặt giúp chống ẩm, chống bay hương trà tuyệt vời để bảo lưu hương vị trà thượng hạng trọn vẹn nhất. Nước men màu ngọc lam óng ánh sang trọng.',
    glazeType: 'men-mau',
    glazeLabel: 'Men Màu',
    firingTemp: '1250°C',
    craftTechnique: 'Tạo hình chum nén khuôn dẻo, phủ phối men màu ngọc lam hỏa lò',
    dimensions: 'Cao 14cm x Đường kính bụng 10cm. Sức chứa 150g trà',
    weight: '0.6 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    isBestSeller: true,
    stock: 25,
    reviewsList: [
      {
        id: 'r6_1',
        userName: 'Lâm Văn Hải',
        rating: 5,
        date: '12/05/2026',
        comment: 'Nắp đậy khít, đựng trà khô không hề lo ẩm mốc. Màu sắc men màu rất hợp bộ với bàn trà gỗ óc chó của nhà tôi.',
        avatar: 'https://images.unsplash.com/photo-1517256064527-09c53b2d0ec6?w=100&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 'p7',
    name: 'Lọ Đựng Chè Dáng Bí Thon Khắc Hoa Sen Men Màu Thổ Cát',
    vietnameseName: 'Lọ Đựng Chè Dáng Bí Thon Khắc Hoa Sen Men Màu Thổ Cát',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 220000,
    rating: 4.6,
    reviewsCount: 14,
    images: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Lọ đựng trà dáng quả bí thon cao mềm mại, thanh lịch, đắp vẽ hoa sen mộc mạc khắc chìm nổi sống động trên phôi gốm mộc phủ một lớp men màu nâu đất sét cổ truyền. Mang đậm triết lý thiền tịnh tĩnh tâm thanh khiết.',
    glazeType: 'men-mau',
    glazeLabel: 'Men Màu',
    firingTemp: '1200°C',
    craftTechnique: 'Khắc tỉa tay chìm nổi cánh sen trên phôi đất sét, phủ men màu nâu đất nhẹ rồi nung',
    dimensions: 'Cao 16cm x Đường kính 9cm. Sức chứa 120g trà',
    weight: '0.5 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    stock: 15,
    reviewsList: []
  },
  {
    id: 'p8',
    name: 'Lọ Đựng Chè Dáng Bí Béo Men Màu Celadon',
    vietnameseName: 'Lọ Đựng Chè Dáng Bí Béo Men Màu Celadon',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 240000,
    rating: 4.8,
    reviewsCount: 20,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Thiết kế dáng quả bí béo lùn đầy đặn ngộ nghĩnh, tượng trưng cho sự trọn vẹn sung túc và viên mãn. Phủ lớp men màu Celadon xanh bích thanh mát mịn màng như tơ lụa, cực kỳ dễ lau chùi, nắp kín bọc vải bảo vệ hương trà thơm tho.',
    glazeType: 'men-mau',
    glazeLabel: 'Men Màu',
    firingTemp: '1250°C',
    craftTechnique: 'Tạo hình dập ép dẻo, chuốt mặt trong bằng tay, tráng men màu bóng',
    dimensions: 'Cao 11cm x Đường kính bụng 12cm. Sức chứa 180g trà',
    weight: '0.5 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    stock: 30,
    reviewsList: [
      {
        id: 'r8_1',
        userName: 'Trần Minh Hòa',
        rating: 5,
        date: '18/04/2026',
        comment: 'Kiểu dáng bí lùn mập mạp trông dễ thương ghê. Nước men màu sáng mịn lắm, đặt chung bộ tách Celadon cực đồng điệu luôn!'
      }
    ]
  },
  {
    id: 'p9',
    name: 'Lọ Đựng Chè Dáng Bí Có Chân Men Vân Đá Cổ',
    vietnameseName: 'Lọ Đựng Chè Dáng Bí Có Chân Men Vân Đá Cổ',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 290000,
    originalPrice: 350000,
    rating: 4.7,
    reviewsCount: 15,
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Kiệt tác lọ chè dáng quả bí độc đáo được nâng đỡ bởi 3 chân quỳ đắp nổi tạo dáng vẻ uy nghiêm hoài cổ phong kiến. Sắc men vân đá cổ kính trứ danh Bát Tràng kết hợp vẽ chìm phong cảnh sơn thủy hữu tình mang đậm bản sắc Á Đông mộc mạc.',
    glazeType: 'men-van-da',
    glazeLabel: 'Men Vân Đá',
    firingTemp: '1220°C',
    craftTechnique: 'Tạo chân bằng tay bồi cốt, rạn phủ men vân đá ngâm mực tàu trầm tích',
    dimensions: 'Cao 15cm x Đường kính 11cm. Sức chứa 160g trà',
    weight: '0.7 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    isNew: true,
    stock: 10,
    reviewsList: []
  },
  {
    id: 'p10',
    name: 'Lọ Đựng Chè Dáng Chóe Có Chân Vẽ Trúc Lâm Men Lam Truyền Thống',
    vietnameseName: 'Lọ Đựng Chè Dáng Chóe Có Chân Vẽ Trúc Lâm Men Lam Truyền Thống',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 350000,
    rating: 4.9,
    reviewsCount: 11,
    images: [
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Sự kết hợp tinh túy giữa dáng chóe hoàng cung quý tộc thu nhỏ có chân đế vững chãi. Họa tiết "Trúc Lâm Quân Tử" đại diện cho khí chất thanh khiết, kiên định được họa sĩ vẽ tay tỉ mỉ đến từng chi tiết nhỏ bằng men lam truyền thống cổ truyền.',
    glazeType: 'men-lam-truyen-thong',
    glazeLabel: 'Men Lam Truyền Thống',
    firingTemp: '1280°C',
    craftTechnique: 'Vuốt tay cốt sành mỏng, nghệ nhân vẽ tay ô-xit coban lam dưới men lam truyền thống sâu thẳm',
    dimensions: 'Cao 18cm x Đường kính 10cm. Sức chứa 200g trà',
    weight: '0.8 kg',
    origin: 'Xưởng gốm nghệ thuật Gốm Sứ Phúc Quý, Bát Tràng',
    stock: 6,
    reviewsList: [
      {
        id: 'r10_1',
        userName: 'Bùi Triệu Vỹ',
        rating: 5,
        date: '22/05/2026',
        comment: 'Hàng chất lượng, cầm nặng tay, nét vẽ cây trúc mọc thẳng thanh thoát rất sang mắt, đúng cốt sành men lam truyền thống Bát Tràng.'
      }
    ]
  },
  {
    id: 'p11',
    name: 'Lọ Đựng Chè Dáng Chóe Cổ Vẽ Chim Hoa Phú Quý Men Lam Truyền Thống',
    vietnameseName: 'Lọ Đựng Chè Dáng Chóe Cổ Vẽ Chim Hoa Phú Quý Men Lam Truyền Thống',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 260000,
    rating: 4.8,
    reviewsCount: 16,
    images: [
      'https://images.unsplash.com/photo-1576016770956-debb63d900ae?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Dáng chóe thờ cúng vượng khí cát tường được chế tác thu nhỏ để làm khay trà đựng chè thêm tao nhã. Họa tiết chim uyên ương nhảy nhót cành hoa vẽ tay sinh động bằng chất men lam truyền thống sâu lắng, nắp có núm cầm tiện lợi tháo lắp dễ dàng.',
    glazeType: 'men-lam-truyen-thong',
    glazeLabel: 'Men Lam Truyền Thống',
    firingTemp: '1250°C',
    craftTechnique: 'Tạo hình khuôn xoay, vẽ chim hoa dưới lớp men lam truyền thống sâu lắng',
    dimensions: 'Cao 13cm x Đường kính 9.5cm. Sức chứa 150g trà',
    weight: '0.5 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    stock: 14,
    reviewsList: []
  },
  {
    id: 'p12',
    name: 'Lọ Đựng Chè Dáng Trụ Cao Men Màu Thổ Hoàng',
    vietnameseName: 'Lọ Đựng Chè Dáng Trụ Cao Men Màu Thổ Hoàng',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 210000,
    rating: 4.5,
    reviewsCount: 9,
    images: [
      'https://images.unsplash.com/photo-1535401991746-da3d9055713e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Thiết kế dáng trụ đứng cao vuông vức, giúp tiết kiệm diện tích tối đa trên khay bày trà gỗ chật hẹp. Tông men màu Thổ Hoàng mang hơi thở trầm ấm mộc mạc của đất vàng sông Hồng phong rêu cổ kính.',
    glazeType: 'men-mau',
    glazeLabel: 'Men Màu',
    firingTemp: '1260°C',
    craftTechnique: 'Nung nhiệt độ cao men màu Thổ Hoàng ngẫu hỏa lò nung',
    dimensions: 'Cao 15cm x Đường kính 7.5cm. Sức chứa 130g trà',
    weight: '0.45 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    stock: 20,
    reviewsList: []
  },
  {
    id: 'p13',
    name: 'Lọ Đựng Chè Dáng Trụ Thấp Vẽ Hoa Đào Men Lam Truyền Thống',
    vietnameseName: 'Lọ Đựng Chè Dáng Trụ Thấp Vẽ Hoa Đào Men Lam Truyền Thống',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 190000,
    rating: 4.7,
    reviewsCount: 13,
    images: [
      'https://images.unsplash.com/photo-1517256064527-09c53b2d0ec6?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Lọ đựng chè dáng trụ thấp tròn tròn lùn lùn rất đáng yêu, họa tiết cành hoa đào đón xuân may mắn được vẽ tay phác thảo nhẹ nhàng bằng sắc men lam truyền thống cổ kính. Là món quà nhỏ xinh tặng bạn trà dịp Tết.',
    glazeType: 'men-lam-truyen-thong',
    glazeLabel: 'Men Lam Truyền Thống',
    firingTemp: '1220°C',
    craftTechnique: 'Tạo hình quay li tâm, vẽ tay hoa đào bằng sắc men lam truyền thống',
    dimensions: 'Cao 10cm x Đường kính 8.5cm. Sức chứa 100g trà',
    weight: '0.4 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    stock: 22,
    reviewsList: []
  },
  {
    id: 'p14',
    name: 'Lọ Đựng Chè Quả Hồng Bẹt Men Màu Quả Chín',
    vietnameseName: 'Lọ Đựng Chè Quả Hồng Bẹt Men Màu Quả Chín',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 280000,
    originalPrice: 320000,
    rating: 4.9,
    reviewsCount: 25,
    images: [
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Thiết kế tinh xảo mô phỏng quả hồng bẹt chín mọng, mang ý nghĩa chúc cho vạn sự như ý, cát tường hỷ sự liên miên. Men màu loang sắc hồng đỏ và cam rực rỡ, chân thực đẹp như tác phẩm nghệ thuật trưng bày.',
    glazeType: 'men-mau',
    glazeLabel: 'Men Màu',
    firingTemp: '1280°C',
    craftTechnique: 'Tạo hình dập nổi tạo khía múi quả hồng bẹt thủ công, tráng men màu rực rỡ',
    dimensions: 'Cao 9.5cm x Đường kính 12cm. Sức chứa 140g trà',
    weight: '0.55 kg',
    origin: 'Xưởng gốm nghệ thuật Gốm Sứ Phúc Quý, Bát Tràng',
    isNew: true,
    stock: 9,
    reviewsList: [
      {
        id: 'r14_1',
        userName: 'Nguyễn Hoài Thương',
        rating: 5,
        date: '02/06/2026',
        comment: 'Dáng quả hồng này cưng dã man luôn á, khía múi tròn đều nhìn giống y như thật. Màu men màu rực rỡ cam đỏ bóng cực kỳ nổi bật góc phòng trà nhà tôi!'
      }
    ]
  },
  {
    id: 'p15',
    name: 'Lọ Đựng Chè Quả Hồng Nhỏ Men Màu Đất Sét',
    vietnameseName: 'Lọ Đựng Chè Quả Hồng Nhỏ Men Màu Đất Sét',
    category: 'lo-che',
    categoryLabel: 'Lọ Chè',
    price: 150000,
    rating: 4.7,
    reviewsCount: 18,
    images: [
      'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Lọ đựng chè dáng quả hồng nhỏ mộc mạc nguyên sơ. Chất gốm phủ men màu đất nung xốp mịn hút ẩm không khí cực tốt, bảo quản cho những lá trà khô luôn giòn xốp ráo nước mà không cần màng đậy cao su nhân tạo. Thích hợp cho người thưởng trà vị nguyên bản mộc.',
    glazeType: 'men-mau',
    glazeLabel: 'Men Màu',
    firingTemp: '1200°C',
    craftTechnique: 'Điêu khắc gọt tay thủ công tạo múi phôi quả hồng đất nung, phủ men màu đất nhẹ',
    dimensions: 'Cao 8.5cm x Đường kính 9.5cm. Sức chứa 80g trà',
    weight: '0.4 kg',
    origin: 'Xưởng gốm Gốm Sứ Phúc Quý, Bát Tràng',
    stock: 40,
    reviewsList: []
  }
];

export const PROMO_CODES: Record<string, number> = {
  'PHUCQUY': 0.1, // 10% off
  'CRAFT2026': 0.2, // 20% off
  'MENNGOC': 50000, // Direct 50,000 VND off
};
