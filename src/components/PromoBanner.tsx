import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Clock } from 'lucide-react';
import { clinicConfig } from '../data/clinicData';

interface PromoBannerProps {
  onClaimPromo: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClaimPromo }) => {
  const [visible, setVisible] = useState(true);
  const promo = clinicConfig.monthlyPromotion;

  if (!promo.enabled || !visible) return null;

  return (
    <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600 text-white shadow-xs transition-all relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white shrink-0">
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="text-xs sm:text-sm">
              <span className="font-bold uppercase tracking-wider text-sky-100 mr-2 text-[11px] bg-sky-900/30 px-2 py-0.5 rounded">
                {promo.discountHighlight}
              </span>
              <span className="font-semibold text-white">
                {promo.title}
              </span>
              <span className="hidden md:inline text-sky-100 ml-2">
                — {promo.validUntil}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClaimPromo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-900 bg-white hover:bg-sky-50 active:bg-sky-100 rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <span>Aprovechar Oferta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setVisible(false)}
              aria-label="Cerrar banner de promoción"
              className="p-1 text-sky-200 hover:text-white hover:bg-white/10 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
