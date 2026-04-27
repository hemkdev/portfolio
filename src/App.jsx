import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [value, setValue] = useState(false);
  // false = dark mode, true = light mode

  return (
    <div
      className={`min-h-screen ${value ? "bg-white text-[#111111]" : "bg-[#111111] text-[#EDEDEA]"} transition-colors duration-300`}
    >
      <Navbar value={value} setValue={setValue} />
      <Hero />
      <About />
      <Projects value={value} />
    </div>
  );
}

export default App;