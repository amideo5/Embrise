import React from 'react';
import { Database, Network, Brain, BarChart, Cloud, Lock } from 'lucide-react';

export function Services() {
  return (
    <div className="bg-amber-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-amber-900 text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Database />}
            title="Data Solutions"
            description="Comprehensive data management and analytics solutions tailored to your business needs."
          />
          <ServiceCard
            icon={<Network />}
            title="Network Infrastructure"
            description="Robust and scalable network solutions ensuring seamless connectivity."
          />
          <ServiceCard
            icon={<Brain />}
            title="AI & ML Analysis"
            description="Advanced artificial intelligence and machine learning solutions for data-driven insights."
          />
          <ServiceCard
            icon={<BarChart />}
            title="Business Intelligence"
            description="Transform raw data into actionable insights for informed decision-making."
          />
          <ServiceCard
            icon={<Cloud />}
            title="Cloud Services"
            description="Secure and flexible cloud solutions for modern business requirements."
          />
          <ServiceCard
            icon={<Lock />}
            title="Cybersecurity"
            description="Comprehensive security solutions to protect your valuable data and systems."
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-amber-600 w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-amber-900 mb-4">{title}</h3>
      <p className="text-amber-700">{description}</p>
    </div>
  );
}