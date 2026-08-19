import React from 'react';
import { Trophy, Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenPrivacyModal, onOpenTermsModal }) {
  return (
    <footer id="contato" className="bg-[#F8F9FA] border-t border-gray-200 text-mec-muted pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid with responsive 12-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-gray-200">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-mec-blue flex items-center justify-center text-white shadow-md">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-mec-text">
                  MEC <span className="text-mec-blue">ASSESSORIA</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-mec-subtle uppercase -mt-1">
                  Esportiva & Eventos
                </span>
              </div>
            </a>

            <p className="text-sm text-mec-subtle leading-relaxed max-w-sm">
              Especialistas em corrida de rua, periodização técnica de treinamento, organização ponta a ponta de eventos esportivos e serviços profissionais de arbitragem e cronometragem.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/mec_assessoria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Mec Assessoria"
                className="w-9 h-9 rounded-xl bg-white border border-gray-200 hover:border-mec-blue hover:text-mec-blue text-mec-muted flex items-center justify-center transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Atletas / Participantes (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-mec-text uppercase tracking-wider mb-4">
              Participantes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#assessoria" className="text-mec-muted hover:text-mec-blue transition-colors">
                  Assessoria & Treinos
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-mec-muted hover:text-mec-blue transition-colors">
                  Calendário de Provas
                </a>
              </li>
              <li>
                <a href="#resultados" className="text-mec-muted hover:text-mec-blue transition-colors">
                  Consulta de Resultados
                </a>
              </li>
              <li>
                <a href="#calculadora" className="text-mec-muted hover:text-mec-blue transition-colors">
                  Calculadora de Pace
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Organizadores & Serviços (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-mec-text uppercase tracking-wider mb-4">
              Organizadores
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#servicos" className="text-mec-muted hover:text-mec-blue transition-colors">
                  Organização de Eventos
                </a>
              </li>
              <li>
                <a href="#arbitragem" className="text-mec-muted hover:text-mec-blue transition-colors">
                  Arbitragem Esportiva
                </a>
              </li>
              <li>
                <a href="#arbitragem" className="text-mec-muted hover:text-mec-blue transition-colors">
                  Cronometragem Eletrônica RFID
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511992168167?text=Gostaria de solicitar um orçamento para meu evento" target="_blank" rel="noopener noreferrer" className="text-mec-muted hover:text-mec-blue transition-colors inline-flex items-center gap-1">
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Localização (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-mec-text uppercase tracking-wider mb-4">
              Fale Conosco
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <a href="https://wa.me/5511992168167" target="_blank" rel="noopener noreferrer" className="hover:text-mec-blue transition-colors font-medium">
                  (11) 99216-8167
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <a href="mailto:mecassessoria.adm@gmail.com" className="hover:text-mec-blue transition-colors font-medium whitespace-nowrap">
                  mecassessoria.adm@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <span className="font-medium">São Paulo - SP</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mec-subtle">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-mec-blue" />
            <span>© {new Date().getFullYear()} Mec Assessoria Esportiva & Eventos. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTermsModal}
              className="hover:text-mec-blue transition-colors underline-offset-2 hover:underline"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-mec-blue transition-colors underline-offset-2 hover:underline font-semibold"
            >
              Política de Privacidade (LGPD)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
