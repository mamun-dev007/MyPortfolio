import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
const services = [
  {
    id: "01",
    title: "Responsive Design",
    desc: "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
    details: {
      overview:
        "I create responsive web designs that provide optimal viewing experience across all devices - from mobile phones to desktop computers.",
      features: [
        "Mobile-first design approach",
        "Flexible grid systems using CSS Grid and Flexbox",
        "Responsive images and media queries",
        "Cross-browser compatibility testing",
        "Touch-friendly navigation and interactions",
        "Performance optimization for mobile devices",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript",
        "React",
      ],
      process: [
        "Device and screen size analysis",
        "Wireframe creation for different breakpoints",
        "Progressive enhancement implementation",
        "Testing across multiple devices and browsers",
        "Performance optimization and refinement",
      ],
    },
  },
  {
    id: "02",
    title: "CMS Development",
    desc: "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
    details: {
      overview:
        "I develop custom Content Management Systems that empower clients to easily manage their website content without technical knowledge.",
      features: [
        "Custom admin dashboard design",
        "User role management and permissions",
        "WYSIWYG content editor integration",
        "Media library management",
        "SEO-friendly content structure",
        "Multi-language support",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React",
        "Next.js",
        "WordPress",
      ],
      process: [
        "Requirements analysis and planning",
        "Database schema design",
        "Admin interface development",
        "Content management features implementation",
        "User training and documentation",
      ],
    },
  },
  {
    id: "03",
    title: "API Integrations",
    desc: "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
    details: {
      overview:
        "I specialize in creating and integrating RESTful APIs that seamlessly connect your applications with external services and databases.",
      features: [
        "RESTful API development",
        "Third-party service integrations",
        "Authentication and authorization",
        "Data validation and error handling",
        "API documentation and testing",
        "Real-time data synchronization",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "JWT",
        "Postman",
      ],
      process: [
        "API requirements analysis",
        "Endpoint design and documentation",
        "Security implementation",
        "Testing and validation",
        "Integration and deployment",
      ],
    },
  },
  {
    id: "04",
    title: "Website Redesign",
    desc: "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
    details: {
      overview:
        "I transform outdated websites into modern, user-friendly experiences that reflect your brand identity and meet current web standards.",
      features: [
        "Modern UI/UX design principles",
        "Brand identity integration",
        "Performance optimization",
        "SEO improvements",
        "Accessibility compliance",
        "Content strategy and migration",
      ],
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
        "Adobe XD",
      ],
      process: [
        "Current website audit and analysis",
        "User research and competitor analysis",
        "Design mockups and prototyping",
        "Development and content migration",
        "Testing and launch optimization",
      ],
    },
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
    transition: { delay: 1.0, duration: 1.9, ease: "easeOut" },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 1.0, duration: 1.9, ease: "easeOut" },
  },
};

