import { motion } from "framer-motion";

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050510]"
    >
      <div className="relative">
        {/* Outer circle */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-24 h-24 rounded-full border-t-2 border-r-2 border-cyan-500 absolute"
        />
        
        {/* Inner circle */}
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: {
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-16 h-16 rounded-full border-b-2 border-l-2 border-fuchsia-500 absolute top-4 left-4"
        />

        {/* Center dot */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 absolute top-10 left-10"
        />

        {/* Loading text */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-cyan-400 font-mono text-sm tracking-wider"
        >
          LOADING
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader; 