import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Camera, 
  CheckCircle2, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  X, 
  ChevronRight, 
  Search,
  Timer
} from 'lucide-react';
import { PAST_EVENTS } from '../data/mockData';

export default function PastEvents() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedGalleryEvent, setSelectedGalleryEvent] = useState(null);

  const categories = ['Todos', 'Corrida de Rua', 'Meia Maratona', 'Noturna', 'Trail Run'];

  const filteredEvents = activeCategory === 'Todos'
    ? PAST_EVENTS
    : PAST_EVENTS.filter(event => event.category === activeCategory);

  const handleOpenResults = () => {
    const resultsSection = document.getElementById('resultados');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="realizados" className="py-12 md:py-20 bg-[#F8F9FA] relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Histórico de Sucesso</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight mb-3">
            Eventos Realizados
          </h2>
          <p className="text-base text-mec-muted leading-relaxed">
            Reviva as emoções das provas organizadas e cronometradas pela Mec Assessoria. Confira as fotos oficiais e acesse os resultados de cada edição.
          </p>
        </div>

        {/* Micro Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-soft-1 text-center">
            <span className="block text-xl sm:text-2xl font-black text-mec-blue">+50</span>
            <span className="text-[11px] sm:text-xs font-semibold text-mec-muted">Provas Realizadas</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-soft-1 text-center">
            <span className="block text-xl sm:text-2xl font-black text-mec-blue">+45.000</span>
            <span className="text-[11px] sm:text-xs font-semibold text-mec-muted">Atletas Concluintes</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-soft-1 text-center">
            <span className="block text-xl sm:text-2xl font-black text-emerald-600">100%</span>
            <span className="text-[11px] sm:text-xs font-semibold text-mec-muted">Precisão RFID</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-soft-1 text-center">
            <span className="block text-xl sm:text-2xl font-black text-mec-text">+15.000</span>
            <span className="text-[11px] sm:text-xs font-semibold text-mec-muted">Fotos Registradas</span>
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-mec-blue text-white shadow-md shadow-mec-blue/20 scale-105'
                  : 'bg-white text-mec-muted hover:text-mec-blue border border-gray-200 hover:border-mec-blue/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Cards de Eventos Realizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 flex flex-col group"
            >
              {/* Imagem do Evento */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge Realizado */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-sm text-white text-[11px] font-bold shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Prova Concluída</span>
                </div>

                {/* Badge Fotos */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold shadow-md">
                  <Camera className="w-3.5 h-3.5" />
                  <span>{event.photosCount}</span>
                </div>

                {/* Info sobre a foto: Data e Distâncias */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-mec-blue-light" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {event.distances.map((dist) => (
                      <span
                        key={dist}
                        className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm font-bold text-[10px]"
                      >
                        {dist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-mec-blue">
                      {event.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-mec-subtle font-semibold">
                      <Users className="w-3.5 h-3.5 text-mec-blue" />
                      <span>{event.participants} atletas</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-mec-text mb-2 group-hover:text-mec-blue transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-mec-muted mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-mec-subtle flex-shrink-0" />
                    <span>{event.location} • {event.city}, {event.state}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-mec-muted leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {event.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-[11px] font-semibold text-mec-muted"
                      >
                        <Sparkles className="w-3 h-3 text-mec-blue" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                  {/* Botão Ver Fotos */}
                  <button
                    onClick={() => setSelectedGalleryEvent(event)}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-mec-text hover:text-mec-blue text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
                  >
                    <Camera className="w-4 h-4 text-mec-blue" />
                    <span>Galeria de Fotos</span>
                  </button>

                  {/* Botão Ver Resultados */}
                  <button
                    onClick={handleOpenResults}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-blue-glow active:scale-95"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Ver Resultados</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Galeria de Fotos */}
        {selectedGalleryEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 sm:p-8 relative">
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedGalleryEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Fechar galeria"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-mec-blue uppercase tracking-wider mb-1">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Álbum Oficial</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-mec-text">
                  {selectedGalleryEvent.title}
                </h3>
                <p className="text-xs sm:text-sm text-mec-muted">
                  {selectedGalleryEvent.date} • {selectedGalleryEvent.location} ({selectedGalleryEvent.city})
                </p>
              </div>

              {/* Grid de Fotos no Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {selectedGalleryEvent.gallery?.map((imgUrl, idx) => (
                  <div key={idx} className="relative h-48 rounded-xl overflow-hidden border border-gray-200 group">
                    <img
                      src={imgUrl}
                      alt={`Foto ${idx + 1} - ${selectedGalleryEvent.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Ação no Modal: Ver mais no Instagram Oficial */}
              <div className="p-4 rounded-xl bg-mec-blue-surface border border-mec-blue/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-mec-text">
                    Gostaria de ver todas as {selectedGalleryEvent.photosCount}?
                  </p>
                  <p className="text-xs text-mec-muted">
                    Confira a cobertura completa, vídeos dos pórticos e momentos dos atletas no nosso Instagram.
                  </p>
                </div>
                <a
                  href={selectedGalleryEvent.galleryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-xs font-bold transition-all shadow-sm whitespace-nowrap"
                >
                  <span>Abrir Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
