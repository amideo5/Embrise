import React from 'react';
import { Shield, Zap, Users, ArrowRight, Check } from 'lucide-react';

export function HeroContent() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Your data is protected with industry-leading security measures',
      details: [
        'End-to-end encryption',
        'Regular security audits',
        'GDPR compliance',
        'Secure data centers',
      ],
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Optimized solutions that deliver exceptional speed and reliability',
      details: [
        'Global CDN distribution',
        'Optimized codebase',
        '99.9% uptime guarantee',
        'Real-time scaling',
      ],
    },
    {
      icon: Users,
      title: 'Dedicated Support Team',
      description: '24/7 expert support to ensure your success',
      details: [
        'Round-the-clock support',
        'Dedicated account manager',
        'Technical consulting',
        'Regular check-ins',
      ],
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 py-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative group flex-shrink-0 w-[280px] md:w-[300px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-10000 hover:scale-105"
        >
          <div className="flex flex-col space-y-4 p-6">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
              <feature.icon className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
              {feature.title}
            </h3>
            <p className="text-amber-600 mb-4 transition-colors">{feature.description}</p>

            {/* Hidden content revealed on hover */}
            <div className="hidden group-hover:block">
              <div className="pt-4 border-t border-amber-200">
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-amber-700">
                      <Check className="w-4 h-4 mr-2 text-amber-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 flex items-center text-amber-600 hover:text-amber-700 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
