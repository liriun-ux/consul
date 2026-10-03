import React from 'react';
import { X, Clock, Calendar, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Treatment } from '../types';
import { clinicConfig } from '../data/clinicData';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
  onGoToFullPage: (slug: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBook,
  onGoToFullPage,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl border border-sky-100 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
            {treatment.category}
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
            {treatment.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {treatment.shortDesc}
          </p>
        </div>

        {/* Quick parameters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block font-medium">Duración:</span>
            <span className="text-slate-800 font-bold block">{treatment.duration}</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Recuperación:</span>
            <span className="text-emerald-700 font-bold block">{treatment.recovery}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-slate-400 block font-medium">Precio estimado:</span>
            <span className="text-sky-900 font-bold block">{treatment.startingPrice}</span>
          </div>
        </div>

        {/* Full description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {treatment.fullDesc}
        </p>

        {/* Benefits list */}
        <div>
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            Ventajas Principales
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {treatment.benefits.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onGoToFullPage(treatment.slug)}
            className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer order-2 sm:order-1"
          >
            <span>Ver ficha técnica completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2">
            <button
              onClick={() => onBook(treatment.id)}
              className="w-full sm:w-auto py-2.5 px-5 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Valoración</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
