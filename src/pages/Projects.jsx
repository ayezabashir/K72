import Works from "../components/projects/Works";

const Projects = () => {
  return (
    <div className="bg-white p-4 relative">
      <div className="pt-[45vh]">
        <h2 className="uppercase font-[lausanne-regular] text-[10vw]">
          Work<sup className="text-[75px]">17</sup>{" "}
        </h2>
      </div>
      <Works />
    </div>
  );
}

export default Projects