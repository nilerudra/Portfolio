const experiences = [
  {
    title: "Web Development Intern",
    company: "Sublime Technologies",
    duration: "July 2024 – Dec 2024",
    description: [
      "Worked closely with the design and product teams to translate wireframes into highly interactive and responsive UI components which improved cross-team communication.",
    ],
  },
  {
    title: "Desktop Application Developer Intern",
    company: "Nataraj Services Pvt Ltd",
    duration: "2022 – 2023",
    description: [
      "Contributed to 'The Best Abacus' project using C# and SQL.",
      "Developed features and managed backend data.",
      "Gained hands-on experience in software design and debugging.",
    ],
  },
];

const ExperienceSection = () => (
  <section className="bg-[#f6f3f2] py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-light text-center text-gray-800 mb-12 uppercase tracking-widest">
        Experience
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {experiences.map(({ title, company, duration, description }, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 h-full flex flex-col justify-between group transition hover:shadow-md bg-white"
          >
            <div>
              <span className="text-sm text-gray-400 mb-2 block font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-wide text-gray-800 mb-2 uppercase">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 italic">
                {company} | {duration}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                {description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <button className="flex items-center gap-2 mt-6 text-xs text-gray-600 hover:text-gray-900 transition group">
              <span className="inline-block w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-600 transition bg-white/60 backdrop-blur">
                <span className="rotate-45 text-lg">↗</span>
              </span>
              <span className="uppercase tracking-wider">Know More</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
