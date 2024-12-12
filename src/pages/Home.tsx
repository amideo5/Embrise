import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import '../styles/animations.css';
import { Timeline } from '../components/Timeline';
import { SectionDivider } from '../components/SectionDivider';
import { Portfolio } from '../components/Portfolio';
import BlurParallaxCarousel from '../components/BlurParallaxCarousel.tsx';
// import Pipeline from '../components/Pipeline';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SectionDivider className="bg-transparent border-transparent text-transparent" variant="curve" />
        <div className="flex">
          <Timeline />
        </div>
        <SectionDivider className="bg-transparent border-transparent text-transparent" variant="curve" />
        <SectionDivider className="bg-transparent border-transparent text-transparent" variant="curve" />
        <BlurParallaxCarousel />
        <SectionDivider className="bg-transparent border-transparent text-transparent" variant="curve" />
        <div className="relative">
          <Services />
        </div>
        <div className="relative">
          <SectionDivider className="bg-transparent border-transparent text-transparent" variant="curve" />
          <Portfolio />
        </div>
        <div className="relative">
          <About />
        </div>
        <div className="relative">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;