import React, { useState, useMemo } from 'react';
import { Search, Trophy, Medal, Timer, Clock, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { MOCK_RESULTS } from '../data/mockData';

export default function ResultsPanel({ onOpenCertificate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState(MOCK_RESULTS[0]);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return MOCK_RESULTS;
    const query = searchQuery.toLowerCase().trim();
    return MOCK_RESULTS.filter(
      r => r.name.toLowerCase().includes(query) || r.bib.toLowerCase().includes(query) || r.event.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const currentResult = selectedResult || filteredResults[0] || null;

  return (
    <section id="resultados" className="py-10 md:py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-3 border border-mec-blue/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Cronometragem Eletrônica RFID</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight mb-3">
            Consulta de Resultados Oficiais
          </h2>
          <p className="text-base text-mec-muted">
            Consulte seu tempo bruto, tempo líquido, parciais por km e emita o seu Certificado Digital Finisher.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center shadow-soft-1 rounded-2xl border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:border-mec-blue focus-within:ring-2 focus-within:ring-mec-blue/20 transition-all">
            <Search className="w-5 h-5 text-mec-muted ml-4 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Busque por Nome do Atleta ou Nº de Peito (ex: 1042, Gabriel, Mariana)..."
              className="w-full py-3.5 px-3 bg-transparent text-sm text-mec-text placeholder-mec-muted outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mr-3 text-xs font-bold text-mec-muted hover:text-mec-blue px-2 py-1"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Results Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Athletes (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-mec-subtle px-1">
              Atletas Encontrados ({filteredResults.length})
            </div>

            {filteredResults.length === 0 ? (
              <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200 text-mec-muted text-sm">
                Nenhum resultado localizado para "{searchQuery}". Tente outro número de peito ou nome.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
                {filteredResults.map((item) => {
                  const isSelected = currentResult?.bib === item.bib;
                  return (
                    <button
                      key={item.bib}
                      onClick={() => setSelectedResult(item)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-mec-blue-surface border-mec-blue shadow-sm'
                          : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-mec-blue/30'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-mec-blue text-white">
                            #{item.bib}
                          </span>
                          <span className="text-sm font-extrabold text-mec-text">
                            {item.name}
                          </span>
                        </div>
                        <div className="text-xs text-mec-muted line-clamp-1">
                          {item.event}
                        </div>
                        <div className="text-xs font-semibold text-mec-blue flex items-center gap-2 pt-0.5">
                          <span>{item.distance}</span>
                          <span>•</span>
                          <span>{item.netTime}</span>
                          <span>•</span>
                          <span>{item.pace}</span>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-mec-blue' : 'text-gray-300'}`} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Selected Athlete Details Card (8 cols) */}
          <div className="lg:col-span-8">
            {currentResult ? (
              <div className="bg-[#FAFAFC] rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-soft-1 space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-extrabold px-2.5 py-1 rounded-lg bg-mec-blue text-white">
                        Peito #{currentResult.bib}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {currentResult.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-mec-text pt-1">
                      {currentResult.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-mec-muted font-medium">
                      {currentResult.event} • Distância: <strong>{currentResult.distance}</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenCertificate(currentResult)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-blue-glow transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    <Award className="w-4 h-4" />
                    <span>Emitir Certificado Digital</span>
                  </button>
                </div>

                {/* Metrics 4-Boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[11px] font-bold text-mec-subtle uppercase flex items-center gap-1 mb-1">
                      <Timer className="w-3.5 h-3.5 text-mec-blue" />
                      Tempo Líquido
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-mec-text font-mono">
                      {currentResult.netTime}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[11px] font-bold text-mec-subtle uppercase flex items-center gap-1 mb-1">
                      <Clock className="w-3.5 h-3.5 text-mec-blue" />
                      Tempo Bruto
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-mec-muted font-mono">
                      {currentResult.grossTime}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[11px] font-bold text-mec-subtle uppercase flex items-center gap-1 mb-1">
                      <Medal className="w-3.5 h-3.5 text-mec-blue" />
                      Ritmo (Pace)
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-mec-blue font-mono">
                      {currentResult.pace}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[11px] font-bold text-mec-subtle uppercase flex items-center gap-1 mb-1">
                      <Trophy className="w-3.5 h-3.5 text-mec-blue" />
                      Classificação
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-emerald-600">
                      {currentResult.overallRank}º Geral
                    </div>
                    <div className="text-[10px] text-mec-subtle">
                      {currentResult.categoryRank}º na Cat. ({currentResult.category})
                    </div>
                  </div>
                </div>

                {/* Splits / Parciais Table */}
                {currentResult.splits && currentResult.splits.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-mec-subtle">
                      Parciais Oficiais do Percurso (Splits)
                    </div>
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                      <div className="grid grid-cols-3 bg-gray-50 px-4 py-2.5 text-xs font-extrabold text-mec-text uppercase tracking-wider border-b border-gray-200">
                        <div>Ponto / KM</div>
                        <div className="text-center">Tempo Acumulado</div>
                        <div className="text-right">Ritmo Parcial</div>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {currentResult.splits.map((split, idx) => (
                          <div key={idx} className="grid grid-cols-3 px-4 py-3 text-xs font-semibold text-mec-muted">
                            <div className="text-mec-text font-bold">{split.km}</div>
                            <div className="text-center font-mono">{split.time}</div>
                            <div className="text-right font-mono text-mec-blue font-bold">{split.pace} min/km</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ) : null}
          </div>

        </div>

      </div>
    </section>
  );
}
