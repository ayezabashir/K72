import { Link } from "react-router-dom";

const HomeHeroBottomText = () => {
  return (
    <div className="font-[lausanne-regular] flex flex-col">
      <div className="flex justify-end">
        <p className="w-60 indent-20 text-sm">
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 mt-10">
        <div className=" border-3 h-22 flex items-center px-10 pt-5 hover:border-[#d3fd50] hover:text-[#d3fd50] border-white rounded-full uppercase ">
          <Link className="text-[7vw] leading-0" to="/work">
            Work
          </Link>
        </div>
        <div className="border-3 h-22 flex items-center px-10 pt-5 hover:border-[#d3fd50] hover:text-[#d3fd50] border-white rounded-full uppercase ">
          <Link className="text-[7vw] leading-0" to="/agency">
            Agency
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroBottomText;
