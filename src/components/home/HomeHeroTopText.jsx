import Video from "./Video";

const HomeHeroTopText = () => {
  return (
    <div className="p-3">
      <h1 className="w-full text-[9.5vw] uppercase leading-[0.87] text-center py-0 px-[10vw] grow ">
        <div className="pt-2">
          <span>The spark for</span>
        </div>
        <div className="pt-2 flex justify-center items-baseline">
          <span>all</span>
          <div className="h-24 w-52 aspect-video rounded-full overflow-hidden isolate">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Video />
            </div>
          </div>
          <span>things</span>
        </div>
        <div className="pt-2">
          <span>creative</span>
        </div>
      </h1>
    </div>
  );
};

export default HomeHeroTopText;
