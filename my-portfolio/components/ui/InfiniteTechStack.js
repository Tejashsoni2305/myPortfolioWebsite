"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteTechStack = ({
  techStack,
  direction = "left",
  speed = "fast",
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 sm:gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )} // Removed hover:[animation-play-state:paused]
      >
        {techStack.map((tech, idx) => (
          <li
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-xl flex-shrink-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center shadow-lg"
            key={tech.name}
          >
            <div className="flex flex-col items-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2"
                style={{
                  filter: "none",
                }}
              />
              <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">
                {tech.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
