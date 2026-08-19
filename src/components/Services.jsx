import React from 'react';
import { Flag, Activity, ShieldCheck, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

export default function Services({ onSelectService }) {
  const serviceIcons = [Flag, Activity, ShieldCheck];

  return (
    <section id="servicos" className="py-10 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-4 border border-mec-blue/20">
            <span>Soluções 360º para Corrida de Rua</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight mb-4">
            Nossos Serviços Profissionais
          </h2>
          <p className="text-base sm:text-lg text-mec-muted leading-relaxed">
            Excelência técnica para organizadores, prefeituras e corredores que buscam superar marcas com segurança e profissionalismo.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const isAssessoria = service.id === "assessoria-integrada";
            const isArbitragem = service.id === "arbitragem-profissional";
            const isEventos = service.id === "organizacao-eventos";

            const anchorId = isAssessoria ? "assessoria" : (isArbitragem ? "arbitragem" : "organizacao");

            return (
              <div
                key={service.id}
                id={anchorId}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-gray-100 hover:border-mec-blue/30 p-6 sm:p-8 shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-mec-blue-surface text-mec-blue flex items-center justify-center group-hover:bg-mec-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-mec-blue bg-mec-blue-surface px-3 py-1 rounded-full border border-mec-blue/20">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-mec-text mb-3 group-hover:text-mec-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-mec-muted mb-4 leading-snug">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-mec-subtle mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits Check List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-gray-100">
                    {service.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-mec-blue flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-mec-muted leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/5511992168167?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-mec-blue hover:text-white bg-mec-blue-surface hover:bg-mec-blue border border-mec-blue/30 hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-md whitespace-nowrap text-center"
                  >
                    <span>{service.ctaText}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout for Organizers */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-mec-blue-surface via-white to-mec-blue-surface border border-mec-blue/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold text-mec-text">
              É organizador de corridas ou gestor público?
            </h4>
            <p className="text-sm text-mec-muted">
              Monte sua prova com quem é especialista em percursos certificados, cronometragem eletrônica e arbitragem oficial.
            </p>
          </div>
          <a
            href="https://wa.me/5511992168167?text=Olá! Sou organizador de eventos / gestor e gostaria de falar com a equipe técnica da Mec Assessoria para solicitar uma proposta."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-mec-blue hover:bg-mec-blue-light text-white text-sm font-bold rounded-xl shadow-md hover:shadow-blue-glow transition-all text-center"
          >
            <span>Falar com a Equipe Técnica</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
