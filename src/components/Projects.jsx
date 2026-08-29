import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX, FiGithub, FiExternalLink } from "react-icons/fi";
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
const categories = ["All", "Full Stack", "Frontend", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "AssetVerse Project",
    subtitle: "Corporate Asset Management System",
    image: "/project11.png",
    category: "Full Stack",
    description:
      "A comprehensive asset management system for corporate environments with role-based access control, real-time tracking, and advanced reporting features.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Role-based authentication (Admin, HR, Employee)",
      "Asset request and approval system",
      "Real-time asset tracking and management",
      "Advanced filtering and search functionality",
      "Responsive design for all devices",
      "Secure payment integration",
    ],
    liveLink: "https://assetverse-2025.netlify.app/",
    githubClient: "https://github.com/mamun-dev007/AssetVerse-client-site.git",
    githubServer:
      "https://github.com/mamun-dev007/assets-varse-server-side.git",
  },
  {
    id: 2,
    title: "Habit Tracker",
    subtitle: "Personal Habit Management App",
    image: "/9.png",
    category: "Full Stack",
    badge: "New Age",
    description:
      "A modern habit tracking application that helps users build and maintain positive habits with streak tracking, progress visualization, and motivational features.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Chart.js",
      "Firebase",
    ],
    features: [
      "Daily habit tracking with streak counters",
      "Progress visualization with charts",
      "Habit categories and custom goals",
      "Reminder notifications",
      "Social sharing and motivation",
      "Data export and analytics",
    ],
    liveLink: "https://habit-trakers.netlify.app/",
    githubClient: "https://github.com/mamun-dev007/clientsite-10.git",
    githubServer: "https://github.com/mamun-dev007/backend-10.git",
  },
  {
    id: 3,
    title: "Hero Play Store",
    subtitle: "Mobile App Showcase Platform",
    image: "/7.png",
    category: "Frontend",
    description:
      "A modern app store interface showcasing mobile applications with beautiful UI, smooth animations, and responsive design for optimal user experience.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    features: [
      "Modern app showcase interface",
      "Smooth animations and transitions",
      "Category-based app filtering",
      "Responsive design for all devices",
      "Search and discovery features",
      "App rating and review system",
    ],
    liveLink: "https://hero-play-store-apps.netlify.app/",
    githubClient: "https://github.com/mamun-dev007/App-store",
  },
  {
    id: 4,
    title: "GreenNest Project",
    subtitle: "Environmental Conservation Platform",
    image: "/8.png",
    category: "Full Stack",
    description:
      "An eco-friendly platform promoting environmental conservation through tree planting initiatives, community engagement, and sustainability tracking.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Stripe",
      "Leaflet",
    ],
    features: [
      "Tree planting campaign management",
      "Interactive map for planting locations",
      "Community engagement features",
      "Donation and payment processing",
      "Environmental impact tracking",
      "Educational resources and blog",
    ],
    liveLink: "https://tree-plants.netlify.app/",
    githubClient:
      "https://github.com/programming-hero-web-course2/b12-a9-firesheild-mamun-dev007",
  },
  {
    id: 5,
    title: "Creative Landing",
    subtitle: "Modern Ticket System Website",
    image: "/6.png",
    category: "UI/UX",
    description:
      "A sleek and modern landing page for a ticket booking system with intuitive design, smooth user flow, and conversion-optimized layout.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    features: [
      "Modern and intuitive UI design",
      "Smooth user experience flow",
      "Responsive ticket booking interface",
      "Interactive animations and effects",
      "Conversion-optimized layout",
      "Mobile-first design approach",
    ],
    liveLink: "#",
    githubClient: "#",
  },
];

