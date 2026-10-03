import React from 'react';
import { Calendar, MapPin, Star, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { clinicConfig, doctorData } from '../data/clinicData';

interface HeroProps {
  onNavigate: (route: string) => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenWhatsApp }) => {
  return (
    <section id="inicio" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden py-12 sm:py-20 lg:py-24 border-b border-sky-100 flex items-center justify-center">
      {/* Background Image - Fully and clearly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_dental_clinic_1790993790512.jpg"
          alt="Instalaciones modernas de Clínica Dental Sonrisa Serena"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Subtle, translucent overlay that preserves full image visibility while keeping text perfectly readable */}
        <div className="absolute inset-0 bg-slate-900/35 backdrop-brightness-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40" />
      </div>

      {/* Centered Content Container on Top of Clearly Visible Background */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Frosted Glass Floating Center Panel */}
        <div className="bg-white/92 backdrop-blur-md rounded-3xl border border-white/90 shadow-2xl p-6 sm:p-10 lg:p-12 flex flex-col items-center">
          {/* Trust Indicator Header */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 bg-sky-50/90 border border-sky-200 px-3.5 py-1.5 rounded-full shadow-2xs mb-5">
            <span className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </span>
            <span>4.9 en Google Reviews</span>
            <span className="text-sky-300">·</span>
            <span>{clinicConfig.metrics.patientsCount} Pacientes Atendidos</span>
            <span className="hidden sm:inline text-sky-300">·</span>
            <span className="hidden sm:inline text-emerald-700 font-bold">Atención con Cita Previa</span>
          </div>

          {/* H1 Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5"
            style={{ textWrap: 'balance' }}
          >
            Sonrisas saludables y radiantes con atención{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600">
              odontológica sin dolor
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
            Atención odontológica especializada, sin dolor y con tecnología moderna para toda la familia. Diagnóstico digital 3D, ortodoncia invisible y estética dental de alta precisión en un ambiente cálido y confortable.
          </p>

          {/* Action Buttons (CTAs) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-8">
            <button
              onClick={() => onNavigate('/agendar')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Consulta Online</span>
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-sky-900 bg-white hover:bg-sky-50 border border-sky-200 rounded-xl shadow-2xs hover:shadow-sm transition-all duration-150 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.178.182-.076.357.101.174.45 7.42 1.056 1.282.781.696 1.439.912 1.641 1.013.202.101.32.087.439-.05.118-.137.505-.589.64-.791.135-.202.27-.168.455-.101.185.067 1.174.554 1.376.655.202.101.336.151.385.235.049.084.049.49-.095.895z" />
              </svg>
              <span>Consultar por WhatsApp</span>
            </button>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/#contacto');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-xl transition-colors"
            >
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Ver Ubicación</span>
            </a>
          </div>

          {/* Guarantees & Trust Bullets */}
          <div className="pt-6 border-t border-slate-200/80 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Atención puntual con cita previa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Presupuestos cerrados sin sorpresas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Parking gratuito en edificio médico</span>
            </div>
          </div>

          {/* Medical Director Verification Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-sky-50/80 px-4 py-2 rounded-xl border border-sky-100 text-left">
            <div className="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
              VA
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 leading-tight">
                {doctorData.name}
              </div>
              <div className="text-[11px] text-slate-500">
                {doctorData.licenseNumber} · {doctorData.role.split('&')[0]}
              </div>
            </div>
            <span className="ml-2 text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded border border-emerald-300/60">
              Citas Disponibles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
