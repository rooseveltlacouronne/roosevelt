import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ReactPlayer from "react-player";
import "./Gallery.css";

const galleryItems = [
  ...Array.from({ length: 45 }, (_, i) => ({
    type: "image",
    src: `/gallery/image${i + 1}.jpeg`, // ✅ CHEMIN PUBLIC CORRECT
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    type: "video",
    src: `/videos/video${i + 1}.mp4`, // ✅ CHEMIN PUBLIC CORRECT
  })),
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openItem = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  return (
    <section
      id="gallery"
      className="min-h-screen bg-gradient-to-br from-[#080b12] via-[#0f1a2b] to-[#16263b] py-24 px-6 md:px-20 text-white relative overflow-hidden"
    >
      <div className="animated-background" />

      <div className="absolute w-[60vw] h-[60vw] bg-rose-500/20 rounded-full top-[-30%] left-[-20%] blur-3xl animate-pulse" />
      <div className="absolute w-[70vw] h-[70vw] bg-cyan-600/20 rounded-full bottom-[-30%] right-[-15%] blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600 drop-shadow-[0_0_20px_rgba(255,0,255,0.4)]"
        >
          Présentation 
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="gallery-card"
              onClick={() => openItem(index)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="design"
                  className="w-full h-60 object-cover hover:brightness-110"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-60 object-cover"
                  muted
                  loop
                  playsInline
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => e.target.pause()}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {isOpen && galleryItems[activeIndex].type === "image" && (
        <Lightbox
          image={galleryItems[activeIndex].src}
          title="Design en Plein Écran"
          onClose={() => setIsOpen(false)}
        />
      )}

      {isOpen && galleryItems[activeIndex].type === "video" && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-5xl aspect-video">
            
            <button
              className="absolute top-4 right-4 text-white text-xl bg-red-500 p-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export { Gallery };
