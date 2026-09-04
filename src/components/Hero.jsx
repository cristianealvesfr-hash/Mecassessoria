import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Activity, Zap, Timer, Award, TrendingUp, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenEventModal }) {
  const [seconds, setSeconds] = useState(38 * 60 + 45); // 38:45
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <section id="hero" className="relative pt-24 pb-10 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-mec-blue-surface/40 to-mec-blue-tint">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#0099FF15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-mec-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-mec-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-mec-blue-surface border border-mec-blue/30 text-mec-blue text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span>Assessoria Esportiva • Eventos Oficiais</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-mec-text leading-[1.15] tracking-tight mb-6">
              Transforme sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-mec-blue to-[#0077cc]">performance</span> na Corrida de Rua
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-mec-muted font-normal leading-relaxed max-w-2xl mb-8">
              Acompanhamento técnico individualizado, organização de provas com chancela oficial e a mais alta precisão em cronometragem eletrônica para você e seu evento superarem todos os limites.
            </p>

            {/* CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#proximos-eventos"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-mec-blue hover:bg-mec-blue-light rounded-xl shadow-md hover:shadow-blue-glow hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span>Próximos Eventos</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#assessoria"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-mec-blue border-2 border-mec-blue hover:bg-mec-blue hover:text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Activity className="w-5 h-5" />
                <span>Conheça a Assessoria</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full pt-4 border-t border-gray-200/80">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-mec-blue flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-mec-text">Planilhas Personalizadas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-mec-blue flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-mec-text">Infraestrutura Completa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-mec-blue flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-mec-text">Cronometragem RFID 99.8%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Running Dashboard Mockup */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-mec-blue/20 to-mec-blue-light/10 rounded-2xl filter blur-xl transform -rotate-1 scale-105"></div>
              
              {/* Main Glass Card */}
              <div className="relative bg-white border border-gray-100 rounded-2xl shadow-soft-2 p-6 sm:p-7 space-y-6">
                
                {/* Header of Mockup Card */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mec-blue-surface text-mec-blue flex items-center justify-center font-bold">
                      <Timer className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-mec-blue uppercase tracking-wider">Live Race Tracker</div>
                      <div className="text-sm font-bold text-mec-text">MEC Sunset Run 2026</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    Ao Vivo
                  </span>
                </div>

                {/* Digital Stopwatch & Pace Display */}
                <div className="bg-gradient-to-br from-gray-900 to-mec-text text-white p-5 rounded-xl shadow-inner">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-1">
                    <span>TEMPO OFICIAL CHIP</span>
                    <span>DISTÂNCIA 10.0 KM</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-wider font-mono text-white mb-4">
                    00:{formatTime(seconds)}<span className="text-mec-blue text-2xl">.4</span>
                  </div>
                  
                  {/* Realtime Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-800 text-center">
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[11px] text-gray-400 font-medium">Pace Médio</div>
                      <div className="text-base font-bold text-mec-blue">3:58 <span className="text-[10px] text-gray-400">/km</span></div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[11px] text-gray-400 font-medium">Frequência</div>
                      <div className="text-base font-bold text-rose-400">164 <span className="text-[10px] text-gray-400">bpm</span></div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-[11px] text-gray-400 font-medium">Velocidade</div>
                      <div className="text-base font-bold text-emerald-400">15.1 <span className="text-[10px] text-gray-400">km/h</span></div>
                    </div>
                  </div>
                </div>

                {/* Prova em Andamento - Progresso */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-mec-text">
                    <span>Progresso do Percurso (Km 9.6 de 10k)</span>
                    <span className="text-mec-blue">96%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-gradient-to-r from-mec-blue to-mec-blue-light rounded-full w-[96%] transition-all duration-500"></div>
                  </div>
                </div>

                {/* Athlete placement badge */}
                <div className="flex items-center justify-between p-3.5 bg-mec-blue-surface rounded-xl border border-mec-blue/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-mec-blue text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                      4º
                    </div>
                    <div>
                      <div className="text-xs font-bold text-mec-text">Gabriel Silva (Peito #1042)</div>
                      <div className="text-[11px] text-mec-muted font-medium">1º Colocado na Categoria M30-34</div>
                    </div>
                  </div>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>

                {/* CTA inside card */}
                <div className="pt-1">
                  <a
                    href="#resultados"
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-mec-blue-surface border border-gray-200 hover:border-mec-blue/30 text-xs font-bold text-mec-text hover:text-mec-blue flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Consultar Resultados por Número de Peito</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
