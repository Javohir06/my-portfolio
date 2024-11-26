import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-primary to-secondary text-lightText dark:text-darkText min-h-screen flex flex-col justify-center items-center py-20 px-6"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x1000")' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          I'm a Full-Stack Developer specializing in building responsive, dynamic, and user-friendly web applications.
        </p>
        <a
          href="#projects"
          className="bg-lightText text-primary font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transform transition-all hover:scale-105"
        >
          Check Out My Projects
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" className="text-lightText dark:text-darkText text-2xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
