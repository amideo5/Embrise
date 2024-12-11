import React from 'react';
// import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://plus.unsplash.com/premium_photo-1731087150117-4a9a349996c2?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'An elegant and modern e-commerce platform designed for perfume enthusiasts, featuring seamless transaction management and an integrated admin panel to track insights and performance.'
  },
  {
    title: 'Travel Application',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description: 'A user-friendly travel website that showcases a wide range of tours and provides a convenient way for users to inquire about tour details and information.'
  },
  {
    title: 'Transaction Management Application',
    category: 'Custom Development',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A custom desktop application designed to extract transaction details from statements, organize them in a specified format, and generate district-wise monthly reports, which can be easily downloaded for further analysis.'
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Work</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Explore our latest projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-amber-50 mb-2">{project.description}</p>
                    {/* <button className="flex items-center space-x-2 text-white hover:text-amber-200 transition-colors">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-amber-600 text-sm">{project.category}</span>
                <h3 className="text-xl font-semibold text-amber-900 mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}