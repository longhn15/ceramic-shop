export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  vietnameseName: string;
  category: 'binh-hut-loc' | 'trung-phong-thuy' | 'lo-che';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  description: string;
  glazeType: 'men-van-da' | 'men-mau' | 'men-lam-truyen-thong';
  glazeLabel: string;
  firingTemp: string;
  craftTechnique: string;
  dimensions: string;
  weight: string;
  origin: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  stock: number;
  reviewsList: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedGlaze?: string;
}

export interface Order {
  id: string; // Order Code like GOM-84321
  fullName: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  province: string;
  notes?: string;
  paymentMethod: 'cod' | 'bank_transfer';
  items: {
    productId: string;
    productName: string;
    productImage: string;
    price: number;
    quantity: number;
  }[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  status: 'pending' | 'processing' | 'shipping' | 'completed';
  createdAt: string;
}

export type ViewType = 
  | 'home' 
  | 'products' 
  | 'detail' 
  | 'about' 
  | 'contact';

export interface FilterState {
  search: string;
  category: string;
  glazeType: string;
  priceRange: [number, number];
  sortBy: string;
}
