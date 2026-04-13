import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./data";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

const AgencyProjects = () => {
  const container = useRef(null);

  return (
    <div ref={container} className="relative bg-black w-full py-50">
      <div className="sticky top-10 z-100 w-full pointer-events-none">
        <h4 className="uppercase text-2xl font-[lausanne-regular] cursor-pointer text-center text-white hover:text-[#D3FD50] pointer-events-auto">
          view all projects
        </h4>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{
              zIndex: index + 1,
              paddingTop: `${index * 2}vh`,
            }}
          >
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Project
                bg_img={project.img}
                title={project.title}
                subtitle={project.subtitle}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="h-[20vh]" />
    </div>
  );
};

export default AgencyProjects;
