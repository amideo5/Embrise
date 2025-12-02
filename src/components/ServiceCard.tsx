import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  index: number;
  link: string;
}

export function ServiceCard({ icon: Icon, title, description, image, index, link }: ServiceCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white hover:animate-float animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/90 z-10"></div>
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <div className="mb-4">
          <Icon className="w-12 h-12 text-amber-400 group-hover:text-amber-300 transition-colors mb-4 animate-pulse" />
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors">
            {title}
          </h3>
          <p className="text-amber-100/90 group-hover:text-white transition-colors">
            {description}
          </p>
        </div>
        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link 
            to={link} 
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-400 transition-colors animate-glow"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
