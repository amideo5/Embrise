import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { SectionDivider } from './components/SectionDivider';
import './styles/animations.css';
import { Timeline } from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="flex">
          <Timeline />
        </div>
        <div className="relative">
          {/* <SectionDivider className="text-amber-50" variant="curve" /> */}
          <Services />
        </div>
        <div className="relative">
          <SectionDivider className="text-amber-50" variant="curve" />
          <Portfolio />
        </div>
        <div className="relative">
          {/* <SectionDivider className="text-amber-50" variant="curve" /> */}
          <About />
        </div>
        <div className="relative">
          {/* <SectionDivider className="text-amber-50" variant="curve" flip /> */}
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;