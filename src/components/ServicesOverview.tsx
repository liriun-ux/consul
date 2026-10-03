import React from 'react';
import { ArrowRight, Clock, Check, Sparkles } from 'lucide-react';
import { treatmentsData } from '../data/clinicData';
import { Treatment } from '../types';

interface ServicesOverviewProps {
  onSelectService: (treatment: Treatment) => void;
  onNavigateToAll: () => void;
  onBookService: (treatmentId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectService,
  onNavigateToAll,
  onBookService,
}) => {
  return (
    <section id="servicios" className="py-16 sm:py-20 bg-slate-50/50 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Especialidades Odontológicas
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nuestros Tratamientos Odontológicos
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Combinamos experiencia clínica contrastada y tecnología mínimamente invasiva para cuidar de tu salud bucodental de forma cómoda y sin dolor.
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <button
              onClick={onNavigateToAll}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-800 group cursor-pointer"
            >
              <span>Ver catálogo completo con detalles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatmentsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-sky-100/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group text-left"
            >
              {/* Card Header & Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-sky-600">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Benefits mini list */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{item.duration}</span>
                  </div>
                  {item.benefits.slice(0, 2).map((ben, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Price and Actions */}
              <div className="px-6 pb-6 pt-2 bg-slate-50/50 border-t border-slate-100/80 flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] text-slate-500">Estimación:</span>
                  <span className="text-xs font-bold text-sky-900">
                    {item.startingPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectService(item)}
                    className="w-full py-2 px-2.5 text-xs font-semibold text-slate-700 hover:text-sky-700 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-200 rounded-lg text-center transition-colors cursor-pointer"
                  >
                    Detalles
                  </button>
                  <button
                    onClick={() => onBookService(item.id)}
                    className="w-full py-2 px-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg text-center transition-colors shadow-xs cursor-pointer"
                  >
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
