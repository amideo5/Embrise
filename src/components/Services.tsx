import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Code, Palette, Globe, Database, Smartphone, Cpu } from 'lucide-react';

const services = [
  { icon: Code, title: 'Custom Development', description: 'Purpose-built software shaped around your workflows, goals and next stage of growth.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=900', link: '/customDevelopment', number: '01' },
  { icon: Globe, title: 'Web Applications', description: 'Responsive, scalable web platforms that make complex work feel simple.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=900', link: '/webDevelopment', number: '02' },
  { icon: Database, title: 'Data & Network Systems', description: 'Connected systems and useful analytics that help teams make informed decisions.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=900', link: '/dataAnalytics', number: '03' },
  { icon: Smartphone, title: 'Mobile Solutions', description: 'Intuitive mobile applications that keep your services close at hand.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=900', link: '/mobileDevelopment', number: '04' },
  { icon: Palette, title: 'UI/UX Design', description: 'Useful, clear and memorable interfaces grounded in real user needs.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=900', link: '/uiuxDesign', number: '05' },
  { icon: Cpu, title: 'AI Integration', description: 'Practical AI capabilities that connect with your products and processes.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=900', link: '/aiIntegration', number: '06' },
];

export function Services() {
  return (
    <section id="services" className="section section--services">
      <div className="section-container">
        <div className="section-heading section-heading--split">
          <div><div className="eyebrow"><span className="eyebrow__line" /> What we do</div><h2>Good ideas deserve<br /><em>great execution.</em></h2></div>
          <p>From the first sketch to the final release, we bring the right mix of strategy, design and engineering to move your business forward.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => <ServiceCard key={service.number} {...service} index={index} />)}
        </div>
      </div>
    </section>
  );
}
