import React, { useState } from 'react';
import { Search, Trophy, Timer, Award, Zap, FileText, CheckCircle2, ChevronRight, AlertCircle, Share2, Sparkles } from 'lucide-react';
import { MOCK_RESULTS } from '../data/mockData';

export default function ResultsPanel({ onOpenCertificate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResult, setSelectedResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const cleanTerm = searchTerm.trim().toLowerCase();
    if (!cleanTerm) return;

    const found = MOCK_RESULTS.find(
      r => r.bib.toLowerCase() === cleanTerm || r.name.toLowerCase().includes(cleanTerm)
    );

    setSelectedResult(found || null);
    setHasSearched(true);
  };

  const handleQuickSelect = (bib) => {
    setSearchTerm(bib);
    const found = MOCK_RESULTS.find(r => r.bib === bib);
    setSelectedResult(found || null);
    setHasSearched(true);
  };

  return (
    <section id="resultados" className="py-10 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-3 border border-mec-blue/20">
            <Search className="w-3.5 h-3.5 text-mec-blue" />
            <span>Pós-Prova & Cronometragem Oficial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight mb-3">
            Painel Oficial de Resultados
          </h2>
          <p className="text-sm sm:text-base text-mec-muted">
            Consulte seu tempo bruto, tempo líquido oficial por chip, parciais por quilômetro e emita seu Certificado Digital Finisher.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl border-2 border-gray-200 focus-within:border-mec-blue shadow-soft-1 transition-colors">
            <div className="relative flex-1 flex items-center pl-3">
              <Search className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Digite seu Número de Peito (ex: 1042) ou Nome..."
                className="w-full text-sm font-semibold text-mec-text placeholder-gray-400 bg-transparent border-none outline-none py-2"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-sm font-bold shadow-sm hover:shadow-blue-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Consultar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Test Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-mec-subtle font-semibold">Exemplos de peito para testar:</span>
            <button
              type="button"
              onClick={() => handleQuickSelect('1042')}
              className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-mec-blue-surface hover:text-mec-blue text-mec-muted font-bold transition-colors cursor-pointer"
            >
              #1042
            </button>
            <button
              type="button"
              onClick={() => handleQuickSelect('2085')}
              className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-mec-blue-surface hover:text-mec-blue text-mec-muted font-bold transition-colors cursor-pointer"
            >
              #2085
            </button>
            <button
              type="button"
              onClick={() => handleQuickSelect('3104')}
              className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-mec-blue-surface hover:text-mec-blue text-mec-muted font-bold transition-colors cursor-pointer"
            >
              #3104
            </button>
            <button
              type="button"
              onClick={() => handleQuickSelect('4501')}
              className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-mec-blue-surface hover:text-mec-blue text-mec-muted font-bold transition-colors cursor-pointer"
            >
              #4501
            </button>
          </div>
        </div>

        {/* Results Display Area */}
        {selectedResult ? (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-soft-2 overflow-hidden animate-fade-in">
            {/* Result Header Top Bar */}
            <div className="bg-gradient-to-r from-mec-blue to-[#0077cc] text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider">
                    {selectedResult.distance}
                  </span>
                  <span className="text-xs font-semibold text-white/80">
                    Número de Peito: <strong className="text-white">#{selectedResult.bib}</strong>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedResult.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1">
                  {selectedResult.event}
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onOpenCertificate(selectedResult)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-mec-blue hover:bg-gray-50 text-xs sm:text-sm font-extrabold shadow-sm flex items-center justify-center gap-2 transition-transform hover:scale-105 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-mec-blue" />
                  <span>Certificado Digital</span>
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <div className="text-[11px] font-bold text-mec-subtle uppercase mb-1">Tempo Líquido (Chip)</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-mec-blue font-mono">{selectedResult.netTime}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <div className="text-[11px] font-bold text-mec-subtle uppercase mb-1">Pace Médio</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-mec-text font-mono">{selectedResult.pace}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <div className="text-[11px] font-bold text-mec-subtle uppercase mb-1">Classificação Geral</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-mec-text">{selectedResult.overallRank}º Lugar</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                  <div className="text-[11px] font-bold text-mec-subtle uppercase mb-1">Cat. ({selectedResult.category})</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-600">{selectedResult.categoryRank}º Lugar</div>
                </div>
              </div>

              {/* Splits / Control points */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-mec-subtle uppercase tracking-wider flex items-center gap-2">
                  <Timer className="w-4 h-4 text-mec-blue" />
                  <span>Parciais por Ponto de Controle (Split Times)</span>
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-gray-50 text-mec-subtle font-bold border-b border-gray-200">
                      <tr>
                        <th className="py-2.5 px-3">Ponto / KM</th>
                        <th className="py-2.5 px-3">Tempo Acumulado</th>
                        <th className="py-2.5 px-3">Pace Parcial</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium">
                      {selectedResult.splits.map((split, sIdx) => (
                        <tr key={sIdx} className="hover:bg-gray-50">
                          <td className="py-2 px-3 font-semibold text-mec-text flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-mec-blue"></span>
                            {split.point}
                          </td>
                          <td className="py-2 px-3 font-mono text-mec-muted">{split.time}</td>
                          <td className="py-2 px-3 font-mono text-mec-blue font-bold">{split.pace}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer info inside result */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mec-subtle">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Homologado por Mec Assessoria • Cronometragem Eletrônica RFID</span>
                </div>
                <div className="font-mono">
                  Código de Autenticidade: {selectedResult.certificateId}
                </div>
              </div>

            </div>
          </div>
        ) : hasSearched ? (
          <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center animate-fade-in">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-mec-text mb-1">Nenhum resultado encontrado</h4>
            <p className="text-xs text-mec-muted mb-4">
              Verifique se o número de peito está correto ou utilize os botões de exemplo acima.
            </p>
            <button
              onClick={() => handleQuickSelect('1042')}
              className="px-4 py-2 rounded-xl bg-mec-blue text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              Testar com Número #1042
            </button>
          </div>
        ) : (
          /* Empty Initial State - Clean Prompt */
          <div className="max-w-md mx-auto bg-[#F8F9FA] border border-gray-200 rounded-2xl p-8 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-mec-blue-surface text-mec-blue flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6" />
            </div>
            <h4 className="text-base font-extrabold text-mec-text">
              Consulte seu Resultado Oficial
            </h4>
            <p className="text-xs text-mec-muted leading-relaxed">
              Digite seu número de peito ou clique em um dos exemplos rápidos acima para visualizar seus tempos e emitir seu Certificado Digital Finisher.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
