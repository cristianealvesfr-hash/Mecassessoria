import React, { useState, useRef, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Flame, 
  Tag, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  X,
  Ticket,
  HelpCircle
} from 'lucide-react';
import { UPCOMING_EVENTS, BIOLINK_INSCRICOES_URL } from '../data/mockData';

export default function UpcomingEvents() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const scrollContainerRef = useRef(null);

  const filters = [
    { id: 'all', label: 'Todos os Eventos' },
    { id: '5k-10k', label: '5K & 10K' },
    { id: '21k', label: 'Meia Maratona (21K)' },
    { id: '42k', label: 'Maratona (42K)' },
  ];

  const filteredEvents = UPCOMING_EVENTS.filter(event => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === '5k-10k') return event.distances.includes('5K') || event.distances.includes('10K') || event.distances.includes('6K');
    if (selectedFilter === '21k') return event.distances.includes('21K') || event.distances.includes('18K');
    if (selectedFilter === '42k') return event.distances.includes('42K');
    return true;
  });

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 20) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, filteredEvents]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="proximos-eventos" className="py-12 md:py-24 bg-[#FAFAFC] relative border-y border-gray-200 overflow-hidden">
      {/* Anchor compatível para #eventos */}
      <span id="eventos" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Central Criativo: Biolink Oficial de Inscrições */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#003B73] via-[#0055A5] to-mec-blue p-6 sm:p-10 md:p-12 text-white shadow-xl mb-12 lg:mb-16 border border-white/10 group">
          {/* Luzes e Efeitos de Fundo */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-60 h-60 rounded-full bg-mec-blue-light/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Texto e Benefícios */}
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
                <span>Portal Oficial de Inscrições • Biolink Mec</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Garanta sua vaga nos próximos desafios esportivos
              </h2>

              <p className="text-sm sm:text-base text-blue-50/90 leading-relaxed">
                Central de inscrições online com confirmação instantânea. Escolha sua distância, selecione o tamanho da camiseta e garanta seu chip eletrônico de cronometragem.
              </p>

              {/* Badges de Confiança */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Plataforma Segura</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Confirmação Instantânea</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                  <Ticket className="w-3.5 h-3.5 text-blue-200" />
                  <span>Kits Exclusivos</span>
                </span>
              </div>
            </div>

            {/* Ação Principal: Botão Gigante para o Biolink */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto flex-shrink-0">
              <a
                href={BIOLINK_INSCRICOES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-mec-blue hover:bg-blue-50 text-base font-extrabold shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-center whitespace-nowrap group/btn"
              >
                <span>Acessar Portal de Inscrições</span>
                <ArrowUpRight className="w-5 h-5 text-mec-blue group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>

              <a
                href={BIOLINK_INSCRICOES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white text-center transition-all"
              >
                <span>Já é inscrito? Consulte suas inscrições</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Header do Carrossel de Eventos com Filtros e Setas de Navegação */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-2 border border-mec-blue/20">
              <Calendar className="w-3.5 h-3.5" />
              <span>Calendário Oficial de Corridas</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-mec-text tracking-tight">
              Próximos Eventos Disponíveis
            </h3>
            <p className="text-sm text-mec-muted mt-1">
              Selecione o evento desejado para garantir sua vaga diretamente no Biolink oficial.
            </p>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Corrida anterior"
              className="w-10 h-10 rounded-xl bg-white hover:bg-mec-blue-surface border border-gray-300 hover:border-mec-blue text-mec-text hover:text-mec-blue flex items-center justify-center transition-colors shadow-sm active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Próxima corrida"
              className="w-10 h-10 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white flex items-center justify-center transition-all shadow-md hover:shadow-blue-glow active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filtros de Distância */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-mec-blue text-white shadow-md shadow-mec-blue/20 scale-105'
                  : 'bg-white text-mec-muted hover:text-mec-blue hover:bg-mec-blue-surface border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Carrossel Dinâmico de Cards */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 4000)}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {filteredEvents.map((event) => {
            const spotsPercent = Math.min(100, Math.round(((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100));
            const isAlmostFull = event.spotsLeft <= 50;

            return (
              <div
                key={event.id}
                className="snap-center sm:snap-start flex-shrink-0 w-[295px] sm:w-[350px] md:w-[380px] bg-white rounded-2xl border border-gray-200 hover:border-mec-blue/40 shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Imagem do Evento & Badges */}
                <div className="relative h-48 sm:h-54 overflow-hidden bg-gray-100">
                  <img
                    src={event.image}
                    alt={event.title || event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-mec-blue/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                      {event.badge || event.category}
                    </span>

                    {isAlmostFull && (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/95 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1 shadow-sm animate-pulse">
                        <Flame className="w-3 h-3" />
                        Últimas Vagas
                      </span>
                    )}
                  </div>

                  {/* Distâncias Pill Tags */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
                    {event.distances?.map((dist, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-mec-text font-black text-[10px] sm:text-[11px] shadow-sm"
                      >
                        {dist}
                      </span>
                    ))}
                  </div>

                  {/* Horário da Largada */}
                  {event.time && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                      <Clock className="w-3 h-3 text-mec-blue-light" />
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-mec-subtle">
                      <Calendar className="w-3.5 h-3.5 text-mec-blue flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-mec-subtle">
                      <MapPin className="w-3.5 h-3.5 text-mec-blue flex-shrink-0" />
                      <span className="truncate">{event.location} • {event.city}, {event.state}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-extrabold text-mec-text group-hover:text-mec-blue transition-colors line-clamp-2 pt-1 leading-snug">
                      {event.title || event.name}
                    </h4>

                    {event.kit && (
                      <p className="text-xs text-mec-muted line-clamp-1">
                        <strong className="text-mec-text">Kit:</strong> {event.kit}
                      </p>
                    )}
                  </div>

                  {/* Barra de Progresso de Vagas */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-mec-subtle">Vagas Ocupadas</span>
                      <span className={isAlmostFull ? 'text-amber-600' : 'text-mec-blue'}>
                        {spotsPercent}% ({event.spotsLeft} disponíveis)
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isAlmostFull 
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500' 
                            : 'bg-gradient-to-r from-mec-blue to-mec-blue-light'
                        }`}
                        style={{ width: `${spotsPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Preço e Botões Dinâmicos de Ação */}
                  <div className="pt-2 border-t border-gray-100 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-bold text-mec-subtle tracking-wider">A partir de</span>
                        <span className="text-lg sm:text-xl font-extrabold text-mec-text">{event.price}</span>
                      </div>
                      <button
                        onClick={() => setSelectedEventModal(event)}
                        className="text-xs font-bold text-mec-muted hover:text-mec-blue transition-colors underline underline-offset-2"
                      >
                        Ver Detalhes
                      </button>
                    </div>

                    {/* Botão de Inscrição Direto para o Biolink */}
                    <a
                      href={BIOLINK_INSCRICOES_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-blue-glow transition-all flex items-center justify-center gap-2 group/cta hover:scale-[1.02] active:scale-95 text-center"
                    >
                      <span>Inscreva-se no Biolink</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Dinâmico de Detalhes & Redirecionamento para Inscrição */}
        {selectedEventModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 sm:p-8 relative">
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedEventModal(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Fechar detalhes"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Cabeçalho do Modal */}
              <div className="mb-5 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-2">
                  <Ticket className="w-3.5 h-3.5" />
                  <span>{selectedEventModal.badge || selectedEventModal.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-mec-text">
                  {selectedEventModal.title || selectedEventModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-mec-muted mt-1">
                  {selectedEventModal.date} • {selectedEventModal.city}, {selectedEventModal.state}
                </p>
              </div>

              {/* Foto de Destaque */}
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-5 border border-gray-200">
                <img
                  src={selectedEventModal.image}
                  alt={selectedEventModal.title || selectedEventModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
                  {selectedEventModal.distances?.map((dist) => (
                    <span
                      key={dist}
                      className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-mec-text font-black text-xs shadow-sm"
                    >
                      {dist}
                    </span>
                  ))}
                </div>
              </div>

              {/* Informações Detalhadas */}
              <div className="space-y-3 text-xs sm:text-sm text-mec-muted mb-6">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <MapPin className="w-4 h-4 text-mec-blue flex-shrink-0" />
                  <div>
                    <span className="font-bold text-mec-text block">Local da Largada</span>
                    <span>{selectedEventModal.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <Clock className="w-4 h-4 text-mec-blue flex-shrink-0" />
                  <div>
                    <span className="font-bold text-mec-text block">Horário da Prova</span>
                    <span>Largada às {selectedEventModal.time || '06:00'} (Horário de Brasília)</span>
                  </div>
                </div>

                {selectedEventModal.kit && (
                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold text-mec-text block mb-1">Itens do Kit Oficial:</span>
                    <span>{selectedEventModal.kit}</span>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-mec-blue-surface border border-mec-blue/20 flex items-center justify-between">
                  <span className="font-bold text-mec-text">Valor da Inscrição:</span>
                  <span className="text-base font-black text-mec-blue">{selectedEventModal.price}</span>
                </div>
              </div>

              {/* Ações do Modal */}
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <a
                  href={BIOLINK_INSCRICOES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-sm font-extrabold shadow-lg hover:shadow-blue-glow transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Garantir Vaga no Biolink Oficial</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/5511992168167?text=${encodeURIComponent(`Olá! Tenho dúvidas sobre a inscrição na prova ${selectedEventModal.title || selectedEventModal.name}. Pode me ajudar?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-mec-muted hover:text-mec-blue text-xs font-bold transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Dúvidas sobre o evento? Fale conosco via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
