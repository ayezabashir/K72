import { useRef } from "react";

const AgencyPerson = ({ name, role }) => {
  const navGreenRef = useRef(null);

  return (
    <div
      onMouseEnter={() => {
        navGreenRef.current.style.height = "100%";
      }}
      onMouseLeave={() => {
        navGreenRef.current.style.height = "0%";
      }}
      className="flex flex-col group relative overflow-hidden p-4 cursor-pointer border-t hover:border-t-0 border-white"
    >
      <div
        ref={navGreenRef}
        className="bg-[#d3fd50] transition-all duration-300 absolute top-0 left-0 w-full h-0 z-0"
      ></div>
      <div className="relative z-10 flex justify-between">
        <span className="text-base text-white group-hover:text-black font-[lausanne-regular] ">
          {role}
        </span>
        <span className="text-3xl text-white group-hover:text-black font-[lausanne-regular]">
          {name}
        </span>
      </div>
    </div>
  );
};

export default AgencyPerson;
