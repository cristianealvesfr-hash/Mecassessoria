import React from 'react';
import { X, ShieldCheck, Lock, Mail, Phone, MapPin, Printer, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyModal({ onClose }) {
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
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[11px] uppercase font-extrabold tracking-wider text-white/80">
                Conformidade com a Lei nº 13.709/2018 (LGPD)
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Política de Privacidade & Proteção de Dados
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
              aria-label="Fechar Política de Privacidade"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Legal Document Body */}
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

          {/* 1. Apresentação */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">1</span>
              Apresentação e Compromisso com a Privacidade
            </h4>
            <p>
              A <strong>Mec Assessoria Esportiva</strong> preza pela transparência, segurança e privacidade de todos os seus usuários, atletas, alunos e clientes corporativos.
            </p>
            <p>
              Esta Política de Privacidade foi elaborada em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD)</strong> e o Marco Civil da Internet (Lei nº 12.965/2014), cobrindo as atividades da empresa:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-mec-text font-semibold text-xs sm:text-sm">
              <li>Organização de Eventos Esportivos e Corridas de Rua;</li>
              <li>Assessoria Esportiva Integrada (treinamento e acompanhamento de corredores);</li>
              <li>Cronometragem Eletrônica RFID e Emissão Oficial de Resultados.</li>
            </ul>
          </section>

          {/* 2. Quais dados coletamos */}
          <section className="space-y-4">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">2</span>
              Quais Dados Coletamos
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-2">
                <h5 className="text-xs font-extrabold text-mec-text uppercase tracking-wider text-mec-blue">
                  A. Atletas em Provas
                </h5>
                <p className="text-xs text-mec-muted leading-relaxed">
                  Nome completo, CPF, RG, data de nascimento, gênero, tamanho da camiseta oficial (kit), e-mail, telefone/WhatsApp, dados de pagamento e tempos de prova apurados por chip RFID.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-2">
                <h5 className="text-xs font-extrabold text-mec-text uppercase tracking-wider text-mec-blue">
                  B. Alunos de Assessoria
                </h5>
                <p className="text-xs text-mec-muted leading-relaxed">
                  Nome, CPF, contato, histórico esportivo e <strong>dados de saúde (sensíveis)</strong>: anamnese, atestados de aptidão médica cardiovascular e questionários de prontidão física.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Finalidades */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">3</span>
              Como Usamos os Dados (Finalidades do Tratamento)
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p>• <strong>Gestão de Inscrições:</strong> Confirmação de inscrição, atribuição de número de peito, separação de kit e divulgação de tempos e classificação oficial.</p>
              <p>• <strong>Prescrição de Treinos:</strong> Elaboração de planilhas semanais personalizadas, adequação de ritmo e acompanhamento seguro de volume de corrida.</p>
              <p>• <strong>Operação de Cronometragem:</strong> Processamento de chips RFID, apuração de classificações e emissão de certificados digitais.</p>
              <p>• <strong>Comunicação e Suporte:</strong> Envio de informações sobre provas, retirada de kits e resultados via WhatsApp e e-mail.</p>
              <p>• <strong>Divulgação de Eventos:</strong> Envio de convites para novas corridas de rua (com opção de cancelamento a qualquer momento).</p>
            </div>
          </section>

          {/* 4. Dados Sensíveis e Menores */}
          <section className="space-y-3 bg-mec-blue-surface/40 p-5 rounded-2xl border border-mec-blue/20">
            <h4 className="text-base font-extrabold text-mec-text flex items-center gap-2">
              <Lock className="w-5 h-5 text-mec-blue" />
              Tratamento de Dados Sensíveis e Proteção de Menores
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p>
                <strong>Dados de Saúde (Art. 11 da LGPD):</strong> A coleta de anamnese e atestados médicos de aptidão física baseia-se na <em>Tutela da Saúde e Segurança do Atleta</em> (Art. 11, II, "f") e no <em>Consentimento do Titular</em>, sendo restrita ao acompanhamento seguro das atividades esportivas.
              </p>
              <p>
                <strong>Menores de 18 Anos (Art. 14 da LGPD):</strong> A inscrição de crianças e adolescentes em corridas kids ou juvenis exige, obrigatoriamente, o <strong>consentimento expresso e inequívoco de ao menos um dos pais ou responsável legal</strong>.
              </p>
            </div>
          </section>

          {/* 5. Compartilhamento e WhatsApp */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">5</span>
              Compartilhamento de Dados & Comunicação via WhatsApp
            </h4>
            <p>
              A Mec Assessoria <strong>não comercializa</strong> dados pessoais. O compartilhamento ocorre exclusivamente com:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm">
              <li><strong>WhatsApp (Meta):</strong> Canal de atendimento direto utilizado no site para agilizar inscrições, envio de parciais e dúvidas, com mensagens criptografadas de ponta a ponta.</li>
              <li><strong>Plataformas de Cronometragem Eletrônica:</strong> Para processamento de chip RFID e geração dos rankings de prova.</li>
              <li><strong>Instituições Financeiras:</strong> Para processamento de taxas de inscrição via PIX e cartões.</li>
              <li><strong>Autoridades Públicas:</strong> Mediante determinação judicial ou dever legal.</li>
            </ul>
          </section>

          {/* 6. Direitos do Titular */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">6</span>
              Seus Direitos como Titular (Art. 18 da LGPD)
            </h4>
            <p>
              Você pode, a qualquer momento e sem custos, solicitar:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <span>Confirmação da existência de tratamento</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <span>Acesso aos seus dados pessoais</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <span>Correção de dados incompletos ou inexatos</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-mec-blue flex-shrink-0" />
                <span>Eliminação de dados ou revogação de consentimento</span>
              </div>
            </div>
          </section>

          {/* 7. Cookies */}
          <section className="space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-mec-text flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-mec-blue-surface text-mec-blue flex items-center justify-center text-xs font-extrabold">7</span>
              Política de Cookies
            </h4>
            <p className="text-xs sm:text-sm">
              Utilizamos cookies essenciais para o funcionamento correto da página e cookies analíticos para entender a navegação no calendário e calculadora de pace, aprimorando continuamente a experiência do usuário. Você pode desativá-los nas configurações do seu navegador.
            </p>
          </section>

          {/* 8. Canal de Contato do DPO */}
          <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
            <h4 className="text-sm font-extrabold text-mec-text uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-4 h-4 text-mec-blue" />
              Canal de Contato do Encarregado de Dados (DPO)
            </h4>
            <p className="text-xs text-mec-muted">
              Para exercer qualquer um dos seus direitos da LGPD ou tirar dúvidas sobre esta política, entre em contato diretamente com o nosso Encarregado de Proteção de Dados:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-mec-text">
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
