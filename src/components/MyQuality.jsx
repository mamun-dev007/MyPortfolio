import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResponsiveDesign from "../pages/ResponsiveDesign";

/* ===== DATA ===== */
const services = [
  {
    id: "01",
    title: "Responsive Design",
    desc:
      "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
  },
  {
    id: "02",
    title: "CMS Development",
    desc:
      "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
  },
  {
    id: "03",
    title: "API Integrations",
    desc:
      "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
  },
  {
    id: "04",
    title: "Website Redesign",
    desc:
      "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {  delay: 1.0, duration: 1.9 , ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {  delay: 1.0, duration: 1.9 , ease: "easeOut" },
  },
};

const MyQuality = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="service" className="px-2 bg-gray-900 text-white py-20">
      <motion.div
        className="max-w-7xl mx-auto px-4"
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
          className=" text-center tage text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          My Quality Services
        </motion.h2>

        <motion.p
         initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
          className="text-center text-gray-400 mt-4 max-w-3xl mx-auto"
        >
          We put your ideas and wishes into unique web projects that inspire
          you and your customers.
        </motion.p>



        {/* Services */}



        <motion.div variants={container} className="mt-16 divide-y divide-white/10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
              variants={card}
              whileHover={{ y: -6 }}
              onClick={() => setActiveService(service)}
              className="
                relative group cursor-pointer
                grid grid-cols-12 gap-6 items-center
                py-8 px-5 rounded-xl overflow-hidden
              "
            >
              {/* Hover gradient */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-purple-600 to-pink-500
                transition duration-500
              " />

              <div className="relative z-10 col-span-1 text-purple-400 text-xl font-semibold group-hover:text-white">
                {service.id}
              </div>

              <div className="relative z-10 col-span-4 text-2xl font-semibold">
                {service.title}
              </div>

              <div className="relative z-10 col-span-6 text-gray-300 group-hover:text-white">
                {service.desc}
              </div>

              <div className="relative z-10 col-span-1 flex justify-end">
                <ArrowUpRight className="text-purple-400 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {activeService && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setActiveService(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 40 }}
              transition={{ delay: 0.4, duration: 0.8 , ease: "easeOut" }}
              className="
                fixed z-50 top-123 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-4xl max-h-[90vh]
                overflow-y-auto
                bg-gradient-to-br from-purple-600 to-purple-500
                rounded-2xl p-8
              "
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white"
              >
                <X />
              </button>

              <h3 className="text-3xl font-bold mb-4">
                {activeService.title}
              </h3>

              <div className="text-white/90 leading-relaxed">
                <ResponsiveDesign />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyQuality;
