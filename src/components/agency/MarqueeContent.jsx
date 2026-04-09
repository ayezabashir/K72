const MarqueeContent = ({ bg_text1, bg_text2, bg_text3, center_img }) => {
  return (
    <div className="relative w-full h-screen">
      <div className=" py-50">
        <div className="flex justify-between flex-nowrap z-1">
          <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
            {bg_text1}
          </p>
          <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
            {bg_text1}
          </p>
        </div>
        <div className=" flex justify-between items-center flex-nowrap z-3 absolute w-[125%]">
          <div className="flex justify-between items-baseline flex-nowrap gap-5">
            <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
              {bg_text2}
            </p>
            <span className="uppercase font-[lausanne-regular] text-white">
              {bg_text3}
            </span>
          </div>
          <div className="flex justify-between items-baseline flex-nowrap gap-5">
            <p className="uppercase font-[lausanne-regular] text-[#D3FD50] text-[8vw]">
              {bg_text2}
            </p>
            <span className="uppercase font-[lausanne-regular] text-white">
              {bg_text3}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute h-screen z-2 top-0 left-1/2 -translate-x-1/2 rounded-xl w-auto overflow-hidden">
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
