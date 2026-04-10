const MarqueeContent = ({ bg_text1, bg_text2, bg_text3, center_img }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="flex flex-col justify-center absolute top-[50vh] translate-y-[-50%] bg-black ">
        <div className="flex whitespace-nowrap ">
          <div className="nav-move flex shrink-0">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-[30vw] pr-[30vw]">
                <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
                  {bg_text1}
                </p>
                <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
                  {bg_text1}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex whitespace-nowrap relative z-3">
          <div className="nav-move-right flex shrink-0">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-baseline gap-[30vw] pr-[30vw]">
                <div className="flex items-baseline gap-5">
                  <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
                    {bg_text2}
                  </p>
                  <span className="uppercase font-[lausanne-regular] text-white">
                    {bg_text3}
                  </span>
                </div>
                <div className="flex items-baseline gap-5">
                  <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
                    {bg_text2}
                  </p>
                  <span className="uppercase font-[lausanne-regular] text-white">
                    {bg_text3}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 rounded-3xl h-screen w-100 overflow-hidden pointer-events-none">
        <img
          className="w-full h-full object-cover"
          src={center_img}
          alt={bg_text1}
        />
      </div>
    </div>
  );
};
export default MarqueeContent;
