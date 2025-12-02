import React from "react";
import { Navbar } from "../components/Navbar";
import UIUXProcess from "../components/UIUXProcess";
import { Footer } from "../components/Footer";

const UIUXDesign: React.FC = () => {
  return (
    <div className="bg-purple-50 min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <UIUXProcess />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UIUXDesign;
