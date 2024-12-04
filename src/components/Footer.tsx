import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className="w-6 h-6 text-amber-400" />
              <span className="font-bold text-xl">Embrise</span>
            </div>
            <p className="text-amber-200">
              Transforming businesses through innovative tech solutions
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-amber-300">Services</Link></li>
              <li><Link to="/projects" className="hover:text-amber-300">Projects</Link></li>
              <li><Link to="/about" className="hover:text-amber-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Data Solutions</li>
              <li>Network Infrastructure</li>
              <li>AI & ML Analysis</li>
              <li>Cloud Services</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-300"><Github /></a>
              <a href="#" className="hover:text-amber-300"><Linkedin /></a>
              <a href="#" className="hover:text-amber-300"><Twitter /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Embrise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}