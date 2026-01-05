import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FiX, FiExternalLink, FiAward } from "react-icons/fi";
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
const categories = ["All", "Experience", "Education", "Certifications"];

const experienceData = [
  {
    id: 1,
    type: "Experience",
    year: "2025 - Present",
    title: "Full Stack Web Developer",
    place: "Programming Hero",
    category: "Experience",
    status: "Current",
    description:
      "Intensive full-stack web development program focusing on modern JavaScript frameworks, backend technologies, and industry best practices.",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Next.js",
      "TypeScript",
    ],
    achievements: [
      "Completed 50+ hands-on projects",
      "Mastered MERN stack development",
      "Built responsive web applications",
      "Learned modern development workflows",
      "Collaborated on team projects",
    ],
    website: "https://www.programming-hero.com/",
    icon: <HiOutlineBriefcase className="text-blue-500" />,
  },
  {
    id: 2,
    type: "Experience",
    year: "2023 - 2025",
    title: "Self-Taught Developer",
    place: "FreeCodeCamp & Online Resources",
    category: "Experience",
    status: "Completed",
    description:
      "Self-directed learning journey through various online platforms, building a strong foundation in web development and programming concepts.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Git",
      "Responsive Design",
    ],
    achievements: [
      "Earned multiple certifications",
      "Built 20+ personal projects",
      "Contributed to open source projects",
      "Developed problem-solving skills",
      "Created portfolio website",
    ],
    website: "https://www.freecodecamp.org/",
    icon: <HiOutlineBriefcase className="text-green-500" />,
  },
  {
    id: 3,
    type: "Experience",
    year: "2020 - 2021",
    title: "Web Design Fundamentals",
    place: "House of Life",
    category: "Experience",
    status: "Completed",
    description:
      "Foundational course in web design principles, UI/UX concepts, and basic front-end development skills.",
    skills: ["HTML", "CSS", "Photoshop", "UI Design", "UX Principles"],
    achievements: [
      "Learned design fundamentals",
      "Created first web designs",
      "Understanding of user experience",
      "Basic HTML/CSS proficiency",
      "Design thinking methodology",
    ],
    website: "#",
    icon: <HiOutlineBriefcase className="text-purple-500" />,
  },
  {
    id: 4,
    type: "Education",
    year: "2020 - 2025",
    title: "Bachelor's Degree (Honours)",
    place: "Barguna Government College",
    category: "Education",
    status: "In Progress",
    description:
      "Pursuing undergraduate degree with focus on analytical thinking, problem-solving, and academic excellence.",
    skills: [
      "Critical Thinking",
      "Research",
      "Communication",
      "Time Management",
    ],
    achievements: [
      "Maintaining good academic standing",
      "Developed analytical skills",
      "Enhanced communication abilities",
      "Leadership experience",
      "Team collaboration",
    ],
    website: "#",
    icon: <HiOutlineAcademicCap className="text-indigo-500" />,
  },
  {
    id: 5,
    type: "Education",
    year: "2018 - 2020",
    title: "Higher Secondary Certificate (HSC)",
    place: "Barguna Government College",
    category: "Education",
    status: "Completed",
    description:
      "Completed higher secondary education with strong foundation in science and mathematics.",
    skills: ["Mathematics", "Physics", "Chemistry", "Problem Solving"],
    achievements: [
      "Successfully completed HSC",
      "Strong foundation in sciences",
      "Developed logical thinking",
      "Academic excellence",
      "Preparation for higher studies",
    ],
    website: "#",
    icon: <HiOutlineAcademicCap className="text-cyan-500" />,
  },
  {
    id: 6,
    type: "Certifications",
    year: "2024",
    title: "React Developer Certification",
    place: "Meta (Facebook)",
    category: "Certifications",
    status: "Certified",
    description:
      "Professional certification in React development covering advanced concepts, hooks, state management, and best practices.",
    skills: ["React", "JSX", "Hooks", "State Management", "Component Design"],
    achievements: [
      "Mastered React fundamentals",
      "Advanced hooks usage",
      "State management patterns",
      "Performance optimization",
      "Testing strategies",
    ],
    website:
      "https://www.coursera.org/professional-certificates/meta-react-native",
    icon: <FiAward className="text-blue-600" />,
  },
  {
    id: 7,
    type: "Certifications",
    year: "2023",
    title: "JavaScript Algorithms Certification",
    place: "FreeCodeCamp",
    category: "Certifications",
    status: "Certified",
    description:
      "Comprehensive certification covering JavaScript algorithms, data structures, and problem-solving techniques.",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
    achievements: [
      "300+ algorithm challenges solved",
      "Data structure mastery",
      "Optimization techniques",
      "Code efficiency improvement",
      "Logical thinking enhancement",
    ],
    website: "https://www.freecodecamp.org/certification/",
    icon: <FiAward className="text-yellow-500" />,
  },
];

