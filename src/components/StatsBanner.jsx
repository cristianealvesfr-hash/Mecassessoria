import React from 'react';
import { Trophy, Users, CalendarCheck, Target, Zap } from 'lucide-react';
import { STATS_DATA } from '../data/mockData';

export default function StatsBanner() {
  const icons = [Trophy, Users, CalendarCheck, Target];

  return (
    <section className="bg-mec-blue relative py-8 md:py-14 text-white overflow-hidden shadow-soft-2">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {STATS_DATA.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-mono">
                  {item.value}{item.suffix}
                </div>
                <div className="text-sm sm:text-base font-bold text-white/95 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-white/75 max-w-[200px] leading-relaxed hidden sm:block">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
