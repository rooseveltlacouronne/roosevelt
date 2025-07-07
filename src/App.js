import React from "react";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar /> 
      <Home /> 
      <About /> 
      <Skills />
      <Projects />
      <Certifications />
      <Services />
      <Gallery />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
