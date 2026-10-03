import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowLeft, Phone, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { clinicConfig, treatmentsData, doctorData } from '../data/clinicData';

interface BookingPageProps {
  initialServiceId?: string;
  onNavigate: (route: string) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  initialServiceId,
  onNavigate,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || treatmentsData[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30');
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const timeSlots = [
    { time: '09:00', label: '09:00 h - Mañana' },
    { time: '10:30', label: '10:30 h - Mañana' },
    { time: '12:00', label: '12:00 h - Mañana' },
    { time: '16:00', label: '16:00 h - Tarde' },
    { time: '17:30', label: '17:30 h - Tarde' },
    { time: '19:00', label: '19:00 h - Tarde' },
  ];

  const currentServiceObj = treatmentsData.find(t => t.id === selectedService) || treatmentsData[0];

  const generateWhatsAppMessage = () => {
    return `¡Hola Clínica Dental Sonrisa Serena! Deseo agendar una consulta:
· Paciente: ${patientName || '[Nombre pendiente]'}
· Teléfono: ${patientPhone || '[Teléfono pendiente]'}
· Tratamiento de interés: ${currentServiceObj.name}
· Fecha solicitada: ${selectedDate}
· Horario preferido: ${selectedSlot} h
· ¿Es primera visita?: ${isFirstVisit ? 'Sí, primera consulta' : 'Paciente recurrente'}
${notes ? `· Comentario adicional: ${notes}` : ''}`;
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      alert('Por favor ingrese su nombre y número telefónico para coordinar su cita.');
      return;
    }

    const message = generateWhatsAppMessage();
    const waUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    setConfirmed(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-left pt-6 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-sky-700 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la página principal</span>
          </button>

          <a
            href={`tel:${clinicConfig.phoneClean}`}
            className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Llamar: {clinicConfig.phone}</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Reserva Rápida & Sin Esperas
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Agendar Consulta Odontológica
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Selecciona tu especialidad y horario preferido. Te confirmamos inmediatamente con mensaje directo a WhatsApp.
          </p>
        </div>

        {confirmed ? (
          <div className="bg-white rounded-3xl border border-sky-200 p-8 sm:p-12 shadow-md text-center max-w-xl mx-auto space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                ¡Solicitud de Cita Preparada!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Hemos generado el mensaje para el consultorio de la <span className="font-bold text-slate-800">{doctorData.name}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50 text-left text-xs space-y-1.5 border border-sky-100">
              <div className="font-bold text-sky-900">Resumen de tu cita:</div>
              <div><span className="text-slate-500">Paciente:</span> <span className="font-semibold text-slate-800">{patientName}</span></div>
              <div><span className="text-slate-500">Tratamiento:</span> <span className="font-semibold text-slate-800">{currentServiceObj.name}</span></div>
              <div><span className="text-slate-500">Fecha solicitada:</span> <span className="font-semibold text-slate-800">{selectedDate} a las {selectedSlot} h</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Abrir WhatsApp Ahora</span>
              </a>

              <button
                onClick={() => setConfirmed(false)}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Modificar Horario
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookNow} className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Step 1: Select Treatment */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                1. Selecciona el tratamiento o motivo de consulta:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatmentsData.map((t) => {
                  const isCurrent = t.id === selectedService;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setSelectedService(t.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isCurrent
                          ? 'border-sky-500 bg-sky-50/70 shadow-xs ring-1 ring-sky-500'
                          : 'border-slate-200 hover:border-sky-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-slate-900">
                          {t.name}
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isCurrent ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-300'
                        }`}>
                          {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">
                        {t.startingPrice}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Date & Time Slot */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                2. Elige fecha y turno disponible:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Fecha preferida:</span>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 cursor-pointer"
                  />
                </div>

                <div>
                  <span className="text-xs text-slate-500 block mb-1">Horario estimado:</span>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 cursor-pointer"
                  >
                    {timeSlots.map((s) => (
                      <option key={s.time} value={s.time}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time slot quick buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {timeSlots.map((s) => (
                  <button
                    key={s.time}
                    type="button"
                    onClick={() => setSelectedSlot(s.time)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                      selectedSlot === s.time
                        ? 'bg-sky-600 text-white border-sky-600 font-bold'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {s.time} h
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Patient Information */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                3. Tus datos de contacto:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Nombre completo *</span>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Andrés Gómez"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <span className="text-xs text-slate-500 block mb-1">Número de Móvil / WhatsApp *</span>
                  <input
                    type="tel"
                    required
                    placeholder="+34 600 000 000"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  id="firstVisit"
                  checked={isFirstVisit}
                  onChange={(e) => setIsFirstVisit(e.target.checked)}
                  className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer"
                />
                <label htmlFor="firstVisit" className="text-xs text-slate-700 cursor-pointer">
                  Es mi primera vez en Clínica Sonrisa Serena (Incluye valoración diagnóstica inicial)
                </label>
              </div>

              <div>
                <span className="text-xs text-slate-500 block mb-1">¿Alguna indicación previa o molestia específica? (Opcional)</span>
                <input
                  type="text"
                  placeholder="Ej. Sensibilidad al frío, molestia en molar, consultar facilidades de pago..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {/* Submission Button */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Confirmar y Enviar Solicitud por WhatsApp</span>
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span>Sin compromiso</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Respuesta rápida</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Atención 100% sin dolor</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
