const MasonryGrid = () => {
  const projects = [
    {
      title: "Lenden",
      subtitle: "Built with MERN stack",
      image: "./assets/lendenPC.png",
    },
    {
      title: "EduNexus",
      subtitle: "Firebase-powered Android app",
      image: "./assets/edunexus/main.png",
    },
    {
      title: "Weather App",
      subtitle: "React + OpenWeatherMap API",
      image: "./assets/weather app img.png",
    },
  ];

  return (
    <div className="bg-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        📌 Recent Projects
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm">{proj.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
