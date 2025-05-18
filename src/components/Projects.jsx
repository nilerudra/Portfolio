import React, { useEffect, useRef } from "react";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import LearningPod from "../assets/vikrant.mp4";
import Lenden from "../assets/lenden.png";
import Hope from "../assets/Hope.png";

const projects = [
  {
    title: "Learning Pod",
    description:
      "A collaborative learning platform featuring real-time chat, personalized learning paths, and auto-categorized resources.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind"],
    video: LearningPod,
    github: "https://github.com/rudra/learning-pod", // Replace with real repo
    demo: "https://learning-pod.netlify.app",
  },
  {
    title: "Lenden",
    description:
      "A peer-to-peer transaction manager built with Node.js and MongoDB for tracking credits/debts between friends.",
    tech: ["Node.js", "Express", "MongoDB", "Tailwind"],
    image: Lenden,
    github: "https://github.com/rudra/lenden", // Replace with real repo
    demo: "https://lenden.vercel.app",
  },
  {
    title: "Hope",
    description:
      "A social engagement platform to connect volunteers with NGOs, promote social work, and inspire others to replicate initiatives.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: Hope,
    github: "https://github.com/nilerudra/Hope", // Replace with real repo
    demo: "https://hope-link.netlify.app/",
  },
  {
    title: "Edunexus",
    description:
      "An Android app for students and teachers: progress tracking, attendance, lecture schedules, and task submissions.",
    tech: ["Java", "XML", "Firebase"],
    // image: Edunexus,
    github: "https://github.com/nilerudra/Edunexus", // Replace with real repo
    demo: "#",
  },
  {
    title: "The Best Abacus",
    description:
      "A Windows-based interactive platform for children to practice and learn abacus skills using C# and MySQL.",
    tech: ["C#", "MySQL", "Windows Forms"],
    // image: "/images/abacus.png",
    github: "https://github.com/rudra/abacus", // Replace with real repo
    demo: "#",
  },
];

const Projects = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // prevent autoplay error
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // 50% visible
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const handleFullScreen = (el) => {
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (el.requestFullscreen) {
        el.requestFullscreen().catch((err) => {
          console.warn("Fullscreen request failed:", err);
        });
      }
    }
  };

  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl font-light text-center text-gray-800 mb-12 uppercase tracking-widest">
        My Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-[#f9f9f9] shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative">
              {proj.video ? (
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={proj.video}
                  muted
                  loop
                  playsInline
                  className="w-full h-48 object-cover"
                />
              ) : proj.image ? (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-fit"
                  ref={(el) => (videoRefs.current[idx] = el)} // assign ref for fullscreen
                />
              ) : (
                <div
                  ref={(el) => (videoRefs.current[idx] = el)}
                  className="w-full h-48 flex items-center justify-center font-bold text-4xl select-none"
                  style={{
                    perspective: "800px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      textShadow: `
          1px 1px 0 #e0e0e0,
          2px 2px 2px rgba(0,0,0,0.6),
          3px 3px 4px rgba(0,0,0,0.4)
        `,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {proj.title}
                  </span>
                </div>
              )}
              <button
                onClick={() => handleFullScreen(videoRefs.current[idx])}
                className="absolute top-2 right-2 bg-black bg-opacity-50 rounded p-1 text-white hover:bg-opacity-80"
                aria-label="Fullscreen toggle"
                title="Fullscreen"
              >
                <Maximize2 size={10} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
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
              <div className="mt-4 flex gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-black flex items-center gap-1 text-sm"
                >
                  <Github size={16} /> Code
                </a>
                {proj.demo !== "#" && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-black flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
