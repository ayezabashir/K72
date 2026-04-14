import { projects } from "./data";
import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <div className="-mt-12">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {projects.map((project) => (
          <WorkCard key={project.title} card_img={project.image} />
        ))}
      </div>
    </div>
  );
};

export default Works;
