import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi";

/* ===== DATA ===== */
const experienceData = [
  { year: "2025 - Present", title: "Programming Course", place: "Programming Hero" },
  { year: "2023 - 2025", title: "Online Course", place: "Free CodeCamp" },
  { year: "2020 - 2021", title: "Web Design Course", place: "House of Life" },
];

const educationData = [
  { year: "2020 - 2025", title: "Honours", place: "Barguna Govt College & University" },
  { year: "2018 - 2020", title: "HSC", place: "Barguna Govt College & University" },
  { year: "2017 - 2018", title: "SSC", place: "University of California" },
];

/* ===== FRAMER MOTION VARIANTS ===== */
const listVariant = {
  hidden: { opacity: 0 , y: 40},
  show: {
    opacity: 1,
    transition: { 
       delay: 1.0, duration: 1.9 ,
      ease: "easeOut", },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
       delay: 1.0, duration: 1.9 ,
      ease: "easeOut",},
  },
};

const Card = ({ item }) => (
  <motion.div
    initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
              whileHover={{ y: -12, scale: 1.0 }}
              whileTap={{ scale: 0.97 }}
    className="
      group rounded-2xl bg-gradient-to-br from-purple-900/40 to-black/40
      border border-purple-500/20 p-6 backdrop-blur
      hover:bg-purple-600/90
      hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
      transition
    "
  >
    <p className="text-purple-400 group-hover:text-white text-sm font-medium mb-2">
      {item.year}
    </p>

    <h4 className="text-white font-semibold text-lg">
      {item.title}
    </h4>

    <p className="text-gray-400 group-hover:text-white text-sm mt-1">
      {item.place}
    </p>
  </motion.div>
);

/* ===== EXPERIENCE SECTION ===== */
const Experience = () => {
  return (
    <section className="py-24 px-7">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Experience */}
        <motion.div
          variants={listVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
          initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
              whileTap={{ scale: 0.97 }}          
           className="flex items-center gap-3 mb-8">
            <HiOutlineBriefcase className="text-purple-400 text-3xl" />
            <h2 className="tage text-4xl font-bold text-purple-400">
              My Experience
            </h2>
          </motion.div>

          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={listVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <HiOutlineAcademicCap className="text-purple-400 text-3xl" />
            <h2 className="tage text-4xl font-bold text-purple-400">
              My Education
            </h2>
          </div>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
