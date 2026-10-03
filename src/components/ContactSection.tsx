import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Car, Navigation } from 'lucide-react';
import { clinicConfig, treatmentsData } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    serviceId: 'ortodoncia',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) return;

    // Build WhatsApp message link for immediate connection as well
    const treatmentObj = treatmentsData.find(t => t.id === formState.serviceId);
    const serviceName = treatmentObj ? treatmentObj.name : formState.serviceId;
    const textMsg = `Hola Clínica Sonrisa Serena, mi nombre es ${formState.name}. Estoy interesado(a) en el tratamiento de ${serviceName}. Teléfono: ${formState.phone}.${formState.message ? ` Consulta: ${formState.message}` : ''}`;
    const waUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(textMsg)}`;

    setSubmitted(true);
    // Optionally open WhatsApp in a new tab if preferred or user can click direct button
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-slate-50/60 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Atención Presencial & Citas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Visítanos en Nuestro Consultorio
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Estamos ubicados en una zona médica céntrica, con fácil estacionamiento y accesibilidad integral.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Block: Location Details, Simulated Interactive Map & Transports */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Information Card */}
            <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Dirección de la Clínica</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                    {clinicConfig.address.street}
                  </p>
                  <p className="text-xs text-slate-500">
                    {clinicConfig.address.suite} · {clinicConfig.address.district}
                  </p>
                  <p className="text-xs text-slate-500">
                    {clinicConfig.address.city}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2 text-slate-600">
                  <Navigation className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{clinicConfig.address.references}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600">
                  <Car className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{clinicConfig.address.parking}</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-xs relative">
              <div className="h-64 sm:h-72 w-full bg-slate-100 relative flex items-center justify-center overflow-hidden">
                {/* Custom Styled Map Illustration */}
                <div className="absolute inset-0 bg-sky-50/50 flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-bold text-slate-800 bg-white/95 px-3 py-1 rounded-md shadow-xs border border-sky-100">
                      Paseo de la Castellana 128
                    </span>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-sky-700 bg-white/95 hover:bg-sky-50 px-2.5 py-1 rounded-md shadow-xs border border-sky-200 transition-colors"
                    >
                      Abrir en Google Maps ↗
                    </a>
                  </div>

                  {/* Stylized Map Vector Roads Grid */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                      <rect width="60" height="60" fill="none" stroke="#0284c7" strokeWidth="0.5" />
                      <line x1="0" y1="30" x2="60" y2="30" stroke="#0284c7" strokeWidth="1.5" />
                      <line x1="30" y1="0" x2="30" y2="60" stroke="#0284c7" strokeWidth="1.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  </svg>

                  {/* Center Pin Anchor */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative flex flex-col items-center animate-bounce">
                      <div className="w-12 h-12 rounded-full bg-sky-600 text-white shadow-xl flex items-center justify-center border-2 border-white">
                        <MapPin className="w-6 h-6 fill-current" />
                      </div>
                      <div className="w-4 h-1.5 bg-slate-400/40 rounded-full blur-2xs mt-1" />
                    </div>
                  </div>

                  <div className="z-10 bg-white/90 backdrop-blur-xs p-2.5 rounded-lg border border-sky-100 text-[11px] text-slate-700 max-w-xs self-start">
                    <span className="font-bold text-sky-800 block">Estación de Metro más cercana:</span>
                    Santiago Bernabéu (Línea 10) a 2 min caminando.
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Schedules Box */}
            <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-xs">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Horarios de Atención Clínica</span>
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Lunes a Viernes:</span>
                  <span className="font-semibold text-slate-900">{clinicConfig.schedules.weekdays.replace('Lunes a Viernes: ', '')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Sábados:</span>
                  <span className="font-semibold text-slate-900">{clinicConfig.schedules.saturday.replace('Sábados: ', '')}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-slate-700">Domingos y Feriados:</span>
                  <span className="font-semibold text-sky-700">Urgencias con Cita Previa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Direct Contact Form & Rapid WhatsApp */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 shadow-sm text-left">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Formulario de Consulta Rápida
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Escríbenos o Solicita tu Valoración
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Te responderemos en menos de 15 minutos en horario de atención.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-sky-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">
                  ¡Mensaje Enviado con Éxito!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Gracias {formState.name}. Se ha preparado tu mensaje directo con el consultorio de la Dra. Valentina Arismendi. Si no se abrió la ventana de WhatsApp, pulsa el botón abajo.
                </p>
                <div className="pt-2 flex justify-center gap-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                  <a
                    href={`https://wa.me/${clinicConfig.whatsapp}?text=Hola,%20soy%20${formState.name}%20y%20deseo%20confirmar%20mi%20cita.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
                  >
                    Reabrir WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nombre y Apellidos *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ej. Laura Morales"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tratamiento de Interés
                    </label>
                    <select
                      value={formState.serviceId}
                      onChange={(e) => setFormState({ ...formState, serviceId: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors cursor-pointer"
                    >
                      {treatmentsData.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                      <option value="revision-general">Revisión General / Limpieza</option>
                      <option value="urgencia">Urgencia / Dolor dental</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    ¿Deseas detallar tu caso o disponibilidad de horario? (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Ej. Prefiero cita por las tardes o consultar por la promoción del mes..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta Directa por WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Tus datos son 100% confidenciales de acuerdo con el RGPD sanitario.
                  </p>
                </div>
              </form>
            )}

            {/* Direct Quick Dial Phone Row */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500">¿Prefieres llamar por teléfono?</span>
              <a
                href={`tel:${clinicConfig.phoneClean}`}
                className="font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1.5 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{clinicConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
