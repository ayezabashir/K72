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
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
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
          className="image-container absolute h-70 w-50 rounded-3xl overflow-hidden top-56 left-[30vw] pointer-events-none bg-black"
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
        <div className="pt-50 pb-20 z-10">
          <h2 className="relative text-[20vw] font-bold text-center uppercase leading-[18vw]">
            SEVEN7Y <br /> TWO
          </h2>
          <div className="pl-[40.2%] mt-20">
            <p className=" relative text-6xl indent-50 font-[lausanne-light]">
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
