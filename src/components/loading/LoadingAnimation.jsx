import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const LoadingAnimation = (props) => {
  const currPath = useLocation().pathname;
  const stairRef = useRef(null);
  const loadingRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairRef.current, {
      display: "block",
    });
    tl.from(".stair-anim", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair-anim", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairRef.current, {
      display: "none",
    });
    tl.to(".stair-anim", {
      y: "0%",
    });
    gsap.from(loadingRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });
  }, [currPath]);
  console.log(props);
  return (
    <div>
      <div ref={stairRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stair-anim bg-black w-1/5 h-full"></div>
          <div className="stair-anim bg-black w-1/5 h-full"></div>
          <div className="stair-anim bg-black w-1/5 h-full"></div>
          <div className="stair-anim bg-black w-1/5 h-full"></div>
          <div className="stair-anim bg-black w-1/5 h-full"></div>
        </div>
      </div>
      <div ref={loadingRef}>{props.children}</div>
    </div>
  );
};

export default LoadingAnimation;
