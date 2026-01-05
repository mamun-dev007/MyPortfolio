import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

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

const TypedText = () => {
  const el = useRef(null);
  const isDarkMode = useTheme();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "MD Mamun Mia",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Pixel UX/UI Designer",
      ],
      typeSpeed: 90,
      backSpeed: 70,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    // Update cursor color based on theme
    const updateCursorColor = () => {
      const cursor = document.querySelector(".typed-cursor");
      if (cursor) {
        cursor.style.color = isDarkMode ? "#ffffff" : "#1f2937";
        cursor.style.transition = "color 0.3s ease";
      }
    };

    // Initial cursor color update
    setTimeout(updateCursorColor, 100);

    // Update cursor color when theme changes
    const observer = new MutationObserver(updateCursorColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      typed.destroy();
      observer.disconnect();
    };
  }, [isDarkMode]);

  return (
    <div className="relative">
      <span
        ref={el}
        className={`font-bold text-3xl lg:text-4xl tage transition-colors duration-300 relative z-10 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      />

      {/* Glowing text effect */}
      <div
        className={`absolute inset-0 font-bold text-3xl lg:text-4xl tage blur-sm pointer-events-none select-none transition-colors duration-300 animate-pulse ${
          isDarkMode ? "text-purple-400 opacity-30" : "text-purple-600 opacity-40"
        }`}
      >
        {/* Glow effect background */}
      </div>

      {/* Sparkle effects */}
      <div className="absolute -top-2 -right-2">
        <div
          className={`w-2 h-2 rounded-full animate-ping ${
            isDarkMode 
              ? "bg-purple-400 shadow-lg shadow-purple-400/50" 
              : "bg-purple-600 shadow-lg shadow-purple-600/50"
          }`}
          style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
        />
      </div>

      <div className="absolute -bottom-1 -left-1">
        <div
          className={`w-1 h-1 rounded-full animate-bounce ${
            isDarkMode 
              ? "bg-pink-400 shadow-md shadow-pink-400/50" 
              : "bg-pink-600 shadow-md shadow-pink-600/50"
          }`}
          style={{ animationDuration: "2s", animationDelay: "1s" }}
        />
      </div>

      {/* Additional floating sparkles */}
      <div className="absolute top-1/2 -right-4">
        <div
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${
            isDarkMode 
              ? "bg-cyan-400 shadow-sm shadow-cyan-400/50" 
              : "bg-cyan-600 shadow-sm shadow-cyan-600/50"
          }`}
          style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
        />
      </div>

      <div className="absolute bottom-1/4 -left-3">
        <div
          className={`w-1 h-1 rounded-full animate-ping ${
            isDarkMode 
              ? "bg-yellow-400 shadow-sm shadow-yellow-400/50" 
              : "bg-yellow-600 shadow-sm shadow-yellow-600/50"
          }`}
          style={{ animationDuration: "2.5s", animationDelay: "1.5s" }}
        />
      </div>
    </div>
  );
};

export default TypedText;
