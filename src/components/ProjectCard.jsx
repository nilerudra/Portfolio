const ProjectCard = ({ title, image }) => {
  return (
    <div className="bg-[#f5f5f5] rounded shadow-lg overflow-hidden relative group h-[400px]">
      <div className="absolute inset-0 z-10 transition-transform group-hover:-translate-y-20">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="absolute bottom-4 text-center w-full z-20">
        <h3 className="font-bold text-lg text-white drop-shadow-lg">{title}</h3>
      </div>

      <ul className="absolute bottom-0 w-full flex justify-center gap-4 transform translate-y-24 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
        <li className="bg-white p-3 rounded-full shadow-md cursor-pointer">
          <svg className="w-6 h-6 fill-[#252525]" />
        </li>
        <li className="bg-white p-3 rounded-full shadow-md cursor-pointer">
          <svg className="w-6 h-6 fill-[#252525]" />
        </li>
        <li className="bg-white p-3 rounded-full shadow-md cursor-pointer">
          <svg className="w-6 h-6 fill-[#252525]" />
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
