import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { admin } from "../index";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-2 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Get to know me better
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr] gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6"
            >
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {admin.about}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-400">
                  <p>
                    <span className="text-gray-500">Name:</span>{" "}
                    {admin.firstName} {admin.lastName}
                  </p>
                  <p>
                    <span className="text-gray-500">Role:</span> {admin.role}
                  </p>
                  <p>
                    <span className="text-gray-500">Phone:</span>{" "}
                    {admin.contactNumber}
                  </p>
                </div>
              </div>

              <motion.a
                href={admin.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaDownload />
                  <a href="../src/assets/Images/PramodResume.pdf" download>Download Resume</a>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;