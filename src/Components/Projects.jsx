import { motion } from "framer-motion";
import { projects } from "../index";
const Projects = () => {
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2
          
          className="text-3xl font-bold text-white mb-8"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg"
            >
              <a href={project.href}>
             <img src={project.image} alt={project.title}  className="w-full h-40 object-cover rounded-lg mb-1"/>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;