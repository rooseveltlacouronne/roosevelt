
// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Connectons-nous</h2>
        <p className="footer-description">
          Merci de votre visite. N'hésitez pas à me contacter pour toute collaboration, question ou projet ambitieux.
        </p>

        <div className="footer-socials">
          <a href="https://wa.me/2376XXXXXXXX" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/votreprofil" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://t.me/votreprofil" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://linkedin.com/in/votreprofil" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>

        <p className="footer-copy">© 2025 Roosevelt TBR. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export { Footer };

