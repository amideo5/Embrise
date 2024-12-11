import React from "react";
import {Navbar} from "../components/Navbar";
import WebProcess from "../components/WebProcess";
import {Footer} from "../components/Footer";

const WebDevelopment: React.FC = () => {
  return (
    <div className="bg-brown-50 min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <WebProcess />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WebDevelopment;
