import React from 'react';
import { Handshake, ExternalLink, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PARTNERS_DATA } from '../data/mockData';

export default function Partners() {
  return (
    <section id="parceiros" className="py-10 md:py-20 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-3 border border-mec-blue/20">
            <Handshake className="w-3.5 h-3.5" />
            <span>Ecossistema de Benefícios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight mb-3">
            Nossos Parceiros Oficiais
          </h2>
          <p className="text-base text-mec-muted">
            Conheça as marcas, clínicas e profissionais que apoiam nossos atletas com vantagens e descontos exclusivos.
          </p>
        </div>

        {/* Grid de Parceiros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.id}
              className="group bg-[#FAFAFC] hover:bg-white rounded-2xl border border-gray-200 hover:border-mec-blue/40 p-6 flex flex-col justify-between shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Top Image / Logo & Badge */}
                <div className="relative mb-5 overflow-hidden rounded-xl h-36 bg-gray-100 border border-gray-100">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {partner.discountBadge && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg text-[10px] font-extrabold bg-mec-blue text-white shadow-sm tracking-wide">
                      {partner.discountBadge}
                    </span>
                  )}
                </div>

                {/* Category & Title */}
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-mec-blue mb-1">
                  {partner.category}
                </div>
                <h3 className="text-lg font-extrabold text-mec-text mb-2 group-hover:text-mec-blue transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs text-mec-muted leading-relaxed mb-6">
                  {partner.description}
                </p>
              </div>

              {/* Botões de Ação: Site & Instagram */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                {/* Botão Instagram */}
                {partner.instagram && (
                  <a
                    href={partner.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs font-bold shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>{partner.instagramHandle || 'Ver no Instagram'}</span>
                  </a>
                )}

                {/* Botão Site Oficial (se houver link diferente) */}
                {partner.website && partner.website !== partner.instagram && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-mec-text hover:text-mec-blue text-xs font-bold transition-all text-center"
                  >
                    <span>Visitar Site Oficial</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Banner CTA para novos parceiros */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-mec-blue-surface border border-mec-blue/20 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text">
              Quer ser um parceiro oficial da Mec Assessoria?
            </h4>
            <p className="text-xs sm:text-sm text-mec-muted">
              Conecte sua marca a milhares de corredores e atletas em treinos presenciais e provas oficiais.
            </p>
          </div>
          <a
            href="https://wa.me/5511992168167?text=Ol%C3%A1!%20Gostaria%20de%20apresentar%20uma%20proposta%20de%20parceria%20com%20a%20Mec%20Assessoria."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-mec-blue hover:bg-mec-blue-light text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-blue-glow transition-all whitespace-nowrap"
          >
            <span>Seja um Parceiro</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
