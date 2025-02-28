import React from "react";
import { Button } from "./ui/MovingBorder";
const experiences = [
  {
    company: "Silver Touch Technologies Ltd.",
    location: "Remote",
    role: "Software Developer Intern",
    duration: "Sept 2023 – April 2024",
    achievements: [
      "Developed secure and scalable backend services using Python (Django/Flask) and Node.js, streamlining data handling for financial applications.",
      "Enhanced query efficiency in PostgreSQL and MongoDB, achieving 25% faster data retrieval through indexing and query optimization.",
      "Built data pipelines to process structured data from JSON, HTML, and CSV formats, enabling actionable insights for analytics workflows.",
      "Improved system reliability by implementing unit tests and CI/CD pipelines, reducing deployment errors by 15%.",
    ],
  },
  {
    company: "University of Windsor",
    location: "Windsor, ON",
    role: "Teaching Assistant",
    duration: "Aug 2022 – Aug 2023",
    achievements: [
      "Mentored 50+ students in Python programming, increasing assignment success rates by 20% through guidance in core concepts and one-to-one doubt-solving sessions during office hours.",
      "Reviewed 200+ assignments, improving class performance by 15% through detailed feedback.",
      "Managed technical setup for 30+ Hyflex lectures, ensuring seamless hybrid learning for 100+ students.",
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
