const Project = ({ bg_img, title, subtitle}) => {
  return (
    <div className="project relative px-10 h-screen w-full rounded-4xl overflow-hidden group">
      <div className="bg-img absolute object-cover top-0 left-0 h-full w-full">
        <img
          className="group-hover:scale-105 transition-all duration-200 ease-linear"
          src={bg_img}
          alt=""
        />
      </div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col  justify-center items-center w-full">
        <h3 className="text-[30px] text-white font-[lausanne-light]">
          {title}
        </h3>
        <p className="text-[80px] text-white font-[lausanne-regular] group-hover:underline transition-all duration-200 ease-linear underline-offset-5">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Project