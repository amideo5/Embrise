import React from 'react';
import { Cog } from 'lucide-react';

export function BackgroundGear() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Cog className="w-[800px] h-[800px] text-amber-900/5 animate-rotate" />
      </div>
    </div>
  );
}