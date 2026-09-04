import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Calendar, Dumbbell, ShieldCheck, Search, Calculator, PhoneCall, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenEventModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Eventos', href: '#eventos', icon: Calendar },
    { name: 'Assessoria', href: '#assessoria', icon: Dumbbell },
    { name: 'Serviços', href: '#servicos', icon: ShieldCheck },
    { name: 'Resultados', href: '#resultados', icon: Search },
    { name: 'Calculadora', href: '#calculadora', icon: Calculator },
    { name: 'Contato', href: '#contato', icon: PhoneCall },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft-1 border-b border-gray-100 py-3' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/60 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-mec-blue flex items-center justify-center text-white shadow-md shadow-mec-blue/20 group-hover:scale-105 transition-transform duration-300">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-mec-text group-hover:text-mec-blue transition-colors duration-200 leading-tight">
                MEC <span className="text-mec-blue">ASSESSORIA</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-mec-subtle uppercase">
                Esportiva & Eventos
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-mec-muted hover:text-mec-blue hover:bg-mec-blue-surface rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href="#eventos"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-mec-blue hover:bg-mec-blue-light rounded-xl transition-all duration-200 shadow-sm hover:shadow-blue-glow hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Inscrever-se</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions: CTA + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
            <a
              href="#eventos"
              className="whitespace-nowrap px-3.5 py-1.5 text-xs font-bold text-white bg-mec-blue hover:bg-mec-blue-light rounded-xl shadow-sm transition-all active:scale-95 flex items-center justify-center sm:hidden"
            >
              Inscrever-se
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="p-1.5 text-mec-text hover:text-mec-blue hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-gray-200 shadow-xl px-4 py-6 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-mec-text hover:text-mec-blue hover:bg-mec-blue-surface rounded-xl transition-colors"
                >
                  <Icon className="w-5 h-5 text-mec-blue" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a
                href="#eventos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 text-center font-bold text-white bg-mec-blue hover:bg-mec-blue-light rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Calendário de Provas</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
