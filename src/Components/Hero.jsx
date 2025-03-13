import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/path/to/your/background-image.jpg')] bg-cover bg-center opacity-20"
      />

      {/* Content */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span>Hi, I'm  Pramod</span>
          <TypeAnimation
            sequence={[
              "  Front-End Developer",
              1500,
              "  UI/UX Designer",
              1500,
            ]}
            speed={10}
            repeat={Infinity}
            cursor={true}
          />
        </h1>
        <p className="text-gray-300 text-xl mb-8 font-light">
          I build modern and responsive web applications.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold"
        >
          View My Work
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;