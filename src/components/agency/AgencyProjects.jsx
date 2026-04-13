import gsap from "gsap";
import { projects } from "./data";
import Project from "./Project";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AgencyProjects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const projectsEl = gsap.utils.toArray(".project-card");
    projectsEl.forEach((project) => {
      ScrollTrigger.create({
        trigger: project,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  });

  return (
    <div ref={containerRef} className="py-40 relative">
      <div className="absolute top-47.5 z-10 w-full">
        <h4 className="uppercase text-2xl font-[lausanne-regular] cursor-pointer text-center text-white hover:text-[#D3FD50] hover:uppercase">
          view all projects
        </h4>
      </div>
      <div className="project-card w-full h-screen">
        {projects.map((project, index) => (
          <Project
            key={index}
            bg_img={project.img}
            title={project.title}
            subtitle={project.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default AgencyProjects;
