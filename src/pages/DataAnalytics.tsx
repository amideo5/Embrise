import React from "react";
import { Navbar } from "../components/Navbar";
import DataAnalyticsProcess from "../components/NetworkedSystemsProcess";
import { Footer } from "../components/Footer";

const DataAnalytics: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <DataAnalyticsProcess />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DataAnalytics;
