import React from 'react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-amber-50 to-amber-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 text-center mb-12">
            Get in Touch
          </h1>
          <Contact />
        </div>
      </div>
    </div>
  );
}