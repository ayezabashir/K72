const CardItem = ({
  img,
  title,
  subtitle,
  year,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="work-card-wrapper w-full self-start group relative"
    onMouseEnter={() => onMouseEnter({ title, subtitle, year })}
    onMouseLeave={onMouseLeave}
  >
    <div className="relative h-full w-full cursor-pointer hover:rounded-3xl transition-all duration-500 overflow-hidden">
      <img className="h-full w-full object-cover" src={img} alt="project" />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-black/20">
        <h2 className="uppercase text-4xl px-8 py-2 border-2 rounded-full text-white backdrop-blur-sm">
          VIEW PROJECT
        </h2>
      </div>
    </div>
  </div>
);

const WorkCard = ({
  onMouseEnter,
  onMouseLeave,
  card_img1,
  card_one_title,
  card_one_subtitle,
  card_one_year,
  card_img2,
  card_two_title,
  card_two_subtitle,
  card_two_year,
}) => {
  return (
    <>
      <CardItem
        img={card_img1}
        title={card_one_title}
        subtitle={card_one_subtitle}
        year={card_one_year}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      {card_img2 && (
        <CardItem
          img={card_img2}
          title={card_two_title}
          subtitle={card_two_subtitle}
          year={card_two_year}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
    </>
  );
};

export default WorkCard;
