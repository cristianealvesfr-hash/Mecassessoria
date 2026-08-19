import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/mockData';

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-10 md:py-24 bg-[#FAFAFC] relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-3 border border-mec-blue/20">
            <Quote className="w-3.5 h-3.5" />
            <span>Depoimentos & Experiências</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mec-text tracking-tight mb-3">
            Quem corre e organiza com a Mec, recomenda
          </h2>
          <p className="text-base text-mec-muted">
            Veja como transformamos o desempenho de atletas e a segurança operacional de grandes provas de corrida de rua.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-24">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-soft-1 hover:shadow-soft-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="text-xs font-bold text-mec-blue bg-mec-blue-surface px-3 py-1 rounded-full inline-block mb-3">
                  {item.highlight}
                </div>

                <p className="text-xs sm:text-sm text-mec-muted leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-mec-blue/30"
                />
                <div>
                  <div className="text-sm font-bold text-mec-text">{item.name}</div>
                  <div className="text-xs text-mec-subtle">{item.role} • {item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mec-blue-surface text-mec-blue text-xs font-bold uppercase tracking-wider mb-2 border border-mec-blue/20">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-mec-text">
              Perguntas Frequentes sobre a Mec Assessoria
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIndex) => {
              const isOpen = openFaq === fIndex;
              return (
                <div
                  key={fIndex}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : fIndex)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-mec-text hover:text-mec-blue transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-mec-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-mec-subtle flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-mec-muted leading-relaxed border-t border-gray-100 pt-3 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
