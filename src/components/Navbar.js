import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-lightText dark:bg-darkBg dark:text-darkText fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">
          <a href="#home">My Portfolio</a>
        </h1>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-secondary transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-secondary transition-colors">
            Projects
          </a>
          <a href="#timeline" className="hover:text-secondary transition-colors">
            Timeline
          </a>
          <a href="#contact" className="hover:text-secondary transition-colors">
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-xl bg-secondary p-2 rounded-full hover:bg-lightText"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none"
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-primary text-lightText dark:text-darkText p-4 space-y-4`}
      >
        <a
          href="#about"
          className="block hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#projects"
          className="block hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a
          href="#timeline"
          className="block hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          Timeline
        </a>
        <a
          href="#contact"
          className="block hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          Contact
        </a>
        <button
          onClick={toggleDarkMode}
          className="block text-xl bg-secondary p-2 rounded-full w-full text-center hover:bg-lightText"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
