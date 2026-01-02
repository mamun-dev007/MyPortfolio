import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import ResponsiveDesign from "../pages/ResponsiveDesign";

/* ===== DATA ===== */
const categories = ["All", "UI/UX", "Branding", "Apps"];

const projects = [
  {
    id: 1,
    title: "AssetVerse project",
    subtitle: "Corporate Web Experience",
    image: "/10.png",
    category: "UI/UX",
  },
  {
    id: 2,
    title: "Habit traker",
    subtitle: "Deeply habit in every life",
    image: "/9.png",
    category: "Branding",
    badge: "New Age",
  },
  {
    id: 3,
    title: "Apps.io ",
    subtitle: "Mobile App UI",
    image: "/7.png",
    category: "Apps",
  },
  {
    id: 4,
    title: "GreenNest project",
    subtitle: "Creative natural Site",
    image: "/8.png",
    category: "UI/UX",
  },
  {
    id: 5,
    title: "Creative Landing",
    subtitle: "ticket system Website",
    image: "/6.png",
    category: "UI/UX",
  },
];



const categoryGlow = {
  "UI/UX": "shadow-[0_0_60px_rgba(168,85,247,0.35)]",
  Branding: "shadow-[0_0_60px_rgba(236,72,153,0.35)]",
  Apps: "shadow-[0_0_60px_rgba(34,197,94,0.35)]",
};

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

const Projects = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="project" className="py-24 px-7 bg-gray-900">
      <motion.div viewport={{ once: true }} className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="tage text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Recent Works
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We put your ideas into unique digital experiences.
          </p>

          {/* Filters */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2 p-2 rounded-full bg-white/5 backdrop-blur border border-white/10">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 text-sm rounded-full transition
                    ${
                      active === cat
                        ? "bg-purple-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== PROJECT GRID ===== */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariant}
                whileHover={{ y: -12, scale: 1.0 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(project)}
                className={`group cursor-pointer relative rounded-3xl overflow-hidden
        border border-white/10 bg-white/5
        ${categoryGlow[project.category] || ""}
      `}
       >
                {/* <div>
      My Submission

Submitted At: 06:21 PM, 18th Dec - 2025

HR Test Email: adminmamun@gmail.com

HR Test Password: Admin.1

Live Site URL: https://assetverse-2025.netlify.app/

GitHub Client Repository: https://github.com/mamun-dev007/AssetVerse-client-site.git

GitHub Server Repository: https://github.com/mamun-dev007/assets-varse-server-side.git


My Submission

Submitted At: 05:29 PM, 14th Nov - 2025

Client-side GitHub repository :https://github.com/mamun-dev007/clientsite-10.git

Server-side GitHub repos: https://github.com/mamun-dev007/backend-10.git

Live website link: https://habit-trakers.netlify.app/

git ripo: https://github.com/programming-hero-web-course2/b12-a9-firesheild-mamun-dev007

live link : https://tree-plants.netlify.app/

live link : https://hero-play-store-apps.netlify.app/

repo link : https://github.com/mamun-dev007/App-store




    </div> */}

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Badge */}
                {project.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500 text-xs text-white ">
                    {project.badge}
                  </span>
                )}

                {/* Content */}
                <div
                   className="
    absolute bottom-5 left-0 right-0 mx-5 p-3
    rounded-2xl
    bg-purple-500/70
    backdrop-blur-7xl
    flex justify-between items-center
    translate-y-10 opacity-0
    group-hover:opacity-100
    group-hover:translate-y-0
    transition-all duration-500
  "
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm">{project.subtitle}</p>
                  </div>
                  <FiArrowUpRight className="text-white text-2xl" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur px-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{
                delay: 0.8,
                duration: 1.0,
                ease: "easeOut",
              }}
              className="relative max-w-4xl w-full mx-auto my-10 rounded-3xl
                         bg-black border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute  right-4 z-50 text-white text-2xl bg-purple-600"
              >
                <FiX />
              </button>

              <div className="max-h-[85vh] overflow-y-auto">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selected.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{selected.subtitle}</p>

                  <ResponsiveDesign />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
