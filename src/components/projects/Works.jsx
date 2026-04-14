import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectRows } from "./data";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const container = useRef();
  useGSAP(
    () => {
      const rows = gsap.utils.toArray(".project-row");
      rows.forEach((row) => {
        const cards = row.querySelectorAll(".work-card-wrapper");
        gsap.fromTo(
          cards,
          { height: "60px" }, 
          {
            height: "600px",
            ease: "power2.out", 
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "bottom 80%", 
              scrub: 1, 
              invalidateOnRefresh: true,
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="w-full py-40">
      {projectRows.map((row) => (
        <div
          key={row.rowId}
          className="project-row w-full min-h-[600px] mb-[30vh] flex gap-8 px-10"
        >
          <WorkCard
            card_img1={row.leftProject.image}
            card_img2={row.rightProject?.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Works;
