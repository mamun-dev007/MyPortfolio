import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiTag,
  FiExternalLink,
  FiShare2,
  FiX,
} from "react-icons/fi";
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

/* ===== DATA ===== */
const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "Tech Tips",
];

const blogs = [
  {
    id: 1,
    title: "Modern React Development: Best Practices for 2025",
    excerpt:
      "Explore the latest React patterns, hooks, and performance optimization techniques that every developer should know in 2025. Learn about concurrent features, server components, and the new React compiler.",
    image: "/uxui.png",
    category: "Web Development",
    date: "January 3, 2025",
    readTime: "8 min read",
    author: "MD Mamun Mia",
    tags: ["React", "JavaScript", "Performance", "Best Practices"],
    link: "https://react.dev/blog/2024/04/25/react-19",
    originalLink: "https://react.dev/blog/2024/04/25/react-19",
    featured: true,
    content:
      "React 19 introduces groundbreaking features that revolutionize how we build web applications. From automatic batching to concurrent rendering, these updates focus on performance and developer experience. The new React compiler automatically optimizes your components, reducing the need for manual memoization. Server components enable better SEO and faster initial page loads by rendering on the server. Suspense boundaries now work seamlessly with data fetching, providing smooth loading states. The updated DevTools offer better debugging capabilities with component profiling and performance insights.",
  },
  {
    id: 2,
    title: "The Complete Guide to Responsive Web Design",
    excerpt:
      "Master the art of creating websites that look perfect on every device with modern CSS techniques and design principles. From mobile-first approach to advanced grid layouts.",
    image: "/mobileApp.png",
    category: "UI/UX Design",
    date: "December 28, 2024",
    readTime: "12 min read",
    author: "MD Mamun Mia",
    tags: ["CSS", "Responsive Design", "Mobile First", "Flexbox"],
    link: "https://web.dev/responsive-web-design-basics/",
    originalLink: "https://web.dev/responsive-web-design-basics/",
    featured: false,
    content:
      "Responsive web design is no longer optional in today's multi-device world. This comprehensive guide covers everything from viewport meta tags to advanced CSS Grid techniques. Learn how to implement a mobile-first approach that ensures your designs work beautifully on smartphones before scaling up to tablets and desktops. Discover the power of CSS Container Queries for component-based responsive design. Master fluid typography using clamp() functions and relative units. Explore modern layout techniques with CSS Grid and Flexbox that adapt seamlessly to different screen sizes.",
  },
  {
    id: 3,
    title: "Building Scalable Node.js Applications",
    excerpt:
      "Learn how to architect and build Node.js applications that can handle millions of users with proper scaling strategies, microservices, and performance optimization.",
    image: "/grafix.png",
    category: "Web Development",
    date: "December 25, 2024",
    readTime: "15 min read",
    author: "MD Mamun Mia",
    tags: ["Node.js", "Scalability", "Architecture", "Performance"],
    link: "https://nodejs.org/en/docs/guides/",
    originalLink: "https://nodejs.org/en/docs/guides/",
    featured: true,
    content:
      "Scaling Node.js applications requires careful planning and architectural decisions. This guide explores horizontal and vertical scaling strategies, load balancing techniques, and database optimization. Learn about microservices architecture and how to break down monolithic applications into manageable services. Discover caching strategies using Redis and CDNs to improve response times. Implement proper error handling and logging for production environments. Explore containerization with Docker and orchestration with Kubernetes for seamless deployment and scaling.",
  },
  {
    id: 4,
    title: "Advanced CSS Grid Layouts and Techniques",
    excerpt:
      "Dive deep into CSS Grid and discover advanced layout techniques that will revolutionize your web design workflow. Create complex, responsive layouts with ease.",
    image: "/10.png",
    category: "UI/UX Design",
    date: "December 20, 2024",
    readTime: "10 min read",
    author: "MD Mamun Mia",
    tags: ["CSS Grid", "Layout", "Web Design", "CSS"],
    link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    originalLink: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    featured: false,
    content:
      "CSS Grid has transformed how we approach web layouts, offering unprecedented control over two-dimensional designs. This advanced guide covers grid template areas, implicit grids, and subgrids. Learn how to create magazine-style layouts, card grids that adapt to content, and complex dashboard interfaces. Discover the power of named grid lines and how they simplify responsive design. Explore CSS Grid alongside Flexbox for hybrid layouts that combine the best of both worlds. Master grid alignment properties and create visually stunning, accessible layouts.",
  },
  {
    id: 5,
    title: "Mobile App Development with React Native",
    excerpt:
      "Create powerful cross-platform mobile applications using React Native. Learn navigation, state management, and native module integration for iOS and Android.",
    image: "/9.png",
    category: "Mobile Apps",
    date: "December 15, 2024",
    readTime: "14 min read",
    author: "MD Mamun Mia",
    tags: ["React Native", "Mobile Development", "iOS", "Android"],
    link: "https://reactnative.dev/docs/getting-started",
    originalLink: "https://reactnative.dev/docs/getting-started",
    featured: false,
    content:
      "React Native enables developers to build native mobile apps using React and JavaScript. This comprehensive guide covers project setup, component architecture, and navigation patterns. Learn about platform-specific code and how to access native device features like camera, GPS, and push notifications. Explore state management solutions including Redux Toolkit and Zustand. Discover performance optimization techniques, memory management, and debugging tools. Master the deployment process for both iOS App Store and Google Play Store.",
  },
  {
    id: 6,
    title: "JavaScript Performance Optimization Tips",
    excerpt:
      "Boost your JavaScript application performance with proven optimization techniques. From code splitting to memory management and runtime optimization.",
    image: "/8.png",
    category: "Tech Tips",
    date: "December 10, 2024",
    readTime: "9 min read",
    author: "MD Mamun Mia",
    tags: ["JavaScript", "Performance", "Optimization", "Web Vitals"],
    link: "https://web.dev/fast/",
    originalLink: "https://web.dev/fast/",
    featured: false,
    content:
      "JavaScript performance directly impacts user experience and SEO rankings. This guide covers essential optimization techniques including code splitting, lazy loading, and tree shaking. Learn about the JavaScript event loop, memory management, and garbage collection. Discover how to identify performance bottlenecks using browser DevTools and profiling techniques. Explore modern bundling strategies with Webpack and Vite. Implement service workers for caching and offline functionality. Master Core Web Vitals optimization for better search rankings.",
  },
];

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

