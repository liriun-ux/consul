import React, { useState } from 'react';
import { clinicConfig } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const waUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {hovered && (
        <div className="hidden sm:block bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-sky-100 animate-in fade-in slide-in-from-right-2 duration-150">
          ¿En qué podemos ayudarte hoy?
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Contactar por WhatsApp con la clínica"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.178.182-.076.357.101.174.45 7.42 1.056 1.282.781.696 1.439.912 1.641 1.013.202.101.32.087.439-.05.118-.137.505-.589.64-.791.135-.202.27-.168.455-.101.185.067 1.174.554 1.376.655.202.101.336.151.385.235.049.084.049.49-.095.895z" />
        </svg>
      </a>
    </div>
  );
};
