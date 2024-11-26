import React from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "WeatherApp in Tashkent",
    techStack: "AngularJS, API usage",
    link: "#",
    imageUrl: "https://user-images.githubusercontent.com/91731955/208755405-c50c9cb4-3f91-4f48-a64b-65a8302e3acb.png", // Use actual project images here
  },
  {
    title: "Project 2",
    description:
      "Notepad Classic App",
    techStack: "AngularJS , API usage",
    link: "#",
    imageUrl: "https://user-images.githubusercontent.com/91731955/208752008-5745ee7f-be0a-4c51-96bf-14530f32d910.png", // Replace with actual image
  },
  {
    title: "Project 3",
    description:
      "A personal blog built with Next.js and styled-components, offering a smooth and interactive reading experience.",
    techStack: "Next.js, styled-components, JavaScript",
    link: "#",
    imageUrl: "https://via.placeholder.com/300", // Replace with actual image
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <p className="text-xl">Here are some of the projects I've worked on:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-darkCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="text-sm text-gray-500 mb-4">{project.techStack}</div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-secondary"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
