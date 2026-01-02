import React from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

/* ===== DATA ===== */
const skills = [
  { name: "Node.js", percentage: 72, icon: <FaNode className="text-green-500" /> },
  { name: "Express.js", percentage: 80, icon: <SiExpress className="text-gray-300" /> },
  { name: "Firebase", percentage: 87, icon: <IoLogoFirebase className="text-amber-400" /> },
  { name: "JavaScript", percentage: 85, icon: <FaJs className="text-yellow-400" /> },
  { name: "React", percentage: 84, icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", percentage: 64, icon: <RiNextjsFill className="text-white" /> },
  { name: "HTML5", percentage: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Tailwind CSS", percentage: 98, icon: <RiTailwindCssFill className="text-sky-400" /> },
  { name: "CSS3", percentage: 98, icon: <FaCss3Alt className="text-blue-500" /> },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
       delay: 1.0, duration: 1.5 ,
      ease: "easeOut",
    },
  },
};

const progressVariant = {
  hidden: { scaleX: 0 },
  show: (percentage) => ({
    scaleX: percentage / 100,
    transition: { duration: 1.2, ease: "easeOut" },
  }),
};

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 pt-28 px-7">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
       delay: 1.0, duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="tage text-4xl md:text-5xl font-bold">
            <span className=" bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Modern technologies and tools I use to build high-quality web experiences.
          </p>
        </motion.div>

        {/* ===== SKILLS GRID ===== */}
        <motion.div
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
               initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
              whileHover={{ y: -12, scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="group"
            >
              <div
                className=" 
                  relative rounded-2xl p-6
                  bg-slate-800/50 backdrop-blur
                  border-2 border-purple-500/50
                  transition-all duration-500
                  grayscale group-hover:grayscale-0
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Icon */}
                <motion.div
                  className="relative z-10 flex justify-center text-5xl mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Percentage + Progress */}
                <div className="relative z-10 text-center mb-4">
                  <span className="text-3xl font-bold text-white">
                    {skill.percentage}%
                  </span>

                  <div className="w-full h-2 bg-slate-700 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      custom={skill.percentage}
                      variants={progressVariant}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                    />
                  </div>
                </div>

                {/* Name */}
                <p className="relative z-10 text-center font-semibold text-purple-400 group-hover:text-purple-300 transition">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
