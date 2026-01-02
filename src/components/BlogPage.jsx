import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

/* ===== DATA ===== */
const blogs = [
  {
    id: 1,
    title: "Top 10 UI UX Designers",
    image: "/uxui.png",
    category: "Tutorial",
    date: "Oct 01, 2022",
    link: "https://www.uxness.in/",
  },
  {
    id: 2,
    title: "App Development Guides",
    image: "/mobileApp.png",
    category: "Tips",
    date: "Nov 01, 2022",
    link: "https://www.blog.udonis.co/mobile-marketing/mobile-apps/mobile-app-development",
  },
  {
    id: 3,
    title: "Learn Graphic Design Free",
    image: "/grafix.png",
    category: "Freebies",
    date: "Dec 01, 2022",
    link: "https://designshack.net/articles/inspiration/graphic-design-blogs/",
  },
];

const categoryGlow = {
  Tutorial: "shadow-[0_0_60px_rgba(168,85,247,0.35)]",
  Tips: "shadow-[0_0_60px_rgba(59,130,246,0.35)]",
  Freebies: "shadow-[0_0_60px_rgba(236,72,153,0.35)]",
};

/* ===== FRAMER VARIANTS ===== */
const gridVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
       delay: 1.0, duration: 1.5 ,
      ease: "easeOut",},
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
       delay: 1.0, duration: 1.5 ,
      ease: "easeOut",},
  },
};

const Blogs = () => {
  return (
    <section id="blog" className=" py-24 px-7 bg-gradient-to-br from-black via-[#12061f] to-black">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
       delay: 1.0, duration: 1.9 ,
      ease: "easeOut",}}
          className="text-center mb-16"
        >
          <h2 className="tage text-4xl md:text-5xl font-bold text-purple-400">
            Recent Blogs
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We put your ideas and wishes into unique blog content that inspires
            you and your customers.
          </p>
        </motion.div>

        {/* ===== BLOG GRID ===== */}
        <motion.div
          variants={gridVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariant}
              initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -8, scale: 1.0 }}
              className={`group relative rounded-3xl overflow-hidden  border border-white/10 bg-white/5 cursor-pointer
                ${categoryGlow[blog.category]}
              `}
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition " />

              {/* Category */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-500 text-xs text-white hover:blur-2xl">
                {blog.category}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6
                              translate-y-10 opacity-0
                              group-hover:translate-y-0 group-hover:opacity-100
                              transition">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {blog.title}
                </h3>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-2 text-purple-400 text-sm hover:text-purple-300"
                >
                  Read More <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
