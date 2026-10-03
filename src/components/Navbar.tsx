import React, { useState } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { clinicConfig } from '../data/clinicData';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Tratamientos', path: '/servicios' },
    { label: 'Nosotros', path: '/#nosotros' },
    { label: 'Casos Reales', path: '/#casos' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Ubicación', path: '/#contacto' },
  ];

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark (Single primary brand element) */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200 shadow-xs">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 2 7.5.5 2.5 1.5 4.5 3 4.5s1.8-2 2-4c.2 2 1.5 4 3 4s2.5-2 3-4.5c.5-2.5 2-4.5 2-7.5 0-3.5-2.5-6-6-6zm0 2c2.5 0 4 1.8 4 4.5 0 2-.9 3.5-1.5 5.5-.3 1.2-.7 2.4-1.2 3.2-.4-.8-.9-2.1-1.3-3.2-.6-2-1-3.5-1-5.5 0-2.7 1.5-4.5 4-4.5z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                Sonrisa Serena
              </span>
              <span className="text-xs font-medium text-sky-600 block">
                Odontología Especializada
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.path || (currentRoute.startsWith('/servicios') && link.path === '/servicios');
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                    isActive ? 'text-sky-700 font-semibold border-b-2 border-sky-500 pb-0.5' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Direct Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinicConfig.phoneClean}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-sky-700 bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-200 rounded-lg px-3 py-2 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{clinicConfig.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('/agendar')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              className="lg:hidden p-2 text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(link.path, e)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${clinicConfig.phoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Llamar al {clinicConfig.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/agendar');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-sky-600 rounded-lg shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Directa</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
