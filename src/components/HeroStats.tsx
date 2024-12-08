import React from 'react';
import { Award, Users, Code2 } from 'lucide-react';

export function HeroStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-delay">
      {[
        {
          icon: Award,
          number: '10+',
          label: 'Years Experience'
        },
        {
          icon: Users,
          number: '200+',
          label: 'Happy Clients'
        },
        {
          icon: Code2,
          number: '500+',
          label: 'Projects Completed'
        }
      ].map((stat, index) => (
        <div 
          key={index}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
        >
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
            <stat.icon className="w-6 h-6 text-amber-600" />
          </div>
          <div className="text-3xl font-bold text-amber-900 mb-1">{stat.number}</div>
          <div className="text-amber-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}