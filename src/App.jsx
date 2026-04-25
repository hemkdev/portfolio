import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [value, setValue] = useState(false);

  return (
    <div
      className={`min-h-screen ${value ? "bg-white text-black" : "bg-black text-white"} transition-colors duration-300`}
    >
      <Navbar value={value} setValue={setValue} />
      <Hero value={value} />
      <About />
      <Projects />
    </div>
  );
}

export default App;