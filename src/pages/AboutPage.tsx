import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-amber-50 to-amber-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Story
            </h1>
            <p className="text-lg text-amber-800 mb-12">
              We are passionate about leveraging technology to transform businesses and create innovative solutions that drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <StatCard
              icon={<Users className="w-8 h-8" />}
              title="Expert Team"
              value="50+"
              description="Skilled professionals"
            />
            <StatCard
              icon={<Target className="w-8 h-8" />}
              title="Projects"
              value="200+"
              description="Successfully delivered"
            />
            <StatCard
              icon={<Award className="w-8 h-8" />}
              title="Experience"
              value="10+"
              description="Years in industry"
            />
            <StatCard
              icon={<Rocket className="w-8 h-8" />}
              title="Clients"
              value="150+"
              description="Satisfied worldwide"
            />
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Mission</h2>
              <p className="text-amber-800">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We're committed to delivering excellence through our comprehensive range of services.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Vision</h2>
              <p className="text-amber-800">
                To be the leading provider of innovative technology solutions, recognized globally for our expertise in data analytics, AI, and network infrastructure, while maintaining our commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, description }: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  description: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <div className="text-amber-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-amber-600 mb-2">{value}</p>
      <p className="text-amber-700">{description}</p>
    </div>
  );
}