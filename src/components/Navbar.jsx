import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // Initialize theme state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const handleScroll = (id) => {
    setMenuOpen(false);
    setActiveSection(id);

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
        className={`${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-gray-800 hover:text-purple-600"
        } text-inter transition cursor-pointer px-2 py-1 rounded-lg ${
          activeSection === "home" ? "bg-purple-600/80 text-white" : ""
        }`}
      >
        Home
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("about")}
        className={`${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-gray-800 hover:text-purple-600"
        } text-inter transition cursor-pointer px-2 py-1 rounded-lg ${
          activeSection === "about" ? "bg-purple-600/80 text-white" : ""
        }`}
      >
        About
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("service")}
        className={`${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-gray-800 hover:text-purple-600"
        } text-inter transition cursor-pointer px-2 py-1 rounded-lg ${
          activeSection === "service" ? "bg-purple-600/80 text-white" : ""
        }`}
      >
        Service
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("skills")}
        className={`${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-gray-800 hover:text-purple-600"
        } text-inter transition cursor-pointer px-2 py-1 rounded-lg ${
          activeSection === "skills" ? "bg-purple-600/80 text-white" : ""
        }`}
      >
        Skills
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("project")}
        className={`${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-gray-800 hover:text-purple-600"
        } text-inter transition cursor-pointer px-2 py-1 rounded-lg ${
          activeSection === "project" ? "bg-purple-600/80 text-white" : ""
        }`}
      >
        Projects
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("blog")}
        className={`${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-gray-800 hover:text-purple-600"
        } text-inter transition cursor-pointer px-2 py-1 rounded-lg ${
          activeSection === "blog" ? "bg-purple-600/80 text-white" : ""
        }`}
      >
        Blog
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleScroll("contact")}
        className={`${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-gray-800 hover:text-purple-600"
        } text-inter transition cursor-pointer px-2 py-1 rounded-lg ${
          activeSection === "contact" ? "bg-purple-600/80 text-white" : ""
        }`}
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
          ? isDarkMode
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
      }}
      transition={{
        delay: 1.0,
        duration: 1.9,
        ease: "easeOut",
      }}
      className={`sticky top-0 z-50 ${
        isDarkMode ? "" : "border-b border-gray-200/20"
      }`}
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
              <a
                onClick={() => handleScroll("home")}
                className="text-2xl font-bold text-purple-600 flex justify-center items-center gap-1 cursor-pointer"
              >
                <img src="/logo.png" alt="" className="w-10" />
              </a>
            </div>
            <span
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm`}
            ></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.0,
              duration: 1.9,
              ease: "easeOut",
            }}
            className="hidden md:flex items-center md:gap-4 xl:gap-6"
          >
            {navLinks}
          </motion.div>

          <div className="flex gap-3">
            {/* Theme Toggle Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.0,
                duration: 1.9,
                ease: "easeOut",
              }}
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full border-2 transition-all duration-300 ${
                isDarkMode
                  ? "border-purple-500/60 text-purple-400 hover:bg-purple-600/20 hover:text-purple-300 hover:border-purple-500"
                  : "border-purple-600/60 text-purple-600 hover:bg-purple-100 hover:text-purple-700 hover:border-purple-600"
              } shadow-lg hover:shadow-xl`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

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
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              }`}
            >
              Hire Me!
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
                className={`md:hidden focus:outline-none ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
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
              className={`absolute top-16 w-full rounded-2xl shadow-xl ${
                isDarkMode
                  ? "bg-purple-700 bg-linear-to-b from-purple-900 via-slate-900 to-black"
                  : "bg-white/95 backdrop-blur-lg border border-gray-200"
              }`}
            >
              <div className="flex flex-col items-center py-10 gap-6">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "service", label: "Services" },
                  { id: "skills", label: "Skills" },
                  { id: "project", label: "Projects" },
                  { id: "blog", label: "Blog" },
                  { id: "contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.a
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.5,
                      duration: 1.4,
                      ease: "easeOut",
                    }}
                    className={`transition w-10/12 text-center py-3 rounded-lg cursor-pointer font-medium ${
                      activeSection === item.id
                        ? isDarkMode
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                          : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                        : isDarkMode
                        ? "bg-gray-800/50 text-gray-300 hover:bg-gradient-to-r from-purple-600 to-pink-600  border border-gray-700 hover:text-white"
                        : "bg-white text-gray-600 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white border border-gray-400"
                    }`}ext-grover:tadow-sm h sher-gray-200rdder boor
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