/* ===== FRAMER MOTION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.0, duration: 1.5, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1.0,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const isDarkMode = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const filtered =
    active === "All"
      ? experienceData
      : experienceData.filter((item) => item.category === active);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Experience inquiry:", {
        ...data,
        experience: selected?.title,
      });
      toast.success(`Message sent about ${selected?.title}! 🚀`, {
        style: {
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
        },
      });
      reset();
      setSelected(null);
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
      id="experience"
      className={`py-20 pt-28 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-transparent" : "bg-gray-50/50"
      }`}
    >
      <motion.div viewport={{ once: true }} className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
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
              My Journey
            </span>
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore my educational background, professional experience, and
            certifications that shaped my development journey.
          </p>

          {/* Filters */}
          <div className="flex justify-center mt-8">
            <div
              className={`flex flex-wrap gap-2 p-2 rounded-full backdrop-blur border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/80 border-gray-200 shadow-sm"
              }`}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                    active === cat
                      ? isDarkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== EXPERIENCE GRID ===== */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(item)}
                className={`group cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                    : "bg-white border-gray-200 hover:border-purple-300/50 shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
                }`}
              >
                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{item.icon}</div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "Current"
                            ? isDarkMode
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : "bg-green-100 text-green-600 border border-green-200"
                            : item.status === "Certified"
                            ? isDarkMode
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-blue-100 text-blue-600 border border-blue-200"
                            : isDarkMode
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            : "bg-purple-100 text-purple-600 border border-purple-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="flex items-center gap-2 mb-3">
                    <HiOutlineCalendar
                      className={`w-4 h-4 ${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Place */}
                  <div className="flex items-center gap-2 mb-4">
                    <HiOutlineLocationMarker
                      className={`w-4 h-4 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.place}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed line-clamp-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Skills Preview */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode
                            ? "bg-gray-700/50 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      >
                        +{item.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 backdrop-blur-sm z-40 ${
                isDarkMode ? "bg-black/70" : "bg-gray-900/50"
              }`}
              onClick={() => setSelected(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 40 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className={`
                fixed z-50 top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[95%] sm:w-[90%] max-w-4xl max-h-[90vh]
                overflow-y-auto
                rounded-2xl p-6 sm:p-8
                ${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-white border border-gray-200 shadow-2xl"
                }
              `}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{selected.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selected.status === "Current"
                            ? isDarkMode
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : "bg-green-100 text-green-600 border border-green-200"
                            : selected.status === "Certified"
                            ? isDarkMode
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "bg-blue-100 text-blue-600 border border-blue-200"
                            : isDarkMode
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            : "bg-purple-100 text-purple-600 border border-purple-200"
                        }`}
                      >
                        {selected.status}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      >
                        {selected.year}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl font-bold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {selected.title}
                    </h3>

                    <p
                      className={`text-base ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {selected.place}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-base leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {selected.description}
                </p>

                {/* Website Link */}
                {selected.website && selected.website !== "#" && (
                  <div className="mt-4">
                    <a
                      href={selected.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                        transition-all duration-300 hover:scale-105
                        ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                        }
                      `}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h4
                  className={`font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selected.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        isDarkMode
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30"
                          : "bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4
                  className={`font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Key Achievements
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selected.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-sm p-3 rounded-lg transition-colors ${
                        isDarkMode
                          ? "bg-gray-800/30 hover:bg-gray-800/50"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                          isDarkMode
                            ? "bg-purple-500 text-white"
                            : "bg-purple-600 text-white"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Form */}
              <div
                className={`border-t pt-8 ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h4
                  className={`font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Want to know more about this experience? Let's connect!
                </h4>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows="4"
                      placeholder={`Ask me about my experience with ${selected.title}...`}
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
                  </div>

                  {/* Submit Button */}
                  <motion.button
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
      </AnimatePresence>
    </section>
  );
};

export default Experience;
