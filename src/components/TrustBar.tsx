import React from 'react';
import { ShieldCheck, Sparkles, CreditCard, Car } from 'lucide-react';
import { trustPillars } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-600 shrink-0" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-sky-600 shrink-0" />;
      case 'Car':
        return <Car className="w-5 h-5 text-sky-600 shrink-0" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />;
    }
  };

  return (
    <section className="bg-white py-10 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-sky-50/40 border border-sky-100/70 hover:border-sky-300/80 transition-all duration-150 group"
            >
              <div className="p-2.5 rounded-lg bg-white shadow-xs border border-sky-100 group-hover:bg-sky-50 transition-colors">
                {getIcon(pillar.iconName)}
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
