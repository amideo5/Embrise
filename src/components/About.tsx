import React from 'react';
import { Users, Award, Target, Rocket, ArrowUpRight } from 'lucide-react';

const principles = [
  { icon: Users, title: 'People first', description: 'We listen closely, work openly and keep the people using your product at the centre.' },
  { icon: Award, title: 'Quality in the details', description: 'We care about the small decisions that make a product feel reliable and complete.' },
  { icon: Target, title: 'Purposeful by design', description: 'Every feature and design choice should solve a real problem or create real value.' },
  { icon: Rocket, title: 'Ready for what’s next', description: 'We build with flexibility in mind, so your digital foundation can grow with you.' },
];

export function About() {
  return (
    <section id="about" className="section section--about">
      <div className="section-container about-layout">
        <div className="about-intro">
          <div className="eyebrow eyebrow--light"><span className="eyebrow__line" /> A little about us</div>
          <h2>Technology should<br /><em>move you forward.</em></h2>
          <p>We’re a team of developers, designers and problem-solvers who believe the best digital experiences come from equal parts curiosity, craft and collaboration.</p>
          <a href="#contact" onClick={(event) => { event.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="about-link">Get to know us <ArrowUpRight size={17} /></a>
          <div className="about-mark">E<span>.</span></div>
        </div>
        <div className="about-principles">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <article className="principle" key={title}>
              <div className="principle__top"><span>0{index + 1}</span><Icon size={21} strokeWidth={1.6} /></div>
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
