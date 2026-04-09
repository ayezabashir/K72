/* eslint-disable react-hooks/set-state-in-effect */
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { navLinks } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNavBar = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  const [time, setTime] = useState("");
  useEffect(() => {
    let timerId;

    const getMontrealTime = () => {
      return new Date().toLocaleTimeString("en-CA", {
        timeZone: "America/Montreal",
        timeStyle: "medium",
        hour12: true,
      });
    };

    if (navOpen) {
      setTime(getMontrealTime());
      timerId = setInterval(() => {
        setTime(getMontrealTime());
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [navOpen]);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          gsap.set(containerRef.current, { display: "none" });
        },
      });
      tl.current
        .set(containerRef.current, { display: "block" })
        .to(".stairing", {
          height: "100%",
          stagger: 0.1,
          ease: "power4.inOut",
          duration: 0.6,
        })
        .from(
          ".link-item",
          {
            opacity: 0,
            y: 30,
            rotateX: 90,
            stagger: 0.1,
            duration: 0.4,
          },
          "-=0.3",
        )
        .from(".close", {
          opacity: 0,
          y: 30,
        });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (navOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [navOpen]);

  return (
    <div
      ref={containerRef}
      className="fullscreenNav hidden fixed top-0 left-0 w-full min-h-screen bg-transparent z-99 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full flex z-0 pointer-events-none">
        <div className="stairing bg-black w-1/5 h-0"></div>
        <div className="stairing bg-black w-1/5 h-0"></div>
        <div className="stairing bg-black w-1/5 h-0"></div>
        <div className="stairing bg-black w-1/5 h-0"></div>
        <div className="stairing bg-black w-1/5 h-0"></div>
      </div>
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="p-4 flex justify-between items-center border-b border-gray-600">
          <Link to="/" onClick={() => setNavOpen(false)}>
            <svg width="103" height="44" viewBox="0 0 103 44">
              <path
                fill="#fff"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              />
            </svg>
          </Link>
          <button
            type="button"
            className="close text-white hover:text-[#d3fd50] cursor-pointer absolute top-10 right-0 leading-0"
            aria-label="Close"
            onClick={() => setNavOpen(false)}
          >
            <span
              className="text-[200px] leading-0 font-thin"
              aria-hidden="true"
            >
              &times;
            </span>
          </button>
        </div>

        <ul
          id="allLinks"
          className="flex-1 flex flex-col justify-center text-white"
        >
          {navLinks.map((link, index) => (
            <NavItem
              key={index}
              title={link.title}
              hoverText={link.hoverText}
              images={link.images}
            />
          ))}
        </ul>

        <div className="p-4 flex justify-between items-center border-b border-gray-600 text-white">
          <div className="flex items-center gap-2">
            <img className="w-9" src="images/globe_icon.png" alt="globe icon" />
            <p className="font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-sm">
              MONTREAL_<span>{time}</span>
            </p>
          </div>
          <ul className="flex flex-1 items-center justify-center gap-5">
            <li className="font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-xs uppercase">
              privacy policy
            </li>
            <li className="font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-xs uppercase">
              privacy notice
            </li>
            <li className="font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-xs uppercase">
              ethics report
            </li>
            <li className="font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-xs uppercase">
              consent choice
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <p className="px-3 py-0 uppercase font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-3xl border-2 rounded-full">
              FB
            </p>
            <p className="px-3 py-0 uppercase font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-3xl border-2 rounded-full">
              IG
            </p>
            <p className="px-3 py-0 uppercase font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-3xl border-2 rounded-full">
              IN
            </p>
            <p className="px-3 py-0 uppercase font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-3xl border-2 rounded-full">
              BE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNavBar;
