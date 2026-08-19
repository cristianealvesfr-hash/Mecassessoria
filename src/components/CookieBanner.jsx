import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export default function CookieBanner({ onOpenPrivacyModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mec_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('mec_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleCustomPreferences = () => {
    localStorage.setItem('mec_cookie_consent', 'custom');
    setIsVisible(false);
    if (onOpenPrivacyModal) onOpenPrivacyModal();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-lg z-50 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-mec-blue/30 text-mec-muted text-xs space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center flex-shrink-0 font-bold">
              <Cookie className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-extrabold text-mec-text">
              Privacidade & Uso de Cookies
            </h4>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
            aria-label="Fechar aviso de cookies"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="leading-relaxed text-mec-muted">
          Utilizamos cookies essenciais para o funcionamento do site e analíticos para melhorar a sua experiência ao navegar no calendário de corridas e na calculadora de pace, em conformidade com a <strong>LGPD</strong>.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2.5 px-4 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-xs font-bold shadow-sm transition-all text-center"
          >
            Aceitar Todos
          </button>

          <button
            onClick={handleCustomPreferences}
            className="py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-mec-text text-xs font-bold transition-colors text-center"
          >
            Gerenciar / Ler Política
          </button>
        </div>
      </div>
    </div>
  );
}
