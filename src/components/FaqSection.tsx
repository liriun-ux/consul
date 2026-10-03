import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            AEO / SEO & Orientación al Paciente
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Preguntas Frecuentes antes de tu Cita
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Resolvemos tus dudas sobre tratamientos, métodos indoloros y facilidades de pago para que asistas con total tranquilidad.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3 text-left">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-sky-300 bg-sky-50/30 shadow-xs'
                    : 'border-slate-200 hover:border-sky-200 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-full text-sky-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-sky-100' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-sm text-slate-600 leading-relaxed border-t border-sky-100/80 pt-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Assistance Card */}
        <div className="mt-10 p-4 rounded-xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-sky-600 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-700">
              ¿Tienes una duda específica sobre tu caso que no aparece aquí?
            </span>
          </div>
          <a
            href={`https://wa.me/${faqData ? '34612345678' : ''}?text=Hola,%20tengo%20una%20consulta%20adicional%20sobre%20los%20tratamientos.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-sky-700 hover:text-sky-800 bg-white px-3.5 py-2 rounded-lg border border-sky-200 shadow-2xs transition-colors shrink-0"
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
