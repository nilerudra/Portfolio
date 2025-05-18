import React from "react";
import Hackothsava from "../assets/Hackothsava-2k24.png";
import GreatNinja from "../assets/The-Great-Ninja-Hack-2k25.jpeg";
import HackTheGap from "../assets/Hack-The-Gap-2k25.jpeg";
import TechnoSpark from "../assets/Techno-spark-2k25.jpeg";

const certificates = [
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
      className="py-16 px-4 sm:px-8 md:px-20 text-gray-800"
    >
      <h2 className="text-3xl font-light text-center text-gray-800 mb-12 uppercase tracking-widest">
        Certificates
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {certificates.map(({ title, imgSrc, link }, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition cursor-pointer animate-fadeIn delay-200"
          >
            <h3 className="text-lg font-semibold font-sans mb-3 text-center">
              {title}
            </h3>
            <a
              href={link || imgSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={imgSrc}
                alt={`Certificate for ${title}`}
                className="w-full h-auto rounded-md object-contain"
              />
            </a>
          </div>
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
