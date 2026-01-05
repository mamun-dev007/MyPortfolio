import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaUsers } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { HiCode } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useEffect, useState } from "react";

// Custom hook to detect theme
const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme ? savedTheme === "dark" : true;
    return initialTheme;
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.0, duration: 1.9, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1.0, duration: 1.9, ease: "easeOut" },
  },
};

const techStack = [
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-amber-400" },
];

const About = () => {
  const isDarkMode = useTheme();

  return (
    <section
      id="about"
      className={`py-20 pt-28 px-7 mx-auto transition-colors duration-500 ${
        isDarkMode ? "bg-transparent" : "bg-gray-50/50"
      }`}
    >
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h2 className="tage text-4xl md:text-5xl font-bold">
          <span
            className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkMode
                ? "from-purple-400 to-pink-400"
                : "from-purple-600 to-pink-600"
            }`}
          >
            About Me
          </span>
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={scaleIn}
          className="relative flex justify-center order-2 md:order-1"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`relative overflow-visible ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-900 via-black to-slate-900"
                : "bg-gradient-to-br from-gray-100 via-white to-gray-50"
            }`}
          >
            <img
              src="/About.png"
              alt="Mamun Mia"
              className="w-[600px] rounded-xl"
            />

            <span
              className={`absolute md:-bottom-10 md:-right-10 bottom-0 right-0 w-44 px-4 py-3 rounded-xl backdrop-blur-md border transition-colors duration-300 ${
                isDarkMode
                  ? "bg-purple-500/40 border-white/20 text-white"
                  : "bg-purple-100/80 border-purple-200/60 text-gray-800"
              }`}
            >
              <h1 className="text-4xl font-bold">2+</h1>
              <p className="text-sm">Years Experience</p>
            </span>
          </motion.div>
        </motion.div>

        <div className="order-1 md:order-2">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <span className="text-purple-400">Hi, I’m MD Mamun Mia,</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`leading-relaxed mb-6 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I am a passionate{" "}
            <span
              className={`font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              MERN Stack Developer
            </span>{" "}
            specializing in building clean, scalable, and user-centric web
            applications using MongoDB, Express.js, React, Node.js, and Next.js.
            I have hands-on experience with RESTful APIs, authentication,
            performance optimization, and modern UI development.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`leading-relaxed mb-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I enjoy working on scalable full-stack applications,
            performance-focused interfaces, and data-driven solutions that
            create real impact.
          </motion.p>

          {/* Tech Stack */}
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className={`font-semibold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Tech Knowledge
          </motion.h3>

          <div className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                whileHover={{ scale: 1.1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full border-2 text-sm backdrop-blur justify-center transition shadow-2xl ${
                  isDarkMode
                    ? "bg-white/5 border-purple-500/60 text-purple-400 hover:bg-purple-600 hover:text-white shadow-purple-500/50 hover:shadow-purple-500/80 hover:shadow-[0_0_50px_rgba(168,85,247,1)]"
                    : "bg-purple-50/80 border-purple-300/60 text-purple-600 hover:bg-purple-600 hover:text-white shadow-purple-300/50 hover:shadow-purple-500/80"
                }`}
              >
                <span className={`text-lg ${tech.color}`}>{tech.icon}</span>
                {tech.name}
              </motion.span>
            ))}
          </div>

          {/* Stats */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <StatCard
                icon={<AiOutlineFundProjectionScreen />}
                value="17+"
                label="Projects Completed"
                isDarkMode={isDarkMode}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <StatCard
                icon={<HiCode />}
                value="2+ Years"
                label="Experience"
                isDarkMode={isDarkMode}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <StatCard
                icon={<FaUsers />}
                value="MERN"
                label="Stack"
                isDarkMode={isDarkMode}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, value, label, isDarkMode }) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.05 }}
      className={`rounded-2xl border py-6 text-center backdrop-blur h-44 ${
        isDarkMode
          ? "bg-white/5 border-purple-500/50"
          : "bg-purple-50/80 border-purple-200/60"
      }`}
    >
      <div
        className={`text-3xl mb-3 flex justify-center ${
          isDarkMode ? "text-purple-500" : "text-purple-600"
        }`}
      >
        {icon}
      </div>
      <h4
        className={`text-3xl font-bold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {value}
      </h4>
      <p
        className={`text-sm mt-1 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
};

export default About;
