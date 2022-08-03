import React from "react";
import Home from "./Portfolio/Home";
import Abou from "./Portfolio/Abou";
import Structure from "./Portfolio/Structure/Structure";
import Service from "./Portfolio/Services/Service";
import Projects from "./Portfolio/Projects";
import Contact from "./Portfolio/Contact";
import Footer from "./Portfolio/Footer";

const App = () => {
  return (
    <div>
      <Structure />
      <Home />
      <Abou />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
