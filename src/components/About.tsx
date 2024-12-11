import React from 'react';
import { Users, Award, Target, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">About Us</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            We're a team of passionate developers, designers, and innovators dedicated to crafting exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: 'Expert Team',
              description: 'Skilled professionals with diverse expertise'
            },
            {
              icon: Award,
              title: 'Quality First',
              description: 'Committed to delivering excellence'
            },
            {
              icon: Target,
              title: 'Goal Oriented',
              description: 'Focused on achieving your objectives'
            },
            {
              icon: Rocket,
              title: 'Innovation',
              description: 'Pushing boundaries with cutting-edge solutions'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20">
                <item.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.title}</h3>
              <p className="text-amber-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}