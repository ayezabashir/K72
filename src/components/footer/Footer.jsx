import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getMontrealTime = () => {
      return new Date().toLocaleTimeString("en-CA", {
        timeZone: "America/Montreal",
        timeStyle: "medium",
        hour12: true,
      });
    };
    setTime(getMontrealTime());

    const timerId = setInterval(() => {
      setTime(getMontrealTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []); 
  return (
    <footer className="bg-black text-white flex flex-col justify-between min-h-[62vh] p-2.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {["FB", "IG", "IN", "BE"].map((soc) => (
            <p
              key={soc}
              className="px-5 py-0 h-15 leading-none uppercase  text-[5vw] font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer border-2 rounded-full"
            >
              {soc}
            </p>
          ))}
        </div>
        <div>
          <p className="px-5 py-0 h-15 leading-none uppercase  text-[5vw] font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer border-2 rounded-full">
            Contact
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img
            className="w-6 md:w-9"
            src="images/globe_icon.png"
            alt="globe icon"
          />
          <p className="font-[lausanne-regular]">Monteral_{time}</p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {[
            "privacy policy",
            "privacy notice",
            "ethics report",
            "consent choice",
          ].map((item) => (
            <li
              key={item}
              className="font-[lausanne-regular] text-white hover:text-[#d3fd50] cursor-pointer text-[10px] md:text-sm uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <p className="uppercase text-white font-[lausanne-regular]">
            Back to top
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
