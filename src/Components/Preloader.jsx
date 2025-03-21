import { motion } from "framer-motion";

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex bg-[#050510] justify-center fixed inset-0 items-center left-0 top-0 z-50"
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
          className="border-cyan-500 border-r-2 border-t-2 h-24 rounded-full w-24 absolute"
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
          className="border-b-2 border-fuchsia-500 border-l-2 h-16 rounded-full w-16 absolute left-4 top-4"
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
          className="bg-gradient-to-r h-4 rounded-full w-4 absolute from-cyan-500 left-10 to-fuchsia-500 top-10"
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
          className="text-cyan-400 text-sm -bottom-12 -translate-x-1/2 absolute font-mono left-1/2 tracking-wider transform"
        >
          LOADING
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader; 