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
    <div>
      <div>
        <div className="flex items-center gap-3 md:gap-5">
          {["FB", "IG", "IN", "BE"].map((soc) => (
            <p
              key={soc}
              className="px-2 md:px-3 py-0 uppercase font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-xl md:text-3xl border-2 rounded-full"
            >
              {soc}
            </p>
          ))}
        </div>
        <div>
          <p className="px-2 md:px-3 py-0 uppercase font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-xl md:text-3xl border-2 rounded-full">
            Contact
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <img
          className="w-6 md:w-9"
          src="images/globe_icon.png"
          alt="globe icon"
        />
        <p className="font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-xs md:text-sm">
          MONTREAL_<span>{time}</span>
        </p>
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
            className="font-[lausanne-regular] hover:text-[#d3fd50] cursor-pointer text-[10px] md:text-xs uppercase"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
