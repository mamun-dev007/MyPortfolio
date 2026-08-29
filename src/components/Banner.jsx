import { motion , useAnimationControls} from "framer-motion";
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
    [],
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
    [],
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
    name: "LinkedIn",
  },
  {
    icon: Github,
    url: "https://github.com/yourusername",
    name: "GitHub",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/yourusername",
    name: "Twitter",
  },
  {
    icon: Instagram,
    url: "https://instagram.com/yourusername",
    name: "Instagram",
  },
];



// Typing code effect
const codeSnippet = [
  { cls: "kw", text: "const " },
  { cls: "prop", text: "developer" },
  { cls: "", text: " = {\n  " },
  { cls: "prop", text: "name" },
  { cls: "", text: ": " },
  { cls: "str", text: '"Mamun Mia"' },
  { cls: "", text: ",\n  " },
  { cls: "prop", text: "role" },
  { cls: "", text: ": " },
  { cls: "str", text: '"Web Developer"' },
  { cls: "", text: ",\n  " },
  { cls: "prop", text: "stack" },
  { cls: "", text: ": [" },
  { cls: "str", text: '"React"' },
  { cls: "", text: ", " },
  { cls: "str", text: '"Node.js"' },
  { cls: "", text: ", " },
  { cls: "str", text: '"MongoDB"' },
  { cls: "", text: "],\n  " },
  { cls: "prop", text: "hardWorker" },
  { cls: "", text: ": " },
  { cls: "kw", text: "true" },
  { cls: "", text: ",\n};" },
];

const CodePanel = ({ isDarkMode }) => {
  const [displayedLength, setDisplayedLength] = useState(0);
  const fullText = codeSnippet.map((t) => t.text).join("");

  useEffect(() => {
    if (displayedLength >= fullText.length) return;
    const timeout = setTimeout(() => {
      setDisplayedLength((prev) => prev + 1);
    }, 35);
    return () => clearTimeout(timeout);
  }, [displayedLength, fullText.length]);

  let remaining = displayedLength;
  const renderedTokens = [];
  for (const token of codeSnippet) {
    if (remaining <= 0) break;
    const sliceLength = Math.min(remaining, token.text.length);
    renderedTokens.push({ cls: token.cls, text: token.text.slice(0, sliceLength) });
    remaining -= sliceLength;
  }

  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`rounded-2xl border overflow-hidden shadow-2xl ${
        isDarkMode
          ? "bg-slate-900/80 border-purple-500/20"
          : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`flex items-center gap-2 px-4 py-3 border-b ${
          isDarkMode ? "border-purple-500/20 bg-slate-900" : "border-gray-200 bg-gray-50"
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span
          className={`ml-2 font-mono text-xs ${
            isDarkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          developer.js
        </span>
      </div>

      <pre
        className={`px-6 py-6 min-h-[220px] font-mono text-sm leading-7 whitespace-pre-wrap ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {renderedTokens.map((t, i) => (
          <span
            key={i}
            className={
              t.cls === "kw"
                ? "text-purple-400"
                : t.cls === "str"
                ? isDarkMode
                  ? "text-pink-400"
                  : "text-pink-600"
                : t.cls === "prop"
                ? isDarkMode
                  ? "text-white"
                  : "text-gray-800"
                : ""
            }
          >
            {t.text}
          </span>
        ))}
        <span className="inline-block w-2 h-4 align-middle bg-pink-500 animate-pulse ml-0.5" />
      </pre>
    </motion.div>
  );
};

const marqueeItems = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind CSS",
  "JavaScript",
  "Next.js",
  "Git & GitHub",
];

const Marquee = ({ isDarkMode }) => {
  const controls = useAnimationControls();

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 25, repeat: Infinity, ease: "linear" },
    });
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`border-t border-b overflow-hidden w-[318]
      text-center items-center mx-auto relative py-6 mt-16 ${
        isDarkMode ? "border-purple-500/20 bg-slate-900/50" : "border-purple-200 bg-purple-50/50"
      }`}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => startAnimation()}
    >
      <motion.div animate={controls} className="flex gap-14 w-max">
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`font-mono text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${
              isDarkMode
                ? "text-gray-500 hover:text-purple-400"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            {item}
            <span
              className={`w-1 h-1 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
};







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
             I build responsive, user-friendly web applications with modern JavaScript technologies — from pixel-tight interfaces to the APIs that power them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 1.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Download CV */}
              <motion.a
                href="/resume (2).pdf"
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
  {socialLinks.map(({ icon: Icon, url, name }, idx) => (
    <div key={idx} className="relative group">
      <motion.a
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

      {/* Tooltip */}
      <span
        className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs px-2 py-1 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none ${
          isDarkMode
            ? "bg-gray-900 text-white border border-purple-500/30"
            : "bg-gray-800 text-white"
        }`}
      >
        {name}
        {/* Small arrow */}
        <span
          className={`absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-4 ${
            isDarkMode ? "border-t-gray-900" : "border-t-gray-800"
          }`}
        />
      </span>
    </div>
  ))}
</div>
            </motion.div>
          </motion.div>

          {/* Right Image - Now more subtle since background uses same image */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.15 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.9 }}
            className="flex justify-center lg:justify-end relative"
          > */}
            {/* === Animated purple background shape – moves constantly === */}
            {/* <motion.div
              className={`absolute top-16 rounded-full h-60 w-60 hidden md:inline-block ${
                isDarkMode
                  ? "bg-purple-600/25 shadow-purple-600"
                  : "bg-purple-900 shadow-purple-600"
              }`}
              animate={{
                scale: [],
                x: [0, 18, -50, 10, 0],
                y: [0, 10, 14, -6, 0],
                opacity: [0.4, 0.5, 0.5, 0.7, 0.4],
              }}
              transition={{
                duration: 12, // long & smooth → feels organic
                repeat: Infinity,
                repeatType: "mirror", // smooth back & forth
                ease: "easeInOut",
              }}
            /> */}
{/* 
            <motion.div
              whileHover={{ scale: 1.02 }} // subtle hover only
              transition={{ duration: 0.4 }}
              className="relative md:w-80 lg:w-76 lg:h-[32rem] hidden md:block z-10"
            >
              <div
                className={`relative w-full h-[400px] rounded-3xl overflow-hidden mt-10 backdrop-blur-sm ${
                  isDarkMode
                    ? " shadow-2xl border border-purple-500/20"
                    : " shadow-xl border border-purple-400/30"
                }`}
              > */}
                {/* <img
                  src="/mamun1.png"
                  alt="Mamun Mia"
                  className="w-full h-full object-cover opacity-95 pointer-events-none"
                /> */}














                

                {/* Keep your sparkle effects if desired – they are independent */}
                {/* <motion.div
                  className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50"
                  animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: 0.4 }}
                />
                <motion.div
                  className="absolute bottom-20 left-10 w-2 h-2 bg-purple-300 rounded-full shadow-lg shadow-purple-300/50"
                  animate={{ scale: [0, 1.6, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.1, repeat: Infinity, delay: 1.1 }}
                />
                {/* ... other sparkles ... */}
              {/* </div>
            </motion.div>   */} 
                     

{/* Code Panel — right after image */}
            <div className="mt-8 w-full md:w-80 lg:w-76">
              <CodePanel isDarkMode={isDarkMode} />
            </div>

          {/* </motion.div> */}
        </div>
      </div>

      <Marquee isDarkMode={isDarkMode} />


    </motion.div>
  );
};

export default Banner;
