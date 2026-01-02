import { motion } from "framer-motion";

const Loading = ({ name = "Dev@Mamun" }) => {
  return (
    <div // Dark with subtle gradient
className="fixed inset-0 z-[9999] bg-gradient-to-b from-gray-900 via-slate-900 to-black flex items-center justify-center">
      
      <div className="flex flex-col items-center">
        
        <div className="relative w-24 h-24 mb-6">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="
              absolute inset-0 rounded-full
              border-8 border-cyan-400/30
              border-t-purple-400
              shadow-[0_0_30px_rgba(34,211,238,0.6)]
            "
          />

          
          <div className="absolute inset-3 rounded-full bg-purple-400/20 blur-xl" />
        </div>

        
        <h1 className="text-purple-500 text-5xl sm:text-4xl font-bold tracking-wider flex tage">
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: (name.length - index) * 0.1 + 0.5
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Loading;