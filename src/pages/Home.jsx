import React from "react";
import Video from "../components/home/Video";
import HomeHeroTopText from "../components/home/HomeHeroTopText";
import HomeHeroBottomText from "../components/home/HomeHeroBottomText";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between p-3 overflow-x-hidden">
        <HomeHeroTopText />
        <HomeHeroBottomText />
      </div>
    </div>
  );
};

export default Home;