/* ===== FRAMER MOTION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 1 },
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

const Projects = () => {
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
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Project inquiry:", { ...data, project: selected?.title });
      toast.success("Message sent about " + selected?.title + "!", {
        style: {
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
        },
      });
      reset();
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

  // Small helper to render a project-slug style placeholder label
  const slugify = (title) =>
    "// " + title.toLowerCase().replace(/[^a-z0-9]+/g, "");

  return (
    <section
      id="project"
      className={`py-20 pt-28 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-transparent" : "bg-gray-50/50"
      }`}
    >
      <motion.div viewport={{ once: true }} className="max-w-7xl mx-auto text-center">
        {/* ===== HEADER ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="flex items-center text-center gap-2 mb-4 mx-auto">
           
            <span
               className={`bg-gradient-to-r bg-clip-text text-transparent mx-auto ${
                isDarkMode
                  ? "from-purple-400 to-pink-400"
                  : "from-purple-600 to-pink-600"
              }`}
            >
              Featured Projects
            </span>
          </div>

          <h2
            className={`tage text-4xl font-bold mb-3
              bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? "from-purple-400 to-pink-400"
                  : "from-purple-600 to-pink-600"
              }`}
          >
            Things I&apos;ve shipped
          </h2>

          <p
            className={`max-w-2xl text-center mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A selection of full-stack products, from marketplaces to habit
            trackers.
          </p>

          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-2 mt-18 gap-5 ">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-md rounded-full font-medium border transition-all duration-300  ${
                  active === cat
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/25"
                    : isDarkMode
                    ? "text-gray-300 border-gray-700 hover:border-gray-500"
                    : "text-gray-600 border-gray-300 hover:border-gray-400"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ===== FEATURED PROJECT ===== */}
        {featured && (
          <motion.div
            layout
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            onClick={() => setSelected(featured)}
            className={
              "grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border cursor-pointer mb-6 transition-all duration-500 " +
              (isDarkMode
                ? "bg-gray-900/60 border-gray-800 hover:border-purple-500/40"
                : "bg-white border-gray-200 hover:border-purple-400/50 shadow-sm hover:shadow-xl")
            }
          >
            {/* Left: image / code-style placeholder */}
            <div
              className={
                "relative min-h-[220px] lg:min-h-[320px] flex items-center justify-center overflow-hidden " +
                (isDarkMode ? "bg-black/40" : "bg-gray-100")
              }
            >
              <img
                src={featured.image}
                alt={featured.title}
                className={
                  "absolute inset-0 w-full h-full object-cover " +
                  (isDarkMode ? "opacity-60" : "opacity-100")
                }
              />
              {isDarkMode && (
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
              )}
            </div>

            {/* Right: content */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span
                className={
                  "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest mb-3 " +
                  (isDarkMode ? "text-purple-400" : "text-purple-600")
                }
              >
                Featured Project
              </span>

              <h3
                className={
                  "text-2xl sm:text-3xl font-bold mb-1 " +
                  (isDarkMode ? "text-white" : "text-gray-900")
                }
              >
                {featured.title}
              </h3>

              <p
                className={
                  "text-sm mb-4 " + (isDarkMode ? "text-gray-500" : "text-gray-500")
                }
              >
                {featured.subtitle}
              </p>

              <p
                className={
                  "font-mono text-xs mb-4 " +
                  (isDarkMode ? "text-gray-500" : "text-gray-500")
                }
              >
                {featured.technologies.join(" | ")}
              </p>

              <p
                className={
                  "text-sm leading-relaxed mb-6 " +
                  (isDarkMode ? "text-gray-400" : "text-gray-600")
                }
              >
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {featured.liveLink && featured.liveLink !== "#" && (
                  <a
                    href={featured.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                )}
                {featured.githubClient && featured.githubClient !== "#" && (
                  <a
                    href={featured.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={
                      "px-5 py-2.5 rounded-full text-sm font-semibold border transition-transform hover:scale-105 " +
                      (isDarkMode
                        ? "border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-purple-500"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-purple-400")
                    }
                  >
                    GitHub
                  </a>
                )}
                <button
                  onClick={() => setSelected(featured)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  Case Study
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== REST PROJECTS GRID ===== */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {rest.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(project)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gray-900/60 border-gray-800 hover:border-purple-500/40"
                    : "bg-white border-gray-200 hover:border-purple-400/50 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Placeholder image area with slug text */}
                <div
                  className={`relative h-40 sm:h-48 flex items-center justify-center overflow-hidden ${
                    isDarkMode ? "bg-black/40" : "bg-gray-100"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 " +
                      (isDarkMode
                        ? "opacity-40 group-hover:opacity-60"
                        : "opacity-100")
                    }
                  />
                  {isDarkMode && (
                    <span className="relative z-10 font-mono text-xs text-gray-500">
                      {slugify(project.title)}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest mb-2 ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    {"Project " + String(index + 2).padStart(2, "0")}
                  </span>

                  <h3
                    className={`text-lg font-bold mb-1 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm mb-2 ${
                      isDarkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    className={`font-mono text-[11px] mb-4 ${
                      isDarkMode ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {project.technologies.join(" | ")}
                  </p>

                  <div className="flex items-center gap-3 text-sm">
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-1 font-medium ${
                          isDarkMode
                            ? "text-white hover:text-purple-400"
                            : "text-gray-800 hover:text-purple-600"
                        }`}
                      >
                        Live Demo <FiArrowUpRight size={13} />
                      </a>
                    )}
                    {project.githubClient && project.githubClient !== "#" && (
                      <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-1 font-medium ${
                          isDarkMode
                            ? "text-white hover:text-purple-400"
                            : "text-gray-800 hover:text-purple-600"
                        }`}
                      >
                        GitHub <FiArrowUpRight size={13} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(project)}
                      className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                    >
                      Case Study
                    </button>
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
                w-[95%] sm:w-[90%] max-w-5xl max-h-[90vh]
                overflow-y-auto
                rounded-2xl
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

              {/* Project Image */}
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                {selected.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white font-medium">
                    {selected.badge}
                  </span>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "bg-purple-100 text-purple-600 border border-purple-200"
                      }`}
                    >
                      {selected.category}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {selected.title}
                  </h3>

                  <p
                    className={`text-base leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {selected.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {selected.liveLink && selected.liveLink !== "#" && (
                    <a
                      href={selected.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                        transition-all duration-300 hover:scale-105
                        ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                        }
                      `}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  {selected.githubClient && selected.githubClient !== "#" && (
                    <a
                      href={selected.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                        border transition-all duration-300 hover:scale-105
                        ${
                          isDarkMode
                            ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }
                      `}
                    >
                      <FiGithub className="w-4 h-4" />
                      Client Code
                    </a>
                  )}

                  {selected.githubServer && (
                    <a
                      href={selected.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                        border transition-all duration-300 hover:scale-105
                        ${
                          isDarkMode
                            ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }
                      `}
                    >
                      <FiGithub className="w-4 h-4" />
                      Server Code
                    </a>
                  )}
                </div>

                {/* Credentials (if available) */}
                {selected.credentials && (
                  <div
                    className={`mb-8 p-4 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <h4
                      className={`font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Test Credentials
                    </h4>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Email: {selected.credentials.email}
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Password: {selected.credentials.password}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h4
                    className={`font-semibold mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          isDarkMode
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30"
                            : "bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4
                    className={`font-semibold mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selected.features.map((feature, index) => (
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
                          OK
                        </span>
                        <span
                          className={
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          {feature}
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
                    Interested in this project? Let&apos;s discuss!
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
                          {...register("name", {
                            required: "Name is required",
                          })}
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
                        placeholder={
                          "Tell me about your interest in " + selected.title + "..."
                        }
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;