const MyQuality = () => {
  const [activeService, setActiveService] = useState(null);
  const isDarkMode = useTheme();

  return (
    <section
      id="service"
      className={`px-2 py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
          className={`text-center tage text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
            isDarkMode
              ? "from-purple-400 to-pink-400"
              : "from-purple-600 to-pink-600"
          }`}
        >
          My Quality Services
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className={`text-center mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          We put your ideas and wishes into unique web projects that inspire you
          and your customers.
        </motion.p>

        {/* Services */}
        <motion.div variants={container} className="mt-12 sm:mt-16">
          {/* Mobile Card Layout */}
          <div className="block sm:hidden space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={card}
                whileHover={{ y: -6 }}
                onClick={() => setActiveService(service)}
                className={`
                  relative group cursor-pointer
                  p-6 rounded-2xl overflow-hidden
                  transition-all duration-300 shadow-lg
                  ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700"
                      : "bg-white hover:bg-gray-50 border border-gray-200 hover:shadow-xl"
                  }
                `}
              >
                {/* Hover gradient */}
                <div
                  className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600/20 to-pink-500/20"
                      : "bg-gradient-to-r from-purple-50 to-pink-50"
                  }
                `}
                />

                {/* Service ID */}
                <div
                  className={`relative z-10 text-sm font-semibold mb-3 transition-colors ${
                    isDarkMode
                      ? "text-purple-400 group-hover:text-purple-300"
                      : "text-purple-600 group-hover:text-purple-700"
                  }`}
                >
                  {service.id}
                </div>

                {/* Service Title */}
                <div
                  className={`relative z-10 text-xl font-semibold mb-3 transition-colors ${
                    isDarkMode
                      ? "text-white group-hover:text-white"
                      : "text-gray-800 group-hover:text-gray-900"
                  }`}
                >
                  {service.title}
                </div>

                {/* Service Description */}
                <div
                  className={`relative z-10 text-sm leading-relaxed transition-colors ${
                    isDarkMode
                      ? "text-gray-300 group-hover:text-gray-200"
                      : "text-gray-600 group-hover:text-gray-700"
                  }`}
                >
                  {service.desc}
                </div>

                {/* Arrow Icon - Hidden on mobile */}
                <div className="hidden">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop/Tablet List Layout */}
          <div
            className={`hidden sm:block divide-y ${
              isDarkMode ? "divide-white/10" : "divide-gray-200"
            }`}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={card}
                whileHover={{ y: -6 }}
                onClick={() => setActiveService(service)}
                className={`
                  relative group cursor-pointer
                  grid grid-cols-12 gap-6 items-center
                  py-8 px-5 rounded-xl overflow-hidden
                  transition-all duration-300
                  ${
                    isDarkMode
                      ? "hover:bg-gray-800/50"
                      : "hover:bg-white/80 hover:shadow-lg"
                  }
                `}
              >
                {/* Hover gradient */}
                <div
                  className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600 to-pink-500"
                      : "bg-gradient-to-r from-purple-100 to-pink-100"
                  }
                `}
                />

                {/* Service ID */}
                <div
                  className={`relative z-10 col-span-1 text-xl font-semibold transition-colors ${
                    isDarkMode
                      ? "text-purple-400 group-hover:text-white"
                      : "text-purple-600 group-hover:text-purple-800"
                  }`}
                >
                  {service.id}
                </div>

                {/* Service Title */}
                <div
                  className={`relative z-10 col-span-4 text-2xl font-semibold transition-colors ${
                    isDarkMode
                      ? "text-white group-hover:text-white"
                      : "text-gray-800 group-hover:text-gray-900"
                  }`}
                >
                  {service.title}
                </div>

                {/* Service Description */}
                <div
                  className={`relative z-10 col-span-6 text-base leading-relaxed transition-colors ${
                    isDarkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-gray-800"
                  }`}
                >
                  {service.desc}
                </div>

                {/* Arrow Icon - Visible on desktop/tablet */}
                <div className="relative z-10 col-span-1 flex justify-end">
                  <ArrowUpRight
                    className={`w-6 h-6 transition-all ${
                      isDarkMode
                        ? "text-purple-400 group-hover:text-white"
                        : "text-purple-600 group-hover:text-purple-800"
                    } group-hover:translate-x-1 group-hover:-translate-y-1`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
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
              className={`fixed inset-0 backdrop-blur-sm z-40 ${
                isDarkMode ? "bg-black/70" : "bg-gray-900/50"
              }`}
              onClick={() => setActiveService(null)}
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
                rounded-2xl p-4 sm:p-6 lg:p-8
                ${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-600 to-purple-500"
                    : "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                }
              `}
            >
              <button
                onClick={() => setActiveService(null)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <h3
                className={`text-2xl sm:text-3xl font-bold mb-4 pr-12 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {activeService.title}
              </h3>

              <div
                className={`leading-relaxed ${
                  isDarkMode ? "text-white/90" : "text-gray-700"
                }`}
              >
                {/* Service Overview */}
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Overview
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {activeService.details.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.details.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3 text-sm sm:text-base p-3 rounded-lg transition-colors ${
                          isDarkMode
                            ? "bg-white/5 hover:bg-white/10 border border-white/10"
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
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
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {activeService.details.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border border-purple-400/40 hover:border-purple-400/60 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 hover:text-white"
                            : "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-300 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Development Process
                  </h4>
                  <ol className="space-y-3">
                    {activeService.details.process.map((step, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-4 text-sm sm:text-base p-3 rounded-lg transition-colors ${
                          isDarkMode 
                            ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                            : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                            isDarkMode
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                              : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyQuality;
