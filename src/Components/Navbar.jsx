import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Images/PNGLOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["About", "Projects", "Skills", "Contact"];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full backdrop-blur-md z-50 border-b border-[#4F46E5]/20"
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <img 
              src={Logo} 
              alt="Logo" 
              className="w-10 h-10 object-contain hover:opacity-80 transition-opacity duration-300"
            />
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#A5B4FC] text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] origin-left scale-x-0 transition-transform duration-300"
                  whileHover={{ scaleX: 1 }}
                />
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white  transition-colors z-50"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 w-full h-screen bg-black backdrop-blur-lg md:hidden"
            >
              <motion.ul
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col items-center justify-center h-screen gap-8 pt-20"
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.1, x: 10 }}
                    className="relative"
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#A5B4FC] text-white transition-colors duration-300 text-2xl font-medium"
                    >
                      {item}
                    </a>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] origin-left scale-x-0 transition-transform duration-300"
                      whileHover={{ scaleX: 1 }}
                    />
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