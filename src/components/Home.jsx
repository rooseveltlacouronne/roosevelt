
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";
import heroImage from "../assets/profile.jpeg";
import logo from "../assets/logo.jpeg";
import "./home.css";

const Home = () => {
  // Texte à animer
  const roles = [
    "Développeur web React",
    "Designeur graphique",
    "Développeur mobile React",
    "Entrepreneur",
    "Développeur web Flutter",
    "Designeur UI",
    "Entrepreneur",
    "Marketteur",
    "Designeur UI/UX",
    "Maintenancier",
    "Développeur mobile Flutter",
    "Secrétaire",
    "Gestionnaire",
  ];

  // Hooks pour l'effet typewriter
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(100);

  React.useEffect(() => {
    const handleType = () => {
      const fullText = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1200);
        setTypingSpeed(30);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black relative overflow-hidden"
    >
      {/* Logo animé */}
      <motion.img
  src={logo}
  alt="Tcheoto Logo"
  className="absolute top-4 left-4 w-10 h-10 md:w-16 md:h-16 object-contain z-50 animate-float logo-responsive"  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: 'easeInOut' }}
/>

      {/* Bloc gauche */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight text-white mb-4 text-glow animate-glow"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Roosevelt Berenger Tcheoto
        </motion.h1>

        {/* Texte animé */}
        <motion.div
          className="text-xl md:text-3xl font-bold mb-6 h-[60px] md:h-[70px] transform transition-transform duration-300 typewriter-3d"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="typewriter-text">{currentText}</span>
          <span className="typewriter-cursor">|</span>
        </motion.div>

        {/* Icônes réseaux sociaux */}
        <motion.div
          className="flex justify-center md:justify-start gap-6 text-3xl text-white mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="https://wa.me/237654922732" target="_blank" rel="noreferrer">
            <FaWhatsapp className="hover:text-emerald-400 transition-transform hover:scale-125 duration-300" />
          </a>
          <a href="https://www.facebook.com/share/1JBLXVcFQu/" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-500 transition-transform hover:scale-125 duration-300" />
          </a>
          <a href="https://t.me/ROOSEVELT" target="_blank" rel="noreferrer">
            <FaTelegram className="hover:text-sky-400 transition-transform hover:scale-125 duration-300" />
          </a>
          <a href="mailto:roosevelt.tbr@gmail.com">
            <FaEnvelope className="hover:text-red-400 transition-transform hover:scale-125 duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Photo de profil */}
      <motion.div
  className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 z-10 order-first md:order-last"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  <img
    src={heroImage}
    alt="Roosevelt Berenger Tcheoto"
  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-glow border-4 border-white transform hover:scale-105 transition-transform duration-300 animate-float profile-photo"  />
</motion.div>


      {/* Arrière-plan décoratif avec des bulle deau flottante sur  lecran */}
    </section>
  );
};

export { Home };
