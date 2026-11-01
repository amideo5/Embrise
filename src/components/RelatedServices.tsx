import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type RelatedService = { label: string; path: string };

const serviceSets: Record<string, RelatedService[]> = {
  website: [
    { label: 'Website & web app development', path: '/services/web-development' },
    { label: 'Custom software development', path: '/services/custom-software-development' },
  ],
  integration: [
    { label: 'Custom software development', path: '/services/custom-software-development' },
    { label: 'Data analytics & network systems', path: '/services/data-analytics-network-solutions' },
    { label: 'AI integration', path: '/services/ai-integration' },
  ],
  partner: [
    { label: 'Custom software development', path: '/services/custom-software-development' },
    { label: 'Website & web app development', path: '/services/web-development' },
    { label: 'UI/UX design', path: '/services/ui-ux-design' },
  ],
  availability: [
    { label: 'Data analytics & network systems', path: '/services/data-analytics-network-solutions' },
    { label: 'Custom software development', path: '/services/custom-software-development' },
  ],
  lan: [
    { label: 'Custom software development', path: '/services/custom-software-development' },
    { label: 'Data analytics & network systems', path: '/services/data-analytics-network-solutions' },
  ],
  ai: [
    { label: 'AI integration', path: '/services/ai-integration' },
    { label: 'Data analytics & network systems', path: '/services/data-analytics-network-solutions' },
  ],
};

export default function RelatedServices({ topic }: { topic: keyof typeof serviceSets }) {
  const services = serviceSets[topic];
  return (
    <aside className="related-services" aria-labelledby="related-services-heading">
      <div className="related-services__eyebrow">Explore what we do</div>
      <h2 id="related-services-heading">Looking for a practical next step?</h2>
      <p>Explore the Embrise services connected to this topic.</p>
      <div className="related-services__links">
        {services.map((service) => (
          <Link to={service.path} key={service.path}>
            {service.label}<ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </aside>
  );
}
