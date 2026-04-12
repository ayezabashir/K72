const Project = ({ bg_img, title, subtitle}) => {
  return (
    <div className="project relative">
      <div className="bg-img">
        <img className="" src={bg_img} alt="" />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <h3 className="text-[30px] font-[lausanne-light]">{title}</h3>
        <p className="text-[80px] font-[lausanne-regular]">{subtitle}</p>
      </div>
    </div>
  );
};

export default Project