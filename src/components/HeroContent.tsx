import React from 'react';
import { ShieldCheck, Gauge, Handshake } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Built with care',
    description: 'Thoughtful architecture, considered decisions and security-minded development from the start.',
  },
  {
    icon: Gauge,
    number: '02',
    title: 'Made to perform',
    description: 'Fast, accessible experiences designed to work smoothly as your business evolves.',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'A partner, not a vendor',
    description: 'Clear communication and a collaborative process, from the first conversation onward.',
  },
];

export function HeroContent() {
  return (
    <section className="value-strip" aria-label="How we work">
      <div className="value-strip__inner">
        {features.map(({ icon: Icon, number, title, description }) => (
          <article className="value-item" key={number}>
            <div className="value-item__meta"><span>{number}</span><Icon size={20} strokeWidth={1.7} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
