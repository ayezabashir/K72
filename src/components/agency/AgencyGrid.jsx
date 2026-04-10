import { aboutContent } from "./data";

const AgencyGrid = () => {
  const { expertise, missionStatements } = aboutContent;
  return (
    <div className="px-[9vw] my-20 grid grid-cols-3 grid-rows-2 gap-[5vw]">
      <div>
        <p className="font-[lausanne-regular] text-lg mix-blend-difference text-white">{expertise.title}</p>
      </div>
      <div>
        <ul>
          {expertise.list.map((li, index) => (
            <li className="font-[lausanne-regular] text-lg mix-blend-difference text-white" key={index}>{li}</li>
          ))}
        </ul>
      </div>
      <div></div>
      {missionStatements.map((item, index) => (
        <div key={index}>
          <p className="font-[lausanne-regular] text-lg mix-blend-difference text-white">
            {item.label}_{item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AgencyGrid;
