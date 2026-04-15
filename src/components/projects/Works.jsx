import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectRows } from "./data";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

const Works = ({ setHoveredProject }) => {
  const container = useRef();
  useGSAP(
    () => {
      const rows = gsap.utils.toArray(".project-row");
      rows.forEach((row) => {
        const cards = row.querySelectorAll(".work-card-wrapper");
        gsap.fromTo(
          cards,
          { height: "20px" },
          {
            height: "520px",
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
    <div ref={container} className="w-full">
      {projectRows.map((row) => (
        <div
          key={row.rowId}
          className="project-row w-full min-h-130 mb-4 flex gap-4"
        >
          <WorkCard
            onMouseEnter={(data) => setHoveredProject(data)}
            onMouseLeave={() => setHoveredProject(null)}
            card_img1={row.leftProject.image}
            card_one_title={row.leftProject.title}
            card_one_subtitle={row.leftProject.subtitle}
            card_one_year={row.leftProject.year}
            card_img2={row.rightProject?.image}
            card_two_title={row.rightProject?.title}
            card_two_subtitle={row.rightProject?.subtitle}
            card_two_year={row.rightProject?.year}
          />
        </div>
      ))}
    </div>
  );
};

export default Works;
