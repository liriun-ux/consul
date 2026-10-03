import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Check, Sparkles, Shield, UserCheck, ChevronRight } from 'lucide-react';
import { treatmentsData, clinicConfig } from '../data/clinicData';
import { Treatment } from '../types';

interface ServicesDetailPageProps {
  initialSlug?: string;
  onNavigate: (route: string) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesDetailPage: React.FC<ServicesDetailPageProps> = ({
  initialSlug,
  onNavigate,
  onBookService,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialSlug && treatmentsData.some(t => t.slug === initialSlug)
      ? initialSlug
      : treatmentsData[0].slug
  );

  useEffect(() => {
    if (initialSlug && treatmentsData.some(t => t.slug === initialSlug)) {
      setSelectedSlug(initialSlug);
    }
  }, [initialSlug]);

  const currentTreatment = treatmentsData.find(t => t.slug === selectedSlug) || treatmentsData[0];

  return (
    <div className="min-h-screen bg-slate-50/40 text-left pt-6 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-sky-700 flex items-center gap-1 font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-sky-700">Tratamientos Odontológicos</span>
          <span>/</span>
          <span className="text-slate-700 font-bold truncate">{currentTreatment.name}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Especialidades Médicas & Guía del Paciente
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Catálogo Clínico de Tratamientos
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            Conoce en detalle cada procedimiento, tiempos estimados de recuperación, tecnología aplicada y opciones de financiación a medida.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-2 mb-8 no-scrollbar border-b border-slate-200">
          {treatmentsData.map((t) => {
            const isSelected = t.slug === selectedSlug;
            return (
              <button
                key={t.slug}
                onClick={() => {
                  setSelectedSlug(t.slug);
                  window.history.pushState({}, '', `/servicios/${t.slug}`);
                }}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-sky-50 border border-slate-200'
                }`}
              >
                {t.name}
              </button>
            );
          })}
        </div>

        {/* Detailed Treatment View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Spotlight Banner */}
            <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  {currentTreatment.category}
                </span>
                {currentTreatment.badge && (
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    ★ {currentTreatment.badge}
                  </span>
                )}
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentTreatment.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  {currentTreatment.fullDesc}
                </p>
              </div>

              {/* Quick specs pill bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-sky-50/50 border border-sky-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Duración estimada:</span>
                  <span className="text-slate-900 font-bold mt-0.5 block">{currentTreatment.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Frecuencia / Visitas:</span>
                  <span className="text-slate-900 font-bold mt-0.5 block">{currentTreatment.sessions}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Recuperación:</span>
                  <span className="text-emerald-700 font-bold mt-0.5 block">{currentTreatment.recovery}</span>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Beneficios Clínicos Principales
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentTreatment.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology & Materials used */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Tecnología & Materiales Utilizados
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentTreatment.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Candidates */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  ¿Para quién está indicado este tratamiento?
                </h3>
                <div className="space-y-2 text-xs text-slate-600 bg-sky-50/30 p-4 rounded-xl border border-sky-100">
                  {currentTreatment.idealFor.map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Action & Pricing Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-sky-200 p-6 shadow-md text-left space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Inversión en tu Salud
                </span>
                <div className="text-2xl font-extrabold text-sky-900 mt-1">
                  {currentTreatment.startingPrice}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Diagnóstico previo y plan de cuotas personalizadas sin intereses.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => onBookService(currentTreatment.id)}
                  className="w-full py-3.5 px-4 text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Valoración para este Tratamiento</span>
                </button>

                <a
                  href={`https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(`Hola, quisiera consultar más detalles sobre el tratamiento de ${currentTreatment.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Consultar Dudas por WhatsApp</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Shield className="w-4 h-4 text-sky-600" />
                  <span>Garantía Médica Sonrisa Serena</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Todos nuestros tratamientos incluyen revisión diagnóstica previa con cámara intraoral y radiografía digital sin coste adicional en caso de iniciar tratamiento.
                </p>
              </div>

              {/* Other treatments shortcut */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Explorar otras especialidades:
                </span>
                <div className="flex flex-col gap-1.5">
                  {treatmentsData.filter(t => t.slug !== selectedSlug).map((other) => (
                    <button
                      key={other.slug}
                      onClick={() => {
                        setSelectedSlug(other.slug);
                        window.history.pushState({}, '', `/servicios/${other.slug}`);
                      }}
                      className="text-left text-xs font-medium text-slate-700 hover:text-sky-700 flex items-center justify-between py-1 transition-colors cursor-pointer"
                    >
                      <span>{other.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
