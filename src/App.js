import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
