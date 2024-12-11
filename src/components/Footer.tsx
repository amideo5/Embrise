import React from 'react';
import { Mail, MapPin} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';


export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // setIsMobileMenuOpen(false);
      }, 300); // Adjust timeout as needed for route change animation
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // setIsMobileMenuOpen(false);
    }
  };

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <img src="../src/assets/embrise_logo.png" alt="Embrise Logo" className="h-12 w-auto" />
            </div>
            <p className="text-amber-200/80">
              Transforming ideas into exceptional digital experiences through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('work')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-amber-300 transition-colors">
                  <a href='/webDevelopment'>
                  Web Development</a>
                </button>
              </li>
              <li>
                <button className="hover:text-amber-300 transition-colors">
                <a href='/mobileDevelopment'>
                  Mobile Apps</a>
                </button>
              </li>
              <li>
                <button className="hover:text-amber-300 transition-colors">
                <a href='/aiIntegration'>
                  AI & ML Solutions</a>
                </button>
              </li>
              <li>
                <button className="hover:text-amber-300 transition-colors">
                <a href='/dataAnalytics'>
                  Data and Network Services</a>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-amber-400" />
              <span>contact@embrise.tech</span>
            </div>
            {/* <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-amber-400" />
              <span>+1 (555) 123-4567</span>
            </div> */}
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Bangalore, IN</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800">
          <p className="text-center text-amber-300/60">
            © {new Date().getFullYear()} Embrise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}