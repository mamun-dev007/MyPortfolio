import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FiYoutube, 
  FiFacebook, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowUp,
  FiHeart,
  FiCode,
  FiExternalLink
} from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
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

const Footer = () => {
  const year = new Date().getFullYear();
  const isDarkMode = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Newsletter subscription:", data);
      toast.success("Successfully subscribed to newsletter! 🎉", {
        style: {
          background: isDarkMode ? '#1f2937' : '#ffffff',
          color: isDarkMode ? '#ffffff' : '#1f2937',
          border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
        },
      });
      reset();
    } catch {
      toast.error("Something went wrong! Please try again.", {
        style: {
          background: isDarkMode ? '#1f2937' : '#ffffff',
          color: isDarkMode ? '#ffffff' : '#1f2937',
          border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
        },
      });
    }
  };

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

  const quickLinks = [
    { label: "Home", to: "#home" },
    { label: "About", to: "#about" },
    { label: "Skills", to: "#skills" },
    { label: "Experience", to: "#experience" },
    { label: "Projects", to: "#project" },
    { label: "Blog", to: "#blog" },
    { label: "Contact", to: "#contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "API Development",
    "Database Design",
    "Performance Optimization",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mamun-mia007/",
      icon: <FaLinkedinIn />,
      color: "hover:text-blue-500 hover:border-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/mamun-dev007",
      icon: <FaGithub />,
      color: "hover:text-gray-400 hover:border-gray-400",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/mdmamun.mia.94695",
      icon: <FiFacebook />,
      color: "hover:text-blue-600 hover:border-blue-600",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/mamun_dev007",
      icon: <FaTwitter />,
      color: "hover:text-sky-500 hover:border-sky-500",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@mamun-dev007",
      icon: <FiYoutube />,
      color: "hover:text-red-500 hover:border-red-500",
    },
  ];

  return (
    <>
      <footer className={`relative transition-colors duration-500 ${
        isDarkMode 
          ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" 
          : "bg-gradient-to-br from-gray-50 via-purple-50/50 to-gray-50"
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <motion.div variants={item} className="lg:col-span-1">
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode 
                      ? "from-purple-400 to-pink-400" 
                      : "from-purple-600 to-pink-600"
                  }`}>
                    MD Mamun Mia
                  </span>
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Full Stack Developer passionate about creating beautiful, functional web experiences. 
                  Specializing in modern JavaScript frameworks and responsive design.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiMail className={`w-4 h-4 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`} />
                  <span className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    mamunmiahridoy@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className={`w-4 h-4 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`} />
                  <span className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    +880 1602500633
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className={`w-4 h-4 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`} />
                  <span className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item} className="lg:col-span-1">
              <h4 className={`text-lg font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}>
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.to}
                    className={`block text-sm transition-colors duration-300 hover:translate-x-2 ${
                      isDarkMode 
                        ? "text-gray-400 hover:text-purple-400" 
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div variants={item} className="lg:col-span-1">
              <h4 className={`text-lg font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}>
                Services
              </h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={item} className="lg:col-span-1">
              <h4 className={`text-lg font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}>
                Stay Updated
              </h4>
              <p className={`text-sm mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                Subscribe to get the latest updates on web development trends and tutorials.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`
                      w-full rounded-lg border px-4 py-3 text-sm
                      focus:outline-none focus:ring-2 focus:ring-purple-500
                      transition-all duration-300
                      ${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
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
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    w-full py-3 px-4 rounded-lg font-medium text-sm
                    transition-all duration-300 disabled:opacity-50
                    ${
                      isDarkMode
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                    }
                  `}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            variants={item}
            className={`my-12 h-px ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`} 
          />

          {/* Bottom Section */}
          <motion.div variants={item} className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.name}
                  href={social.href}
                  icon={social.icon}
                  label={social.name}
                  color={social.color}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className={`text-sm flex items-center gap-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                © {year} Made with 
                <FiHeart className="text-red-500 w-4 h-4" /> 
                and 
                <FiCode className={isDarkMode ? "text-purple-400" : "text-purple-600"} /> 
                by 
                <span className={`font-medium ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  MD Mamun Mia
                </span>
              </p>
              <p className={`text-xs mt-1 ${
                isDarkMode ? "text-gray-500" : "text-gray-500"
              }`}>
                All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50
          w-12 h-12 rounded-full
          flex items-center justify-center
          transition-all duration-300
          ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
              : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
          }
        `}
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

const SocialIcon = ({ icon, label, href, color, isDarkMode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`
        w-10 h-10 rounded-full border-2 flex items-center justify-center
        transition-all duration-300 ${color}
        ${
          isDarkMode
            ? "border-gray-600 text-gray-400 hover:bg-gray-800"
            : "border-gray-300 text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      <span className="text-lg">{icon}</span>
    </motion.a>
  );
};

export default Footer;