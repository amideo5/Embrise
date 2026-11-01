import React from 'react';
import { Code2, Palette, Database, Rocket, Brain } from 'lucide-react';

const timelineSteps = [
  { icon: Code2, title: 'Planning & analysis', description: 'Understand the challenge and define the right solution.' },
  { icon: Palette, title: 'Design & architecture', description: 'Shape the experience and technical blueprint.' },
  { icon: Database, title: 'Development', description: 'Build, test and refine with care.' },
  { icon: Rocket, title: 'Deployment', description: 'Launch confidently and support what follows.' },
  { icon: Brain, title: 'Continuous improvement', description: 'Learn, adapt and keep moving forward.' },
];

export function Timeline() {
  return (
    <section className="process-overview">
      <div className="section-container">
        <div className="process-overview__heading"><div className="eyebrow"><span className="eyebrow__line" /> How we work</div><h2>A clear path from<br /><em>idea to impact.</em></h2></div>
        <div className="process-steps">
          {timelineSteps.map(({ icon: Icon, title, description }, index) => (
            <article className="process-step" key={title}>
              <div className="process-step__number">0{index + 1}</div>
              <div className="process-step__icon"><Icon size={22} strokeWidth={1.7} /></div>
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
