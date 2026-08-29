import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAxios,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiVitess,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

import { AiOutlineApi } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
const skills = [
  {
    name: "JavaScript",
    percentage: 85,
    icon: <FaJs className="text-purple-500 rounded-2xl" />,
    category: "Frontend",
    description: "Modern ES6+ JavaScript for dynamic web applications",
  },
  {
    name: "React",
    percentage: 84,
    icon: <FaReact className="text-cyan-400" />,
    category: "Frontend",
    description: "Component-based UI library for building user interfaces",
  },
  {
    name: "Next.js",
    percentage: 78,
    icon: <RiNextjsFill className="" />,
    category: "Frontend",
    description: "Full-stack React framework for production applications",
  },
  {
    name: "Daisy Ui",
    percentage: 78,
    icon: <SiDaisyui ill className="" />,
    category: "Frontend",
    description: "Full-stack React framework for production applications",
  },
  {
    name: "Node.js",
    percentage: 82,
    icon: <FaNode className="text-green-500" />,
    category: "Backend",
    description: "Server-side JavaScript runtime for scalable applications",
  },
  {
    name: "Express.js",
    percentage: 80,
    icon: <SiExpress className="" />,
    category: "Backend",
    description: "Fast and minimalist web framework for Node.js",
  },
  {
    name: "MongoDB",
    percentage: 75,
    icon: <SiMongodb className="text-green-400" />,
    category: "Backend",
    description: "NoSQL database for modern web applications",
  },
  {
    name: "REST Api",
    percentage: 75,
    icon: <AiOutlineApi className="text-green-400" />,
    category: "Backend",
    description: "NoSQL database for modern web applications",
  },
  {
    name: "HTML5",
    percentage: 95,
    icon: <FaHtml5 className="text-orange-500" />,
    category: "Frontend",
    description: "Semantic markup language for web structure",
  },
  {
    name: "NoSQL",
    percentage: 90,
    icon: <PiFileSql className="text-blue-500" />,
    category: "Database",
    description: "Modern styling with animations and responsive design",
  },
  {
    name: "SQL",
    percentage: 90,
    icon: <PiFileSql className="text-blue-500" />,
    category: "Database",
    description: "Modern styling with animations and responsive design",
  },
  {
    name: "CSS3",
    percentage: 90,
    icon: <FaCss3Alt className="text-blue-500" />,
    category: "Frontend",
    description: "Modern styling with animations and responsive design",
  },
  {
    name: "Tailwind CSS",
    percentage: 88,
    icon: <RiTailwindCssFill className="text-sky-400" />,
    category: "Frontend",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "Firebase",
    percentage: 72,
    icon: <IoLogoFirebase className="text-amber-400" />,
    category: "Backend",
    description: "Backend-as-a-Service platform for web and mobile apps",
  },
  {
    name: "Git",
    percentage: 85,
    icon: <FaGitAlt className="text-orange-600" />,
    category: "Tools",
    description: "Version control system for tracking code changes",
  },
  {
    name: "GitHub",
    percentage: 88,
    icon: <FaGithub className="" />,
    category: "Tools",
    description: "Code hosting platform for collaboration and deployment",
  },
  {
    name: "Vite",
    percentage: 88,
    icon: <SiVitess className="" />,
    category: "Tools",
    description: "Code hosting platform for collaboration and deployment",
  },
  {
    name: "AXIOS",
    percentage: 28,
    icon: <SiAxios className="" />,
    category: "Tools",
    description: "de hosting platform for collaboration and deployment",
  },

  {
    name: "Figma",
    percentage: 75,
    icon: <FaFigma className="text-purple-500" />,
    category: "Design",
    description: "UI/UX design tool for creating modern interfaces",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// const progressVariant = {
//   hidden: { scaleX: 0 },
//   show: (percentage) => ({
//     scaleX: percentage / 100,
//     transition: { duration: 1.2, ease: "easeOut" },
//   }),
// };

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isDarkMode = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitting },
  // } = useForm();

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Design",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Skill inquiry:", { ...data, skill: selectedSkill?.name });
      toast.success(`Message sent about ${selectedSkill?.name}! 🚀`, {
        style: {
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
        },
      });
      reset();
      setSelectedSkill(null);
    } catch {
      toast.error("Something went wrong! Please try again.", {
        style: {
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
        },
      });
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 pt-28 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-transparent" : "bg-gray-50/50"
      }`}
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 1.0,
            duration: 1.5,
          }}
          className="text-center mb-16"
        >
          <h2 className="tage text-sm md:text-sm font-bold">
            <span className=" bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <h2 className="tage text-2xl md:text-2xl font-bold">
            <span className=" bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-gray-400">
              Tools I reach for
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Modern technologies and tools I use to build high-quality web
            experiences.
          </p>
        </motion.div>

        {/* ===== CATEGORY FILTERS ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariant}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? isDarkMode
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                    : isDarkMode
                      ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm"
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* ===== SKILLS GRID ===== */}
        <motion.div
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div
                onClick={() => setSelectedSkill(skill)}
                className={`
          relative rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 h-full cursor-pointer
          backdrop-blur border transition-all duration-500
          ${
            isDarkMode
              ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/70 hover:border-purple-500/50"
              : "bg-white border-gray-200 hover:bg-gray-50 hover:border-purple-300/50 shadow-sm hover:shadow-lg"
          }
          hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
        `}
              >
                {/* Icon */}
                <motion.div
                  className="relative z-10 flex justify-center text-xl sm:text-2xl mb-2 sm:mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3
                  className={`
            relative z-10 text-sm sm:text-lg md:text-xl font-bold text-center mb-1 sm:mb-3
            ${
              isDarkMode
                ? "text-white group-hover:text-white"
                : "text-gray-800 group-hover:text-gray-900"
            }
          `}
                >
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== MODAL ===== */}
      {/* <AnimatePresence>
        {selectedSkill && (
          <>
            {/* Overlay */}
      {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 backdrop-blur-sm z-40 ${
                isDarkMode ? "bg-black/70" : "bg-gray-900/50"
              }`}
              onClick={() => setSelectedSkill(null)}
            /> */}

      {/* Modal */}
      {/* <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 40 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className={`
                fixed z-50 top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[95%] sm:w-[90%] max-w-2xl max-h-[90vh]
                overflow-y-auto
                rounded-2xl p-6 sm:p-8
                ${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-white border border-gray-200 shadow-2xl"
                }
              `}
            > */}
      {/* Close Button */}
      {/* <button
                onClick={() => setSelectedSkill(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <FiX className="w-6 h-6" />
              </button> */}

      {/* Skill Header */}
      {/* <div className="text-center mb-8">
                <div className="flex justify-center text-6xl mb-4">
                  {selectedSkill.icon}
                </div>
                
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {selectedSkill.name}
                </h3>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDarkMode
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      : "bg-purple-100 text-purple-600 border border-purple-200"
                  }`}>
                    {selectedSkill.category}
                  </span>
                  
                  <span className={`text-lg font-bold ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}>
                    {selectedSkill.percentage}% Proficiency
                  </span>
                </div>
                
                <p className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                  {selectedSkill.description}
                </p> */}

      {/* Progress Bar */}
      {/* <div className="mt-6">
                  <div className={`w-full h-3 rounded-full overflow-hidden ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: selectedSkill.percentage / 100 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                    />
                  </div>
                </div>
              </div> */}

      {/* Contact Form */}
      {/* <div className={`border-t pt-6 ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}>
                <h4 className={`font-semibold mb-4 text-center ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  Interested in working with {selectedSkill.name}? Let's discuss!
                </h4>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> */}
      {/* Name and Email Row */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`
                          w-full rounded-lg border px-4 py-3 text-sm
                          focus:outline-none focus:ring-2 focus:ring-purple-500
                          transition-all duration-300
                          ${
                            isDarkMode
                              ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
                          }
                        `}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className={`
                          w-full rounded-lg border px-4 py-3 text-sm
                          focus:outline-none focus:ring-2 focus:ring-purple-500
                          transition-all duration-300
                          ${
                            isDarkMode
                              ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
                          }
                        `}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Enter a valid email",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div> */}

      {/* Message */}
      {/* <div>
                    <textarea
                      rows="4"
                      placeholder={`Tell me about your project involving ${selectedSkill.name}...`}
                      className={`
                        w-full rounded-lg border px-4 py-3 text-sm resize-none
                        focus:outline-none focus:ring-2 focus:ring-purple-500
                        transition-all duration-300
                        ${
                          isDarkMode
                            ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
                        }
                      `}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div> */}

      {/* Submit Button */}
      {/* <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.96 }}
                    className={`
                      w-full py-3 px-6 rounded-lg font-semibold
                      transition-all duration-300 disabled:opacity-50
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                          : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                      }
                    `}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default Skills;
