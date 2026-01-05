import { motion } from "framer-motion";
import { Download, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import TypedText from "./TypedText";
import { useMemo, useState, useEffect } from "react";

// Custom hook to detect theme
const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDark = document.documentElement.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDarkMode;
};

// Animated particles component
const AnimatedParticles = ({ isDarkMode }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: (i * 7.3) % 100,
        y: (i * 11.7) % 100,
        delay: (i * 0.3) % 2,
        duration: 2 + (i % 3),
        moveX: i % 2 === 0 ? 25 : -25,
        moveY: i % 3 === 0 ? 25 : -25,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1 h-1 md:w-2 md:h-2 rounded-full opacity-60 ${
            isDarkMode
              ? "bg-purple-400 shadow-lg shadow-purple-400/50"
              : "bg-purple-600 shadow-lg shadow-purple-600/50"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 1, 0.3],
            x: [0, particle.moveX, 0],
            y: [0, particle.moveY, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Glowing orbs component
const GlowingOrbs = ({ isDarkMode }) => {
  const orbs = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: (i * 12.5) % 100,
        y: (i * 15.3) % 100,
        size: 20 + i * 5,
        delay: (i * 0.5) % 3,
        duration: 4 + (i % 3),
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-xl ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-purple-500/20"
              : "bg-gradient-to-r from-purple-300/30 via-pink-300/40 to-blue-300/30"
          }`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const socialLinks = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/mamun-mia007/",
  },
  {
    icon: Github,
    url: "https://github.com/yourusername",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/yourusername",
  },
  {
    icon: Instagram,
    url: "https://instagram.com/yourusername",
  },
];

const Banner = () => {
  const isDarkMode = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`relative px-3 overflow-hidden transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-900 via-slate-900 to-slate-800"
          : "bg-transparent"
      }`}
    >
      {/* Animated Background Elements */}
      <AnimatedParticles isDarkMode={isDarkMode} />
      <GlowingOrbs isDarkMode={isDarkMode} />

      {/* Floating light effect */}
      <motion.div
        className={`absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full blur-3xl ${
          isDarkMode
            ? "bg-purple-500/10 shadow-2xl shadow-purple-500/20"
            : "bg-purple-300/20 shadow-2xl shadow-purple-300/30"
        }`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-20 right-10 w-20 h-20 md:w-24 md:h-24 rounded-full blur-2xl ${
          isDarkMode
            ? "bg-pink-500/10 shadow-xl shadow-pink-500/20"
            : "bg-pink-300/20 shadow-xl shadow-pink-300/30"
        }`}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Additional floating elements */}
      <motion.div
        className={`absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-xl ${
          isDarkMode
            ? "bg-cyan-400/5 shadow-lg shadow-cyan-400/10"
            : "bg-cyan-300/10 shadow-lg shadow-cyan-300/20"
        }`}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className={`absolute top-3/4 right-1/3 w-12 h-12 rounded-full blur-lg ${
          isDarkMode
            ? "bg-yellow-400/5 shadow-md shadow-yellow-400/10"
            : "bg-yellow-300/10 shadow-md shadow-yellow-300/20"
        }`}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      {/* Hero Section */}
      <div
        id="home"
        className="relative container px-4 py-20 lg:py-20 max-w-7xl mx-auto z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.9 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 1.9 }}
              className={`text-xl md:text-2xl font-light ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Hi I am ...
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1.9 }}
              className=" "
            >
              <TypedText />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 1.9 }}
              className={`text-inter text-base md:text-lg max-w-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I break down complex user experience problems to create integrity
              focused solutions that connect billions of people.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 1.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Download CV */}
              <motion.a
                href="/Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border-2 font-medium flex items-center gap-2 transition-all duration-300 ${
                  isDarkMode
                    ? "border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                }`}
              >
                Download CV <Download size={18} />
              </motion.a>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, url }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isDarkMode
                        ? "border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                        : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Now more subtle since background uses same image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.9 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Animated glow around image */}
            <motion.div
              className={`absolute inset-0 rounded-full blur-3xl  ${
                isDarkMode
                  ? "bg-purple-500/30 shadow-purple-500/40"
                  : "bg-purple-300/40 shadow-purple-300/50"
              }`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.3 }}
              className="relative  md:w-80  lg:w-76 lg:h-[32rem] hidden md:block"
            >
              {/* Pulsing border effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl  ${
                  isDarkMode ? "border-purple-400/60" : "border-purple-500/70"
                }`}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div
                className={`relative w-full h-[400px] rounded-3xl overflow-hidden mt-10 border backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-slate-800/80 border-purple-500/50 shadow-2xl "
                    : "bg-white/70"
                }`}
              >
                <img
                  src="/mamun1.png"
                  alt="Mamun Mia"
                  className="w-full h-full object-cover opacity-90"
                />

                {/* Enhanced sparkle effects on image */}
                <motion.div
                  className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"
                  animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-2 h-2 bg-purple-300 rounded-full shadow-lg shadow-purple-300/50"
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-5 w-2 h-2 bg-pink-300 rounded-full shadow-lg shadow-pink-300/50"
                  animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                />
                <motion.div
                  className="absolute top-20 left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: 2,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
