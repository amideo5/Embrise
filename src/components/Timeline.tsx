import { Code2, Palette, Database, Rocket, Brain } from 'lucide-react';

const timelineSteps = [
  {
    icon: Code2,
    title: 'Planning & Analysis',
    description: 'Understanding requirements and planning the solution'
  },
  {
    icon: Palette,
    title: 'Design & Architecture',
    description: 'Creating the perfect design and technical blueprint'
  },
  {
    icon: Database,
    title: 'Development',
    description: 'Building your solution with cutting-edge technology'
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Launching your project to production'
  },
  {
    icon: Brain,
    title: 'Branding',
    description: 'Empowering tech solutions with seamless creativity'
  }
];

export function Timeline() {
  return (
    <div className="min-h-screen relative flex justify-center items-center px-4">
      <div className="flex flex-wrap gap-8 justify-center items-center max-w-full">
        {timelineSteps.map((step, index) => (
          <div
            key={index}
            className="timeline-item flex flex-col items-center text-center gap-4 relative opacity-0 animate-slide-in transition-all duration-300 transform hover:scale-110 hover:opacity-100"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="relative mb-4">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-125 cursor-pointer">
                {/* Icon becomes bigger on hover */}
                <step.icon className="w-8 h-8 text-amber-500" />
              </div>
            </div>
            <div className="transition-all duration-300 transform hover:scale-110">
              <h3 className="text-lg font-semibold text-amber-700 mb-1">{step.title}</h3>
              <p className="text-amber-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
