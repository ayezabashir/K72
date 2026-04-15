import { useState } from "react";
import { createPortal } from "react-dom";
import Works from "../components/projects/Works";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="bg-white ">
      {createPortal(
        <div
          className={`fixed top-0 left-0 w-full h-15 bg-white text-black z-[9999] transition-opacity duration-300 border-y border-black flex justify-between items-center p-4 ${
            hoveredProject ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="font-[lausanne-regular] text-xl capitalize">
            {hoveredProject?.title}
          </p>
          <p className="font-[lausanne-regular] text-xl capitalize">
            {hoveredProject?.subtitle}
          </p>
          <p className="font-[lausanne-regular] text-xl capitalize">
            {hoveredProject?.year}
          </p>
        </div>,
        document.body,
      )}
      <div className="pt-[45vh]">
        <h2 className="uppercase font-[lausanne-regular] text-[10vw]">
          Work<sup className="text-[75px]">17</sup>
        </h2>
      </div>

      <Works setHoveredProject={setHoveredProject} />
    </div>
  );
};

export default Projects;
