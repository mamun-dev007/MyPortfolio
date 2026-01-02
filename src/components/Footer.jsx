import React from "react";
import { motion } from "framer-motion";
import {  FiYoutube, FiFacebook } from "react-icons/fi";
import { Link, Linkedin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="bg-gradient-to-br from-black via-[#12061f] to-black">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto  py-12"
      >
        <div className="  w-full p-10 ">
          <div className="flex flex-col items-center gap-8">

            {/* Links */}
            <motion.nav variants={item} className="flex flex-wrap justify-center gap-6 text-inter-6">
  {[
    { label: "About", to: "#about" },
    { label: "Contact", to: "#contact" },
    { label: "Projects", to: "#project" },
    { label: "Blog", to: "#blog" },
  ].map((link) => (
    <a
      key={link.label}
      href={link.to}
      className="text-gray-300 hover:text-purple-400 transition relative group"
    >
      {link.label}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 group-hover:w-full transition-all duration-300" />
    </a>
  ))}
</motion.nav>


            {/* Social */}
           <motion.div variants={item} className="flex items-center gap-4">
  <SocialIcon 
    href="https://www.linkedin.com/in/mamun-mia007/"
    icon={<FaLinkedinIn />}
    label="LinkedIn"
  />

  <SocialIcon
    href="https://www.facebook.com/mdmamun.mia.94695"
    icon={<FiFacebook />}
    label="Facebook"
  />

  <SocialIcon
    href="https://www.youtube.com"
    icon={<FiYoutube />}
    label="YouTube"
  />
</motion.div>


            {/* Copyright */}
            <motion.div variants={item} className="text-center">
              <p className="text-gray-400 text-sm">
                © {year} <span className="text-white font-medium">MD Mamun Mia</span>. All rights reserved.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </footer>
  );
};

const SocialIcon = ({ icon, label, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -4, scale: 1.1, rotate: -3 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition shadow-purple-500/50 shadow-2xl hover:shadow-purple-500/80 hover:shadow-[0_0_50px_rgba(168,85,247,1)]"

    >
      <span className="text-xl">{icon}</span>
    </motion.a>
  );
};


export default Footer;
