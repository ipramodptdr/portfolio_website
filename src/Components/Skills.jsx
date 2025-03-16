import { motion } from "framer-motion";
import { admin } from "../index";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
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
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12"
        >
          Technologies I've been working with recently
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {admin.skills[0].names.map((skill, index) => {
              const IconComponent = admin.skills[0].icons[index];
              return (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl backdrop-blur-sm border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                        <IconComponent size={32} />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
