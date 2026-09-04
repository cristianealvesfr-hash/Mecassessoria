import React from 'react';
import { X, FileText, ShieldAlert, Camera, RefreshCw, Scale, Mail, Phone, MapPin, Printer, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function TermsOfUseModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8 flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-mec-blue to-[#0077cc] text-white px-6 py-5 flex items-center justify-between flex-shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[11px] uppercase font-extrabold tracking-wider text-white/80">
                Direito Desportivo & Contratos
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Termos de Uso e Condições Gerais
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fechar Termos de Uso"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-mec-muted text-sm leading-relaxed">
          
          {/* Badge & Date */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-100 text-xs">
            <span className="font-bold text-mec-blue bg-mec-blue-surface px-3 py-1 rounded-full border border-mec-blue/20">
              MEC ASSESSORIA ESPORTIVA & EVENTOS
            </span>
            <span className="text-mec-subtle">
              Última atualização: 19 de Agosto de 2026
            </span>
          </div>

          {/* 1. Objeto */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">1</span>
              Objeto e Aceitação dos Termos
            </h4>
            <p>
              O presente instrumento regula os <strong>Termos de Uso e Condições Gerais</strong> aplicáveis à relação jurídica entre a <strong>Mec Assessoria Esportiva & Eventos</strong> ("Empresa", "Organização") e todos os seus Usuários (Atletas, Alunos da Assessoria e Contratantes).
            </p>
            <p className="text-xs text-mec-muted">
              A inscrição em eventos ou a contratação de planos e serviços implica a aceitação automática de todas as cláusulas deste instrumento.
            </p>
          </section>

          {/* 2. Responsabilidade Física & Isenção */}
          <section className="space-y-3 bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
            <h4 className="text-base font-extrabold text-amber-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              2. Termo de Responsabilidade Física e Isenção de Responsabilidade
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-amber-900">
              <p>
                <strong>2.1. Declaração de Saúde:</strong> Ao se inscrever ou treinar com a Mec Assessoria, o Atleta atesta estar em <strong>perfeitas condições de saúde física e mental</strong>, com exames médicos em dia e aptidão total para atividades de corrida de rua.
              </p>
              <p>
                <strong>2.2. Assunção de Riscos:</strong> O participante reconhece que a prática esportiva envolve riscos inerentes (quedas, torções, esforço intenso e condições climáticas).
              </p>
              <p>
                <strong>2.3. Isenção Total:</strong> O Atleta <strong>isenta expressamente a Mec Assessoria Esportiva, seus diretores, patrocinadores e organizadores</strong> de qualquer responsabilidade civil ou criminal por lesões, acidentes, danos materiais ou mal súbito ocorridos durante treinos ou provas.
              </p>
            </div>
          </section>

          {/* 3. Direito de Imagem */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <Camera className="w-5 h-5 text-mec-blue" />
              3. Cessão Irrevogável de Direito de Imagem
            </h4>
            <p className="text-xs sm:text-sm">
              O participante <strong>autoriza gratuitamente e em caráter irrevogável</strong> o uso de sua imagem, nome e voz capturados em fotos e vídeos durante eventos ou treinos. As mídias poderão ser utilizadas pela Mec Assessoria em redes sociais, sites, materiais publicitários e coberturas de imprensa, sem direito a remuneração ou indenização.
            </p>
          </section>

          {/* 4. Cancelamentos e Reembolsos */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-mec-blue" />
              4. Regras de Cancelamento e Reembolso
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1.5">
                <h5 className="font-extrabold text-mec-text text-sm">Eventos e Corridas</h5>
                <p>• <strong>Até 7 dias após a compra:</strong> Reembolso integral (Direito de Arrependimento - Art. 49 CDC).</p>
                <p>• <strong>Após 7 dias:</strong> Não haverá reembolso sob qualquer hipótese, devido aos custos operacionais prévios.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-1.5">
                <h5 className="font-extrabold text-mec-text text-sm">Assessoria & Clima</h5>
                <p>• <strong>Assessoria:</strong> Cancelamento mediante aviso prévio de no mínimo <strong>30 dias</strong>.</p>
                <p>• <strong>Força Maior / Clima:</strong> Em caso de adiamento por chuvas ou segurança, a prova será reagendada sem devolução em dinheiro.</p>
              </div>
            </div>
          </section>

          {/* 5. Cronometragem e Classificação */}
          <section className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <h4 className="text-base font-extrabold text-mec-text flex items-center gap-2">
              <Scale className="w-5 h-5 text-mec-blue" />
              5. Cronometragem Eletrônica e Resultados Oficiais
            </h4>
            <p className="text-xs sm:text-sm">
              Os tempos de prova são apurados por sistema eletrônico RFID de chip descartável. A validação dos resultados oficiais, classificação geral e por categoria compete à Diretoria Técnica da Organização, assegurando a precisão dos tempos brutos e líquidos.
            </p>
          </section>

          {/* 6. Foro de Eleição */}
          <section className="space-y-2">
            <h4 className="text-base font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">6</span>
              Foro de Eleição
            </h4>
            <p className="text-xs sm:text-sm">
              Para dirimir quaisquer controvérsias relativas a estes Termos, as partes elegem a <strong>Comarca de São Paulo / SP</strong>, com renúncia a qualquer outro foro.
            </p>
          </section>

          {/* Contact Box */}
          <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
            <h4 className="text-sm font-extrabold text-mec-text uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-4 h-4 text-mec-blue" />
              Canais Oficiais de Atendimento
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-bold text-mec-text">
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-2">
                <Mail className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <a href="mailto:mecassessoria.adm@gmail.com" className="text-mec-blue hover:underline break-all">
                  mecassessoria.adm@gmail.com
                </a>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-2">
                <Phone className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <a href="https://wa.me/5511992168167" target="_blank" rel="noopener noreferrer" className="hover:text-mec-blue">
                  (11) 99216-8167
                </a>
              </div>

              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Close Button */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            Entendido e Fechar
          </button>
        </div>

      </div>
    </div>
  );
}
