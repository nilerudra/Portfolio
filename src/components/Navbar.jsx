import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2
        z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-white/60 backdrop-blur-md"
        }
        border border-gray-200
        ${open ? "rounded-xl" : "rounded-full"}
        px-6 py-3
        w-[95%]
        max-w-6xl
      `}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}

        <a href="#home" className="text-xl font-bold tracking-wide">
          Rudra<span className="text-yellow-500">.</span>
        </a>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-600
                hover:text-black
                transition
                text-sm
                font-medium
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}

        <a
          href="mailto:rudrakshnile930@gmail.com"
          className="
            hidden md:flex
            items-center
            gap-2
            bg-black
            text-white
            px-5
            py-2
            rounded-full
            hover:bg-gray-800
            transition
          "
        >
          <Mail size={16} />
          Let's Talk
        </a>

        {/* Mobile Menu */}

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              {link.name}
            </a>
          ))}

          <a
            href="mailto:rudrakshnile930@gmail.com"
            className="
              bg-black
              text-white
              px-4
              py-2
              rounded-full
              text-center
            "
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
