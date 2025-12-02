import React from "react";
import { Navbar } from "../components/Navbar";
import MobileAppProcess from "../components/MobileAppProcess";
import { Footer } from "../components/Footer";

const MobileDevelopment: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <MobileAppProcess />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MobileDevelopment;
