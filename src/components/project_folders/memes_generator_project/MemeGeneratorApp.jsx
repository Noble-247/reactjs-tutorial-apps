import React from "react";
import "./MemeGeneratorApp.css";
import Header from "./meme_generator_components/Header";
import Meme from "./meme_generator_components/Meme";
import Footer from "./meme_generator_components/Footer";

function MemeGeneratorApp() {
  return (
    <div>
      <Header />
      <Meme />
      <Footer />
    </div>
  );
}

export default MemeGeneratorApp;
