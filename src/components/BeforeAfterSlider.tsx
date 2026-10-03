import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';
import { ClinicCase } from '../types';

interface BeforeAfterSliderProps {
  clinicCase: ClinicCase;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ clinicCase }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden p-4 sm:p-6 text-left">
      {/* Case Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
            {clinicCase.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
            {clinicCase.title}
          </h3>
          <p className="text-xs text-slate-500">
            Paciente: {clinicCase.patientInfo} · Duración: {clinicCase.duration}
          </p>
        </div>

        {/* Quick Position Quick Buttons */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setSliderPosition(0)}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              sliderPosition === 0 ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Antes
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              sliderPosition === 50 ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            50 / 50
          </button>
          <button
            onClick={() => setSliderPosition(100)}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              sliderPosition === 100 ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Después
          </button>
        </div>
      </div>

      {/* Interactive Draggable Split View */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative h-[280px] sm:h-[380px] w-full rounded-xl overflow-hidden select-none cursor-ew-resize bg-slate-900 border border-slate-200"
      >
        {/* "AFTER" Layer (Full width background) */}
        <img
          src={clinicCase.afterImage}
          alt={`Resultado después: ${clinicCase.title}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm z-10 pointer-events-none">
          DESPUÉS: {clinicCase.treatmentName}
        </div>

        {/* "BEFORE" Layer (Clipped width with sepia/monochrome filter effect to illustrate initial tooth condition) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={clinicCase.beforeImage}
            alt={`Estado antes: ${clinicCase.title}`}
            className="absolute inset-0 w-full h-full object-cover filter contrast-85 brightness-90 saturate-75 max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-slate-800/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-sm z-10 pointer-events-none">
            ANTES DE TRATAMIENTO
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-sky-300 flex items-center justify-center text-sky-600">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Case Details Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100 text-xs">
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
          <span className="font-bold text-slate-800 block mb-1">Diagnóstico inicial:</span>
          <p className="text-slate-600 leading-relaxed">{clinicCase.beforeDesc}</p>
        </div>
        <div className="p-3 rounded-lg bg-sky-50/60 border border-sky-100">
          <span className="font-bold text-sky-900 block mb-1">Resultado alcanzado:</span>
          <p className="text-sky-800 leading-relaxed">{clinicCase.afterDesc}</p>
        </div>
      </div>

      {/* Testimonial Quote */}
      <div className="mt-4 pt-3 flex items-start gap-2.5 text-xs text-slate-600 italic">
        <span className="text-sky-500 font-serif text-lg leading-none">“</span>
        <p className="flex-1">{clinicCase.testimonialExcerpt}</p>
      </div>
    </div>
  );
};
