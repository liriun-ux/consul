import React from 'react';
import { clinicConfig } from '../data/clinicData';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 text-left">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                SS
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {clinicConfig.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Centro odontológico especializado en ortodoncia digital, estética dental avanzada, implantes guiados y odontopediatría sin dolor.
            </p>
            <div className="text-[11px] text-slate-500 pt-1">
              Registro Sanitario Autonómico: CS-849102-CAM · Dra. Valentina Arismendi (Col. 28009142).
            </div>
          </div>

          {/* Treatments Col */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Tratamientos
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('/servicios/ortodoncia')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ortodoncia & Alineadores
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicios/estetica-dental')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Estética & Diseño Sonrisa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicios/implantes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Implantes Guiados 3D
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servicios/odontopediatria')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Odontopediatría & Profilaxis
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#nosotros')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Equipo Médico
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#casos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Antes y Después
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/agendar')}
                  className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer"
                >
                  Agendar Consulta
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency & Address Col */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Atención & Contacto
            </h4>
            <p className="text-slate-400 leading-snug">
              {clinicConfig.address.street}<br />
              {clinicConfig.address.suite}<br />
              {clinicConfig.address.city}
            </p>
            <p className="text-sky-400 font-semibold pt-1">
              {clinicConfig.phone}
            </p>
            <p className="text-[11px] text-slate-500">
              L-V 08:30 a 20:00 · Sáb 09:00 a 14:30
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {clinicConfig.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Aviso Legal Sanitario</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">Política de Privacidad</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">Consentimiento Informado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
