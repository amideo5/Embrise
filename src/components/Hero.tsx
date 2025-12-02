import React, { useState} from 'react';
import { HeroContent } from './HeroContent';
import { BackgroundGear } from './BackgroundGear';

export function Hero() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if(isMobileMenuOpen){
    console.log("Yes");
  }
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 via-amber-100/30 to-white pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604933762021-54a5858c9832?auto=format&fit=crop&q=80')] opacity-5 bg-fixed"></div>
      <BackgroundGear />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 animate-fade-in">
            Transform Your Ideas Into
            <span className="text-amber-600"> Digital Reality</span>
          </h1>
          <p className="text-xl text-amber-700 mb-8 animate-fade-in-delay">
            We craft exceptional digital experiences that drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
            <button onClick={() => scrollToSection('work')} className="px-8 py-4 bg-white text-amber-600 rounded-full hover:bg-amber-50 transition-colors shadow-lg hover:shadow-xl border border-amber-200">
              View Our Work
            </button>
          </div>
        </div>
        <div style={{ marginBottom: -80 }}></div>


        <HeroContent />
      </div>
    </div>
  );
}