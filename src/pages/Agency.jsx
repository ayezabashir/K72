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
  const triggerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(mainWrapperRef.current, {
        backgroundColor: "#000000",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          end: "top 75%",
          scrub: 1,
        },
      });
    },
    { scope: mainWrapperRef },
  );

  return (
    <div ref={mainWrapperRef} className="bg-white transition-colors">
      <HeroContent />
      <AgencyGrid />
      <div ref={triggerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full z-10 overflow-hidden">
          <MarqueeContent
            bg_text1="MARIE-PIER"
            bg_text2="DAIGLE"
            bg_text3="Maquettiste"
            center_img="https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca"
          />
        </div>

        <div className="absolute bottom-0 left-0 h-screen w-full z-20 ">
          <MarqueeContent
            bg_text1="stephanie"
            bg_text2="BRUNELLE"
            bg_text3="Account Manager"
            center_img="https://k72.ca/images/teamMembers/MEGGIE_640X980_2.jpg?w=640&h=960&s=7d78cdb1fad347408e05a311cc4018ef"
          />
        </div>
      </div>
      <div className="h-[50vh] bg-black"></div>
    </div>
  );
};


export default Agency;
