import { motion } from "framer-motion";

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.2, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] top-10 left-10"
      />

      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 120, -100, 0],
          scale: [1.1, 1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px] bottom-0 right-0"
      />

      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-[130px] top-1/3 left-1/2"
      />

    </div>
  );
}

export default AuroraBackground;