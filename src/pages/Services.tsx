import React from 'react';
import { Code2, Smartphone, Brain, Palette, Cloud, Cog } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web solutions that drive business growth and user engagement.',
    features: [
      'Full-stack development',
      'Progressive Web Apps (PWA)',
      'E-commerce solutions',
      'API development & integration'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'Native iOS & Android apps',
      'Cross-platform development',
      'Mobile UI/UX design',
      'App maintenance & updates'
    ]
  },
  {
    icon: Brain,
    title: 'AI & ML Solutions',
    description: 'Advanced artificial intelligence and machine learning solutions for data-driven insights.',
    features: [
      'Predictive analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Machine Learning models'
    ]
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging digital experiences.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Design Systems'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud solutions and reliable hosting services for your applications.',
    features: [
      'Cloud infrastructure',
      'Server management',
      'Database hosting',
      'Security & maintenance'
    ]
  },
  {
    icon: Cog,
    title: 'Custom Software',
    description: 'Tailored software solutions to meet your specific business needs.',
    features: [
      'Enterprise software',
      'System integration',
      'Legacy system modernization',
      'Technical consulting'
    ]
  }
];

export function Services() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Our Services</h1>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">{service.title}</h3>
                <p className="text-amber-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-amber-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}