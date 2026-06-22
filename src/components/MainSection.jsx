import React, { useEffect, useState } from "react";
import { Linkedin, ChevronsDown, GithubIcon, Rocket } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
} from "react-icons/si";
const coderWords = ["Coder", "Developer", "Engineer", "Full Stack Dev"];
import Resume from "../assets/Rudraksh-Nile-Resume.pdf";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

const AnimatedCoder = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => {
        setTyping(false);
        setPause(false);
      }, 1500);
      return () => clearTimeout(pauseTimeout);
    }

    if (typing) {
      const currentWord = coderWords[index];
      const nextLength = displayedText.length + 1;

      if (nextLength <= currentWord.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, nextLength));
        }, 150);
        return () => clearTimeout(typingTimeout);
      } else {
        setPause(true);
      }
    } else {
      if (displayedText.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 100);
        return () => clearTimeout(deletingTimeout);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % coderWords.length);
      }
    }
  }, [displayedText, typing, pause, index]);

  return (
    <span className="text-yellow-400 border-b-2 border-yellow-400 font-mono">
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const MainSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-20 py-16 md:py-24 bg-[#f6f3f2] min-h-screen relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 rounded-full bg-yellow-300/20 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-300/20 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Intro Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium tracking-wider"
        >
          {/* Floating Rocket */}
          <motion.div
            className="mt-4 inline-block justify-center"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <Rocket size={32} strokeWidth={2} className="text-yellow-500" />
          </motion.div>{" "}
          Hello, I'm
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight relative"
        >
          Rudra{" "}
          <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            the <AnimatedCoder />
          </span>
        </motion.h1>

        {/* Role + Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="mt-2"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
            Full Stack Developer • Frontend Engineer
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            I build modern, responsive and high-performance web applications
            using React, Next.js, Tailwind CSS, Node.js and NestJS. Passionate
            about crafting beautiful user experiences while developing scalable
            backend systems.
          </p>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.5,
          }}
          className="mt-6 flex justify-center"
        >
          <div className="flex items-center gap-3 px-5 py-2 bg-white rounded-full shadow-md border border-gray-200">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Open to Frontend & Full Stack Opportunities
            </span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="mt-10 flex flex-wrap justify-center gap-10"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900">10+</h3>
            <p className="text-gray-500">Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">3+</h3>
            <p className="text-gray-500">Years Learning</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">3</h3>
            <p className="text-gray-500">Industry Experiences</p>
          </div>
        </motion.div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fadeIn delay-500 w-full max-w-sm">
          <a
            href="#projects"
            className="bg-black text-white border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-black transition text-center"
          >
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/190R3aXFoh8Yyl8N1y4eDRWu561uRqYPF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition text-center"
          >
            Download Resume
          </a>
        </div>

        {/* Quote */}
        <p className="mt-8 italic text-gray-600 text-sm sm:text-base max-w-2xl mx-auto animate-fadeIn delay-700 px-4 sm:px-0">
          “Code is like humor. When you have to explain it, it’s bad.” — Cory
          House
        </p>

        {/* Down Arrow */}
        <div className="mt-12 animate-bounce">
          <ChevronsDown size={28} strokeWidth={1.5} className="text-gray-700" />
        </div>

        {/* Social Links fixed left bottom */}
        <div className="fixed bottom-6 left-4 flex flex-row sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 text-gray-700 z-50">
          <a
            href="https://github.com/nilerudra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black transition"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <GithubIcon size={24} />
            </motion.div>
            {/* <GithubIcon size={24} /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/rudraksh-nile-18b68622a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <Linkedin size={24} />
            </motion.div>
          </a>
        </div>

        {/* Blinking cursor animation */}
        <style>{`
        @keyframes blink {
          0%, 50%, 100% {opacity: 1;}
          25%, 75% {opacity: 0;}
        }
        .animate-blink {
          animation: blink 1.2s infinite;
        }
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(20px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .delay-200 {animation-delay: 0.2s;}
        .delay-300 {animation-delay: 0.3s;}
        .delay-400 {animation-delay: 0.4s;}
        .delay-500 {animation-delay: 0.5s;}
        .delay-600 {animation-delay: 0.6s;}
        .delay-700 {animation-delay: 0.7s;}
      `}</style>
      </section>
    </motion.div>
  );
};

export default MainSection;
