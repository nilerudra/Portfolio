import React from "react";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import LearningPod from "../assets/PR2.png";
import Farmseasy from "../assets/PR1.png";
import Lymlyn from "../assets/PR3.png";
import Lenden from "../assets/lenden.png";
import Hope from "../assets/Hope.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Farmseasy",
    description:
      "A smart farm management platform that helps farmers manage crops, track farm activities, access agricultural resources, and improve productivity through a user-friendly dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    image: Farmseasy,
    demo: "https://farmseasy-fawn.vercel.app/",
  },
  {
    title: "LYMLYN",
    description:
      "A smart farm management platform that helps farmers manage crops, track farm activities, access agricultural resources, and improve productivity through a user-friendly dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    image: Lymlyn,
    demo: "https://lymlyn.netlify.app/",
  },
  {
    title: "Learning Pod",
    description:
      "A collaborative learning platform featuring real-time chat, personalized learning paths, and auto-categorized resources.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind",
    ],
    image: LearningPod,
    github: "https://github.com/rudra/learning-pod",
    demo: "https://learning-pod.netlify.app",
  },
  {
    title: "Lenden",
    description:
      "A peer-to-peer transaction manager built with Node.js and MongoDB for tracking credits/debts between friends.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    image: Lenden,
    github: "https://github.com/nilerudra/Len-Den",
    demo: "https://lenden.vercel.app",
  },
  {
    title: "Hope",
    description:
      "A social engagement platform to connect volunteers with NGOs, promote social work, and inspire others to replicate initiatives.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: Hope,
    github: "https://github.com/nilerudra/Hope",
    demo: "https://hope-link.netlify.app/",
  },
  {
    title: "Edunexus",
    description:
      "An Android app for students and teachers: progress tracking, attendance, lecture schedules, and task submissions.",
    tech: ["Java", "XML", "Firebase"],
    // image: Edunexus,
    github: "https://github.com/nilerudra/Edunexus",
    demo: "#",
  },
  {
    title: "The Best Abacus",
    description:
      "A Windows-based interactive platform for children to practice and learn abacus skills using C# and MySQL.",
    tech: ["C#", "MySQL", "Windows Forms"],
    // image: "/images/abacus.png",
    github: "https://github.com/nilerudra/abacus",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-3">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Featured Projects
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          A collection of products, platforms, and applications I've built
          across frontend, backend, real-time systems, and automation workflows.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
            }}
            whileHover={{
              y: -12,
            }}
            className="group bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-fit"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-500">
                {proj.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{proj.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}

                {proj.demo !== "#" && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
