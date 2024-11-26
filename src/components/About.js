import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
          I’m a passionate Full-Stack Developer with expertise in building modern web applications using the latest technologies.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <img
            src="https://via.placeholder.com/300"
            alt="My Image"
            className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0 mb-6 md:mb-0"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">A Little About Me</h3>
          <p className="text-lg mb-6">
            I have a deep passion for technology and problem-solving. With a background in Full-Stack Development, I am constantly learning and building new projects. I thrive in dynamic, fast-paced environments and am always eager to work on innovative solutions that impact real-world users.
          </p>

          <h4 className="text-xl font-semibold mb-4">Skills</h4>
          <ul className="list-disc list-inside text-lg mb-6">
            <li>React, Angular, JavaScript, TypeScript</li>
            <li>Node.js, Express.js, Java Spring Boot</li>
            <li>HTML, CSS, TailwindCSS, Bootstrap</li>
            <li>SQL, MongoDB, Firebase</li>
            <li>REST APIs, GraphQL</li>
            <li>Version Control (Git, GitHub, GitLab)</li>
          </ul>

          <a
            href="#contact"
            className="bg-primary text-lightText font-semibold py-3 px-6 rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
