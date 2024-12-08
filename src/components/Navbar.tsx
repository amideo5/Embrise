import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-amber-700" />
            <span className="text-xl font-semibold text-amber-900">Embrise</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-amber-900 hover:text-amber-700 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('work')} className="text-amber-900 hover:text-amber-700 transition-colors">
              Our Work
            </button>
            <button onClick={() => scrollToSection('about')} className="text-amber-900 hover:text-amber-700 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-amber-900 hover:text-amber-700 transition-colors">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-amber-900" />
            ) : (
              <Menu className="w-6 h-6 text-amber-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-md"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-amber-900 hover:bg-amber-50 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}