import { useState, useEffect } from "react";
import { Globe, Code2, Smartphone, Plug } from "lucide-react";
import { motion } from "framer-motion";

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

/* ===== DATA ===== */
const services = [
  {
    id: "01",
    icon: Globe,
    title: "Web Development",
    desc: "Modern, fast websites built with clean, maintainable code.",
  },
  {
    id: "02",
    icon: Code2,
    title: "React Development",
    desc: "Interactive interfaces built with React and Next.js.",
  },
  {
    id: "03",
    icon: Smartphone,
    title: "Responsive UI",
    desc: "Interfaces that work equally well on phones, tablets and desktops.",
  },
  {
    id: "04",
    icon: Plug,
    title: "API Integration",
    desc: "Connecting your product to the APIs and services it needs.",
  },
];

/* ===== FRAMER VARIANTS ===== */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
  },
};

const MyQuality = () => {
  const isDarkMode = useTheme();

  return (
    <section
      id="service"
      className={`px-2 py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className={`text-center tage text-md pb-2 font-bold bg-gradient-to-r bg-clip-text text-transparent ${
            isDarkMode
              ? "from-purple-400 to-pink-400"
              : "from-purple-600 to-pink-600"
          }`}
        >
          Services
        </motion.h2>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className={`text-center tage text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
            isDarkMode
              ? "from-purple-400 to-pink-400"
              : "from-purple-600 to-pink-600"
          }`}
        >
          What I can do 
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className={`text-center mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          We put your ideas and wishes into unique web projects that inspire you
          and your customers.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFirst = index === 0;
            return (
              <motion.div
                key={service.id}
                variants={card}
                whileHover={{ y: -4 }}
                className={`
                  relative p-6 rounded-2xl border transition-all duration-300
                  ${
                    isFirst
                      ? "border-purple-500"
                      : isDarkMode
                      ? "border-gray-800 hover:border-purple-500/40"
                      : "border-gray-200 hover:border-purple-400/50"
                  }
                  ${isDarkMode ? "bg-gray-900/60" : "bg-white"}
                `}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-purple-600 to-pink-600">
                  <Icon size={20} className="text-white" />
                </div>

                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MyQuality;