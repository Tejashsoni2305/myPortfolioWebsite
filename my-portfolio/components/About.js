"use client";
import React from "react";
import TechStackSection from "./TechStackSection";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="pt-10 pb-16 sm:py-20 bg-gray-100 dark:bg-black-100 flex flex-col items-center justify-center"
    >
      <div className="text-center max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white">
          About Me
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-100 mb-4 leading-relaxed">
          Hi, I'm Tejash Soni, a passionate Full-Stack Developer with a strong
          focus on crafting seamless and engaging digital solutions. I thrive on
          solving complex problems and delivering user-centric applications that
          make a real impact.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed">
          With a robust foundation in programming, frameworks, and databases, I bring expertise in building dynamic web and mobile applications that prioritize performance, security, and scalability.
        </p>
      </div>
      <div className="w-full mt-10">
        <TechStackSection />
      </div>
    </section>
  );
};

export default AboutSection;
