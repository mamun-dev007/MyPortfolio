import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

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

/* ===== ANIMATIONS ===== */
const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const isDarkMode = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      toast.success("Message sent successfully! 🚀", {
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

  return (
    <section
      id="contact"
      className={`py-20 pt-28 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode 
          ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" 
          : "bg-gradient-to-br from-gray-50 via-purple-50/50 to-gray-50"
      }`}
    >
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          variants={item}
          className="text-center mb-16"
        >
          <h2 className="tage text-4xl md:text-5xl font-bold">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkMode 
                ? "from-purple-400 to-pink-400" 
                : "from-purple-600 to-pink-600"
            }`}>
              Get In Touch
            </span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Let's work together to bring your ideas to life. I'm always excited to discuss new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT – FORM */}
          <motion.div
            variants={fadeLeft}
            className={`
              rounded-2xl backdrop-blur border p-6 sm:p-8
              transition-all duration-500
              ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  : "bg-white/80 border-gray-200 shadow-lg hover:shadow-xl"
              }
            `}
          >
            <motion.h3
              variants={item}
              className={`text-2xl sm:text-3xl font-bold mb-3 ${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Let's work together!
            </motion.h3>

            <motion.p
              variants={item}
              className={`mb-6 text-sm sm:text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I design and code beautifully simple things and love what I do.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Name */}
              <motion.div variants={item}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`
                    w-full rounded-xl border px-4 py-3 text-sm
                    focus:outline-none focus:ring-2 focus:ring-purple-500
                    transition-all duration-300
                    ${
                      isDarkMode
                        ? "bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
                    }
                  `}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={item}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`
                    w-full rounded-xl border px-4 py-3 text-sm
                    focus:outline-none focus:ring-2 focus:ring-purple-500
                    transition-all duration-300
                    ${
                      isDarkMode
                        ? "bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
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
              </motion.div>

              {/* Message */}
              <motion.div variants={item}>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className={`
                    w-full rounded-xl border px-4 py-3 text-sm resize-none
                    focus:outline-none focus:ring-2 focus:ring-purple-500
                    transition-all duration-300
                    ${
                      isDarkMode
                        ? "bg-gray-900/50 border-gray-600 text-white placeholder-gray-400"
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
              </motion.div>

              {/* Button */}
              <motion.button
                variants={item}
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.96 }}
                className={`
                  w-full mt-6 py-3 px-6 rounded-xl font-semibold
                  transition-all duration-300 disabled:opacity-50
                  ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                  }
                `}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* RIGHT – INFO */}
          <motion.div
            variants={fadeRight}
            className="space-y-6 sm:space-y-8"
          >
            <ContactItem 
              icon={<FiPhone />} 
              title="Phone" 
              value="+880 1602500633" 
              isDarkMode={isDarkMode}
            />
            <ContactItem
              icon={<FiMail />}
              title="Email"
              value="mamunmiahridoy@gmail.com"
              isDarkMode={isDarkMode}
            />
            <ContactItem
              icon={<FiMapPin />}
              title="Address"
              value="Dhaka, Bangladesh"
              isDarkMode={isDarkMode}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const ContactItem = ({ icon, title, value, isDarkMode }) => (
  <motion.div
    variants={item}
    whileHover={{ x: 6 }}
    className="flex items-start gap-4"
  >
    <div className={`p-3 rounded-full text-lg ${
      isDarkMode 
        ? "bg-purple-500/20 text-purple-400" 
        : "bg-purple-100 text-purple-600"
    }`}>
      {icon}
    </div>
    <div>
      <p className={`text-xs sm:text-sm ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}>
        {title}
      </p>
      <p className={`font-medium text-sm sm:text-base ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}>
        {value}
      </p>
    </div>
  </motion.div>
);

export default Contact;