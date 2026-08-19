import React, { useState } from 'react';
import { X, User, Lock, Phone, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

export default function AthleteModal({ onClose, onOpenCertificate }) {
  const [cpfOrEmail, setCpfOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!cpfOrEmail) {
      setErrorMsg('Por favor, informe seu CPF ou E-mail cadastrado.');
      return;
    }

    // Example validation
    if (cpfOrEmail.includes('gabriel') || cpfOrEmail.includes('123')) {
      setIsLogged(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Cadastro não localizado. Para solicitar seu acesso ou receber suas planilhas, fale com nossa equipe no WhatsApp.');
    }
  };

  const sampleAthlete = {
    name: "Gabriel Silva Santos",
    email: "gabriel@email.com",
    cpf: "123.456.789-00",
    club: "Mec Assessoria Esportiva",
    upcomingRace: {
      name: "MEC Sunset Run 2026",
      date: "14 de Novembro, 2026",
      distance: "10K",
      status: "Inscrição Confirmada • Kit Pendente Retirada",
      bib: "1042",
      kitPickup: "Arena Oficial do Evento (Ponto de Retirada Oficial)"
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-mec-blue to-[#0077cc] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-extrabold tracking-wider text-white/80">
                Acesso Restrito
              </div>
              <h3 className="text-lg font-extrabold text-white">
                Área do Atleta & Aluno
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar modal do atleta"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5">
          
          {!isLogged ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-center space-y-1">
                <h4 className="text-base font-extrabold text-mec-text">
                  Acesse suas Inscrições e Treinos
                </h4>
                <p className="text-xs text-mec-muted">
                  Área exclusiva para alunos da assessoria esportiva e atletas inscritos em provas oficiais.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 leading-snug">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-mec-text mb-1">
                    CPF ou E-mail do Atleta *
                  </label>
                  <input
                    type="text"
                    required
                    value={cpfOrEmail}
                    onChange={(e) => {
                      setCpfOrEmail(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="Digite seu CPF ou e-mail"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-mec-text focus:border-mec-blue outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-mec-text mb-1">
                    Senha de Acesso
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-mec-text focus:border-mec-blue outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-blue-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Entrar no Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 border-t border-gray-100 text-center space-y-2">
                <p className="text-xs text-mec-subtle">
                  Ainda não tem acesso ou esqueceu sua senha?
                </p>
                <a
                  href="https://wa.me/5511992168167?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20meu%20acesso%20%C3%A0%20%C3%81rea%20do%20Atleta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Solicitar Acesso via WhatsApp</span>
                </a>
              </div>
            </form>
          ) : (
            /* Logged View */
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-mec-text">{sampleAthlete.name}</h4>
                  <p className="text-xs text-mec-subtle">{sampleAthlete.email}</p>
                </div>
                <button
                  onClick={() => setIsLogged(false)}
                  className="text-xs font-bold text-red-600 hover:underline"
                >
                  Sair
                </button>
              </div>

              <div className="p-4 bg-mec-blue-surface/40 rounded-xl border border-mec-blue/20 space-y-2 text-xs">
                <span className="font-extrabold text-mec-blue uppercase tracking-wider text-[10px]">
                  Próxima Prova
                </span>
                <div className="font-bold text-mec-text text-sm">
                  {sampleAthlete.upcomingRace.name}
                </div>
                <div className="text-mec-muted">
                  Data: {sampleAthlete.upcomingRace.date} • Peito: <strong>#{sampleAthlete.upcomingRace.bib}</strong>
                </div>
                <div className="text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{sampleAthlete.upcomingRace.status}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-mec-subtle pt-2 border-t border-gray-100">
            <ShieldCheck className="w-3.5 h-3.5 text-mec-blue" />
            <span>Ambiente Protegido e Criptografado (LGPD)</span>
          </div>

        </div>

      </div>
    </div>
  );
}
