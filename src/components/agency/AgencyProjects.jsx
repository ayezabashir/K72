import { projects } from "./data";
import Project from "./Project";

const AgencyProjects = () => {
  return (
    <div className="py-40 relative">
      <div className="absolute top-47.5 z-10 w-full">
        <h4 className="uppercase text-2xl font-[lausanne-regular] cursor-pointer text-center text-white hover:text-[#D3FD50]">
          view all projects
        </h4>
      </div>
      {projects.map((project, index) => (
        <Project
          key={index}
          bg_img={project.img}
          title={project.title}
          subtitle={project.subtitle}
        />
      ))}
    </div>
  );
};

export default AgencyProjects;
