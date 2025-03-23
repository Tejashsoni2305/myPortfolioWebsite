import React from "react";
import { Button } from "./ui/MovingBorder";
const experiences = [
  {
    company: "Opreto inc.",
    location: "Remote",
    role: "Software Engineer",
    duration: "Sept 2024 – Present",
    achievements: [
      
    ],
  },
  {
    company: "Silver Touch Technologies Ltd.",
    location: "Remote",
    role: "Software Developer Intern",
    duration: "Sept 2023 – April 2024",
    achievements: [
      
    ],
  },
  {
    company: "University of Windsor",
    location: "Windsor, ON",
    role: "Teaching Assistant",
    duration: "Aug 2022 – Aug 2023",
    achievements: [
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-gray-100 dark:bg-black-100"
    >
      <div className="flex justify-center items-center mb-10">
              <Button className="px-10 cursor-default pointer-events-none" borderRadius="1.75rem">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white">
                  Experience
                </h2>
              </Button>
        </div>
      <div className="max-w-5xl mx-auto space-y-8 px-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {experience.role}{" "}
              <span className="text-base text-gray-600 dark:text-gray-400">
                @ {experience.company}
              </span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {experience.location} | {experience.duration}
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-800 dark:text-gray-300"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
