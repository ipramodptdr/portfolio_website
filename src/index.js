import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import ecommerce from "./assets/Images/E-commerce.png";
import guessImage from "./assets/Images/guess.png";

const admin = {
  firstName: "Pramod ",
  lastName:"Patidar",
  role: "Front-End Developer",
  contactNumber: "+91 99777-03412",
  resume: "/resume.pdf",
  about: "Hi there! I'm Pramod Patidar, a passionate front-end developer with a love for creating visually engaging, interactive, and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I specialize in bringing designs to life with React, Framer Motion, and GSAP to build dynamic and seamless user experience, I am always eager to explore new technologies and stay up-to-date with the latest trends in web development. Whether it's crafting pixel-perfect layouts, optimizing performance, or implementing smooth animations, I focus on delivering clean, efficient, and aesthetically pleasing code. Let's create something amazing together!",
  skills: [
    {
      names: ["HTML5", "CSS3", "JavaScript", "React", "Framer Motion", "Tailwind CSS", "GitHub"],
      icons: [
        FaHtml5,
        FaCss3 ,
        FaJs ,
        FaReact ,
        FiFramer ,
        SiTailwindcss  ,
        FaGithub ,
      ],
    },
  ],
};
const projects = [
  {
    id: 1,
    title: "Guess The Number Game",
    description: "A simple game where the user has to guess the number between 1 and 100.",
    href: "https://lucky-guess.netlify.app//",
    image: guessImage
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "An interactive e-commerce website built using React.",
    href: "https://tst-e-commerce.netlify.app/",
    image: ecommerce
  },
];  


export { admin, projects };

