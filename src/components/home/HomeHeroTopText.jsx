import { useRef } from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeHeroTopText = () => {
  const circleRef = useRef(null);
  const ellipseRef = useRef(null);
  useGSAP(() => {
    const ellipse = ellipseRef.current;
    const length = ellipse.getTotalLength();

    gsap.set(ellipse, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({repeat: -1, repeatDelay:1});
    tl.to(ellipse, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })
    .to(circleRef.current,{
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat:1,
    })
  },{scope: circleRef});
  return (
    <div>
      <h1 className="w-full text-[9.5vw] uppercase leading-[0.87] text-center py-0 px-[10vw] grow ">
        <div className="pt-2">
          <span>The spark for</span>
        </div>
        <div className="pt-2 flex justify-center items-baseline">
          <span>all</span>
          <div className="h-24 w-52 aspect-video rounded-full overflow-hidden isolate">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Video />
            </div>
          </div>
          <span>things</span>
        </div>
        <div className="pt-2 circle relative">
          <svg
            ref={circleRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 573.46 105.38"
          >
            <ellipse
              ref={ellipseRef}
              cx="286.73"
              cy="52.69"
              rx="284.73"
              ry="50.69"
              className="stroke-[#d3fd50] stroke-2 fill-transparent"
              style={{ strokeLinecap: "round" }}
            ></ellipse>
          </svg>
          <span>creative</span>
        </div>
      </h1>
    </div>
  );
};

export default HomeHeroTopText;
