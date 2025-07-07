
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import webDevAnim from "../assets/lotties/webdev.json";
import mobileDevAnim from "../assets/lotties/mobiledev.json";
import designAnim from "../assets/lotties/design.json";
import maintenanceAnim from "../assets/lotties/maintenance.json";

const services = [
  {
    title: "Développement Web",
    animation: webDevAnim,
    description:
      "Conception de sites web modernes, dynamiques, accessibles, adaptatifs, intégrant les dernières technologies pour une expérience utilisateur exceptionnelle.",
    contact: "https://www.linkedin.com/in/berenger-roosevelt-tcheoto-9b5725371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "Développement Mobile",
    animation: mobileDevAnim,
    description:
      "Applications mobiles performantes, fluides, maintenables, et sécurisées avec Flutter et React Native. Compatible iOS, Android et PWA.",
    contact: "https://www.linkedin.com/in/berenger-roosevelt-tcheoto-9b5725371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "Design Graphique & UI/UX",
    animation: designAnim,
    description:
      "Conception de visuels originaux (flyers, affiches, cartes) et interfaces numériques (maquettes, wireframes) avec cohérence et innovation.",
    contact: "https://www.linkedin.com/in/berenger-roosevelt-tcheoto-9b5725371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "Maintenance Informatique",
    animation: maintenanceAnim,
    description:
      "Maintenance préventive, corrective et prédictive des systèmes informatiques, assurant fiabilité, sécurité et pérennité du matériel.",
    contact: "https://www.linkedin.com/in/berenger-roosevelt-tcheoto-9b5725371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b from-[#090e14] via-[#131e2a] to-[#1e2d3f] text-white py-24 px-6 md:px-20 overflow-hidden relative"
    >
      <div className="absolute w-[60vw] h-[60vw] bg-indigo-500/20 rounded-full top-[-30%] left-[-20%] blur-3xl animate-ping" />
      <div className="absolute w-[70vw] h-[70vw] bg-fuchsia-600/20 rounded-full bottom-[-30%] right-[-15%] blur-3xl animate-ping" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]"
        >
          Services Premium Offerts
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.3 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,200,255,0.1)] hover:shadow-[0_0_80px_rgba(0,200,255,0.3)] transition-all duration-700 hover:scale-[1.03]"
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">
                {service.title}
              </h3>
              <div className="h-64 flex items-center justify-center">
                <Lottie
                  animationData={service.animation}
                  loop={true}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-gray-300 mt-4 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href={service.contact}
                  className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <FaLinkedin className="text-xl animate-bounce" /> Me Contacter
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };
