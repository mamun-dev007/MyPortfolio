import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const Loading = ({ name = "MD Mamun Mia" }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    const textInterval = setInterval(() => {
      const texts = ["Initializing", "Loading Assets", "Preparing Experience", "Almost Ready"];
      setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  // Floating particles animation - using useMemo to avoid re-creating on each render
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i * 7.3) % 100,
      y: (i * 11.7) % 100,
      delay: (i * 0.3) % 2,
      duration: 3 + (i % 3),
    })), []
  );

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center overflow-hidden">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Loading Content */}
      <div className="flex flex-col items-center space-y-8 relative z-10">
        
        {/* Logo/Brand Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-32 h-32 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"
          />
          
          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 w-28 h-28 rounded-full border-3 border-transparent border-t-purple-400/70 border-l-pink-400/70"
          />
          
          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 w-24 h-24 rounded-full border-2 border-transparent border-t-purple-300/50"
          />

          {/* Center Glow */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/50"
            >
              <span className="text-white font-bold text-xl">M</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-gray-400 text-lg font-light tracking-wide"
          >
            Full Stack Developer
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "300px" }}
          transition={{ duration: 1, delay: 2 }}
          className="relative"
        >
          <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <motion.span
              key={loadingText}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-300 text-sm font-medium"
            >
              {loadingText}
            </motion.span>
            
            <span className="text-purple-400 text-sm font-mono">
              {Math.round(Math.min(progress, 100))}%
            </span>
          </div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Subtle Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-8 text-center"
        >
          <p className="text-gray-500 text-xs tracking-wider">
            Crafting Digital Experiences
          </p>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-purple-500/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      
      <motion.div
        className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-pink-500/30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
    </div>
  );
};

export default Loading;