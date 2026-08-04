import { useState } from 'react';
import { CONTACT_CONFIG } from '../config/contact';
import { PhoneCall, MessageCircle } from 'lucide-react';

export default function FloatingContactButtons() {
  const [hoveredButton, setHoveredButton] = useState<'phone' | 'zalo' | null>(null);

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* 1. ZALO BUTTON */}
      <div className="relative flex items-center pointer-events-auto">
        {hoveredButton === 'zalo' && (
          <div className="hidden sm:block absolute right-14 mr-2 bg-[#2C2520] text-white text-xs font-mono px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-150 border border-white/10">
            Chat Zalo tư vấn 24/7 ({CONTACT_CONFIG.phoneDisplay})
          </div>
        )}
        <a
          id="floating-zalo-btn"
          href={CONTACT_CONFIG.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('zalo')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label={`Chat Zalo với Gốm Sứ Phúc Quý qua số ${CONTACT_CONFIG.phoneDisplay}`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0068FF] hover:bg-[#0054d1] text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-pointer relative group border-2 border-white"
        >
          <span className="absolute -top-1 -right-1 bg-amber-400 text-[#2C2520] text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full uppercase shadow">
            Zalo
          </span>
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>

      {/* 2. PHONE HOTLINE BUTTON WITH PULSE */}
      <div className="relative flex items-center pointer-events-auto">
        {hoveredButton === 'phone' && (
          <div className="hidden sm:block absolute right-14 mr-2 bg-[#2C2520] text-white text-xs font-mono px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-150 border border-white/10">
            Hotline: {CONTACT_CONFIG.phoneDisplay} (Gọi ngay)
          </div>
        )}
        <a
          id="floating-phone-btn"
          href={`tel:${CONTACT_CONFIG.phone}`}
          onMouseEnter={() => setHoveredButton('phone')}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label={`Gọi hotline Gốm Sứ Phúc Quý ${CONTACT_CONFIG.phoneDisplay}`}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#008ca3] hover:bg-[#006375] text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-pointer border-2 border-white"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-[#008ca3] animate-ping opacity-30" />
          <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 animate-bounce" />
        </a>
      </div>

    </div>
  );
}
