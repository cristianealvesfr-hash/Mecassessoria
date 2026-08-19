import React, { useState, useMemo } from 'react';
import { Calculator, Clock, Zap, Activity, CheckCircle2, Send, Flame, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PaceCalculator() {
  const [distanceKm, setDistanceKm] = useState(10); // 5, 10, 21.0975, 42.195
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(45);
  const [seconds, setSeconds] = useState(0);

  // Lead capture state
  const [athleteName, setAthleteName] = useState('');
  const [athleteEmail, setAthleteEmail] = useState('');
  const [athletePhone, setAthletePhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const presetDistances = [
    { label: '5 KM', km: 5 },
    { label: '10 KM', km: 10 },
    { label: 'Meia Maratona (21.1K)', km: 21.0975 },
    { label: 'Maratona (42.2K)', km: 42.195 },
  ];

  // Calculation memo
  const results = useMemo(() => {
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    if (totalSeconds <= 0 || distanceKm <= 0) {
      return { paceFormatted: '--:--', speed: '0.0', totalTimeFormatted: '00:00:00', splits: [] };
    }

    const paceInSeconds = totalSeconds / distanceKm;
    const paceMin = Math.floor(paceInSeconds / 60);
    const paceSec = Math.round(paceInSeconds % 60);
    const paceFormatted = `${paceMin}:${String(paceSec).padStart(2, '0')}`;

    const speedKmh = ((distanceKm / (totalSeconds / 3600))).toFixed(1);

    const formatHHMMSS = (sec) => {
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = Math.round(sec % 60);
      return `${h > 0 ? String(h).padStart(2, '0') + ':' : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    // Calculate splits
    const splits = [];
    const step = distanceKm > 21 ? 10 : (distanceKm > 5 ? 2.5 : 1);
    for (let currentKm = step; currentKm <= distanceKm; currentKm += step) {
      splits.push({
        km: `${currentKm.toFixed(1)} km`,
        time: formatHHMMSS(currentKm * paceInSeconds),
      });
    }
    // ensure last is total
    if (splits[splits.length - 1]?.km !== `${distanceKm.toFixed(1)} km`) {
      splits.push({
        km: `${distanceKm.toFixed(1)} km (Meta)`,
        time: formatHHMMSS(totalSeconds),
      });
    }

    return {
      paceFormatted,
      speed: speedKmh,
      totalTimeFormatted: formatHHMMSS(totalSeconds),
      splits: splits.slice(0, 5),
    };
  }, [distanceKm, hours, minutes, seconds]);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!athleteName) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setIsSubmitted(true);

    const message = `Olá! Meu nome é ${athleteName}. Calculei meu ritmo na Calculadora de Pace da MEC: meta de ${results.paceFormatted} min/km para a distância de ${distanceKm.toFixed(1)} km (Tempo: ${results.totalTimeFormatted}). Gostaria de receber minha planilha de treinos personalizada!`;
    const whatsappUrl = `https://wa.me/5511992168167?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="calculadora" className="py-10 md:py-24 bg-[#F8F9FA] relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-3 border border-mec-blue/20">
            <Calculator className="w-3.5 h-3.5 text-mec-blue" />
            <span>Ferramenta Interativa Gratuita</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight mb-3">
            Calculadora de Pace & Projeção de Prova
          </h2>
          <p className="text-base text-mec-muted">
            Descubra o ritmo exato por quilômetro necessário para conquistar seu recorde pessoal (RP) nos 5K, 10K, 21K ou 42K.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Interactive Input Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-soft-1 p-6 sm:p-8 space-y-6">
            
            {/* 1. Distance Selector */}
            <div>
              <label className="block text-xs font-extrabold text-mec-subtle uppercase tracking-wider mb-3">
                1. Escolha a Distância da Prova
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {presetDistances.map((preset) => (
                  <button
                    key={preset.km}
                    type="button"
                    onClick={() => {
                      setDistanceKm(preset.km);
                      if (preset.km === 5) { setHours(0); setMinutes(25); setSeconds(0); }
                      else if (preset.km === 10) { setHours(0); setMinutes(48); setSeconds(0); }
                      else if (preset.km > 20 && preset.km < 30) { setHours(1); setMinutes(45); setSeconds(0); }
                      else if (preset.km > 40) { setHours(3); setMinutes(45); setSeconds(0); }
                    }}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                      distanceKm === preset.km
                        ? 'bg-mec-blue text-white shadow-sm scale-100 ring-2 ring-mec-blue/20'
                        : 'bg-gray-50 text-mec-text hover:bg-mec-blue-surface hover:text-mec-blue border border-gray-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Target Time Selector */}
            <div>
              <label className="block text-xs font-extrabold text-mec-subtle uppercase tracking-wider mb-3">
                2. Tempo Alvo Desejado (Horas : Minutos : Segundos)
              </label>
              
              <div className="grid grid-cols-3 gap-3 max-w-md">
                <div>
                  <span className="text-[11px] font-bold text-mec-subtle block mb-1">Horas (h)</span>
                  <select
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-mec-text focus:border-mec-blue focus:ring-1 focus:ring-mec-blue outline-none"
                  >
                    {[0, 1, 2, 3, 4, 5, 6].map(h => (
                      <option key={h} value={h}>{String(h).padStart(2, '0')} h</option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-mec-subtle block mb-1">Minutos (min)</span>
                  <select
                    value={minutes}
                    onChange={(e) => setMinutes(Number(e.target.value))}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-mec-text focus:border-mec-blue focus:ring-1 focus:ring-mec-blue outline-none"
                  >
                    {Array.from({ length: 60 }, (_, i) => i).map(m => (
                      <option key={m} value={m}>{String(m).padStart(2, '0')} min</option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-mec-subtle block mb-1">Segundos (s)</span>
                  <select
                    value={seconds}
                    onChange={(e) => setSeconds(Number(e.target.value))}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-mec-text focus:border-mec-blue focus:ring-1 focus:ring-mec-blue outline-none"
                  >
                    {Array.from({ length: 12 }, (_, i) => i * 5).map(s => (
                      <option key={s} value={s}>{String(s).padStart(2, '0')} s</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Live Result Summary Box */}
            <div className="bg-gradient-to-br from-mec-blue to-[#0077cc] text-white p-6 rounded-2xl shadow-soft-2 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="text-xs uppercase font-extrabold tracking-wider text-white/80 mb-1">
                  Ritmo Necessário (Pace Médio)
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-white">
                  {results.paceFormatted} <span className="text-xl font-normal text-white/90">min/km</span>
                </div>
                <div className="text-xs text-white/80 mt-1">
                  Velocidade média correspondente: <strong className="text-white">{results.speed} km/h</strong>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm p-3.5 rounded-xl border border-white/20 text-center min-w-[140px]">
                <div className="text-[11px] uppercase font-bold text-white/80 mb-0.5">Tempo Final</div>
                <div className="text-xl font-extrabold font-mono text-white">
                  {results.totalTimeFormatted}
                </div>
                <div className="text-[10px] text-white/80 mt-0.5">{distanceKm.toFixed(1)} km totais</div>
              </div>
            </div>

            {/* Split projections */}
            <div>
              <div className="text-xs font-extrabold text-mec-subtle uppercase tracking-wider mb-2">
                Parciais Projetadas para Manter o Ritmo:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {results.splits.map((s, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 p-2.5 rounded-xl text-center">
                    <div className="text-[11px] font-bold text-mec-subtle">{s.km}</div>
                    <div className="text-sm font-extrabold font-mono text-mec-blue">{s.time}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right / Lead Capture Box */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-soft-1 p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plano de Treino Sob Medida</span>
            </div>

            <h3 className="text-xl font-extrabold text-mec-text mb-2">
              Quer atingir o Pace de {results.paceFormatted} min/km?
            </h3>
            <p className="text-xs sm:text-sm text-mec-muted mb-6 leading-relaxed">
              Deixe seus dados para receber uma planilha de treinos estruturada e uma avaliação gratuita com os treinadores da <strong>Mec Assessoria Esportiva</strong>.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-base font-extrabold text-emerald-800">
                  Solicitação Enviada com Sucesso!
                </h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Redirecionamos para o WhatsApp da equipe técnica da Mec Assessoria para enviar sua planilha de treinos para o pace de <strong>{results.paceFormatted} min/km</strong>.
                </p>

                <a
                  href={`https://wa.me/5511992168167?text=${encodeURIComponent(`Olá! Meu nome é ${athleteName}. Calculei meu ritmo na Calculadora de Pace da MEC: meta de ${results.paceFormatted} min/km para a distância de ${distanceKm.toFixed(1)} km (Tempo: ${results.totalTimeFormatted}). Gostaria de receber minha planilha de treinos personalizada!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Abrir Conversa no WhatsApp (11) 99216-8167</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold text-emerald-800 underline hover:no-underline pt-1 block mx-auto"
                >
                  Fazer outro cálculo
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-mec-text mb-1">Seu Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={athleteName}
                    onChange={(e) => setAthleteName(e.target.value)}
                    placeholder="Ex: Gabriel Silva"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-mec-text focus:border-mec-blue focus:ring-1 focus:ring-mec-blue outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-mec-text mb-1">Seu Melhor E-mail *</label>
                  <input
                    type="email"
                    required
                    value={athleteEmail}
                    onChange={(e) => setAthleteEmail(e.target.value)}
                    placeholder="Ex: gabriel@email.com"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-mec-text focus:border-mec-blue focus:ring-1 focus:ring-mec-blue outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-mec-text mb-1">WhatsApp com DDD *</label>
                  <input
                    type="tel"
                    required
                    value={athletePhone}
                    onChange={(e) => setAthletePhone(e.target.value)}
                    placeholder="(11) 99216-8167"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-mec-text focus:border-mec-blue focus:ring-1 focus:ring-mec-blue outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white text-sm font-bold shadow-md hover:shadow-blue-glow transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Quero Minha Planilha de Pace</span>
                </button>

                <p className="text-[11px] text-mec-subtle text-center">
                  🔒 Seus dados estão 100% protegidos. Não enviamos spam.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
