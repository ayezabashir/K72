import { useRef } from "react";
import { Link } from "react-router-dom";
const NavBlock = ({
  to,
  linkLabel,
  menuLabel,
  menuLabelText,
  height,
  width,
  onClick,
}) => {
  const navGreenRef = useRef(null);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onMouseEnter={() => {
        navGreenRef.current.style.height = "100%";
      }}
      onMouseLeave={() => {
        navGreenRef.current.style.height = "0%";
      }}
      onClick={handleClick}
      className={`bg-black group ${width} ${height} cursor-pointer relative overflow-hidden flex flex-col justify-end`}
    >
      <div
        ref={navGreenRef}
        className="bg-[#d3fd50]  transition-all duration-300 absolute top-0 left-0 w-full h-0 z-0"
      ></div>

      <div className="relative z-10 p-2 h-full pointer-events-none">
        {linkLabel && (
          <Link
            className="text-white flex h-full hover:text-black justify-start items-end uppercase font-bold text-lg pointer-events-auto"
            to={to}
            onClick={(e) => e.stopPropagation()}
          >
            {linkLabel}
          </Link>
        )}

        {menuLabel && (
          <div
            className={`h-full flex flex-col ${menuLabelText ? " justify-between" : "justify-center"} `}
          >
            <div className="flex flex-col items-end gap-1 mb-1">
              <div className="h-0.5 w-10 bg-white group-hover:bg-black"></div>
              <div className="h-0.5 w-6 bg-white group-hover:bg-black"></div>
            </div>
            <p className="text-white group-hover:text-black uppercase font-bold text-lg mt-1">
              {menuLabelText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBlock;
