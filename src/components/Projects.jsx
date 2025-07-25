import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import trombinoscopeReact from "../assets/lotties/trombinoscopeReact.json";
import trombinoscopeFlutter from "../assets/lotties/trombinoscopeFlutter.json";
import ecommerceFlutter from "../assets/lotties/ecommerceFlutter.json";
import securityApp from "../assets/lotties/securityApp.json";
import sdkOrange from "../assets/lotties/sdkOrange.json";
import securityAp from "../assets/lotties/imu.json";
import securityA from "../assets/lotties/mar.json";

const projects = [
  {
    name: "Trombinoscope React PWA",
    animation: trombinoscopeReact,
    description:
      "Application Web PWA développée avec React illustrant un trombinoscope ultra interactif et professionnel.",
    link: "https://trombinosco.netlify.app/",
    isMobile: false,
  },
  {
    name: "Application Mobile De Simulation De Combat ",
    animation: securityAp,
    description:
      "Application mobile développée sous Flutter, modélisant de manière dynamique les interactions immuno-pathogéniques entre virus, bactéries et anticorps au sein de l’organisme.",
    apk: "/apks/immuno.apk",
    isMobile: true,
  },
  {
    name: "Trombinoscope Flutter PWA",
    animation: trombinoscopeFlutter,
    description:
      "Version Flutter de l'application Web PWA illustrant un trombinoscope, avec animations fluides et gestion locale avancée.",
    link: "https://trombi-pro.netlify.app/",
    isMobile: false,
  },
  {
    name: "E-commerce Flutter Web",
    animation: ecommerceFlutter,
    description:
      "Site Web d'e-commerce moderne conçu avec Flutter Web, intégrant un design 3D et des interactions immersives.",
    link: "https://marketsho.netlify.app/",
    isMobile: false,
  },
  {
    name: "Application Mobile de Sécurité Flutter",
    animation: securityApp,
    description:
      "Application mobile développée en Flutter assurant la sécurité intelligente des utilisateurs et de leurs appareils.",
    apk: "/apks/base.apk",
    isMobile: true,
  },
  {
    name: "SDK Orange Money",
    animation: sdkOrange,
    description:
      "SDK personnel pour l'intégration de transferts Orange Money, publié officiellement sur pub.dev.",
    link: "https://pub.dev/packages/om_sdk",
    isMobile: false,
  },
  {
    name: "Application Mobile De Gestion Des Rations Alimentaires ",
    animation: securityA,
    description:
      "Application mobile conçue sous React, intégrant la numérisation intelligente des carnets culinaires, l’optimisation algorithmique des achats, et l’assistance contextuelle d’une intelligence artificielle pour une orchestration efficiente des processus culinaires. ",
    apk: "/apks/marcher.apk",
    isMobile: true,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black px-6 md:px-20 py-24 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 blur-3xl opacity-25 bg-[radial-gradient(circle_at_50%_30%,_var(--tw-gradient-stops))] from-fuchsia-500 via-emerald-500 to-transparent animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-16 text-center text-fuchsia-400 drop-shadow-2xl tracking-wide"
        >
          Mes Projets Réalisés
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="bg-white/5 p-6 rounded-3xl backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:scale-[1.03] transition-transform duration-500 hover:shadow-[0_0_80px_rgba(0,255,200,0.3)]"
            >
              <h3 className="text-2xl font-bold text-emerald-300 mb-4 text-center drop-shadow-xl">
                {project.name}
              </h3>
              <div className="h-48 md:h-64 flex items-center justify-center">
                <Lottie animationData={project.animation} loop={true} className="w-full h-full" />
              </div>
              <p className="text-gray-300 text-sm md:text-base mt-4 mb-6 text-center leading-relaxed">
                {project.description}
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-emerald-500 text-white font-semibold shadow-xl hover:bg-emerald-600 transition duration-300 backdrop-blur-lg"
                  >
                    Visiter le site
                  </a>
                )}
                {project.apk && (
                  <a
                    href={project.apk}
                    download
                    className="px-6 py-2 rounded-full bg-fuchsia-500 text-white font-semibold shadow-xl hover:bg-fuchsia-600 transition duration-300 backdrop-blur-lg"
                  >
                    Télécharger APK
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
