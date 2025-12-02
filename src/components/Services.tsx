import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Code, Palette, Globe, Database, Smartphone, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400',
    link: '/customDevelopment'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Responsive and scalable web applications that deliver results',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
    link: '/webDevelopment'
  },
  {
    icon: Database,
    title: 'Data and Network Systems',
    description: 'Robust and secure Networked applications and Data Analytics',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
    link: '/dataAnalytics'
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400',
    link: '/mobileDevelopment'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that engage',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400',
    link: '/uiuxDesign'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Seamless integration with third-party services and AIs',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
    link: '/aiIntegration'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Services</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}