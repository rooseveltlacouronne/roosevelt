
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import canvaVideo from "../assets/canva_certification.mp4";

const certifications = [
  {
    title: "Certification en Maintenance Informatique",
    image: "/certifications/maintenance.jpeg",
    description:
      "Attestation validant mes compétences en maintenance avancée d’ordinateurs et de smartphones, incluant diagnostic matériel et logiciel.",
    type: "image",
  },
  {
    title: "Certification en Développement Web",
    image: "/certifications/web.jpeg",
    description:
      "Formation intensive sur les langages HTML, CSS, JavaScript, PHP avec des projets pratiques professionnels.",
    type: "image",
  },
  {
    title: "Certification Pratique Bureautique I (Word & PowerPoint)",
    image: "/certifications/bureautique1.jpeg",
    description:
      "Maîtrise professionnelle de Microsoft Word et PowerPoint pour la création de documents et de présentations de haute qualité.",
    type: "image",
  },
  {
    title: "Certification Pratique Bureautique II (Excel, Publisher)",
    image: "/certifications/bureautique2.jpeg",
    description:
      "Perfectionnement en Excel et Publisher pour la gestion de tableaux complexes, de bases de données et de publications professionnelles.",
    type: "image",
  },
  {
    title: "Certification Canva - 100+ Réalisations Graphiques",
    video: canvaVideo,

    description:
      "Reconnaissance officielle de plus de 100 créations graphiques sur Canva avec une expertise UI/UX avancée.",
    type: "video",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 md:px-20 py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[80vw] h-[80vw] bg-pink-500 opacity-10 rounded-full top-[-40%] left-[10%] blur-3xl animate-pulse" />
        <div className="absolute w-[70vw] h-[70vw] bg-cyan-500 opacity-10 rounded-full bottom-[-30%] right-[5%] blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 drop-shadow-2xl"
        >
          Mes Certifications Professionnelles
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(100,200,255,0.3)] hover:scale-[1.04] transition duration-700 ease-in-out cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
                {cert.title}
              </h3>
              <div className="rounded-xl overflow-hidden shadow-inner border border-white/10">
                {cert.type === "image" ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-700 ease-in-out"
                    onClick={() => window.open(cert.image, "_blank")}
                  />
                ) : (
                  <video
                    src={cert.video}
                    controls
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-110 transition duration-700 ease-in-out"
                  />
                )}
              </div>
              <p className="text-gray-300 text-sm mt-4 text-center leading-relaxed">
                {cert.description}
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://wa.me/237654922732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white font-semibold shadow-lg transition duration-500 hover:scale-105"
                >
                  <FaWhatsapp className="text-lg animate-pulse" /> Me contacter sur WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Certifications };
