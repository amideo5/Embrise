import React from 'react';
import { ExternalLink } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Enterprise-scale analytics solution using machine learning algorithms for predictive insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      tags: ["AI/ML", "Big Data", "Cloud"],
    },
    {
      title: "Smart Infrastructure Management",
      description: "IoT-based system for real-time monitoring and optimization of network infrastructure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      tags: ["IoT", "Networks", "Dashboard"],
    },
    {
      title: "Data Security Suite",
      description: "Comprehensive security solution for protecting sensitive business data and ensuring compliance.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80",
      tags: ["Security", "Compliance", "Cloud"],
    },
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-amber-50 to-amber-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 text-center mb-12">
            Our Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image, tags }: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900 mb-2 flex items-center justify-between">
          {title}
          <ExternalLink className="w-5 h-5 text-amber-600" />
        </h3>
        <p className="text-amber-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}