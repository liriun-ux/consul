import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { clinicCases, testimonialsData, clinicConfig } from '../data/clinicData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const CasesAndTestimonials: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = clinicCases[activeCaseIndex];

  return (
    <section id="casos" className="py-16 sm:py-24 bg-slate-50/70 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Prueba Social & Resultados Clínicos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Transformaciones Reales / Lo que dicen nuestros pacientes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Desliza el comparador para ver de cerca cómo transformamos sonrisas con precisión estética y bioseguridad.
          </p>
        </div>

        {/* Case Studies Interactive Tabs + Slider */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {clinicCases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200 hover:border-sky-200'
                }`}
              >
                {c.category}: {c.treatmentName.split('+')[0]}
              </button>
            ))}
          </div>

          <BeforeAfterSlider clinicCase={currentCase} />
        </div>

        {/* Google Reviews Testimonials Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-6 border-t border-slate-200 text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Opiniones Reales en Google Business
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Valoraciones verificadas de pacientes que confían en nuestro equipo.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-sky-100 shadow-2xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-bold text-slate-900">{clinicConfig.metrics.googleRating} de 5.0</span>
              <span className="text-slate-400 ml-1.5">({clinicConfig.metrics.reviewCount} reseñas)</span>
            </div>
          </div>
        </div>

        {/* Testimonials 4-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl border border-sky-100/90 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{test.date}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center">
                    {test.initials}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      {test.author}
                    </span>
                    <span className="text-[10px] text-sky-700 block">
                      {test.service}
                    </span>
                  </div>
                </div>
                {test.verified && (
                  <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verificado</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
