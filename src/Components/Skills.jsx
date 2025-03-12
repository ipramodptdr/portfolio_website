import { motion } from "framer-motion";
import { admin } from "../index";
const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <div className=" flex justify-center items-center">
          <div className="bg-neutral-800 flex px-5 py-3 rounded-lg gap-4 flex-wrap justify-center">
            {admin.skills[0].names.map((skill, index) => {
              const IconComponent = admin.skills[0].icons[index];
              return (
                <div className="flex flex-col items-center gap-2" key={skill}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-neutral-900 text-white px-4 py-2 rounded-full "
                  
                >
                  <div className="flex gap-2 text-white items-center justify-center py-2">
                    <IconComponent size={24} />
                  </div>
                </motion.div>
                <div className="text-white bg-neutral-900 px-4 py-2 rounded-md text-[10px]">{skill}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
