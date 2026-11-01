import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { HeroContent } from './HeroContent';

export function Hero() {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section className="hero-section">
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow__line" /> Technology with intention</div>
            <h1>Custom software &amp; digital products.<br /><em>Built around your business.</em></h1>
            <p className="hero-lede">Embrise Solutions designs and develops custom software, business websites, web and mobile apps, user-focused UI/UX and practical AI integrations. We bring strategy, design and engineering together to solve real business needs.</p>
            <div className="hero-actions">
              <button className="button button--primary" onClick={() => scrollToSection('contact')}>Start a conversation <ArrowRight size={17} /></button>
              <button className="button button--text" onClick={() => scrollToSection('work')}>Explore our work <ArrowDown size={16} /></button>
            </div>
            <div className="hero-note"><Sparkles size={15} /> Strategy, design and engineering under one roof.</div>
          </div>

          <div className="hero-visual" aria-label="Embrise digital product design and development illustration">
            <div className="hero-visual__topline"><span>IDEAS → IMPACT</span><span>01 / 03</span></div>
            <div className="hero-visual__canvas">
              <div className="visual-orbit visual-orbit--outer" />
              <div className="visual-orbit visual-orbit--inner" />
              <div className="visual-core"><span>e</span></div>
              <div className="visual-node visual-node--design"><span className="visual-node__dot" />DESIGN</div>
              <div className="visual-node visual-node--build"><span className="visual-node__dot" />BUILD</div>
              <div className="visual-node visual-node--launch"><span className="visual-node__dot" />GROW</div>
              <div className="visual-caption">From a first sketch<br />to what comes next.</div>
            </div>
            <div className="hero-visual__footer"><span>EMBRISE / DIGITAL STUDIO</span><span>EST. FOR WHAT’S NEXT</span></div>
          </div>
        </div>
        <div className="hero-bottomline"><span>Scroll to explore</span><span className="hero-bottomline__rule" /><span>01 — 04</span></div>
      </section>
      <HeroContent />
    </>
  );
}
