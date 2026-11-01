import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'E-Commerce Platform', category: 'Web development', image: 'https://plus.unsplash.com/premium_photo-1731087150117-4a9a349996c2?q=80&w=1400&auto=format&fit=crop', description: 'An elegant and modern e-commerce platform designed for perfume enthusiasts, featuring seamless transaction management and an integrated admin panel to track insights and performance.' },
  { title: 'Travel Application', category: 'Web development', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop', description: 'A user-friendly travel website that showcases a wide range of tours and provides a convenient way for users to inquire about tour details and information.' },
  { title: 'Transaction Management Application', category: 'Custom development', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop', description: 'A custom desktop application designed to extract transaction details from statements, organize them in a specified format, and generate district-wise monthly reports, which can be easily downloaded for further analysis.' },
];

export function Portfolio() {
  return (
    <section id="work" className="section section--work">
      <div className="section-container">
        <div className="section-heading section-heading--split">
          <div><div className="eyebrow"><span className="eyebrow__line" /> Selected work</div><h2>Made for the way<br /><em>business works.</em></h2></div>
          <p>A look at a few ways we’ve helped turn business needs into useful digital experiences.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card--${index + 1}`} key={project.title}>
              <div className="project-card__image"><img src={project.image} alt={project.title} loading="lazy" /><span className="project-card__index">0{index + 1}</span><span className="project-card__expand"><ArrowUpRight size={19} /></span></div>
              <div className="project-card__content"><span className="project-card__category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