const BlogPage = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const isDarkMode = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const filtered =
    active === "All" ? blogs : blogs.filter((blog) => blog.category === active);

  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Blog inquiry:", { ...data, blog: selected?.title });
      toast.success(`Message sent about "${selected?.title}"! 🚀`, {
        style: {
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
        },
      });
      reset();
      setSelected(null);
    } catch {
      toast.error("Something went wrong! Please try again.", {
        style: {
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
        },
      });
    }
  };

  const handleShare = async (blog) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: blog.originalLink,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(blog.originalLink);
      toast.success("Link copied to clipboard!", {
        style: {
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#1f2937",
          border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
        },
      });
    }
  };

  return (
    <section
      id="blog"
      className={`py-20 pt-28 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-transparent" : "bg-gray-50/50"
      }`}
    >
      <motion.div viewport={{ once: true }} className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="tage text-4xl md:text-5xl font-bold">
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? "from-purple-400 to-pink-400"
                  : "from-purple-600 to-pink-600"
              }`}
            >
              Latest Blog Posts
            </span>
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Insights, tutorials, and thoughts on web development, design, and
            technology trends.
          </p>

          {/* Filters */}
          <div className="flex justify-center mt-8">
            <div
              className={`flex flex-wrap gap-2 p-2 rounded-full backdrop-blur border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/80 border-gray-200 shadow-sm"
              }`}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                    active === cat
                      ? isDarkMode
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== FEATURED BLOGS ===== */}
        {active === "All" && featuredBlogs.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mb-16"
          >
            <h3
              className={`text-2xl font-bold mb-8 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Featured Posts
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariant}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelected(blog)}
                  className={`group cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                      : "bg-white border-gray-200 hover:border-purple-300/50 shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
                  }`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* Featured Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white font-medium">
                      Featured
                    </span>

                    {/* Category */}
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode
                          ? "bg-gray-800/80 text-gray-200 border border-gray-600"
                          : "bg-white/80 text-gray-700 border border-gray-300"
                      }`}
                    >
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <FiCalendar
                          className={`w-4 h-4 ${
                            isDarkMode ? "text-purple-400" : "text-purple-600"
                          }`}
                        />
                        <span
                          className={
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          {blog.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock
                          className={`w-4 h-4 ${
                            isDarkMode ? "text-purple-400" : "text-purple-600"
                          }`}
                        />
                        <span
                          className={
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          {blog.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-3 line-clamp-2 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className={`text-sm leading-relaxed line-clamp-3 mb-4 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            isDarkMode
                              ? "bg-gray-700/50 text-gray-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(blog.originalLink, "_blank");
                        }}
                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                          isDarkMode
                            ? "text-purple-400 hover:text-purple-300"
                            : "text-purple-600 hover:text-purple-700"
                        }`}
                      >
                        Read more... <FiExternalLink className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(blog);
                        }}
                        className={`p-2 rounded-full transition-colors ${
                          isDarkMode
                            ? "text-gray-400 hover:text-white hover:bg-gray-700"
                            : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        <FiShare2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ===== BLOG GRID ===== */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filtered.map((blog) => (
              <motion.div
                key={blog.id}
                layout
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(blog)}
                className={`group cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                    : "bg-white border-gray-200 hover:border-purple-300/50 shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Category */}
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-gray-800/80 text-gray-200 border border-gray-600"
                        : "bg-white/80 text-gray-700 border border-gray-300"
                    }`}
                  >
                    {blog.category}
                  </span>

                  {/* Featured Badge */}
                  {blog.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <FiCalendar
                        className={`w-4 h-4 ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      />
                      <span
                        className={
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        {blog.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiClock
                        className={`w-4 h-4 ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      />
                      <span
                        className={
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-2 line-clamp-2 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className={`text-sm leading-relaxed line-clamp-3 mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode
                            ? "bg-gray-700/50 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 2 && (
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      >
                        +{blog.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(blog.originalLink, "_blank");
                      }}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        isDarkMode
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-700"
                      }`}
                    >
                      Read more ... <FiExternalLink className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(blog);
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-700"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <FiShare2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 backdrop-blur-sm z-40 ${
                isDarkMode ? "bg-black/70" : "bg-gray-900/50"
              }`}
              onClick={() => setSelected(null)}
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
                rounded-2xl
                ${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-white border border-gray-200 shadow-2xl"
                }
              `}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Blog Image */}
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Featured Badge */}
                {selected.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white font-medium">
                    Featured
                  </span>
                )}

                {/* Category */}
                <span
                  className={`absolute top-4 right-12 px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode
                      ? "bg-gray-800/80 text-gray-200 border border-gray-600"
                      : "bg-white/80 text-gray-700 border border-gray-300"
                  }`}
                >
                  {selected.category}
                </span>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {selected.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{selected.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      <span>{selected.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Author & Actions */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        isDarkMode ? "bg-purple-600" : "bg-purple-600"
                      }`}
                    >
                      {selected.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p
                        className={`font-medium ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {selected.author}
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Author
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        window.open(selected.originalLink, "_blank")
                      }
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                        transition-all duration-300 hover:scale-105
                        ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                        }
                      `}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Read more
                    </button>

                    <button
                      onClick={() => handleShare(selected)}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <FiShare2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <p
                    className={`text-base leading-relaxed mb-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {selected.content}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h4
                    className={`font-semibold mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selected.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          isDarkMode
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30"
                            : "bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200"
                        }`}
                      >
                        <FiTag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div
                  className={`border-t pt-8 ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Have questions about this article? Let's discuss!
                  </h4>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className={`
                            w-full rounded-lg border px-4 py-3 text-sm
                            focus:outline-none focus:ring-2 focus:ring-purple-500
                            transition-all duration-300
                            ${
                              isDarkMode
                                ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                                : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
                            }
                          `}
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className={`
                            w-full rounded-lg border px-4 py-3 text-sm
                            focus:outline-none focus:ring-2 focus:ring-purple-500
                            transition-all duration-300
                            ${
                              isDarkMode
                                ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
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
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        rows="4"
                        placeholder={`Ask me about "${selected.title}"...`}
                        className={`
                          w-full rounded-lg border px-4 py-3 text-sm resize-none
                          focus:outline-none focus:ring-2 focus:ring-purple-500
                          transition-all duration-300
                          ${
                            isDarkMode
                              ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
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
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.96 }}
                      className={`
                        w-full py-3 px-6 rounded-lg font-semibold
                        transition-all duration-300 disabled:opacity-50
                        ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
                        }
                      `}
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogPage;
