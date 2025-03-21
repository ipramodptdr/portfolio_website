
import { motion } from "framer-motion";
import { projects } from "../index";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      id="projects"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl text-center text-white font-bold mb-2"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12"
        >
          Some of my recent work that showcases my skills
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gradient-to-br border border-white/5 rounded-2xl backdrop-blur-sm duration-300 from-neutral-800/50 hover:border-indigo-500/20 overflow-hidden relative to-neutral-900/50 transition-all">
                  {project.image && (
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="h-full w-full duration-500 group-hover:scale-110 object-cover transform transition-transform"
                      />
                      <div className="bg-gradient-to-t absolute from-neutral-900 inset-0 opacity-60 to-transparent via-neutral-900/20" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-white text-xl duration-300 font-bold group-hover:text-indigo-400 mb-3 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 duration-300 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex text-indigo-400 duration-300 group-hover:opacity-100 group-hover:translate-y-0 items-center mt-4 opacity-0 transform transition-all translate-y-2">
                      <span className="text-sm font-medium">View Project</span>
                      <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br rounded-2xl -z-10 absolute duration-300 from-indigo-500/20 group-hover:opacity-100 inset-0 opacity-0 to-purple-500/20 transition-opacity" />
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
