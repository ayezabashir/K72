import { useGSAP } from "@gsap/react";
import AgencyGrid from "../components/agency/AgencyGrid";
import HeroContent from "../components/agency/HeroContent";
import MarqueeContent from "../components/agency/MarqueeContent";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  const mainWrapperRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(mainWrapperRef.current, {
        backgroundColor: "#000000",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });
    },
    { scope: mainWrapperRef },
  );

  return (
    <div
      ref={mainWrapperRef}
      className="bg-white transition-colors duration-500"
    >
      <HeroContent />
      <AgencyGrid />
      <div
        ref={marqueeRef}
        className=" min-h-screen py-50 w-full overflow-x-hidden"
      >
        <MarqueeContent
          bg_text1="MARIE-PIER"
          bg_text2="DAIGLE"
          bg_text3="Maquettiste"
          center_img="https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca"
        />
        <MarqueeContent
          bg_text1="stephanie"
          bg_text2="BRUNELLE"
          bg_text3="Account Manager"
          center_img="https://k72.ca/images/teamMembers/MEGGIE_640X980_2.jpg?w=640&h=960&s=7d78cdb1fad347408e05a311cc4018ef"
        />
      </div>
    </div>
  );
};

export default Agency;
