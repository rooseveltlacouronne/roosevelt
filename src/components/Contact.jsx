import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import contactAnimation from "../assets/lotties/contact.json";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zwtnxrk", // ID de service EmailJS
        "template_94d0rlh", // ID du template EmailJS
        formRef.current,
        "pXvU4f9pTu0msVHAQ" // Clé publique EmailJS
      )
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Erreur envoi email:", err);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      {/* Fond 3D animé */}
      <div className="contact-background-3d" />

      {/* Titre animé */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="contact-title"
      >
        Contactez-moi
      </motion.h2>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animation Lottie */}
        <div className="contact-animation-wrapper" aria-hidden="true">
          <Lottie
            animationData={contactAnimation}
            loop={true}
            className="contact-lottie"
          />
        </div>

        {/* Formulaire de contact */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          noValidate
        >
          <div className="input-group">
            <FaUser className="input-icon" aria-hidden="true" />
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" aria-hidden="true" />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="input-field"
            />
          </div>

          <div className="input-group textarea-group">
            <FaPhone className="input-icon" aria-hidden="true" />
            <textarea
              name="message"
              rows="5"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              required
              className="input-field textarea-field"
            />
          </div>

          {/* Bouton envoyer */}
          <button
            type="submit"
            className="btn-submit"
            aria-label="Envoyer le message"
            disabled={!form.name || !form.email || !form.message}
          >
            Envoyer
          </button>

          {/* Message de succès */}
          {sent && (
            <motion.p
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              role="alert"
            >
              ✅ Message envoyé avec succès !
            </motion.p>
          )}

          {/* Réseaux sociaux */}
          <div className="contact-socials" aria-label="Réseaux sociaux">
            <a
              href="https://wa.me/237654922732"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/share/1JBLXVcFQu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://t.me/ROOSEVELT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="social-icon telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.linkedin.com/in/berenger-roosevelt-tcheoto-9b5725371"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export { Contact };
