const WorkCard = ({ card_img }) => {
  return (
    <div className="h-[500px] w-full">
      <div className="group relative h-full cursor-pointer transition-all ease-linear hover:rounded-2xl overflow-hidden">
        <img className="h-full w-full object-cover" src={card_img} alt="" />
        <div className="opacity-0 group-hover:opacity-100 transition-all ease-linear absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase text-4xl px-5 leading-none pt-1 font-[lausanne-regular] border-2 rounded-full text-white">
            VIEW PROJECT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
