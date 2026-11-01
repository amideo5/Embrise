import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import '../styles/animations.css';
import { Timeline } from '../components/Timeline';
import { Portfolio } from '../components/Portfolio';
import BlurParallaxCarousel from '../components/BlurParallaxCarousel';

function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Services />
        <Portfolio />
        <BlurParallaxCarousel />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
