const CardItem = ({ img }) => (
  <div className="work-card-wrapper w-full overflow-hidden self-start">
    <div className="group relative h-full w-full cursor-pointer hover:rounded-3xl transition-all duration-500 overflow-hidden">
      <img className="h-full w-full object-cover" src={img} alt="project" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-black/20">
        <h2 className="uppercase text-4xl px-8 py-2 border-2 rounded-full text-white backdrop-blur-sm">
          VIEW PROJECT
        </h2>
      </div>
    </div>
  </div>
);

const WorkCard = ({ card_img1, card_img2 }) => {
  return (
    <>
      <CardItem img={card_img1} />
      {card_img2 && <CardItem img={card_img2} />}
    </>
  );
};

export default WorkCard;
