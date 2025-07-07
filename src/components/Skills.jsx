import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ title, percent, color }) => {
  return (
    <div className="w-full mb-10">
      <div className="flex justify-between mb-2">
        <span className="text-lg md:text-2xl font-bold text-emerald-400 drop-shadow-md tracking-wide">
          {title}
        </span>
        <span className="text-sm md:text-lg font-semibold text-white">{percent}%</span>
      </div>
      <div className="relative w-full h-6 md:h-8 bg-gray-800 rounded-full overflow-hidden shadow-lg ring-1 ring-emerald-600/30">
        <motion.div
          className="h-full rounded-full shadow-md shadow-emerald-500/40"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black px-6 md:px-20 py-24 text-white relative overflow-hidden"
    >
      {/* Décor 3D Visuel */}
      <div className="absolute inset-0 z-0 blur-3xl opacity-25 bg-[radial-gradient(circle_at_40%_20%,_var(--tw-gradient-stops))] from-emerald-500 via-fuchsia-500 to-transparent animate-spin-slow"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-16 text-center text-emerald-400 drop-shadow-2xl tracking-wide"
        >
          Compétences Techniques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colonne 1 */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
            <SkillBar title="Développement React (Web, Mobile, Hybride, Desktop)" percent={80} color="#10b981" />
            <SkillBar title="Maintenance Informatique (Ordinateurs & Téléphones)" percent={65} color="#f59e0b" />
            <SkillBar title="Développement Web (HTML, CSS, JavaScript)" percent={90} color="#3b82f6" />
            <SkillBar title="Développement Flutter (Web, Mobile, Hybride, Desktop)" percent={85} color="#8b5cf6" />
            <SkillBar title="Développement PHP Web" percent={90} color="#ef4444" />
            <SkillBar title="Développement Wordpress" percent={70} color="#f59e0b" />

          </motion.div>

          {/* Colonne 2 */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
            <SkillBar title="Design avec Canva" percent={100} color="#22d3ee" />
            <SkillBar title="Design avec Photoshop" percent={70} color="#eab308" />
            <SkillBar title="Design avec Figma" percent={90} color="#6366f1" />
            <SkillBar title="Design avec Balsamiq" percent={95} color="#84cc16" />
            <SkillBar title="Secrétariat Bureautique (Word, Excel, PowerPoint, Publisher)" percent={100} color="#14b8a6" />
            <SkillBar title="Gestion de Projet" percent={80} color="#eab308" />

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 text-sm md:text-base text-gray-300 text-center bg-white/10 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-2xl"
        >
          <p className="mb-2">
            <span className="text-emerald-400 font-semibold">Langages :</span> C, C++, Java, Kotlin, C#, Dart, JavaScript, TypeScript, HTML, CSS, PHP.
          </p>
          <p className="mb-2">
            <span className="text-emerald-400 font-semibold">Outils :</span> Git, VS Code, Android Studio.
          </p>
          <p>
            <span className="text-emerald-400 font-semibold">Bases de données :</span> Firebase, SQLite, MySQL, Oracle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export { Skills };

