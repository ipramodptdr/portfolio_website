import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Preloader from "./Preloader";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/ipramodptdr" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/pramodptdr" },
    { icon: FaTwitter, url: "https://x.com/ipramxd" },
    {icon: FaInstagram, url: "https://www.instagram.com/pr4mod7/" },
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      <AnimatePresence>
        <Preloader isLoading={isLoading} />
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.03) 0%, transparent 50%)",
              opacity: 0.5
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="mb-6"
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              custom={0}
            >
              <span className="block text-cyan-400/80 text-xl sm:text-2xl font-light tracking-widest mb-4 font-['Orbitron']">
                Hi, I'm
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 font-['Orbitron']">
                Pramod
              </span>
            </motion.h1>
            
            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-2xl sm:text-3xl lg:text-4xl text-cyan-400/90 mb-8 font-['Share_Tech_Mono']"
            >
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Creative Coder",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>
            
            <motion.p
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-light font-['Quicksand']"
            >
              I craft modern and responsive web experiences with a focus on beautiful design and smooth interactions. Let's build something amazing together.
            </motion.p>

            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-block bg-white/5 text-white px-8 py-4 rounded-lg font-['Share_Tech_Mono'] border border-white/10 backdrop-blur-sm transition-all duration-300"
              >
                View My Work
              </motion.a>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(0, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 p-2 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Quicksand:wght@300;400;500&family=Share+Tech+Mono&display=swap');
        `}</style>
      </motion.section>
    </>
  );
};

export default Hero;