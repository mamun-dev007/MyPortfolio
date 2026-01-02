import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import { HiCode } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = (
    <>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("home")}
        className="text-white text-inter hover:text-purple-400 transition active:bg-gray-900  cursor-pointer"
      >
        Home
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("about")}
        className="text-white text-inter hover:text-purple-400 transition active:bg-gray-900  cursor-pointer"
      >
        About
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("service")}
        className="text-white text-inter hover:text-purple-400 transition active:bg-gray-900  cursor-pointer"
      >
        Service
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("skills")}
        className="text-white text-inter hover:text-purple-400 transition active:bg-gray-900 cursor-pointer"
      >
        Skills
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("project")}
        className="text-white text-inter hover:text-purple-400 transition active:bg-gray-900 cursor-pointer"
      >
        Projects
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("blog")}
        className="text-white text-inter hover:text-purple-400 transition active:bg-gray-900 cursor-pointer"
      >
        Blog
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("contact")}
        className="text-white text-inter hover:text-purple-400 transition active:bg-gray-900 cursor-pointer"
      >
        Contact
      </motion.a>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.12)"
          : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
      }}
      transition={{
        delay: 1.0,
        duration: 1.9,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50"
    >
      <nav className=" mx-auto px-4 py-2 ">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.0,
              duration: 1.9,
              ease: "easeOut",
            }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12  rounded-full flex items-center justify-center">
              <a  onClick={() => handleScroll("home")} className="text-2xl font-bold text-purple-600 flex justify-center items-center  gap-1">
              <img src="/logo.png" alt="" className="w-10" />
              </a>
            </div>
            <span className="text-white text-sm"></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.0,
              duration: 1.9,
              ease: "easeOut",
            }}
            className="hidden md:flex items-center md:gap-7 xl:gap-10"
          >
            {navLinks}
          </motion.div>

          <div className="flex gap-5">
          
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.0,
                duration: 1.9,
                ease: "easeOut",
              }}
              onClick={() => handleScroll("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full  border-2 border-purple-500/60 text-sm  backdrop-blur justify-center text-purple-400 bg-purple-600 hover:text-white transition shadow-purple-500/50 shadow-2xl hover:shadow-purple-500/80 hover:shadow-[0_0_50px_rgba(168,85,247,1)]"
            >
            <motion.a
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.95 }}
        className="text-white transition active:bg-gray-900 cursor-pointer "
      >
       Hire Me!
      </motion.a>
             
            </motion.button>

            <motion.div
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{
                delay: 1.0,
                duration: 1.9,
                ease: "easeOut",
              }}
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden focus:outline-none"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </motion.div>
          </div>

          {menuOpen && (
           
            <motion.div
  initial={{ y: 0 }}
  animate={{ y: 0 }}
  transition={{
    delay: 1.5,
    duration: 1.6,
    ease: "easeOut",
  }}
  className="absolute top-16  w-full rounded-2xl bg-purple-700 shadow-xl bg-gradient-to-b from-purple-900 via-slate-900 to-black"
>
  <div className="flex flex-col items-center py-10 gap-10">
    {[
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#service", label: "Services" },
      { href: "#skills", label: "Skills" },
      { href: "#project", label: "Projects" },
      { href: "#blog", label: "Blog" },
      { href: "#contact", label: "Contact" },
    ].map((item, index) => (
      <motion.a
        key={item.href}
        href={item.href}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: index * 0.5,
          duration: 1.4,
          ease: "easeOut",
        }}
        className="text-white hover:text-white transition bg-purple-500 w-10/12 text-center py-1 rounded hover:bg-purple-800 text-inter-6"
      >
        {item.label}
      </motion.a>
    ))}
  </div>
</motion.div>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
