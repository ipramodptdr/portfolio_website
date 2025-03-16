import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/Images/PNGLOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["About", "Projects", "Skills", "Contact"];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0,
      y: 100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-[100] backdrop-blur-lg border-b bg-[#050510]/80 border-cyan-500/20"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <img 
              src={Logo} 
              alt="Logo" 
              className="w-10 h-10 object-contain transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-500/20"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative group p-2 rounded-lg border backdrop-blur-sm border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10"
            >
              <FiMenu className="text-cyan-400 text-2xl" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 w-full h-screen backdrop-blur-lg bg-[#050510]/95 z-[101]"
            >
              <motion.button
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full border backdrop-blur-sm border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
              >
                <IoClose className="text-cyan-400 text-3xl" />
              </motion.button>

              <motion.ul
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col items-center justify-center h-full gap-8"
              >
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={itemVariants}
                    className="relative overflow-hidden group"
                  >
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-6xl font-primary tracking-wider relative block"
                    >
                      <span className="relative inline-block">
                        <span className="relative z-10 text-cyan-400/80 transition-colors duration-300 group-hover:text-cyan-400">
                          {item}
                        </span>
                        <motion.span
                          className="absolute inset-0 bg-[#050510] z-0"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </span>
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
      `}</style>
    </>
  );
};

export default Navbar;