import React from "react";
import { Navbar } from "../components/Navbar";
import AIIntegrationProcess from "../components/AIIntegrationProcess";
import { Footer } from "../components/Footer";

const AIIntegration: React.FC = () => {
  return (
    <div className="bg-indigo-50 min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <AIIntegrationProcess />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AIIntegration;
