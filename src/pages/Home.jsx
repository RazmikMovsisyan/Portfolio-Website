import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import ScrollUpButton from "../components/ui/ScrollUpButton";
import { LoadingScreen } from "../components/animations/LoadingScreen";

const Home = ({ isLoaded, setIsLoaded }) => {
  return (
    <>
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50">
          <LoadingScreen onComplete={() => setIsLoaded(true)} />
        </div>
      )}

      {/* App Content */}
      <div
        className={`min-h-screen text-gray-100 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollUpButton />
        </main>
      </div>
    </>
  );
};

export default Home;
