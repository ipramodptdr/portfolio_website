import { motion } from "framer-motion";
import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/ipramodptdr", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/pramodptdr", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/pramodptdr", label: "Twitter" },
  ];

  return (
    <footer className="relative py-12 overflow-hidden border-t border-white/10">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent opacity-50" />

      <div className="container mx-auto px-4">
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(0, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-['Share_Tech_Mono']">
            <motion.a 
              href="#about"
              whileHover={{ color: "#fff" }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ color: "#fff" }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills"
              whileHover={{ color: "#fff" }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ color: "#fff" }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </motion.a>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400 font-['Quicksand']">
              Made with <FaHeart className="inline-block text-cyan-400 mx-1" /> by Pramod Patidar
            </p>
            <p className="mt-2 text-xs text-gray-500 font-['Share_Tech_Mono']">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;