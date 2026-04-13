const Project = ({ bg_img, title, subtitle }) => {
  return (
    <div className="relative w-full h-full group cursor-pointer">
      <img
        src={bg_img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
        <h3 className="text-white text-xl md:text-2xl font-[lausanne-light] mb-2">
          {title}
        </h3>
        <p className="text-white text-4xl md:text-7xl group-hover:underline underline-offset-4 uppercase font-[lausanne-regular]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default Project;
