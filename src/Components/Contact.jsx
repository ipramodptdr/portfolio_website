import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaTimes, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_iw5oi8u",
        "template_dgk4pus",
        templateParams,
        "0emp7opPASB83w6Uq"
      )
      .then(
        (response) => {
          handleSuccess();
          setName("");
          setEmail("");
          setMessage("");
        },
      );
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(79, 70, 229, 0.2)",
    },
    unfocused: {
      scale: 1,
      boxShadow: "none",
    }
  };
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="py-20"
    >
      <div className="container mx-auto px-4 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-8"
        >
          Have a question or want to work together?
        </motion.p>
        <form className="max-w-lg mx-auto backdrop-blur-lg bg-neutral-800/30 p-8 rounded-2xl shadow-xl" onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <motion.div
              variants={inputVariants}
              animate={focusedInput === 'name' ? 'focused' : 'unfocused'}
              className="relative"
            >
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
                type="text"
                placeholder="Your Name"
                className="w-full bg-neutral-900/50 text-gray-300 p-4 pl-10 rounded-lg outline-none border border-transparent focus:border-indigo-500 transition-all duration-300"
              />
            </motion.div>
          </div>

          <div className="relative mb-6">
            <motion.div
              variants={inputVariants}
              animate={focusedInput === 'email' ? 'focused' : 'unfocused'}
              className="relative"
            >
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
                type="email"
                placeholder="Your Email"
                className="w-full bg-neutral-900/50 text-gray-300 p-4 pl-10 rounded-lg outline-none border border-transparent focus:border-indigo-500 transition-all duration-300"
              />
            </motion.div>
          </div>

          <div className="relative mb-6">
            <motion.div
              variants={inputVariants}
              animate={focusedInput === 'message' ? 'focused' : 'unfocused'}
              className="relative"
            >
              <MdMessage className="absolute left-3 top-6 text-gray-400" />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput(null)}
                placeholder="Your Message"
                className="w-full bg-neutral-900/50 text-gray-300 p-4 pl-10 rounded-lg outline-none border border-transparent focus:border-indigo-500 transition-all duration-300"
                rows="5"
              ></textarea>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50"
          >
            <div className="bg-white/20 p-2 rounded-lg">
              <FaCheckCircle className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-semibold">Message Sent!</h3>
              <p className="text-sm text-white/80">Thank you for reaching out.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSuccess(false)}
              className="ml-4 text-white/60 hover:text-white"
            >
              <FaTimes />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;