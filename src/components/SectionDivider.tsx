import React from 'react';

interface SectionDividerProps {
  className?: string;
  variant?: 'wave' | 'curve' | 'tilt';
  flip?: boolean;
}

export function SectionDivider({ className = '', variant = 'wave', flip = false }: SectionDividerProps) {
  const paths = {
    wave: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    curve: "M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,234.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    tilt: "M0,160L1440,224L1440,320L0,320Z"
  };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        className={`w-full h-24 ${flip ? 'transform rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d={paths[variant]}
        ></path>
      </svg>
    </div>
  );
}