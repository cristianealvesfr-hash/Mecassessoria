import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight, Users, Flame, Tag, ArrowUpRight, CheckCircle } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/mockData';

export default function EventsCarousel({ onSelectEvent }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
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

  // Auto-scroll logic for mobile & desktop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 15) {
          // Reset to start smoothly
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll next slide width (~320px)
          scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, filteredEvents]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="eventos" className="py-10 md:py-24 bg-[#FAFAFC] relative border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Ticket Sports aesthetic and Navigation Arrows for both Mobile & Desktop */}
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3 border border-mec-blue/20">
              <Calendar className="w-3.5 h-3.5 text-mec-blue" />
              <span>Calendário Oficial de Corridas</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight">
              Próximos Eventos & Desafios
            </h2>
            <p className="text-xs sm:text-base text-mec-muted mt-1">
              Escolha sua distância e garanta sua vaga diretamente no WhatsApp.
            </p>
          </div>

          {/* Navigation Arrows for Mobile & Desktop */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Voltar corrida anterior"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white hover:bg-mec-blue-surface border border-gray-200 hover:border-mec-blue text-mec-text hover:text-mec-blue flex items-center justify-center transition-colors shadow-sm active:scale-90"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Avançar próxima corrida"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white flex items-center justify-center transition-all shadow-md hover:shadow-blue-glow active:scale-90"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-5">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-mec-blue text-white shadow-sm'
                  : 'bg-white text-mec-muted hover:text-mec-blue hover:bg-mec-blue-surface border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Automatic & Touch Swipe Carousel */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 4000)}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {filteredEvents.map((event) => {
            const spotsPercent = Math.min(100, Math.round(((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100));
            const isAlmostFull = event.spotsLeft <= 30;

            const whatsappEventUrl = `https://wa.me/5511992168167?text=${encodeURIComponent(`Olá! Gostaria de me inscrever na corrida ${event.name} (${event.city} - ${event.date}). Como faço para garantir minha vaga?`)}`;

            return (
              <div
                key={event.id}
                className="snap-center sm:snap-start flex-shrink-0 w-[285px] sm:w-[340px] md:w-[365px] bg-white rounded-2xl border border-gray-100 hover:border-mec-blue/30 shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Event Image & Badges */}
                <div className="relative h-44 sm:h-52 overflow-hidden bg-gray-100">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-mec-blue/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                      {event.tag}
                    </span>

                    {isAlmostFull && (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold flex items-center gap-1 shadow-sm">
                        <Flame className="w-3 h-3 animate-pulse" />
                        Últimas Vagas
                      </span>
                    )}
                  </div>

                  {/* Distances Pill Tags */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
                    {event.distances.map((dist, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-mec-text font-black text-[10px] sm:text-[11px] shadow-sm"
                      >
                        {dist}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-mec-subtle">
                      <Calendar className="w-3.5 h-3.5 text-mec-blue flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-mec-subtle">
                      <MapPin className="w-3.5 h-3.5 text-mec-blue flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-mec-text group-hover:text-mec-blue transition-colors line-clamp-2 pt-1 leading-snug">
                      {event.name}
                    </h3>
                  </div>

                  {/* Spots progress bar */}
                  <div className="space-y-1 pt-1.5 border-t border-gray-100">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-mec-subtle">Inscrições confirmadas</span>
                      <span className={isAlmostFull ? 'text-amber-600' : 'text-mec-blue'}>
                        {spotsPercent}% ({event.spotsLeft} vagas)
                      </span>
                    </div>
                    <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isAlmostFull ? 'bg-gradient-to-r from-amber-400 to-amber-500' : 'bg-gradient-to-r from-mec-blue to-mec-blue-light'
                        }`}
                        style={{ width: `${spotsPercent}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Pricing & Direct WhatsApp Action */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold text-mec-subtle tracking-wider">A partir de</span>
                      <span className="text-base sm:text-xl font-extrabold text-mec-text">{event.price}</span>
                    </div>

                    <a
                      href={whatsappEventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3.5 sm:py-2.5 sm:px-4 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-blue-glow transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
                    >
                      <span>Inscreva-se</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
