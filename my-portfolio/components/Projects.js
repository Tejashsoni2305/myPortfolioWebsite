import React from "react";
import Image from "next/image";

const projects = [
  {
    name: "AI-Powered Grading Assistant",
    description:
      "Built an AI-driven web application using Django and React to automate grading for various submission types. Integrated OpenAI API for generating instant feedback and implemented robust role-based access controls to secure student data.",
    technologies: ["React", "Django", "MongoDB", "OpenAI"],
    github: "https://github.com/Tejashsoni2305/ai-grading-assistant",
    image: "/images/ai-grading.png", // Placeholder image
  },
  {
    name: "LinguaAI: Language Learning App",
    description:
      "Developed an AI-powered web app enabling real-time language learning with interactive text and voice features. Integrated GPT-4 for grammar correction, vocabulary card generation, pronunciation corrections, Firebase for progress tracking, and Google authentication, enhancing user engagement.",
    technologies: ["Next.js", "OpenAI", "Firebase"],
    github: "https://github.com/Tejashsoni2305/linguaai",
    image: "/Lingua.png", // Replace with actual project image path
  },
  {
    name: "Workout Tracker",
    description:
      "Designed and built a full-stack application to help users track workouts securely. Implemented CRUD operations, user authentication, and data validation for a seamless and reliable user experience.",
    technologies: ["Node.js", "Express", "React", "MongoDB"],
    github: "https://github.com/Tejashsoni2305/workout-tracker",
    image: "/images/workout-tracker.png",
  },
  {
    name: "H and E IT Services Website Freelance Project",
    description:
      "Created a professional single-page application for an IT services company, showcasing services and providing an intuitive contact form. Delivered a responsive and visually appealing design using React and TailwindCSS.",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/Tejashsoni2305/it-services-website", // Replace with actual GitHub link
    image: "/images/it-services.png", // Replace with actual project image
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gray-100 dark:bg-black-100"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {project.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 py-1 px-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
