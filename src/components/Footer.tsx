import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../assets/mono.png';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (id: string) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (location.pathname !== '/') { navigate('/'); window.setTimeout(scroll, 350); } else scroll();
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand"><Link to="/" className="footer-brand"><img src={logo} alt="" /><span>EMBRISE<span>.</span></span></Link><p>Thoughtful technology.<br />Digital experiences that move business forward.</p><a href="mailto:admin@embrise.in" className="footer-email"><Mail size={16} /> admin@embrise.in <ArrowUpRight size={15} /></a></div>
        <div className="site-footer__column"><h3>Explore</h3><button onClick={() => scrollToSection('services')}>Services</button><button onClick={() => scrollToSection('work')}>Our work</button><button onClick={() => scrollToSection('about')}>About</button><button onClick={() => scrollToSection('blogs')}>Insights</button></div>
        <div className="site-footer__column"><h3>What we do</h3><Link to="/services/web-development">Web development</Link><Link to="/services/mobile-app-development">Mobile solutions</Link><Link to="/services/ai-integration">AI integration</Link><Link to="/services/data-analytics-network-solutions">Data & network systems</Link><Link to="/services/ui-ux-design">UI/UX design</Link><Link to="/services/custom-software-development">Custom software</Link></div>
        <div className="site-footer__note"><span>HAVE A CHALLENGE?</span><h3>Let’s make<br />something useful.</h3><button onClick={() => scrollToSection('contact')}>Start a conversation <ArrowUpRight size={17} /></button></div>
      </div>
      <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Embrise Solutions. All rights reserved.</span><span>Made with intent <b>✳</b></span></div>
    </footer>
  );
}
