import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuccess();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_iw5oi8u", // Replace with your EmailJS Service ID
        "template_dgk4pus", // Replace with your EmailJS Template ID
        templateParams,
        "0emp7opPASB83w6Uq" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setName("");
          setEmail("");
          setMessage("");
        },
      );
  };
  
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="py-20"
    >
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="w-full bg-neutral-800 text-gray-300 p-3 rounded-lg mb-4"
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="w-full bg-neutral-800 text-gray-300 p-3 rounded-lg mb-4"
          />
            <textarea
            required
            placeholder="Your Message"
            className="w-full bg-neutral-800 text-gray-300 p-3 rounded-lg mb-4"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Send Message
          </motion.button>
        </form>
      </div>
      {success && (
      <motion.div
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: 30}}
      transition={{duration: 0.5}}
      className=" flex items-center gap-2 fixed top-20 left-[40%] bg-neutral-900 rounded-lg p-3 text-white">
        <FaCheckCircle className="text-green-500"/> <span>Message sent successfully!</span>
      </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;