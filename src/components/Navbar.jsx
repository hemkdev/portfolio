import React from "react";

function Navbar({ value, setValue }) {
  const toggleTheme = () => setValue(!value);

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-sm transition-colors duration-300 ${
        value
          ? "border-gray-100 bg-white/90"
          : "border-white/[0.08] bg-[#111111]/90"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-4">
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <a
              href="#about"
              className={`transition-opacity duration-200 hover:opacity-100 ${value ? "opacity-60" : "opacity-50"}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`transition-opacity duration-200 hover:opacity-100 ${value ? "opacity-60" : "opacity-50"}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`transition-opacity duration-200 hover:opacity-100 ${value ? "opacity-60" : "opacity-50"}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`transition-opacity duration-200 hover:opacity-100 ${value ? "opacity-60" : "opacity-50"}`}
            >
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className={`cursor-pointer rounded-full border px-3 py-1 text-xs transition-colors duration-300 ${
                value
                  ? "border-gray-300 hover:bg-gray-100"
                  : "border-white/20 hover:bg-white/10"
              }`}
            >
              {value ? "Dark" : "Light"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
