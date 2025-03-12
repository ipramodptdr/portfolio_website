import { motion } from "framer-motion";
import { admin } from "../index";
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-white mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-gray-300 max-w-2xl">
         {admin.about}
        </p>
      </div>
    </motion.section>
  );
};

export default About;