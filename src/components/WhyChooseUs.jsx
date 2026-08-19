import React from 'react';
import { ShieldCheck, Cpu, HeartHandshake, Award, CheckCircle2, ChevronRight, Building2, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Building2,
      title: "Eventos para Empresas & Marcas",
      desc: "Desenvolvemos corridas corporativas, etapas personalizadas e projetos esportivos sob medida para empresas e marcas promoverem saúde e engajamento."
    },
    {
      icon: ShieldCheck,
      title: "Arbitragem Esportiva Especializada",
      desc: "Equipe experiente de arbitragem esportiva, garantindo a aplicação rigorosa das regras, segurança técnica e lisura de cada etapa."
    },
    {
      icon: Award,
      title: "Assessoria para Atletas de Rua",
      desc: "Periodização estruturada e individualizada, respeitando a evolução gradual, zonas de ritmo e o objetivo de cada corredor do 5K à Maratona."
    },
    {
      icon: Cpu,
      title: "Cronometragem Eletrônica RFID",
      desc: "Tapetes de alta precisão e chips descartáveis de padrão internacional. Apuração de tempos oficiais e relatórios instantâneos."
    }
  ];

  return (
    <section className="py-10 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider border border-mec-blue/20">
              <Award className="w-3.5 h-3.5" />
              <span>Diferencial Técnico & Autoridade</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight leading-tight">
              Por que a <span className="text-mec-blue">MEC Assessoria</span> é referência em corrida de rua?
            </h2>

            <p className="text-base text-mec-muted leading-relaxed">
              Combinamos paixão esportiva com rigor técnico. Seja organizando um grande evento para centenas de atletas ou orientando a preparação e evolução de corredores de rua, nossa equipe entrega excelência em cada detalhe.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-mec-text">
                  Soluções completas para empresas, marcas e gestores criarem corridas de rua de sucesso
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-mec-text">
                  Acompanhamento técnico individualizado focado na evolução real de atletas de corrida
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-mec-text">
                  Estrutura de arena, percursos seguros, cronometragem eletrônica RFID e arbitragem oficial
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-center sm:justify-start w-full">
              <a
                href="https://wa.me/5511992168167?text=Olá! Gostaria de falar com os especialistas da Mec Assessoria sobre a realização de eventos esportivos e assessoria de corrida de rua."
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-mec-blue hover:bg-mec-blue-light text-white text-sm font-bold rounded-xl shadow-md hover:shadow-blue-glow transition-all hover:scale-105 active:scale-95 text-center mx-auto sm:mx-0"
              >
                <span>Fale com Nossos Especialistas</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FAFAFC] hover:bg-white border border-gray-100 hover:border-mec-blue/30 rounded-2xl p-6 shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-mec-blue-surface text-mec-blue flex items-center justify-center mb-4 group-hover:bg-mec-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-mec-text mb-2 group-hover:text-mec-blue transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-mec-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
