import { useRef, useState } from "react";
import AgencyPerson from "./AgencyPerson";
import { agencyPeople } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AgencyPeople = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const imgsRef = useRef([]);
  const imageArray = agencyPeople.map((item) => item.image);

  useGSAP(() => {
    if (activeIndex !== null) {
      const activeImg = imgsRef.current[activeIndex];

      imgsRef.current.forEach((img, i) => {
        if (i !== activeIndex && img) {
          gsap.set(img, { opacity: 0, zIndex: 1 });
        }
      });

      if (activeImg) {
        gsap.fromTo(
          activeImg,
          {
            opacity: 1,
            zIndex: 10,
            clipPath: "inset(0 100% 0 0)",
          },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
        );
      }
    }
    else {
      imgsRef.current.forEach((img) => {
        if (img) {
          gsap.to(img, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      });
    }
  }, [activeIndex]);

  return (
    <div
      className="agency_people relative w-full bg-black"
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="sticky top-0 h-screen w-full z-20 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="people_img relative h-125 w-88 rounded-3xl overflow-hidden bg-transparent shadow-2xl">
          {imageArray.map((src, i) => (
            <img
              key={i}
              ref={(el) => (imgsRef.current[i] = el)}
              src={src}
              alt="agency person"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0 }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full mt-[-100vh]">
        {agencyPeople.map((item, index) => (
          <AgencyPerson
            key={item.name}
            name={item.name}
            role={item.role}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AgencyPeople;
