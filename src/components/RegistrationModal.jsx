import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, ShieldCheck, CreditCard, QrCode, ArrowRight, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegistrationModal({ event, onClose }) {
  const [selectedDistance, setSelectedDistance] = useState(event?.distances[0] || '10K');
  const [shirtSize, setShirtSize] = useState('M');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('M');
  const [birthDate, setBirthDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !cpf || !agreedTerms) return;

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err) {}

    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-mec-blue to-[#0077cc] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-white/80 mb-1">
              Inscrição Oficial • Plataforma Ticket Sports & Mec
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {event.title}
            </h3>
            <div className="flex items-center gap-3 text-xs text-white/90 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {event.city} - {event.state}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar formulário de inscrição"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-6 sm:p-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-extrabold text-mec-text">
              Inscrição Confirmada com Sucesso!
            </h4>

            <p className="text-sm text-mec-muted max-w-md mx-auto">
              Parabéns, <strong>{name}</strong>! Sua vaga na distância de <strong>{selectedDistance}</strong> está garantida. Enviamos o comprovante oficial e orientações de retirada de kit para o e-mail <strong>{email}</strong>.
            </p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between font-semibold">
                <span className="text-mec-subtle">Número de Inscrição:</span>
                <span className="font-mono font-bold text-mec-blue">MEC-2026-9843</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-mec-subtle">Camiseta Selecionada:</span>
                <span className="font-bold text-mec-text">Tamanho {shirtSize}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-mec-subtle">Valor Pago:</span>
                <span className="font-bold text-emerald-600">{event.price} (via {paymentMethod.toUpperCase()})</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="w-full py-3.5 px-6 rounded-xl bg-mec-blue hover:bg-mec-blue-light text-white font-bold text-sm shadow-md transition-all"
              >
                Concluir e Voltar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* 1. Distance selection */}
            <div>
              <label className="block text-xs font-extrabold text-mec-subtle uppercase tracking-wider mb-2">
                1. Selecione sua Distância
              </label>
              <div className="grid grid-cols-3 gap-2">
                {event.distances.map((dist) => (
                  <button
                    key={dist}
                    type="button"
                    onClick={() => setSelectedDistance(dist)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center ${
                      selectedDistance === dist
                        ? 'bg-mec-blue text-white border-mec-blue shadow-sm'
                        : 'bg-gray-50 text-mec-text border-gray-200 hover:border-mec-blue/40'
                    }`}
                  >
                    {dist}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Shirt Size */}
            <div>
              <label className="block text-xs font-extrabold text-mec-subtle uppercase tracking-wider mb-2">
                2. Tamanho da Camiseta Oficial (Kit do Atleta)
              </label>
              <div className="grid grid-cols-5 gap-2">
                {['PP', 'P', 'M', 'G', 'GG'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setShirtSize(size)}
                    className={`py-2 rounded-lg text-xs font-bold border transition-all text-center ${
                      shirtSize === size
                        ? 'bg-mec-text text-white border-mec-text'
                        : 'bg-gray-50 text-mec-text border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Personal Info */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <label className="block text-xs font-extrabold text-mec-subtle uppercase tracking-wider">
                3. Dados do Participante
              </label>

              <div>
                <label className="block text-[11px] font-bold text-mec-text mb-1">Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-mec-text focus:border-mec-blue outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-mec-text mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-mec-text focus:border-mec-blue outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-mec-text mb-1">CPF *</label>
                  <input
                    type="text"
                    required
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="000.000.000-00"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-mec-text focus:border-mec-blue outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-mec-text mb-1">WhatsApp / Celular *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99216-8167"
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-mec-text focus:border-mec-blue outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-mec-text mb-1">Gênero</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-mec-text focus:border-mec-blue outline-none"
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 4. Payment Method */}
            <div className="pt-2 border-t border-gray-100">
              <label className="block text-xs font-extrabold text-mec-subtle uppercase tracking-wider mb-2">
                4. Forma de Pagamento ({event.price})
              </label>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                    paymentMethod === 'pix'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-1 ring-emerald-500'
                      : 'bg-gray-50 border-gray-200 text-mec-muted hover:bg-gray-100'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-600" />
                  <span>PIX Instantâneo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cartao')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                    paymentMethod === 'cartao'
                      ? 'bg-mec-blue-surface border-mec-blue text-mec-blue ring-1 ring-mec-blue'
                      : 'bg-gray-50 border-gray-200 text-mec-muted hover:bg-gray-100'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-mec-blue" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>
            </div>

            {/* 5. Termos & Consentimento LGPD (Checkboxes NATIVE UNCHECKED) */}
            <div className="pt-3 border-t border-gray-100 space-y-2.5">
              <label className="block text-xs font-extrabold text-mec-subtle uppercase tracking-wider mb-1">
                5. Termos Legais & Consentimento (LGPD)
              </label>

              {/* Mandatory Terms Checkbox (Default false) */}
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-mec-text font-medium bg-gray-50 p-3 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  required
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-mec-blue rounded border-gray-300 focus:ring-mec-blue cursor-pointer flex-shrink-0"
                />
                <span className="leading-snug">
                  Li e concordo com os <strong>Termos de Uso</strong>, <strong>Termo de Responsabilidade Física</strong>, <strong>Cessão de Imagem</strong> e a <strong>Política de Privacidade</strong>. *
                </span>
              </label>

              {/* Separate Optional Marketing Checkbox (Default false) */}
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-mec-muted font-medium bg-gray-50/70 p-3 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  checked={acceptMarketing}
                  onChange={(e) => setAcceptMarketing(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-mec-blue rounded border-gray-300 focus:ring-mec-blue cursor-pointer flex-shrink-0"
                />
                <span className="leading-snug">
                  Aceito receber e-mails e mensagens de WhatsApp com promoções e novos eventos.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!agreedTerms}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  agreedTerms
                    ? 'bg-mec-blue hover:bg-mec-blue-light text-white hover:shadow-blue-glow hover:scale-[1.02] active:scale-95 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                }`}
              >
                <span>Confirmar Inscrição • {event.price}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-mec-subtle mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ambiente 100% Seguro • Processamento Oficial Ticket Sports</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
