import React from 'react';
import { Award, GraduationCap, CheckCircle2, HeartHandshake, Eye } from 'lucide-react';
import { doctorData, clinicConfig } from '../data/clinicData';

interface AboutSectionProps {
  onScheduleCall: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScheduleCall }) => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Equipo Médico & Trayectoria
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Conozca a sus Especialistas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            La confianza se construye con honestidad médica, formación continua y empatía con cada paciente.
          </p>
        </div>

        {/* Doctor Spotlight Card (Asymmetric 2-column) */}
        <div className="bg-sky-50/40 rounded-3xl border border-sky-100 p-6 sm:p-10 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Doctor Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100 max-w-md mx-auto lg:max-w-none">
                <img
                  src={doctorData.photo}
                  alt={doctorData.name}
                  className="w-full h-[400px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-sky-100 text-left">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-bold text-slate-900">
                      {doctorData.licenseNumber}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {doctorData.experienceYears} años de experiencia clínica especializada
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Doctor Bio & Credentials */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {doctorData.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {doctorData.name}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  {doctorData.specialty}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {doctorData.bio}
              </p>

              {/* Education and certifications list */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  <span>Formación & Certificaciones Oficiales</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {doctorData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-sky-100/80 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Memberships */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Sociedades científicas:</span>
                {doctorData.memberships.map((mem, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600"
                  >
                    {mem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facilities & Clinic Technology Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Instalaciones & Equipamiento
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Instalaciones confortables y tecnología clínica de última generación
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diseñamos cada espacio para reducir el estrés y garantizar la máxima bioseguridad. Nuestras salas de consulta están equipadas con sillones ergonómicos de memoria viscoelástica, pantallas HD de diagnóstico interactivo y sistemas de purificación de aire con filtros HEPA grado médico.
            </p>

            <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Escáner intraoral 3D de alta velocidad (sin moldes de alginato)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Radiología digital panorámica con un 85% menos de radiación</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Autoclave hospitalaria con trazabilidad digital de esterilización</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onScheduleCall}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors cursor-pointer"
              >
                Conocer la clínica en persona →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 bg-slate-50 relative group">
              <img
                src="/src/assets/images/dental_clinic_facility_1790993823056.jpg"
                alt="Gabinete odontológico de tecnología 3D en Clínica Sonrisa Serena"
                className="w-full h-[320px] object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium">
                Gabinete principal de odontología restauradora y diagnóstico digital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
