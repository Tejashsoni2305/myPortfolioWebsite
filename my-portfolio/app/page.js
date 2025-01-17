import Image from "next/image";
import HeroSection from "@/components/HeroSection.js";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
import ExperienceSection from "@/components/ExperienceSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
      <main className="relative bg-black-100 overflow-hidden flex flex-col justify-center items-center mx-auto sm:px-10 px-5"> 
          <div className="max-w-7xl w-full">  
            <FloatingNav 
             navItems={[{name: "Home", link: "#"}, {name: "About", link: "#about"}, {name: "Projects", link: "#projects"}, {name: "Experience", link: "#experience"}, {name: "Contact", link: "#contact"}]}
            />    
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactForm />
          </div>
      </main>
  );
}
