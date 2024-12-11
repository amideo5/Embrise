import React from "react";
import {Navbar} from "../components/Navbar";
import CustomSoftwareProcess from "../components/CustomSoftwareProcess";
import {Footer} from "../components/Footer";

const CustomDevelopment: React.FC = () => {
  return (
    <div className="bg-brown-50 min-h-screen flex flex-col justify-between">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <CustomSoftwareProcess />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CustomDevelopment;
