import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../assets/mono.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  const scrollToSection = (id: string) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scroll, 350);
    } else {
      scroll();
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Our work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Insights', id: 'blogs' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/" className="site-brand" aria-label="Embrise home">
          <img src={logo} alt="Embrise" />
          <span>EMBRISE<span className="site-brand__dot">.</span></span>
        </Link>

        <div className="site-nav__links">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>
          ))}
        </div>

        <button className="site-nav__cta" onClick={() => scrollToSection('contact')}>
          Let’s talk <ArrowUpRight size={16} />
        </button>

        <button
          className="site-nav__toggle"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="site-mobile-menu">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>
          ))}
          <button className="site-mobile-menu__cta" onClick={() => scrollToSection('contact')}>Let’s talk <ArrowUpRight size={16} /></button>
        </div>
      )}
    </header>
  );
}
