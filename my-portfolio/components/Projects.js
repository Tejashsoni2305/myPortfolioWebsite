import React from "react";
import Image from "next/image";
import { Button } from "./ui/MovingBorder";

const projects = [
  {
    name: "AI-Powered Grading Assistant",
    description:
      "Built an AI-driven web application using Django and React to automate grading for various submission types. Integrated OpenAI API for generating instant feedback and implemented robust role-based access controls to secure student data.",
    technologies: ["React", "Django", "MongoDB", "OpenAI"],
    github: "https://github.com/Tejashsoni2305/ai-grading-assistant",
    image: "/ai-grading.png", // Placeholder image
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
    image: "/workout-tracker.png",
  },
  {
    name: "H and E IT Services Website Freelance Project",
    description:
      "Created a professional single-page application for an IT services company, showcasing services and providing an intuitive contact form. Delivered a responsive and visually appealing design using React and TailwindCSS.",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/Tejashsoni2305/it-services-website", // Replace with actual GitHub link
    image: "/it-services.png", // Replace with actual project image
  },
  {
    name: "Weather Forecasting Web Application",
    description:
      "Built and deployed a responsive weather app using Vue.js, TailwindCSS, and OpenWeatherAPI for real-time weather data. Users can save favorite cities and quickly view weather updates. Optimized UI with smooth transitions and dynamic icons to enhance user experience.",
    technologies: ["Vue.js", "TailwindCSS", "OpenWeatherAPI"],
    github: "https://github.com/Tejashsoni2305/vue-weather-app", // Replace with actual GitHub link
    image: "/vue-weather.png", // Replace with actual project image
  }
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gray-100 dark:bg-black-100"
    >
      <div className="flex justify-center items-center mb-10">
          <Button className="px-10 cursor-default pointer-events-none" borderRadius="1.75rem">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white">
                My Projects
              </h2>
          </Button>
      </div>
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
                quality={100} // High quality
                placeholder="blur" // Blur placeholder
                blurDataURL="/placeholder.png" // Optional: Placeholder image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    className="text-xs font-bold py-1 px-3 rounded-lg shadow-md transition-transform duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:scale-105 hover:shadow-lg"
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
