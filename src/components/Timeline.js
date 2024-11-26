import React from "react";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="py-20 px-6 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">My Timeline</h2>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
          Below are some of the key milestones in my journey as a developer.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Timeline Event 1 */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
          <div className="ml-8 md:ml-12">
            <h3 className="text-2xl font-semibold">Started Learning Web Development</h3>
            <p className="text-lg mb-4">In 2020, I decided to pursue my passion for technology and started learning web development.</p>
            <p className="text-sm text-gray-500">Jan 2020</p>
          </div>
        </div>

        {/* Timeline Event 2 */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
          <div className="ml-8 md:ml-12">
            <h3 className="text-2xl font-semibold">Joined Idrok Net Company</h3>
            <p className="text-lg mb-4">In 2021, I started working as a Junior Developer at XYZ Company, gaining practical experience.</p>
            <p className="text-sm text-gray-500">Apr 2021</p>
          </div>
        </div>

        {/* Timeline Event 3 */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
          <div className="ml-8 md:ml-12">
            <h3 className="text-2xl font-semibold">Launched My First Full-Stack Project</h3>
            <p className="text-lg mb-4">In 2022, I completed and launched my first full-stack application using React and Node.js.</p>
            <p className="text-sm text-gray-500">Sep 2022</p>
          </div>
        </div>

        {/* Timeline Event 4 */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
          <div className="ml-8 md:ml-12">
            <h3 className="text-2xl font-semibold">Undergraduating with a Degree in IT</h3>
            <p className="text-lg mb-4">I graduated with a degree in Information Technology, solidifying my technical knowledge.</p>
            <p className="text-sm text-gray-500">May 2028</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
