import React from 'react';
import { X, Award, Download, Printer, CheckCircle2, Trophy, Share2, Medal } from 'lucide-react';

export default function CertificateModal({ result, onClose }) {
  if (!result) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8">
        
        {/* Top Control Bar */}
        <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
            <Award className="w-4 h-4 text-mec-blue" />
            <span>Certificado Digital Oficial Finisher</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Fechar certificado"
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Paper Canvas */}
        <div className="p-8 sm:p-12 bg-gradient-to-b from-white via-[#FAFBFD] to-white relative text-center border-8 border-[#0099FF14] m-4 sm:m-6 rounded-xl">
          
          {/* Certificate Watermark / Header */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-mec-blue text-white flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </div>
            <span className="text-sm font-extrabold text-mec-text tracking-widest uppercase">
              Mec Assessoria Esportiva
            </span>
          </div>

          <div className="text-xs font-extrabold tracking-widest text-mec-blue uppercase mb-6">
            Certificado de Conclusão Oficial
          </div>

          <p className="text-xs sm:text-sm text-mec-subtle mb-4">
            Certificamos com honra que o(a) atleta
          </p>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-mec-text mb-4 border-b-2 border-mec-blue/30 pb-2 inline-block max-w-xl">
            {result.name}
          </h2>

          <p className="text-xs sm:text-sm text-mec-muted max-w-lg mx-auto mb-8 leading-relaxed">
            concluiu com êxito a prova <strong>{result.event}</strong> na distância oficial de <strong>{result.distance}</strong>, registrando as seguintes marcas:
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-[10px] font-bold text-mec-subtle uppercase">Tempo Líquido</div>
              <div className="text-lg sm:text-xl font-extrabold font-mono text-mec-blue">{result.netTime}</div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-[10px] font-bold text-mec-subtle uppercase">Pace Médio</div>
              <div className="text-lg sm:text-xl font-extrabold font-mono text-mec-text">{result.pace}</div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-[10px] font-bold text-mec-subtle uppercase">Classificação Geral</div>
              <div className="text-lg sm:text-xl font-extrabold text-mec-text">{result.overallRank}º Lugar</div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-[10px] font-bold text-mec-subtle uppercase">Cat. ({result.category})</div>
              <div className="text-lg sm:text-xl font-extrabold text-emerald-600">{result.categoryRank}º Lugar</div>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200 text-xs">
            <div className="text-left">
              <div className="font-mono text-[10px] text-mec-subtle">
                Código: <strong className="text-mec-text">{result.certificateId}</strong>
              </div>
              <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3" />
                Cronometragem Oficial Homologada
              </div>
            </div>

            <div className="text-center sm:text-right">
              <div className="font-serif italic font-bold text-sm text-mec-text border-b border-gray-400 pb-1">
                Diretoria Técnica Mec Assessoria
              </div>
              <div className="text-[10px] text-mec-subtle mt-0.5">Arbitragem & Cronometragem Oficial</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
