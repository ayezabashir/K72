import { useRef } from "react";

const AgencyPerson = ({ name, role, onMouseEnter }) => {
  const navGreenRef = useRef(null);

  return (
    <div
      onMouseEnter={() => {
        onMouseEnter();
        navGreenRef.current.style.height = "100%";
      }}
      onMouseLeave={() => {
        navGreenRef.current.style.height = "0%";
      }}
      className="flex flex-col group relative overflow-hidden p-4 cursor-pointer border-t border-white w-full"
    >
      <div
        ref={navGreenRef}
        className="bg-[#d3fd50] transition-all duration-300 absolute top-0 left-0 w-full h-0 z-0"
      ></div>
      <div className="relative z-10 flex justify-between items-center w-full">
        <span className="text-base text-white font-[lausanne-regular] group-hover:text-black ">
          {role}
        </span>
        <span className="text-xl md:text-3xl text-white font-[lausanne-regular] group-hover:text-black ">
          {name}
        </span>
      </div>
    </div>
  );
};

export default AgencyPerson;
