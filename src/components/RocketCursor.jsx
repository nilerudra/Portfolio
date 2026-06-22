import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RocketCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [effects, setEffects] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleClick = (e) => {
      setClicked(true);

      const clickX = e.clientX;
      const clickY = e.clientY;

      setTimeout(() => {
        const id = Date.now();

        setEffects((prev) => [
          ...prev,
          {
            id,
            x: clickX,
            y: clickY,
          },
        ]);

        setTimeout(() => {
          setEffects((prev) => prev.filter((effect) => effect.id !== id));
        }, 2100);
      }, 300); // Delay explosion by 300ms

      setTimeout(() => {
        setClicked(false);
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Rocket Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] text-xl"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 2 : 1,
          rotate: clicked ? 360 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="-scale-x-100">🚀</div>
      </motion.div>

      <AnimatePresence>
        {effects.map((effect) => (
          <ExplosionEffect key={effect.id} x={effect.x} y={effect.y} />
        ))}
      </AnimatePresence>
    </>
  );
}

function ExplosionEffect({ x, y }) {
  const particles = Array.from({ length: 24 });

  return (
    <>
      {/* Shockwave */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border-4 border-orange-400"
        initial={{
          width: 0,
          height: 0,
          opacity: 1,
          x,
          y,
        }}
        animate={{
          width: 180,
          height: 180,
          opacity: 0,
          x: x - 90,
          y: y - 90,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />

      {/* Particles */}
      {particles.map((_, index) => {
        const angle = (index / particles.length) * Math.PI * 2;

        const distance = 80 + Math.random() * 60;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        const emojis = ["✨", "⚡", "🔥", "💥"];

        return (
          <motion.div
            key={index}
            className="fixed pointer-events-none z-[9998] text-lg"
            initial={{
              x,
              y,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: x + dx,
              y: y + dy,
              opacity: 0,
              scale: 0,
              rotate: 360,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </motion.div>
        );
      })}
    </>
  );
}
