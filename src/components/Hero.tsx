import React from 'react';
import { Sun, Moon, Database, Network, Brain, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Hero() {
  const { theme, isDaytime } = useTheme();

  return (
    <div className={`relative min-h-screen ${
      theme === 'day' 
        ? 'bg-gradient-to-b from-amber-50 to-amber-100' 
        : 'bg-gradient-to-b from-gray-900 to-amber-900'
    }`}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="flex flex-col items-center text-center">
          {isDaytime ? (
            <Sun className="w-20 h-20 text-amber-500 animate-spin-slow mb-8" />
          ) : (
            <Moon className="w-20 h-20 text-amber-300 mb-8" />
          )}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            theme === 'day' ? 'text-amber-900' : 'text-amber-100'
          }`}>
            Embrace the Provider
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mb-12 ${
            theme === 'day' ? 'text-amber-800' : 'text-amber-200'
          }`}>
            Transforming businesses through cutting-edge data solutions, network infrastructure, and AI-powered innovations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <ServiceCard icon={<Database />} title="Data Solutions" />
            <ServiceCard icon={<Network />} title="Network Infrastructure" />
            <ServiceCard icon={<Brain />} title="AI & ML Analysis" />
          </div>
          <button className="animate-bounce mt-8">
            <ChevronDown className={`w-8 h-8 ${
              theme === 'day' ? 'text-amber-700' : 'text-amber-300'
            }`} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  const { theme } = useTheme();
  
  return (
    <div className={`${
      theme === 'day' 
        ? 'bg-white/80 backdrop-blur-sm' 
        : 'bg-amber-900/80 backdrop-blur-sm'
    } p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64`}>
      <div className={`w-12 h-12 mb-4 mx-auto ${
        theme === 'day' ? 'text-amber-600' : 'text-amber-300'
      }`}>
        {icon}
      </div>
      <h3 className={`text-lg font-semibold ${
        theme === 'day' ? 'text-amber-900' : 'text-amber-100'
      }`}>
        {title}
      </h3>
    </div>
  );
}