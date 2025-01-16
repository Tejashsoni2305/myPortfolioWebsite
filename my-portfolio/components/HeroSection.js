import React from 'react';
import { Spotlight } from './ui/Spotlight.js';
import { TextGenerateEffect } from './ui/text-generate-effects.js';
import MagicButton from './ui/MagicButton.js';

export default function HeroSection() {
  return (
    <div className="pb-20 pt-36 relative mb-20"> {/* Adjusted spacing */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container */}
        <div className="absolute inset-0 pointer-events-none dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Transforming Ideas into Reality
          </p>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Bringing Innovation to Life Through Code"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black dark:text-white">
            Hi, I&apos;m Tejash, a Full-Stack Developer crafting seamless digital solutions.
          </p>
          <a href="#tech-stack">
            <MagicButton />
          </a>
        </div>
      </div>
    </div>
  );
}
