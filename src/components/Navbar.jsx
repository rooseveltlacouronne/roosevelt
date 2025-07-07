// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Accueil", id: "home" },
    { name: "À propos", id: "about" },
    { name: "Compétences", id: "skills" },
    { name: "Projets", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Services", id: "services" },
    { name: "Galerie", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="navbar">
      {/* Logo animé */}
      <motion.div
        className="navbar-logo"
        initial={{ opacity: 0, scale: 0.7, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src={logo} alt="Logo" />
        <span>TBRC</span>
      </motion.div>

      {/* Menu Desktop */}
      <nav className="navbar-menu">
        <ul>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <a href={`#${item.id}`}>{item.name}</a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Icône menu mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${item.id}`} onClick={toggleMenu}>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navbar };
