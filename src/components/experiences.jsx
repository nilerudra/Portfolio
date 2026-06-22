const experiences = [
  {
    title: "Software Development Associate - Full Stack",
    company: "Synegrow",
    duration: "Mar 2026 – June 2026",
    description: [
      "Built scalable backend services using NestJS and SQL databases.",
      "Integrated Cashfree and PayU payment gateways.",
      "Developed Shopify automations, webhooks and order workflows.",
      "Designed and optimized production REST APIs.",
    ],
    skills: ["NestJS", "Node.js", "PostgreSQL", "Shopify", "Cashfree"],
  },
  {
    title: "Full Stack Developer",
    company: "Farmseasy Tech Solutions",
    duration: "May 2025 – Feb 2026",
    description: [
      "Developed React.js interfaces for SaaS applications.",
      "Built Node.js & Express APIs.",
      "Worked with MongoDB and MySQL databases.",
      "Participated in deployment and CI/CD workflows.",
    ],
    skills: ["React", "Node.js", "MongoDB", "MySQL", "Tailwind"],
  },
  {
    title: "Junior Software Development Engineer",
    company: "Digital Cafeteria Solutions",
    duration: "Nov 2023 – Jan 2025",
    description: [
      "Worked on TheFooods B2B platform.",
      "Developed dashboards for companies and vendors.",
      "Created responsive UI using React.js.",
      "Collaborated with senior developers in Agile teams.",
    ],
    skills: ["React", "JavaScript", "REST APIs", "MySQL"],
  },
];

const ExperienceSection = () => (
  <section className="bg-[#f6f3f2] py-16 px-4" id="experience">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
          Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Professional Experience
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Building products across SaaS, E-Commerce, FinTech, and Real-Time
          Applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {experiences.map(
          ({ title, company, duration, description, skills }, index) => (
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
                <p className="text-sm text-yellow-600 font-medium mb-4 italic">
                  {company} | {duration}
                </p>

                <ul className="text-sm text-gray-600 space-y-1">
                  {description.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600">
                      <span className="text-yellow-500 font-bold">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
