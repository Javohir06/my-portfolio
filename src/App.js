import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText min-h-screen transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
