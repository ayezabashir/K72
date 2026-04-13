import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroContent = () => {
  const containerRef = useRef(null);
  const imageDivRef = useRef(null);
  const imagesRef = useRef([]);

  const imageArray = [
    "/images/carl.jpg",
    "/images/Oliver.jpg",
    "/images/ChantalG.jpg",
    "/images/Michele.jpg",
    "/images/MEL.jpg",
    "/images/CAMILLE.jpg",
    "/images/MEGGIE.jpg",
    "/images/joel.jpg",
  ];

  useGSAP(
    () => {
      const totalImages = imageArray.length;
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageDivRef.current,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: true,
        anticipatePin: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (totalImages - 1));
          imagesRef.current.forEach((img, i) => {
            if (img) {
              const isActive = i === index;
              img.style.opacity = isActive ? "1" : "0";
            }
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="bg-white text-black">
      <div ref={containerRef} className="section1 relative">
        <div
          ref={imageDivRef}
          className="image-container absolute h-50 w-30 md:h-70 md:w-50 rounded-3xl overflow-hidden top-56 left-[30vw] pointer-events-none bg-black"
        >
          {imageArray.map((src, i) => (
            <img
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              src={src}
              alt={`Team ${i}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === 0 ? 1 : 0,
                transition: "opacity 0.1s linear",
              }}
            />
          ))}
        </div>
        <div className="pt-40 md:pt-75 pb-20 z-10">
          <h2 className="relative text-[20vw] font-[lausanne-regular] text-center uppercase leading-[18vw]">
            SEVEN7Y <br /> TWO
          </h2>
          <div className="p-4 md:pl-[40.2%] mt-20">
            <p className=" relative text-lg md:text-6xl indent-50 font-[lausanne-light]">
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
