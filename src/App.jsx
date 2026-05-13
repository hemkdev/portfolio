import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [value, setValue] = useState(false);
  // false = dark mode, true = light mode

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        value ? "bg-white text-[#111111]" : "bg-[#111111] text-[#EDEDEA]"
      }`}
    >
      <Navbar value={value} setValue={setValue} />
      <Hero value={value} />
      <About value={value} />
      <Skills value={value} />
      <Experience value={value} />
      <Education value={value} />
      <Projects value={value} />
      <Contact value={value} />
    </div>
  );
}

export default App;
