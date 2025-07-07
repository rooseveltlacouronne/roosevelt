import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpeg";
import './about.css'; // ✅ IMPORT DU CSS ICI

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black px-6 md:px-20 py-20 text-white relative flex flex-col gap-10 items-center justify-center overflow-hidden"
    >
      {/* Fond radial 3D flou */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent blur-3xl z-0 animate-pulse"></div>

      {/* ✅ Bulles flottantes */}
      <div className="about-bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Titre */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-emerald-400 drop-shadow-glow z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        À propos de moi
      </motion.h2>

      {/* Contenu principal : photo + texte */}
      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Photo */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="Roosevelt Berenger Tcheoto"
            className="w-72 h-72 md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-glow border-glow transform hover:scale-105 transition duration-700 animate-float"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-lg md:text-xl leading-relaxed text-gray-200 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl">
            <p className="mb-4">
              Je suis <span className="text-emerald-300 font-semibold">Roosevelt Berenger Tcheoto</span>, étudiant actuellement promu en <span className="text-emerald-400 font-semibold">Licence 3 ICT4D Géni-Logiciel</span> à l’Université de Yaoundé I, passionné de technologies numériques.
            </p>
            <p className="mb-4">
              Fondateur de la start-up <span className="text-emerald-400 font-semibold">Global Digital Technology</span> et PDG de <span className="text-emerald-300 font-semibold">Excellentia Corporation</span>, je promeus l'innovation, la digitalisation inclusive et l'excellence académique.
            </p>
            <p className="mb-4">
              Mes domaines d’expertise incluent : <span className="text-emerald-400 font-semibold">développement web/mobile</span>, <span className="text-emerald-400 font-semibold">cybersécurité</span>, <span className="text-emerald-400 font-semibold">design (graphique/UI/UX)</span> et <span className="text-emerald-400 font-semibold">entrepreneuriat technologique</span>.
            </p>
            <p>
              Je vous invite a parcourir mon portfolio interactif pour découvrir mon univers numérique, élégant et immersif.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { About };
