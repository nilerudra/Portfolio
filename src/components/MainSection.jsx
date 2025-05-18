import React, { useEffect, useState } from "react";
import { Linkedin, ChevronsDown, GithubIcon } from "lucide-react";
const coderWords = ["Coder", "Developer", "Engineer", "Full Stack Dev"];
import Resume from "../assets/Rudraksh-Nile-Resume.pdf";

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
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-20 py-16 md:py-24 bg-[#f6f3f2] min-h-screen relative"
    >
      {/* Intro Name */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium font-sans mb-2 animate-fadeIn">
        Hi, I'm
      </p>

      {/* Highlighted Heading with animated coder */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight text-gray-900 animate-fadeIn delay-200">
        Rudra the <AnimatedCoder />
      </h1>

      {/* Role + Short Bio */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500 font-sans max-w-xl animate-fadeIn delay-300">
        Full Stack Developer | Open Source Enthusiast 🚀
        <br />I build scalable, clean, and user-friendly web apps that solve
        real problems.
      </p>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 animate-fadeIn delay-400 text-gray-700">
        <span className="font-mono text-sm sm:text-lg">Node.js</span>
        <span className="font-mono text-sm sm:text-lg">React.js</span>
        <span className="font-mono text-sm sm:text-lg">Tailwind</span>
        <span className="font-mono text-sm sm:text-lg">MongoDB</span>
        <span className="font-mono text-sm sm:text-lg">SQL</span>
        <span className="font-mono text-sm sm:text-lg">Firebase</span>
        <span className="font-mono text-sm sm:text-lg">Git|GitHub</span>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fadeIn delay-500 w-full max-w-sm">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition text-center"
        >
          View My Work
        </a>
        <a
          href={Resume}
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
          <GithubIcon size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/rudraksh-nile-18b68622a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-700 transition"
        >
          <Linkedin size={24} />
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
  );
};

export default MainSection;
