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
        className="border-b border-cyan-500/20 w-full backdrop-blur-lg fixed z-[49]"
      >
        <div className="container flex justify-between p-4 items-center mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-10 w-10 duration-300 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] object-contain transition-all"  
            />
            <motion.div
              className="bg-cyan-500/20 rounded-full absolute inset-0"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <div className="flex gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r border border-cyan-500/20 p-2 rounded-lg backdrop-blur-sm from-cyan-500/10 group relative to-fuchsia-500/10"
            >
              <FiMenu className="text-2xl text-cyan-400" />
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
              className="bg-[#050510]/95 h-screen w-full backdrop-blur-lg fixed inset-0 z-[101]"
            >
              <motion.button
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r border border-cyan-500/20 p-2 rounded-full absolute backdrop-blur-sm from-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] right-6 to-fuchsia-500/10 top-6"
              >
                <IoClose className="text-3xl text-cyan-400" />
              </motion.button>

              <motion.ul
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col h-full justify-center gap-8 items-center"
              >
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={itemVariants}
                    className="group overflow-hidden relative"
                  >
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-6xl block font-primary relative tracking-wider"
                    >
                      <span className="inline-block relative">
                        <span className="text-cyan-400/80 duration-300 group-hover:text-cyan-400 relative transition-colors z-10">
                          {item}
                        </span>
                        <motion.span
                          className="bg-[#050510] absolute inset-0 z-0"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </span>
                      <motion.div
                        className="bg-gradient-to-r h-0.5 w-full absolute bottom-0 from-cyan-500 left-0 to-fuchsia-500"
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
    </>
  );
};

export default Navbar;