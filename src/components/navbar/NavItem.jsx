import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavItem = ({ title, hoverText, images }) => {
  const containerRef = useRef(null);
  const moveLinkRef = useRef(null);
  const animation = useRef(null);

  useGSAP(
    () => {
      animation.current = gsap.fromTo(
        moveLinkRef.current,
        { height: "0%", opacity: 0 },
        {
          height: "100%",
          opacity: 1,
          duration: 0.4,
          ease: "power3.inOut",
          paused: true,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <li
      ref={containerRef}
      onMouseEnter={() => animation.current.play()}
      onMouseLeave={() => animation.current.reverse()}
      className="link-item flex-1 flex items-center justify-center relative border-b border-gray-400 cursor-pointer overflow-hidden group w-full"
    >
      <h1 className="text-[7.5vw] text-white uppercase text-center leading-none">
        {title}
      </h1>
      <div
        ref={moveLinkRef}
        className="absolute flex top-0 left-0 bg-[#d3fd50] text-black w-full h-full overflow-hidden items-center z-10"
      >
        {[1, 2].map((m) => (
          <div
            key={m}
            className="flex items-center nav-move gap-10 whitespace-nowrap"
          >
            <h2 className="font-[lausanne-light] text-[7.5vw] ml-10">
              {hoverText}
            </h2>
            <img
              className="h-20 w-40 shrink-0 object-cover rounded-full"
              src={images[0]}
              alt=""
            />
            <h2 className="font-[lausanne-light] text-[7.5vw]">{hoverText}</h2>
            <img
              className="h-20 w-40 shrink-0 object-cover rounded-full"
              src={images[1]}
              alt=""
            />
          </div>
        ))}
      </div>
    </li>
  );
};

export default NavItem;
