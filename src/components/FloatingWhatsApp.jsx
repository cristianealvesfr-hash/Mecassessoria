import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showTooltip, setShowTooltip] = useState(true);

  const contextMap = {
    hero: {
      tooltip: "Fale com a Mec Assessoria no WhatsApp",
      message: "Olá! Gostaria de mais informações sobre a Mec Assessoria Esportiva.",
      badge: "Atendimento Rápido"
    },
    eventos: {
      tooltip: "Dúvidas sobre as corridas? Fale conosco",
      message: "Olá! Gostaria de informações sobre as inscrições para os próximos eventos esportivos.",
      badge: "Inscrições & Provas"
    },
    assessoria: {
      tooltip: "Quer treinar corrida conosco? Fale com o treinador",
      message: "Olá! Gostaria de saber como funciona a Assessoria Esportiva e os planos de treino de corrida.",
      badge: "Planilhas de Treino"
    },
    arbitragem: {
      tooltip: "Orçamento de Arbitragem & Cronometragem",
      message: "Olá! Gostaria de solicitar um orçamento para serviços de arbitragem e cronometragem eletrônica.",
      badge: "Arbitragem Especializada"
    },
    resultados: {
      tooltip: "Suporte sobre tempos e certificados",
      message: "Olá! Preciso de suporte referente aos resultados ou certificado de conclusão da prova.",
      badge: "Resultados de Prova"
    },
    calculadora: {
      tooltip: "Quer uma planilha para o seu Pace?",
      message: "Olá! Calculei meu ritmo na Calculadora de Pace e gostaria de receber uma planilha personalizada.",
      badge: "Evolução de Pace"
    },
    contato: {
      tooltip: "Fale diretamente com nossa diretoria",
      message: "Olá! Gostaria de entrar em contato com a equipe da Mec Assessoria.",
      badge: "Atendimento Direto"
    }
  };

  useEffect(() => {
    const sectionIds = ['hero', 'eventos', 'servicos', 'assessoria', 'arbitragem', 'resultados', 'calculadora', 'contato'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            const currentId = sectionIds[i];
            if (currentId === 'servicos') {
              setActiveSection('assessoria');
            } else {
              setActiveSection(currentId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentContext = contextMap[activeSection] || contextMap.hero;
  const whatsappUrl = `https://wa.me/5511992168167?text=${encodeURIComponent(currentContext.message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Floating Instagram Button */}
      <a
        href="https://www.instagram.com/mec_assessoria/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Siga nosso Instagram @mec_assessoria"
        className="relative group flex items-center justify-center w-12 h-12 rounded-2xl shadow-md hover:shadow-pink-500/30 transition-all duration-300 hover:scale-110 active:scale-95 bg-white p-0.5 border border-gray-100"
      >
        <img 
          src="/instagram-icon.png" 
          alt="Instagram @mec_assessoria" 
          className="w-full h-full object-cover rounded-xl"
        />
      </a>

      {/* Dynamic Context Tooltip for WhatsApp */}
      {showTooltip && (
        <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-soft-2 border border-mec-blue/20 text-xs font-semibold text-mec-text max-w-[230px] sm:max-w-xs animate-fade-in">
          <div className="flex flex-col">
            <span className="text-[10px] font-extrabold uppercase text-emerald-600 tracking-wider">
              {currentContext.badge}
            </span>
            <span className="text-mec-muted text-[11px] leading-tight font-medium">
              {currentContext.tooltip}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento no WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 bg-white p-0.5"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none"></span>
        <img 
          src="/whatsapp-icon.png" 
          alt="WhatsApp Mec Assessoria" 
          className="w-full h-full object-cover rounded-full"
        />
      </a>
    </div>
  );
}
