import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();

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
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Something went wrong. Try again.");
        }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="w-full bg-neutral-800 text-gray-300 p-3 rounded-lg mb-4"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="w-full bg-neutral-800 text-gray-300 p-3 rounded-lg mb-4"
          />
          <textarea
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
    </motion.section>
  );
};

export default Contact;