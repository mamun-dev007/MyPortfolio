import React from "react";
import { motion } from "framer-motion";
import { Download, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import TypedText from "./TypedText";

const socialLinks = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/mamun-mia007/",
  },
  {
    icon: Github,
    url: "https://github.com/yourusername",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/yourusername",
  },
  {
    icon: Instagram,
    url: "https://instagram.com/yourusername",
  },
];

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,        
        duration: 0.8,
        ease: "easeOut",
      }}
      className="px-3 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-800"
    >
      {/* Hero Section */}
      <div id="home" className="container px-4 py-20 lg:py-20 max-w-7xl mx-auto">
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
              transition={{  delay: 1.0, duration: 1.9 }}
              className="text-white text-xl md:text-2xl font-light"
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
              transition={{  delay: 1.0, duration: 1.9 }}
              className="text-inter text-gray-400 text-base md:text-lg max-w-xl"
            >
              I break down complex user experience problems to create integrity
              focused solutions that connect billions of people.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 1.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Download CV */}
              <motion.a
                href="/Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white text-inter-6 rounded-full px-6 flex items-center gap-2 transition shadow-purple-500/50 shadow-2xl hover:shadow-purple-500/80 hover:shadow-[0_0_50px_rgba(168,85,247,1)]"
              >
                Download CV <Download size={18} />
              </motion.a>

              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, url }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition shadow-purple-500/50 shadow-4xl hover:shadow-purple-500/80 hover:shadow-[0_0_50px_rgba(168,85,247,1)]"

                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.9 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative w-full h-[400px] bg-slate-800 rounded-3xl overflow-hidden border border-purple-600/40 mt-10">
                <img
                  src="/mamun1.png"
                  alt="Mamun Mia"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
