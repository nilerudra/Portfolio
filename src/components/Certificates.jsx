import React from "react";
import Hackothsava from "../assets/Hackothsava-2k24.png";
import GreatNinja from "../assets/The-Great-Ninja-Hack-2k25.jpeg";
import HackTheGap from "../assets/Hack-The-Gap-2k25.jpeg";
import TechnoSpark from "../assets/Techno-spark-2k25.jpeg";
import GenAI from "../assets/GenAI.png";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Gen AI Academy",
    imgSrc: GenAI,
    link: GenAI,
  },
  {
    title: "Hackothsava 2024",
    imgSrc: Hackothsava,
    link: Hackothsava,
  },
  {
    title: "The Great Ninja HacK 2025",
    imgSrc: GreatNinja,
    link: GreatNinja,
  },
  {
    title: "Hack The Gap 2025",
    imgSrc: HackTheGap,
    link: HackTheGap,
  },
  {
    title: "Techno Spark 3.0",
    imgSrc: TechnoSpark,
    link: TechnoSpark,
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-[#f6f3f2]"
    >
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
          Achievements
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Certifications & Hackathons
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Certifications, hackathons and technical events that contributed to my
          growth as a developer.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mb-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold">5+</h3>
          <p className="text-gray-500">Certificates</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">4+</h3>
          <p className="text-gray-500">Hackathons</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold">Top 8</h3>
          <p className="text-gray-500">National Hackathon</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map(({ title, imgSrc, link }, idx) => (
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
              y: -10,
            }}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              {title === "Gen AI Academy" && (
                <span className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                  Featured
                </span>
              )}

              <img
                src={imgSrc}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium"
                >
                  <ExternalLink size={16} />
                  View
                </a>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-yellow-400 text-black p-2 rounded-full">
                  <Award size={18} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

              <p className="text-gray-500 text-sm">
                Certification / Hackathon Participation
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Same fade-in animation style */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(20px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
