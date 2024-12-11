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
// import Pipeline from '../components/Pipeline';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="flex">
          <Timeline />
          
        </div>
        {/* <Pipeline /> */}
        <div className="relative">
          <Services />
        </div>
        <div className="relative">
          <SectionDivider className="text-amber-50" variant="curve" />
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