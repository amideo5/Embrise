import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  index: number;
  link: string;
  number: string;
}

export function ServiceCard({ icon: Icon, title, description, image, index, link, number }: ServiceCardProps) {
  return (
    <Link to={link} className="service-card" style={{ animationDelay: `${index * 90}ms` }}>
      <div className="service-card__image-wrap"><img src={image} alt="" className="service-card__image" loading="lazy" /><span className="service-card__number">{number}</span></div>
      <div className="service-card__body">
        <div className="service-card__icon"><Icon size={22} strokeWidth={1.7} /></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="service-card__link">Explore service <ArrowUpRight size={16} /></span>
      </div>
    </Link>
  );
}
